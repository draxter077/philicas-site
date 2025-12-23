export default function text(t){
    let style = `
        {
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:100lvh;
            color:white;
            font-size:40px;
            padding:5%;
            text-align:center;
            z-index:1;
        }
        :responsive{
            font-size:25px;
        }`

    const text = cE("div", style)
    text.innerHTML = t
    return(text)
}