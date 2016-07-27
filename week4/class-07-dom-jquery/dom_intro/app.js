// window.onload = function () {
// 	alert('loaded!');
// }

// alert('still loading!')

var helloEl = document.getElementById('hello')

console.log(helloEl)

helloEl.innerHTML= 'JS IS SO COOL'

var pEl = document.querySelector('p')
console.log(pEl)

var listEls = document.querySelectorAll('p')
console.log(listEls)

document.getElementById('my-btn').onclick = function (event) {

	var input = document.getElementById('my-input').value;
}