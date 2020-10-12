function p(v) { return (v < 10) ? `0${v}` : v; }
function c(){
  var c = moment("2021-01-15").countdown(),
      mn = c.months,
      d = p(c.days),
      h = p(c.hours),
      mi = p(c.minutes),
      s = p(c.seconds);
  document.getElementById("timer").innerHTML = `${mn}M ${d}D ${h}h ${mi}m ${s}s`;
}
setInterval(c, 100);