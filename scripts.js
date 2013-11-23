
$(document).ready(function(){
  addPlayer();
  add100Enemies();
  $('body').on("mousedown",".playerCircle",function(){
    $(document).mousemove(function(e){
      movePlayer(e);
    });
  });
  setInterval(moveEnemies,2000);
});

var gameWidth = 740;
var gameHeight = 585;

var svg = d3.select("body").append("svg").attr("width",gameWidth).attr("height",gameHeight);

//PLAYER FUNCTIONS

var addPlayer= function() {
  var player = svg.selectAll(".playerCircle").data([{cx: gameWidth/2, cy: gameHeight/2}]);

  var addPlayer = player.enter().append("circle").attr("class", "playerCircle");

  addPlayer.attr("cy", function(d) {
    return d.cy;
  });

  addPlayer.attr("cx", function(d) {
    return d.cx;
  });

  addPlayer.attr("r", "10").attr("fill","orange");
};

var movePlayer = function(mousePos) {
  //get mouse position and update data element with new position
  var player = svg.selectAll(".playerCircle").data([{cx: mousePos.pageX, cy: mousePos.pageY}]);
  player.transition().duration(300).attr("cy", function(d) {
   return d.cy;
  }).attr("cx", function(d) {
   return d.cx;
  });

  //Handle if mouse is outside of bounds??
};



// ENEMY FUNCTIONS
//Generate an array of 100 objects with a randomnly chosen cx and cy propoerties

var getEnemyPos = function(){
  return _.map(_.range(100),function(){
    return {cx:Math.random()*(gameWidth-10), cy:Math.random()*(gameHeight-10)};
  });
};

var add100Enemies = function(){
  //selects the circles and attaches data (enemyPos) to it
  var enemies= svg.selectAll(".enemyCircle").data(getEnemyPos());

  // add a circle for each enemy position
  var addEnemies = enemies.enter().append("circle").attr("class", "enemyCircle");

  // give each circle a position based on the data, and a radius of 10
  addEnemies.attr("cy", function(d) {
   return d.cy;
  });

  addEnemies.attr("cx", function(d) {
   return d.cx;
  });

  addEnemies.attr("r","10");
};

var moveEnemies = function(){
  var enemies= svg.selectAll(".enemyCircle").data(getEnemyPos());
  enemies.transition().duration(2000).attr("cy", function(d) {
   return d.cy;
  }).attr("cx", function(d) {
   return d.cx;
  });
};






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