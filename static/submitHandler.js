document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    var productType = document.getElementById('productType').value;
    var thickness = document.getElementById('thickness').value;
    var width = document.getElementById('width').value;
    var length = document.getElementById('length').value;
    var quantity = document.getElementById('quantity').value;
    var woodType = document.getElementById('woodType').value;

    // Create a new table row
    var tableRow = document.createElement('tr');

    // Create the table data and add it to the table row
    var productTypeData = document.createElement('td');
    productTypeData.textContent = productType;
    tableRow.appendChild(productTypeData);

    var woodTypeData = document.createElement('td');
    woodTypeData.textContent = woodType;
    tableRow.appendChild(woodTypeData);

    var thicknessData = document.createElement('td');
    thicknessData.textContent = thickness;
    tableRow.appendChild(thicknessData);

    var widthData = document.createElement('td');
    widthData.textContent = width;
    tableRow.appendChild(widthData);

    var lengthData = document.createElement('td');
    lengthData.textContent = length;
    tableRow.appendChild(lengthData);

    var quantityData = document.createElement('td');
    quantityData.textContent = quantity;
    tableRow.appendChild(quantityData);

    // Create a delete button
    var deleteButton = document.createElement('div');
    deleteButton.innerHTML = '&times;';
    deleteButton.className = "row-btn";

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();
    });

    // Add the delete button to the table row
    tableRow.appendChild(deleteButton);

    // Add the table row to the table body
    document.getElementById('yourTableBody').appendChild(tableRow);

    var deleteButtons = document.querySelectorAll('tr button');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].style.transform = 'scale(0.80)';
    }

});
