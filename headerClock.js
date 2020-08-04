const headerClock = document.querySelector(".js-headerClock"),
  headerClockTitle = headerClock.querySelector(".js-headerClock__title");

function getDay(dates) {
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return day[dates - 1];
}
function getHeaderDate() {
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    month = date.getMonth(),
    day = date.getDate(),
    dates = date.getDay();

  headerClockTitle.innerText = `${month}/${day} (${getDay(dates)}) ${
    hours < 10 ? `0${hours}` : hours
  } : ${minutes < 10 ? `0${minutes}` : minutes}`;
}
function init() {
  setInterval(getHeaderDate, 1000);
}

init();
