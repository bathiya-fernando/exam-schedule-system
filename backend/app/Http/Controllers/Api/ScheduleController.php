<?php

namespace App\Http\Controllers\Api;

use App\Models\Schedules;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScheduleController extends Controller
{
    public function index(Request $request)
    {
        $query = Schedules::query()->with('candidates');

        if ($request->has('candidate')) {
            $candidate = $request->get('candidate');
            $query->whereHas('candidates', function ($q) use ($candidate) {
                $q->where('name', 'like', "%{$candidate}%");
            });
        }

        if ($request->has('country')) {
            $query->where('country', 'like', '%' . $request->get('country') . '%');
        }

        if ($request->has('status')) {
            $query->where('status', $request->get('status'));
        }

        if ($request->has('dateFrom')) {
            $query->where('datetime', '>=', $request->get('dateFrom'));
        }
        if ($request->has('dateTo')) {
            $query->where('datetime', '<=', $request->get('dateTo'));
        }

        if ($request->get('sortBy') === 'asc') {
            $query->orderBy('title', 'asc');
        } else if ($request->get('sortBy') === 'desc') {
            $query->orderBy('title', 'desc');
        }

        $schedules = $query->get();

        return response()->json($schedules);
    }

    public function show($id)
    {
        $schedule = Schedules::with('candidates')->findOrFail($id);
        return response()->json($schedule);
    }

    public function progressStatus(Request $request, $id)
    {
        $schedule = Schedules::findOrFail($id);
        $current = $schedule->status;
        $next = $this->getNextStatus($current);

        $schedule->update(['status' => $next]);
        return response()->json(['success' => true, 'status' => $next]);
    }

    private function getNextStatus($current)
    {
        $map = [
            'Pending' => 'Started',
            'Started' => 'Finished',
            'Finished' => 'Finished'
        ];
        return $map[$current] ?? 'Pending';
    }
}
