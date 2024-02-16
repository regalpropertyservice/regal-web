const images = document.querySelectorAll("img"); 
let i = 0;

setInterval(function(){
   
 images.forEach( (img, i) => {
    img.style.display = 'none';
  })

  if ( i == images.length){
    i=0;
  }

  images[i].style.display = 'block';
  i++;

}, 2000);

// alert('Regal Property Services is a family owned and operated company that is dedicated to quality service with exceptional results!');
// alert('Our values of integrity, honesty, respect, and hard work are what you can expect when you hire Regal for your next home improvement project.');