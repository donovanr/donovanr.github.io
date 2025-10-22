---
layout: page
title: BPE Tokenizer for SELFIES
description: Efficient Rust-based tokenizer optimized for molecular representation
img: assets/img/tokenizer.png
importance: 5
category: current
---

Tokenization is a key preprocessing step for training LLMs, but off the shelf NLP tokenizers (tiktoken, sentencepiece) produce undesirable artifacts when tokenizing string-based molecular representation. I implement a parallel / highly efficient BPE tokenizer in Rust with Python bindings exposed via PyO3/Maturin optimized for the SELFIES molecular representation syntax that outperforms off the shelf methods while producing significantly cleaner / more compact tokenized molecular representations that are compatible as inputs with Hugging Face models.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tokenizer.png"
           title="BPE tokenizer for SELFIES" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
