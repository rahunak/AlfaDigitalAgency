function hideModalWindow() {
  //   document.body.style.overflow = 'visible';
  const modal = document.querySelector('.modal');
  modal.classList.add('hideModal_animation');
  modal.addEventListener('animationend', function removeAll() {
    document.body.style = '';
    modal.remove('showModal_animation', 'hideModal_animation');
    modal.removeEventListener('click', removeAll);
    modal.remove();
  });
}
function clickOutsideModal(event) {
  const content = document.querySelector('.content_thanks');

  if (!content) return;
  const coordsContent = content.getBoundingClientRect();

  if (event.clientX < coordsContent.left || event.clientX > coordsContent.right
            || event.clientY < coordsContent.top
            || event.clientY > coordsContent.bottom) {
    hideModalWindow();
  }
}
function showPopap() {
  //   document.body.style.overflow = 'hidden';
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="modal">
  <div class="modal__wrapper">
      <div class="content_thanks">
          <h2 class="thanks__title">Спасибо!</h2>
          <h3 class="thanks__subtitle">Мы приняли заявку<br/>
              и скоро Вам перезвоним!</h3>
          <p class="thanks__text">Пока Вы ждете звонка, можете начать общение
              с нами в одном из мессенджеров</p>
          <p class="thanks__phone">+7 (915) 168-55-50</p>
          <div class="phoneWithIcons__icons">
          <div class="icon whatsapp"></div>
          <div class="icon telegram"></div>
          <div class="icon vider"></div>
          </div>
          <div id="clouseBtn" class=""></div>
      </div>
  </div>
</div>
    `);
  document.querySelector('.modal').addEventListener('click', clickOutsideModal);

  document.querySelector('#clouseBtn').addEventListener('click', hideModalWindow);
}

document.querySelector('#makeACall').addEventListener('click', showPopap);
// document.querySelector('#make3Dorder').addEventListener('click', showPopap);
