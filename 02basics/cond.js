var grade;

grade = 16;

// var result = grade < 20;
// console.log(result)

if (grade == 20) {
    console.log("your mark is full");
} 

if (grade <= 15) {
    console.log("your mark is less");
} else {
    console.log("your mark is avarge")
}



var loggedIn = true;
var emailSudah = true;
var cardInfo = true;

if (loggedIn) {
    console.log("logged in sucsess");
    if (emailSudah) {
        console.log(" email is varified");
        if (cardInfo) {
            console.log("process done");
        }
    }
}
 

var email = true;
var faceBook = false;
var google = false ;

// if (email) {
//     console.log("logged in")
// } 
// if (faceBook) {
//     console.log("facebook success")
// }
// if (google) {
//     console.log("google done ")
// }

if (email || faceBook || google) {
    console.log("log in successful")
}


// admin - gets full access;
// subadmin - gets access to create and delete courses
// testperp - gets access to create and delete tests 
// user - gets access to consume contant 


var user = "admin";

switch (user) { 
    case "admin":
        console.log("you get full accesee")
    break;
    case "subadmin":
        console.log(" gets access to create and delete courses")
    break;
     case "testperp":
        console.log("gets access to create and delete tests")
    break;
    case "user":
        console.log("gets access to consume contant ")
    break;
   
    default: 
        console.log("trialer user")

    break;

}


// undefined
// null
// 0
// ''
// NaN

var user;

if (user) {
    console.log("OK!!")
}


var plus = "2";

// if (2 === plus) {
//     console.log("true");
// } else { ("false")
// } 

plus === 2 ? console.log("true"): console.log("false"); 





