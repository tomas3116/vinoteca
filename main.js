function toggleSimulador() {
    const formulario = document.getElementById('formulario');
    formulario.classList.toggle('d-none');
}

function calcularCosto() {
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let descuento = 0;

    if (cantidad >= 12) {
        descuento = 0.15; // 15% descuento
    } else if (cantidad >= 6) {
        descuento = 0.10; // 10% descuento
    } else if (cantidad >= 2) {
        descuento = 0.05; // 5% descuento
    }

    const costoTotal = precio * cantidad;
    const costoConDescuento = costoTotal * (1 - descuento);
    const resultado = `
        <h4>Detalles de la Compra</h4>
        <p>Costo Total: $${costoTotal.toFixed(2)}</p>
        <p>Descuento Aplicado: ${descuento * 100}%</p>
        <p>Costo Final: $${costoConDescuento.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
