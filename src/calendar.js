function createCalendar(id, year, month) {
  let element = document.getElementById(id);
  element.innerHTML = getCalendarTable(year, month);
}

function getCalendarTable(year, month) {
  let rows = '';
  let d = new Date(year, month-1, 1);
  let dayOfWeek = d.getDay();
  if (dayOfWeek == 0) {
    dayOfWeek = 7;
  }
  for (let i = 1; i < dayOfWeek; i++) {
    rows += '<td></td>';
  }
  while (d.getMonth() + 1 === month ) {
    if (d.getDay() == 0) {
      rows += '<td class="w">' + d.getDate() + '</td></tr>';
      dayOfWeek = 0;
    } else {
      if (dayOfWeek == 0) {
        rows += '<tr>';
      }
      rows += '<td>' + d.getDate() + '</td>';
      dayOfWeek++;
    }

    d.setDate(d.getDate()+1);
  }
  if (d.getDay > 1) {
    dayOfWeek = 9 - d.getDay();
    for (let i = 1; i < dayOfWeek; i++) {
      rows += '<td></td>';
    }
  }

  let table = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th class="w">Вс</th></tr><tr>'+rows+'</tr></table>';
  return table;
}

createCalendar("calendar", 2018, 9)
