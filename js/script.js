let heart = 0;
let coins = 100;
let copies = 0;

function increaseHeart() {
  heart++;
  document.getElementById("heartCount").textContent = heart;
}

function copyNumber(num) {
  navigator.clipboard.writeText(num);
  alert("Copied: " + num);
  copies++;
  document.getElementById("copyCount").textContent = copies;
}

function makeCall(name, num) {
  if (coins < 20) {
    alert("Not enough coins!");
    return;
  }
  coins -= 20;
  document.getElementById("coinCount").textContent = coins;

  const time = new Date().toLocaleTimeString();
  alert(`Calling ${name} (${num})`);

  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = `${name} - ${num} (${time})`;
  historyList.prepend(li);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
