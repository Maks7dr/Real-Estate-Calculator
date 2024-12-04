// Функция для расчета процентов
function calculatePropertyTax(propertyValue) {
  if (isNaN(propertyValue) || propertyValue <= 0) {
    return 'Введите корректную сумму недвижимости!';
  }

  // Рассчитываем 2% и 1% от суммы
  const twoPercent = Math.floor(propertyValue * 0.02); // Округляем до целого
  const onePercent = Math.floor(propertyValue * 0.01); // Округляем до целого

  return {
    twoPercent: twoPercent,
    onePercent: onePercent,
  };
}

// Функция для расчета 30% от уже рассчитанных значений
function calculateThirtyPercent(values) {
  const thirtyPercentOfTwoPercent = Math.floor(values.twoPercent * 0.3); // Округляем до целого
  const thirtyPercentOfOnePercent = Math.floor(values.onePercent * 0.3); // Округляем до целого

  return {
    thirtyPercentOfTwoPercent: thirtyPercentOfTwoPercent,
    thirtyPercentOfOnePercent: thirtyPercentOfOnePercent,
  };
}

// Функция форматирования числа с разделением пробелами
function formatNumberWithSpaces(number) {
  return number.toLocaleString('ru-RU');
}

// Пример использования
const propertyValue = prompt('Введите сумму стоимости недвижимости:');
const baseResult = calculatePropertyTax(parseFloat(propertyValue));

if (typeof baseResult === 'string') {
  console.log(baseResult);
  alert(baseResult);
} else {
  console.log(
    `2% от стоимости: ${formatNumberWithSpaces(baseResult.twoPercent)}`
  );
  console.log(
    `1% от стоимости: ${formatNumberWithSpaces(baseResult.onePercent)}`
  );
  alert(
    `2% от стоимости: ${formatNumberWithSpaces(baseResult.twoPercent)}\n` +
      `1% от стоимости: ${formatNumberWithSpaces(baseResult.onePercent)}`
  );

  // Спрашиваем пользователя, хочет ли он показать 30%
  const showThirty = confirm('Показать 30% от этих значений?');
  if (showThirty) {
    const thirtyPercentResult = calculateThirtyPercent(baseResult);
    console.log(
      `30% от 2%: ${formatNumberWithSpaces(
        thirtyPercentResult.thirtyPercentOfTwoPercent
      )}`
    );
    console.log(
      `30% от 1%: ${formatNumberWithSpaces(
        thirtyPercentResult.thirtyPercentOfOnePercent
      )}`
    );
    alert(
      `30% от 2%: ${formatNumberWithSpaces(
        thirtyPercentResult.thirtyPercentOfTwoPercent
      )}\n` +
        `30% от 1%: ${formatNumberWithSpaces(
          thirtyPercentResult.thirtyPercentOfOnePercent
        )}`
    );
  }
}
