---
layout: page
title: Multimodal Generative Models
description: Multimodal generative models of in vitro cellular perturbations
img: assets/img/multimodalLLM.png
importance: 2
category: current
---

Generating image-based phenotype responses to cellular perturbations in silico, and vice versa to integrate multiple screening modalities and provide in silico predictions to efficiently guide further wet-lab experiments. "Stable diffusion but for biology," if you like.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/multimodalLLM.png" title="Multimodal architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Overview

This project develops multimodal generative models that can:
- Generate cellular image phenotypes from perturbation descriptions
- Predict perturbation conditions from observed cellular images
- Bridge multiple experimental modalities (microscopy, genomics, proteomics)
- Enable efficient in silico screening to guide wet-lab experiments

## Motivation

Traditional drug discovery and biological research requires extensive wet-lab experimentation. By building generative models that can predict cellular responses across modalities, we can dramatically reduce the experimental search space and accelerate discovery.

## Approach

We leverage recent advances in multimodal learning and diffusion models to build a unified framework that:
1. Learns joint representations of cellular images and perturbation conditions
2. Generates high-quality synthetic cellular images conditioned on perturbations
3. Infers likely perturbation conditions from observed phenotypes
4. Integrates data across different imaging modalities and cell types

## Applications

- **Drug discovery**: Predict cellular responses to novel compounds
- **Target identification**: Identify molecular targets from phenotypic screens
- **Experimental design**: Optimize perturbation conditions in silico before testing
- **Data integration**: Combine insights from multiple screening platforms

## Technical Details

The model architecture combines vision transformers for image encoding with transformer-based language models for perturbation representation, connected through a diffusion-based generative framework that enables bidirectional translation between modalities.