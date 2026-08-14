<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shark extends Model
{
    use HasUuids; //trait for uuid genration
    use HasFactory;

    protected $primaryKey = 'uuid'; // "when I call find(), where(), etc. — use THIS column"
    protected $keyType = 'string';
    public $incrementing = false; //uuid is not auto-incrementing

    protected $fillable = [
        'name',
        'species',
    ];
}
