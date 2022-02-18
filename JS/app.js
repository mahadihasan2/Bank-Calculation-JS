document.getElementById('deposit-button').addEventListener('click', function () {
    const inputField = document.getElementById('deposit-input')
    const InputFliedInTax = inputField.value;
    const depositeTotal = parseFloat(InputFliedInTax)
    inputField.value = '';

    // Handle Deposit Total
    const totalDepositeUpdate = document.getElementById('deposit-total');
    const totalDepositTax = totalDepositeUpdate.innerText
    const previousTotalDeposit = parseFloat(totalDepositTax)
    const newDepositTotal = previousTotalDeposit + depositeTotal
    totalDepositeUpdate.innerText = newDepositTotal;

    // Update Balance Total 
    const updateTotalBalance = document.getElementById('balance-total')
    const updateTotalBalanceTax = updateTotalBalance.innerText
    const previousTotalBalance = parseFloat(updateTotalBalanceTax)
    const newTotalBalance = previousTotalBalance + newDepositTotal
    updateTotalBalance.innerText = newTotalBalance



});

// WithDraw Click Handler Add 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value
    const withdrawInputTotal = parseFloat(withdrawValue)

    // Handle the Withdraw TOtal 
    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalTax = withdrawTotal.innerText
    const previousTotalWithdraw = parseFloat(withdrawTotalTax)
    const newWithDrawTotal = previousTotalWithdraw + withdrawInputTotal
    withdrawTotal.innerText = newWithDrawTotal

    // Handle the WithdrawTotal Balance 
    const withDrawTotalBalance = document.getElementById('balance-total')
    const withdrawBalanceTax = withDrawTotalBalance.innerText
    const previousWithdrawBalance = parseFloat(withdrawBalanceTax)
    const newWithdrawBalance = previousWithdrawBalance - newWithDrawTotal
    withDrawTotalBalance.innerText = newWithdrawBalance


    // withdrawFlied Clear 

    withdrawInput.value = ''
})