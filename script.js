function convertTemperature() {
  const input = document.getElementById('temperatureInput').value;
  const conversionType = document.getElementById('conversionType').value;
  const resultBox = document.getElementById('result');

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultBox.textContent = "⚠️ Please enter a valid number.";
    resultBox.style.color = "#d63031";
    return;
  }

  let result;

  if (conversionType === "CtoF") {
    result = (temp * 9/5) + 32;
    resultBox.textContent = `✅ ${temp}°C = ${result.toFixed(2)}°F`;
    resultBox.style.color = "#2c3e50";
  } else if (conversionType === "FtoC") {
    result = (temp - 32) * 5/9;
    resultBox.textContent = `✅ ${temp}°F = ${result.toFixed(2)}°C`;
    resultBox.style.color = "#2c3e50";
  }
}
