var bar = document.querySelector('.menu')
var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')
var txt1 = document.querySelector('#txt1')
var txt2 = document.querySelector('#txt2')


bar.addEventListener("mouseover", function(){
    setTimeout(function() {
        img1.style.display = ' inline-block'
        img2.style.display = ' inline-block'
        txt1.style.display = 'none'
        txt2.style.display = 'none'
      }, 100);
    
    
})

bar.addEventListener("mouseout", function(){
    setTimeout(function() {
        img1.style.display = ' none'
        img2.style.display = ' none'
        txt1.style.display = 'inline-block'
        txt2.style.display = 'inline-block'
    
      }, 100);
    
})