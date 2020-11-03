document.body.innerHTML = '<h1>working with javascript...</h1>';
console.log('hello world');
var fullName = "sara alshater";

// my name is sara and i want to learn

var loggedCount = 34;

var firstDiv = document.createElement("div")
firstDiv.innerHTML = `<p>${loggedCount}</p>`
document.body.appendChild(firstDiv) 

console.log(loggedCount);
console.log("loggedCount");

var firstName = "Sara";
var lastName = "alshater";
var email = "gleav.alshater@hotmail.com";
var pasword = "1234566";
var country = "jordan";
var state = "Amman";



console.log(`
 Your first name : ${firstName}
 Your last name : ${lastName}
 Your email : ${email}
 Your password : ${pasword}
 Your country : ${country}
 Your state : ${state}

`)

var firstDiv = document.createElement("div")
firstDiv.innerHTML = `
<p> Your first name : ${firstName} <br>
Your last name : ${lastName} <br>
Your email : ${email} <br>
Your password : ${pasword} <br>
Your country : ${country} <br> 
Your state : ${state}</p>
`
document.body.appendChild(firstDiv) 


//how to calculate a  discount precentage 
// discountPrecent = (listingPrice - sellingPrice) / listingPrice * 100
// /سعر البيع الحالي * 100كيف احسب نسبة التخفيض = (سعر البيع الحالي - السعرقبل التخفيض )

var sellingPrice = 199;
var listingPrice = 799;

var discountPrecent = (listingPrice - sellingPrice) / listingPrice * 100;

console.log("discount perecentage is :" + discountPrecent);

var displayDiscountprecent = Math.round(discountPrecent);

console.log(displayDiscountprecent + "% off");


var firstDiv = document.createElement("div")
firstDiv.innerHTML = `
<p> ${discountPrecent} = ${displayDiscountprecent} </p>
`
document.body.appendChild(firstDiv)
