<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Purchase>
 */
class PurchaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::where('role', 'attendee')->inRandomOrder()->first(),
            'total_price' => fake()->numberBetween(1500, 2500),
            'payment_status' => fake()->randomElement(['pending', 'completed', 'failed'])
        ];
    }
}
