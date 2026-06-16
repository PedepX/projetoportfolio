document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const formData = {
            nome: form.querySelector('input[name="nome"]').value,
            email: form.querySelector('input[name="email"]').value,
            assunto: form.querySelector('input[name="assunto"]').value,
            mensagem: form.querySelector('textarea[name="mensagem"]').value,
            data: new Date().toLocaleString()
        };

        
        localStorage.setItem('contato_msg', JSON.stringify(formData));

        
        status.innerHTML = "Mensagem Enviada com Sucesso!";
        console.log("Dados salvos:", formData);
        
        form.reset();
    });
});