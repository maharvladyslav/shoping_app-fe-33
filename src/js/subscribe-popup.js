const popup = document.querySelector('[data-modal-subscribe]');
const subscribeForm = document.querySelector('[data-form-subscribe]');
const subscribeContent = document.querySelector('[data-form-content]');
let closeTimer;

const handlePopupClose = event => {
  if (subscribeContent && !subscribeContent.contains(event.target)) {
    startClosing();
  }
};

const handleSubmit = event => {
  event.preventDefault();
  popup.showModal();
  event.target.reset();
  clearTimeout(closeTimer);

  subscribeContent?.classList.add('subscribe-popup__content--animate');

  closeTimer = setTimeout(startClosing, 5000);
};

function startClosing() {
  if (!popup.open) return;

  if (subscribeContent?.classList.contains('closing')) return;

  subscribeContent?.classList.add('closing');

  const onAnimEnd = () => {
    subscribeContent?.classList.remove('closing');
    subscribeContent?.classList.remove('subscribe-popup__content--animate');
    popup.close();
    subscribeContent?.removeEventListener('animationend', onAnimEnd);
    subscribeContent?.removeEventListener('transitionend', onAnimEnd);
  };

  subscribeContent?.addEventListener('animationend', onAnimEnd);
  subscribeContent?.addEventListener('transitionend', onAnimEnd);
}

popup?.addEventListener('click', handlePopupClose);
subscribeForm?.addEventListener('submit', handleSubmit);
