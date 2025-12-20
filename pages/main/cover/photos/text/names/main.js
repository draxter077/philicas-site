export default function names(){
    let style = `
        {
            font-size:50px;
            color:white;
            font-weight:900;
            background:rgb(0,0,0,0.75);
            padding:20px;
            border-radius:5px;

            font-family:"Meow Script",cursive;
        }
        >upper{
            font-size:65px;
        }
        >span{
            color:red;
            font-size:60px;
        }
        :responsive{
            font-size:40px;
            font-weight:500;
        }`

    const names = cE("div", style)
    names.innerHTML = "<upper>L</upper>etícia <span>&</span> <upper>P</upper>hilippe"
    return(names)
}