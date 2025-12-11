// Başlığa tıklayınca sayfa yenile (mobil + masaüstü)
document.querySelector("h1").addEventListener("click", () => {
    location.reload();
});

// Öneri listesi yapısı
const atiklar = [
    "gazete", "kitap", "karton kutu", "plastik şişe", "naylon poşet",
    "yoğurt kabı", "şampuan şişesi", "cam şişe", "cam kavanoz",
    "cam bardak", "kolonya şişesi", "ampul", "ilaç"
];

const input = document.getElementById("arama");
const suggestionBox = document.querySelector(".suggestion-box");
const temizleBtn = document.querySelector(".temizle-btn");

// Yazdıkça önerileri göster
input.addEventListener("input", () => {
    const deger = input.value.trim().toLowerCase();

    if (!deger) {
        suggestionBox.innerHTML = "";
        return;
    }

    const filtre = atiklar.filter(a => a.toLowerCase().startsWith(deger));

    suggestionBox.innerHTML = filtre
        .map(item => `<div class="suggestion-item">${item}</div>`)
        .join("");

    document.querySelectorAll(".suggestion-item").forEach(s => {
        s.addEventListener("click", () => {
            input.value = s.textContent;
            suggestionBox.innerHTML = "";
        });
    });
});

// X butonu temizleme
temizleBtn.addEventListener("click", () => {
    input.value = "";
    input.focus();
    suggestionBox.innerHTML = "";
});

// 📌 ÖNERİ KUTUSU BUTONUN ÜSTÜNDE OLSUN — OTOMATİK DÜZELTME
document.addEventListener("DOMContentLoaded", function () {
    const bulBtn = document.getElementById("bulBtn");
    const inputKapsayici = document.querySelector(".input-kapsayici");

    if (inputKapsayici && suggestionBox && bulBtn) {

        // Eğer HTML sırası yanlışsa → script otomatik düzeltiyor
        if (inputKapsayici.nextElementSibling !== suggestionBox) {
            inputKapsayici.parentNode.insertBefore(suggestionBox, bulBtn);
        }
    }
});
