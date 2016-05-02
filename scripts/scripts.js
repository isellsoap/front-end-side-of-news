(function() {
  var mainTableRows = document.querySelectorAll('.main-table tr');

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
