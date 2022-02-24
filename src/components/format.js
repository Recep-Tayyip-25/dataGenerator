import { Component } from 'react';

import './CSS/format.css';

class Format extends Component {
    constructor(props) {
        super(props);
        this.state = {format:"csv"};
        this.props.parentCallback(this.state.format);
      }
    // Sends this.state.format to upper class 
    handleChangeFormat(e) {
        this.setState({format: e.target.value}, () => {
            this.props.parentCallback(this.state.format);
          });
    }
    render() {
        return (
            <div className='format'>
                <div className="format-header">
                    <h2>
                        DATA FORMAT
                    </h2>
                    <h4>
                        ( Select one format or we selected CSV for you )
                    </h4>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={"json"} onChange={this.handleChangeFormat.bind(this)} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        JSON
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={"js"} onChange={this.handleChangeFormat.bind(this)} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        JAVASCRIPT
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={"c++"} onChange={this.handleChangeFormat.bind(this)} />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        C++
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value={"csv"} onChange={this.handleChangeFormat.bind(this)} />
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        CSV
                    </label>
                </div>
            </div>
        )
    }
}


export default Format;