// Функция для расчета процентов
function calculatePropertyTax(propertyValue) {
  if (isNaN(propertyValue) || propertyValue <= 0) {
    return 'Введите корректную сумму недвижимости!';
  }

  // Рассчитываем 2%, 1% и 30% от них
  const twoPercent = propertyValue * 0.02;
  const onePercent = propertyValue * 0.01;
  const thirtyPercentOfTwoPercent = twoPercent * 0.3;
  const thirtyPercentOfOnePercent = onePercent * 0.3;

  return {
    twoPercent: twoPercent.toFixed(2),
    onePercent: onePercent.toFixed(2),
    thirtyPercentOfTwoPercent: thirtyPercentOfTwoPercent.toFixed(2),
    thirtyPercentOfOnePercent: thirtyPercentOfOnePercent.toFixed(2),
  };
}

// Пример использования
const propertyValue = prompt('Введите сумму стоимости недвижимости:');
const result = calculatePropertyTax(parseFloat(propertyValue));

if (typeof result === 'string') {
  console.log(result);
  alert(result);
} else {
  console.log(`2% от стоимости: ${result.twoPercent}`);
  console.log(`1% от стоимости: ${result.onePercent}`);
  console.log(`30% от 2%: ${result.thirtyPercentOfTwoPercent}`);
  console.log(`30% от 1%: ${result.thirtyPercentOfOnePercent}`);
  alert(
    `2% от стоимости: ${result.twoPercent}\n` +
      `1% от стоимости: ${result.onePercent}\n` +
      `30% от 2%: ${result.thirtyPercentOfTwoPercent}\n` +
      `30% от 1%: ${result.thirtyPercentOfOnePercent}`
  );
}
