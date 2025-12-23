import logo from "./logo/main.js"
import value from "./value/main.js"
import text from "./text/main.js"

export default function stat(url, v, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:20%;
            margin:10px;
        }
        :responsive{
            width:40%;
        }`

    const stat = cE('div', style)
    stat.appendChild(logo(url))
    stat.appendChild(value(v))
    stat.appendChild(text(t))
    return(stat)
}