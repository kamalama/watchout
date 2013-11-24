
var gameWidth = 740;
var gameHeight = 585;

var getEnemyPos = function(){
  return _.map(_.range(100),function(){
    return {cx:Math.random()*(gameWidth-10), cy:Math.random()*(gameHeight-10)};
  });
};

var svg = d3.select("body").append("svg").attr("width",gameWidth).attr("height",gameHeight);
var player = svg.selectAll(".playerCircle");
var enemies= svg.selectAll(".enemyCircle").data(getEnemyPos());

//PLAYER FUNCTIONS

var drag = d3.behavior.drag()
  .on("drag", function(d,i) {
    //test for edges
    if(d.x+d3.event.dx < gameWidth) {
      d.x += d3.event.dx;
    }
    else {
      d.x=gameWidth;
    }
    if(d.y+d3.event.dy < gameHeight) {
     d.y += d3.event.dy;
    }
    else {
      d.y=gameHeight;
    }
    d3.select(this).attr("transform", function(d,i){
      return "translate(" + [ d.x,d.y ] + ")";
  });
});


var addPlayer= function(className, x, y) {
  // debugger;
  var addPlayer = player.data([{"x":x, "y":y}])
    .enter().append("circle")
    .attr("class", className)
    .attr("transform", "translate(" + x + "," + y + ")")
    .attr("r", "10").attr("fill","orange")
    .call(drag);
};


// ENEMY FUNCTIONS

//Generate an array of 100 objects with a randomnly chosen cx and cy propoerties
var add100Enemies = function(){
  // add a circle for each enemy position
  var addEnemies = enemies.enter().append("circle")
    .attr("class", "enemyCircle")
    .attr("cy", function(d) {return d.cy;})
    .attr("cx", function(d) {return d.cx;})
    .attr("r","10");
};

var moveEnemies = function(){
  enemies.data(getEnemyPos())
    .transition().duration(2000)
    .attr("cy", function(d) {return d.cy;})
    .attr("cx", function(d) {return d.cx;});
};


addPlayer("playerCircle", gameWidth/2, gameHeight/2, 10);
add100Enemies();
setInterval(moveEnemies,2000);


// <svg version="1.1"
//      baseProfile="full"
//      width="740" height="585"
//      xmlns="http://www.w3.org/2000/svg">

//   <circle class="enemy" cx="325" cy="293" r="10" fill="black" />

// </svg>