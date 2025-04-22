document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // Mostrar modal y resetear formulario
    $('#confirmationModal').modal('show');
    form.reset();
    form.classList.remove('was-validated');
});
});