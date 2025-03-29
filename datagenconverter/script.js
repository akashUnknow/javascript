let input=document.getElementById("input").value;
console.log(input);
document.getElementsByClassName("HextoASCII").addEventListener("click", function() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let ascii = "";
  for (let i = 0; i < input.length; i += 2) {
    ascii += String.fromCharCode(parseInt(input.substr(i, 2), 16));
  }
  output.value = ascii;
  console.log(ascii);
}
);