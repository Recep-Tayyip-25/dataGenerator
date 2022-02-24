import { Component } from 'react';
import './CSS/type.css';

class Type extends Component{
    constructor(props) {
        super(props);
        this.state = {itemName: props.name ,idNum: props.idNum, itemChecked: false, minValue: 1950 ,maxValue: 2021, emptyPercentage: 0, lengthValue: 10, textValue:"H0y4-j8D4-18"};        
        this.props.parentCallback(this.state);
      }
    // Handle change functions sends data to upper class
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value}, () => {
            this.props.parentCallback(this.state);
          });
    }
    handleChangeChecked(e){
        this.setState({[e.target.name]: e.target.checked}, () => {
            this.props.parentCallback(this.state);
          });
    }
    render() {
        return (
            <div className="type col-xs-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxl-3 " id={this.props.name}>
                <form className="form-type" id={this.props.name + "Form"} >
                    <input key={this.state.itemChecked} className="form-check-input" name='itemChecked' type="checkbox" id={this.props.name + "Cheackbox"} value={this.state.checked} onChange={this.handleChangeChecked.bind(this)} checked={this.state.itemChecked}/>
                    <label className='itemHeader fw-normal' htmlFor={this.props.name + "Cheackbox"}>&nbsp;{this.props.name} <p className="fs-6 fw-lighter">{this.props.about}</p></label><br />                    
                    <div className="form-floating" style={{display:  this.props.numberInput ? 'initial' : 'none'}}>
                        <input name='lengthValue' type="number" className="form-control" id={this.props.name + "Inputnumber"} defaultValue="10" min="2" max="100" onChange={this.handleChange.bind(this)} />
                        <label className='idLabel' htmlFor={this.props.name + "Inputnumber"}>Length</label>
                    </div>
                    <div className="input-group" style={{display:  this.props.minmaxInput ? '' : 'none'}}>
                        <input name='minValue' type="number" className="form-control" id="minbirthdate" defaultValue={this.state.minValue} min="1" max={this.state.maxValue} onChange={this.handleChange.bind(this)} />
                        <input name='maxValue' type="number" className="form-control" id="maxbirthdate" defaultValue={this.state.maxValue} min={this.state.minValue} max="2021" onChange={this.handleChange.bind(this)} />
                    </div>
                    <input name='textValue' type="text" className="form-control" id={this.props.name + "textInput"} value={this.state.textValue} style={{display:  this.props.textInput ? '' : 'none'}} onChange={this.handleChange.bind(this)} />
                    <label className='fw-normal'> Empty Value Percentage</label><br/>
                    <output className="outputRange">
                        <label id={this.props.name + "show"} className="percentShowText fw-normal">
                            {this.state.emptyPercentage}%
                        </label>
                    </output>
                    <input  name='emptyPercentage' className="percentage-range  form-range" id={this.props.name + "range"} type="range" min="0" max="100" defaultValue={this.state.emptyPercentage} onInput={this.handleChange.bind(this)} />
                    <label>
                        ( The probability that data is empty )
                    </label>
                </form>                
            </div>
        )
    }
    
}




export default Type;