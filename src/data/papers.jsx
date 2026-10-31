export const papers = [
  {
    "id": 1,
    "citation": "Barlovic, R., Santen, L., Schadschneider, A., & Schreckenberg, M. (1998). Metastable states in cellular automata for traffic flow.",
    "link": "https://arxiv.org/abs/cond-mat/9804170",
    "summary": "This paper studies metastable traffic states using a cellular automaton model with slow-to-start behavior. The authors examine how traffic can remain in a high-flow state even at relatively high vehicle densities, and how disturbances can cause that state to break down into congestion.",
    "results": [
      "Shows that free-flowing and congested traffic states can exist under similar density conditions.",
      "Demonstrates that small disturbances can trigger a transition from stable-looking traffic to a traffic jam.",
      "Explains how slow-to-start rules help reproduce metastability and reduced traffic flow after congestion develops."
    ],
    "important": true
  },
  {
    "id": 2,
    "citation": "Barlovic, R., Schadschneider, A., & Schreckenberg, M. (2001). Random walk theory of jamming in a cellular automaton model for traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0102519",
    "summary": "This paper uses random walk theory to analyze how traffic jams form, grow, and disappear in a cellular automaton traffic model. Instead of relying only on simulations, the authors study the changing boundaries of traffic jams to better understand their behavior.",
    "results": [
      "Connects the movement of traffic jam boundaries to random walk processes.",
      "Provides a theoretical way to study the lifetime and evolution of traffic jams.",
      "Helps explain how random vehicle movements influence whether a jam grows or disappears."
    ],
    "important": false
  },
  {
    "id": 3,
    "citation": "Benjamin, S. C., Johnson, N. F., & Hui, P. M. (1996). Cellular automata models of traffic flow along a highway containing a junction. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9605157",
    "summary": "This paper investigates cellular automaton models of highway traffic with a junction. It considers how different driving rules, including slow-to-start behavior, affect vehicle movement and congestion near the junction. The study uses simulations to understand how local driving behavior interacts with road infrastructure.",
    "results": [
      "Shows that junctions can create queues and reduce traffic flow even when the surrounding highway is relatively clear.",
      "Demonstrates that slow-to-start behavior changes how traffic congestion develops and clears.",
      "Illustrates how cellular automata can model the effects of both driver behavior and highway junctions."
    ],
    "important": true
  },
  {
    "id": 4,
    "citation": "Biham, O., Middleton, A. A., & Levine, D. (1992). Self-organization and a dynamical transition in traffic-flow models.",
    "link": "https://arxiv.org/abs/cond-mat/9206001",
    "summary": "This paper introduces a two-dimensional cellular automaton model of city traffic. Vehicles move in two perpendicular directions on a grid and follow simple movement rules. The authors investigate how increasing the number of vehicles changes the system from freely moving traffic to a completely blocked state.",
    "results": [
      "Shows that a simple traffic system can organize itself into moving patterns without centralized control.",
      "Identifies a transition between freely moving traffic and a gridlocked state as traffic density increases.",
      "Demonstrates that simple local movement rules can produce large-scale traffic organization and congestion."
    ],
    "important": true
  },
  {
    "id": 5,
    "citation": "Boccara, N., & Fukś, H. (2000). Critical behavior of a cellular automaton highway traffic model. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9911039",
    "summary": "This paper studies critical behavior in a cellular automaton model of highway traffic. The authors investigate how the overall traffic flow changes with vehicle density and examine the transition between freely moving and congested traffic.",
    "results": [
      "Identifies critical behavior associated with changes in traffic density.",
      "Shows how traffic flow can change sharply when the number of vehicles reaches certain conditions.",
      "Provides a theoretical framework for studying traffic transitions using simple cellular automaton rules."
    ],
    "important": false
  },
  {
    "id": 6,
    "citation": "Boccara, N., Fukś, H., & Zeng, Q. (1997). Car accidents and number of stopped cars due to road blockage on a one-lane highway. Journal of Physics A: Mathematical and General, 30(10), 3329–3332.",
    "link": "https://arxiv.org/abs/adap-org/9704001",
    "summary": "This paper examines the effects of road blockages on traffic in a one-lane cellular automaton model. The authors study how accidents or obstacles interrupt vehicle movement and cause cars to stop behind the blocked section of road.",
    "results": [
      "Shows how a local road blockage can produce a queue of stopped vehicles.",
      "Investigates the relationship between traffic conditions and the number of cars affected by an obstruction.",
      "Demonstrates how cellular automata can represent traffic disruption caused by accidents or blocked roads."
    ],
    "important": false
  },
  {
    "id": 7,
    "citation": "Brockfeld, E., Barlovic, R., Schadschneider, A., & Schreckenberg, M. (2001). Optimizing traffic lights in a cellular automaton model for city traffic. Physical Review E, 64(5), Article 056132.",
    "link": "https://arxiv.org/abs/cond-mat/0107056",
    "summary": "This paper uses a cellular automaton model of urban traffic to investigate traffic-light optimization. The authors simulate vehicles moving through a city road network and examine how different signal settings influence traffic flow and congestion.",
    "results": [
      "Shows that traffic-light timing has a significant effect on traffic movement through a city network.",
      "Demonstrates that cellular automaton simulations can be used to compare and optimize signal-control strategies.",
      "Highlights the importance of coordinating traffic lights to improve overall network performance."
    ],
    "important": true
  },
  {
    "id": 8,
    "citation": "Chowdhury, D., Santen, L., Schadschneider, A., Sinha, S., & Pasupathy, A. (1999). Spatio-temporal organization of vehicles in a cellular automata model of traffic with ‘slow-to-start’ rule. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9812148",
    "summary": "This paper studies a cellular automaton traffic model that includes a slow-to-start rule, meaning stopped vehicles may take additional time to begin moving again. The authors compare its behavior with a standard traffic model and examine vehicle spacing, traffic jams, and changes in traffic patterns over time.",
    "results": [
      "Shows that slow-to-start behavior changes the formation and structure of traffic jams.",
      "Demonstrates that small modifications to driving rules can create different traffic patterns.",
      "Provides insight into how delayed acceleration affects vehicle spacing and traffic flow."
    ],
    "important": true
  },
  {
    "id": 9,
    "citation": "Diedrich, G., Santen, L., Schadschneider, A., & Zittartz, J. (2000). Effect of on- and off-ramps in cellular automata models for traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0001196",
    "summary": "This paper investigates the effects of highway on-ramps and off-ramps using cellular automaton traffic models. The authors simulate vehicles entering and leaving a highway to understand how merging and exiting movements affect traffic density and congestion.",
    "results": [
      "Shows that on-ramps can disturb highway traffic and contribute to congestion near merging areas.",
      "Demonstrates that vehicle entry and exit influence the distribution of traffic density along a highway.",
      "Extends basic cellular automaton traffic models to include more realistic highway infrastructure."
    ],
    "important": true
  },
  {
    "id": 10,
    "citation": "Eisenblätter, B., Santen, L., Schadschneider, A., & Schreckenberg, M. (1997). Jamming transition in a cellular automaton model for traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9706041",
    "summary": "This paper examines the transition from freely moving traffic to congested traffic in a cellular automaton model. The authors study how changes in vehicle density and interactions between cars affect the formation of traffic jams.",
    "results": [
      "Investigates the conditions under which traffic changes from free flow to congestion.",
      "Shows how vehicle density and local movement rules influence the development of jams.",
      "Contributes to the theoretical understanding of traffic phase transitions in cellular automaton models."
    ],
    "important": true
  },
  {
    "id": 11,
    "citation": "Esser, J., & Schreckenberg, M. (1997). Microscopic simulation of urban traffic based on cellular automata.",
    "link": "https://www.researchgate.net/publication/2584087_Microscopic_Simulation_Of_Urban_Traffic_Based_On_Cellular_Automata",
    "summary": "This paper applies cellular automata to microscopic urban traffic simulation. It models the movement of individual vehicles through a city road network using simple local rules and considers how roads and intersections influence traffic movement.",
    "results": [
      "Demonstrates that cellular automata can be used to simulate traffic in urban road networks.",
      "Shows how individual vehicle movements can produce larger traffic patterns across a city.",
      "Provides a foundation for using cellular automata in practical urban traffic simulation."
    ],
    "important": true
  },
  {
    "id": 12,
    "citation": "Foulaadvand, M. E., & Belbaasi, S. (2007). Vehicular traffic flow at a non-signalised intersection. arXiv.",
    "link": "https://arxiv.org/abs/0712.2157",
    "summary": "This paper studies vehicle movement through an intersection without traffic lights using a traffic simulation model. It investigates how vehicles from different directions interact when crossing the intersection and how traffic conditions affect waiting and movement.",
    "results": [
      "Shows how traffic flow at an unsignalized intersection depends on interactions between crossing vehicles.",
      "Investigates how increasing traffic demand affects queues and delays.",
      "Provides insight into intersection behavior without fixed traffic-signal control."
    ],
    "important": false
  },
  {
    "id": 13,
    "citation": "Foulaadvand, M. E., & Belbaasi, S. (2008). Simulation of traffic flow at a signalised intersection. arXiv.",
    "link": "https://arxiv.org/abs/0809.3591",
    "summary": "This paper simulates vehicle movement through an intersection controlled by traffic lights. The authors examine how traffic signals regulate vehicles arriving from different directions and how signal settings affect traffic flow and waiting times.",
    "results": [
      "Shows that traffic-signal settings influence vehicle queues and delays at an intersection.",
      "Demonstrates how simulation can be used to study traffic movement under different signal conditions.",
      "Provides a way to evaluate intersection performance using microscopic traffic rules."
    ],
    "important": false
  },
  {
    "id": 14,
    "citation": "Fouladvand, M. E., Sadjadi, Z., & Shaebani, M. R. (2003). Characteristics of vehicular traffic flow at a roundabout (Version 1). arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0309560v1",
    "summary": "This paper studies vehicle movement through a roundabout using a traffic simulation model. It examines how cars enter, circulate, and leave the roundabout and how interactions between entering vehicles and circulating traffic influence overall traffic performance.",
    "results": [
      "Investigates how traffic density affects vehicle movement through a roundabout.",
      "Shows that interactions between entering and circulating vehicles can create delays and queues.",
      "Demonstrates how microscopic traffic simulation can represent the behavior of roundabout intersections."
    ],
    "important": false
  },
  {
    "id": 15,
    "citation": "Fouladvand, M. E., Sadjadi, Z., & Shaebani, M. R. (2004). Optimised traffic flow at a single intersection: Traffic responsive signalisation. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0401078",
    "summary": "This paper investigates traffic-responsive signal control at a single intersection. Instead of using only fixed signal timings, the study considers how traffic lights can respond to changing vehicle conditions to improve movement through the intersection.",
    "results": [
      "Explores how traffic-responsive signal timing can improve intersection performance.",
      "Shows the importance of adapting signal control to changing traffic demand.",
      "Demonstrates how microscopic traffic simulation can support the evaluation of adaptive traffic-light strategies."
    ],
    "important": false
  },
  {
    "id": 16,
    "citation": "Fukś, H. (1999). Exact results for deterministic cellular automata traffic models. arXiv.",
    "link": "https://arxiv.org/abs/comp-gas/9902001",
    "summary": "This paper develops mathematical results for deterministic cellular automaton traffic models. Unlike stochastic models that include random braking, deterministic models follow fixed movement rules. The author analyzes traffic behavior using exact mathematical methods.",
    "results": [
      "Provides analytical results for traffic models governed by deterministic cellular automaton rules.",
      "Helps explain the relationship between vehicle density and traffic flow without relying entirely on simulations.",
      "Establishes mathematical tools for understanding the behavior of simple traffic cellular automata."
    ],
    "important": false
  },
  {
    "id": 17,
    "citation": "Gershenson, C., & Rosenblueth, D. A. (2009). Modeling self-organizing traffic lights with elementary cellular automata. arXiv.",
    "link": "https://arxiv.org/abs/0907.1925",
    "summary": "This paper investigates how elementary cellular automata can model self-organizing traffic lights. It examines traffic-signal behavior based on local conditions rather than relying entirely on centrally planned signal timings.",
    "results": [
      "Shows how simple local rules can be used to represent adaptive traffic-light behavior.",
      "Explores self-organization as an alternative to fixed or centrally optimized signal control.",
      "Demonstrates the potential of elementary cellular automata for studying traffic-light coordination."
    ],
    "important": true
  },
  {
    "id": 18,
    "citation": "Hauck, C., Sun, Y., & Timofeyev, I. (2012). On cellular automata models of traffic flow with look-ahead potential. arXiv.",
    "link": "https://arxiv.org/abs/1209.5802",
    "summary": "This paper studies cellular automaton traffic models that incorporate a look-ahead potential, allowing vehicle movement decisions to account for traffic conditions farther ahead. The authors investigate how this additional information changes vehicle behavior and the overall traffic flow.",
    "results": [
      "Examines how look-ahead information affects vehicle movement in cellular automaton models.",
      "Investigates the influence of anticipatory driving behavior on traffic organization and congestion.",
      "Extends basic traffic models by considering more information than the immediate position of the vehicle ahead."
    ],
    "important": false
  },
  {
    "id": 19,
    "citation": "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (1998). Disorder effects in cellular automata for two-lane traffic. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9810184",
    "summary": "This paper investigates disorder effects in a two-lane cellular automaton model of highway traffic. It studies how differences in vehicle behavior and lane interactions influence traffic movement, congestion, and the performance of a two-lane road.",
    "results": [
      "Shows that lane interactions can influence traffic flow differently from single-lane models.",
      "Investigates how disorder or variation in traffic conditions affects congestion.",
      "Contributes to understanding how cellular automata can represent more complex multi-lane traffic behavior."
    ],
    "important": false
  },
  {
    "id": 20,
    "citation": "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2000). Towards a realistic microscopic description of highway traffic. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0012204",
    "summary": "This paper develops a more realistic microscopic cellular automaton model for highway traffic. The authors introduce more detailed representations of vehicle behavior to reproduce traffic phenomena that simpler models may not capture.",
    "results": [
      "Shows how additional driving rules can improve the representation of realistic highway traffic.",
      "Investigates traffic patterns that arise from interactions between individual vehicles.",
      "Provides a foundation for later cellular automaton models that aim to reproduce observed traffic behavior."
    ],
    "important": true
  },
  {
    "id": 21,
    "citation": "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2001). Human behavior as origin of traffic phases. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0107051",
    "summary": "This paper examines how human driving behavior contributes to the different phases of highway traffic. Using a microscopic traffic model, the authors investigate how drivers' responses to surrounding vehicles can produce free-flowing, synchronized, and congested traffic conditions.",
    "results": [
      "Connects the appearance of different traffic phases to individual driving behavior.",
      "Shows that local interactions between drivers can produce large-scale changes in traffic conditions.",
      "Highlights the importance of representing human behavior in realistic microscopic traffic models."
    ],
    "important": false
  },
  {
    "id": 22,
    "citation": "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2002). A realistic two-lane traffic model for highway traffic. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0203346",
    "summary": "This paper extends a realistic microscopic cellular automaton model to two-lane highway traffic. The authors study how vehicles change lanes, interact with traffic in neighboring lanes, and respond to different traffic conditions.",
    "results": [
      "Demonstrates how realistic lane-changing rules can be incorporated into cellular automaton traffic models.",
      "Investigates interactions and synchronization between two highway lanes.",
      "Extends microscopic traffic modeling beyond the limitations of single-lane road simulations."
    ],
    "important": true
  },
  {
    "id": 23,
    "citation": "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2004). An empirical test for cellular automaton models of traffic flow. Physical Review E, 70(1), Article 016115.",
    "link": "https://arxiv.org/abs/cond-mat/0404710",
    "summary": "This paper evaluates several cellular automaton traffic models using a microscopic test scenario based on empirical single-vehicle data. The authors compare the ability of different models to reproduce observed traffic behavior at both macroscopic and microscopic levels.",
    "results": [
      "Shows that reproducing realistic-looking traffic patterns does not necessarily mean a model matches empirical measurements.",
      "Distinguishes models with qualitative agreement from those that reproduce macroscopic and microscopic traffic characteristics.",
      "Demonstrates the importance of empirical testing when evaluating the accuracy of traffic cellular automata."
    ],
    "important": true
  },
  {
    "id": 24,
    "citation": "Larraga, M. E., & del Rio, J. A. (2001). Cellular automata for one-lane traffic flow modelling: Safety and automation. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0112082",
    "summary": "This paper investigates one-lane traffic flow using cellular automaton models with an emphasis on vehicle safety and automation. It examines how movement rules can represent safer driving behavior and how automated vehicle control may influence traffic conditions.",
    "results": [
      "Explores how safety-related driving rules can be incorporated into cellular automaton traffic models.",
      "Investigates the effects of automated vehicle behavior on one-lane traffic flow.",
      "Connects microscopic traffic modeling with questions of vehicle control and road safety."
    ],
    "important": false
  },
  {
    "id": 25,
    "citation": "Li, J., & Yan, C. (2023). Traffic flow simulation for autonomous driving. arXiv.",
    "link": "https://arxiv.org/abs/2307.16762",
    "summary": "This paper examines traffic flow simulation in the context of autonomous driving. It considers how simulated traffic environments can be used to study vehicle interactions and traffic behavior relevant to autonomous vehicle systems.",
    "results": [
      "Highlights the role of traffic simulation in studying autonomous driving scenarios.",
      "Connects vehicle-level interactions with broader traffic-flow behavior.",
      "Provides context for applying traffic simulation techniques to autonomous vehicle research."
    ],
    "important": false
  },
  {
    "id": 26,
    "citation": "Maerivoet, S., & De Moor, B. (2005). Cellular automata models of road traffic. Physics Reports, 419(1), 1–64.",
    "link": "https://arxiv.org/abs/physics/0509082",
    "summary": "This review explains how cellular automata (CA) can model road traffic. It describes how small road cells and simple movement rules represent cars. The authors compare models for one lane, several lanes, and city roads. They also explain how to measure traffic speed, flow, and the gaps between cars.",
    "results": [
      "Brings many CA traffic models together and compares the traffic patterns they produce.",
      "Explains how to turn model measurements into real road measurements.",
      "Reviews both computer simulations and mathematical methods for studying traffic."
    ],
    "important": true
  },
  {
    "id": 27,
    "citation": "Marzolla, M. (2018). Parallel implementations of cellular automata for traffic models. arXiv.",
    "link": "https://arxiv.org/abs/1804.07981",
    "summary": "This paper studies ways to run CA traffic simulations faster. It uses the Biham-Middleton-Levine (BML) model, where cars move in two directions on a grid. The author compares a basic program with versions that use several CPU cores, process several values at once, or run on a graphics processor (GPU). Tests measure how much each method speeds up the simulation.",
    "results": [
      "Shows how different computing methods can speed up the same traffic model.",
      "Finds that careful use of CPU features can reduce the speed gap between CPU and GPU versions.",
      "Measures the benefits of each method against a basic version that does one task at a time."
    ],
    "important": false
  },
  {
    "id": 28,
    "citation": "Marzoug, R., Lakouari, N., Pérez-Cruz, J. R., & Hurtado-Beltran, A. (2026). Cellular automata for traffic accident analysis: A systematic review. Mathematics, 14(17), 3091.",
    "link": "https://www.mdpi.com/2227-7390/14/17/3091",
    "summary": "This paper reviews how CA models represent crashes between vehicles. The authors search four research databases and select 90 papers from 740 records. They group the studies by crash type, such as rear-end, head-on, and side-impact crashes. They compare the model rules and point out gaps in the research.",
    "results": [
      "Provides a shared way to group and compare CA models of vehicle crashes.",
      "Covers crashes caused by following, crossing, passing, and merging.",
      "Finds that checks against real traffic data are still limited in the reviewed studies."
    ],
    "important": true
  },
  {
    "id": 29,
    "citation": "Nagel, K., & Schreckenberg, M. (1992). A cellular automaton model for freeway traffic. Journal de Physique I, 2(12), 2221–2229.",
    "link": "https://www.researchgate.net/publication/263504490_A_cellular_automaton_model_for_freeway_traffic",
    "summary": "This paper introduces the Nagel-Schreckenberg (NaSch) model for freeway traffic. It divides a road into cells and gives each car a position and speed. At each time step, cars speed up, slow down to avoid the car ahead, sometimes brake at random, and then move. The authors use simulations to study how traffic changes as the road becomes more crowded.",
    "results": [
      "Shows that simple movement rules can produce both smooth traffic and waves of stopping and starting.",
      "Finds that random changes in speed can create jams even without a road blockage.",
      "Provides a basic CA traffic model that many later papers extend."
    ],
    "important": true
  },
  {
    "id": 30,
    "citation": "Nagel, K., Wolf, D. E., Wagner, P., & Simon, P. (1998). “Two-lane traffic rules for cellular automata: A systematic approach.”",
    "link": "https://arxiv.org/abs/cond-mat/9712196",
    "summary": "This paper studies how to design lane-changing rules for two-lane CA traffic models. The authors review earlier rules and propose a shared structure for building them. They test several versions to see whether they produce realistic lane use and traffic flow. The study focuses on how the rules are organized, as well as their details.",
    "results": [
      "Provides a common structure for designing lane-changing rules.",
      "Shows that different detailed rules can produce similar realistic results when they share this structure.",
      "Reproduces lane-use patterns in which the passing lane can become more crowded than the other lane."
    ],
    "important": false
  },
  {
    "id": 31,
    "citation": "Nishinari, K., Fukui, M., & Schadschneider, A. (2003). A stochastic cellular automaton model for traffic flow with multiple metastable states. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0311194",
    "summary": "This paper proposes a CA traffic model with random behavior, delayed restarting, and drivers looking ahead. It extends the NaSch model and another CA model called the Burgers model. Simulations examine traffic flow, vehicle speeds, and how long different traffic patterns last. The model allows several traffic patterns that can last for a while but break down after a disturbance.",
    "results": [
      "Produces several temporary stable traffic patterns near the change from smooth to crowded traffic.",
      "Shows that the same traffic density can have different flow values.",
      "Creates a broad spread of points in the graph of flow against density."
    ],
    "important": false
  },
  {
    "id": 32,
    "citation": "Olmos, L. E., & Muñoz, J. D. (2015). Unravelling the puzzling intermediate states in the Biham–Middleton–Levine traffic model. arXiv.",
    "link": "https://arxiv.org/abs/1502.04587",
    "summary": "This paper studies the BML model, where cars move east or north on a grid in alternating turns. Earlier studies found a middle state where some cars move while others are stuck. The authors examine how grid shape and direction affect the change from moving traffic to jams. They use simulations and approximate calculations to explain this middle state.",
    "results": [
      "Links the middle states to two different changes in traffic behavior, depending on the grid's shape relative to the flow direction.",
      "Estimates the range of traffic density where moving cars and jams can exist together.",
      "Shows that the size and shape of the simulated grid matter when interpreting the results."
    ],
    "important": false
  },
  {
    "id": 33,
    "citation": "Pottmeier, A., Barlovic, R., Knospe, W., Schadschneider, A., & Schreckenberg, M. (2001). Localized defects in a cellular automaton model for traffic flow with phase separation. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0111535",
    "summary": "This paper asks how a small problem area on a road changes traffic in a CA model. At that location, cars are more likely to slow down, which limits how many can pass. The original model has separate regions of moving cars and jammed cars. The authors vary the strength of the problem area and study the resulting traffic.",
    "results": [
      "Finds three traffic states depending on how strongly the problem area limits flow.",
      "Produces traffic that repeatedly stops and starts, which is absent from the model without the problem area.",
      "Shows that a local slowdown can change traffic patterns across the road."
    ],
    "important": false
  },
  {
    "id": 34,
    "citation": "Rickert, M., Nagel, K., Schreckenberg, M., & Latour, A. (1996). “Two lane traffic simulations using cellular automata.”",
    "link": "https://arxiv.org/abs/cond-mat/9512119",
    "summary": "This paper extends the NaSch model to a road with two lanes. Cars follow movement rules within each lane and can change lanes. The authors study how model settings change the link between the number of cars and traffic flow. They also examine the role of random behavior in representing real traffic.",
    "results": [
      "Develops an early two-lane version of a CA traffic model.",
      "Identifies model settings that shape the graph of traffic flow against density.",
      "Examines why random behavior matters for realistic two-lane traffic."
    ],
    "important": true
  },
  {
    "id": 35,
    "citation": "Sakai, S., Nishinari, K., & Iida, S. (2006). A new stochastic cellular automaton model on traffic flow and its jamming phase transition. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/0611455",
    "summary": "This paper proposes a general CA traffic model with random behavior, delayed restarting, and drivers looking ahead. By changing its settings, the model can act like several earlier models, including NaSch, Quick-Start, and Slow-to-Start. The authors use simulations to study when moving traffic becomes jammed. They also calculate an approximate boundary between traffic states.",
    "results": [
      "Combines several known traffic models within one set of rules.",
      "Finds temporary stable traffic states near the point where congestion begins, even with randomness.",
      "Calculates traffic-state boundaries that closely match the simulation results."
    ],
    "important": false
  },
  {
    "id": 36,
    "citation": "Schadschneider, A. (1999). The Nagel–Schreckenberg model revisited. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9902170",
    "summary": "This paper takes a closer look at the NaSch model for single-lane traffic. It compares mathematical estimates with computer simulations. The author studies how the chance of random braking changes the arrangement of cars. Exact results are available when cars can move at most one cell per step, while higher speeds require estimates or simulations.",
    "results": [
      "Shows that the braking probability changes local traffic patterns.",
      "Compares several mathematical methods with simulation results.",
      "Explains why the higher-speed model is harder to solve exactly."
    ],
    "important": false
  },
  {
    "id": 37,
    "citation": "Schadschneider, A. (2000). Statistical physics of traffic flow. Physica A: Statistical Mechanics and Its Applications, 285(1–2), 101–120.",
    "link": "https://arxiv.org/abs/cond-mat/0007418",
    "summary": "This review explains how ideas from physics help researchers study traffic. It focuses on CA models and how the actions of many cars produce large traffic patterns. Special attention is given to entrance and exit ramps. The paper reviews how these ramps can change the road from moving traffic to congestion.",
    "results": [
      "Reviews CA traffic models with a focus on changes in traffic caused by ramps.",
      "Explains how interactions between cars create traffic patterns across a road.",
      "Describes the use of CA models for large traffic simulations that run faster than real time."
    ],
    "important": false
  },
  {
    "id": 38,
    "citation": "Schadschneider, A., & Schreckenberg, M. (1993). Cellular automaton models and traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9306017",
    "summary": "This paper uses mathematics to study an early CA traffic model. It calculates how traffic flow changes as more cars occupy the road. The method accounts for links between nearby road cells, rather than treating every cell as separate. The authors compare these calculations with computer results.",
    "results": [
      "Gives the exact flow-density result when the maximum speed is one cell per step.",
      "Produces estimates that closely match simulations at higher maximum speeds.",
      "Shows that links between nearby cells matter for predicting traffic flow."
    ],
    "important": false
  },
  {
    "id": 39,
    "citation": "Schadschneider, A., & Schreckenberg, M. (1995). Cellular automata for traffic flow: Analytical results. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9511037",
    "summary": "This paper compares two mathematical ways to study CA traffic models. One follows the road cells, while the other follows cars and the gaps between them. The authors also study larger groups of nearby cells to improve their estimates. They compare the calculated traffic flow with simulation results.",
    "results": [
      "Shows that the car-based method gives the exact flow-density curve when the maximum speed is one cell per step.",
      "Shows that the cell-based method needs information about neighboring cells to reach that result.",
      "Finds that larger cell groups give close agreement with simulations for higher speeds."
    ],
    "important": false
  },
  {
    "id": 40,
    "citation": "Schadschneider, A., & Schreckenberg, M. (1996). Car-oriented mean-field theory for traffic flow models. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9612113",
    "summary": "This paper develops a mathematical method based on the gaps between cars. Earlier methods mainly tracked whether each road cell was empty or occupied. Tracking gaps captures some relationships between cars that a simple cell-based estimate can miss. The authors test the method for maximum speeds of one and two cells per step.",
    "results": [
      "Gives the exact traffic-flow result for a maximum speed of one cell per step.",
      "Gives a flow-density curve that agrees well with simulations for a maximum speed of two cells per step.",
      "Shows that gaps between cars are useful variables for predicting traffic flow."
    ],
    "important": false
  },
  {
    "id": 41,
    "citation": "Schadschneider, A., & Schreckenberg, M. (1997). Traffic flow models with ‘slow-to-start’ rules. Annalen der Physik, 509(7), 541–551.",
    "link": "https://arxiv.org/abs/cond-mat/9709131",
    "summary": "This paper studies two CA traffic models in which stopped cars do not always restart right away. The authors compare two different slow-to-start rules. They calculate the link between traffic density and flow and check it against simulations. They also examine how these rules change jam formation.",
    "results": [
      "Shows that different restart rules change the flow-density curve.",
      "Finds good agreement between mathematical estimates and simulations, although the estimates are no longer exact.",
      "Finds a change to a fully jammed state in one of the two models."
    ],
    "important": true
  },
  {
    "id": 42,
    "citation": "Schadschneider, A., Chowdhury, D., Brockfeld, E., Klauck, K., Santen, L., & Zittartz, J. (1999). A new cellular automata model for city traffic. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9911312",
    "summary": "This paper builds a city traffic model by combining ideas from the BML grid model and the NaSch highway model. It includes traffic lights that change together on a shared schedule. The authors study how the number of cars and the length of the light cycle affect movement. The model can change from moving traffic to complete gridlock.",
    "results": [
      "Combines city-grid traffic and highway-style vehicle movement in one CA model.",
      "Finds a traffic density at which the city grid becomes fully jammed.",
      "Shows that this jamming point depends on the traffic-light cycle length."
    ],
    "important": true
  },
  {
    "id": 43,
    "citation": "Schreckenberg, M., Schadschneider, A., Nagel, K., & Ito, N. (1994). Discrete stochastic models for traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9412045",
    "summary": "This paper studies a CA model with random behavior on a single-lane ring road. Cars move around the ring, and all cars are updated together at each time step. The authors calculate traffic flow at different densities using simulations and mathematical estimates. Their estimates include links between nearby cells.",
    "results": [
      "Finds an exact flow-density result for a maximum speed of one cell per step.",
      "Obtains close agreement with simulations at higher speeds by improving the estimates.",
      "Provides a detailed mathematical study of a basic random CA traffic model."
    ],
    "important": false
  },
  {
    "id": 44,
    "citation": "Simon, P., & Gutowitz, H. A. (1998). A cellular automaton model for bi-directionnal traffic. arXiv.",
    "link": "https://arxiv.org/abs/cond-mat/9801024",
    "summary": "This paper models a two-lane road with cars traveling in opposite directions. It extends NaSch by allowing passing and different vehicle speeds. A car that passes must consider traffic coming from the other direction. The authors compare the model with a one-lane version and with measured traffic data.",
    "results": [
      "Shows how passing connects traffic in the two opposite directions.",
      "Produces flow-density results that closely match the measured data used in the study.",
      "Extends CA modeling to two-way roads with vehicles moving at different speeds."
    ],
    "important": false
  },
  {
    "id": 45,
    "citation": "Tadaki, S.-i. (1996). Two-dimensional cellular automaton model of traffic flow with open boundaries. arXiv.",
    "link": "https://arxiv.org/abs/adap-org/9606001",
    "summary": "This paper studies traffic on a two-dimensional grid where cars can enter and leave at the edges. The author uses simulations to measure the number of cars leaving and their average speed. The study examines both light traffic and jammed traffic. A simple estimate is used to explain behavior when traffic is light.",
    "results": [
      "Studies how traffic behaves when vehicles enter and leave the grid.",
      "Finds slow fluctuations, called flicker or 1/f noise, in outflow and average speed during jams.",
      "Uses a jam-free approximation to explain light-traffic behavior."
    ],
    "important": false
  },
  {
    "id": 46,
    "citation": "Tian, J., Jia, B., Ma, S., Zhu, C., Jiang, R., & Ding, Y. (2015). Cellular automaton model with dynamical 2D speed-gap relation reproduces empirical and experimental features of traffic flow. arXiv.",
    "link": "https://arxiv.org/abs/1503.05986",
    "summary": "This paper improves a CA model that uses brake lights to represent drivers' responses. It gives cars a desired following time gap longer than one second. Random behavior allows speed and gap values to spread across an area on a graph, rather than follow one fixed curve. The authors compare the model with traffic observations and driving experiments.",
    "results": [
      "Reproduces free-moving traffic, crowded moving traffic, jams, and changes between these states.",
      "Reproduces how disturbances grow in a line of cars following one another.",
      "Matches traffic-speed patterns from the NGSIM traffic dataset."
    ],
    "important": false
  },
  {
    "id": 47,
    "citation": "Tian, J., Zhu, C., & Jiang, R. (2018). Cellular automata approach to synchronized traffic flow modelling. arXiv.",
    "link": "https://arxiv.org/abs/1805.05555",
    "summary": "This paper reviews CA models of synchronized traffic flow. This term describes crowded traffic in which cars still move and speeds across lanes tend to become similar. The authors compare how models reproduce this traffic state and the change into it from free-moving traffic. They also discuss directions for future research.",
    "results": [
      "Brings together CA models that aim to reproduce synchronized traffic flow.",
      "Compares their ability to represent the change from free-moving to crowded moving traffic.",
      "Outlines questions for future model development."
    ],
    "important": false
  },
  {
    "id": 48,
    "citation": "Tian, T., Liu, G., Hu, X., & Bian, D. (2024). Traffic behavior analysis of the urban expressway ramp based on continuous cellular automata. Physica A: Statistical Mechanics and Its Applications, 633, 129418.",
    "link": "https://www.sciencedirect.com/science/article/pii/S0378437123009731",
    "summary": "This paper models an urban expressway with entrance and exit ramps using continuous cellular automata. It adds rules for merging, leaving the road, following cars, and changing lanes. The model also considers the lengths of lanes where cars speed up or slow down near ramps. The authors test it using a scenario based on Chengdu's Second Ring Elevated Road.",
    "results": [
      "Finds that congestion often begins near merging and exit areas and spreads outward.",
      "Shows that more cars entering the main road and ramps increase the effects of ramp disturbances.",
      "Finds that lane changes affect traffic speeds and differences in flow between lanes."
    ],
    "important": false
  },
  {
    "id": 49,
    "citation": "Wang, Z., Chen, T., Wang, Y., & Li, H. (2024). “A cellular automaton model for mixed traffic flow considering the size of CAV platoon.”",
    "link": "https://www.sciencedirect.com/science/article/pii/S0378437124003315",
    "summary": "This paper models one lane shared by human-driven cars and connected and automated vehicles (CAVs). CAVs can form platoons, meaning groups that travel together with coordinated speeds and gaps. The model gives human drivers and CAVs different movement rules and decision times. Simulations test the effects of the share of CAVs and the maximum platoon size.",
    "results": [
      "Finds that a larger share of CAVs can increase road capacity and average speed while reducing congestion in the simulations.",
      "Finds little effect from increasing the maximum platoon size when CAVs make up less than 70% of traffic.",
      "Finds greater platoon-size benefits when CAVs dominate, but the extra gains become smaller as platoons grow."
    ],
    "important": false
  },
  {
    "id": 50,
    "citation": "Wolf, D. E. (1999). Cellular automata for traffic simulations. Physica A: Statistical Mechanics and Its Applications, 263(1–4), 438–451.",
    "link": "https://www.sciencedirect.com/science/article/pii/S0378437198005366",
    "summary": "This paper reviews CA traffic simulations, including jam formation, lane use, and groups of cars traveling together. It discusses moving traffic that can remain stable for a while before a disturbance triggers congestion. The author also introduces a model in which car interactions depend on relative motion. This provides a way to explain such temporary stable states.",
    "results": [
      "Shows how CA models can reproduce several traffic patterns while running large simulations quickly.",
      "Reviews temporary stable traffic states near the start of congestion.",
      "Introduces a model whose car interactions stay the same when the same speed is added to all cars."
    ],
    "important": false
  },
  {
    "id": 51,
    "citation": "Kerner, B. S., Klenov, S. L., & Wolf, D. E. (2002). Cellular automata approach to three-phase traffic theory. arXiv.",
    "link": "https://arxiv.org/pdf/cond-mat/0206370",
    "summary": "This paper develops cellular automaton models for free flow, synchronized flow, and wide moving jams. Its central approach introduces a synchronization distance: drivers adapt to the leading vehicle's speed without selecting a unique following gap. With stochastic acceleration and slow-to-start rules, steady states occupy a two-dimensional flow-density region. On-ramp simulations vary main-road and ramp inflows to examine congestion patterns, breakdown probability, and capacity drops.",
    "results": [
      "Reproduces synchronized-flow patterns and general patterns containing moving jams, in qualitative agreement with three-phase traffic theory.",
      "Shows that changing ramp and upstream demand changes the congested pattern and the probability of breakdown from free to synchronized flow.",
      "Calculates capacity reductions after breakdown and distinguishes the resulting patterns from those of fundamental-diagram CA models."
    ],
    "important": true
  },
  {
    "id": 52,
    "citation": "Li, X., Yan, X., Li, X., & Wang, J. (2012). Using cellular automata to investigate pedestrian conflicts with vehicles in crosswalk at signalized intersection. Discrete Dynamics in Nature and Society, 2012, Article 287502.",
    "link": "https://onlinelibrary.wiley.com/doi/epdf/10.1155/2012/287502",
    "summary": "This paper combines pedestrian and vehicle movement in a signalized-crosswalk CA model with four conflict areas and explicit yielding rules. It uses 0.5 m cells, observed pedestrian speed proportions, and random priority when both users target the same cell. MATLAB experiments average thirty one-hour runs per scenario, varying traffic demand, pedestrian green time, and crosswalk width to study capacity, conflicts, and delay.",
    "results": [
      "Finds that conflicts increase with vehicle flow but peak and then decline as pedestrian flow rises; right-turn conflict areas are most affected.",
      "Finds that longer pedestrian green time increases conflict opportunities while reducing conflict delay; crosswalk width has little influence on conflict counts or conflict delay in these simulations.",
      "Reports that conflict delay can account for up to 41% of total pedestrian crossing delay."
    ],
    "important": true
  },
  {
    "id": 53,
    "citation": "Wang, J., Lv, W., Jiang, Y., & Huang, G. (2024). A cellular automata approach for modelling pedestrian-vehicle mixed traffic flow in urban city. arXiv.",
    "link": "https://arxiv.org/pdf/2405.06282",
    "summary": "This preprint unifies vehicles and pedestrians in a multi-grid CA framework, combining an improved Kerner-Klenov-Wolf vehicle model with a time-to-collision-based pedestrian model. Two-lane simulations with periodic boundaries vary vehicle and pedestrian densities to study sidewalk intrusion, lane changes, and congestion. Additional experiments compare speed limits and sidewalk widths, measuring conflicts through vehicle deceleration exceeding 3.6 m/s².",
    "results": [
      "Identifies six mixed-traffic phase regions; pedestrian intrusion can redistribute vehicles between lanes and generate stop-and-go waves and moving jams.",
      "Reports peak conflict counts of about 140 at 60.48 km/h versus about 40 at 30.24 km/h in the simulated speed-limit comparison.",
      "Finds wider sidewalks reduce conflicts in some pedestrian-density ranges, while peak counts remain around 130–140; the benefit is not uniform across all densities."
    ],
    "important": true
  },
  {
    "id": 54,
    "citation": "Hou, J., List, G. F., & Guo, X. (2014). New algorithms for computing the time-to-collision in freeway traffic simulation models. Computational Intelligence and Neuroscience, 2014, Article 761047.",
    "link": "https://onlinelibrary.wiley.com/doi/epdf/10.1155/2014/761047",
    "summary": "This paper develops continuous two-dimensional time-to-collision (TTC) calculations for freeway microsimulation, including lateral motion and vehicle safety buffers. It compares circles, rectangles, and ellipse-rectangle geometry, then combines large- and small-circle screening with detailed ellipse-rectangle calculations. MATLAB tests use smoothed NGSIM US-101 trajectories, evaluating 327,616 vehicle pairs with a five-second TTC horizon.",
    "results": [
      "The combined algorithm takes 17 seconds versus 45 seconds for the ellipse-rectangle method alone on the reported test computer, with the same TTC results.",
      "Inverse TTC correlates with braking and steering reaction intensity at r = 0.732 for ellipse-based methods, compared with 0.381 for circles and 0.522 for rectangles.",
      "Provides a computational safety-analysis method rather than a CA movement model; validation within a complete traffic simulation remains future work."
    ],
    "important": true
  },
  {
    "id": 55,
    "citation": "Feng, T., Liu, K., & Liang, C. (2023). An improved cellular automata traffic flow model considering driving styles. Sustainability, 15(2), 952.",
    "link": "https://doi.org/10.3390/su15020952",
    "summary": "This study develops an improved cellular automaton traffic model incorporating different driving styles identified from NGSIM vehicle trajectory data. Principal component analysis and k-means clustering are used to classify driving behavior. The model extends traditional traffic rules by introducing over-acceleration and speed adaptation mechanisms to reproduce free flow, synchronized traffic, and wide moving jams. The authors compare the model with the NaSch model and investigate how aggressive and calm driving styles influence road capacity, traffic stability, and congestion dissipation.",
    "results": [
      "The improved model produces approximately 15% higher maximum traffic flow than the NaSch model under the reported simulation conditions.",
      "Aggressive driving increases simulated traffic capacity by approximately 181% compared with calm driving, although aggressive behavior makes free-flow conditions less stable.",
      "The improved model reproduces free-flow, synchronized-flow, and wide-moving-jam phases while producing fewer congested regions and faster congestion dissipation than the NaSch model."
    ],
    "important": true
  },
  {
    "id": 56,
    "citation": "Jiang, Y., Wang, S., Yao, Z., Zhao, B., & Wang, Y. (2021). A cellular automata model for mixed traffic flow considering the driving behavior of connected automated vehicle platoons. Physica A: Statistical Mechanics and its Applications, 582, 126262.",
    "link": "https://doi.org/10.1016/j.physa.2021.126262",
    "summary": "This paper proposes a cellular automaton model for mixed traffic containing human-driven vehicles and connected automated vehicles operating in platoons. Three car-following modes are considered: human driving, adaptive cruise control, and cooperative adaptive cruise control. The model incorporates safety distance, vehicle reaction time, random braking behavior, and synchronized movements within CAV platoons. Numerical simulations investigate how CAV penetration rates and maximum platoon sizes influence traffic capacity, congestion, and speed fluctuations.",
    "results": [
      "The simulations report road capacity improvements reaching 3.24 times the human-driven traffic baseline under the studied CAV conditions.",
      "The maximum reported reduction in traffic congestion reaches 63.36%, demonstrating the potential of CAV platoons to alleviate congestion.",
      "Vehicle speed fluctuations decrease significantly when CAV penetration reaches 80%. Increasing maximum platoon size can also improve capacity under full CAV penetration, with an optimal size depending on traffic density."
    ],
    "important": true
  },
  {
    "id": 57,
    "citation": "Jiang, Y., Yi, Z., Xiao, G., Li, H., & Yao, Z. (2023). Modeling the effect of the platoon size of CAVs on mixed traffic flow: a cellular automaton method. Journal of Advanced Transportation, 2023(1), 2761858.",
    "link": "https://doi.org/10.1155/2023/2761858",
    "summary": "This paper develops a cellular automaton model to examine how connected automated vehicle platoon size affects mixed traffic flow. Vehicles are divided into four car-following modes: human-driven vehicles, adaptive cruise control vehicles, and CAVs operating in interplatoon and intraplatoon cooperative adaptive cruise control modes. Numerical simulations evaluate traffic capacity, average speed, congestion, and reaction-time effects across different CAV penetration rates and platoon sizes. The study also compares simulation results with theoretical calculations.",
    "results": [
      "Compared with fully human-driven traffic, an 80% CAV penetration rate increases simulated road capacity by approximately 2.2 times, while 100% penetration increases it by approximately 4.3 times.",
      "Higher CAV penetration increases average speeds and reduces congestion at the same vehicle density, with particularly noticeable congestion improvements above 60% penetration.",
      "At full CAV penetration, larger platoons can improve road capacity; under moderate traffic density, the study identifies seven CAVs as the optimal platoon size. Simulated and theoretical results differ by only 0.46% in the full-CAV comparison."
    ],
    "important": true
  },

  {
    "id": 58,
    "citation": "Zhang, J. X., & Wu, C. X. (2025). Active lane-changing model based on cellular automata to promote CAV platoon. Journal of King Saud University – Computer and Information Sciences, 37, Article 6.",
    "link": "https://doi.org/10.1007/s44443-025-00009-2",
    "summary": "This study develops a cellular automaton (CA) model incorporating cooperative lane-changing behavior and connected automated vehicle (CAV) platoon formation in mixed traffic. The model considers human-driven vehicles (HDVs), trucks, and CAVs on a three-lane highway with a temporary lane closure. It proposes an Active Lane-Changing with Platoon Formation (ALC-FP) strategy and compares it with a conventional accident-warning lane-changing (AW-LC) strategy. Simulations investigate the effects of CAV penetration rates and traffic demand on vehicle delay, congestion, platoon formation, and traffic safety.",
    "results": [
      "The proposed ALC-FP strategy significantly reduces vehicle delay. At 80% CAV penetration and traffic demand of 1400 vehicles/lane/hour, average vehicle delay decreases by 76.36% compared with the conventional AW-LC strategy.",
      "Cooperative lane-changing improves traffic safety. At 80% CAV penetration and 2000 vehicles/lane/hour, time exposed to collision risk (TET) decreases from 1653 s to 432 s, representing a reduction of approximately 73.87%.",
      "Higher CAV penetration promotes platoon formation, improves traffic stability, and reduces congestion. Under some simulated conditions with 80% CAV penetration, the congestion ratio approaches zero.",
      "Traffic composition influences the effectiveness of the proposed strategy. Increasing the proportion of trucks increases vehicle delays and reduces platoon intensity, while low CAV penetration and high traffic demand limit the benefits of cooperative lane-changing."
    ],
    "important": true
  },
  {
    "id": 59,
    "citation": "Rigler, A., & Turk, G. (2025). The Influence of Different Driving Parameters on Traffic with a Cellular Automata Model. Applied Sciences, 15(23), 12404.",
    "link": "https://doi.org/10.3390/app152312404",
    "summary": "This study introduces a modified cellular automaton model with adaptive acceleration and heterogeneous driver reaction times. The model calculates vehicle movements using safety distances, acceleration and deceleration capabilities, maximum speeds, and reaction times. Simulations on a single-lane circular road investigate how these driving parameters affect traffic flow, average speed, and transitions between free-flow, synchronized-flow, and congested conditions. The results are compared with established models and observed highway traffic capacities.",
    "results": [
      "Adaptive acceleration increases simulated traffic flow by approximately 15–30% at medium densities and more than 30% at higher densities compared with fixed acceleration.",
      "Reducing driver reaction time by 0.2 seconds increases traffic flow by up to 40% under non-free-flow conditions, whereas changing maximum acceleration rates has relatively little effect.",
      "At a maximum velocity of 60 km/h and a reaction time of one second, the model reaches 2198 vehicles per hour at a density of 0.29 vehicles per cell. At 110 km/h, simulated maximum flow reaches approximately 2530 vehicles per hour."
    ],
    "important": true
  },
  {
    "id": 60,
    "citation": "Wang, Y., Jiang, Y., Wu, Y., & Yao, Z. (2024). Mitigating traffic oscillation through control of connected automated vehicles: A cellular automata simulation. Expert Systems with Applications, 235, 121275.",
    "link": "https://doi.org/10.1016/j.eswa.2023.121275",
    "summary": "This paper proposes a platoon-based control strategy for connected automated vehicles using an extension of the Follower Stopper controller. Unlike conventional approaches where individual automated vehicles independently regulate traffic, the proposed strategy enables CAV platoons to execute coordinated traffic control. A cellular automaton simulation examines the strategy under different CAV penetration rates and vehicle densities. Performance is evaluated in terms of traffic efficiency, congestion, oscillation intensity, fuel consumption, and pollutant emissions.",
    "results": [
      "The proposed platoon-based control strategy suppresses traffic oscillations and alleviates congestion, with its effectiveness depending on CAV penetration rate and traffic density.",
      "Compared with the conventional Follower Stopper strategy, platoon-based control performs better in simulated traffic efficiency, congestion reduction, oscillation mitigation, fuel consumption, and pollutant emissions.",
      "The conventional Follower Stopper strategy has diminishing benefits at high traffic densities, whereas the proposed platoon-based strategy remains effective over a wider density range and improves as CAV penetration increases."
    ],
    "important": true
  },
  {
    "id": 61,
    "citation": "Kinjo, K., & Tomoeda, A. (2025). Comparison of gap-based and flow-based control strategies using a new controlled stochastic cellular automaton model for traffic flow. Transportation Letters, 17(7), 1171–1181.",
    "link": "https://doi.org/10.1080/19427867.2024.2417150",
    "summary": "This study proposes a controlled stochastic optimal velocity cellular automaton model to investigate the effects of vehicle control strategies on traffic flow. Two approaches are compared: gap-based control, which adjusts vehicle speeds to balance distances between neighboring vehicles, and flow-based control, which attempts to equalize local traffic flow. Numerical simulations examine how these strategies influence vehicle movement, traffic flow, and speed stability under different traffic densities and control strengths.",
    "results": [
      "Both gap-based and flow-based control can improve traffic flow compared with uncontrolled traffic under suitable simulation conditions.",
      "Gap-based control can reduce traffic flow below the uncontrolled baseline when control strength is weak, whereas flow-based control consistently improves traffic flow across the examined control strengths.",
      "When both strategies produce similar traffic flow, flow-based control generally maintains a more stable vehicle-speed distribution across varying traffic densities."
    ],
    "important": true
  },
  {
    "id": 62,
    "citation": "Deng, X., Shao, Y., Song, J., & Wu, H. (2022). Traffic flow simulation of modified cellular automata model based on producer-consumer algorithm. PeerJ Computer Science, 8, e1102.",
    "link": "https://doi.org/10.7717/peerj-cs.1102",
    "summary": "This study modifies the Nagel-Schreckenberg cellular automaton model using a producer-consumer algorithm to represent information sharing and vehicle updates in intelligent connected traffic. The proposed method introduces multibuffer information access and randomized vehicle updating instead of relying entirely on conventional synchronous updates. Simulations compare the original NaSch model, the modified model, and versions incorporating driver behavior using space-time diagrams, flow-density relationships, and vehicle-speed distributions.",
    "results": [
      "Compared with the original NaSch model, the modified model produces fewer and narrower congestion regions, with traffic jams dissipating more rapidly and free-flow regions expanding.",
      "The original NaSch simulation reaches a maximum normalized traffic flow of approximately 0.49 at a density of 0.165. The modified model provides higher traffic flow before the critical density while maintaining approximately the same optimal density.",
      "When driver behavior is included, the modified model reduces stop-and-go congestion, produces fewer stationary vehicles, and increases the proportion of vehicles traveling at higher speeds. The authors note that real-world traffic validation remains necessary."
    ],
    "important": true
  },
  {
    "id": 63,
    "citation": "Lu, T., Yang, X., Liu, C., & Lin, S. (2024). Modeling and Analysis of Platoon Dispersion of Autonomous and Manual Mixed Vehicles Based on Cellular Automata. In CICTP 2024 (pp. 257–267).",
    "link": "https://doi.org/10.1061/9780784485484.025",
    "summary": "This paper investigates platoon dispersion in mixed traffic containing autonomous and manually driven vehicles. A two-lane cellular automaton model is developed using principles from classical platoon dispersion models. The simulations examine how changes in the proportion of autonomous vehicles influence the spatial distribution and movement characteristics of mixed vehicle platoons. The study also considers how lane-changing behavior affects the utilization of road space and the development of platoon dispersion.",
    "results": [
      "The simulated platoon characteristics initially increase and subsequently decrease as the proportion of autonomous vehicles rises, indicating a nonlinear relationship between vehicle automation and platoon behavior.",
      "Fully autonomous vehicle platoons exhibit distinct platoon characteristics, with particularly significant changes occurring as the autonomous vehicle proportion approaches 100%.",
      "Lane-changing behavior improves the utilization of available road space within the simulated platoon, demonstrating its importance in modeling mixed autonomous and manually driven traffic."
    ],
    "important": true
  },
  {
    "id": 64,
    "citation": "Dong, Y., Li, R., Zhang, X., & Liu, K. (2019). Impact of Lane-Changing Behavior on Surrounding On-Line Bus Stops Based on Cellular Automation Model. In CICTP 2019 (pp. 5043–5054).",
    "link": "https://doi.org/10.1061/9780784482292.434",
    "summary": "This study develops a three-lane cellular automaton model to investigate how bus stopping and departure activities influence surrounding traffic. The model focuses on lane-changing behavior near on-line bus stops, where buses temporarily obstruct traffic and cause nearby vehicles to adjust their movements. Simulations examine vehicle lane-changing rates, average speeds, traffic flow, and stability under different traffic densities and bus occupancy conditions. Particular attention is given to differences between the curbside lane and adjacent lanes.",
    "results": [
      "Bus entry and departure activities increase lane-changing activity near on-line bus stops and interfere with the surrounding traffic flow.",
      "Vehicles in the curbside lane experience greater disturbances from bus operations, contributing to notable speed differences between neighboring traffic lanes.",
      "The effects of bus stops on lane-changing rates, average speeds, traffic flow, and stability vary between lanes and depend on traffic density and bus occupancy conditions."
    ],
    "important": true
  },
  {
    "id": 65,
    "citation": "Xue, X., Cao, Y., Yang, Q., Yu, Y., & Li, R. (2022). Characteristics Analysis of Mixed Traffic Flow around Bus Stop under Cooperative Vehicle Infrastructure Environment. In CICTP 2022 (pp. 2485–2495).",
    "link": "https://doi.org/10.1061/9780784484265.234",
    "summary": "This paper studies mixed traffic flow near bus stops under a cooperative vehicle-infrastructure environment. The authors develop a two-lane cellular automaton model based on the Nagel-Schreckenberg model, incorporating autonomous cars, manually driven cars, and conventional buses. The model combines Gipps safety-distance rules with adaptive cruise control behavior to represent interactions between different vehicle types. Simulations examine how vehicle composition, autonomous vehicle penetration, bus proportions, and bus-stop configurations influence road capacity.",
    "results": [
      "Road sections surrounding bus-bay stops demonstrate greater traffic capacity than sections containing curbside bus stops under the simulated conditions.",
      "Increasing the proportion of autonomous cars improves traffic capacity, although a higher proportion of buses reduces the rate of this improvement.",
      "Autonomous cars have a stronger influence on road capacity upstream of bus stops than downstream, indicating that automation benefits vary spatially around bus-stop facilities."
    ],
    "important": true
  },
  {
    "id": 66,
    "citation": "Wu, J., Chen, M., You, L., Xie, J., Chen, K., Sun, T., & Hao, R. (2024). A Cellular Automata Model for Urban Road Traffic Simulation with Consideration of Bus Stop and Mixed Traffic Flow. In CICTP 2024 (pp. 22–32).",
    "link": "https://doi.org/10.1061/9780784485484.003",
    "summary": "This paper proposes a cellular automaton model for urban traffic containing connected autonomous cars, connected autonomous buses, regular cars, and conventional buses. The model extends the two-state safe-speed model to represent urban road conditions and reduce unrealistically large vehicle decelerations. A roadside bus-stop model is introduced in which only one bus can occupy the stop at a time. The researchers implement the simulation in Python and investigate how different proportions of connected autonomous cars and buses affect vehicle speeds, acceleration, congestion, and traffic safety.",
    "results": [
      "The extended two-state safe-speed model addresses unusually large simulated decelerations, improving the representation of vehicle movement in urban traffic.",
      "The simulations demonstrate that the penetration rates of connected autonomous cars and buses influence vehicle speeds, acceleration behavior, and congestion patterns.",
      "The reported simulation results indicate that introducing connected autonomous cars and buses has the potential to improve urban traffic efficiency and safety around bus stops."
    ],
    "important": true
  },
  {
    "id": 67,
    "citation": "Díaz-del-Río, F., Ragel-Díaz-Jara, D., Morón-Fernández, M. J., Cagigas-Muñiz, D., Cascado-Caballero, D., Guisado-Lizar, J. L., & Jimenez-Moreno, G. (2023, December). Comparing the efficiency of traffic simulations using cellular automata. In International Conference on Simulation Tools and Techniques (pp. 182–194). Cham: Springer Nature Switzerland.",
    "link": "https://doi.org/10.1007/978-3-031-57523-5_14",
    "summary": "This study compares computational approaches for cellular automaton traffic simulation, with an emphasis on execution speed, memory efficiency, and parallel processing. Using the Nagel-Schreckenberg model as a baseline, the researchers examine different implementations and optimizations intended to support large-scale microscopic traffic simulations. The investigation is motivated by applications requiring numerous simulation runs, including electric-vehicle charging infrastructure planning and urban traffic optimization. It compares interpreted and compiled programming languages, multicore execution, and techniques for reducing memory access.",
    "results": [
      "Compiled implementations achieve major performance improvements: the Python implementation is approximately 70 times slower than the C++ implementation for a tested 64 Ki-cell configuration, with the difference reaching approximately 80 times for larger configurations.",
      "Parallelization using OpenMP substantially improves simulation speed, with performance gains approaching the number of available processor cores under suitable conditions.",
      "The optimized simulation running on a single 12-core computer achieves execution performance approaching that of considerably larger computing systems using interpreted implementations. The authors note that additional urban traffic features can reduce performance."
    ],
    "important": true
  },
  {
    "id": 68,
    "citation": "Zhang, F., Qi, L., Luan, W., Yang, R., & Guo, X. (2024, October). Simulation and Control of Slope Bottlenecks Based on Cellular Automata in Mixed Traffic Flow. In 2024 IEEE International Conference on Systems, Man, and Cybernetics (SMC) (pp. 1832–1837). IEEE.",
    "link": "https://scholar.google.com/scholar?q=Simulation+and+Control+of+Slope+Bottlenecks+Based+on+Cellular+Automata+in+Mixed+Traffic+Flow",
    "summary": "This paper investigates traffic congestion at highway slope bottlenecks under mixed traffic conditions involving connected autonomous vehicles and human-driven vehicles. A cellular automaton traffic model incorporating CAV platooning is developed to simulate vehicle movements through slope bottlenecks. The authors propose a coordinated control strategy combining variable speed limits with vehicle platooning. The upstream road is divided into a variable-speed-limit zone and a platoon-formation zone, allowing traffic inflow to be regulated before vehicles enter the bottleneck.",
    "results": [
      "The proposed variable-speed-limit strategy regulates the arrival of vehicles into the platooning zone, creating lower-density conditions that support vehicle coordination.",
      "The hybrid platooning strategy organizes vehicles in mixed CAV and human-driven traffic before they encounter the slope bottleneck.",
      "Simulation experiments show that combining variable speed limits and platooning improves traffic flow through slope bottlenecks and alleviates congestion compared with uncontrolled operation."
    ],
    "important": true
  },
  {
    "id": 69,
    "citation": "Trapeznikova, M. A., Yashina, M. V., & Garibyan, A. G. (2024, November). Software for visualization of cellular automata models in traffic flow analysis. In 2024 Intelligent Technologies and Electronic Devices in Vehicle and Road Transport Complex (TIRVED) (pp. 1–4). IEEE.",
    "link": "https://doi.org/10.1109/TIRVED63561.2024.10769828",
    "summary": "This conference paper concerns software for visualizing cellular automaton models used in traffic-flow analysis. The authors are associated with the TrafficFlowViz3D traffic visualization system, which was registered as software in October 2024. The available bibliographic information confirms the paper's focus on visualization software, but the original abstract and complete paper were not accessible for verification of its implementation details, experimental procedures, or evaluation findings.",
    "results": [
      "The paper's publication and its focus on visualization software for cellular automaton traffic models are confirmed by the conference bibliographic record.",
      "The authors registered a related visualization program named TrafficFlowViz3D in October 2024; this is independently documented but does not establish the experimental findings of the conference paper.",
      "Specific performance measurements, validation experiments, and conclusions from the paper could not be verified from the accessible sources."
    ],
    "important": true
  },
  {
    "id": 70,
    "citation": "Qin, J., Gao, Y., Liu, Z., Wang, E., & Yang, T. (2026, January). Two-Lane Traffic Flow Simulation Based on an Improved Cellular Automaton Model. In 2026 3rd International Conference on Smart City and Information System (ICSCIS) (pp. 102–106). IEEE.",
    "link": "https://doi.org/10.1109/ICSCIS69190.2026.11453334",
    "summary": "This paper develops an improved two-lane cellular automaton traffic model based on the classical Nagel-Schreckenberg framework. The model introduces a velocity-effect mechanism and lane-changing rules to represent interactions between vehicles on adjacent lanes. Using periodic boundary conditions, numerical simulations examine traffic evolution under different vehicle densities and model parameters. The researchers analyze spatiotemporal traffic patterns and fundamental diagrams to evaluate the model's ability to represent transitions between free-flow and congested conditions.",
    "results": [
      "Introducing the velocity-effect mechanism and two-lane interactions improves the model's representation of the transition from free-flowing traffic to congestion.",
      "The simulations reproduce spatiotemporal changes in traffic behavior and corresponding macroscopic flow-density relationships under varying vehicle densities.",
      "Compared with the traditional NaSch model, the improved model provides a more reasonable description of traffic conditions at medium and high vehicle densities, addressing limitations of the original model."
    ],
    "important": true
  }
];