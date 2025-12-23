import photo from "./photo/main.js"
import text from "./text/main.js"
import arrow from "./arrow/main.js"

export default function photos(){
    let style = `
        {
            position:relative;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            align-content:center;
            width:100%;
            height:100%;
        }`

    const photos = cE("div", style)
    photos.appendChild(text())
    photos.appendChild(arrow())

    window.addEventListener(
        "load",
        async function a(){
            let viewportHeight = window.innerHeight
            let viewportWidth = window.innerWidth
            let photoUnit
            if(viewportWidth > 1000){photoUnit = viewportWidth/12}else{photoUnit = viewportWidth/4}

            let numberOfPhotos = Math.floor(viewportHeight/photoUnit+1)*Math.floor(viewportWidth/photoUnit)
            let numberOfArchivePhotos = 43

            for(let i = 0; i < numberOfPhotos; i++){
                let p = photo(numberOfArchivePhotos)
                p.style.height = photoUnit + "px"
                p.style.width = photoUnit + "px"
                p.src = "./assets/cover/" + Math.floor(Math.random()*(numberOfArchivePhotos)) + ".jpg"
                photos.appendChild(p)
            }

            await new Promise(resolve => setTimeout(resolve, 10000))

            for(let i = 0; i < numberOfPhotos; i++){
                photos.children[i+2].style.opacity = 1
                await new Promise(resolve => setTimeout(resolve, 25))
                let ev = new Event("start")
                photos.children[i+2].dispatchEvent(ev)
            }

            photos.children[0].style.opacity = 1
            await new Promise(resolve => setTimeout(resolve, 1000))
            photos.children[1].style.opacity = 1
        }
    )
    return(photos)
}