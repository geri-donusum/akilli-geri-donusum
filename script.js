// script.js — tam versiyon

document.addEventListener("DOMContentLoaded", () => {
  const inputKapsayici = document.querySelector(".input-kapsayici");
  const suggestionBox = document.querySelector(".suggestion-box");
  const bulBtn = document.getElementById("bulBtn");

  // Güvenlik: eğer suggestionBox yoksa oluştur
  if (!suggestionBox) {
    const sb = document.createElement("div");
    sb.className = "suggestion-box";
    inputKapsayici.parentNode.insertBefore(sb, inputKapsayici.nextSibling);
  }

  // Fonksiyon: mobilde öneriyi input'un hemen altına, butondan önce koy
  function placeSuggestionMobile() {
    const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (w <= 768) {
      // mobil: suggestionBox'ı inputKapsayici'nin hemen sonrasına taşı
      if (inputKapsayici && suggestionBox && bulBtn) {
        if (inputKapsayici.nextElementSibling !== suggestionBox) {
          inputKapsayici.parentNode.insertBefore(suggestionBox, inputKapsayici.nextSibling);
        }
        // sonra bulBtn varsa suggestionBox'tan sonra bulBtn kalır (buton aşağıda)
        if (suggestionBox.nextElementSibling !== bulBtn) {
          suggestionBox.parentNode.insertBefore(bulBtn, suggestionBox.nextSibling);
        }
      }
    } else {
      // masaüstü: orijinal akışı bozmamak için (isteğe bağlı) burayı boş bırakıyoruz
      // (masaüstü görünümünde hiçbir şeyi değiştirmiyoruz)
    }
  }

  // İlk yerleştirme
  placeSuggestionMobile();

  // Yeniden boyutlandığında da kontrol et
  window.addEventListener("resize", () => {
    placeSuggestionMobile();
  });

  // Basit öneri mantığı (örnek) — varsa kendi listen ile değiştir
  const atiklar = [
    "gazete","kitap","karton kutu","süt kutusu","plastik şişe","naylon poşet",
    "yoğurt kabı","şampuan şişesi","cam şişe","cam kavanoz","cam bardak",
    "kolonya şişesi","ampul","ilaç","muz kabuğu","yemek artığı"
  ];
  const input = document.getElementById("arama");
  let sb = document.querySelector(".suggestion-box");

  function showSuggestions(q){
    if(!sb) {
      sb = document.querySelector(".suggestion-box");
      if(!sb) return;
    }
    sb.innerHTML = "";
    if(!q) return;
    const list = atiklar.filter(a => a.toLowerCase().includes(q.toLowerCase()));
    if(list.length === 0) return;
    const html = list.map(i => `<div class="suggestion-item">${i}</div>`).join("");
    sb.innerHTML = html;
    // click olayları
    sb.querySelectorAll(".suggestion-item").forEach(el=>{
      el.addEventListener("click", ()=>{
        input.value = el.textContent;
        sb.innerHTML = "";
      });
    });
  }

  if(input){
    input.addEventListener("input", (e)=> {
      showSuggestions(e.target.value.trim());
    });
  }

  // Temizle X butonu
  const temizle = document.querySelector(".temizle-btn");
  if(temizle){
    temizle.addEventListener("click", ()=>{
      if(input) { input.value = ""; input.focus(); }
      if(sb) sb.innerHTML = "";
    });
  }

});
