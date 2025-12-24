export default function value(v){
    let style = `
        {
            font-size:35px;
            background:red;
            color:white;
            padding:0px 5px;
            margin:10px 0px;
        }
        :responsive{
            font-size:25px;
        }`

    const value = cE("div", style)
    value.innerHTML = v
    return(value)
}