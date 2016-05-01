(function() {
  var colors = ['4a833e','689952','87b168','a6c781','c7de9d','c7adbf','b694b4','a67ba8','95649b','834d8e'];
  var mainTable = document.querySelector('.main-table');
  var mainTableRows = mainTable.querySelectorAll('tr');

  function colorizeColumn(columnNumber) {
    var values = [];
    var scale;
    var minimum;
    var maximum;

    columnNumber = columnNumber - 1;

    for (var i = 2, length = mainTableRows.length; i < length; i++) {
      var value =  mainTableRows[i].cells[columnNumber].innerHTML;
      if (value !== '') {
        values.push(parseInt(value));
      }
    }

    minimum = Math.min.apply(null, values);
    maximum = Math.max.apply(null, values);

    scale = chroma.scale(colors).domain([minimum, maximum]);

    for (var i = 2, length = mainTableRows.length; i < length; i++) {
      var content = mainTableRows[i].cells[columnNumber].innerHTML;
      if (content !== '') {
        mainTableRows[i].cells[columnNumber].style.backgroundColor = scale(parseInt(content));
      }
    }
  }

  colorizeColumn(4);
  colorizeColumn(5);

  // transform the last time checked dates to relative time (e.g. "3 days ago")
  function timeAgo() {
    for (var i = 2, len = mainTableRows.length; i < len; i++) {
      var cell =  mainTableRows[i].cells[2];

      if (cell.innerHTML !== '') {
        cell.innerHTML = moment(cell.innerHTML, 'MMMM Do YYYY').fromNow();
      }
    }
  }

  timeAgo();
})();
