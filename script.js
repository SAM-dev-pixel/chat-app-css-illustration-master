const modalWrapper = document.querySelector('.modal-img-wrapper');
const modalImage = document.querySelector('.modal-img'); 
// images on chat clicked
((chatImages)=> {
  chatImages.forEach(img => img.addEventListener('click', ()=> {
    // show modal image
    modalImage.src = img.src;
    modalWrapper.classList.add('active');
    
  }));
})(document.querySelectorAll('.chat-img img'));
// modal close button clicked -> close modal
document.querySelector('.close-btn').addEventListener('click', ()=> modalWrapper.classList.remove('active'));
// chat hour option clicked
((chatsHour)=> {
  chatsHour.forEach(chat => chat.addEventListener('click', ()=> {
    // unactivated & activated
    chatsHour.forEach(chat => chat.classList.remove('selected'));
    chat.classList.add('selected')
    
  }));
})(document.querySelectorAll('.chat-hour'));

// animations
(()=> {
  const background = document.querySelector('.background');
  const chatElements = document.querySelectorAll('.chat-body > *');
  const textElements = document.querySelectorAll('.text-contain > *');
  // get screen height
  const screenHeight = window.innerWidth / 1;
  // background animate creeping down
  background.style.transform = (document.body.clientWidth > 800) ? 'translate(-25%, 0)' : 'translate(-50%, 0)';
  // set transition delay of any element on chat
  chatElements.forEach((el, i) => {
    el.style.transitionDelay = `${.075 * i}s`;
    el.classList.add('active');
  });
  // texts animate
  textElements.forEach(el => {
    // animate only for wider screen
    if(document.body.clientWidth > 800) {
      el.classList.add('active');
    } {
      // animate only for smaller screen when the screen is scrolled
      window.addEventListener('scroll', ()=> {
        if (el.getBoundingClientRect().top < screenHeight) {
          el.classList.add('active');
        }
      });
    }
  });
})();
