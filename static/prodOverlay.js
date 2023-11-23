function showOverlay() {
    addRowTextToForm()
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex';
    var closeButton = document.querySelector('.close-btn');
    closeButton.scrollIntoView(); // Scroll the close button into view
}

function getTable() {
    var rows = document.querySelectorAll("#yourTable tr");   
    var rowTexts = [];
    for (var i = 0; i < rows.length; i++) {
        var rowText = '';
        var cols = rows[i].querySelectorAll("td, th");        
        for (var j = 0; j < cols.length; j++) {
            // Pad each cell with spaces to a fixed width
            var cellText;
            if (j == 1) { // Assuming 'Woodtype' is the second column
                cellText = cols[j].innerText.padEnd(10, ' ');
            } else {
                cellText = cols[j].innerText;
            }
            rowText += cellText + '\t';
        }        
        rowTexts.push(rowText);        
    }
    return rowTexts.join('\n');
}


function addRowTextToForm() {
    var formGroup = document.querySelector('.form-group');
    
    var label = document.createElement('label');
    label.innerText = 'TU LISTA';
    label.id = 'tu-lista-label';  // Assign a unique id to the label
    label.style.textAlign = 'center';
    formGroup.appendChild(label);
    
    var rowText = getTable();
    var pre = document.createElement('pre');
    pre.innerText = rowText;
    pre.id = 'table-data';  // Assign a unique id to the pre element
    formGroup.appendChild(pre);

    // Create a button element
    var button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Enviar';
    
    // Append the button to the form group
    formGroup.appendChild(button);
}

var closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', function() {
    var overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';

    var formGroup = document.querySelector('.form-group');
    var label = document.querySelector('#tu-lista-label');  // Select the label by its id
    var pre = document.querySelector('#table-data');  // Select the pre element by its id
    var button = document.querySelector('button');  // Select the button

    if (label) {
        formGroup.removeChild(label);
    }

    if (pre) {
        formGroup.removeChild(pre);
    }

    // Remove the button if it exists
    if (button) {
        formGroup.removeChild(button);
    }
});
