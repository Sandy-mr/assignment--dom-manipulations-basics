
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var element = document.querySelector('#inject-html .answer-box')
  element.innerHTML = "<h2>Here is some text for you!!</h2>"
});

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2

  var element = document.querySelector('#compoundInvestment')
  element.innerHTML = element.textContent *2

  // you do the rest  var content
});

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3

 var circle = document.querySelector('.circle-red');
 var med = [circle.offsetWidth,circle.offsetHeight]
 var p ="px";

  if (med[0] < 320 && med[1] < 320) {
     w= med[0]*2+p;
     h=med[1]*2+p;
     circle.style.height = h;
     circle.style.width = w;

  }else{
     circle.style.height = 40 + p;
     circle.style.width = 40 + p;
    
  }
});



document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4

 var li = document.querySelectorAll('#user-list li');
 var parent = document.querySelector('#user-list')
 var c = parent.children; 
  a = Array.from(c);
  console.log(a);
  a.forEach (function(listElement) {
   if(listElement.className === 'inactive') {
     parent.removeChild(listElement);
   }
 })
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
   var lista = document.querySelectorAll('#squares-box span');
   var parent = document.querySelector('#squares-box')
   var listArray = parent.children;
   var list = Array.from(listArray).reverse()
   console.log(list);
   list.forEach (function (listElement) {
     parent.appendChild(listElement)
   })

});




 // TASK #6
 document.querySelector("#pig-latin button").addEventListener('click',function(){

  var word = document.querySelectorAll('#tasks li');
  var parent = document.querySelector('#tasks');

  word.forEach(function (elements) {
    console.log(elements)
      var text = elements.textContent
      console.log(text)
      var reverse = text.split("").reverse().join("");
      console.log(reverse)
      elements.textContent = reverse;
      parent.appendChild(elements);
    })
});

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
   var image = document.querySelector('#city-img');
  console.log(image)
  var number = image.src;
  console.log(number)
  var target = number[number.length-5];
  console.log(target)
  var imageNumber = target*1;
  imageNumber++;
  console.log(imageNumber)
  image.src = './images/city-photo-' + imageNumber +'.jpg';


})
