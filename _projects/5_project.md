---
layout: page
title: Creating Dataset for Generative AI of PCB Design & Simulation Software
description: Dataset creation for AI-driven PCB design automation
img: assets/img/1.jpg
importance: 3
category: Advised
---

## Overview

This project, conducted from January 2024 to May 2024, focused on creating a comprehensive dataset to enable generative AI applications in Printed Circuit Board (PCB) design and simulation. The goal was to develop a structured dataset that captures the complexity of PCB designs, enabling machine learning models to assist in automated PCB layout generation, design optimization, and simulation prediction.

## Problem Statement

PCB design is a complex engineering task requiring expertise in electrical engineering, signal integrity, and thermal management. While generative AI has shown promise in various domains, its application to PCB design has been limited by the lack of high-quality, structured datasets. The challenge was to:
- Collect and curate diverse PCB design data from various sources
- Standardize different design formats and representations
- Extract relevant features for machine learning applications
- Ensure dataset quality and coverage of different design patterns

## Methodology

The project involved several key components:
- **Data Collection**: Gathering PCB designs from open-source repositories, educational resources, and industry partners
- **Format Standardization**: Converting various PCB design formats (Gerber, KiCad, Eagle, Altium) into a unified representation
- **Feature Extraction**: Identifying and extracting relevant design features including component placement, routing patterns, layer stackups, and design rules
- **Annotation Pipeline**: Developing tools for labeling design quality, performance characteristics, and simulation outcomes
- **Dataset Validation**: Implementing quality checks and validation procedures to ensure dataset integrity

## Technologies

- **PCB Design Tools**: KiCad, Eagle CAD, Altium Designer APIs
- **Data Processing**: Python, pandas, NumPy
- **File Parsing**: Custom parsers for Gerber, KiCad, Eagle file formats
- **Machine Learning**: scikit-learn, PyTorch (for initial baseline models)
- **Database**: PostgreSQL, MongoDB for dataset storage
- **Visualization**: Matplotlib, Plotly for design visualization

## Outcomes

The project successfully created a diverse dataset of over 1,000 PCB designs with rich annotations, including:
- Component-level information (type, placement, connections)
- Routing patterns and trace characteristics
- Layer configuration and design rules
- Simulation results for power integrity and signal integrity
- Design quality metrics

This dataset serves as a foundation for developing generative AI models that can assist engineers in PCB design automation, design optimization, and rapid prototyping. The structured format enables various downstream tasks including design generation, completion, optimization, and quality prediction.
