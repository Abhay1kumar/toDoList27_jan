let url="https://61ea3a487bc0550017bc65f8.mockapi.io/user";

function getdata(){
  fetch(url,{
    method:"GET",
    header:{
      "Content Type":"application/json"
    },
  })
  .then((result)=>result.json())
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  })
}
// getdata();

function creatData(){
  let data={
    name:"Abhay Kumar",
    phone: "9999-895-695",
    city:"Noida"
  };
  fetch(url, {
    method:"POST",
    body:JSON.stringify(data),
    header:{
      "Content Type":"application/json",
    },
  }).then((result)=>result.json())
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
  console.log(error);
  });
}

// creatData();
getdata();

// upate the data
function updateData(){
  let data={
    name:"Rohit kumar",
    phone:"8593034884",
    city:"Delhi"
  };
  fetch(url + "/4",{
    method:"PUT",
    body:JSON.stringify(data),
    header:{
      "Content Type": "application/json",
    },
  })
  .then((result)=>result.json()).then((data)=>{
    console.log(data)
  })
  .catch((error)=>{
    console.log(error);
  });
}

// updateData();

// delete the data

function deleteData(){
  fetch(url + "/5",{
    method: "DELETE",

  })
  .then((result)=> result.json()).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  });
}

deleteData();
