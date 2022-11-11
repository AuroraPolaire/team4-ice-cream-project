const firstImg = document.querySelector('.gallery__item');

const toggleGallery = () => {
  const activeImg = document.querySelector('.gallery .active');
  // console.log(activeImg.nextElementSibling);
  //  console.log(firstImg);
  const next = activeImg.nextElementSibling
    ? activeImg.nextElementSibling
    : firstImg;
  activeImg.classList.remove('active');
  next.classList.add('active');
};

// Run our toggleGallery function every 5secs
setInterval(toggleGallery, 5000);
