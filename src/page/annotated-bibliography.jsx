import { bibliography } from "./bibliography.jsx";
import "./annotated-bibliography.css";


const annotatedPapers = [
  {
    id: 1,
    citation: "Barlovic, R., Santen, L., Schadschneider, A., & Schreckenberg, M. (1998). Metastable states in cellular automata for traffic flow.",
    link: "https://arxiv.org/abs/cond-mat/9804170",
    summary:
      "This paper studies metastable traffic states using a cellular automaton model with slow-to-start behavior. The authors examine how traffic can remain in a high-flow state even at relatively high vehicle densities, and how disturbances can cause that state to break down into congestion.",
    results: [
      "Shows that free-flowing and congested traffic states can exist under similar density conditions.",
      "Demonstrates that small disturbances can trigger a transition from stable-looking traffic to a traffic jam.",
      "Explains how slow-to-start rules help reproduce metastability and reduced traffic flow after congestion develops.",
    ],
  },
  {
    id: 2,
    citation: "Barlovic, R., Schadschneider, A., & Schreckenberg, M. (2001). Random walk theory of jamming in a cellular automaton model for traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0102519",
    summary:
      "This paper uses random walk theory to analyze how traffic jams form, grow, and disappear in a cellular automaton traffic model. Instead of relying only on simulations, the authors study the changing boundaries of traffic jams to better understand their behavior.",
    results: [
      "Connects the movement of traffic jam boundaries to random walk processes.",
      "Provides a theoretical way to study the lifetime and evolution of traffic jams.",
      "Helps explain how random vehicle movements influence whether a jam grows or disappears.",
    ],
  },
  {
    id: 3,
    citation: "Benjamin, S. C., Johnson, N. F., & Hui, P. M. (1996). Cellular automata models of traffic flow along a highway containing a junction. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9605157",
    summary:
      "This paper investigates cellular automaton models of highway traffic with a junction. It considers how different driving rules, including slow-to-start behavior, affect vehicle movement and congestion near the junction. The study uses simulations to understand how local driving behavior interacts with road infrastructure.",
    results: [
      "Shows that junctions can create queues and reduce traffic flow even when the surrounding highway is relatively clear.",
      "Demonstrates that slow-to-start behavior changes how traffic congestion develops and clears.",
      "Illustrates how cellular automata can model the effects of both driver behavior and highway junctions.",
    ],
  },
  {
    id: 4,
    citation: "Biham, O., Middleton, A. A., & Levine, D. (1992). Self-organization and a dynamical transition in traffic-flow models.",
    link: "https://arxiv.org/abs/cond-mat/9206001",
    summary:
      "This paper introduces a two-dimensional cellular automaton model of city traffic. Vehicles move in two perpendicular directions on a grid and follow simple movement rules. The authors investigate how increasing the number of vehicles changes the system from freely moving traffic to a completely blocked state.",
    results: [
      "Shows that a simple traffic system can organize itself into moving patterns without centralized control.",
      "Identifies a transition between freely moving traffic and a gridlocked state as traffic density increases.",
      "Demonstrates that simple local movement rules can produce large-scale traffic organization and congestion.",
    ],
  },
  {
    id: 5,
    citation: "Boccara, N., & Fukś, H. (2000). Critical behavior of a cellular automaton highway traffic model. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9911039",
    summary:
      "This paper studies critical behavior in a cellular automaton model of highway traffic. The authors investigate how the overall traffic flow changes with vehicle density and examine the transition between freely moving and congested traffic.",
    results: [
      "Identifies critical behavior associated with changes in traffic density.",
      "Shows how traffic flow can change sharply when the number of vehicles reaches certain conditions.",
      "Provides a theoretical framework for studying traffic transitions using simple cellular automaton rules.",
    ],
  },
  {
    id: 6,
    citation: "Boccara, N., Fukś, H., & Zeng, Q. (1997). Car accidents and number of stopped cars due to road blockage on a one-lane highway. Journal of Physics A: Mathematical and General, 30(10), 3329–3332.",
    link: "https://arxiv.org/abs/adap-org/9704001",
    summary:
      "This paper examines the effects of road blockages on traffic in a one-lane cellular automaton model. The authors study how accidents or obstacles interrupt vehicle movement and cause cars to stop behind the blocked section of road.",
    results: [
      "Shows how a local road blockage can produce a queue of stopped vehicles.",
      "Investigates the relationship between traffic conditions and the number of cars affected by an obstruction.",
      "Demonstrates how cellular automata can represent traffic disruption caused by accidents or blocked roads.",
    ],
  },
  {
    id: 7,
    citation: "Brockfeld, E., Barlovic, R., Schadschneider, A., & Schreckenberg, M. (2001). Optimizing traffic lights in a cellular automaton model for city traffic. Physical Review E, 64(5), Article 056132.",
    link: "https://arxiv.org/abs/cond-mat/0107056",
    summary:
      "This paper uses a cellular automaton model of urban traffic to investigate traffic-light optimization. The authors simulate vehicles moving through a city road network and examine how different signal settings influence traffic flow and congestion.",
    results: [
      "Shows that traffic-light timing has a significant effect on traffic movement through a city network.",
      "Demonstrates that cellular automaton simulations can be used to compare and optimize signal-control strategies.",
      "Highlights the importance of coordinating traffic lights to improve overall network performance.",
    ],
  },
  {
    id: 8,
    citation: "Chowdhury, D., Santen, L., Schadschneider, A., Sinha, S., & Pasupathy, A. (1999). Spatio-temporal organization of vehicles in a cellular automata model of traffic with ‘slow-to-start’ rule. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9812148",
    summary:
      "This paper studies a cellular automaton traffic model that includes a slow-to-start rule, meaning stopped vehicles may take additional time to begin moving again. The authors compare its behavior with a standard traffic model and examine vehicle spacing, traffic jams, and changes in traffic patterns over time.",
    results: [
      "Shows that slow-to-start behavior changes the formation and structure of traffic jams.",
      "Demonstrates that small modifications to driving rules can create different traffic patterns.",
      "Provides insight into how delayed acceleration affects vehicle spacing and traffic flow.",
    ],
  },
  {
    id: 9,
    citation: "Diedrich, G., Santen, L., Schadschneider, A., & Zittartz, J. (2000). Effect of on- and off-ramps in cellular automata models for traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0001196",
    summary:
      "This paper investigates the effects of highway on-ramps and off-ramps using cellular automaton traffic models. The authors simulate vehicles entering and leaving a highway to understand how merging and exiting movements affect traffic density and congestion.",
    results: [
      "Shows that on-ramps can disturb highway traffic and contribute to congestion near merging areas.",
      "Demonstrates that vehicle entry and exit influence the distribution of traffic density along a highway.",
      "Extends basic cellular automaton traffic models to include more realistic highway infrastructure.",
    ],
  },
  {
    id: 10,
    citation: "Eisenblätter, B., Santen, L., Schadschneider, A., & Schreckenberg, M. (1997). Jamming transition in a cellular automaton model for traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9706041",
    summary:
      "This paper examines the transition from freely moving traffic to congested traffic in a cellular automaton model. The authors study how changes in vehicle density and interactions between cars affect the formation of traffic jams.",
    results: [
      "Investigates the conditions under which traffic changes from free flow to congestion.",
      "Shows how vehicle density and local movement rules influence the development of jams.",
      "Contributes to the theoretical understanding of traffic phase transitions in cellular automaton models.",
    ],
  },
  {
    id: 11,
    citation: "Esser, J., & Schreckenberg, M. (1997). Microscopic simulation of urban traffic based on cellular automata.",
    link: "https://www.researchgate.net/publication/2584087_Microscopic_Simulation_Of_Urban_Traffic_Based_On_Cellular_Automata",
    summary:
      "This paper applies cellular automata to microscopic urban traffic simulation. It models the movement of individual vehicles through a city road network using simple local rules and considers how roads and intersections influence traffic movement.",
    results: [
      "Demonstrates that cellular automata can be used to simulate traffic in urban road networks.",
      "Shows how individual vehicle movements can produce larger traffic patterns across a city.",
      "Provides a foundation for using cellular automata in practical urban traffic simulation.",
    ],
  },
  {
    id: 12,
    citation: "Foulaadvand, M. E., & Belbaasi, S. (2007). Vehicular traffic flow at a non-signalised intersection. arXiv.",
    link: "https://arxiv.org/abs/0712.2157",
    summary:
      "This paper studies vehicle movement through an intersection without traffic lights using a traffic simulation model. It investigates how vehicles from different directions interact when crossing the intersection and how traffic conditions affect waiting and movement.",
    results: [
      "Shows how traffic flow at an unsignalized intersection depends on interactions between crossing vehicles.",
      "Investigates how increasing traffic demand affects queues and delays.",
      "Provides insight into intersection behavior without fixed traffic-signal control.",
    ],
  },
  {
    id: 13,
    citation: "Foulaadvand, M. E., & Belbaasi, S. (2008). Simulation of traffic flow at a signalised intersection. arXiv.",
    link: "https://arxiv.org/abs/0809.3591",
    summary:
      "This paper simulates vehicle movement through an intersection controlled by traffic lights. The authors examine how traffic signals regulate vehicles arriving from different directions and how signal settings affect traffic flow and waiting times.",
    results: [
      "Shows that traffic-signal settings influence vehicle queues and delays at an intersection.",
      "Demonstrates how simulation can be used to study traffic movement under different signal conditions.",
      "Provides a way to evaluate intersection performance using microscopic traffic rules.",
    ],
  },
  {
    id: 14,
    citation: "Fouladvand, M. E., Sadjadi, Z., & Shaebani, M. R. (2003). Characteristics of vehicular traffic flow at a roundabout (Version 1). arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0309560v1",
    summary:
      "This paper studies vehicle movement through a roundabout using a traffic simulation model. It examines how cars enter, circulate, and leave the roundabout and how interactions between entering vehicles and circulating traffic influence overall traffic performance.",
    results: [
      "Investigates how traffic density affects vehicle movement through a roundabout.",
      "Shows that interactions between entering and circulating vehicles can create delays and queues.",
      "Demonstrates how microscopic traffic simulation can represent the behavior of roundabout intersections.",
    ],
  },
  {
    id: 15,
    citation: "Fouladvand, M. E., Sadjadi, Z., & Shaebani, M. R. (2004). Optimised traffic flow at a single intersection: Traffic responsive signalisation. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0401078",
    summary:
      "This paper investigates traffic-responsive signal control at a single intersection. Instead of using only fixed signal timings, the study considers how traffic lights can respond to changing vehicle conditions to improve movement through the intersection.",
    results: [
      "Explores how traffic-responsive signal timing can improve intersection performance.",
      "Shows the importance of adapting signal control to changing traffic demand.",
      "Demonstrates how microscopic traffic simulation can support the evaluation of adaptive traffic-light strategies.",
    ],
  },
  {
    id: 16,
    citation: "Fukś, H. (1999). Exact results for deterministic cellular automata traffic models. arXiv.",
    link: "https://arxiv.org/abs/comp-gas/9902001",
    summary:
      "This paper develops mathematical results for deterministic cellular automaton traffic models. Unlike stochastic models that include random braking, deterministic models follow fixed movement rules. The author analyzes traffic behavior using exact mathematical methods.",
    results: [
      "Provides analytical results for traffic models governed by deterministic cellular automaton rules.",
      "Helps explain the relationship between vehicle density and traffic flow without relying entirely on simulations.",
      "Establishes mathematical tools for understanding the behavior of simple traffic cellular automata.",
    ],
  },
  {
    id: 17,
    citation: "Gershenson, C., & Rosenblueth, D. A. (2009). Modeling self-organizing traffic lights with elementary cellular automata. arXiv.",
    link: "https://arxiv.org/abs/0907.1925",
    summary:
      "This paper investigates how elementary cellular automata can model self-organizing traffic lights. It examines traffic-signal behavior based on local conditions rather than relying entirely on centrally planned signal timings.",
    results: [
      "Shows how simple local rules can be used to represent adaptive traffic-light behavior.",
      "Explores self-organization as an alternative to fixed or centrally optimized signal control.",
      "Demonstrates the potential of elementary cellular automata for studying traffic-light coordination.",
    ],
  },
  {
    id: 18,
    citation: "Hauck, C., Sun, Y., & Timofeyev, I. (2012). On cellular automata models of traffic flow with look-ahead potential. arXiv.",
    link: "https://arxiv.org/abs/1209.5802",
    summary:
      "This paper studies cellular automaton traffic models that incorporate a look-ahead potential, allowing vehicle movement decisions to account for traffic conditions farther ahead. The authors investigate how this additional information changes vehicle behavior and the overall traffic flow.",
    results: [
      "Examines how look-ahead information affects vehicle movement in cellular automaton models.",
      "Investigates the influence of anticipatory driving behavior on traffic organization and congestion.",
      "Extends basic traffic models by considering more information than the immediate position of the vehicle ahead.",
    ],
  },
  {
    id: 19,
    citation: "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (1998). Disorder effects in cellular automata for two-lane traffic. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9810184",
    summary:
      "This paper investigates disorder effects in a two-lane cellular automaton model of highway traffic. It studies how differences in vehicle behavior and lane interactions influence traffic movement, congestion, and the performance of a two-lane road.",
    results: [
      "Shows that lane interactions can influence traffic flow differently from single-lane models.",
      "Investigates how disorder or variation in traffic conditions affects congestion.",
      "Contributes to understanding how cellular automata can represent more complex multi-lane traffic behavior.",
    ],
  },
  {
    id: 20,
    citation: "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2000). Towards a realistic microscopic description of highway traffic. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0012204",
    summary:
      "This paper develops a more realistic microscopic cellular automaton model for highway traffic. The authors introduce more detailed representations of vehicle behavior to reproduce traffic phenomena that simpler models may not capture.",
    results: [
      "Shows how additional driving rules can improve the representation of realistic highway traffic.",
      "Investigates traffic patterns that arise from interactions between individual vehicles.",
      "Provides a foundation for later cellular automaton models that aim to reproduce observed traffic behavior.",
    ],
  },
  {
    id: 21,
    citation: "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2001). Human behavior as origin of traffic phases. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0107051",
    summary:
      "This paper examines how human driving behavior contributes to the different phases of highway traffic. Using a microscopic traffic model, the authors investigate how drivers' responses to surrounding vehicles can produce free-flowing, synchronized, and congested traffic conditions.",
    results: [
      "Connects the appearance of different traffic phases to individual driving behavior.",
      "Shows that local interactions between drivers can produce large-scale changes in traffic conditions.",
      "Highlights the importance of representing human behavior in realistic microscopic traffic models.",
    ],
  },
  {
    id: 22,
    citation: "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2002). A realistic two-lane traffic model for highway traffic. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0203346",
    summary:
      "This paper extends a realistic microscopic cellular automaton model to two-lane highway traffic. The authors study how vehicles change lanes, interact with traffic in neighboring lanes, and respond to different traffic conditions.",
    results: [
      "Demonstrates how realistic lane-changing rules can be incorporated into cellular automaton traffic models.",
      "Investigates interactions and synchronization between two highway lanes.",
      "Extends microscopic traffic modeling beyond the limitations of single-lane road simulations.",
    ],
  },
  {
    id: 23,
    citation: "Knospe, W., Santen, L., Schadschneider, A., & Schreckenberg, M. (2004). An empirical test for cellular automaton models of traffic flow. Physical Review E, 70(1), Article 016115.",
    link: "https://arxiv.org/abs/cond-mat/0404710",
    summary:
      "This paper evaluates several cellular automaton traffic models using a microscopic test scenario based on empirical single-vehicle data. The authors compare the ability of different models to reproduce observed traffic behavior at both macroscopic and microscopic levels.",
    results: [
      "Shows that reproducing realistic-looking traffic patterns does not necessarily mean a model matches empirical measurements.",
      "Distinguishes models with qualitative agreement from those that reproduce macroscopic and microscopic traffic characteristics.",
      "Demonstrates the importance of empirical testing when evaluating the accuracy of traffic cellular automata.",
    ],
  },
  {
    id: 24,
    citation: "Larraga, M. E., & del Rio, J. A. (2001). Cellular automata for one-lane traffic flow modelling: Safety and automation. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0112082",
    summary:
      "This paper investigates one-lane traffic flow using cellular automaton models with an emphasis on vehicle safety and automation. It examines how movement rules can represent safer driving behavior and how automated vehicle control may influence traffic conditions.",
    results: [
      "Explores how safety-related driving rules can be incorporated into cellular automaton traffic models.",
      "Investigates the effects of automated vehicle behavior on one-lane traffic flow.",
      "Connects microscopic traffic modeling with questions of vehicle control and road safety.",
    ],
  },
  {
    id: 25,
    citation: "Li, J., & Yan, C. (2023). Traffic flow simulation for autonomous driving. arXiv.",
    link: "https://arxiv.org/abs/2307.16762",
    summary:
      "This paper examines traffic flow simulation in the context of autonomous driving. It considers how simulated traffic environments can be used to study vehicle interactions and traffic behavior relevant to autonomous vehicle systems.",
    results: [
      "Highlights the role of traffic simulation in studying autonomous driving scenarios.",
      "Connects vehicle-level interactions with broader traffic-flow behavior.",
      "Provides context for applying traffic simulation techniques to autonomous vehicle research.",
    ],
  },
  {
    id: 26,
    citation: "Maerivoet, S., & De Moor, B. (2005). Cellular automata models of road traffic. Physics Reports, 419(1), 1–64.",
    link: "https://arxiv.org/abs/physics/0509082",
    summary:
      "This review explains how cellular automata (CA) can model road traffic. It describes how small road cells and simple movement rules represent cars. The authors compare models for one lane, several lanes, and city roads. They also explain how to measure traffic speed, flow, and the gaps between cars.",
    results: [
      "Brings many CA traffic models together and compares the traffic patterns they produce.",
      "Explains how to turn model measurements into real road measurements.",
      "Reviews both computer simulations and mathematical methods for studying traffic.",
    ],
  },
  {
    id: 27,
    citation: "Marzolla, M. (2018). Parallel implementations of cellular automata for traffic models. arXiv.",
    link: "https://arxiv.org/abs/1804.07981",
    summary:
      "This paper studies ways to run CA traffic simulations faster. It uses the Biham-Middleton-Levine (BML) model, where cars move in two directions on a grid. The author compares a basic program with versions that use several CPU cores, process several values at once, or run on a graphics processor (GPU). Tests measure how much each method speeds up the simulation.",
    results: [
      "Shows how different computing methods can speed up the same traffic model.",
      "Finds that careful use of CPU features can reduce the speed gap between CPU and GPU versions.",
      "Measures the benefits of each method against a basic version that does one task at a time.",
    ],
  },
  {
    id: 28,
    citation: "Marzoug, R., Lakouari, N., Pérez-Cruz, J. R., & Hurtado-Beltran, A. (2026). Cellular automata for traffic accident analysis: A systematic review. Mathematics, 14(17), 3091.",
    link: "https://www.mdpi.com/2227-7390/14/17/3091",
    summary:
      "This paper reviews how CA models represent crashes between vehicles. The authors search four research databases and select 90 papers from 740 records. They group the studies by crash type, such as rear-end, head-on, and side-impact crashes. They compare the model rules and point out gaps in the research.",
    results: [
      "Provides a shared way to group and compare CA models of vehicle crashes.",
      "Covers crashes caused by following, crossing, passing, and merging.",
      "Finds that checks against real traffic data are still limited in the reviewed studies.",
    ],
  },
  {
    id: 29,
    citation: "Nagel, K., & Schreckenberg, M. (1992). A cellular automaton model for freeway traffic. Journal de Physique I, 2(12), 2221–2229.",
    link: "https://www.researchgate.net/publication/263504490_A_cellular_automaton_model_for_freeway_traffic",
    summary:
      "This paper introduces the Nagel-Schreckenberg (NaSch) model for freeway traffic. It divides a road into cells and gives each car a position and speed. At each time step, cars speed up, slow down to avoid the car ahead, sometimes brake at random, and then move. The authors use simulations to study how traffic changes as the road becomes more crowded.",
    results: [
      "Shows that simple movement rules can produce both smooth traffic and waves of stopping and starting.",
      "Finds that random changes in speed can create jams even without a road blockage.",
      "Provides a basic CA traffic model that many later papers extend.",
    ],
  },
  {
    id: 30,
    citation: "Nagel, K., Wolf, D. E., Wagner, P., & Simon, P. (1998). “Two-lane traffic rules for cellular automata: A systematic approach.”",
    link: "https://arxiv.org/abs/cond-mat/9712196",
    summary:
      "This paper studies how to design lane-changing rules for two-lane CA traffic models. The authors review earlier rules and propose a shared structure for building them. They test several versions to see whether they produce realistic lane use and traffic flow. The study focuses on how the rules are organized, as well as their details.",
    results: [
      "Provides a common structure for designing lane-changing rules.",
      "Shows that different detailed rules can produce similar realistic results when they share this structure.",
      "Reproduces lane-use patterns in which the passing lane can become more crowded than the other lane.",
    ],
  },
  {
    id: 31,
    citation: "Nishinari, K., Fukui, M., & Schadschneider, A. (2003). A stochastic cellular automaton model for traffic flow with multiple metastable states. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0311194",
    summary:
      "This paper proposes a CA traffic model with random behavior, delayed restarting, and drivers looking ahead. It extends the NaSch model and another CA model called the Burgers model. Simulations examine traffic flow, vehicle speeds, and how long different traffic patterns last. The model allows several traffic patterns that can last for a while but break down after a disturbance.",
    results: [
      "Produces several temporary stable traffic patterns near the change from smooth to crowded traffic.",
      "Shows that the same traffic density can have different flow values.",
      "Creates a broad spread of points in the graph of flow against density.",
    ],
  },
  {
    id: 32,
    citation: "Olmos, L. E., & Muñoz, J. D. (2015). Unravelling the puzzling intermediate states in the Biham–Middleton–Levine traffic model. arXiv.",
    link: "https://arxiv.org/abs/1502.04587",
    summary:
      "This paper studies the BML model, where cars move east or north on a grid in alternating turns. Earlier studies found a middle state where some cars move while others are stuck. The authors examine how grid shape and direction affect the change from moving traffic to jams. They use simulations and approximate calculations to explain this middle state.",
    results: [
      "Links the middle states to two different changes in traffic behavior, depending on the grid's shape relative to the flow direction.",
      "Estimates the range of traffic density where moving cars and jams can exist together.",
      "Shows that the size and shape of the simulated grid matter when interpreting the results.",
    ],
  },
  {
    id: 33,
    citation: "Pottmeier, A., Barlovic, R., Knospe, W., Schadschneider, A., & Schreckenberg, M. (2001). Localized defects in a cellular automaton model for traffic flow with phase separation. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0111535",
    summary:
      "This paper asks how a small problem area on a road changes traffic in a CA model. At that location, cars are more likely to slow down, which limits how many can pass. The original model has separate regions of moving cars and jammed cars. The authors vary the strength of the problem area and study the resulting traffic.",
    results: [
      "Finds three traffic states depending on how strongly the problem area limits flow.",
      "Produces traffic that repeatedly stops and starts, which is absent from the model without the problem area.",
      "Shows that a local slowdown can change traffic patterns across the road.",
    ],
  },
  {
    id: 34,
    citation: "Rickert, M., Nagel, K., Schreckenberg, M., & Latour, A. (1996). “Two lane traffic simulations using cellular automata.”",
    link: "https://arxiv.org/abs/cond-mat/9512119",
    summary:
      "This paper extends the NaSch model to a road with two lanes. Cars follow movement rules within each lane and can change lanes. The authors study how model settings change the link between the number of cars and traffic flow. They also examine the role of random behavior in representing real traffic.",
    results: [
      "Develops an early two-lane version of a CA traffic model.",
      "Identifies model settings that shape the graph of traffic flow against density.",
      "Examines why random behavior matters for realistic two-lane traffic.",
    ],
  },
  {
    id: 35,
    citation: "Sakai, S., Nishinari, K., & Iida, S. (2006). A new stochastic cellular automaton model on traffic flow and its jamming phase transition. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/0611455",
    summary:
      "This paper proposes a general CA traffic model with random behavior, delayed restarting, and drivers looking ahead. By changing its settings, the model can act like several earlier models, including NaSch, Quick-Start, and Slow-to-Start. The authors use simulations to study when moving traffic becomes jammed. They also calculate an approximate boundary between traffic states.",
    results: [
      "Combines several known traffic models within one set of rules.",
      "Finds temporary stable traffic states near the point where congestion begins, even with randomness.",
      "Calculates traffic-state boundaries that closely match the simulation results.",
    ],
  },
  {
    id: 36,
    citation: "Schadschneider, A. (1999). The Nagel–Schreckenberg model revisited. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9902170",
    summary:
      "This paper takes a closer look at the NaSch model for single-lane traffic. It compares mathematical estimates with computer simulations. The author studies how the chance of random braking changes the arrangement of cars. Exact results are available when cars can move at most one cell per step, while higher speeds require estimates or simulations.",
    results: [
      "Shows that the braking probability changes local traffic patterns.",
      "Compares several mathematical methods with simulation results.",
      "Explains why the higher-speed model is harder to solve exactly.",
    ],
  },
  {
    id: 37,
    citation: "Schadschneider, A. (2000). Statistical physics of traffic flow. Physica A: Statistical Mechanics and Its Applications, 285(1–2), 101–120.",
    link: "https://arxiv.org/abs/cond-mat/0007418",
    summary:
      "This review explains how ideas from physics help researchers study traffic. It focuses on CA models and how the actions of many cars produce large traffic patterns. Special attention is given to entrance and exit ramps. The paper reviews how these ramps can change the road from moving traffic to congestion.",
    results: [
      "Reviews CA traffic models with a focus on changes in traffic caused by ramps.",
      "Explains how interactions between cars create traffic patterns across a road.",
      "Describes the use of CA models for large traffic simulations that run faster than real time.",
    ],
  },
  {
    id: 38,
    citation: "Schadschneider, A., & Schreckenberg, M. (1993). Cellular automaton models and traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9306017",
    summary:
      "This paper uses mathematics to study an early CA traffic model. It calculates how traffic flow changes as more cars occupy the road. The method accounts for links between nearby road cells, rather than treating every cell as separate. The authors compare these calculations with computer results.",
    results: [
      "Gives the exact flow-density result when the maximum speed is one cell per step.",
      "Produces estimates that closely match simulations at higher maximum speeds.",
      "Shows that links between nearby cells matter for predicting traffic flow.",
    ],
  },
  {
    id: 39,
    citation: "Schadschneider, A., & Schreckenberg, M. (1995). Cellular automata for traffic flow: Analytical results. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9511037",
    summary:
      "This paper compares two mathematical ways to study CA traffic models. One follows the road cells, while the other follows cars and the gaps between them. The authors also study larger groups of nearby cells to improve their estimates. They compare the calculated traffic flow with simulation results.",
    results: [
      "Shows that the car-based method gives the exact flow-density curve when the maximum speed is one cell per step.",
      "Shows that the cell-based method needs information about neighboring cells to reach that result.",
      "Finds that larger cell groups give close agreement with simulations for higher speeds.",
    ],
  },
  {
    id: 40,
    citation: "Schadschneider, A., & Schreckenberg, M. (1996). Car-oriented mean-field theory for traffic flow models. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9612113",
    summary:
      "This paper develops a mathematical method based on the gaps between cars. Earlier methods mainly tracked whether each road cell was empty or occupied. Tracking gaps captures some relationships between cars that a simple cell-based estimate can miss. The authors test the method for maximum speeds of one and two cells per step.",
    results: [
      "Gives the exact traffic-flow result for a maximum speed of one cell per step.",
      "Gives a flow-density curve that agrees well with simulations for a maximum speed of two cells per step.",
      "Shows that gaps between cars are useful variables for predicting traffic flow.",
    ],
  },
  {
    id: 41,
    citation: "Schadschneider, A., & Schreckenberg, M. (1997). Traffic flow models with ‘slow-to-start’ rules. Annalen der Physik, 509(7), 541–551.",
    link: "https://arxiv.org/abs/cond-mat/9709131",
    summary:
      "This paper studies two CA traffic models in which stopped cars do not always restart right away. The authors compare two different slow-to-start rules. They calculate the link between traffic density and flow and check it against simulations. They also examine how these rules change jam formation.",
    results: [
      "Shows that different restart rules change the flow-density curve.",
      "Finds good agreement between mathematical estimates and simulations, although the estimates are no longer exact.",
      "Finds a change to a fully jammed state in one of the two models.",
    ],
  },
  {
    id: 42,
    citation: "Schadschneider, A., Chowdhury, D., Brockfeld, E., Klauck, K., Santen, L., & Zittartz, J. (1999). A new cellular automata model for city traffic. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9911312",
    summary:
      "This paper builds a city traffic model by combining ideas from the BML grid model and the NaSch highway model. It includes traffic lights that change together on a shared schedule. The authors study how the number of cars and the length of the light cycle affect movement. The model can change from moving traffic to complete gridlock.",
    results: [
      "Combines city-grid traffic and highway-style vehicle movement in one CA model.",
      "Finds a traffic density at which the city grid becomes fully jammed.",
      "Shows that this jamming point depends on the traffic-light cycle length.",
    ],
  },
  {
    id: 43,
    citation: "Schreckenberg, M., Schadschneider, A., Nagel, K., & Ito, N. (1994). Discrete stochastic models for traffic flow. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9412045",
    summary:
      "This paper studies a CA model with random behavior on a single-lane ring road. Cars move around the ring, and all cars are updated together at each time step. The authors calculate traffic flow at different densities using simulations and mathematical estimates. Their estimates include links between nearby cells.",
    results: [
      "Finds an exact flow-density result for a maximum speed of one cell per step.",
      "Obtains close agreement with simulations at higher speeds by improving the estimates.",
      "Provides a detailed mathematical study of a basic random CA traffic model.",
    ],
  },
  {
    id: 44,
    citation: "Simon, P., & Gutowitz, H. A. (1998). A cellular automaton model for bi-directionnal traffic. arXiv.",
    link: "https://arxiv.org/abs/cond-mat/9801024",
    summary:
      "This paper models a two-lane road with cars traveling in opposite directions. It extends NaSch by allowing passing and different vehicle speeds. A car that passes must consider traffic coming from the other direction. The authors compare the model with a one-lane version and with measured traffic data.",
    results: [
      "Shows how passing connects traffic in the two opposite directions.",
      "Produces flow-density results that closely match the measured data used in the study.",
      "Extends CA modeling to two-way roads with vehicles moving at different speeds.",
    ],
  },
  {
    id: 45,
    citation: "Tadaki, S.-i. (1996). Two-dimensional cellular automaton model of traffic flow with open boundaries. arXiv.",
    link: "https://arxiv.org/abs/adap-org/9606001",
    summary:
      "This paper studies traffic on a two-dimensional grid where cars can enter and leave at the edges. The author uses simulations to measure the number of cars leaving and their average speed. The study examines both light traffic and jammed traffic. A simple estimate is used to explain behavior when traffic is light.",
    results: [
      "Studies how traffic behaves when vehicles enter and leave the grid.",
      "Finds slow fluctuations, called flicker or 1/f noise, in outflow and average speed during jams.",
      "Uses a jam-free approximation to explain light-traffic behavior.",
    ],
  },
  {
    id: 46,
    citation: "Tian, J., Jia, B., Ma, S., Zhu, C., Jiang, R., & Ding, Y. (2015). Cellular automaton model with dynamical 2D speed-gap relation reproduces empirical and experimental features of traffic flow. arXiv.",
    link: "https://arxiv.org/abs/1503.05986",
    summary:
      "This paper improves a CA model that uses brake lights to represent drivers' responses. It gives cars a desired following time gap longer than one second. Random behavior allows speed and gap values to spread across an area on a graph, rather than follow one fixed curve. The authors compare the model with traffic observations and driving experiments.",
    results: [
      "Reproduces free-moving traffic, crowded moving traffic, jams, and changes between these states.",
      "Reproduces how disturbances grow in a line of cars following one another.",
      "Matches traffic-speed patterns from the NGSIM traffic dataset.",
    ],
  },
  {
    id: 47,
    citation: "Tian, J., Zhu, C., & Jiang, R. (2018). Cellular automata approach to synchronized traffic flow modelling. arXiv.",
    link: "https://arxiv.org/abs/1805.05555",
    summary:
      "This paper reviews CA models of synchronized traffic flow. This term describes crowded traffic in which cars still move and speeds across lanes tend to become similar. The authors compare how models reproduce this traffic state and the change into it from free-moving traffic. They also discuss directions for future research.",
    results: [
      "Brings together CA models that aim to reproduce synchronized traffic flow.",
      "Compares their ability to represent the change from free-moving to crowded moving traffic.",
      "Outlines questions for future model development.",
    ],
  },
  {
    id: 48,
    citation: "Tian, T., Liu, G., Hu, X., & Bian, D. (2024). Traffic behavior analysis of the urban expressway ramp based on continuous cellular automata. Physica A: Statistical Mechanics and Its Applications, 633, 129418.",
    link: "https://www.sciencedirect.com/science/article/pii/S0378437123009731",
    summary:
      "This paper models an urban expressway with entrance and exit ramps using continuous cellular automata. It adds rules for merging, leaving the road, following cars, and changing lanes. The model also considers the lengths of lanes where cars speed up or slow down near ramps. The authors test it using a scenario based on Chengdu's Second Ring Elevated Road.",
    results: [
      "Finds that congestion often begins near merging and exit areas and spreads outward.",
      "Shows that more cars entering the main road and ramps increase the effects of ramp disturbances.",
      "Finds that lane changes affect traffic speeds and differences in flow between lanes.",
    ],
  },
  {
    id: 49,
    citation: "Wang, Z., Chen, T., Wang, Y., & Li, H. (2024). “A cellular automaton model for mixed traffic flow considering the size of CAV platoon.”",
    link: "https://www.sciencedirect.com/science/article/pii/S0378437124003315",
    summary:
      "This paper models one lane shared by human-driven cars and connected and automated vehicles (CAVs). CAVs can form platoons, meaning groups that travel together with coordinated speeds and gaps. The model gives human drivers and CAVs different movement rules and decision times. Simulations test the effects of the share of CAVs and the maximum platoon size.",
    results: [
      "Finds that a larger share of CAVs can increase road capacity and average speed while reducing congestion in the simulations.",
      "Finds little effect from increasing the maximum platoon size when CAVs make up less than 70% of traffic.",
      "Finds greater platoon-size benefits when CAVs dominate, but the extra gains become smaller as platoons grow.",
    ],
  },
  {
    id: 50,
    citation: "Wolf, D. E. (1999). Cellular automata for traffic simulations. Physica A: Statistical Mechanics and Its Applications, 263(1–4), 438–451.",
    link: "https://www.sciencedirect.com/science/article/pii/S0378437198005366",
    summary:
      "This paper reviews CA traffic simulations, including jam formation, lane use, and groups of cars traveling together. It discusses moving traffic that can remain stable for a while before a disturbance triggers congestion. The author also introduces a model in which car interactions depend on relative motion. This provides a way to explain such temporary stable states.",
    results: [
      "Shows how CA models can reproduce several traffic patterns while running large simulations quickly.",
      "Reviews temporary stable traffic states near the start of congestion.",
      "Introduces a model whose car interactions stay the same when the same speed is added to all cars.",
    ],
  },
];

const placeholder = {
  summary: "Summary to be added.",
};

// Keep the shared bibliography order by matching annotations by paper link.
const annotationsByLink = new Map(
  annotatedPapers.map((paper) => [paper.link, paper]),
);

export default function AnnotatedBibliography() {
  return (
    <main className="annotated-page">
      <header className="annotated-header">
        <div>
          <p className="section-label">Literature</p>
          <h2>Annotated Bibliography</h2>
        </div>
        <p className="paper-count">{bibliography.length} papers</p>
      </header>

      <p className="annotated-description">
        Notes on cellular automata in traffic modeling.
      </p>

      <section className="annotation-list" aria-label="Annotated papers">
        {bibliography.map((paper, index) => {
          const id = index + 1;
          const notes = {
            ...placeholder,
            ...annotationsByLink.get(paper.link),
          };

          return (
            <article className="annotation" id={`paper-${id}`} key={id}>
              <span className="annotation-number">
                {String(id).padStart(2, "0")}
              </span>

              <div className="annotation-content">
                <div className="annotation-topline">
                  <p className="annotation-citation">{paper.APA}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-link"
                    aria-label={`View paper ${id}`}
                  >
                    View paper <span aria-hidden="true">&#8599;</span>
                  </a>
                </div>

                <div className="annotation-notes">
                  <div className="annotation-summary">
                    <h3>Summary</h3>
                    <p>{notes.summary}</p>
                  </div>

                  {notes.results?.length > 0 && (
                    <div>
                      <h3>Key Results</h3>
                      <ul>
                        {notes.results.map((result) => (
                          <li key={result}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
