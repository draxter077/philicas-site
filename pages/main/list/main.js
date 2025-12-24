import title from "./title/main.js"
import content from "./content/main.js"

export default function list(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            padding:5% 0%;
            background:black;
        }`

    const list = cE("div", style)
    list.appendChild(title())
    list.appendChild(content())
    return(list)
}