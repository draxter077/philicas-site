import loading from "./loading/main.js"
import cover from "./cover/main.js"
import introduction from "./introduction/main.js"
import firstLetter from "./firstLetter/main.js"
import newLetter from "./newLetter/main.js"
import dates from "./dates/main.js"
import list from "./list/main.js"
import stats from "./stats/main.js"
import end from "./end/main.js"

export default function main(){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:100%;
            height:100%;
        }`

    const main = cE("div", style)
    //main.appendChild(loading())
    main.appendChild(cover())
    main.appendChild(introduction())
    main.appendChild(firstLetter())
    main.appendChild(newLetter())
    main.appendChild(dates())
    main.appendChild(list())
    main.appendChild(stats())
    main.appendChild(end())
    return(main)
}