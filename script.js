document.querySelector(".btn").addEventListener("click",function(){
    let text=document.querySelector('.form-control').value;
    console.log(text);
    let newlist=document.createElement("li");

    newlist.innerHTML=`<p><input type="checkbox" class="checkbox">${text}</p>`;
    document.querySelector(".list").appendChild(newlist);
});