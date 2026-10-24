// S1-W01-P01, 24.10.2026. Самостоятельное итоговое решение пользователя.
// Сохранено без изменения логики. Запуск пользователем не подтверждён.
function parseQuantity(input){
    const inputTrim = input.trim()
    if(!inputTrim.length){
        return null
    }

    const inputNumber= +input
    return Number.isInteger(inputNumber) && inputNumber>=1 && inputNumber<=99 ? inputNumber : null
}
