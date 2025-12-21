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
    introduction.appendChild(text("Teste"))
    introduction.appendChild(text("Teste"))
    introduction.appendChild(text("Teste"))
    introduction.appendChild(text("Teste"))

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            let d = window.location.replaceAll("/404.html","")

            let background = introduction.children[0]
            if(scrolled < viewport*3 && background.src != `${d}/assets/zootopia.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = "./assets/zootopia.jpg"
                await new Promise(resolve => setTimeout(resolve, 1))
                background.style.opacity = 0.5
            }
            else if(scrolled >= viewport*3 && background.src != `${d}/assets/dengo.png`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = "./assets/dengo.png"
                await new Promise(resolve => setTimeout(resolve, 1))
                background.style.opacity = 0.5
            }
        }
    )
    return(introduction)
}