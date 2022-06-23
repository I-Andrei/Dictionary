const x = []

function inputNewWord() {
  var i = x.indexOf(document.getElementById("newWord").value)
	if(i >= 0)
    document.getElementById('MyID2').innerHTML = "The word is already in the dictionary"
  else {
    const newLength = x.push(document.getElementById("newWord").value)
    document.getElementById('MyID2').innerHTML = "The word was inserted"
  }
  document.getElementById('MyID').innerHTML = x
}