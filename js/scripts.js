/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Função para enviar email
    function enviarEmailPara(email) {
        const emailLowerCase = email.toLowerCase();
        const mensagem = "Olá, para receber mais informações siga-nos no Facebook.";
        // Simulação do envio do email
        console.log(`Email enviado para ${emailLowerCase} com a seguinte mensagem: ${mensagem}`);
    }

    // Capturar o formulário de inscrição
    const formSignup = document.getElementById('contactForm');
    formSignup.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar o envio do formulário padrão

        const emailAddress = document.getElementById('emailAddress').value;
        enviarEmailPara(emailAddress);

        // Exibir mensagem de sucesso
        const submitSuccessMessage = document.getElementById('submitSuccessMessage');
        submitSuccessMessage.classList.remove('d-none');

        // Limpar o campo de email
        document.getElementById('emailAddress').value = "";
    });

});

