document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Jerzy Dziubel's portfolio!");
});

// Language Handling
const languages = {
    en: {
        about: "Hi, I'm Jerzy Dziubel, a Full Stack COBOL Developer",
        expertise: "My Expertise",
        journey: "Professional Journey",
        contact: "Get in Touch",
    },
    pl: {
        about: "Cześć, jestem Jerzy Dziubel, Full Stack COBOL Developer",
        expertise: "Moja Specjalizacja",
        journey: "Moja Kariera",
        contact: "Skontaktuj się ze mną",
    },
    de: {
        about: "Hallo, ich bin Jerzy Dziubel, ein Full Stack COBOL Entwickler",
        expertise: "Meine Fachkenntnisse",
        journey: "Berufliche Laufbahn",
        contact: "Kontaktiere mich",
    },
};

// Change Language Function
function changeLanguage(lang) {
    document.getElementById("about-text").textContent = languages[lang].about;
    document.getElementById("expertise-heading").textContent = languages[lang].expertise;
    document.getElementById("journey-heading").textContent = languages[lang].journey;
    document.getElementById("contact-heading").textContent = languages[lang].contact;
}

// Event Listeners for Language Buttons
document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
document.getElementById("lang-pl").addEventListener("click", () => changeLanguage("pl"));
document.getElementById("lang-de").addEventListener("click", () => changeLanguage("de"));



