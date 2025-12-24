export default function item(m, t){
    let style = `
        {
            font-size:18px;
            ${m == true ? "color:white" : "color:black"};
            ${m == true ? "background:black" : "background:white"};
            padding:5px 10px;
            border-radius:5px;
            margin:5px;
            ${m == true ? "text-decoration:line-through;" : ""}
        }`

    const item = cE("div", style)
    item.innerHTML = t
    return(item)
}