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
    introduction.appendChild(text("Esse presente não está pronto, não está acabado"))
    introduction.appendChild(text("E receio que ele nunca ficará..."))
    introduction.appendChild(text("Nós vamos criar ele com o tempo"))

    window.addEventListener(
        "scroll",
        async function a(){
            let viewport = window.innerHeight
            let scrolled = window.scrollY
            let d = window.location.toString().replaceAll("/404.html","")

            let background = introduction.children[0]
            console.log(d)
            console.log(background.src)
            if(scrolled < viewport*3.5 && background.src != `${d}/assets/introduction/1.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = ""
                background.src = `${d}/assets/introduction/1.jpg`
                background.style.opacity = 0.2
            }
            else if(scrolled >= viewport*3.5 && background.src != `${d}/assets/introduction/2.jpg`){
                background.style.opacity = 0
                await new Promise(resolve => setTimeout(resolve, 501))
                background.src = ""
                background.src = `${d}/assets/introduction/2.jpg`
                background.style.opacity = 0.2
            }
        }
    )
    return(introduction)
}