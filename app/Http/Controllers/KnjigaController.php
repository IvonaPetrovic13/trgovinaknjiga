<?php

namespace App\Http\Controllers;

use App\Knjiga;
use App\Korisnik;
use Illuminate\Http\Request;

class KnjigaController extends Controller
{
    public function getuj_svE_knjige()
    {
        return response()->json([
            'knjige' => Knjiga::all()
        ]);
    }

    public function getuj_knjige_po_user_id(Request $request)
    {
        $user_id = $request->input('user_id');
        $knjige  = Korisnik::find($user_id)->korisnikoveKnjige()->get();

        return response()->json([
            'knjige' => $knjige
        ]);
    }
    public function create_nova_knjiga_korisnika(Request $request)
    {
        $user_id = $request->input('user_id');
        $naslov_knjige = $request->input('naslov_knjige');
        $autor_knjige = $request->input('autor_knjige');
        $broj_na_stanju = $request->input('broj_na_stanju');


        Knjiga::insert([
            'naslov' => $naslov_knjige,
            'autor' => $autor_knjige,
            'broj_na_stanju' => $broj_na_stanju,
            'korisnik_id' => $user_id,
        ]);
        return response()->json([
            'poruka' => "Uspesno dodata knjiga " . $naslov_knjige . "!"
        ]);
    }

    public function smanji_broj_na_stanju(Request $request)
    {
        $knjiga_id = $request->input('knjiga_id');
        Knjiga::where('id', $knjiga_id)->decrement("broj_na_stanju");
    }

    public function skini_knjigu_sa_stanja(Request $request)
    {
        $knjiga_id = $request->input('knjiga_id');
        Knjiga::find($knjiga_id)->delete();
    }
}
