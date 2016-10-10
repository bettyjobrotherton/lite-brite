(function() {

  //var numberOfRows = 15; //number of rows in the grid
  //var numberOfCols = 15; //number of columns in the grid
  var canvas = $('#canvas'); //placement area - like paper for drawing

  makeGrid(15, 15);
  clearGrid();
  makeGrid(30, 30);
  $('.cell').on('click', changeColor);

  function clearGrid(){
    canvas.empty();
  }

  function changeColor(event){
    //'this' within an event refers to what triggered the event
    $(this).toggleClass('red');
  }

  function makeGrid(numberOfRows, numberOfCols){
    //let's make some rows and put them in the body
     //'for' loop
    for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1) {
      var row = $('<tr></tr>');
      for(var colCount = 0; colCount < numberOfCols; colCount +=1) {
        var column = $('<td></td>');
        column.addClass('cell');
        row.append(column);
      }
      canvas.append(row);
    }
  }

}());
