var products = {
    "Tabla": {
        "woodType": ["Teca", "Parota", "Cedro Rojo", "Pino"],
        "thickness": ["1''"],
        "width": ["4''", "6''", "8''", "10''", "12''"],
        "length": ["8ft", "10ft", "12ft", "14ft", "16ft"]
    },
    "Tablón": {
        "woodType": ["Pino"],
        "thickness": ["1.5''"],
        "width": ["8''", "10''", "12''"],
        "length": ["8ft", "10ft"]
    },
    "Polín": {
        "woodType": ["Pino"],
        "thickness": ["3''", "3.5''"],
        "width": ["3''", "3.5''"],
        "length": ["8ft", "12ft"]
    }
};

function updateForm() {
    var productType = document.getElementById("productType").value;
    var product = products[productType];

    updateSelect("woodType", product.woodType);
    updateSelect("thickness", product.thickness);
    updateSelect("width", product.width);
    updateSelect("length", product.length);

    if (productType === 'Polín') {
        syncThicknessAndWidth('thickness');
    }
}

function syncThicknessAndWidth(changed) {
    var productType = document.getElementById("productType").value;
    
    if (productType === 'Polín') {
        var thickness = document.getElementById("thickness");
        var width = document.getElementById("width");
        
        if (changed === 'thickness') {
            width.value = thickness.value;
        } else if (changed === 'width') {
            thickness.value = width.value;
        }
    }
}

function updateSelect(id, options) {
    var select = document.getElementById(id);
    select.innerHTML = "";

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        select.add(option);
    }
}

window.onload = updateForm;
