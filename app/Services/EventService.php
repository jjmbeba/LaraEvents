<?php

namespace App\Services;

use App\Models\Event;

class EventService
{
    public function __construct()
    {
    }

    public function getPurchasedTicketsCount(Event $event){
        return $event->ticketTypes->reduce(function ($count, $ticketType) {
            return $count + $ticketType->tickets
                    ->filter(fn ($ticket) => $ticket->purchase && $ticket->purchase->payment_status === 'completed')
                    ->count();
        }, 0);
    }

    public function getEventQuantity(Event $event){
        return $event->ticketTypes->reduce(function ($count, $ticketType){
            return $count + $ticketType->quantity;
        },0);
    }
}
