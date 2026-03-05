// content.js
// Funkcja, która zostanie wystawiona na stronie
function fetchSimpleImpl(url) {
  // Tworzymy Promise w kontekście strony (window), aby był zrozumiały dla skryptów strony
  return new window.Promise((resolve) => {
    // Komunikujemy się z background scriptem
    browser.runtime
      .sendMessage({ action: "fetch", url: url })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.error("fetchSimple failed:", error);
        resolve(null);
      });
  });
}

// Eksportujemy funkcję do globalnego obiektu window strony
// Używamy exportFunction (specyficzne dla Firefox), aby bezpiecznie wystawić funkcję z content scriptu
try {
  exportFunction(fetchSimpleImpl, window, { defineAs: "fetchSimple" });
  console.log("fetchSimple has been injected.");
} catch (e) {
  console.error("Failed to export function:", e);
  // Fallback dla środowisk, które nie wspierają exportFunction (np. debugowanie poza FF)
  window.fetchSimple = fetchSimpleImpl;
}
