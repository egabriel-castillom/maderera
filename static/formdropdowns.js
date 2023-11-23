document.addEventListener('DOMContentLoaded', function() {
  // Define the options for each group
  var productoOptions = ['','Tabla', 'Tablón', 'Polín'];
  var maderaOptions = {
    ' ': [],
    'Tabla': ['','Teca', 'Parota', 'Cedro Rojo', 'Pino'],
    'Tablón': ['','Pino'],
    'Polín': ['','Pino']
  };
  var medidasOptions = {
    'Tabla': ['',"1inx4inx8ft", "1inx4inx10ft", "1inx4inx12ft", "1inx4inx14ft", "1inx4inx16ft", "1inx6inx8ft", "1inx6inx10ft", "1inx6inx12ft", "1inx6inx14ft", "1inx6inx16ft", "1inx8inx8ft", "1inx8inx10ft", "1inx8inx12ft", "1inx8inx14ft", "1inx8inx16ft", "1inx10inx8ft", "1inx10inx10ft", "1inx10inx12ft", "1inx10inx14ft", "1inx10inx16ft", "1inx12inx8ft", "1inx12inx10ft", "1inx12inx12ft", "1inx12inx14ft", "1inx12inx16ft"],
    'Tablón': ['',"1.5inx8inx8ft", "1.5inx8inx10ft", "1.5inx10inx8ft", "1.5inx10inx10ft", "1.5inx12inx8ft", "1.5inx12inx10ft"],
    'Polín': ['',"3inx3inx8ft", "3inx3inx12ft", "3inx3.5inx8ft", "3inx3.5inx12ft", "3.5inx3inx8ft", "3.5inx3inx12ft", "3.5inx3.5inx8ft", "3.5inx3.5inx12ft"]
  };

  for (var i = 1; i <= 6; i++) {
    var productoElement = document.getElementById('p' + i + 'shell');
    productoOptions.forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.text = option;
      productoElement.add(optionElement);
    });
  }

  // Add event listeners to the Producto group
  for (var i = 1; i <= 6; i++) {
    document.getElementById('p' + i + 'shell').addEventListener('change', function(e) {
      var id = e.target.id;
      var value = e.target.value;
      var number = id.substring(1, id.indexOf('shell'));

      // Activate the corresponding Madera element
      var maderaElement = document.getElementById('w' + number + 'shell');
      maderaElement.disabled = false;

      // Populate the Madera element with the appropriate options
      maderaElement.innerHTML = '';
      if (maderaOptions[value]) {
        maderaOptions[value].forEach(function(option) {
          var optionElement = document.createElement('option');
          optionElement.text = option;
          maderaElement.add(optionElement);
        });
      }
    });
  }

  // Add event listeners to the Madera group
  for (var i = 1; i <= 6; i++) {
    document.getElementById('w' + i + 'shell').addEventListener('change', function(e) {
      var id = e.target.id;
      var number = id.substring(1, id.indexOf('shell'));

      // Get the selected value from the corresponding Producto element
      var productoValue = document.getElementById('p' + number + 'shell').value;

      // Activate the corresponding Medidas element
      var medidasElement = document.getElementById('d' + number + 'shell');
      medidasElement.disabled = false;

      // Populate the Medidas element with the appropriate options
      medidasElement.innerHTML = '';
      if (medidasOptions[productoValue]) {
        medidasOptions[productoValue].forEach(function(option) {
          var optionElement = document.createElement('option');
          optionElement.text = option;
          medidasElement.add(optionElement);
        });
      }
    });
  }
});


// I have the following code, please help me modifying it in a way that when the user clicks on it shows a drop down menu with the corresponding options.
