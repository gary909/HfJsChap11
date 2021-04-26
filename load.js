// function handler() {
//     alert("Yeah, that page loaded!")    
// }

// window.onload = handler

//******************************************

//Same code without using a function name ->

// window.onload = function() {
//     alert("Yeah, that page loaded!")    
// }

//******************************************

//Re-work this code to include anonymous functions ->

// window.onload = init;
// var cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function(time) {
//         console.log("Baking the cookies");
//         setTimeout(done, time);
//     }
// };
// function init() {
//     var button = document.getElementById("bake");
//     button.onclick = handleButton;
// }
// function handleButton() {
//     console.log("Time to bake the cookies.");
//     cookies.bake(2500);
// }
// function done() {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookings.");
//     var cool = function() {
//         alert("Cookies are cool, time to eat!");
//     };
//     setTimeout(cool, 1000);
// }

//******************************************

//Re-worked code ->

// window.onload = function() {
//     var button = document.getElementById("bake");
//     button.onclick = function() {
//         console.log("Time to bake the cookies.");
//         cookies.bake(2500);
//     };
// }

// var cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function(time) {
//         console.log("Baking the cookies");
//         setTimeout(done, time);
//     }
// };

// function done() {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookings.");
//     var cool = function() {
//         alert("Cookies are cool, time to eat!");
//     };
//     setTimeout(cool, 1000);
// }

//******************************************

// function cookieAlarm() {
//     alert("Time to take the cookies out of the oven");
// };

// setTimeout(cookieAlarm, 2000);

//****Reworked version ->

// setTimeout(function() { 
//     alert("Time to take the cookies out of the oven");
// }, 2000);

//******************************************

// Original Code ->

function vaccine(dosage) {
    if (dosage > 0) {
        inject(dosage);
    }
}

administer(patient, vaccine, time);

// Reworked Code ->

administer(patient, function(dosage) {
        if (dosage > 0) {
            inject(dosage);
        }
}, time);