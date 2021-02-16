<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function korisnici()
    {
        return view('korisnici');
    }
    public function pocetna()
    {
        return view('pocetna');
    }
}
