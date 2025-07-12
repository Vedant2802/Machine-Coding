// (function () {
//   var hour = document.querySelector(".hour");
//   var min = document.querySelector(".minute");
//   var sec = document.querySelector(".sec");
//   var startBtn = document.querySelector(".start");
//   var stopBtn = document.querySelector(".stop");
//   var resetBtn = document.querySelector(".reset");

//   var countdownTimer = null;

//   // Start Timer Button - START
//   startBtn.addEventListener("click", function () {
//     if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

//     function startInterval() {
//       startBtn.style.display = "none";
//       stopBtn.style.display = "initial";

//       countdownTimer = setInterval(function () {
//         timer();
//       }, 1000);
//     }
//     startInterval();
//   });
//   // Start Timer Button - END

//   function timer() {
//     // Formatting the time - START
//     if (sec.value > 60) {
//       min.value++;
//       sec.value = parseInt(sec.value) - 59;
//     }
//     if (min.value > 60) {
//       hour.value++;
//       min.value = parseInt(min.value) - 60;
//     }
//     min.value = min.value > 60 ? 60 : min.value;
//     // Formatting the time - END

//     // Updating the Time - START
//     if (hour.value == 0 && min.value == 0 && sec.value == 0) {
//       hour.value = "";
//       min.value = "";
//       sec.value = "";
//       stopInterval();
//     } else if (sec.value != 0) {
//       sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
//     } else if (min.value != 0 && sec.value == 0) {
//       sec.value = 59;
//       min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
//     } else if (hour.value != 0 && min.value == 0) {
//       min.value = 60;
//       hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
//     }
//     return;
//     // Updating the Time - END
//   }

//   // Stop Interval Logic - START
//   function stopInterval(state) {
//     startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

//     stopBtn.style.display = "none";
//     startBtn.style.display = "initial";
//     clearInterval(countdownTimer);
//   }
//   // Stop Interval Logic - END

//   // Stop Timer Button - START
//   stopBtn.addEventListener("click", function () {
//     stopInterval("pause");
//   });
//   // Start Timer Button - END

//   // Reset Timer Button - START
//   resetBtn.addEventListener("click", function () {
//     hour.value = "";
//     min.value = "";
//     sec.value = "";

//     stopInterval();
//   });
//   // Reset Timer Button - END
// })();

(function () {
  const hourInput = document.querySelector(".hour");
  const minInput = document.querySelector(".minute");
  const secInput = document.querySelector(".sec");

  const startBtn = document.querySelector(".start");
  const stopBtn = document.querySelector(".stop");
  const resetBtn = document.querySelector(".reset");

  let countdownTimer = null;

  const formatTime = (value) => String(value).padStart(2, "0");

  function updateInputs(h, m, s) {
    hourInput.value = h ? formatTime(h) : "";
    minInput.value = m ? formatTime(m) : "";
    secInput.value = s ? formatTime(s) : "";
  }

  function getTime() {
    return {
      h: parseInt(hourInput.value) || 0,
      m: parseInt(minInput.value) || 0,
      s: parseInt(secInput.value) || 0,
    };
  }

  function setButtonStates(isRunning, state = "Start") {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
    startBtn.style.display = isRunning ? "none" : "inline-block";
    stopBtn.style.display = isRunning ? "inline-block" : "none";
  }

  function stopInterval(state = "reset") {
    clearInterval(countdownTimer);
    setButtonStates(false, state);
  }

  function tick() {
    let { h, m, s } = getTime();

    if (h === 0 && m === 0 && s === 0) {
      updateInputs("", "", "");
      stopInterval();
      return;
    }

    if (s > 0) {
      s--;
    } else if (m > 0) {
      m--;
      s = 59;
    } else if (h > 0) {
      h--;
      m = 59;
      s = 59;
    }

    updateInputs(h, m, s);
  }

  function startCountdown() {
    const { h, m, s } = getTime();
    if (h === 0 && m === 0 && s === 0) return;

    setButtonStates(true);
    countdownTimer = setInterval(tick, 1000);
  }

  startBtn.addEventListener("click", startCountdown);

  stopBtn.addEventListener("click", () => stopInterval("pause"));

  resetBtn.addEventListener("click", () => {
    stopInterval("reset");
    updateInputs("", "", "");
  });

  // Enforce maxlength of 2 for each input
  [hourInput, minInput, secInput].forEach((input) =>
    input.addEventListener("input", () => {
      input.value = input.value.slice(0, 2);
    })
  );
})();
