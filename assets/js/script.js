let nav =document.querySelector("#nav");
window.onscroll=function(){
    if(scrollY>=60)
    {
        nav.classList.add("positionfix");

    }
    else{
        nav.classList.remove("positionfix");
    }
}
