<?php

namespace App\Services;

use App\Models\User;

class OrganizerService
{
    public function __construct()
    {
    }

    public function getTotalTicketsSold(User $user)
    {
        return $user->createdEvents()
            ->with('ticketTypes.tickets.purchase')
            ->get()
            ->flatMap(function ($event) {
                return $event->ticketTypes->flatMap(function ($ticketType) {
                    return $ticketType->tickets->filter(function ($ticket) {
                        return $ticket->purchase && $ticket->purchase->payment_status === 'completed';
                    });
                });
            })
            ->count();
    }
}
