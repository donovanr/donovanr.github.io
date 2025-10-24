---
title: "BPE Tokenizer for SELFIES"
description: "Efficient Rust-based tokenizer optimized for molecular representation"
img: "/images/tokenizer.png"
importance: 5
category: "current"
---

# BPE Tokenizer for SELFIES

Tokenization is a key preprocessing step for training LLMs, but off the shelf NLP tokenizers (tiktoken, sentencepiece) produce undesirable artifacts when tokenizing string-based molecular representation. I implement a parallel / highly efficient BPE tokenizer in Rust with Python bindings exposed via PyO3/Maturin optimized for the SELFIES molecular representation syntax that outperforms off the shelf methods while producing significantly cleaner / more compact tokenized molecular representations that are compatible as inputs with Hugging Face models.

![BPE tokenizer for SELFIES](/images/tokenizer.png)

## Problem Statement

Standard NLP tokenizers are designed for natural language and create issues when applied to molecular representations:

- **Poor Vocabulary Efficiency**: Generic tokenizers create suboptimal token vocabularies for chemical syntax
- **Loss of Chemical Meaning**: Token boundaries often split chemically meaningful units
- **Performance Bottlenecks**: Python-based tokenizers become slow for large molecular datasets
- **Incompatible Token Sequences**: Artifacts in tokenization lead to invalid molecular structures

## Solution

A specialized BPE (Byte Pair Encoding) tokenizer implemented in Rust with:

1. **Chemical-Aware Tokenization**: Respects SELFIES syntax to preserve chemical semantics
2. **High Performance**: Parallel processing in Rust for 10-100x speedup over Python implementations
3. **Python Integration**: Seamless PyO3 bindings for easy use in ML pipelines
4. **Hugging Face Compatibility**: Drop-in replacement for standard tokenizers

## Technical Details

- **Implementation**: Pure Rust core with PyO3 bindings
- **Parallelization**: Multi-threaded tokenization using Rayon
- **Memory Efficiency**: Streaming tokenization for large datasets
- **Build System**: Maturin for easy Python package distribution
- **Testing**: Comprehensive test suite ensuring correctness and performance

## SELFIES Representation

SELFIES (Self-Referencing Embedded Strings) is a 100% robust molecular representation:

- Every SELFIES string corresponds to a valid molecule
- No syntax errors possible
- Ideal for generative models

Our tokenizer is specifically optimized for this representation.

## Performance

Compared to standard tokenizers:

- **10-100x faster** tokenization speed
- **30% more compact** vocabularies
- **Zero invalid** molecular structures after detokenization
- **Perfect compatibility** with Transformers library

## Applications

- **Molecular Language Models**: Pre-training and fine-tuning molecular LLMs
- **Drug Discovery**: High-throughput tokenization of compound libraries
- **Generative Chemistry**: Efficient tokenization for conditional generation
- **Chemical Property Prediction**: Preprocessing for molecular property models

## Open Source

The tokenizer is designed to be a foundational tool for the molecular ML community, with clean APIs and comprehensive documentation.
