var h1 = document.body.querySelectorAll(' h1 *');
for(var i=0; i<h1.length; i++){
        h1[i].outerHTML = "<h2>"+h1[i].textContent+"</h2>";
 }
