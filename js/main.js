const $ = (selector) => document.querySelector(selector)


//panel buttons -----------------------------------------------------------

$(".button__image").addEventListener("click", ()=>{
    if($(".panel__image").style.display="block"){
        $(".panel__container").style.display="flex"
        $(".panel__text").style.display="none"

    }
})

$(".button__text").addEventListener("click", ()=>{
    if($(".panel__text").style.display="block"){
        $(".panel__container").style.display="flex"
        $(".panel__image").style.display="none"
    }
})

// ---------------- BTN CLOSE ----------------------
const btnClose =()=>{
    $(".btn__close__image").addEventListener("click", ()=>{
        $("#aside").style.display = "none"
    })
    $(".btn__close__text").addEventListener("click", ()=>{
        $("#aside").style.display = "none"
    })
        
} 
btnClose()

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


// BUTTON DOWNLOAD

const download = ()=>{
    domtoimage.toBlob($('.main__meme')).then((blob) => {
        saveAs(blob, 'mi-meme.png')
      })
}
$(".meme__button").addEventListener("click",download)

//panel Image -----------------------------------------------------------
//url -------------------------------------------------------------------
const meme =()=>{
$("#url__image").addEventListener("input", ()=>{
    const urlImage = $("#url__image").value
    $(".meme__image").style.backgroundImage = `url(${urlImage})`
    $(".meme__image").style.backgroundSize ="cover"
    $(".meme__image").style.backgroundPosition ="center"
    
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
changeMeme()
const filterMeme=()=>{
    $("#range__brightness").addEventListener("input",changeMeme)
    $("#range__opacity").addEventListener("input",changeMeme)
    $("#range__contrast").addEventListener("input",changeMeme)
    $("#range__blur").addEventListener("input",changeMeme)
    $("#range__grayscale").addEventListener("input",changeMeme)
    $("#range__sepia").addEventListener("input",changeMeme)
    $("#range__hue").addEventListener("input",changeMeme)
    $("#range__saturate").addEventListener("input",changeMeme)
    $("#range__invert").addEventListener("input",changeMeme)
    
}
filterMeme()

// background color -----------------------------------------------------------

$("#background__color").addEventListener("input", ()=>{
    $(".meme__image").style.backgroundColor = $("#background__color").value
})

// text of image background color 

const imageBackgroundColor=()=>{
    $("#background__color").addEventListener("input",()=>{
        const name_back = $("#background__color").value
        $("#name__background").innerHTML = name_back
    })
}
imageBackgroundColor()

// select blend-mode -----------------------------------------------------------
const blendMode =()=>{
    $("#panel__control__select").addEventListener("input", ()=>{
        $(".meme__image").style.backgroundBlendMode = $("#panel__control__select").value
    })        
}
blendMode()


// RESET IMAGE ------------------------------------
  $(".panel__control__restore").addEventListener("click", ()=>{
    const brightness = $("#range__brightness").value = 1
    const opacity =$("#range__opacity").value = 1
    const contrast = $("#range__contrast").value=100
    const blur =$("#range__blur").value =0
    const grayscale =$("#range__grayscale").value =0
    const sepia=$("#range__sepia").value =0
    const hue = $("#range__hue").value =0
    const saturate=$("#range__saturate").value =100
    const invert=$("#range__invert").value =0
      
    $(".meme__image").style.filter = `brightness(${brightness})opacity(${opacity})contrast(${contrast}%)blur(${blur}px)grayscale(${grayscale}%)sepia(${sepia}%)hue-rotate(${hue}deg)saturate(${saturate}%)invert(${invert})`
       
  })


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

// COLOR TEXT
const colorText =()=>{
    $("#text__color").addEventListener("input", ()=>{
        const textColor = $("#text__color").value
        $("#h2__top").style.color = textColor
        $("#h2__bottom").style.color =textColor
    })
    $("#text__back").addEventListener("input", ()=>{
        const textColor = $("#text__back").value
        $("#div__top").style.backgroundColor = textColor
        $("#div__bottom").style.backgroundColor =textColor
    })
    
}  
colorText()

//BACK TRANSPARENT ----------------------

$("#check__back__text").addEventListener("input", ()=>{
    const checkedText = $("#check__back__text").checked
    if(checkedText){
        $("#div__top").style.backgroundColor = "transparent"
        $("#div__bottom").style.backgroundColor = "transparent"
        $("#image__meme").style.backgroundColor = "transparent"
        $("#image__meme").style.backgroundImage = "none"
        $("#image__meme").classList.add(".meme__image__transparent")
        const urlImage = $("#url__image").value
        $(".main__meme").style.backgroundImage = `url(${urlImage})`
       
            const brightness = $("#range__brightness").value
            const opacity = $("#range__opacity").value
            const contrast = $("#range__contrast").value
            const blur = $("#range__blur").value
            const grayscale = $("#range__grayscale").value
            const sepia = $("#range__sepia").value
            const hue = $("#range__hue").value
            const saturate = $("#range__saturate").value
            const invert = $("#range__invert").value
                        
        $(".main__meme").style.filter = `brightness(${brightness})opacity(${opacity})contrast(${contrast}%)blur(${blur}px)grayscale(${grayscale}%)sepia(${sepia}%)hue-rotate(${hue}deg)saturate(${saturate}%)invert(${invert})`
        $(".main__meme").style.backgroundSize ="cover"
        $(".main__meme").style.backgroundPosition ="center"
    }else{
        $("#div__top").style.backgroundColor = $("#text__back").value
        $("#div__bottom").style.backgroundColor = $("#text__back").value
        const urlImage = $("#url__image").value
        $(".meme__image").style.backgroundImage = `url(${urlImage})`
        $(".meme__image").style.backgroundSize ="cover"
        $(".meme__image").style.backgroundPosition ="center"
        $(".main__meme").style.backgroundImage="none"
        $(".main__meme").style.filter="none"


    }

})

//FONT-FAMILY -----------------------------

$("#fonts__select").addEventListener("input",()=>{
    const familyFont = $("#fonts__select").value
    $("#h2__top").style.fontFamily = familyFont
    $("#h2__bottom").style.fontFamily = familyFont
})

//FONT SIZE -------------------------------------
$("#text_size_change").addEventListener("input",()=>{
    const familySize = $("#text_size_change").value
    $("#h2__top").style.fontSize = `${familySize}px`
    $("#h2__bottom").style.fontSize = `${familySize}px`
})

// TEXT ALIGN -------------------------------------
const buttonAlign =()=>{
    $("#align__left").addEventListener("click",()=>{
        $("#div__top").style.justifyContent = "left"
        $("#h2__top").style.paddingLeft = "15px"
        $("#div__bottom").style.justifyContent = "left"
        $("#h2__bottom").style.paddingLeft = "15px"
    }) 
    $("#align__right").addEventListener("click",()=>{
        $("#div__top").style.justifyContent = "right"
        $("#h2__top").style.paddingRight = "15px"
        $("#div__bottom").style.justifyContent = "right"
        $("#h2__bottom").style.paddingRight = "15px"
    })
    $("#align__center").addEventListener("click",()=>{
        $("#div__top").style.justifyContent = "center"
        $("#div__bottom").style.justifyContent = "center"
    })
}
buttonAlign()

// STROKE --------------------

const strokeText = () =>{
    $("#stroke__none").addEventListener("click", ()=>{
        $("#h2__top").style.webkitTextStroke = "0"
        $("#h2__bottom").style.webkitTextStroke = "0"
    })
    $("#stroke__light").addEventListener("click", ()=>{
        $("#h2__top").style.webkitTextStroke = "1px"
        $("#h2__bottom").style.webkitTextStroke = "1px currentColor"
    })
    $("#stroke__dark").addEventListener("click", ()=>{
        $("#h2__top").style.webkitTextStroke = "2px"
        $("#h2__bottom").style.webkitTextStroke = "2px currentColor"
    })
    
}
strokeText()
// SPACE -----------

const spaceText = () =>{
    $("#text__space").addEventListener("input", ()=>{
        const space = $("#text__space").value
        $("#div__top").style.paddingTop = `${space}px`
        $("#div__bottom").style.paddingTop = `${space}px`
        $("#div__top").style.paddingBottom = `${space}px`
        $("#div__bottom").style.paddingBottom = `${space}px`
    })
}
spaceText()

// LEADING -----------

const leadingText = () =>{
    
    $("#text__leading").addEventListener("input", ()=>{
        const leading = $("#text__leading").value
        $("#h2__top").style.lineHeight = `${leading}`
        $("#h2__bottom").style.lineHeight = `${leading}`
    })
}
leadingText()





    