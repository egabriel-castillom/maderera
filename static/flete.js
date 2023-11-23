function showPrice() {
    var checkBox = document.getElementById("flete");
    var text = document.getElementById("price");
    var fInput = document.querySelector(".fshell");
    if (checkBox.checked == true){
        text.style.display = "block";
        fInput.style.display = "block";
        fInput.value = "200";
    } else {
        text.style.display = "none";
        fInput.style.display = "none";
        fInput.value = "";
    }
}
function showPriceI() {
    var checkBoxisr = document.getElementById("isr");
    var textisr = document.getElementById("priceisr"); 
    if (checkBoxisr.checked == true){
        textisr.textContent = 'Retención - 1.25%: ';
    } else {
        textisr.textContent = '';
    }
}


