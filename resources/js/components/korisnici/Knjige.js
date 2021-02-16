import React, { Component } from "react";
import ReactDOM from "react-dom";
import Knjiga from "./Knjiga";

export default class Knjige extends Component {
    constructor(props) {
        super(props);

        this.state = {
            knjige: [],
            idKorisnik: this.props.korisnikID,
            korisnik: this.props.korisnik
        };
        this.getujKnjige();
        this.deleteKnjiga = this.deleteKnjiga.bind(this);
    }

    deleteKnjiga(id) {
        this.setState(bivsiState => {
            return { knjige: bivsiState.knjige.filter(k => k.id != id) };
        });
    }

    prikaziSveKnjige() {
        return this.state.knjige.map(knjiga => {
            let id = knjiga.id;
            return (
                <Knjiga
                    deleteKnjiga={this.deleteKnjiga}
                    key={id}
                    knjiga={knjiga}
                    korisnik={this.state.korisnik}
                />
            );
        });
    }

    getujKnjige() {
        axios
            .get(
                "http://127.0.0.1:8000/knjiga/ucitaj?user_id=" +
                    this.state.idKorisnik
            )
            .then(res => {
                const knjige = res.data.knjige;
                this.setState({ knjige: knjige });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="card">{this.prikaziSveKnjige()}</div>
            </div>
        );
    }
}

if (document.getElementById("knjige")) {
    ReactDOM.render(<Knjige />, document.getElementById("knjige"));
}
