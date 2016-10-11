(function() {

  var canvas = $('#canvas'); //placement area - like paper for drawing
  var updateGridButton = $('#update-grid-button');
  var numberOfRowsInput = $('#number-of-rows');
  var numberOfColsInput = $('#number-of-cols');

  makeGrid(15, 15);
  $('.cell').on('click', changeColor);
  updateGridButton.on('click', updateGridSize);

  function clearGrid(){
    canvas.empty();
  }

  function updateGridSize(){
    clearGrid();
    //grab the number of columns input
    var newColNumber = parseInt(numberOfColsInput.val());
    //grab number of rows input
    var newRowNumber = parseInt(numberOfRowsInput.val());
    //make grid based off new numbers
    makeGrid(newRowNumber, newColNumber);
    $('.cell').on('click', changeColor);
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
