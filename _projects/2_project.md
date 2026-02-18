---
layout: page
title: Graph Coarsening with Preserved GNN Performance
description: Research at IIT Delhi on efficient graph reduction techniques
img: assets/img/3.jpg
importance: 2
category: Advised
giscus_comments: false
---

## Overview

Conducted from January 2023 to June 2023 at IIT Delhi, this research investigates graph coarsening techniques that maintain Graph Neural Network (GNN) performance while reducing computational overhead. Graph coarsening is essential for scaling GNN-based methods to large-scale graph datasets commonly found in social networks, molecular structures, and knowledge graphs.

## Problem Statement

Training GNNs on large graphs with millions of nodes and edges is computationally expensive and memory-intensive. Existing graph coarsening methods often compromise the predictive accuracy of downstream GNN models by losing critical topological information. The goal is to develop coarsening techniques that achieve significant size reduction without sacrificing GNN performance on node classification, graph classification, and link prediction tasks.

## Methodology

The research develops and evaluates several graph coarsening approaches:
- **Structure-Preserving Coarsening**: Algorithms that maintain important graph properties such as clustering coefficients and degree distributions
- **Spectral Approximation**: Methods that preserve the spectral characteristics of the graph Laplacian
- **GNN-Aware Coarsening**: Techniques that consider the specific architecture and learning dynamics of GNNs
- **Multi-Resolution Analysis**: Hierarchical coarsening strategies for different levels of granularity

## Technologies

- **Deep Learning**: PyTorch, PyTorch Geometric, DGL (Deep Graph Library)
- **Graph Processing**: NetworkX, graph-tool
- **Numerical Computing**: NumPy, SciPy
- **Experimentation**: Weights & Biases, TensorBoard

## Outcomes

The research produced efficient coarsening algorithms that reduce graph size by up to 90% while maintaining GNN accuracy within 2-3% of the original performance. These techniques enable the application of GNN methods to previously intractable large-scale graph problems, with applications in drug discovery, social network analysis, and recommendation systems.
