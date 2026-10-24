// 1. Проверка ввода
// Самостоятельно напиши parseVolume(input).
//     Вход всегда строка. Результат — целое число от 0 до 100 включительно либо null для некорректного ввода.
//     Пробелы по краям допустимы; пустая строка и строка только из пробелов запрещены.
//     Используй числовое преобразование; отдельная проверка синтаксиса десятичной записи не требуется.
//
//     До запуска предскажи результаты для: '', ' ', '0', ' 50 ', '100', '-1', '101', '2.5', 'abc'.
//     Затем запусти функцию и сравни ожидания с фактом. Запиши расхождения и их причины.
//     Сохрани решение рядом с заданием в parse-volume.js.
//

// '' - null
// ' ' - null
// '0' - 0
// ' 50 ' - 50
// '100' - 100
// '-1' - null
// '101' - null
// '2.5' - null
// 'abc' - null

function parseVolume(input){
    const inputTrim = input.trim()
    if(!inputTrim.length){
        return null
    }

    const inputNumber = +inputTrim
    return Number.isInteger(inputNumber) && inputNumber >= 0 && inputNumber <= 100 ? inputNumber : null
}

console.log(parseVolume('')) // null
console.log(parseVolume(' ')) // null
console.log(parseVolume('0')) // 0
console.log(parseVolume(' 50 ')) // 50
console.log(parseVolume('100')) // 100
console.log(parseVolume('-1')) // null
console.log(parseVolume('101')) // null
console.log(parseVolume('2.5')) // null
console.log(parseVolume('abc')) // null