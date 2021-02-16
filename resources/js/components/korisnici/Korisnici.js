import React, { Component } from "react";
import ReactDOM from "react-dom";
import Korisnik from "./Korisnik";
import Navbar from "../Navbar";

export default class Korisnici extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nizKorisnika: []
        };
        this.getujKorisnike();
    }

    getujKorisnike() {
        axios.get("http://127.0.0.1:8000/korisnik/ucitaj").then(res => {
            const korisnici = res.data.korisnici;
            this.setState({ nizKorisnika: korisnici });
        });
    }

    prikaziSveKorisnike() {
        return this.state.nizKorisnika.map(korisnik => {
            let id = korisnik.id;
            return <Korisnik key={id} korisnik={korisnik} />;
        });
    }

    render() {
        return [
            <Navbar clicked="korisnici" />,
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div
                                style={{ backgroundColor: "#598381" }}
                                className="card-header"
                            >
                                Prodavci knjiga:
                            </div>
                            {this.prikaziSveKorisnike()}
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}

if (document.getElementById("korisnici")) {
    ReactDOM.render(<Korisnici />, document.getElementById("korisnici"));
}
