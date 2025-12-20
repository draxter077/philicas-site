export default function photo(numberOfArchivePhotos){
    let style = `
        {
            opacity:0;
            transition:all 0.5s;
        }`

    const photo = cE("img", style)

    window.addEventListener(
        "load",
        async function a(){
            await new Promise(resolve => setTimeout(resolve, 5000))
            while(true){
                if(Math.random() > 0.92){
                    photo.style.opacity = 0
                    await new Promise(resolve => setTimeout(resolve, 450))
                    photo.src = "./assets/cover/" + Math.floor(Math.random()*(numberOfArchivePhotos)) + ".jpg"
                    photo.style.opacity = 1
                }
                await new Promise(resolve => setTimeout(resolve, Math.random()*3000))
            }
        }
    )
    return(photo)
}