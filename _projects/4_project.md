---
layout: page
title: Construction Site Monitoring with Computer Vision
description: ML-based construction project tracking system analyzing photos and drawings
img: assets/img/3.jpg
importance: 3
category: Non-Advised
---

## Overview

During my internship at Magikkraft (IIM Ahmedabad Incubatee) from July to August 2025, I worked on developing a comprehensive computer vision and machine learning-based construction project tracking system that analyzes site photos and engineering drawings to monitor project progress.

## Problem Statement

Construction project monitoring typically requires manual inspection and comparison of site progress against engineering drawings. This process is time-consuming, error-prone, and doesn't scale well for large projects. The challenge was to develop an automated system that could:
- Detect and count construction elements from site photos
- Compare real-world progress with 2D engineering drawings
- Provide accurate tracking for Oil & Gas plant construction projects
- Handle various object detection tasks with high accuracy

## Methodology

The project involved several key components:
- **Object Detection for Steel Pipes**: Developed a CV model for detecting steel pipes on Oil & Gas Plant Construction sites using EfficientDet and YOLO architectures
- **Drawing-to-Photo Comparison**: Prepared a Vision Model for comparing 2D engineering drawings with actual site photographs
- **Architecture Exploration**: Explored and evaluated different architectures for object detection and counting tasks
- **CAD File Interpretation**: Developed models for interpreting and extracting information from CAD files

## Technologies

- **Deep Learning Frameworks**: PyTorch, TensorFlow
- **Object Detection**: EfficientDet, YOLO (YOLOv5, YOLOv8)
- **Computer Vision**: OpenCV, PIL
- **CAD Processing**: Custom parsers for engineering drawing formats
- **Data Processing**: pandas, NumPy
- **Model Training**: Weights & Biases for experiment tracking

## Outcomes

The project successfully delivered:
- A robust steel pipe detection model with high accuracy for Oil & Gas construction sites
- An innovative vision system that bridges the gap between engineering drawings and physical construction progress
- Scalable object detection and counting capabilities for various construction elements
- Foundation for automated construction project tracking and progress monitoring

This work has practical applications in reducing manual inspection time, improving construction quality assurance, and enabling data-driven project management decisions.
