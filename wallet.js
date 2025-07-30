// Función para obtener el número de días en un mes específico
function getDaysInMonth(month, year = new Date().getFullYear()) {
    const monthIndex = {
        'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 'mayo': 4, 'junio': 5,
        'julio': 6, 'agosto': 7, 'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };
    
    return new Date(year, monthIndex[month] + 1, 0).getDate();
}

// Función para actualizar el calendario
function updateCalendar() {
    const monthSelect = document.getElementById('meses');
    const selectedMonth = monthSelect.value;
    const transactionList = document.querySelector('.transaction-history ol');
    
    // Obtener el número de días del mes seleccionado
    const daysInMonth = getDaysInMonth(selectedMonth);
    
    // Actualizar el h3 dinámico con el mes seleccionado
    updateMonthTitle(selectedMonth);
    
    // Limpiar la lista actual
    transactionList.innerHTML = '';
    
    // Crear los elementos li para cada día del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const li = document.createElement('li');
        li.textContent = day;
        transactionList.appendChild(li);
    }
}

// Función para actualizar el título del mes
function updateMonthTitle(month) {
    const monthNames = {
        'enero': 'Enero',
        'febrero': 'Febrero', 
        'marzo': 'Marzo',
        'abril': 'Abril',
        'mayo': 'Mayo',
        'junio': 'Junio',
        'julio': 'Julio',
        'agosto': 'Agosto',
        'septiembre': 'Septiembre',
        'octubre': 'Octubre',
        'noviembre': 'Noviembre',
        'diciembre': 'Diciembre'
    };
    
    let monthTitle = document.getElementById('month-title');
    
    // Si no existe el h3, lo creamos
    if (!monthTitle) {
        monthTitle = document.createElement('h3');
        monthTitle.id = 'month-title';
        monthTitle.style.color = 'white';
        monthTitle.style.textAlign = 'center';
        monthTitle.style.margin = '20px 0';
        monthTitle.style.fontSize = '24px';
        monthTitle.style.fontWeight = 'bold';
        
        // Insertar después del select
        const select = document.getElementById('meses');
        select.parentNode.insertBefore(monthTitle, select.nextSibling);
    }
    
    monthTitle.textContent = monthNames[month];
}

// Función para inicializar el calendario cuando se carga la página
function initCalendar() {
    const monthSelect = document.getElementById('meses');
    
    // Agregar event listener para el cambio de mes
    monthSelect.addEventListener('change', updateCalendar);
    
    // Actualizar el calendario con el mes inicial (enero)
    updateCalendar();
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCalendar); 