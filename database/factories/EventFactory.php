<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->words(5, true),
            'description' => fake()->paragraphs(1, true),
            'location' => fake()->locale(),
            'start_time' => fake()->dateTimeBetween('+10 days', '+15 days'),
            'end_time' => fake()->dateTimeBetween('+16 days', '+18 days'),
            'user_id' => User::where('role', 'organizer')->inRandomOrder()->first()
        ];
    }
}
