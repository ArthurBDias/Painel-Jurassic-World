//start toogle menu
var toogleMenuBtn = document.querySelector("#toogle-menu-box")

let icons = document.querySelector("#icons")
let iconsContainer = document.querySelector("#icons-container")

console.log(icons, iconsContainer)

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
            src:"",
            Name: "",
            actorName: "",
        },  
        
        {
            src:"",
            Name: "",
            actorName: "",
        },  

        {
            src:"",
            Name: "",
            actorName: "",
        },  
    

    
        {
            src:"",
            Name: "",
            actorName: "",
        },  
        
        {
            src:"",
            Name: "",
            actorName: "",
        },  

        {
            src:"",
            Name: "",
            actorName: "",
        },  
    

    
        {
            src:"",
            Name: "",
            actorName: "",
        },  
        
        {
            src:"",
            Name: "",
            actorName: "",
        },  

        {
            src:"",
            Name: "",
            actorName: "",
        },  
    

    
]


var charactersBox = document.querySelectorAll('.character-box')





    for(var i = 0; i  < charactersBox.length; i++){
        let image = document.createElement('img')
        image.src = characters[i.src]

        let title = document.createElement('h1')
        title.innerText = characters[i.Name]

        let subTitle = document.createElement('img')
        subTitle.innerText = characters[i.actorName]

        charactersBox

    }


//end characters slide
