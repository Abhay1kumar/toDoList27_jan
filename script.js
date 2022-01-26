let mybtn = document.querySelector('.mybtn');

mybtn.addEventListener('click', getCatPics);

async function getCatPics() {

    // generate pic only one 
    let showpic = document.querySelector('.ImgDiv')
    showpic.innerHTML = '';

    try {
         await fetch("https://api.thecatapi.com/v1/images/search", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => response.json()).then((data) => {
                let imgUrl = data[0].url;//take only only url from the api object
                // console.log(imgUrl);
                let createImgElement = document.createElement('img');//Creat a img element
                createImgElement.setAttribute('src', `${imgUrl}`);
                let showpic = document.querySelector('.ImgDiv')
                showpic.appendChild(createImgElement);
            })
    }
    catch (error) {
        console.log(error);
    }
}
getCatPics();
