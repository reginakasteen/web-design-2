// Отримати контейнер для карток
var cardContainer = document.querySelector('.mp-cards');

// Масив з даними карток


var cardsData = [
    {
        image: 'images/prague.png',
        title: 'Замки Праги та її околиць',
        country: 'Чехія',
        duration: '2 дні',
        price: '300',
        description: 'За два дні ви відвідаєте зо два десятки дивовижних місць Праги. Тут навіть власна Троя є! Щоправда, це лише палац.'
    },
    {
        image: 'images/twenties.png',
        title: 'Roaring Twenties Tour',
        country: 'США',
        duration: '4 дні',
        price: '500',
        description: 'Зануртесь у динамічну атмосферу Нью-Йорка. Вас чекає джаз, архітектура в стилі арт-деко та чарльстон.'
    },
    {
        image: 'images/tokyo.png',
        title: 'Токіо по-європейськи',
        country: 'Японія',
        duration: '4 дні',
        price: '800',
        description: 'А ви знали, що в Японії є будівлі у європейському стилі? Наприклад, відомий купол Гембаку чи залізничний вокзал у Токіо.'
    },
    {
        image: 'images/Lviv.jpg',
        title: 'Вінтажний лев',
        country: 'Україна',
        duration: '3 дні',
        price: '300',
        description: 'Львів — класика українського туризму. Та ми вважаємо, що нам підсилу відкрити його для вас з нового боку.'
    },
    {
        image: 'images/copenhagen.jpg',
        title: 'Казками Андерсена',
        country: 'Данія',
        duration: '3 дні',
        price: '700',
        description: 'Кількість згадок Андерсена на квадратний метр тут просто зашкалює. Перевірте це самі та відвідайте легендарний парк Тіволі.'
    },
    {
        image: 'images/stockholm.jpg',
        title: 'Стокгольмські острови',
        country: 'Швеція',
        duration: '4 дні',
        price: '500',
        description: 'Як Венеція, тільки краще. Стокгольм розташований на 14 островах, кожен з яких має свої візитівки та чудові пам\'ятки архітектури.'
    },
    {
        image: 'images/paris.jpg',
        title: 'Вулиці Парижа',
        country: 'Франція',
        duration: '2 дні',
        price: '900',
        description: 'Париж — це не тільки Ейфелева вежа, а й 5-6 тисяч романтичних вулиць! У нашому турі ми покажемо лише найцікавіші з них.'
    }
];

// Створити HTML-код для кожної карти
var cardHTML = '';
for (var i = 0; i < cardsData.length; i++) {
    var card = cardsData[i];
    cardHTML += `
    <div class="col-4">
      <div class="mp-card index-card card">
        <img src="${card.image}" class="w-100" alt="...">
        <div class="wrap w-100">
          <a href="cart.html" class="mp-button">До кошика</a>
        </div>
        <div class="card-body">
          <h4 class="card-title">${card.title}</h4>
          <h6 class="icon-globus">${card.country}</h6>
          <h6 class="h6-title icon-calendar">${card.duration}</h6>
          <h6 class="h6-title icon-dollar">${card.price}</h6>
          <p class="card-text">${card.description}</p>
        </div>
      </div>
    </div>
  `;
}

// Вставити HTML-код карток у контейнер
cardContainer.innerHTML = cardHTML;

// Функція для обробки події натискання на кнопку "Додати"
function addToCart(event) {
    // Отримуємо батьківський елемент кнопки "Додати" (картку)
    var card = event.target.closest('.mp-card');

    // Отримуємо дані про тур з вибраної картки
    var image = card.querySelector('img').src;
    var title = card.querySelector('.card-title').textContent;
    var price = card.querySelector('.icon-dollar').nextSibling.textContent.trim();

    // Зберігаємо дані про тур у localStorage
    localStorage.setItem('tourImage', image);
    localStorage.setItem('tourTitle', title);
    localStorage.setItem('tourPrice', price);
}

// Отримуємо всі кнопки "Додати" на сторінці
var addButtons = document.querySelectorAll('.mp-button');

// Додаємо обробник події для кожної кнопки "Додати"
addButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
});
