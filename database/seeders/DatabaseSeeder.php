<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Purchase;
use App\Models\Ticket;
use App\Models\TicketType;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        Event::factory(20)->hasTicket_types(3)->create();

        $user = User::where('role', 'attendee')->inRandomOrder()->first();
        Purchase::factory(10, [
            'user_id' => $user
        ])->has(Ticket::factory(2, [
            'user_id' => $user
        ]), 'tickets')->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
    }
}
