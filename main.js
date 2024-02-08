let stars = document.getElementById("stars")
let con = document.getElementById("con")
let moon2 = document.getElementById("moon2")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river5 = document.getElementById("river5")
let boat6 = document.getElementById("boat6")
let mountains7 = document.getElementById("mountains7")
let x = document.querySelector('.main');
window.onscroll = function(){
    
    let value = scrollY;
    stars.style.left= value*1.5 + "px";
    moon2.style.top= value*2.5 + "px";
    mountains3.style.top = value *1.2 + "px";
    mountains4.style.top = value *1.5 + "px";
    boat6.style.left = value*2.5 + "px";
    boat6.style.top = value + "px";
    river5.style.top = value + "px";
    con.style.fontSize = value + "px"
    if (value > 120) {
        con.style.fontSize = 120 + "px"
        con.style.position = "fixed"
        if (value > 698) {
            con.style.display = "none"
        }else{
            con.style.display = "block"
        }
        if (value >= 300){
            x.style.background = "linear-gradient(#107f83,#0b637b)";
        }else{
            x.style.background = "linear-gradient(#200016,#10001f)"
        }
    }
    
    console.log(value);
}
