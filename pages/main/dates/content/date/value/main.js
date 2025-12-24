export default function value(v){
    let style = `
        {
            font-size:27px;
            color:white;
            padding:0px 5px;
            border-bottom:1px solid red;
            text-align:center;
        }
        :responsive{
            font-size:17px;
        }`

    const value = cE("div", style)
    value.innerHTML = v
    return(value)
}