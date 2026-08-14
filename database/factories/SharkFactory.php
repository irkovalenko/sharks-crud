<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

// it pairs with the Shark model and generates fake data for testing purposes so the actual seeder is just one liner

class SharkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Great White', 'Hammerhead', 'Tiger Shark', 'Bull Shark']),
            'species' => fake()->word(),
        ];
    }
}
