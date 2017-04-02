var list = document.getElementById('list');
var add = document.getElementById('addElem');
var x = document.getElementsByTagName('li');

add.addEventListener('click', function() {	
	list.innerHTML += '<li>item ' + x.length + '</li>';
	console.log(x);

});