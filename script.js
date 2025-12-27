const items = document.querySelectorAll('.faq_text');
const clickable = document.querySelectorAll('.faq_item');
clickable.addEventListener('click', () => {
    items.style.display = 'block';
});