
var gameWidth = 740;
var gameHeight = 585;

var svg = d3.select("body").append("svg").attr("width",gameWidth).attr("height",gameHeight);

//Generate an array of 100 objects with a randomnly chosen cx and cy propoerties
var getPos = function(){
  return _.map(_.range(100),function(){
    return {cx:Math.random()*(gameWidth-10), cy:Math.random()*(gameHeight-10)};
  });
};


var add100Enemies = function(){
  //selects the circles and attaches data (enemyPos) to it
  var enemies= svg.selectAll("circle").data(getPos());

  // add a circle for each enemy position
  var addCircles = enemies.enter().append("circle");

  // give each circle a position based on the data, and a radius of 10
  addCircles.attr("cy", function(d) {
   return d.cy;
  });

  addCircles.attr("cx", function(d) {
   return d.cx;
  });

  addCircles.attr("r","10");
};

var enemiesMove = function(){
  var enemies= svg.selectAll("circle").data(getPos());
  enemies.transition().duration(2000).attr("cy", function(d) {
   return d.cy;
  }).attr("cx", function(d) {
   return d.cx;
  });
};

add100Enemies();
setInterval(enemiesMove,2000);

// function() {
//  svg.append("enemy")
// }
// call(this);


// <svg version="1.1"
//      baseProfile="full"
//      width="740" height="585"
//      xmlns="http://www.w3.org/2000/svg">

//   <circle class="enemy" cx="325" cy="293" r="10" fill="black" />

// </svg>