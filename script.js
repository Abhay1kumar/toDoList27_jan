let showthepassword=document.getElementById('check')

showthepassword.addEventListener('click',function(){
let typePassword=document.getElementById('password');
let changetype=typePassword.getAttribute('type');
if(changetype=='password'){
  typePassword.setAttribute('type','text');
} else{
  typePassword.setAttribute('type','password');
}
});



let likecount=0;
let dislike= 0;

let likebutton=document.getElementById('btn-like');
likebutton.addEventListener('click',function(){
likecount++;
document.querySelector("#like").innerHTML=likecount;
});

let dislikebutton=document.getElementById('btn-dislike');
dislikebutton.addEventListener('click',function(){
  dislike++;
  document.querySelector("#dislike").innerHTML=dislike;
});