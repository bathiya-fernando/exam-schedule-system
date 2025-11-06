<?php

namespace Database\Seeders;

use App\Models\Schedule;
use App\Models\Candidate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(base_path('..\exam-schedule-data.json'));
        $data = json_decode($json, true);

        foreach ($data as $item) {
            Schedule::create([
                'id' => $item['ID'],
                'title' => $item['title'],
                'status' => $item['status'],
                'datetime' => $item['datetime'],
                'language' => $item['language'],
                'country' => $item['location']['country'],
                'latitude' => $item['location']['latitude'],
                'longitude' => $item['location']['longitude'],
            ]);

            foreach ($item['candidates'] as $cand) {
                Candidate::create([
                    'name' => $cand,
                    'schedule_id' => $item['ID'],
                ]);
            }
        }
    }
}
