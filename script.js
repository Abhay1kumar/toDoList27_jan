


async function getBooks() {

    
    var url = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAsDqHTrD_5tfMfSg8r7rZ-V-pZUDZQa7M";
    try{
        await fetch(url,{
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json()).then((data) => {
            console.log(data);
            var items=data.items;
            for(var i=0; i<items.length; i++){
                console.log(items[i].volumeInfo);
                display.innerHTML +=  `<div class = "result"><img src="${items[i].volumeInfo.imageLinks.smallThumbnail}">
                
         <p><u> ${items[i].volumeInfo.title} </u></p><br><p> ${items[i].volumeInfo.authors}</p> 
        
    </div><br><br><br>`

            }
        })

        }catch(e) {
            console.log(e);
            display.innerHTML += "";
        }
}
       