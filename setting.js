let Mode = "light";
let body = document.querySelector("body");
let change = document.querySelector("button");
change.addEventListener("click",() =>{
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
    console.log(Mode);
});
window.onload = function()
{
    var storedColor = localStorage.getItem('mode');
    if(storedColor == 'dark')
    {
        document.body.classList.add('dark');
    }
}