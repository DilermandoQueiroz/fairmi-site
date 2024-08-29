---
title: "Using Backbone Foundation Model for Evaluating Fairness in Chest Radiography Without Demographic Data"
slug: fairness-without-demographic-data
author: Dilermando Queiroz Neto, André Anjos and Lilian Berton
date: 29 August 2024
image: https://i.pinimg.com/564x/b3/0f/25/b30f2526d965fad90653911b9b265843.jpg
paperLink: 
---

Ensuring consistent performance across diverse populations and incorporating fairness into machine learning models are crucial for advancing medical image diagnostics and promoting equitable health- care. However, many databases do not provide protected attributes or contain unbalanced representations of demographic groups, complicat- ing the evaluation of model performance across different demographics and the application of bias mitigation techniques that rely on these at- tributes. This study aims to investigate the effectiveness of using the backbone of Foundation Models as an embedding extractor for creat- ing groups that represent protected attributes, such as gender and age. We propose utilizing these groups in different stages of bias mitigation, including pre-processing, in-processing, and evaluation. Using databases in and out-of-distribution scenarios, it is possible to identify that the method can create groups that represent gender in both databases and re- duce in 4.44% the difference between the gender attribute in-distribution and 6.16% in out-of-distribution. However, the model lacks robustness in handling age attributes, underscoring the need for more fundamen- tally fair and robust Foundation models. These findings suggest a role in promoting fairness assessment in scenarios where we lack knowledge of attributes, contributing to the development of more equitable medical diagnostics.
