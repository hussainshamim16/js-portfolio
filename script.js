console.log("hussainshamim16")
function filter(element){
    element.src = "./filter.jpg"
    // console.log("inHoa")
}
function unfilter(atribute){
    atribute.src = "./Snapchat-475541476.jpg"
    // console.log("nhi Hoa")
}
function iner(sub){
// console.log(sub)
sub.style.marginLeft = "30px"
sub.style.transitionDuration = "2s"
sub.style.boxShadow= "2px 3px 30px 0px #a8a8a8"
}
function outer(fol){
    fol.style.marginLeft = "0px"
    fol.style.transitionDuration = "2s"
    fol.style.boxShadow= "none"
}

var peragraph = document.getElementById("pera")

peragraph.addEventListener("click",function abc(){
    console.log("red")
    for(var i = 0; i<=peragraph.lenght; i++){
        console.log(peragraph[i])
    }
})