/* UI module : Take weather data to display on weather card */

const UI = (() => {
  function displayCard(data) {
    // Return on null data (error occur)
    if (!data) return;

    // Clear card-container
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    // Create new card and add data
    const card = document.createElement("div");
    card.classList.add("card");

    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    h2.textContent = data.cityName;
    h3.textContent = `${data.temperature} °C`;
    p1.textContent = `Feels Like: ${data.feelsLike} °C`;
    p2.textContent = `Humidity: ${data.humidity} %`;
    p3.textContent = `Wind Speed: ${data.windSpeed} km/h`;

    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    // Append new card to card-container
    cardContainer.appendChild(card);

    // Clear input
    const input = document.querySelector("input");
    input.value = "";
  }

  return { displayCard };
})();

export default UI;
