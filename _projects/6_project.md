---
layout: page
title: Physics-Informed ML for PCB Thermal and EM Simulation
description: Data generation pipeline for ML-based PCB simulation
img:
importance: 4
category: Non-Advised
---

## Overview

During my research internship at IIT Delhi from May to July 2025, I worked on developing comprehensive datasets for physics-informed machine learning models aimed at PCB (Printed Circuit Board) simulation. This work is part of a larger project to create an indigenous PCB design and simulation software with Generative AI capabilities.

## Problem Statement

Traditional PCB simulation using Finite Element Method (FEM) is computationally expensive and time-consuming. Machine learning approaches can potentially speed up simulations, but they require high-quality, diverse training datasets with accurate physics simulations. The challenge was to:
- Generate cross-validated benchmark datasets for thermal, elasticity, and electromagnetic simulations
- Ensure physical accuracy and numerical consistency across simulations
- Create datasets suitable for training physics-informed neural networks
- Validate results against established simulation tools

## Methodology

The project involved building a comprehensive data generation pipeline:
- **FEM Pipeline Development**: Implemented and optimized FEM simulation pipelines for multiple physics domains
- **Mesh Generation**: Developed robust mesh generation procedures for various PCB geometries and components
- **Multi-Physics Simulation**: Generated datasets covering thermal analysis, structural elasticity, and electromagnetic behavior
- **Validation Framework**: Cross-validated results using multiple simulation tools (MFEM, OpenEMS, Elmer)
- **Dataset Curation**: Organized and structured datasets for machine learning consumption

## Technologies

- **FEM Tools**: MFEM (Modular Finite Element Methods), OpenEMS (EM simulation), Elmer (multi-physics)
- **Mesh Generation**: Gmsh, custom meshing tools
- **Scientific Computing**: Python, NumPy, SciPy
- **Data Management**: pandas, HDF5 for large dataset storage
- **Validation**: Custom validation scripts comparing results across multiple solvers

## Outcomes

Successfully created:
- A comprehensive benchmark dataset covering thermal, mechanical, and electromagnetic simulations
- Validated FEM pipeline with cross-tool verification ensuring physical accuracy
- Structured dataset format suitable for training physics-informed machine learning models
- Documentation and tools for extending the dataset to new PCB designs and configurations

This dataset serves as a foundation for developing ML models that can accelerate PCB simulation while maintaining physical accuracy, potentially reducing simulation time from hours to seconds for common PCB design tasks.
