player_1 = localStorage.getItem("Player 1");
document.getElementById("player_1name").innerHTML = player_1 + ": 0";

player_2 = localStorage.getItem("Player 2");
document.getElementById("player_2name").innerHTML = player_2 + ": 0";


function send(){
number1 = document.getElementById("input_1").value;
number2 = document.getElementById("input_2").value;
console.log("Number 1 = "+number1);
console.log("Number 2 = "+number2);

sum_of_numbers = number1*number2;
console.log(sum_of_numbers);

question_timeds = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer: <input type = 'number' id = 'input_checkbox'>";
check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>CHECK</button>";
row = question_timeds + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("input_1").value = "";
document.getElementById("input_2").value = "";

}