function calculate() {
  var total_amount = document.getElementById("bill").value;
  var percent = document.getElementById("percentage").value;
  var people = document.getElementById("num_people").value;
  if (total_amount<=0) {
    document.getElementById("answer").innerHTML="Invalid bill amount. Please try again";
    document.getElementById("bill").style.borderColor="#BF5A4A";
    document.getElementById("percentage").style.borderColor="LightGray";
    document.getElementById("num_people").style.borderColor="LightGray";
  }
  else if (percent==0) {
    document.getElementById("answer").innerHTML="Please select the tip percentage";
    document.getElementById("percentage").style.borderColor="#BF5A4A";
    document.getElementById("bill").style.borderColor="LightGray";
    document.getElementById("num_people").style.borderColor="LightGray";
  }
  else if (people<=0) {
    document.getElementById("answer").innerHTML="Invalid number of people. Please try again";
    document.getElementById("num_people").style.borderColor="#BF5A4A";
    document.getElementById("bill").style.borderColor="LightGray";
    document.getElementById("percentage").style.borderColor="LightGray";
  }
  else {
    var calculated_tip = total_amount*percent/people;
    var rounded_tip = calculated_tip.toFixed([2])
    document.getElementById("answer").innerHTML="Tip amount:<br>$"+rounded_tip+"<br>each";
    document.getElementById("bill").style.borderColor="LightGray";
    document.getElementById("percentage").style.borderColor="LightGray";
    document.getElementById("num_people").style.borderColor="LightGray";

  }
}
function mouseover(){
  document.getElementById("my_button").style.backgroundColor="#282828";
  document.getElementById("my_button").style.cursor="pointer";
}
function mouseout(){
  document.getElementById("my_button").style.backgroundColor="Black";
}
