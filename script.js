let button = document.querySelector('.btn');



// change font size 

button.addEventListener('click', function(){
  let data = document.getElementsByTagName('P');
  console.log(data);

  for (i=0; i <data.length; i++) {
    data[i].style.fontSize+="32px";
  }
  
})

// change font color


button.addEventListener('click', function(){
  let data = document.getElementsByTagName('P');
  console.log(data);
 
  for (i=0; i <data.length; i++) {
    data[i].style.color+="blue";
  }
  
})

// change the content 

button.addEventListener('click', function(){
  let data = document.getElementsByTagName('P');
  console.log(data);
 
  for (i=0; i <data.length; i++) {
    data[0].innerHTML="Content change by button";
  }
  
})

button.addEventListener('click', function(){
  let data = document.getElementsByTagName('P');
  console.log(data);
  // data.getElementsByTagName('P')[1].innerHTML = 'My name is Rohit';
  for (i=0; i <data.length; i++) {
    data[1].style.opacity ="0";
  }
  
})

// first method showing error


// let newbutton=document.queryCommandValue('.button');

// newbutton.addEventListener('click',function(){
//   document.querySelector('.new').innerHTML="Abhay";
// })



// second method
  
function change(){
  document.querySelector('.new').innerHTML="abhay";
}




let tablebtn = document.querySelector(".tablebtn");

tablebtn.addEventListener('click',function(){
let name=document.querySelector('#first_name').value;
let city=document.querySelector('#city_name').value;

console.log(name);
console.log(city);

  let tablerow=document.querySelector('.table').insertRow();
  let firstrow=tablerow.insertCell(0);
  let secondrow=tablerow.insertCell(1);
  firstrow.innerHTML=`${name}`;
  secondrow.innerHTML=`${city}`;
})