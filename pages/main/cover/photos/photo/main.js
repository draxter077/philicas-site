export default function photo(numberOfArchivePhotos){
    let style = `
        {
            opacity:0;
            transition:all 0.5s;
        }`

    const photo = cE("img", style)

    photo.addEventListener(
        "start",
        async function a(){
            await new Promise(resolve => setTimeout(resolve, 0))
            while(true){
                if(Math.random() > 0.97){
                    photo.style.opacity = 0
                    await new Promise(resolve => setTimeout(resolve, 501))
                    photo.src = ""
                    photo.src = "./assets/cover/" + Math.floor(Math.random()*(numberOfArchivePhotos)) + ".jpg"
                    photo.style.opacity = 1
                }
                await new Promise(resolve => setTimeout(resolve, Math.random()*3000))
            }
        }
    )
    return(photo)
}