<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Knjiga extends Model
{
    protected $table = "knjiga";
    public $timestamps = false;

    public function korisnik()
    {
        return $this->belongsTo('App\Korisnik', 'korisnik_id', 'id');
    }
}
