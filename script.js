// Détection de la langue du navigateur
const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.startsWith("fr") ? "fr" :
             userLang.startsWith("bn") ? "bn" :
             "en";

// Chargement des traductions
fetch("translation/translations.json")
  .then(res => res.json())
  .then(all => {
    const t = all[lang] || all["en"];
    // ... suite du code
  .then(res => res.json())
  .then(t => {
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("tryFree").textContent = t.try_free;
    document.getElementById("goPremium").textContent = t.go_premium;

    // Gestion des boutons
    document.getElementById("tryFree").onclick = () => {
      localStorage.setItem("premium", "true");
      document.getElementById("status").textContent = t.trial_activated;
    };

    document.getElementById("goPremium").onclick = () => {
      window.open("https://paypal.me/tol931", "_blank");
      localStorage.setItem("premium", "true");
      document.getElementById("status").textContent = t.premium_unlocked;
    };

    // Vérifie si Premium est déjà activé
    if (localStorage.getItem("premium") === "true") {
      document.getElementById("status").textContent = t.premium_unlocked;
    }
  });
