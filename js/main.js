function updateTimer() {
  const future = Date.parse("jul 27, 2022 00:00:00");
  const now = new Date();
  const diff = future - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const  mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);
  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  const timeArray = [d,h,m,s];
  let counter=0;

const timers = [...document.querySelectorAll(".number")];

timers.forEach(function(element){
  element.innerHTML=timeArray[counter];
  counter++;
});
};
setInterval('updateTimer()', 1000);