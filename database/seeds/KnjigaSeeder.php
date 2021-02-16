<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\DB;

class KnjigaSeeder extends Seeder
{


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 30; $i++) {

            DB::table('knjiga')->insert([
                'naslov' => Str::random(6),
                'autor' => KorisnikSeeder::randomIme(),
                'korisnik_id' => rand(1, KorisnikSeeder::$brojKorisnika),
                'broj_na_stanju' => rand(1, 30)
            ]);
        }
    }
}
