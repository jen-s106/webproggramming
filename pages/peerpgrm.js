var randomlinks = new Array();

randomlinks[0] = "http://www.juliascher.com/openthedoor/index.html";
randomlinks[1] = "https://www.benkinmont.com/#";
randomlinks[2] = "https://projects.jennyholzer.com/";
randomlinks[3] = "http://adaweb.walkerart.org/project/blindspot/";
randomlinks[4] =
  "http://adaweb.walkerart.org/context/artists/weiner/weiner0.html";

function randomlink() {
  window.location = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}
