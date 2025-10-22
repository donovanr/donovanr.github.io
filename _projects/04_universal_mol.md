---
layout: page
title: Molecular Embeddings
description: Universal language model for proteins, DNA, RNA, and small molecules
img: assets/img/universalmol.png
importance: 4
category: current
---

Protein, DNA, RNA, and small molecule language models have strong in-domain performance but lack generality: e.g., protein language models don't understand chemical modification / non-natural amino acids, but peptides with such properties are crucial therapeutic targets. Using self-supervision and hierarchical / stochastic tokenization schemes, we train a truly general language model on the entirety of biologically-relevant molecule space, for universally applicable embeddings and generative models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/universalmol.png"
           title="Universal molecular embeddings" class="img-fluid rounded z-depth-1" %}
    </div>
</div>