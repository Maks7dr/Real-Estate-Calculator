// Форматирование ввода
const propertyValueInput = document.getElementById('propertyValue');
propertyValueInput.addEventListener('input', event => {
  const input = event.target.value.replace(/\s+/g, ''); // Убираем пробелы
  if (!isNaN(input)) {
    event.target.value = Number(input).toLocaleString('ru-RU'); // Форматируем
  }
});

// Основная функция расчета
function calculate() {
  const rawValue = propertyValueInput.value.replace(/\s+/g, ''); // Убираем пробелы
  const propertyValue = parseFloat(rawValue);

  if (isNaN(propertyValue) || propertyValue <= 0) {
    document.getElementById('result').innerHTML =
      '<p style="color: red;">Введите корректную сумму!</p>';
    return;
  }

  // Расчет процентов
  const twoPercent = Math.floor(propertyValue * 0.02);
  const onePercent = Math.floor(propertyValue * 0.01);

  // Отображение результатов
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>2% от стоимости: <b>${twoPercent.toLocaleString('ru-RU')}</b></p>
    <p>1% от стоимости: <b>${onePercent.toLocaleString('ru-RU')}</b></p>
    <button id="showThirtyPercent">Показать 30%</button>
  `;

  // Обработчик для 30%
  document.getElementById('showThirtyPercent').addEventListener('click', () => {
    const thirtyPercentOfTwoPercent = Math.floor(twoPercent * 0.3);
    const thirtyPercentOfOnePercent = Math.floor(onePercent * 0.3);

    resultDiv.innerHTML += `
      <p>30% от 2%: <b>${thirtyPercentOfTwoPercent.toLocaleString(
        'ru-RU'
      )}</b></p>
      <p>30% от 1%: <b>${thirtyPercentOfOnePercent.toLocaleString(
        'ru-RU'
      )}</b></p>
    `;
  });
}

// Связываем кнопку с функцией
document.getElementById('calculateButton').addEventListener('click', calculate);
