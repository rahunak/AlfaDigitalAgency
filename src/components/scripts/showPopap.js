const thanksModal = `
<div class="modal showModal_animation">
<div class="modal__wrapper">
    <div class="contentModal content_thanks">
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
        <div id="clouseBtn_thanks" class=""></div>
    </div>
</div>
</div>
  `;
const consultationModal = `
  <div class="modal showModal_animation">
  <div class="modal__wrapper">
      <div class="contentModal content_consultation">
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
      `;
const maket3DModal = `
<div class="modal showModal_animation">
    <div class="modal__wrapper">
      <div class="contentModal modal__content">
          <div class="formBlock">
              <h1 class="formBlock__title">Закажите бесплатный 3D-макет дома</h1>
              <p class="formBlock__subtitle">Мы перезвоним в течение получаса и уточним детали</p>
              <form class="makeCallForm" name="makeCall">
                  <input id="input_name" class="input" type="text" placeholder="Ваше имя*" required>
                  <input id="input_phone" class="input" type="tel" placeholder="Номер телефона*" required>
                  <select class="orderForm__select select__title" size="1" name="messenger[]" form="orderForm">
                      <option class=" select__title" selected disabled>Выберите мессенджер</option>
                      <option class="input" value="Telegram">Telegram</option>
                      <option class="input" value="Viber">Viber</option>
                      <option class="input" value="WhatsApp">WhatsApp</option>
                  </select>
                  <button id="submitBtn__makeCall" class="submitBtn" type="submit">Перезвоните мне</button>
              </form>
              <p class="securityInfo">
                  <span class="padlock"></span>Ваши данные не будут переданы третьим лицам
              </p>
              <p class="requireText">* — обязательные поля</p>
          </div>
      </div>
    </div>
</div>
  `;
const excursionModal = `
  <div class="modal showModal_animation">
  <div class="modal__wrapper">
      <div class="contentModal modal__content_excursion">
          <div class="formBlock">
              <h1 class="formBlock__title_excursion">Хотите посмотреть, как происходит процесс строительства?</h1>
              <p class="formBlock__subtitle_excursion">Запишитесь на бесплатную экскурсию!</p>
              <form class="makeCallForm_excursion" name="makeCall">
                  <input id="input_name" class="input_excursion" type="text" placeholder="Ваше имя*" required>
                  <input id="input_phone" class="input_excursion" type="tel" placeholder="Номер телефона*" required>
                  <select class="orderForm__select_excursion " size="1" name="messenger[]" form="orderForm">
                      <option class=" select__title_excursion" selected disabled>Выберите мессенджер</option>
                      <option class="input_excursion" value="Telegram">Telegram</option>
                      <option class="input_excursion" value="Viber">Viber</option>
                      <option class="input_excursion" value="WhatsApp">WhatsApp</option>
                  </select>
                  <button id="submitBtn_excursion" class="submitBtn_excursion submitBtn" type="submit">Перезвоните мне</button>
              </form>
              <p class="securityInfo_excursion">
                  <span class="padlock"></span>Ваши данные не будут переданы третьим лицам
              </p>
              <p class="requireText_excursion">* — обязательные поля</p>
          </div>
      </div>
  </div>
  </div>
  `;

function hideModalWindow() {
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
  const content = document.querySelector('.contentModal');

  if (!content) return;
  const coordsContent = content.getBoundingClientRect();

  if (event.clientX < coordsContent.left || event.clientX > coordsContent.right
              || event.clientY < coordsContent.top
              || event.clientY > coordsContent.bottom) {
    hideModalWindow();
  }
}
function submitHandler(event) {
  event.preventDefault();
  const name = document.querySelector('#input_name');
  const phone = document.querySelector('#input_phone');
  if (name.value.length !== 0 && phone.value.length !== 0) {
    hideModalWindow();
    document.body.insertAdjacentHTML('afterbegin', thanksModal);
    document.querySelector('.modal').addEventListener('click', clickOutsideModal);
    document.querySelector('#clouseBtn_thanks').addEventListener('click', hideModalWindow);
  }
}
export default function showPopap(event) {
  event.preventDefault();
  const modal = event.target.closest('a').dataset.services;

  switch (modal) {
    case 'thanks': {
      document.body.insertAdjacentHTML('afterbegin', thanksModal);
      document.querySelector('.modal').addEventListener('click', clickOutsideModal);
      document.querySelector('#clouseBtn_thanks').addEventListener('click', hideModalWindow);
      break;
    }
    case 'excursion': {
      document.body.insertAdjacentHTML('afterbegin', excursionModal);
      document.querySelector('#submitBtn_excursion').addEventListener('click', submitHandler);
      document.querySelector('.modal').addEventListener('click', clickOutsideModal);
      break;
    }
    case 'maket3D': {
      document.body.insertAdjacentHTML('afterbegin', maket3DModal);
      document.querySelector('#submitBtn__makeCall').addEventListener('click', submitHandler);
      document.querySelector('.modal').addEventListener('click', clickOutsideModal);
      break;
    }
    case 'consultation': {
      document.body.insertAdjacentHTML('afterbegin', consultationModal);
      document.querySelector('.submitBtn').addEventListener('click', submitHandler);
      document.querySelector('.modal').addEventListener('click', clickOutsideModal);
      break;
    }
    default: {
      break;
    }
  }
}
