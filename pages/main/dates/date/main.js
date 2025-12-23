import logo from "./logo/main.js"
import text from "./text/main.js"
import value from "./value/main.js"

export default function date(url, t, d){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:15%;
            margin:10px;
        }
        :responsive{
            width:42%;
        }`

    const date = cE('div', style)
    date.appendChild(logo(url))
    date.appendChild(text(t))
    date.appendChild(value(d))
    return(date)
}