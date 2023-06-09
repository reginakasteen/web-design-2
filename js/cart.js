$(document).ready(function() {
    // Обробник події кліку на кнопку "Додати"
    $('.mp-button').click(function(e) {
        e.preventDefault(); // Заборонити стандартну дію посилання

        // Отримати дані туру з обраної карти
        var card = $(this).closest('.index-card');
        var title = card.find('.card-title').text().trim();
        var price = card.find('.h6-title.icon-dollar').text().trim();

        // Зберегти дані туру в локальному сховищі
        localStorage.setItem('selectedTour', JSON.stringify({ title: title, price: price }));

        // Перенаправити користувача на сторінку "cart.html"
        window.location.href = 'cart.html';
    });

    // Відображення обраного туру на сторінці "cart.html"
    var selectedTour = JSON.parse(localStorage.getItem('selectedTour'));
    if (selectedTour) {
        $('.sum').text(selectedTour.price);
        $('.card-title').text(selectedTour.title);
    }
});
