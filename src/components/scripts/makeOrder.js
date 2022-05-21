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
  const content = document.querySelector('.modal__content');

  if (!content) return;
  const coordsContent = content.getBoundingClientRect();

  if (event.clientX < coordsContent.left || event.clientX > coordsContent.right
    || event.clientY < coordsContent.top
    || event.clientY > coordsContent.bottom) {
    hideModalWindow();
  }
}
function showPopap(event) {
  //   document.body.style.overflow = 'hidden';
  event.preventDefault();
  const modal = document.createElement('div');
  modal.classList.add('modal', 'showModal_animation');
  modal.insertAdjacentHTML('afterBegin', `

    <div class="modal__content">
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

`);
  document.body.prepend(modal);
  function submitHandler() {
    const name = document.querySelector('#input_name');
    const phone = document.querySelector('#input_phone');
    if (name.value.length !== 0 && phone.value.length !== 0) {
      showThanksPopap();
      hideModalWindow();
    }
  }
  document.querySelector('#submitBtn__makeCall').addEventListener('click', submitHandler);
  document.querySelector('.modal').addEventListener('click', clickOutsideModal);
}

document.querySelector('#order3DmaketOfHouse').addEventListener('click', showPopap);
document.querySelector('#make3Dorder').addEventListener('click', showPopap);
document.querySelector('[data-services="3D-maket"]').addEventListener('click', showPopap);
