// Назначаем обработчик событию 'click' по ссылке 'a'.
document.querySelector('a').addEventListener('click', (event) => {

// Сбрасываем поведение ссылки по умолчанию.
  event.preventDefault();

// Выводим в консоль сообщение о предотвращении поведения ссылки по умолчанию.
  console.log('Вы кликнули по ссылке на Яндекс, но перехода не произошло.');

// В константу userText записываем текст, который пользователь ввёл в поле.
  const userText = prompt ('Введите ваш вариант названия ссылки на Яндекс, иначе ссылка совсем исчезнет!:)');

// Находим элемент 'a' в документе (по тегу) и записываем его в константу linkText.
  const linkText = document.querySelector('a');

// Присваиваем у найденного элемента свойство textContent значению переменной linkText (это присвоение изменяет текст внутри найденного элемента).
  linkText.textContent = userText;

// Выводим в консоль сообщение об изменении текста ссылки.
  console.log('Вы изменили название ссылки на', userText + '.');
});

