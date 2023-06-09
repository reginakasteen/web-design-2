// Отримуємо посилання на форму
const form = document.getElementById('signup-form');

// Отримуємо посилання на всі поля форми
const firstNameInput = document.querySelector('input[placeholder="Ім\'я"]');
const lastNameInput = document.querySelector('input[placeholder="Прізвище"]');
const nicknameInput = document.querySelector('input[placeholder="Нікнейм*"]');
const birthDateInput = document.getElementById('start');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const emailInput = document.querySelector('input[placeholder="E-mail*"]');
const passwordInput = document.querySelector('input[placeholder="Пароль*"]');

// Додаємо подію "submit" на форму
form.addEventListener('submit', function(event) {
    // Відміняємо стандартну поведінку форми
    event.preventDefault();

    // Викликаємо функцію валідації для кожного поля
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isNicknameValid = validateNickname();
    const isBirthDateValid = validateBirthDate();
    const isGenderValid = validateGender();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Перевіряємо, чи всі поля пройшли валідацію
    if (isFirstNameValid && isLastNameValid && isNicknameValid && isBirthDateValid && isGenderValid && isEmailValid && isPasswordValid) {
        // Всі поля валідні - можна відправити форму
        form.submit();
    }
});

// Функція для валідації поля "Ім'я"
function validateFirstName() {
    // Отримуємо значення поля "Ім'я"
    const firstName = firstNameInput.value.trim();

    // Перевіряємо, чи введено ім'я
    if (firstName === '') {
        // Якщо ім'я не введено - виводимо повідомлення про помилку
        alert('Будь ласка, введіть своє ім\'я');
        return false;
    }

    // Ім'я валідне
    return true;
}

// Функція для валідації поля "Прізвище"
function validateLastName() {
    // Отримуємо значення поля "Прізвище"
    const lastName = lastNameInput.value.trim();

    // Перевіряємо, чи введено прізвище
    if (lastName === '') {
        // Якщо прізвище не введено - виводимо повідомлення про помилку
        alert('Будь ласка, введіть своє прізвище');
        return false;
    }

    // Прізвище валідне
    return true;
}

// Функція для валідації поля "Нікнейм"
function validateNickname() {
    // Отримуємо значення поля "Нікнейм"
    const nickname = nicknameInput.value.trim();

    // Перевіряємо, чи введено нікнейм
    if (nickname === '') {
        // Якщо нікнейм не введено - виводимо повідомлення про помилку
        alert('Будь ласка, введіть свій нікнейм');
        return false;
    }

    // Нікнейм валідний
    return true;
}

// Функція для валідації поля "Дата народження"
function validateBirthDate() {
    // Отримуємо значення поля "Дата народження"
    const birthDate = birthDateInput.value;

    // Перевіряємо, чи введена дата народження
    if (birthDate === '') {
        // Якщо дата народження не введена - виводимо повідомлення про помилку
        alert('Будь ласка, виберіть свою дату народження');
        return false;
    }

    // Дата народження валідна
    return true;
}

// Функція для валідації поля "Стать"
function validateGender() {
    // Перевіряємо, чи вибрано стать
    const isGenderSelected = Array.from(genderInputs).some(input => input.checked);

    // Якщо стать не вибрано - виводимо повідомлення про помилку
    if (!isGenderSelected) {
        alert('Будь ласка, оберіть свою стать');
        return false;
    }

    // Стать валідна
    return true;
}

// Функція для валідації поля "E-mail"
function validateEmail() {
    // Отримуємо значення поля "E-mail"
    const email = emailInput.value.trim();

    // Перевіряємо, чи введено коректний E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // Якщо E-mail не коректний - виводимо повідомлення про помилку
        alert('Будь ласка, введіть коректний E-mail');
        return false;
    }

    // E-mail валідний
    return true;
}

// Функція для валідації поля "Пароль"
function validatePassword() {
    // Отримуємо значення поля "Пароль"
    const password = passwordInput.value;

    // Перевіряємо, чи введено пароль
    if (password === '') {
        // Якщо пароль не введено - виводимо повідомлення про помилку
        alert('Будь ласка, введіть свій пароль');
        return false;
    }

    // Пароль валідний
    return true;
}
