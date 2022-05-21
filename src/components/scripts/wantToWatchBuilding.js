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
  const content = document.querySelector('.modal__content_excursion');

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
      <div class="modal showModal_animation">
      <div class="modal__wrapper">
          <div class="modal__content_excursion">
              <div class="formBlock">
                  <h1 class="formBlock__title_excursion">Хотите посмотреть, как происходит процесс строительства?</h1>
                  <p class="formBlock__subtitle_excursion">Запишитесь на бесплатную экскурсию!</p>
                  <form class="makeCallForm_excursion" name="makeCall">
                      <input class="input_excursion" type="text" placeholder="Ваше имя*" required>
                      <input class="input_excursion" type="tel" placeholder="Номер телефона*" required>
                      <select class="orderForm__select_excursion " size="1" name="messenger[]" form="orderForm">
                          <option class=" select__title_excursion" selected disabled>Выберите мессенджер</option>
                          <option class="input_excursion" value="Telegram">Telegram</option>
                          <option class="input_excursion" value="Viber">Viber</option>
                          <option class="input_excursion" value="WhatsApp">WhatsApp</option>
                      </select>
                      <button class="submitBtn_excursion" type="submit">Перезвоните мне</button>
                  </form>
                  <p class="securityInfo_excursion">
                      <span class="padlock"></span>Ваши данные не будут переданы третьим лицам
                  </p>
                  <p class="requireText_excursion">* — обязательные поля</p>
              </div>
          </div>
      </div>
      </div>
      `);
  document.querySelector('.modal').addEventListener('click', clickOutsideModal);

  //   document.querySelector('.modal').addEventListener('click', hideModalWindow);
}

document.querySelector('#excursion').addEventListener('click', showPopap);
document.querySelector('#sidebar__excursion').addEventListener('click', showPopap);
