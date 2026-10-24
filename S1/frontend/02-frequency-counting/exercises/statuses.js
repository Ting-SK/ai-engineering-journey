// S1-W01-P02, 24.10.2026. Итоговые решения пользователя.
// Изменено только форматирование. Запуск пользователем не подтверждён.
function countStatuses(statuses) {
  const counts = new Map();
  for (const status of statuses) {
    counts.set(status, counts.has(status) ? counts.get(status) + 1 : 1);
  }
  return counts;
}

// Исправлено пользователем после подсказки о раннем возврате.
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
