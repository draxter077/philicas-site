import photos from "./photos/main.js"

export default function cover(){
    let style = `
        {
            position:sticky;
            top:0%;
            left:0%;
            
            width:100%;
            height:100svh;
            z-index:-1;

            transition:all 0.25s;
        }`

    const cover = cE("div", style)
    cover.appendChild(photos())

    window.addEventListener(
        "scroll",
        function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            if(scrolled < viewport*0.75){
                cover.style.transform = `scale(${1 - (0.75*(scrolled/(viewport*0.75)))})`
                cover.style.opacity = 1 - (scrolled/(viewport*0.75))
            }
        }
    )
    return(cover)
}