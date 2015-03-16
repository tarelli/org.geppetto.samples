Simulation.addWatchLists([{name:"pendvars",variablePaths:["pendulum.mechanical.SimulationTree.theta1"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Theta 1");

options = {yaxis:{min:-2,max:2},xaxis:{min:0,max:10000,show:false}};

Plot1.setOptions(options);
Plot1.setSize(190, 730);
Plot1.setPosition(15,560)
Plot1.plotData("pendulum.mechanical.SimulationTree.theta1");


window.setTimeout(function(){Simulation.mapWatchToRepresentation("pendulum.mechanical", "pendulum.mechanical.SimulationTree.theta1", function(a, b){})},500);
