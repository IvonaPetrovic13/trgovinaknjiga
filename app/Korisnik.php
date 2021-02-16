<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Korisnik extends Model
{
    protected $table = "korisnik";
    public $timestamps = false;

    public function korisnikoveKnjige()
    {
        return $this->hasMany('App\Knjiga', 'korisnik_id', 'id');
    }
}
