console.log('test');


function checkform() {
  var f = document.forms["theform"].elements;
  var cansubmit = true;

  for (var i = 0; i < f.length; i++) {
      if (f[i].value.length == 0)
          cansubmit = false;
  }

  document.getElementById('submitbutton').disabled = !cansubmit;
}
window.onload = checkform;

document.getElementById('submitbutton').addEventListener('click', function(e){
  e.preventDefault();
  console.log('clicky');
})