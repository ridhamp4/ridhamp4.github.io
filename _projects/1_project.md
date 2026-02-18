---
layout: page
title: Hypergraph Coarsening with preserved HyperGNN Performance
description: Research on scalable hypergraph representation learning
img: assets/img/12.jpg
importance: 1
category: Advised
related_publications: false
---

## Overview

This research focuses on developing efficient hypergraph coarsening techniques that maintain the performance of Hypergraph Neural Networks (HyperGNNs) while significantly reducing computational complexity. Hypergraphs are powerful data structures that can represent higher-order relationships beyond pairwise connections, making them valuable for modeling complex real-world systems.

## Problem Statement

As hypergraphs grow in size, the computational cost of training HyperGNNs becomes prohibitive. Traditional coarsening methods often result in significant information loss, leading to degraded model performance. The challenge is to develop a coarsening methodology that reduces graph size while preserving the essential structural properties necessary for accurate HyperGNN predictions.

## Methodology

The research explores novel hypergraph coarsening algorithms that:
- Identify and preserve critical hyperedge structures during the coarsening process
- Maintain spectral properties of the original hypergraph
- Develop adaptive coarsening strategies based on hypergraph characteristics
- Implement multi-level coarsening schemes for large-scale hypergraphs

## Technologies

- **Deep Learning Frameworks**: PyTorch, PyTorch Geometric
- **Graph Libraries**: NetworkX, HyperNetX
- **Scientific Computing**: NumPy, SciPy
- **Visualization**: Matplotlib, Seaborn

## Outcomes

This research aims to enable efficient training and inference of HyperGNNs on large-scale hypergraphs, making hypergraph-based machine learning more accessible for real-world applications in domains such as bioinformatics, social network analysis, and recommendation systems.
