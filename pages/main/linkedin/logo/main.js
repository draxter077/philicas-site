export default function logo(){
    let style = `
        {
            height:100px;
            width:100px;
            padding:5px;
            margin:20px 0px 0px 0px;
            border-radius:50%;
            border:2px solid white;
            background:center/100% url("./assets/linkedin.png");
            animation:alive 1.5s linear 0s alternate infinite forwards;
        }
        @keyframes alive{
            0%[box-shadow:0px 0px 0px 0px white]
            100%[box-shadow: 0px 0px 25px 0px white]
        }
        :responsive{
            height:70px;
            width:70px;
        }`

    const logo = cE("a", style)
    logo.href = "https://www.linkedin.com/in/philippe-idalgo-prestes-9a304b23b/"
    logo.target = "_blank"
    return(logo)
}