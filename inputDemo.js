console.log("JS File Loaded");

function outputDemo()
{
let output = document.getElementById("myText").value;

  console.log(output);

  alert(output);

  document.getElementByID("output").innerHTML = "You entered: " + output;
}
