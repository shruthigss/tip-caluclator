const billinput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerperson = document.querySelector(".tip-amount");
const totalperperson = document.querySelector(".total-amount");
const tip = document.querySelector(".tips");

billinput.addEventListener("input", billinputFunction);
peopleInput.addEventListener("input", peopleInputFunction);

tip.forEach(function(val){
    val.addEventListener("click",handlsumbit)
})

billinput.value = "0.0";
peopleInput.value = "1";

