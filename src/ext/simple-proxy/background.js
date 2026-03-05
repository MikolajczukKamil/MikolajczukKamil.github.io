// background.js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "fetch" && message.url) {
    console.log("Received fetch request for URL:", message.url);

    // Wykonaj fetch w tle
    fetch(message.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network response was not ok: " + response.statusText,
          );
        }
        return response.text();
      })
      .then((text) => {
        sendResponse(text);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        sendResponse(null);
      });

    // Zwracamy true, aby poinformować Firefoxa, że odpowiedź zostanie wysłana asynchronicznie
    return true;
  }

  // Jeśli wiadomość nie pasuje, nie robimy nic specyficznego (lub zwracamy false)
  return false;
});
