const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", openFlex)
    panel.addEventListener("transitionend", forTrans)
});

function openFlex() {
    this.classList.toggle("open");
}

function forTrans(e) {
    if(e.propertyName.includes('flex')){
        this.classList.toggle("active");
        console.log("gg")
    }
}