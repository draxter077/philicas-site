export default function word(n, t){
    let style = `
        {
            display:flex;
            flex-direction:column;
            width:20%;
            background:red;
            color:white;
            font-size:25px;
            padding:5px 10px;
            margin:10px; 0px;
            border-radius:5px;
            text-align:center;
            transform:translateX(${400 - 100*n}%);
        }
        :responsive{
            font-size:17px;
            width:80%;
            transform:translateX(${20 - 5*n}%);
            margin:5px 0px;
        }`

    const word = cE("div", style)
    word.innerHTML = t
    return(word)
}