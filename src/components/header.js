import { Component } from 'react';
import logo from './logo2.png';
import './CSS/header.css';

class Header extends Component {
    render() {
        return (
        <header  className="container-fluid header p-0">
                <div className="row">
                    <div className="col-sm-3 logo">
                        <img id="logo" src={logo} alt="Logo" />
                    </div>
                    <div className="col-sm-9 heading p-4">
                        <h1 className="big-header">
                            Create your own data in 3 languages and 4 different format on the most used data types
                        </h1>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
        </header>
        )
    }
}


export default Header;