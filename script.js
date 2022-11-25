function printTable() {
    let number;
    let result = "";

    number = document.getElementById("num").value;
    if(number == ""){
        return;
    }

    for(let i = 1; i<= 10; i++){
      result = result + " <p> "+number + " * " + i + " = " + number * i+"</p>";
    }

    document.getElementById("result").innerHTML = result;
  }

function erase_Text() {
    document.getElementById("num").value = "";
    document.getElementsByClassName("answer")
  }
