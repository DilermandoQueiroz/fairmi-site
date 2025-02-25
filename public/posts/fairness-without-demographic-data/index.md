---
title: "Using Backbone Foundation Model for Evaluating Fairness in Chest Radiography Without Demographic Data"
slug: fairness-without-demographic-data
author: Dilermando Queiroz, André Anjos and Lilian Berton
date: 29 August 2024
image: https://i.pinimg.com/564x/31/59/ec/3159ecdef850f7b835efe7ecc9bb9ff4.jpg
paperLink: https://link.springer.com/chapter/10.1007/978-3-031-72787-0_11
---

Ensuring consistent performance across diverse populations and incorporating fairness into machine learning models are crucial for advancing medical image diagnostics and promoting equitable healthcare. However, many databases do not provide protected attributes or contain unbalanced representations of demographic groups, complicating the evaluation of model performance across different demographics and the application of bias mitigation techniques that rely on these attributes. This study aims to investigate the effectiveness of using the backbone of Foundation Models as an embedding extractor for creating groups that represent protected attributes, such as gender and age. We propose utilizing these groups in different stages of bias mitigation, including pre-processing, in-processing, and evaluation. Using databases in and out-of-distribution scenarios, it is possible to identify that the method can create groups that represent gender in both databases and reduce in 4.44% the difference between the gender attribute in-distribution and 6.16% in out-of-distribution. However, the model lacks robustness in handling age attributes, underscoring the need for more fundamentally fair and robust Foundation models. These findings suggest a role in promoting fairness assessment in scenarios where we lack knowledge of attributes, contributing to the development of more equitable medical diagnostics.
