//start toogle menu
var toogleMenuBtn = document.querySelector("#toogle-menu-box")

let icons = document.querySelector("#icons")
let iconsContainer = document.querySelector("#icons-container")


iconsContainer.appendChild(icons)

toogleMenuBtn.addEventListener('click', () =>{

    
    toogleMenuBtn.classList.toggle("active")
})

//end toogle menu


//start trailer video

const trailer = document.querySelector("#trailer-video")
const videoTrailer = document.querySelector("#video-trailer")

var trailerBtn = document.querySelector("#trailer-btn").addEventListener('click', () =>{
    trailer.classList.add("active")
    videoTrailer.click()
})

const BtnCloseTrailer = document.querySelector("#close-trailer-video").addEventListener("click", ()=>{
    trailer.classList.remove("active")
    videoTrailer.pause()
    
})

//end trailer video


//start characters slide

const characters = [
    
        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Alan Grant",
            actorName: "Sam Neill",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon2",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon3",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon4",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon5",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon6",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon7",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon8",
            actorName: "Alan Branch",
        },  

        {
            src:"Midia/Universal-Picture-Logo .png",
            Name: "Ian Malcon9",
            actorName: "Alan Branch",
        },  
    
]


var charactersBox = document.querySelectorAll('.character-slide')


    for(var i = 0; i  <= charactersBox.length -1; i++){
        let image = document.createElement('img')
        image.src = characters[i].src

        let title = document.createElement('h2')
        title.innerText = characters[i].Name

        let subTitle = document.createElement('h3')
        subTitle.innerText = characters[i].actorName

        charactersBox[i].appendChild(image)
        charactersBox[i].appendChild(title)
        charactersBox[i].appendChild(subTitle)

    }
    
    const charactersBackground = document.querySelector('#characters-background')
    const charactersContainer = document.querySelector('#characters-slides')
    let chatactersBar = document.querySelectorAll('.chatacters-bar')


    const btnPrevCharacters = document.querySelector('#btn-prev').addEventListener('click', () =>{
        chatactersBar = document.querySelectorAll('.chatacters-bar')
        let lastslide = chatactersBar[chatactersBar.length - 1]
        charactersContainer.insertBefore(lastslide, chatactersBar[0])
    })


    const btnNextCharacters = document.querySelector('#btn-next').addEventListener('click', () =>{
        chatactersBar = document.querySelectorAll('.chatacters-bar')
        charactersContainer.appendChild(chatactersBar[0])
    })



    let charactersBtn = document.querySelectorAll('.characters-btn')

    charactersBtn.forEach((item) => { item.addEventListener('click', () =>{

        toogleMenuBtn.classList.toggle("active")
        trailer.classList.remove("active")
    
        charactersBackground.classList.add('active')
        })
    })

    const closeSlideCharacter = document.querySelector('#close-slide-character').addEventListener('click', () =>{
        charactersBackground.classList.remove('active')

    })
    console.log(charactersBtn)
//end characters slide


// galery

    const btnGalery = document.querySelectorAll('.galery-btn')
    const Galery = document.querySelector('#background-galery')
    
    btnGalery.forEach((item) => {
        item.addEventListener('click', () =>{
            Galery.classList.toggle('active')
        })
    })


const GalerySlider = document.querySelector('#galery-slider')
let SlidesofGalery = document.querySelectorAll('.galery-slide')


    btnNextGalery = document.querySelector('#btn-next-galery').addEventListener('click', () => {
        SlidesofGalery = document.querySelectorAll('.galery-slide')   
        GalerySlider.appendChild(SlidesofGalery[0])
    })

    btnPrevGalery = document.querySelector('#btn-prev-galery').addEventListener('click', () => {
        SlidesofGalery = document.querySelectorAll('.galery-slide')   
        let lastSlide = SlidesofGalery[SlidesofGalery.length -1]
        GalerySlider.insertBefore(lastSlide, SlidesofGalery[0])
    })


