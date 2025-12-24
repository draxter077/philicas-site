import title from "./title/main.js"
import content from "./content/main.js"

export default function stats(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            background:black;
        }`

    const stats = cE("div", style)
    stats.appendChild(title())
    stats.appendChild(content())
    return(stats)
}