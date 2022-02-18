function getAllInputValue(fliedId) {
    const depositInput = document.getElementById(fliedId)
    const depositValueTax = depositInput.value
    const depositValue = parseFloat(depositValueTax)
    // clear deposit inputField
    depositInput.value = ''
    return depositValue
}

function getInnerTexValue(fliedId) {
    const FliedId = document.getElementById(fliedId)
    const fliedIdTax = FliedId.innerText
    const value = parseFloat(fliedIdTax)
    return value

}

function updateTotal(fliedId, amount) {
    const totalInput = document.getElementById(fliedId)
    const totaldepositeTax = totalInput.innerText
    const previousTotalTax = parseFloat(totaldepositeTax)
    const currentTotal = previousTotalTax + amount
    totalInput.innerText = currentTotal

}

function updateBalance(amount, IsTotal) {
    const balancetag = document.getElementById('balance-total')
    const balanceTagInTax = balancetag.innerText
    const previousBalanceTax = parseFloat(balanceTagInTax)
    let currentBalance
    if (IsTotal == true) {
        currentBalance = previousBalanceTax + amount
    } else {
        currentBalance = previousBalanceTax - amount
    }
    balancetag.innerText = currentBalance
}

// Event HEndelling JS Deposite
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getAllInputValue("deposit-input")
    if (amount > 0) {
        updateTotal('deposit-total', amount)
        updateBalance(amount, true)
    } else {
        alert('Please Enter a More then 0 Deposite Value')
    }

})

// Handdle WithDraw Using Function
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getAllInputValue('withdraw-input')
    const balanceTotal = getInnerTexValue('balance-total')
    if (amount > 0 && amount <= balanceTotal) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false)
    } else {
        alert('WithDraw Not Found')
    }
})