export default function arrow(){
    let style = `
        {
            position:absolute;
            bottom:0%;

            height:50px;
            margin:0px 0px 20px 0px;
            opacity:0;
            filter:invert(1);
            border-radius:50%;
            box-shadow:0px 0px 10px 0px rgb(255,255,255);
            background:rgb(255,255,255);
            transition:all 0.5s;
            
            animation:floatingArrow 1s ease 0s infinite alternate;
            z-index:1;
        }
        @keyframes floatingArrow{
            0%[transform:translateY(0%)]
            100%[transform:translateY(-100%)]
        }
        :responsive{
            filter:invert(0);
            height:40px;
        }`

    const arrow = cE("img", style)
    arrow.src = "./assets/arrow.png"
    return(arrow)
}