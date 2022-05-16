
var toogleMenuBtn = document.querySelector("#toogle-menu-box")


toogleMenuBtn.addEventListener('click', () =>{

    
    toogleMenuBtn.classList.toggle("active")
})


const trailer = document.querySelector("#trailer-video")
const videoTrailer = document.querySelector("video-trailer")

var trailerBtn = document.querySelector("#trailer-btn").addEventListener('click', () =>{
    trailer.classList.add("active")
})

const BtnCloseTrailer = document.querySelector("#close-trailer-video").addEventListener("click", ()=>{
    trailer.classList.remove("active")
    videoTrailer.pause()
    
})


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
