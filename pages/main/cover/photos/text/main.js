import names from "./names/main.js"

export default function text(){
    let style = `
        {
            position:absolute;
            top:0%;
            left:0%;

            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100%;
            opacity:0;
            transition:all 0.5s;
            z-index:1;
        }`

    const text = cE("div", style)
    text.appendChild(names())
    return(text)
}