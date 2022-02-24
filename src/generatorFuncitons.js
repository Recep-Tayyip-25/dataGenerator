import countryTr from './Data/country/countryTr.json';
import countryEn from './Data/country/countryEn.json';
import countryGr from './Data/country/countryGr.json';
import nameTr from './Data/name/nameTr.json';
import nameGr from './Data/name/nameGr.json';
import nameEn from './Data/name/nameEn.json';
/* This creates one random number with the entered parameter length*/
function idGenerator(length) {
  let min =10**(length-1);
  let max = (10**length) - 1;
  return getRndInteger(min, max);
}
/* This creates one random number between given parameters*/
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/* This creates one random date between given parameters*/
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
/* This creates one random number between 0 and 9*/
function randomnum() {
  return getRndInteger(0, 9);
}
/* This creates one random letter*/
function randomletter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
  return randomCharacter;
}
/* This creates one random string according to the given parameter*/
function randomStringAcc(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetU = alphabet.toUpperCase();
  const numbers = "0123456789";
  const punctuations = ".,?<>;`!'£^#+$%½&/{([)]=}*-_:";
  let outputText = "";
  for (let i = 0; i < text.length; i++) {
    if(alphabetU.includes(text[i])){
      outputText = outputText + randomletter().toUpperCase();
    }
    if(alphabet.includes(text[i])){
      outputText = outputText + randomletter();
    }
    if(numbers.includes(text[i])){
      outputText = outputText + randomnum();
    }
    if(punctuations.includes(text[i])){
      outputText = outputText + text[i];
    }
  }
  return outputText;
}
/* This creates one e-mail according to the given parameters*/
function eMailGen(name, surname, birthyear) {
  let number = getRndInteger(10, 99);
  let list = [name, surname, birthyear, number];
  let mailList = ["@gmail.com", "@outlook.com", "@dogus.edu.tr"];
  let outputMail = "";
  let numList = [100, 200, 300, 400];
  // in this loop numList is filled with "0,1,2,3" in random order
  for (let i = 0; i < 4; i++) {
    let a = 1;
    while (a) {
      let c = 0;
      let b = getRndInteger(0, list.length - 1);
      for (let j = 0; j < numList.length; j++) {
        if (b === numList[j]) {
          c = c + 1;
        }
      }
      if (c === 0) {
        numList[i] = b;
        a = 0;
        break;
      }
    }
  }
  // Given parameters would be ordered according to numList
  for (let k = 0; k < 4; k++) {
    outputMail = outputMail + list[numList[k]];
  }
  // one domain is chosen from the list randomly
  let randM = getRndInteger(0, mailList.length - 1);
  outputMail = outputMail + mailList[randM];
  return outputMail;
}
/* This checks if the new object to be added to this list is in the list */
function checkList(list, newItem) {
  if(newItem === undefined){
    return false;
  }
  if (list == null) {
    return true;
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] === newItem || newItem === undefined) {
      return false;
    }
  }
  return true;
}
/* This searchs given country's index and it returns city in that index*/
function searchCountryFromList(item, lan){
  if(item === ""){
    return "";
  }
  if(lan==="Turkish"){
    for(let j=0;j<countryTr.countryCity.length;j++){
      if(countryTr.countryCity[j].city===item){
        return countryTr.countryCity[j].country;
      }
    }
  }
  if(lan==="English"){
    for(let j=0;j<countryEn.countryCity.length;j++){
      if(countryEn.countryCity[j].city===item){
        return countryEn.countryCity[j].country;
      }
    }
  }
  if(lan==="German"){
    for(let j=0;j<countryGr.countryCity.length;j++){
      if(countryGr.countryCity[j].city===item){
        return countryGr.countryCity[j].country;
      }
    }
  }  
}
/* This creates Name list according to the given parameters*/
function generateName(range, lan, empty){
  let rangeCounter = 0;
  let nameList = [];
  while (rangeCounter < range) {
    let newItem;
    if (lan === "Turkish") {
      newItem = nameTr.nameSurname[getRndInteger(0,nameTr.nameSurname.length-1)].name;
    }
    if (lan === "German") {
      newItem = nameGr.nameSurname[getRndInteger(0,nameGr.nameSurname.length-1)].name;
    }
    if (lan === "English") {
      newItem = nameEn.nameSurname[getRndInteger(0,nameTr.nameSurname.length-1)].name;
    }
    if(getRndInteger(1,100)<=empty){
      nameList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }
    if(newItem !== undefined){
      nameList[rangeCounter] = newItem;
      rangeCounter++;
    }
  }
  return nameList;
}
/* This creates Surnmae list according to the given parameters*/
function generateSurname(range, lan, empty){
  let rangeCounter = 0;
  let surnameList = [];
  while (rangeCounter < range) {
    let newItem;
    if (lan === "Turkish") {
      newItem = nameTr.nameSurname[getRndInteger(0,nameTr.nameSurname.length-1)].surname;
    }
    if (lan === "German") {
      newItem = nameGr.nameSurname[getRndInteger(0,nameGr.nameSurname.length-1)].surname;
    }
    if (lan === "English") {
      newItem = nameEn.nameSurname[getRndInteger(0,nameTr.nameSurname.length-1)].surname;
    }
    if(getRndInteger(1,100)<=empty){
      surnameList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }
    if(typeof newItem !== "undefined"){
      surnameList[rangeCounter] = newItem;
      rangeCounter++;
    }
  }
  return surnameList;
}
/* This creates City list according to the given parameters*/
function generateCity(range, lan, empty){
  let rangeCounter = 0;
  let cityList = [];
  while (rangeCounter < range) {
    let newItem;
    if (lan === "Turkish") {
      newItem = countryTr.countryCity[getRndInteger(0,countryTr.countryCity.length-1)].city;
    }
    if (lan === "German") {
      newItem = countryGr.countryCity[getRndInteger(0,countryGr.countryCity.length-1)].city;
    }
    if (lan === "English") {
      newItem = countryEn.countryCity[getRndInteger(0,countryEn.countryCity.length-1)].city;
    }
    if(getRndInteger(1,100)<=empty){
      cityList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }    
    cityList[rangeCounter] = newItem;
    rangeCounter++;    
  }
  return cityList;
}
/* This creates Country list according to the given parameters*/
function generateCountry(range, lan, empty){
  let rangeCounter = 0;
  let countryList = [];
  while (rangeCounter < range) {
    let newItem;
    if (lan === "Turkish") {
      newItem = countryTr.countryCity[getRndInteger(0,countryTr.countryCity.length-1)].country;
    }
    if (lan === "German") {
      newItem = countryGr.countryCity[getRndInteger(0,countryGr.countryCity.length-1)].country;
    }
    if (lan === "English") {
      newItem = countryEn.countryCity[getRndInteger(0,countryEn.countryCity.length-1)].country;
    }
    if(getRndInteger(1,100)<=empty){
      countryList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }
    countryList[rangeCounter] = newItem;
    rangeCounter++;
  }
  return countryList;
}
/* This creates Country list according to the given list and language*/
function generateCountryAcc(list,lan){
  let countryList=[];
  for(let i=0;i<list.length;i++){
    countryList[i]=searchCountryFromList(list[i],lan);
  }
  return countryList;
}
/* This creates birthdate list according to the given parameters*/
function generateBirthdate(range, minB, maxB, empty){
  let rangeCounter = 0;
  let birthdayList = [];
  while (rangeCounter < range) {
    let newItem = randomDate(new Date(minB, 0, 1), new Date(maxB, 0, 1));
    if(getRndInteger(1,100)<=empty){
      birthdayList[rangeCounter] = new Date(0);
      rangeCounter++;
      continue;
    }
    if (checkList(birthdayList, newItem)) {
      birthdayList[rangeCounter] = newItem;
      rangeCounter++;
    }
  }
  return birthdayList;
}
/* This creates e-mail list according to the given parameters*/
function generateEMail(nameList, surnameList, birthdayList, empty){
  let rangeCounter = 0;
  let emailList= [];
  while(rangeCounter<nameList.length || rangeCounter<surnameList.length || rangeCounter<birthdayList.length){
    let bYear = "";
    let name = "";
    let surname = "";
    if(getRndInteger(1,100)<=empty){
      emailList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }
    if(birthdayList[rangeCounter] !== new Date(0)){
      bYear = birthdayList[rangeCounter].getFullYear();      
    }
    if(nameList[rangeCounter] !== ""){
      name = nameList[rangeCounter].toLowerCase();      
    }
    if(surnameList[rangeCounter] !== ""){
      surname = surnameList[rangeCounter].toLowerCase();      
    }
    emailList[rangeCounter]=eMailGen(name,surname,bYear);
    rangeCounter++;
  }
  return emailList;
}
/* This creates Unique list according to the given parameters*/
function generateUnique(range, text, empty){
  let rangeCounter = 0;
  let uniqueList= [];
  while (rangeCounter < range) {
    let newItem = randomStringAcc(text);
    if(getRndInteger(1,100)<=empty){
      uniqueList[rangeCounter] = "";
      rangeCounter++;
      continue;
    }
    if (checkList(uniqueList, newItem)) {
      uniqueList[rangeCounter] = newItem;
      rangeCounter++;
    }       
  }
  return uniqueList;
}
/* This creates ID list according to the given parameters*/
function generateID(range, length, empty){
  let rangeCounter = 0;
  let IDList= [];
  while (rangeCounter < range) {
    let newItem = idGenerator(length);
    if(getRndInteger(1,100)<=empty){
      IDList[rangeCounter] = null;
      rangeCounter++;
      continue;
    }
    if (checkList(IDList, newItem)) {
      IDList[rangeCounter] = newItem;
      rangeCounter++;
    }       
  }
  return IDList;
}
/* This generates a speacial list according to user choices*/
function generateOutputList(data, range, language){
  let outputList = [];
  let itemNames = [];
  let nameList = [], surnameList = [], birthdayList = [];
    if(data[0].itemChecked){
      nameList = generateName(range,language,data[0].emptyPercentage);
      itemNames.push(data[0].itemName);
      outputList.push(itemNames);
      outputList.push(nameList);
    }
    else if(data[4].itemChecked){
      nameList = generateName(range,language,data[0].emptyPercentage);
    }
    if(data[1].itemChecked){
      itemNames.push(data[1].itemName);
      outputList[0]= itemNames;
      surnameList = generateSurname(range,language,data[1].emptyPercentage);
      outputList.push(surnameList);
    }
    else if(data[4].itemChecked){
      surnameList = generateSurname(range,language,data[1].emptyPercentage);
    }
    if(data[6].itemChecked){
      itemNames.push(data[6].itemName);
      outputList[0]= itemNames;
      birthdayList =generateBirthdate(range,data[6].minValue,data[6].maxValue,data[6].emptyPercentage);
      let newBirthdayList = datetoDMY(birthdayList);
      outputList.push(newBirthdayList);
    }
    else if(data[4].itemChecked){
      birthdayList =generateBirthdate(range,data[6].minValue,data[6].maxValue,data[6].emptyPercentage);
    }
    if(data[4].itemChecked){
      itemNames.push(data[4].itemName);
      outputList[0]= itemNames;
      outputList.push(correctMailList(generateEMail(nameList,surnameList,birthdayList,data[4].emptyPercentage)));
    }
    if(data[2].itemChecked && data[3].itemChecked){
      let cityList = generateCity(range,language,data[3].emptyPercentage);
      itemNames.push(data[2].itemName);
      outputList[0]= itemNames;
      outputList.push(generateCountryAcc(cityList, language));
      itemNames.push(data[3].itemName);
      outputList[0]= itemNames;
      outputList.push(cityList);
    }
    else if(data[2].itemChecked){
      itemNames.push(data[2].itemName);
      outputList[0]= itemNames;
      outputList.push(generateCountry(range,language,data[2].emptyPercentage));
    }
    else if(data[3].itemChecked){
      itemNames.push(data[3].itemName);
      outputList[0]= itemNames;
      outputList.push(generateCity(range,language,data[3].emptyPercentage));
    }
    if(data[5].itemChecked){
      itemNames.push(data[5].itemName);
      outputList[0]= itemNames;
      outputList.push(generateID(range,data[5].lengthValue,data[5].emptyPercentage));
    }
    if(data[7].itemChecked){
      itemNames.push(data[7].itemName);
      outputList[0]= itemNames;
      outputList.push(generateUnique(range,data[7].textValue,data[7].emptyPercentage));
    }
    outputList[0]= itemNames;
    return outputList;
}
// this takes date type list and turns to string array with "dd.mm.yyyy" format
function datetoDMY(list){
  let newList = [];
  for(let i=0; i<list.length; i++){
    let month = list[i].getMonth()+1;
    let day = String(list[i].getDate()).padStart(2, '0');
    let year = list[i].getFullYear();
    let birthday = day +"."+ month + "." + year;
    if(birthday === "01.1.1970"){
      birthday = " ";
    }
    newList[i] = birthday;
  }
  return newList;
}
/* This takes special generated list and turn into csv file*/
function generateCsvOutput(list){
  let output="";
      for(let f=0;f<list[0].length;f++){
        
        if(f === list[0].length - 1){
          output = output + list[0][f];
        }
        else{
          output = output + list[0][f] + ",";
        }
      }
      output = output + "\n";
      for(let i=0;i<list[1].length;i++){
          for (let j = 1; j < list.length; j++) {
                if(j === list.length - 1){
                  output = output + "\"" + list[j][i] + "\"" ;
                }
                else{
                  output = output + "\"" + list[j][i] + "\"" + ",";
                }                
          }
          output = output + "\n";
      }
      return output;
}
/* This takes special generated list and turn into json file*/
function generateJsonOutput(list){
  let output="";
  let start = "{\n\t\"generatedList\": [\n\t\t";
  let end = "\n\t]\n}";
  output = output + start;
  for(let i=0;i<list[1].length;i++){
    output = output + "{\n\t\t\t";
    for(let j=1;j<list.length;j++){
      if(list[0][j-1]==="id" && j === list.length-1){
        output = output + "\"" + list[0][j-1] + "\": " + list[j][i];
        continue;
      }
      if(list[0][j-1]==="id"){
        output = output + "\"" + list[0][j-1] + "\": " + list[j][i] + ",\n\t\t\t";
        continue;
      }
      if(j=== list.length-1){
        output = output + "\"" + list[0][j-1] + "\": " + "\"" + list[j][i] + "\"";
      }
      else{
        output = output + "\"" + list[0][j-1] + "\": " + "\"" + list[j][i] + "\"" + ",\n\t\t\t";
      }      
    }
    if(i===list[1].length - 1){
      output = output + "\n\t\t}\n\t\t";
    }
    else{
      output = output + "\n\t\t},\n\t\t";
    }
    
  }
  output = output + end;
  return output;
}
/* This takes special generated list and turn into c++ string 2d array */
function generateCOutput(list){
  let output="char list"+"["+(list.length-1)+"]"+"["+list[1].length+"] = {\n";
  for(let i=1;i<list.length;i++){
    output= output + "\t{";
    for(let j=0;j<list[i].length;j++){
      if(j === list[i].length-1){
        output= output + "\"" + list[i][j] + "\"";
      }
      else{
        output= output + "\"" + list[i][j] + "\"" +",";
      }
    }
    if(i === list.length-1){
      output= output + "}\n";
    }
    else{
      output= output + "},\n";
    }
  }
  output = output + "};";
  return output;
}
/* this returns unique text maximum range */
function getTextLength(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetU = alphabet.toUpperCase();
  const numbers = "0123456789";
  let textLength = 1;
  for (let i = 0; i < text.length; i++) {
    if(alphabet.includes(text[i])){
      textLength = textLength * alphabet.length;
    }
    if(alphabetU.includes(text[i])){
      textLength = textLength * alphabetU.length;
    }
    if(numbers.includes(text[i])){
      textLength = textLength * numbers.length;
    }
  }
  return textLength;
}
/* this corrects mail list */
function correctMailList(list) {
  let newList= list;
  for(let i=0;i<newList.length;i++){
    newList[i]= fixMail(newList[i]);
  }
  return newList;
}
/* This pop out unwanted letters */
function fixMail(text){
  const wrongLetters = "üğöş çı";
  let outputText = "";
  for(let j=0;j<text.length;j++){
    if(!wrongLetters.includes(text[j])){
      outputText = outputText + text[j];
    }
  }
  return outputText;
}


export {generateOutputList, generateCsvOutput, generateJsonOutput, generateCOutput, getTextLength};