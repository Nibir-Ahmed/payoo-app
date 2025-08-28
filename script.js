// Log in button functionality
document.getElementById('loginButton').addEventListener('click',function(e)
{
    e.preventDefault()
    console.log('log button clicked')
    const MobileNumber=12345678910
    const pinNumber=1234

    const MobileNumberValue=document.getElementById('Mobile-number').value
    const mobileNumberValueConverted=parseInt(MobileNumberValue)
    const pinNumberValue=document.getElementById('Pin-number').value
    const pinNumberValueConverted=parseInt(pinNumberValue)
    console.log(mobileNumberValueConverted.pinNumberValueConverted)
    if(mobileNumberValueConverted===MobileNumber && pinNumberValueConverted===pinNumber)
    {
        window.location.href="./main.html"
    }else{
        alert("invalid pin and number")
    }

})