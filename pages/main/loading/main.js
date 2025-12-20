export default function loading(){
    let style = `
        {
            position:fixed;
            top:0%;
            left:0%;

            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            height:100%;
            width:100%;
            background:rgb(0,0,0);
            color:black;
            font-size:40px;
            animation:changeColor 0.5s linear 1s 1 forwards;
            transition:all 0.5s;
        }
        :responsive{
            font-size:25px;
        }
        @keyframes translateDot{
            0%[transform:translateX(0%)]
            100%[transform:translateX(100%)]
        }
        @keyframes appear{
            0%[opacity:0]
            100%[opacity:1]
        }
        @keyframes changeColor{
            0%[color:black]
            100%[color:white]
        }
        ::after{
            content:"";
            width:5%;
            height:5px;
            background:red;
            opacity:0;
            animation:translateDot 2s linear 0s infinite forwards alternate, appear 0.5s linear 2s 1 forwards;
        }`

    const loading = cE("div", style)
    loading.innerHTML = "Aguarde um instante"

    window.addEventListener(
        "load",
        async function a(){
            loading.style.opacity = 0
            await new Promise(resolve => setTimeout(resolve, 501))
            document.getElementById("root").removeChild(loading)
        }
    )
    return(loading)
}