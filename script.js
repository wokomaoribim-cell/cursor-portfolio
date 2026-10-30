const contactBtn = document.getElementById("contactBtn");
const closeContactBtn = document.getElementById("closeContactBtn");
const contactPanel = document.getElementById("contactPanel");
const clockTime = document.getElementById("clockTime");
const clockDate = document.getElementById("clockDate");
const mailLink = document.querySelector(".mail-link");

function openContactPanel() {
  if (!contactPanel) {
    return;
  }

  contactPanel.hidden = false;

  if (contactBtn) {
    contactBtn.setAttribute("aria-expanded", "true");
  }

  if (mailLink) {
    mailLink.focus();
  }
}

function closeContactPanel() {
  if (!contactPanel || contactPanel.hidden) {
    return;
  }

  contactPanel.hidden = true;

  if (contactBtn) {
    contactBtn.setAttribute("aria-expanded", "false");
    contactBtn.focus();
  }
}

if (contactBtn && contactPanel) {
  contactBtn.addEventListener("click", openContactPanel);
}

if (closeContactBtn) {
  closeContactBtn.addEventListener("click", closeContactPanel);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeContactPanel();
  }
});

function updateClock() {
  if (!clockTime || !clockDate) {
    return;
  }

  const now = new Date();

  clockTime.textContent = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  clockDate.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

updateClock();
setInterval(updateClock, 1000);
