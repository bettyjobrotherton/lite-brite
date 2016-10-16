(function() {
  var canvas = $('#canvas'); //placement area - like paper for drawing
  var updateGridButton = $('#update-grid-button');
  var resetGridButton = $("#reset-grid-button");
  var numberOfRowsInput = $('#number-of-rows');
  var numberOfColsInput = $('#number-of-cols');
  var newColor = "white";
  var colorCell = $("#colors div");
  var newColNumber = 30;
  var newRowNumber = 15;

  makeGrid(newRowNumber, newColNumber);
  colorCell.on('click', selectColor);
  $('.hexagon').on('click', changeColor);
  updateGridButton.on('click', updateGridSize);
  resetGridButton.on('click', resetGrid);

  function clearGrid(){
    canvas.empty();
  }

  function makeGrid(numberOfRows, numberOfCols){
    //let's make some rows and put them in the body
     //'for' loop
    for(var rowCount = 0; rowCount < numberOfRows; rowCount += 1) {
      var row = $('<div class="hex-row"></div>');
      for(var colCount = 0; colCount < numberOfCols; colCount +=1) {
        var columnOdd = $('<div class="hexagon"><div class="left"></div><div class="middle"></div><div class="right"></div></div>');
        var columnEven = $('<div class="hexagon even"><div class="left"></div><div class="middle"></div><div class="right"></div></div>');
        row.append(function(){
          if(colCount % 2 === 0){
            return columnOdd;
          } else {
            return columnEven;
          }
        });
      }
      canvas.append(row);
    }
  }

  function selectColor(event){
    //'this' within an event refers to what triggered the event
    newColor = $(this).css('border-left-color');
  }

  function changeColor(event){
    $(this).children(".left").css('border-right-color', newColor);
    $(this).children('.middle').css('border-color', newColor);
    $(this).children('.right').css('border-left-color', newColor);
  }

  function resetGrid(){
    newColor = "white"

    clearGrid();
    makeGrid(newRowNumber, newColNumber);
    $('.hexagon').on('click', changeColor);
  }

  function updateGridSize(){
    newColor = "white"

    clearGrid();
    //grab the number of columns input
    newColNumber = parseInt(numberOfColsInput.val());
    //grab number of rows input
    newRowNumber = parseInt(numberOfRowsInput.val());

    if(isNaN(newColNumber) || newColNumber < 1 || newColNumber > 100 || isNaN(newRowNumber) || newRowNumber < 1 || newRowNumber > 100){
        newColNumber = 30;
        newRowNumber = 15;
        $('#error-message').text('Please enter a number between 1 and 100');
    } else {
      $('#error-message').text(' ');
    }
    //make grid based off new numbers
    makeGrid(newRowNumber, newColNumber);
    $('.hexagon').on('click', changeColor);
    numberOfRowsInput.val("");
    numberOfColsInput.val("");
  }

}());
