const $ = (selector) => document.querySelector(selector)


//panel buttons 

$(".button__image").addEventListener("click", ()=>{
    if($(".panel__image").style.display="block"){
        $(".panel__text").style.display="none"

    }
})

$(".button__text").addEventListener("click", ()=>{
    if($(".panel__text").style.display="block"){
        $(".panel__image").style.display="none"
    }
})


//panel Image
//url
const meme =()=>{
$("#url__image").addEventListener("input", ()=>{
    const urlImage = $("#url__image").value
    $(".meme__image").style.backgroundImage = `url(${urlImage})`
    $(".meme__image").style.backgroundSize ="cover"
    $(".meme__image").style.backgroundPosition ="center"
    return urlImage
})
}
meme()

//color 

$("#background__color").addEventListener("input", ()=>{
    $(".meme__image").style.backgroundColor = $("#background__color").value
})


//range
//brillo

$("#range__brightness").addEventListener("input", ()=>{
    const brightness = $("#range__brightness").value
    $(".meme__image").style.filter = `brightness(${brightness}%)`
    
})
//opacity
$("#range__opacity").addEventListener("input", ()=>{
    const opacity = $("#range__opacity").value
    $(".meme__image").style.filter = `opacity(${opacity}%)`
   
})
// contrast



$("#range__contrast").addEventListener("input", ()=>{
    const contrast = $("#range__contrast").value
    $(".meme__image").style.filter = `contrast(${contrast}%)`
 
})


//blur

$("#range__blur").addEventListener("input", ()=>{
    const blur = $("#range__blur").value
    $(".meme__image").style.filter = `blur(${blur}px)`
    
})

//grayscale

$("#range__grayscale").addEventListener("input", ()=>{
    const grayscale = $("#range__grayscale").value
    $(".meme__image").style.filter = `grayscale(${grayscale}%)`
   
})

$("#range__sepia").addEventListener("input", ()=>{
    const sepia = $("#range__sepia").value
    $(".meme__image").style.filter = `sepia(${sepia}%)`
   
})
//hue
$("#range__hue").addEventListener("input", ()=>{
    const hue = $("#range__hue").value
    $(".meme__image").style.filter = `hue-rotate(${hue}deg)`
   
})

$("#range__saturate").addEventListener("input", ()=>{
    const saturate = $("#range__saturate").value
    $(".meme__image").style.filter = `saturate(${saturate}%)`
   
})

// invert
$("#range__invert").addEventListener("input", ()=>{
    const invert = $("#range__invert").value
    $(".meme__image").style.filter = `invert(${invert}%)`
   
})


//reset
 $(".panel__control__restore").addEventListener("click", ()=>{
     $("#range__brightness").value = 100
     $("#range__opacity").value = 100
     $("#range__contrast").value=100
     $("#range__blur").value =0
    $("#range__grayscale").value =0
     $("#range__sepia").value =0
     $("#range__hue").value =0
     $("#range__saturate").value =0
     $("#range__invert").value =0
     meme()
  
 })
// const urlImage = $("#url__image").value
// $(".meme__image").style.backgroundImage = `url(${urlImage})`
// $(".meme__image").style.backgroundSize ="cover"
// $(".meme__image").style.backgroundPosition ="center"



// $(".panel__control__restore").addEventListener("click", ()=>{
//     $(".range").reset()
// })



// $(".button__text").addEventListener("click", ()=>{
//     $(".panel__text").style.display = "flex"
// })

