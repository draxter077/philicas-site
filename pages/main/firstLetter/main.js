import title from "./title/main.js"
import letter from "./letter/main.js"
import text from "./text/main.js"

export default function firstLetter(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            background:black;
            padding:5% 5% 0%;
        }`

    const firstLetter = cE("div", style)
    firstLetter.appendChild(title())
    firstLetter.appendChild(letter())
    firstLetter.appendChild(text())
    return(firstLetter)
}