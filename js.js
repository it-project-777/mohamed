// JavaScript code to toggle dropdown menu and update icon
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = toggleBtn.querySelector('i');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen ? 'fas fa-xmark' : 'fas fa-bars';
    });
});
