import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Korisnik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            knjiga: this.props.knjiga,
            korisnik: this.props.korisnik
        };

        this.handleKupovina = this.handleKupovina.bind(this);
        this.obrisiKnjigu = this.obrisiKnjigu.bind(this);
    }

    handleKupovina() {
        alert(
            "Uspesno ste kupili knjigu! Za vise informacija, pozovite " +
                this.state.korisnik.broj_telefona +
                "."
        );

        axios
            .put(
                "http://127.0.0.1:8000/knjiga/izmena?knjiga_id=" +
                    this.state.knjiga.id
            )
            .then(res => {
                let knjiga = this.state.knjiga;
                knjiga.broj_na_stanju--;
                this.setState({ knjiga: knjiga });
            });
    }
    obrisiKnjigu() {
        axios
            .delete(
                "http://127.0.0.1:8000/knjiga/delete?knjiga_id=" +
                    this.state.knjiga.id
            )
            .then(res => {
                this.props.deleteKnjiga(this.state.knjiga.id);
            });
    }

    render() {
        return (
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col">"{this.state.knjiga.naslov}"</div>
                        <div className="col">{this.state.knjiga.autor}</div>
                        <div className="col">
                            {this.state.knjiga.broj_na_stanju}
                        </div>
                        <div className="col">
                            <button
                                onClick={this.handleKupovina}
                                className="btn btn-primary"
                            >
                                Kupi
                            </button>
                        </div>
                        <div className="col">
                            <button
                                onClick={this.obrisiKnjigu}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("korisnik")) {
    ReactDOM.render(<Korisnik />, document.getElementById("korisnik"));
}
