import './App.css';
import React, { useState } from 'react';
import Header from './components/header.js';
import Filter from './components/filter.js';
import Format from './components/format.js';
import Output from './components/output.js';
import Datatyperow from './components/datatyperow.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {generateOutputList, generateCsvOutput, generateJsonOutput, generateCOutput, getTextLength} from './generatorFuncitons.js';
let data;
let filter;
let format;
function App() {  
  const [durum, setDurum] = useState(true);
  const [output, setOutput] = useState("");
  const [format2, setFormat] = useState("");
  const [language, setLanguage] = useState("");
  const [mRange, setMRange] = useState(1000);
  /* handleCallbackfrom functions get data from childs */
  function handleCallbackfromData(childData){
    data = childData;
    // Maximum range is changed for id and unique 
    try{
      let minList = [];
      minList.push(1000);
      let idLength = data[5].lengthValue;
      if(data[5].itemChecked){
        idLength = (10**(idLength-1)*9);
        minList.push(idLength);
      }
      if(data[7].itemChecked){
        minList.push(getTextLength(data[7].textValue));
      }
      
      setMRange(Math.min.apply(Math, minList));
    }
    catch(err){
      // Until 8 type classes are rendered, data is not reachable completely
    }
  }
  // Gets data from filter class
  function handleCallbackfromFilter(childData){
    filter = childData;
    setLanguage(filter.language);
  }
  // Gets data from format class
  function handleCallbackfromFormat(childData){
    format = childData;
    setFormat(format);
  }
  function create(){
    try{
      let generatedList = generateOutputList(data,filter.range,filter.language);
      console.log(generatedList);
      if(generatedList.length <= 1){
        window.alert("No item chosen");
      }
      if(format==="csv" && generatedList.length > 1){
        setOutput(generateCsvOutput(generatedList));
        setDurum(false);
      }
      if(format==="js" && generatedList.length > 1){
        setOutput(JSON.stringify(generatedList,null," "));
        setDurum(false);
      }
      if(format==="c++" && generatedList.length > 1){
        setOutput(generateCOutput(generatedList));
        setDurum(false);
      }
      if(format==="json" && generatedList.length > 1){
        setOutput(generateJsonOutput(generatedList));
        setDurum(false);
      }
    }
    catch(err){
      window.alert("Data couldn't be generated because of "+ err+"\nPlease Refresh the Page!");
    }    
  }
  return (
    <div className="App">
      <div style={{display:  durum ? '' : 'none'}}><Header/></div>
      
      <div className='container main' style={{display:  durum ? '' : 'none'}}>
        <Filter parentCallback = {handleCallbackfromFilter} maxRange={mRange}/>
        <Datatyperow parentCallback = {handleCallbackfromData}/>
        <Format parentCallback = {handleCallbackfromFormat}/>
      </div>
      <div  className="container bottom" style={{display:  durum ? '' : 'none'}}>
        <button type='button' className="btn btn-primary float-end btn-lg" onClick={create}>CREATE</button>
      </div>
      <Output  format={format2} language={language} display={durum} out={output} />    
    </div>
  );
}
  
export default App;
