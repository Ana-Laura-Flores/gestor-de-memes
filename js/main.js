const $ = (selector) => document.querySelector(selector)


//panel buttons -----------------------------------------------------------

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

// ---------------- BTN CLOSE ----------------------
$(".btn__close__image").addEventListener("click", ()=>{
    $(".panel__image").style.display = "none"
})
$(".btn__close__text").addEventListener("click", ()=>{
    $(".panel__text").style.display = "none"
})

//MODO CLARO ---- MODO OSCURO -------------------------------------------
const changeModo = () =>{
    const changeTheme =$("body").getAttribute("data-theme")
    if (changeTheme) {        
        $("#button__theme__dark").style.display = "none"
        $("#button__theme__light").style.display="block"
        $("body").removeAttribute("data-theme", "theme__light")
        
    }else{
        $("#button__theme__dark").style.display = "block"
        $("#button__theme__light").style.display = "none"
        $("body").setAttribute("data-theme", "theme__light")
        
    }

}
$("#button__theme__light").addEventListener("click", changeModo)
$("#button__theme__dark").addEventListener("click", changeModo)



//panel Image -----------------------------------------------------------
//url -------------------------------------------------------------------
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


//filter image ---------------------------------------------------------------

const changeMeme = ()=>{
    
        const brightness = $("#range__brightness").value
        const opacity = $("#range__opacity").value
        const contrast = $("#range__contrast").value
        const blur = $("#range__blur").value
        const grayscale = $("#range__grayscale").value
        const sepia = $("#range__sepia").value
        const hue = $("#range__hue").value
        const saturate = $("#range__saturate").value
        const invert = $("#range__invert").value
                    
     $(".meme__image").style.filter = `brightness(${brightness})opacity(${opacity})contrast(${contrast}%)blur(${blur}px)grayscale(${grayscale}%)sepia(${sepia}%)hue-rotate(${hue}deg)saturate(${saturate}%)invert(${invert})`
}

$("#range__brightness").addEventListener("input",changeMeme)
$("#range__opacity").addEventListener("input",changeMeme)
$("#range__contrast").addEventListener("input",changeMeme)
$("#range__blur").addEventListener("input",changeMeme)
$("#range__grayscale").addEventListener("input",changeMeme)
$("#range__sepia").addEventListener("input",changeMeme)
$("#range__hue").addEventListener("input",changeMeme)
$("#range__saturate").addEventListener("input",changeMeme)
$("#range__invert").addEventListener("input",changeMeme)

// background color -----------------------------------------------------------

$("#background__color").addEventListener("input", ()=>{
    $(".meme__image").style.backgroundColor = $("#background__color").value
})

// select blend-mode -----------------------------------------------------------







// $(".meme__image").style.filter = `sepia($("#range__sepia").value) hue-rotate($("#range__hue"))`
// $("#range__sepia").value

//range
//brillo

// const brightness = $("#range__brightness").value
// const opacity = $("#range__opacity").value
// const contrast = $("#range__contrast").value
// const blur = $("#range__blur").value
// const grayscale = $("#range__grayscale").value
// const sepia = $("#range__sepia").value
// const hue = $("#range__hue").value
// const saturate = $("#range__saturate").value
// const invert = $("#range__invert").value
// const rangeMeme = () =>{
    
// $(".meme_image").style.filter = `brightness(${brightness}%)` + `opacity(${opacity}%)` + `contrast(${contrast}%)` + `blur(${blur}px)`+ `grayscale(${grayscale}%)`
    
  


//     $(".meme__image").style.filter = 
// }


// $("#range__grayscale").addEventListener("input", ()=>{
//     $(".meme__image").style.filter = `grayscale(${grayscale}%)`
// })

// $("#range__sepia").addEventListener("input", ()=>{
//     $(".meme__image").style.filter = `sepia(${sepia}%)`
   
// })
// //hue
// $("#range__hue").addEventListener("input", ()=>{
//     $(".meme__image").style.filter = `hue-rotate(${hue}deg)`
 
// })

// $("#range__saturate").addEventListener("input", ()=>{
    
//     $(".meme__image").style.filter = `saturate(${saturate}%)`
   
// })

// // invert
// $("#range__invert").addEventListener("input", ()=>{
    
//     $(".meme__image").style.filter = `invert(${invert}%)`
   
// })


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

//panel text
//TEXT UP AND DOWN
$("#top__text").addEventListener("input", ()=>{
    const topText = $("#top__text").value
    $("#h2__top").innerHTML=topText
})
$("#bottom__text").addEventListener("input", ()=>{
    const bottomText = $("#bottom__text").value
    $("#h2__bottom").innerHTML=bottomText
})


// check text 
const hideTexts = ()=>{
    const checked = $("#check__top").checked
    const checkedBottom = $("#check__bottom").checked
    if (checked){
        $("#div__top").classList.add ("hidden")
    }else{
        $("#div__top").classList.remove ("hidden")
    }
    if(checkedBottom){
        $("#div__bottom").classList.add ("hidden")
    }else{
        $("#div__bottom").classList.remove ("hidden")
    }

}
$("#check__bottom").addEventListener("input", hideTexts)
$("#check__top").addEventListener("input", hideTexts)



// 

/*
$("#url__image").addEventListener("input", ()=>{
    const urlImage = $("#url__image").value
    $(".meme__image").style.backgroundImage = `url(${urlImage})`
    $(".meme__image").style.backgroundSize ="cover"
    $(".meme__image").style.backgroundPosition ="center"
    return urlImage
})
*/