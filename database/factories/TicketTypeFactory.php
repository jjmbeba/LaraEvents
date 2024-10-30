<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\TicketType;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketTypeFactory extends Factory
{
    protected $model = TicketType::class;

    public function definition(): array
    {
        return [
            'event_id' => Event::inRandomOrder()->first(),
            'type_name' => fake()->randomElement(['regular', 'vip', 'vvip']),
            'quantity' => fake()->numberBetween(10, 25),
            'price' => fake()->numberBetween(500, 2500),
            'available_quantity' => fake()->numberBetween(0,9)
        ];
    }
}
