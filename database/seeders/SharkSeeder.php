<?php

namespace Database\Seeders;

use App\Models\Shark;
use Illuminate\Database\Seeder;

class SharkSeeder extends Seeder
{
    public function run(): void
    {
        Shark::factory()->count(10)->create();
    }
}
