$(document).ready(function() {
    var power= false
    var piano = false
    $(".drum-pad").click(function() {
        $(this).addClass("clicked")
        tagStr = "#" + $(this).text().trim()
        audioObj = $(tagStr)
        audioSrc = audioObj.attr("src")
        const audio = new Audio(audioSrc)
        audio.volume  = Number($("#slider").val()) / 100
        if (power) {
            audio.play()
        }

        let kind = $(this).text().trim()

        if (!piano && power) {
            
            switch (kind) {
                case "Q":
                    $(".volume-box").text("Heater 1")
                    break;
                case "W":
                    $(".volume-box").text("Heater 2")
                    break;
                case "E":
                    $(".volume-box").text("Heater 3")
                    break;
                case "A":
                    $(".volume-box").text("Heater 4")
                    break;
                case "S":
                    $(".volume-box").text("Clap")
                    break;
                case "D":
                    $(".volume-box").text("Open HH")
                    break;
                case "Z":
                    $(".volume-box").text("Kick n'Hat")
                    break;
                case "X":
                    $(".volume-box").text("Kick")
                    break;
                case "C":
                    $(".volume-box").text("Closed HH")
                    break;
                
                default:
                    $(".volume-box").text("")
            }
        }


        setTimeout(function() {
            $(".drum-pad").removeClass("clicked")
        }, 200) // you can use audioObj.prop("duration") to use duration of record as delay to the removing the class
    })

    $(".power-switch").click(function() {
        if (power) {
            $(this).toggleClass("flex-right")
            power = false
            $(".volume-box").text("")
        }

        else {
            $(this).toggleClass("flex-right")
            power = true
        }
    })

    $(".bank-switch").click(function() {
        if (power) {
            $(this).toggleClass("flex-right")
        }

        else {
            $(this).toggleClass("flex-right")
        }
    })

})


let sliderChange = () =>  {
    function cleanText() {
        $(".volume-box").text("")
    } 
    if (power) $(".volume-box").text("Volume: "+ $("#slider").val())
    
    setTimeout(cleanText, 10000)
    
}

