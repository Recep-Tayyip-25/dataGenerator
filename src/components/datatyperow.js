import { Component } from 'react';
import Type from './type/type.js';
import React from 'react';

import './CSS/datatyperow.css';

class Datatyperow extends Component {
    constructor(props) {
        super(props);
        this.state = {itemList: []};
        this.item0 = React.createRef();
        this.item1 = React.createRef();
        this.item2 = React.createRef();
        this.item3 = React.createRef();
        this.item4 = React.createRef();
        this.item5 = React.createRef();
        this.item6 = React.createRef();
        this.item7 = React.createRef();
      }
    // Gets all type component's states and sends to upper class
    handleCallback = (childData) =>{
        this.state.itemList.splice(childData.idNum, 1, childData)
        this.setState({ itemList: [...this.state.itemList]});
        this.props.parentCallback(this.state.itemList);
    }
    // This checks all the checkboxes or uncheck all the checkboxes 
    handleChange(e){
        this.item0.current.setState({itemChecked: e.target.checked}, () => {
            this.item0.current.props.parentCallback(this.item0.current.state);
          });
        this.item1.current.setState({itemChecked: e.target.checked}, () => {
            this.item1.current.props.parentCallback(this.item1.current.state);
          });
        this.item2.current.setState({itemChecked: e.target.checked}, () => {
            this.item2.current.props.parentCallback(this.item2.current.state);
          });
        this.item3.current.setState({itemChecked: e.target.checked}, () => {
            this.item3.current.props.parentCallback(this.item3.current.state);
          });
        this.item4.current.setState({itemChecked: e.target.checked}, () => {
            this.item4.current.props.parentCallback(this.item4.current.state);
          });
        this.item5.current.setState({itemChecked: e.target.checked}, () => {
            this.item5.current.props.parentCallback(this.item5.current.state);
          });
        this.item6.current.setState({itemChecked: e.target.checked}, () => {
            this.item6.current.props.parentCallback(this.item6.current.state);
          });
        this.item7.current.setState({itemChecked: e.target.checked}, () => {
            this.item7.current.props.parentCallback(this.item7.current.state);
          });
        
    }
    render() {
        return (
        <div className='types row'>
            <div className="type-heading col-sm-12">
                <h2>
                    DATA TYPE
                </h2>
            </div>
            <br/>
            <br/>
            <div className=''>
                <input className='form-check-input' id="allInput" type='checkbox' checked={this.state.checkAll} onChange={this.handleChange.bind(this)}/>
                <label className='form-check-label fs-4 fw-bolder' htmlFor='allInput'>&nbsp; ALL</label>
            </div>
            <br/>
            <br/>
            <Type name='name' idNum={0} parentCallback = {this.handleCallback} ref={this.item0} about={""}/>
            <Type name='surname' idNum={1} parentCallback = {this.handleCallback} ref={this.item1} about={""}/>
            <Type name='country' idNum={2} parentCallback = {this.handleCallback} ref={this.item2} about={""}/>
            <Type name='city' idNum={3} parentCallback = {this.handleCallback} ref={this.item3} about={""}/>
            <Type name='email' idNum={4} parentCallback = {this.handleCallback} ref={this.item4} about={""}/>
            <Type name='id' idNum={5} numberInput= {true} parentCallback = {this.handleCallback} ref={this.item5} about={""}/>
            <Type name='birthday' idNum={6} minmaxInput= {true} parentCallback = {this.handleCallback} ref={this.item6} about={""}/>
            <Type name='unique' idNum={7} textInput= {true} parentCallback = {this.handleCallback} ref={this.item7} about={"( Character-digit-symbol )"}/>
        </div>
        )
    }
}


export default Datatyperow;