import showThanksPopap from './thanks';

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
  const content = document.querySelector('.content_consultation');

  if (!content) return;
  const coordsContent = content.getBoundingClientRect();

  if (event.clientX < coordsContent.left || event.clientX > coordsContent.right
    || event.clientY < coordsContent.top
    || event.clientY > coordsContent.bottom) {
    hideModalWindow();
  }
}
function showPopapFreeConsultation(event) {
  event.preventDefault();
  //   document.body.style.overflow = 'hidden';
  document.body.insertAdjacentHTML('afterbegin', `
  <div class="modal showModal_animation">
  <div class="modal__wrapper">
      <div class="content_consultation">
          <div class="formBlock_consultation">
              <h1 class="consultation__title">Закажите бесплатную
                  консультацию архитектора</h1>
              
              <form class="makeCallForm_consultation" name="makeCall">
                  <input id="input_name" class="input" type="text" placeholder="Ваше имя*" required>
                  <input id="input_phone" class="input" type="tel" placeholder="Номер телефона*" required>
                  <select class="orderForm__select input" size="1" name="messenger[]" form="orderForm">
                      <option selected disabled>Выберите услугу</option>
                      <option value="Telegram">ЗD модель</option>
                      <option value="Viber">Консультация</option>
                      <option value="WhatsApp">Вечеринка</option>
                      <option value="WhatsApp">Получить скидку</option>
                  </select>
                  <button class="submitBtn input" type="submit">Получить скидку</button>
              </form>
               <p class="securityInfo">
                   <span class="padlock"></span>Ваши данные не будут переданы третьим лицам
               </p>
               <p class="requireText">* — обязательные поля</p>
          </div>
         <div class="content__imageBlock">
             <div class="avatar"></div>
             <h1 class="imageBlock__title">Ксения Рыбакова</h1>
         </div>
      </div>
  </div>
</div>
      `);
  function submitHandler() {
    const name = document.querySelector('#input_name');
    const phone = document.querySelector('#input_phone');
    if (name.value.length !== 0 && phone.value.length !== 0) {
      showThanksPopap(event);
      hideModalWindow();
    }
  }

  document.querySelector('.submitBtn').addEventListener('click', submitHandler);
  document.querySelector('.modal').addEventListener('click', clickOutsideModal);
}

// document.querySelector('#excursion').addEventListener('click', showPopapFreeConsultation);
document.querySelector('#sidebar__worker').addEventListener('click', showPopapFreeConsultation);
document.querySelectorAll('[data-services="call"]').forEach((el) => el.addEventListener('click', showPopapFreeConsultation));
document.querySelector('[data-services="consultation"]').addEventListener('click', showPopapFreeConsultation);
