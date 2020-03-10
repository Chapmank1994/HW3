// Prompt for user input
var arraylist = []
for (var stepinterval=0; stepinterval <= endnum; stepinterval++ ){
arraylist.map(stepinterval+stepnum)

}

// var then name / Will save into "name"
// REMEMBER that the Users Input will be saved into the window.prompt

var startInst = window.prompt("Enter start Number");
var endInst = window.prompt("Enter End number:");
var stepInst = window.prompt("Enter Step Number:");

// How to turn the Users input number(strings) into actual numerical values.
// These are the actual UserInputs
startnum = parseInt(startInst);
if (isNaN(startInst)==true){                          
                    document.getElementById("array").innerHTML = "User input no valid, please reload and try again"}
endnum = parseInt(endInst);
if (isNaN(endInst)==true){                          
  document.getElementById("array").innerHTML = "User input no valid, please reload and try again"}

  stepnum = parseInt(stepInst);
  if (isNaN(stepInst)==true){                          
    document.getElementById("array").innerHTML = "User input no valid, please reload and try again"}

// let array = (step
//     while (stepinterval =< endnum){

//     }
// );
sum = (startnum + endnum + stepnum);
userinput = [startnum, endnum, stepnum];
stepinterval = (startnum + stepnum);
// for (stepinterval<=endInst) {s}

//  binary = ()



// prints out selected numbers, "<br/> used to break lines of output strings"
// Plus step number funtion
// Plus-Step funtion results turned into binary
document.write("The generated array is " + startnum +   "<br/>");
document.write("The Sum is " + sum + stepinterval + "<br/>");
document.write("The binary of absolute element values are <br/>");