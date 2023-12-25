const calcButton = document.querySelector(".calcBtn")
const insertValue = document.querySelector(".insertValue")
const selectInstallment = document.querySelector(".instalmentsSelect")
const finalResult = document.querySelector(".final-result")

function calcFees() {

    if(insertValue.value <= 50) {
      alert("Insira valor superior a R$ 50,00")
    }

    if (selectInstallment.value == "1") {
        const result1 = insertValue.value / (1 - 0.0299)

        finalResult.innerHTML = `<p class="result">Valor total da Compra: 
     <br><strong>R$ ${result1.toFixed(2)}</strong></p>`
    }

    if (selectInstallment.value == "2") {
        const result2 = insertValue.value / (1 - 0.0409)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result2.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result2.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "3") {
        const result3 = insertValue.value / (1 - 0.0478)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result3.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result3.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "4") {
        const result4 = insertValue.value / (1 - 0.0546)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result4.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result4.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "5") {
        const result5 = insertValue.value / (1 - 0.0614)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result5.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result5.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "6") {
        const result6 = insertValue.value / (1 - 0.0681)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result6.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result6.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "7") {
        const result7 = insertValue.value / (1 - 0.0767)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result7.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result7.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "8") {
        const result8 = insertValue.value / (1 - 0.0833)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result8.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result8.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "9") {
        const result9 = insertValue.value / (1 - 0.0898)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result9.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result9.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "10") {
        const result10 = insertValue.value / (1 - 0.0962)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result10.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result10.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "11") {
        const result11 = insertValue.value / (1 - 0.1026)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result11.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result11.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "12") {
        const result12 = insertValue.value / (1 - 0.1090)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result12.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result12.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "13") {
        const result13 = insertValue.value / (1 - 0.1232)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result13.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result13.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "14") {
        const result14 = insertValue.value / (1 - 0.1294)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result14.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcela<br> de 
        <strong>R$ ${(result14.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "15") {
        const result15 = insertValue.value / (1 - 0.1356)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result15.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result15.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "16") {
        const result16 = insertValue.value / (1 - 0.1417)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result16.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result16.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "17") {
        const result17 = insertValue.value / (1 - 0.1478)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result17.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result17.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
    if (selectInstallment.value == "18") {
        const result18 = insertValue.value / (1 - 0.1537)

        finalResult.innerHTML = `<p class="result">Valor total da Compra:<br><strong>R$ ${result18.toFixed(2)}</strong>
        em <strong>${selectInstallment.value} </strong>parcelas<br> de 
        <strong>R$ ${(result18.toFixed(2) / selectInstallment.value).toFixed(2)}</strong></p>`
    }
}

calcButton.addEventListener("click", calcFees)