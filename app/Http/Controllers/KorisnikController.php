<?php

namespace App\Http\Controllers;

use App\Korisnik;
use Illuminate\Http\Request;

class KorisnikController extends Controller
{
    public function getuj_korisnike()
    {
        $korisnici = Korisnik::all();

        return response()->json([
            'korisnici' => $korisnici
        ]);
    }
}
