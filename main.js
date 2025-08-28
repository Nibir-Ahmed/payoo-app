const validpin=1234
// add money feature 
document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault()
    const bank= document.getElementById('bank').value 
    const accountNumber= document.getElementById('add-bank-account-option').value 
    const amount= parseInt(document.getElementById('add-Amount-option').value )
    const pin= parseInt(document.getElementById('add-pin').value) 
    const AvailableBalance= parseInt(document.getElementById('Available-balance').innerText)
    if(accountNumber.length<11)
    {
        alert("Please provide a valid number")
        return
    }
    if(pin!==validpin)
    {
        alert("please provide valid pin number")
        return
    }
    const newBalance = AvailableBalance + amount
    document.getElementById('Available-balance').innerText=newBalance
})
// cash out money feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
    console.log('withdraw happend');
    const AgentNumberValue=document.getElementById('agent-number-btn').value
    const AmountValue=parseInt(document.getElementById('amount-withdraw-btn').value)
    const AvailableBalance= parseInt(document.getElementById('Available-balance').innerText)
    const PinNumber=document.getElementById('pinNumber-btn').value
    if(AgentNumberValue<11)
    {
        alert('Please provide valid Agent number ')
        return
    }
    if(PinNumber!==validpin)
    {
        alert('Please provide valid pin')
        return
    }
    const afterWithdraw = AvailableBalance - AmountValue
    document.getElementById('Available-balance').innerText=afterWithdraw
})
// toggling fearture 
document.getElementById('add-button').addEventListener('click',function(){
    
    document.getElementById('cashOut-parent').style.display='none'
    document.getElementById('add-money-parent').style.display='block'
})
document.getElementById('cashout-button').addEventListener('click',function(){
    
    document.getElementById('cashOut-parent').style.display='block'
    document.getElementById('add-money-parent').style.display='none'
})


