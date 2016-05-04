(function() {
  var mainTable = document.querySelector('.main-table');
  var mainTableTbodyRows = mainTable.querySelectorAll('tbody tr');

  // transform the last time checked dates to relative time (e.g. "3 days ago")
  function timeAgo() {
    for (var i = 0, len = mainTableTbodyRows.length; i < len; i++) {
      var cell =  mainTableTbodyRows[i].cells[2];

      if (cell.innerHTML !== '') {
        cell.innerHTML = moment(cell.innerHTML, 'MMMM Do YYYY').fromNow();
      }
    }
  }

  timeAgo();

  function averageForColumn(columnNumber) {
    var sum = 0;
    var average;
    var cellText;

    for (var i = 0, len = mainTableTbodyRows.length; i < len; i++) {
      var cell =  mainTableTbodyRows[i].cells[columnNumber];

      if (cell.innerHTML !== '') {
        sum += parseFloat(cell.innerHTML);
      }
    }

    average = Math.round((sum / mainTableTbodyRows.length) * 100) / 100;
    cellText = document.createTextNode(average);

    mainTable.querySelector('tfoot tr').cells[columnNumber].appendChild(cellText);
  }

  averageForColumn(3);
  averageForColumn(4);
  averageForColumn(5);
  averageForColumn(6);
})();
