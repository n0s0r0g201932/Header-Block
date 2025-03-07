document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');

    burgerMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Обработчик клика по документу
    document.addEventListener('click', function (event) {
        // Проверяем, кликнули ли мы не по бургер-меню и не по меню
        if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
            // Если меню открыто, закрываем его
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});