// Define the ids for each group
var unitarioIds = ['u1shell','u2shell','u3shell','u4shell','u5shell','u6shell'];
var cantidadIds = ['q1shell','q2shell','q3shell','q4shell','q5shell','q6shell'];
var totalIds = ['t1shell','t2shell','t3shell','t4shell','t5shell','t6shell'];

// Function to calculate total
function calculateTotal(unitarioId, cantidadId, totalId) {
    var unitario = document.getElementById(unitarioId);
    var cantidad = document.getElementById(cantidadId);
    var total = document.getElementById(totalId);

    // Check if both inputs are not empty
    if(unitario.value && cantidad.value) {
        // Calculate and assign the total
        total.value = unitario.value * cantidad.value;
    }
}

// Start the light infinite loop
setInterval(function() {
    var sum = 0;
    for(var i = 0; i < unitarioIds.length; i++) {
        calculateTotal(unitarioIds[i], cantidadIds[i], totalIds[i]);
        var total = document.getElementById(totalIds[i]);
        if(total.value) {
            sum += parseFloat(total.value);
        }
    }

    // Check the 'flete' checkbox
    var fleteCheckbox = document.getElementById('flete');
    var fInput = document.querySelector(".fshell");
    if(fleteCheckbox.checked) {
        sum += Number(fInput.value);
    }

    // Check the 'isr' checkbox
    var isrCheckbox = document.getElementById('isr');
    var textisr = document.getElementById("priceisr");
    var total = sum;
    if(isrCheckbox.checked) {
        isr = sum * 0.0125;
        total = sum * 0.9875;
        textisr.textContent = "Retención 1.25%: - $" + isr; // Concatenate 'sum' to the existing textContent
    }

    var sumDiv = document.querySelector('.text-block-2');
    sumDiv.textContent = "$" + sum.toFixed(2);

    var ivaDiv = document.querySelector('.text-block-3');
    iva = sum * .16;
    ivaDiv.textContent = "+ $" + iva.toFixed(2);

    var totalDiv = document.querySelector('.text-block');
    grandtotal = total + iva;
    totalDiv.textContent = "$" + grandtotal.toFixed(2);

}, 100); // Check every 100 milliseconds
