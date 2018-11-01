window.onload = function(){
    var i = 0, text;
    text = "Hey, I'm ";

    function typing(){
        if(i < text.length){
            document.querySelector(".typedtext").innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 200);
        }
    }

    var textrise = document.querySelector(".textrise");
    textrise.setAttribute(
        "style", "transform: translateY(0vh); opacity: 1;"
    );

    function timingSpan(){
        var textspan = document.querySelectorAll(".textrise p span");
        // Turning the nodelist of spans into an array and looping through each of them
        Array.from(textspan).forEach(function(text){
            // console.log(text.textContent)
            text.setAttribute(
                "style", "transform: translateX(0vw); opacity: 1;"
            )
        })
    }
    typing();
    timingSpan();
};

function resume(){
    var resume = document.querySelector(".resume");
    // resume.setAttribute(
    //     "style", "transform: translateX(0vw);"
    // )
    resume.classList.toggle("resumetog");
}

function exitResume(){
    var resume = document.querySelector(".resume");
    resume.classList.toggle("resumetog");
}

function toggleVideo(){
    var displayvideo = document.querySelector(".displayvideo");
    displayvideo.classList.toggle("revealvid");
}


window.onscroll = function(){
    var scrollnav = document.querySelector(".scrollnav");
    var header = document.querySelector(".headerintro");
    var links = document.querySelectorAll(".scrollnav ul li a");
    var uparrow = document.querySelector(".uparrow");

    if(window.pageYOffset > header.scrollHeight){
        scrollnav.classList.add("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 1; transition: all 1s ease-in .3s; display: block"
            )
        }
        uparrow.classList.add("uparrowshow");        
    }else{
        scrollnav.classList.remove("scrollnavshow");
        for(var i = 0; i < links.length; i++){
            links[i].setAttribute(
                "style", "opacity: 0;"
            )
        }
        uparrow.classList.remove("uparrowshow");
    }
}
