<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use App\Services\EventService;
use App\Services\OrganizerService;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $eventService;
    protected $organizerService;

    public function __construct(EventService $eventService, OrganizerService $organizerService)
    {
        $this->eventService = $eventService;
        $this->organizerService = $organizerService;
    }


    public function index()
    {
        $events = User::first()->createdEvents()->with('ticketTypes.tickets')->get();

        $eventsWithPurchaseCounts = [];

        foreach ($events as $event){
            $eventsWithPurchaseCounts[] = [
                'event' => $event,
                'purchaseCount' => $this->eventService->getPurchasedTicketsCount($event),
                'capacity' => $this->eventService->getEventQuantity($event)
            ];
        }

        $totalTicketsSold = $this->organizerService->getTotalTicketsSold(User::first());

        return Inertia::render('Dashboard/Index', [
            'eventsWithPurchaseCounts' => $eventsWithPurchaseCounts,
            'totalTicketsSold' => $totalTicketsSold
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
