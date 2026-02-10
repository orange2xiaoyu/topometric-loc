# Brain-Inspired Visual Topometric Localization via Roadnetwork-Constraint Hidden Markov Model

### Authors
**Jinyu Li<sup>1</sup>**, **Taiping Zeng<sup>2,*</sup>**, **Bailu Si<sup>1</sup>**

<sup>1</sup>Beijing Normal University
<sup>2</sup>Fudan University

<sup>*</sup>Corresponding Author: [zengtaiping@fudan.edu.cn](mailto:zengtaiping@fudan.edu.cn)

### Paper
- **Journal**: IEEE Robotics and Automation Letters (RA-L)
- **Conference**: IEEE International Conference on Robotics and Automation (ICRA)
- **DOI**: [10.1109/LRA.2024.3428702](https://ieeexplore.ieee.org/abstract/document/11145338)
- **Publication**: [Read Full Paper](https://ieeexplore.ieee.org/abstract/document/11145338)

---

## Abstract

Accurate localization in GPS-denied environments remains a critical challenge for autonomous robot navigation. Animals exhibit remarkable navigational abilities in complex, dynamic environments by relying on mental cognitive maps. Inspired by neural representations such as head direction cells and grid cells, numerous robotic cognitive mapping systems can efficiently cover large areas; however, they often lack the precise metric information required for accurate localization.

To address this challenge, we propose a neurodynamically driven monocular visual topometric localization approach based on road network constraints. We introduce the Roadnetwork-Constraint Hidden Markov Model (RC-HMM) to enhance the semi-metric map by incorporating road network constraints, forming a coherent topometric map that maintains vertex relationships and improves localization accuracy.

Experimental results in the CARLA Town07 environment demonstrate the remarkable efficiency of our topometric cognitive map. Compared to the semi-metric map, our approach achieves a **95% reduction** in Absolute Pose Error (APE) and an **81% reduction** in Relative Pose Error (RPE). Compared to binocular ORB-SLAM3, our monocular approach reduces CPU usage by **96.7%** and map storage by **77.7%**, with an APE of **3.6 m** and RPE of **1.4 m** — closely matching ORB-SLAM3's 3.86 m APE and 0.96 m RPE. Furthermore, by leveraging neurodynamics of grid cells and head direction cells, our monocular topometric localization robustly delivers the localization accuracy of **3.86 meters**, comparable to binocular ORB-SLAM3. This approach integrates road network metrics into topological maps, enhancing brain-inspired navigation with topometric maps in complex environments.

---

## Key Contributions

### 1. Brain-inspired Monocular Visual Localization
We propose a brain-inspired monocular visual localization method for GPS-denied environments, using neural dynamics of grid and head-direction cells to build a coherent topometric cognitive map that integrates topological and metric information for precise robot localization.

### 2. Roadnetwork-Constraint Hidden Markov Model (RC-HMM)
We introduce RC-HMM that incorporates road network metric into a semi-metric topological map. By jointly optimizing global vertex projections and local distance constraints, our method constructs a consistent and metrically accurate topometric map that supports robust localization by neurodynamics.

### 3. Robust and Efficient Localization
We validate our topometric approach in CARLA Town07, reducing:
- **APE by 95%** and **RPE by 81%** compared to semi-metric maps
- **CPU usage by 96.7%** and **map storage by 77.7%** compared to binocular ORB-SLAM3
- Achieves **APE of 3.6 m** and **RPE of 1.4 m** (vs. 3.86 m and 0.96 m for ORB-SLAM3)
- Localization accuracy remains comparable (**3.86 m** vs. 4.63 m) with a **99% reduction** of initial localization time

---

## Methodology

### Limitations of Existing SLAM Paradigms

**Metric SLAM**: While providing high-fidelity geometric representations, metric approaches demand significant computational power and storage. The cumulative error and optimization complexity often hinder real-time performance and scalability in expansive, large-scale environments.

**Topological SLAM**: These methods offer a lightweight and resilient alternative by representing environments as abstract connectivity graphs. However, they typically provide only coarse-grained localization, lacking the fine-grained metric precision required for complex local maneuvering.

### Roadnetwork-Constraint Hidden Markov Model (RC-HMM)

We propose the Roadnetwork-Constraint Hidden Markov Model (RC-HMM) for constructing topometric maps. This method integrates semi-metric map and road network, effectively transforming a semi-metric cognitive map into a topometric cognitive map. The sequential visual inputs stimulate local view cells, which activate the neurodynamics of grid cells and head direction cells, thus facilitating precise localization.

**Framework**: Visual and vestibular cues are integrated to construct a semi-metric cognitive map. Local view cells encode visual features, while integration and calibration cells support the formation of head direction and grid cell models for orientation and spatial representation. RC-HMM incorporates road networks, refining the map with global and local constraints. The neurodynamics of grid and head direction cells enable visual localization within the topometric map.

---

## Results & Performance

### Topometric Cognitive Mapping Performance

#### Comparison of Semi-metric Map, Binocular ORB-SLAM3 Keyframes and Topometric Map

| Methods | CPU Usage (%) | Map Size (MB) | CameraFrame | KeyFrame | Vertex Nums | Edge Nums | APE (m) | RPE (m) |
|---------|---------------|---------------|-------------|----------|-------------|-----------|---------|---------|
| Semi-metric map (Mono) | 1.3 | 56.1 | - | - | 1417 | 1567 | 121.2 | 9.4 |
| ORB-SLAM3 (Binocular) | 40.57 | 259 | 14717 | 715 | - | - | 3.86 | **0.96** |
| Topometric map (Mono, **ours**) | **1.3** | **56.1** | - | - | 1417 | 1567 | **3.6** | 1.4 |

#### Performance Highlights
- **-95%** vs. Semi-metric Map (Absolute Pose Error)
- **-96.7%** vs. Binocular ORB-SLAM3 (CPU Usage)
- **-77.7%** vs. Binocular ORB-SLAM3 (Map Storage)

### Localization Performance

Our neurodynamics-based visual topometric localization demonstrates robust performance across multiple test sequences. The localization process integrates visual input with grid cells and head direction cells firing patterns, enabling accurate position estimation comparable to binocular ORB-SLAM3 while using only monocular vision.

#### Localization Performance Results across Benchmark Trials

| Method | Metric | Seq 1 | Seq 2 | Seq 3 | Seq 4 | Seq 5 | Seq 6 | Seq 7 | Seq 8 | Seq 9 | Seq 10 |
|--------|--------|-------|-------|-------|-------|-------|-------|-------|-------|-------|--------|
| ORB-SLAM3<br>(Binocular) | Trajectory Length (m) | 372.7 | 804.3 | 170.0 | 732.6 | 812.7 | 1485.3 | 559.0 | 294.2 | 1423.9 | 830.9 |
| | Initial Loc. Time (ms) | 794 | 1058 | 1077 | 978 | 1104 | 1171 | 1176 | 894 | 993 | 1064 |
| | Localization Error (m) | **2.82** | 4.77 | **3.69** | 4.03 | 4.85 | **5.22** | 6.29 | 4.86 | 5.29 | 4.50 |
| Topometric map<br>(Mono, **ours**) | Initial Loc. Time (ms) | **1.54** | **0.13** | **0.65** | **0.15** | **2.02** | **0.28** | **0.12** | **0.25** | **0.21** | **0.18** |
| | Localization Error (m) | 4.03 | **3.74** | 5.19 | **3.59** | **3.56** | 6.33 | **3.65** | 4.80 | **4.63** | **3.89** |

**Key Findings:**
- Initial localization time reduced by ~99% (from ~1000ms to <3ms on average)
- Comparable localization accuracy to binocular ORB-SLAM3 using only monocular vision
- Consistent performance across diverse trajectory lengths and environments

---

## Citation

If you use this work in your research, please cite:

```bibtex
@article{li2024brain,
  author={Li, Jinyu and Zeng, Taiping and Si, Bailu},
  journal={IEEE Robotics and Automation Letters}, 
  title={Brain-Inspired Visual Topometric Localization via Roadnetwork-Constraint Hidden Markov Model}, 
  year={2024},
  volume={9},
  number={9},
  pages={7669-7676},
  doi={10.1109/LRA.2024.3428702}
}
```

