export default function title(a, t){
    let style = `
        {
            font-size:28px;
            color:white;
            width:100%;
            text-align:${a};
            margin:2.5% 0px;
        }
        :responsive{
            font-size:17px;
            margin:5% 0px;
        }
        >span{
            border-bottom:1px solid red;
            padding:0px 5px;
        }`

    const title = cE("div", style)
    title.innerHTML = t
    return(title)
}