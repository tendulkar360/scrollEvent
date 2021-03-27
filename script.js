// window.addEventListener("scroll" , function(){
//     const scrollable = document.documentElement.scrollHeight;
//     // const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     // const scrolled = window.scrollY;
//     // console.log(scrolled)
// console.log(scrollable)
//     // const height = window.innerHeight;
//     // console.log(height)

//     // if(Math.ceil(scrolled ==  scrollable)){
//     //     alert("You\'ve reached.")
//     // }

//     // prompt(height)
// })

var navbar = document.getElementById("navbar")

function back() {
    if (navbar.style = "margin-top: 0;") {
        navbar.style = "background: rgb(0,0,0,.4)"
    }
}

document.getElementById("home").addEventListener("click", function () {
    if (document.getElementById("home").classList != "active") {
        document.getElementById("home").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("services").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
    }
})

document.getElementById("about").addEventListener("click", function () {
    if (document.getElementById("about").classList != "active") {
        document.getElementById("about").classList.add("active")
        document.getElementById("home").classList.remove("active")
        document.getElementById("services").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
    }
})

document.getElementById("services").addEventListener("click", function () {
    if (document.getElementById("services").classList != "active") {
        document.getElementById("services").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("home").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
    }
})

document.getElementById("contact").addEventListener("click", function () {
    if (document.getElementById("contact").classList != "active") {
        document.getElementById("contact").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("services").classList.remove("active")
        document.getElementById("home").classList.remove("active")
    }
})

$(".navbar a").on("click", function (e) {
    if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $('html , body').animate({
            scrollTop: $(hash).offset().top
        },
            10000)
    }
})

window.addEventListener("scroll", function () {
    if(scrollY != 625){
        document.getElementById("home").classList.add("active")
        document.getElementById("about").classList.remove("active")
        document.getElementById("services").classList.remove("active")
        document.getElementById("contact").classList.remove("active")
    }
        if (scrollY >= 625) {
            document.getElementById("about").classList.add("active")
            document.getElementById("home").classList.remove("active")
            document.getElementById("services").classList.remove("active")
            document.getElementById("contact").classList.remove("active")
        }
        if (scrollY >= 1250) {
            document.getElementById("services").classList.add("active")
            document.getElementById("about").classList.remove("active")
            document.getElementById("home").classList.remove("active")
            document.getElementById("contact").classList.remove("active")
        }
        if (scrollY >= 1875) {
            document.getElementById("contact").classList.add("active")
            document.getElementById("about").classList.remove("active")
            document.getElementById("services").classList.remove("active")
            document.getElementById("home").classList.remove("active")
        }
})

window.addEventListener("scroll" , function(){
    if(scrollY != 0){
    document.getElementById("topScroll").style = "display: block;"
    }
    if(scrollY == 0){
        document.getElementById("topScroll").style = "display: none;"
    }
})