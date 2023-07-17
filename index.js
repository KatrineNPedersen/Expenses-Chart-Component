"use strict";

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    let totalSpend = 0;
    json.forEach((weekday) => {
      document.querySelector(
        `.spend-${weekday.day}`
      ).textContent = `$${weekday.amount}`;
      totalSpend += Number(weekday.amount);
    });

    json.forEach((weekday) => {
      let currentAmount = (weekday.amount / totalSpend) * 250;
      document.querySelector(
        `.bar-${weekday.day}`
      ).style.height = `${currentAmount}%`;
    });
  });

function currentDate() {
  document.querySelectorAll(".bar").forEach((bar) => {
    bar.style.backgroundColor = "hsl(10, 79%, 65%)";
    let date = new Date() + "";
    let weekday = date.slice(0, 3).toLowerCase();
    if (bar.classList.contains(`bar-${weekday}`)) {
      bar.style.backgroundColor = "hsl(186, 34%, 60%)";
    }
  });
}
currentDate();

function showSpend() {
  document.querySelectorAll(".day").forEach((bar) =>
    bar.addEventListener("mouseover", function () {
      document
        .querySelector(`.spend-${bar.classList[0]}-overview`)
        .classList.remove("hidden");
    })
  );

  document.querySelectorAll(".day").forEach((bar) =>
    bar.addEventListener("mouseout", function () {
      document
        .querySelector(`.spend-${bar.classList[0]}-overview`)
        .classList.add("hidden");
    })
  );
}
showSpend();
