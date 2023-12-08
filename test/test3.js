const userInput = prompt("온도의 종류 입력")
if (userInput == "C") {
    console.log(userInput + "C = " + userInput*9/5+32 + "F");
}else if (userInput == "A"){
    console.log("ERROR DATA = " + userInput);
}
