function enviarMensagem() {
    const form = document.getElementById("formulario");

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    console.log(data)

    const url = `https://api.whatsapp.com/send?text=${data.nome} - ${data.mensagem}&phone=5584996465565`

    window.open(url);
}