<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@pocetna');
Route::get('/korisnici', 'MainController@korisnici');


Route::get('/korisnik/ucitaj', 'KorisnikController@getuj_korisnike');
Route::get('/knjiga/ucitaj', 'KnjigaController@getuj_knjige_po_user_id');
Route::get('/knjiga/ucitaj-sve', 'KnjigaController@getuj_sve_knjige');
Route::put('/knjiga/izmena', 'KnjigaController@smanji_broj_na_stanju');
Route::post('/knjiga/dodaj', 'KnjigaController@create_nova_knjiga_korisnika');
Route::delete('/knjiga/delete', 'KnjigaController@skini_knjigu_sa_stanja');
