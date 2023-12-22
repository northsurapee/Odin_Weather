import WeatherAPI from "./modules/api";
import UI from "./modules/ui";

// Add search-bar event listener
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", main);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") main();
});

// Main function
async function main() {
  if (input.value === "") return;
  const data = await WeatherAPI.getData(input.value);
  UI.displayCard(data);
}

// Init Bangkok weather card
UI.displayCard(await WeatherAPI.getData("Bangkok"));
