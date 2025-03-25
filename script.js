document.addEventListener('DOMContentLoaded', function () {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    whatsappBtn.addEventListener('click', function () {
        // Formato correto: Código do país (55) + DDD (99) + número (92205902) SEM espaços ou caracteres especiais
        const phoneNumber = '559992205902'; // +55 99 92205902 (sem espaços ou "+")
        const message = encodeURIComponent('Olá, gostaria de mais informações sobre a Lua de Júpiter!');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappUrl, '_blank');
    });
});
