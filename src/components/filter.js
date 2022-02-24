import { Component } from 'react';

import './CSS/filter.css';


class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = { range: 10, language: "English" };
    this.props.parentCallback(this.state);
  }
  // this sends state to the upper class
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.props.parentCallback(this.state);
    });
  }
  render() {
    if (this.props.maxRange < this.state.range) {
      this.setState({ range: this.props.maxRange });
    }
    return (
      <div className="filter">
        <div className='row'>
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-2 col-xxl-2'>
            <h2 className='float-start'>
              LANGUAGE
            </h2>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3'>
            <select className='form-select' name='language' id='language' value={this.state.language} onChange={this.handleChange.bind(this)}>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Turkish">Turkish</option>
            </select>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-2 col-xxl-2'>

          </div>
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-2 col-xxl-2'>
            <h2 className=''>
              DATA RANGE
            </h2>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3'>
            <input name='range' className='form-control' id="dataRangeS" type="number" min={5} step={5} value={this.state.range} onInput={this.handleChange.bind(this)} max={this.props.maxRange} />
            <input name='range' className="data-range form-range" id="dataRange" type="range" min={5} max={this.props.maxRange} step={5} value={this.state.range} onInput={this.handleChange.bind(this)} />
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Filter;