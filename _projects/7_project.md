---
layout: page
title: Graph Transformer for Molecular Dipole Prediction
description: Ongoing research on transformer architectures for molecular property prediction
img: assets/img/4.jpg
importance: 1
category: Advised
related_publications: true
---

## Overview

This ongoing research project, initiated in August 2024, explores the application of Graph Transformer architectures for predicting molecular dipole moments. Accurate prediction of molecular properties is crucial for drug discovery, materials science, and chemical engineering. This work aims to leverage the attention mechanism of transformers combined with graph-based molecular representations to achieve state-of-the-art performance in dipole moment prediction.

## Problem Statement

Predicting molecular properties from structure is a fundamental challenge in computational chemistry. Traditional methods like Density Functional Theory (DFT) are accurate but computationally expensive, making them impractical for high-throughput screening. Machine learning approaches offer a faster alternative, but existing Graph Neural Networks (GNNs) have limitations in capturing long-range molecular interactions and complex electronic distributions. The goal is to develop a Graph Transformer model that:
- Captures both local and long-range atomic interactions
- Learns meaningful molecular representations for property prediction
- Achieves accuracy comparable to expensive quantum mechanical methods
- Generalizes well to diverse molecular structures

## Methodology

The research investigates several key components:
- **Graph Transformer Architecture**: Designing transformer layers that operate on molecular graphs with atoms as nodes and bonds as edges
- **Attention Mechanisms**: Implementing multi-head attention to capture various types of atomic interactions (covalent, electrostatic, van der Waals)
- **Positional Encoding**: Developing graph-specific positional encodings that incorporate 3D geometric information
- **Feature Engineering**: Extracting and incorporating relevant atomic and molecular features (atomic number, hybridization, aromaticity, etc.)
- **Multi-Task Learning**: Simultaneously predicting multiple molecular properties to improve generalization

## Technologies

- **Deep Learning**: PyTorch, PyTorch Geometric
- **Molecular Libraries**: RDKit, OpenBabel, DeepChem
- **Graph Neural Networks**: Transformers, Graph Attention Networks (GAT)
- **Computational Chemistry**: ASE (Atomic Simulation Environment)
- **Data Processing**: pandas, NumPy, scikit-learn
- **Experimentation**: Weights & Biases, TensorBoard

## Current Status and Outcomes

The project is actively ongoing with promising preliminary results:
- Developed a Graph Transformer architecture specifically tailored for molecular property prediction
- Achieved competitive performance on standard molecular property prediction benchmarks
- Currently exploring ensemble methods and uncertainty quantification
- Investigating transfer learning from pre-trained molecular representations
- Preparing results for publication in computational chemistry and machine learning venues

The research aims to contribute to the development of more efficient and accurate computational tools for molecular design and discovery, with potential applications in drug development, catalyst design, and materials engineering.
