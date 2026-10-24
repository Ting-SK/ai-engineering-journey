# Ответы S1-W01-P02

## 1. Результаты функций

Для массива ['a', 'b', 'a', 'c', 'b', 'd'] без запуска запиши результат каждой функции из exercises/statuses.js: countStatuses, firstUniqueStatus, firstRepeatedStatus. Затем проверь запуском. Отдельно проверь пустой массив и ['a', 'a', 'a'].

```js
function countStatuses(statuses) {
  const counts = new Map();
  for (const status of statuses) {
    counts.set(status, counts.has(status) ? counts.get(status) + 1 : 1);
  }
  return counts;
}
```

Результат (запись пользователя): `{'a': 2, 'b': 2, 'c': 1, 'd': 1}`.

```js
function firstUniqueStatus(statuses) {
  const counts = new Map();
  for (const status of statuses) {
    counts.set(status, counts.has(status) ? counts.get(status) + 1 : 1);
  }
  for (const statusFinal of statuses) {
    if (counts.get(statusFinal) === 1) {
      return statusFinal;
    }
  }
  return null;
}
```

Результат: `'c'`.

```js
function firstRepeatedStatus(statuses) {
  const set = new Set([]);
  for (const status of statuses) {
    if (set.has(status)) {
      return status;
    } else {
      set.add(status);
    }
  }
  return null;
}
```

Результат: `'a'`.

### Граничные случаи

| Вход | countStatuses | firstUniqueStatus | firstRepeatedStatus |
|---|---|---|---|
| `[]` | `{}` | `null` | `null` |
| `['a', 'a', 'a']` | `{'a': 3}` | `null` | `'a'` |

*Примечание преподавателя: здесь сохранена твоя условная запись частот через объект. Функция фактически возвращает `Map`: пустую либо с записью `'a' → 3`.*

## 2. Число операций и коэффициент роста

Учебные модели: `2n` для двух последовательных полных проходов и `n²` для полного прохода внутри каждой итерации. Это число итераций/сравнений, а не измерение времени.

| Размер массива | Два последовательных прохода | Вложенные проходы |
|---|---|---|
| `n = 10` | `10 + 10 = 20` | `10 × 10 = 100` |
| `n = 20` | `20 + 20 = 40` | `20 × 20 = 400` |

Коэффициент роста:

- Для двух последовательных полных проходов: `40 / 20 = 2`.
- Для полного прохода внутри каждой итерации: `400 / 100 = 4`.

## 3. Дополнительная память

Сколько записей в Map частот для 5000 элементов с четырьмя уникальными значениями? Что изменится, если все значения разные?

- Четыре уникальных значения — **4 записи**.
- Все значения разные — **5000 записей**.

## Проверка преподавателя

Все ответы верны. Граничные случаи подтверждены запуском ассистента 24 октября 2026. Подробности — в [review.md](review.md).
