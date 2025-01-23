export const resuableComponent = (path,placeHolderId)=>{
    // 
    let placeholder = document.getElementById(placeHolderId)

    fetch(path)
    .then(res =>{
        if(!res.ok){
            console.log("faild to load");
        }
        return res.text();
    })
    .then(data =>{
        placeholder.innerHTML = data;
    })
    .catch(err =>{
        console.error(err)
        placeholder.innerHTML = "<p>Navbar failed to load.</p>"
    })
 }