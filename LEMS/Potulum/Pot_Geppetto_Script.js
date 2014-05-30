Simulation.addWatchLists([{name:"pendvars",variablePaths:["pendulum.mechanical.theta1"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Theta 1");

options = {yaxis:{min:-2,max:2},xaxis:{min:0,max:10000,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(800,600)
Plot1.plotData("pendulum.mechanical.theta1");


//window.setTimeout(function(){Simulation.addBrightnessFunction("hhcell.electrical", "hhcell.electrical.hhpop[0].v", function(x){return (x+0.06)/0.06;})},500);
