import cover from "./cover/main.js"
import a from "./a/main.js"
import b from "./b/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
        }`

    const main = cE("div", style)
    main.appendChild(cover())
    main.appendChild(a())
    main.appendChild(b())
    return(main)
}