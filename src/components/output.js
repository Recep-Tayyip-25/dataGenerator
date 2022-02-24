import { Component } from 'react';
import './CSS/output.css';
import logo from './logo2.png';

class Output extends Component {
    // this refreshs the page
    turnBack(e){
        window.location.reload();
      }
    render() {        
        return (
        <div className='container-fluid' id='outputC' style={{display:  this.props.display ? 'none' : ''}}>
            <div className='row'>
                <div className='col-md-5 fs-1 fw-bolder'>
                    <img id="logo" src={logo} alt="Logo" style={{height: '40%', width: 'auto'}} />
                    <br/><br/><br/>
                    <div className='row'>
                        <div className='col-md-1'></div>
                        <div className='col-md-11'>
                            <form className='outputForm'>
                                <label className='itemHeader'>LANGUAGE: &nbsp; </label>
                                <label className='itemHeader'>{this.props.language}</label><br/>
                                <label className='itemHeader'>DATA FORMAT: &nbsp; </label>
                                <label className='itemHeader'>{this.props.format}</label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-md-7'>
                    <div className='row'>
                        <div className='col-md-11'>
                            <div className='overflow-auto rounded-3' style={{maxHeight: 800, marginTop: '10%' }}>
                                <pre className='outputF p-4'>{this.props.out}</pre>
                            </div>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </div>                
            </div>
            <br/>
            <div className='row' id="oBottom" style={{width: '100%'}}>
                <div className='col-sm-9'></div>
                <div className='col-sm-3'>
                    <button type='button' className="btn btn-primary btn-lg" onClick={this.turnBack.bind(this)}>NEW CREATE</button>
                </div>      
            </div>
        </div>
        )
    }
}


export default Output;