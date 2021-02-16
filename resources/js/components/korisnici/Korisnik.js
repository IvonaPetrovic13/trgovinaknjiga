import React, { Component } from "react";
import ReactDOM from "react-dom";
import Knjige from "./Knjige";
export default class Korisnik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            korisnik: this.props.korisnik,
            prikazaneKnjige: false,
            formaZaDodavanje: false,
            novaKnjiga: {
                naslov: "",
                autor: "",
                naStanju: 0
            }
        };
        this.prikaziKnjige = this.prikaziKnjige.bind(this);
        this.formaZaDodavanje = this.formaZaDodavanje.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    prikaziSveKorisnikoveKnjige() {
        if (this.state.prikazaneKnjige)
            return (
                <Knjige
                    key={this.state.korisnik.id * 10}
                    korisnikID={this.state.korisnik.id}
                    korisnik={this.state.korisnik}
                />
            );
    }

    prikaziKnjige() {
        this.setState({ prikazaneKnjige: !this.state.prikazaneKnjige });
    }

    formaZaDodavanje() {
        this.setState({ formaZaDodavanje: !this.state.formaZaDodavanje });
    }

    naslovChange(e) {
        let val = e.target.value;
        this.setState(bivsiState => {
            let knjiga = Object.assign({}, bivsiState.novaKnjiga);
            knjiga.naslov = val;
            return { novaKnjiga: knjiga };
        });
    }
    autorChange(e) {
        let val = e.target.value;
        this.setState(bivsiState => {
            let knjiga = Object.assign({}, bivsiState.novaKnjiga);
            knjiga.autor = val;
            return { novaKnjiga: knjiga };
        });
    }
    naStanjuChange(e) {
        let val = e.target.value;
        this.setState(bivsiState => {
            let knjiga = Object.assign({}, bivsiState.novaKnjiga);
            knjiga.naStanju = val;
            return { novaKnjiga: knjiga };
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:8000/knjiga/dodaj", {
                user_id: this.state.korisnik.id,
                naslov_knjige: this.state.novaKnjiga.naslov,
                autor_knjige: this.state.novaKnjiga.autor,
                broj_na_stanju: this.state.novaKnjiga.naStanju
            })
            .then(res => {
                alert(res.data.poruka);
            });
    }

    prikaziFormuZaDodavanje() {
        if (this.state.formaZaDodavanje)
            return (
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Naslov knjige"
                                value={this.state.novaKnjiga.naslov}
                                onChange={this.naslovChange.bind(this)}
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Autor"
                                value={this.state.novaKnjiga.autor}
                                onChange={this.autorChange.bind(this)}
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Broj na stanju"
                                value={this.state.novaKnjiga.naStanju}
                                onChange={this.naStanjuChange.bind(this)}
                            ></input>
                        </div>
                        <div className="col">
                            <input
                                type="submit"
                                className="form-control"
                                value="Dodaj"
                            ></input>
                        </div>
                    </div>
                </form>
            );
    }

    render() {
        return (
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {this.state.korisnik.ime_prezime}{" "}
                        </div>
                        <div className="col">
                            {this.state.korisnik.broj_telefona}
                        </div>
                        <div className="col">
                            <button
                                onClick={this.prikaziKnjige}
                                className="btn btn-block btn-success"
                            >
                                Pogledaj knjige
                            </button>
                            <button
                                onClick={this.formaZaDodavanje}
                                className="btn btn-block btn-secondary"
                            >
                                Dodaj knjigu
                            </button>
                        </div>
                    </div>
                    {this.prikaziSveKorisnikoveKnjige()}
                    {this.prikaziFormuZaDodavanje()}
                </div>
            </div>
        );
    }
}

if (document.getElementById("korisnik")) {
    ReactDOM.render(<Korisnik />, document.getElementById("korisnik"));
}
