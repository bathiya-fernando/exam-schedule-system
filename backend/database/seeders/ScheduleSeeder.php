<?php

namespace Database\Seeders;

use App\Models\Schedules;
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
        $json = File::get(database_path('data/exam-schedule-data.json'));
        $data = json_decode($json, true);

        foreach ($data as $item) {
            $schedule =  Schedules::create([
                'title' => $item['title'],
                'status' => $item['status'],
                'datetime' => $item['datetime'],
                'language' => $item['language'],
                'country' => $item['location']['country'],
                'latitude' => $item['location']['latitude'],
                'longitude' => $item['location']['longitude'],
            ]);

            foreach ($item['candidates'] as $candName) {
                $candidate = Candidate::firstOrCreate(['name' => $candName]);
                $schedule->candidates()->syncWithoutDetaching([$candidate->id]);
            }
        }
    }
}
