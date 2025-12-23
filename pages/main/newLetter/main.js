import title from "./title/main.js"
import content from "./content/main.js"
//import text from "./text/main.js"

export default function newLetter(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:black;
            padding:0% 5%;
        }
        :responsive{
            padding:0% 2.5%;
        }`

    const newLetter = cE("div", style)
    newLetter.appendChild(title())
    newLetter.appendChild(content())
    //newLetter.appendChild(text())
    return(newLetter)
}