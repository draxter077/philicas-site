import title from "./title/main.js"
import logo from "./logo/main.js"

export default function linkedin(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            align-items:center;
            width:100%;
            padding:0% 0% 5% 0%;
            background:black;
        }`

    const linkedin = cE("div", style)
    linkedin.appendChild(title())
    //linkedin.appendChild(logo())
    return(linkedin)
}