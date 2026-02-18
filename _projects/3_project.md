---
layout: page
title: Continuous Dynamic Temporal Graph Coarsening
description: Ongoing research on dynamic graph compression techniques
img: assets/img/7.jpg
importance: 3
category: Advised
---

## Overview

This ongoing research project, started in October 2023, addresses the challenge of efficiently representing and analyzing continuously evolving temporal graphs. As real-world networks change over time—such as social networks, traffic networks, and biological interaction networks—traditional static graph methods become inadequate. This project develops novel coarsening techniques specifically designed for continuous-time dynamic graphs.

## Problem Statement

Temporal graphs that evolve continuously present unique computational challenges. Storing and processing the full temporal evolution of large graphs is often impractical due to memory and computational constraints. The key challenge is to develop coarsening methods that:
- Capture the temporal dynamics of the original graph
- Maintain critical temporal patterns and trends
- Enable efficient temporal graph mining and prediction tasks
- Preserve both structural and temporal properties of the network

## Methodology

The research focuses on developing adaptive coarsening techniques that:
- **Continuous-Time Modeling**: Design coarsening schemes that respect the continuous nature of temporal interactions
- **Event-Based Compression**: Aggregate temporal events while preserving important interaction patterns
- **Dynamic Node Merging**: Develop strategies for merging nodes based on temporal behavioral similarity
- **Temporal Structure Preservation**: Maintain key temporal motifs and recurring patterns
- **Incremental Coarsening**: Update coarsened representations efficiently as new temporal data arrives

## Technologies

- **Temporal Graph Libraries**: PyTorch Geometric Temporal, DyNet
- **Deep Learning**: PyTorch, TensorFlow
- **Graph Processing**: NetworkX, igraph
- **Time Series Analysis**: pandas, statsmodels
- **Experimentation**: Jupyter, Weights & Biases

## Current Status

The project is actively ongoing, with current focus on:
- Developing benchmarks for evaluating temporal graph coarsening quality
- Implementing and testing various coarsening algorithms on real-world temporal datasets
- Analyzing the impact of coarsening on temporal graph neural network performance
- Exploring applications in dynamic network analysis, anomaly detection, and forecasting
