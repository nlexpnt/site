const inpt = document.getElementById("number");
const spans = document.querySelectorAll("span");

inpt.addEventListener("input", (event) => {
  const dividend = parseInt(event.target.value);

  if (isNaN(dividend)) {
    spans.forEach((span) => {
      span.classList.remove("true");
    });

    return;
  }

  spans.forEach((span) => {
    const divisor = span.dataset.divisor;

    if (dividend % divisor === 0) {
      span.classList.add("true");
    } else {
      span.classList.remove("true");
    }
  });
});
