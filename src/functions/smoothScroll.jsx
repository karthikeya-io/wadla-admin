export const smoothScroll = (hash, event) => {
  event.preventDefault();
  const targetElement = document.querySelector(hash);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
};
