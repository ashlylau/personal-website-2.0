---
path: "/projects/privacy-ml"
image: ../images/projects/tpdp.png
title: "TPDP 2021 Submission"
desc: "Statistical Privacy Guarantees of Machine Learning Preprocessing Techniques"
additional: "MEng individual project which was accepted for the poster workshop at TPDP 2021"
---

**Abstract**:

Differential privacy provides strong privacy guarantees for machine learning applications, and it is increasingly being studied in research and in practical applications. Much recent work has been focused on developing differentially private models. However, there has been a gap in other stages of the machine learning pipeline, in particular during the data preprocessing phase. To successfully integrate differential privacy into practical machine learning settings, there is a need to study differential privacy guarantees of full machine learning pipelines.

Our contributions are twofold: we firstly adapt a privacy violation detection framework based on statistical methods to empirically measure privacy levels of machine learning pipelines, where previ- ous efforts have measured differential privacy of only machine learning models through adversarial methods. We then use our newly created framework to show that resampling techniques commonly used when dealing with imbalanced datasets cause the resultant model to leak more privacy. Our results highlight the crucial need for developing differentially private resampling techniques, and we use insights from our evaluation to explore promising directions in developing these algorithms.