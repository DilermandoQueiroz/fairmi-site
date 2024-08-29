---
title: "Does Data-Efficient Generalization Exacerbate Bias in Foundation Models?"
slug: data-efficient
author: Dilermando Queiroz, Anderson Carlos, Maíra Fatoretto, Luis Filipe Nakayama, André Anjos and Lilian Berton
date: 29 August 2024
image: https://i.pinimg.com/564x/71/71/12/717112c35b85f1c1b646356957a5ff41.jpg
paperLink: 
---

Foundation models have emerged as robust models with label efficiency in diverse domains. In medical imaging, these models contribute to the advancement of medical diagnoses due to the difficulty in obtaining labeled data. However, it is unclear whether using a large amount of unlabeled data, biased by the presence of sensitive attributes during pre-training, influences the fairness of the model. This research examines the bias in the Foundation model (RetFound) when it is applied to fine-tune the Brazilian Multilabel Ophthalmological Dataset (BRSET), which has a different population than the pre-training dataset. The model evaluation, in comparison with supervised learning, shows that the Foundation Model has the potential to reduce the gap between the maximum AUC and minimum AUC evaluations across gender and age groups. However, in a data-efficient generalization, the model increases the bias when the data amount decreases.
These findings suggest that when deploying a Foundation Model in real-life scenarios with limited data, the possibility of fairness issues should be considered.
