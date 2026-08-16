<?php

namespace App\Http\Controllers;

use App\Http\Resources\SharkResource;
use App\Models\Shark;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SharkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render(
            'Index',
            ['sharks' => SharkResource::collection(Shark::all())->resolve()]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $uuid)
    {
        return Inertia::render('Edit', [
            'shark' => new SharkResource(Shark::findOrFail($uuid)),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $uuid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $uuid)
    {
        //
    }
}
