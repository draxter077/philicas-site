import background from "./background/main.js"
import text from "./text/main.js"

export default function introduction(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            background:black;
        }`

    const introduction = cE("div", style)
    introduction.appendChild(background())
    introduction.appendChild(text("Esse site não está finalizado, nem acabado"))
    introduction.appendChild(text("E espero que não acabemos ele nunca..."))

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            let d = window.location.toString().replaceAll("/404.html","")

            let background = introduction.children[0]
            if(scrolled < viewport*2.5 && background.src != `${d}/assets/cover/11.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = "./assets/cover/11.jpg"
                background.style.opacity = 0.2
            }
        }
    )
    return(introduction)
}