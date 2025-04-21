const kijelzo = document.getElementById("kijelzo");
const gombok = document.querySelectorAll(".gombok button");

gombok.forEach(gomb => {
  gomb.addEventListener("click", function() {
    let ertek = this.textContent;

    if (ertek === "C") {
      kijelzo.value = "";
    } else if (ertek === "⌫") {
      kijelzo.value = kijelzo.value.slice(0, -1);
    } else if (ertek === "=") {
      try {
        kijelzo.value = math.evaluate(kijelzo.value);
      } catch (error) {
        kijelzo.value = "HIBA";
        console.error("Hiba:", error.message);
      }
    } else {
      kijelzo.value += ertek;
    }
  });
});