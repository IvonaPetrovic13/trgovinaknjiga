<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KorisnikSeeder extends Seeder
{

    public static $brojKorisnika = 6;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < KorisnikSeeder::$brojKorisnika - 1; $i++) {

            DB::table('korisnik')->insert([
                'ime_prezime' => KorisnikSeeder::randomIme(),
                'broj_telefona' => "06" . rand(1000000, 9999999),
            ]);
        }
    }


    // Samo lista imena i prezimena ljudi (preuzeto sa https://thisinterestsme.com/generate-random-names-php/)
    public static function randomIme()
    {
        //PHP array containing forenames.
        $names = array(
            'Christopher',
            'Ryan',
            'Ethan',
            'John',
            'Zoey',
            'Sarah',
            'Michelle',
            'Samantha',
        );

        //PHP array containing surnames.
        $surnames = array(
            'Walker',
            'Thompson',
            'Anderson',
            'Johnson',
            'Tremblay',
            'Peltier',
            'Cunningham',
            'Simpson',
            'Mercado',
            'Sellers'
        );

        //Generate a random forename.
        $random_name = $names[mt_rand(0, sizeof($names) - 1)];

        //Generate a random surname.
        $random_surname = $surnames[mt_rand(0, sizeof($surnames) - 1)];

        //Combine them together and print out the result.
        return $random_name . ' ' . $random_surname;
    }
}
