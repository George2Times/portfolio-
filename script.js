document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Jerzy Dziubel's portfolio!");
});

function changeLanguage(lang) {
    // Pobierz wszystkie elementy posiadające atrybuty data-en, data-pl, data-de
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(element => {
        // Zmień zawartość tekstową w zależności od wybranego języka
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'pl') {
            element.textContent = element.getAttribute('data-pl');
        } else if (lang === 'de') {
            element.textContent = element.getAttribute('data-de');
        }
    });
}


