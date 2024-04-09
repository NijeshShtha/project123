let Mode = "light";
let body = document.querySelector("body");
let change = document.querySelector("img");
let img = document.getElementById("toggle-img");
img.onclick = function(){
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        img.src = "d-l mode1.png";
    }
    else{
        img.src = "d-l mode2.png";
    }
    if(Mode==="light"){
        Mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        localStorage.setItem('mode', 'dark');
    }
    else{
        Mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        localStorage.setItem('mode', 'light');
    }
    // console.log(Mode);
}
change.addEventListener("click",() =>{
        
});
window.onload = function(){
    var storedColor = localStorage.getItem('mode');
    if(storedColor == 'dark')
    {
        document.body.classList.add('dark');
    }
}