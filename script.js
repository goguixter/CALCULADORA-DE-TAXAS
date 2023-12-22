const calcButton = document.getElementById("calcBtn").addEventListener("click", totalValue)
const inputValue = document.getElementById("value-input")
const divResult = document.querySelector(".final-result")

function totalValue(){
    
    const result = inputValue.value * selectValue.value

    divResult.innerHTML = `<p class="description"> Sua compra terá o valor total de<bR>${result+inputValue}</p>`
    
}


const selectValue = document.querySelector(".select-installments")

selectValue.addEventListener("change", totalValue)