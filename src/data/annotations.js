export const annotations = [
  {
    "id": 26,
    "summary": "This review explains how cellular automata (CA) can model road traffic. It describes how small road cells and simple movement rules represent cars. The authors compare models for one lane, several lanes, and city roads. They also explain how to measure traffic speed, flow, and the gaps between cars.",
    "results": [
      "Brings many CA traffic models together and compares the traffic patterns they produce.",
      "Explains how to turn model measurements into real road measurements.",
      "Reviews both computer simulations and mathematical methods for studying traffic."
    ],
    "relevance": "This paper gives our survey a clear starting point. It helps us group the models and explain how simple rules can produce traffic jams."
  },
  {
    "id": 27,
    "summary": "This paper studies ways to run CA traffic simulations faster. It uses the Biham-Middleton-Levine (BML) model, where cars move in two directions on a grid. The author compares a basic program with versions that use several CPU cores, process several values at once, or run on a graphics processor (GPU). Tests measure how much each method speeds up the simulation.",
    "results": [
      "Shows how different computing methods can speed up the same traffic model.",
      "Finds that careful use of CPU features can reduce the speed gap between CPU and GPU versions.",
      "Measures the benefits of each method against a basic version that does one task at a time."
    ],
    "relevance": "This paper helps us explain why CA models are useful for large traffic simulations. It adds a computing viewpoint to our discussion of traffic rules."
  },
  {
    "id": 28,
    "summary": "This paper reviews how CA models represent crashes between vehicles. The authors search four research databases and select 90 papers from 740 records. They group the studies by crash type, such as rear-end, head-on, and side-impact crashes. They compare the model rules and point out gaps in the research.",
    "results": [
      "Provides a shared way to group and compare CA models of vehicle crashes.",
      "Covers crashes caused by following, crossing, passing, and merging.",
      "Finds that checks against real traffic data are still limited in the reviewed studies."
    ],
    "relevance": "This review helps us include road safety alongside traffic flow. Its groups can guide the safety section of our survey and help us discuss where more research is needed."
  },
  {
    "id": 29,
    "summary": "This paper introduces the Nagel-Schreckenberg (NaSch) model for freeway traffic. It divides a road into cells and gives each car a position and speed. At each time step, cars speed up, slow down to avoid the car ahead, sometimes brake at random, and then move. The authors use simulations to study how traffic changes as the road becomes more crowded.",
    "results": [
      "Shows that simple movement rules can produce both smooth traffic and waves of stopping and starting.",
      "Finds that random changes in speed can create jams even without a road blockage.",
      "Provides a basic CA traffic model that many later papers extend."
    ],
    "relevance": "This paper is a main foundation for our survey. Its four steps give us a clear example to explain during the presentation."
  },
  {
    "id": 30,
    "summary": "This paper studies how to design lane-changing rules for two-lane CA traffic models. The authors review earlier rules and propose a shared structure for building them. They test several versions to see whether they produce realistic lane use and traffic flow. The study focuses on how the rules are organized, as well as their details.",
    "results": [
      "Provides a common structure for designing lane-changing rules.",
      "Shows that different detailed rules can produce similar realistic results when they share this structure.",
      "Reproduces lane-use patterns in which the passing lane can become more crowded than the other lane."
    ],
    "relevance": "This paper helps us explain how CA models grow from one lane to two lanes. It also gives us a way to compare the lane-changing rules used by different models."
  },
  {
    "id": 31,
    "summary": "This paper proposes a CA traffic model with random behavior, delayed restarting, and drivers looking ahead. It extends the NaSch model and another CA model called the Burgers model. Simulations examine traffic flow, vehicle speeds, and how long different traffic patterns last. The model allows several traffic patterns that can last for a while but break down after a disturbance.",
    "results": [
      "Produces several temporary stable traffic patterns near the change from smooth to crowded traffic.",
      "Shows that the same traffic density can have different flow values.",
      "Creates a broad spread of points in the graph of flow against density."
    ],
    "relevance": "This paper helps us explain why traffic can behave differently even when the number of cars is similar. It shows how extra driver rules can make CA traffic patterns more varied."
  },
  {
    "id": 32,
    "summary": "This paper studies the BML model, where cars move east or north on a grid in alternating turns. Earlier studies found a middle state where some cars move while others are stuck. The authors examine how grid shape and direction affect the change from moving traffic to jams. They use simulations and approximate calculations to explain this middle state.",
    "results": [
      "Links the middle states to two different changes in traffic behavior, depending on the grid's shape relative to the flow direction.",
      "Estimates the range of traffic density where moving cars and jams can exist together.",
      "Shows that the size and shape of the simulated grid matter when interpreting the results."
    ],
    "relevance": "This paper supports our discussion of traffic models on two-dimensional grids. It also reminds us to consider road layout and model size when comparing simulation results."
  },
  {
    "id": 33,
    "summary": "This paper asks how a small problem area on a road changes traffic in a CA model. At that location, cars are more likely to slow down, which limits how many can pass. The original model has separate regions of moving cars and jammed cars. The authors vary the strength of the problem area and study the resulting traffic.",
    "results": [
      "Finds three traffic states depending on how strongly the problem area limits flow.",
      "Produces traffic that repeatedly stops and starts, which is absent from the model without the problem area.",
      "Shows that a local slowdown can change traffic patterns across the road."
    ],
    "relevance": "This paper helps us explain bottlenecks and how a small local problem can affect many cars. It connects vehicle movement rules with road conditions that cause congestion."
  },
  {
    "id": 34,
    "summary": "This paper extends the NaSch model to a road with two lanes. Cars follow movement rules within each lane and can change lanes. The authors study how model settings change the link between the number of cars and traffic flow. They also examine the role of random behavior in representing real traffic.",
    "results": [
      "Develops an early two-lane version of a CA traffic model.",
      "Identifies model settings that shape the graph of traffic flow against density.",
      "Examines why random behavior matters for realistic two-lane traffic."
    ],
    "relevance": "This paper helps us trace the move from single-lane models to roads where cars can pass. It pairs well with paper 30, which gives a later framework for lane-changing rules."
  },
  {
    "id": 35,
    "summary": "This paper proposes a general CA traffic model with random behavior, delayed restarting, and drivers looking ahead. By changing its settings, the model can act like several earlier models, including NaSch, Quick-Start, and Slow-to-Start. The authors use simulations to study when moving traffic becomes jammed. They also calculate an approximate boundary between traffic states.",
    "results": [
      "Combines several known traffic models within one set of rules.",
      "Finds temporary stable traffic states near the point where congestion begins, even with randomness.",
      "Calculates traffic-state boundaries that closely match the simulation results."
    ],
    "relevance": "This paper helps us show how several CA traffic models are related. It also connects computer results with mathematical explanations of jam formation."
  },
  {
    "id": 36,
    "summary": "This paper takes a closer look at the NaSch model for single-lane traffic. It compares mathematical estimates with computer simulations. The author studies how the chance of random braking changes the arrangement of cars. Exact results are available when cars can move at most one cell per step, while higher speeds require estimates or simulations.",
    "results": [
      "Shows that the braking probability changes local traffic patterns.",
      "Compares several mathematical methods with simulation results.",
      "Explains why the higher-speed model is harder to solve exactly."
    ],
    "relevance": "This paper helps us discuss what researchers can learn from the NaSch model beyond running simulations. It also shows why choosing the braking probability matters."
  },
  {
    "id": 37,
    "summary": "This review explains how ideas from physics help researchers study traffic. It focuses on CA models and how the actions of many cars produce large traffic patterns. Special attention is given to entrance and exit ramps. The paper reviews how these ramps can change the road from moving traffic to congestion.",
    "results": [
      "Reviews CA traffic models with a focus on changes in traffic caused by ramps.",
      "Explains how interactions between cars create traffic patterns across a road.",
      "Describes the use of CA models for large traffic simulations that run faster than real time."
    ],
    "relevance": "This paper connects our basic CA explanation with highway traffic problems. It is useful for discussing ramps, jam formation, and the benefits of fast simulation."
  },
  {
    "id": 38,
    "summary": "This paper uses mathematics to study an early CA traffic model. It calculates how traffic flow changes as more cars occupy the road. The method accounts for links between nearby road cells, rather than treating every cell as separate. The authors compare these calculations with computer results.",
    "results": [
      "Gives the exact flow-density result when the maximum speed is one cell per step.",
      "Produces estimates that closely match simulations at higher maximum speeds.",
      "Shows that links between nearby cells matter for predicting traffic flow."
    ],
    "relevance": "This paper helps us explain how CA traffic models can be studied with equations. It also shows why the behavior of nearby cars should be considered together."
  },
  {
    "id": 39,
    "summary": "This paper compares two mathematical ways to study CA traffic models. One follows the road cells, while the other follows cars and the gaps between them. The authors also study larger groups of nearby cells to improve their estimates. They compare the calculated traffic flow with simulation results.",
    "results": [
      "Shows that the car-based method gives the exact flow-density curve when the maximum speed is one cell per step.",
      "Shows that the cell-based method needs information about neighboring cells to reach that result.",
      "Finds that larger cell groups give close agreement with simulations for higher speeds."
    ],
    "relevance": "This paper helps us compare different ways to explain the same traffic model. It supports a survey section on mathematical methods and their accuracy."
  },
  {
    "id": 40,
    "summary": "This paper develops a mathematical method based on the gaps between cars. Earlier methods mainly tracked whether each road cell was empty or occupied. Tracking gaps captures some relationships between cars that a simple cell-based estimate can miss. The authors test the method for maximum speeds of one and two cells per step.",
    "results": [
      "Gives the exact traffic-flow result for a maximum speed of one cell per step.",
      "Gives a flow-density curve that agrees well with simulations for a maximum speed of two cells per step.",
      "Shows that gaps between cars are useful variables for predicting traffic flow."
    ],
    "relevance": "This paper gives us a clear way to explain car-based mathematical models. The idea of measuring the space ahead of each car is also easy to connect to everyday driving."
  },
  {
    "id": 41,
    "summary": "This paper studies two CA traffic models in which stopped cars do not always restart right away. The authors compare two different slow-to-start rules. They calculate the link between traffic density and flow and check it against simulations. They also examine how these rules change jam formation.",
    "results": [
      "Shows that different restart rules change the flow-density curve.",
      "Finds good agreement between mathematical estimates and simulations, although the estimates are no longer exact.",
      "Finds a change to a fully jammed state in one of the two models."
    ],
    "relevance": "This paper helps us explain why drivers' delays after stopping can affect the whole road. It supports our comparison of models that add more realistic driver behavior."
  },
  {
    "id": 42,
    "summary": "This paper builds a city traffic model by combining ideas from the BML grid model and the NaSch highway model. It includes traffic lights that change together on a shared schedule. The authors study how the number of cars and the length of the light cycle affect movement. The model can change from moving traffic to complete gridlock.",
    "results": [
      "Combines city-grid traffic and highway-style vehicle movement in one CA model.",
      "Finds a traffic density at which the city grid becomes fully jammed.",
      "Shows that this jamming point depends on the traffic-light cycle length."
    ],
    "relevance": "This paper helps our survey cover city roads and intersections. It gives us a simple example of how traffic-light timing affects congestion."
  },
  {
    "id": 43,
    "summary": "This paper studies a CA model with random behavior on a single-lane ring road. Cars move around the ring, and all cars are updated together at each time step. The authors calculate traffic flow at different densities using simulations and mathematical estimates. Their estimates include links between nearby cells.",
    "results": [
      "Finds an exact flow-density result for a maximum speed of one cell per step.",
      "Obtains close agreement with simulations at higher speeds by improving the estimates.",
      "Provides a detailed mathematical study of a basic random CA traffic model."
    ],
    "relevance": "This paper supports our explanation of the early NaSch family of models. It also helps us compare results from equations with results from computer simulations."
  },
  {
    "id": 44,
    "summary": "This paper models a two-lane road with cars traveling in opposite directions. It extends NaSch by allowing passing and different vehicle speeds. A car that passes must consider traffic coming from the other direction. The authors compare the model with a one-lane version and with measured traffic data.",
    "results": [
      "Shows how passing connects traffic in the two opposite directions.",
      "Produces flow-density results that closely match the measured data used in the study.",
      "Extends CA modeling to two-way roads with vehicles moving at different speeds."
    ],
    "relevance": "This paper helps us distinguish two-way roads from two lanes moving in the same direction. It also provides an example of checking a CA model against real traffic measurements."
  },
  {
    "id": 45,
    "summary": "This paper studies traffic on a two-dimensional grid where cars can enter and leave at the edges. The author uses simulations to measure the number of cars leaving and their average speed. The study examines both light traffic and jammed traffic. A simple estimate is used to explain behavior when traffic is light.",
    "results": [
      "Studies how traffic behaves when vehicles enter and leave the grid.",
      "Finds slow fluctuations, called flicker or 1/f noise, in outflow and average speed during jams.",
      "Uses a jam-free approximation to explain light-traffic behavior."
    ],
    "relevance": "This paper helps us discuss how entry and exit rules affect CA simulations. It also shows why changing traffic over time matters alongside average speed and flow."
  },
  {
    "id": 46,
    "summary": "This paper improves a CA model that uses brake lights to represent drivers' responses. It gives cars a desired following time gap longer than one second. Random behavior allows speed and gap values to spread across an area on a graph, rather than follow one fixed curve. The authors compare the model with traffic observations and driving experiments.",
    "results": [
      "Reproduces free-moving traffic, crowded moving traffic, jams, and changes between these states.",
      "Reproduces how disturbances grow in a line of cars following one another.",
      "Matches traffic-speed patterns from the NGSIM traffic dataset."
    ],
    "relevance": "This paper helps us explain how later CA models aim to match real driving more closely. The '2D' in its title describes a speed-gap graph, so we should explain it separately from models of two-dimensional road grids."
  },
  {
    "id": 47,
    "summary": "This paper reviews CA models of synchronized traffic flow. This term describes crowded traffic in which cars still move and speeds across lanes tend to become similar. The authors compare how models reproduce this traffic state and the change into it from free-moving traffic. They also discuss directions for future research.",
    "results": [
      "Brings together CA models that aim to reproduce synchronized traffic flow.",
      "Compares their ability to represent the change from free-moving to crowded moving traffic.",
      "Outlines questions for future model development."
    ],
    "relevance": "This review helps us explain traffic conditions between smooth flow and major jams. It also guides our comparison of more recent CA traffic models."
  },
  {
    "id": 48,
    "summary": "This paper models an urban expressway with entrance and exit ramps using continuous cellular automata. It adds rules for merging, leaving the road, following cars, and changing lanes. The model also considers the lengths of lanes where cars speed up or slow down near ramps. The authors test it using a scenario based on Chengdu's Second Ring Elevated Road.",
    "results": [
      "Finds that congestion often begins near merging and exit areas and spreads outward.",
      "Shows that more cars entering the main road and ramps increase the effects of ramp disturbances.",
      "Finds that lane changes affect traffic speeds and differences in flow between lanes."
    ],
    "relevance": "This paper shows how CA models can be adapted to a specific road setting. It supports our discussion of ramps and the added rules needed for practical traffic studies."
  },
  {
    "id": 49,
    "summary": "This paper models one lane shared by human-driven cars and connected and automated vehicles (CAVs). CAVs can form platoons, meaning groups that travel together with coordinated speeds and gaps. The model gives human drivers and CAVs different movement rules and decision times. Simulations test the effects of the share of CAVs and the maximum platoon size.",
    "results": [
      "Finds that a larger share of CAVs can increase road capacity and average speed while reducing congestion in the simulations.",
      "Finds little effect from increasing the maximum platoon size when CAVs make up less than 70% of traffic.",
      "Finds greater platoon-size benefits when CAVs dominate, but the extra gains become smaller as platoons grow."
    ],
    "relevance": "This paper connects our survey with automated driving. It shows how CA rules can represent different vehicle types and test their effects on shared roads."
  },
  {
    "id": 50,
    "summary": "This paper reviews CA traffic simulations, including jam formation, lane use, and groups of cars traveling together. It discusses moving traffic that can remain stable for a while before a disturbance triggers congestion. The author also introduces a model in which car interactions depend on relative motion. This provides a way to explain such temporary stable states.",
    "results": [
      "Shows how CA models can reproduce several traffic patterns while running large simulations quickly.",
      "Reviews temporary stable traffic states near the start of congestion.",
      "Introduces a model whose car interactions stay the same when the same speed is added to all cars."
    ],
    "relevance": "This paper helps us explain both the speed and the traffic behavior of CA models. It also connects simple movement rules with the question of why smooth traffic can suddenly become jammed."
  }
];
