// CT-AI Sample Exam Set A v1.3 (Feb 9, 2026) — questions, réponses, justifications
// Source officielle ISTQB. 40 questions principales + 27 additionnelles = 67 total.
// Pour chaque question : id, set (main/additional), points, lo, kLevel, chapter, stem, options[], correct[], justifications[]

const CTAI_DATA = {
  metadata: {
    syllabusVersion: "1.0",
    examVersion: "1.3",
    examDate: "February 9, 2026",
    totalQuestionsMain: 40,
    totalQuestionsAdditional: 27,
    examDuration: 60,
    examQuestions: 40,
    passingScore: 65 // typique ISTQB 26/40
  },

  chapters: [
    { num: 1, title: "Introduction to AI", minutes: 105, color: "c-blue" },
    { num: 2, title: "Quality Characteristics for AI-Based Systems", minutes: 105, color: "c-purple" },
    { num: 3, title: "Machine Learning (ML) – Overview", minutes: 145, color: "c-teal" },
    { num: 4, title: "ML – Data", minutes: 230, color: "c-coral" },
    { num: 5, title: "ML Functional Performance Metrics", minutes: 120, color: "c-pink" },
    { num: 6, title: "ML – Neural Networks and Testing", minutes: 65, color: "c-amber" },
    { num: 7, title: "Testing AI-Based Systems Overview", minutes: 115, color: "c-blue" },
    { num: 8, title: "Testing AI-Specific Quality Characteristics", minutes: 150, color: "c-purple" },
    { num: 9, title: "Methods and Techniques for Testing AI-Based Systems", minutes: 245, color: "c-teal" },
    { num: 10, title: "Test Environments for AI-Based Systems", minutes: 30, color: "c-gray" },
    { num: 11, title: "Using AI for Testing", minutes: 195, color: "c-green" }
  ],

  // Keywords par chapitre (Testing Keywords + AI-Specific Keywords du syllabus)
  keywords: {
    1: {
      testing: [],
      ai: ["AI as a Service (AIaaS)", "AI development framework", "AI effect", "AI-based system", "artificial intelligence (AI)", "neural network", "deep learning (DL)", "deep neural network", "general AI", "GDPR (General Data Protection Regulation)", "machine learning (ML)", "narrow AI", "pre-trained model", "super AI", "technological singularity", "transfer learning"]
    },
    2: {
      testing: [],
      ai: ["Adaptability", "algorithmic bias", "autonomy", "bias", "evolution", "explainability", "explainable AI (XAI)", "flexibility", "inappropriate bias", "interpretability", "ML system", "machine learning", "reward hacking", "robustness", "sample bias", "self-learning system", "side effects", "transparency"]
    },
    3: {
      testing: [],
      ai: ["Association", "classification", "clustering", "data preparation", "ML algorithm", "ML framework", "ML functional performance criteria", "ML model", "ML training data", "ML workflow", "model evaluation", "model tuning", "outlier", "overfitting", "regression", "reinforcement learning", "supervised learning", "underfitting", "unsupervised learning"]
    },
    4: {
      testing: [],
      ai: ["Annotation", "augmentation", "classification model", "data labelling", "data preparation", "ML training data", "supervised learning", "test dataset", "validation dataset"]
    },
    5: {
      testing: [],
      ai: ["Accuracy", "area under curve (AUC)", "confusion matrix", "F1-score", "inter-cluster metrics", "intra-cluster metrics", "mean square error (MSE)", "ML benchmark suites", "ML functional performance metrics", "precision", "recall", "receiver operating characteristic (ROC) curve", "regression model", "R-squared", "silhouette coefficient"]
    },
    6: {
      testing: [],
      ai: ["Activation value", "deep neural network (DNN)", "ML training data", "multi-layer perceptron", "neural network", "neuron coverage", "perceptron", "sign change coverage", "sign-sign coverage", "supervised learning", "threshold coverage", "training data", "value change coverage"]
    },
    7: {
      testing: ["Input data testing", "ML model testing"],
      ai: ["AI component", "automation bias", "big data", "concept drift", "data pipeline", "ML functional performance metrics", "training data"]
    },
    8: {
      testing: ["Test oracle"],
      ai: ["Algorithmic bias", "autonomous system", "autonomy", "expert system", "explainability", "inappropriate bias", "interpretability", "LIME method", "ML training data", "non-deterministic system", "probabilistic system", "sample bias", "self-learning system", "transparency"]
    },
    9: {
      testing: ["A/B testing", "adversarial testing", "back-to-back testing", "error guessing", "experience-based testing", "exploratory testing", "metamorphic relation (MR)", "metamorphic testing (MT)", "pairwise testing", "pseudo-oracle", "test oracle problem", "tours"],
      ai: ["Adversarial attack", "adversarial example", "data poisoning", "ML system", "trained model"]
    },
    10: {
      testing: ["Virtual test environment"],
      ai: ["AI-specific processor", "autonomous system", "big data", "explainability", "multi-agent system", "self-learning system"]
    },
    11: {
      testing: ["Visual testing"],
      ai: ["Bayesian techniques", "classification", "clustering algorithm", "defect prediction", "graphical user interface (GUI)"]
    }
  },

  // Définitions courtes pour les flashcards (sélection des termes les plus testés)
  keywordDefinitions: {
    "AI effect": "Le changement dans la définition de l'IA à mesure que la technologie progresse — ce qui était considéré comme IA hier ne l'est plus aujourd'hui (ex: systèmes experts à base de règles).",
    "Narrow AI": "IA capable d'effectuer une seule tâche spécialisée (ex: reconnaissance d'image, jeu d'échecs, gestion de tests).",
    "General AI": "IA présentant un comportement intelligent comparable à un humain, capable d'exécuter une large gamme de tâches dans des environnements variés.",
    "Super AI": "IA dépassant les capacités humaines (état théorique post-singularité).",
    "Technological singularity": "Le point hypothétique où l'IA dépasse l'intelligence humaine.",
    "AIaaS (AI as a Service)": "L'IA fournie comme service via le cloud, généralement par des composants génériques accessibles aux clients d'un fournisseur cloud.",
    "Pre-trained model": "Modèle déjà entraîné sur un grand jeu de données générique, souvent réutilisé via transfer learning. Risque clé : différence entre données d'entraînement et données opérationnelles.",
    "Transfer learning": "Réutilisation d'un modèle pré-entraîné, réajusté sur un nouveau domaine ou tâche.",
    "GDPR": "Règlement européen sur la protection des données personnelles. Pertinent pour tout système IA traitant des données personnelles (ex: décision de prêt bancaire).",
    "Adaptability": "Capacité d'un système à être modifié (par un opérateur) pour continuer à répondre aux exigences fonctionnelles/non-fonctionnelles.",
    "Flexibility": "Capacité d'un système à modifier son comportement et à être utilisé en dehors des exigences initiales (importante pour les self-learning systems face à des changements imprévus).",
    "Autonomy": "Capacité d'un système à fonctionner pendant des périodes prolongées sans intervention humaine.",
    "Evolution": "Comment un système IA change après son déploiement dans son environnement opérationnel (concept drift, self-learning).",
    "Bias": "Biais dans les sorties d'un système IA, dû aux données ou à l'algorithme.",
    "Algorithmic bias": "Biais introduit par l'algorithme lui-même (ex: choix d'optimisation).",
    "Sample bias": "Biais causé par des données d'entraînement non représentatives de la population cible (ex: système de crédit entraîné uniquement sur les détenteurs de carte de crédit).",
    "Inappropriate bias": "Biais éthiquement ou socialement inacceptable.",
    "Reward hacking": "Le système IA atteint un objectif au détriment d'autres (ex: système anesthésique qui sur-dose pour 'stabiliser' les patients, qui ne se réveillent plus correctement).",
    "Side effects": "Effets indésirables d'un changement du système IA, en particulier pour les self-learning systems.",
    "Transparency": "À quel point on peut comprendre comment le système est conçu/implémenté. Testable sans exécuter le système (comparaison documentation vs implémentation).",
    "Interpretability": "À quel point un humain peut comprendre la cause d'une décision (ex: comprendre les règles d'un système expert).",
    "Explainability": "Capacité du système à expliquer pourquoi il a pris une décision donnée (LIME method, etc.).",
    "Robustness": "Capacité du système à résister aux entrées inattendues, attaques, perturbations.",
    "Self-learning system": "Système qui se modifie lui-même pendant son fonctionnement opérationnel. Défi : tests qui passaient peuvent échouer après auto-modification.",
    "Probabilistic system": "Système dont la sortie pour des entrées identiques peut varier (donne un résultat probable plutôt que certain).",
    "Non-deterministic system": "Système qui peut produire des sorties différentes pour les mêmes entrées et le même état initial — nécessite plusieurs exécutions pour une validation statistique.",
    "Supervised learning": "Apprentissage à partir de données étiquetées (couples entrée-sortie). Inclut classification (catégories) et regression (valeurs numériques).",
    "Unsupervised learning": "Apprentissage à partir de données non étiquetées — identifie des patterns. Inclut clustering et association.",
    "Reinforcement learning": "Le système apprend par essai-erreur via une fonction de récompense (reward function).",
    "Classification": "Sortie = catégorie discrète parmi plusieurs classes prédéfinies.",
    "Regression": "Sortie = valeur numérique continue (ex: prédire un prix, une quantité d'énergie).",
    "Clustering": "Groupement de données non étiquetées par similarité.",
    "Association": "Identification de relations entre variables (ex: 'les clients qui achètent X achètent souvent Y').",
    "Overfitting": "Le modèle apprend trop bien les données d'entraînement (y compris le bruit) et performe mal sur de nouvelles données. Détecté quand la performance sur validation/test est bien inférieure à celle sur training.",
    "Underfitting": "Le modèle est trop simple pour capturer les patterns — performance médiocre même sur les données d'entraînement.",
    "ML workflow": "Cycle : 1. Comprendre les objectifs → 2. Sélectionner une forme de ML → 3. Collecter & préparer les données → 4. Sélectionner l'algorithme → 5. Build & compile → 6. Train → 7. Evaluate (validation) → 8. Tune → 9. Test → 10. Deploy → 11. Use → 12. Monitor & tune.",
    "Training data": "Données utilisées pour entraîner le modèle.",
    "Validation data": "Données utilisées pendant l'entraînement pour évaluer et tuner le modèle. Ne doit jamais être utilisée pour le test final.",
    "Test data": "Données indépendantes utilisées pour le test final du modèle. Ne doit JAMAIS être exposée au modèle pendant l'entraînement.",
    "Data preparation": "Activité représentant jusqu'à 36% de l'effort du workflow ML — nettoyage, transformation, étiquetage, sélection de features.",
    "Data labelling": "Étiquetage des données. Méthodes : interne, outsourcing, crowdsourcing, AI-based labeling, augmentation.",
    "Augmentation": "Création de données d'entraînement supplémentaires en transformant les données existantes (ex: rotation d'images).",
    "Annotation": "Synonyme courant de data labelling.",
    "Confusion matrix": "Tableau 2x2 (pour binaire) : TP, FP, FN, TN. Base du calcul d'accuracy/precision/recall/F1.",
    "Accuracy": "(TP+TN)/(TP+TN+FP+FN). Peu utile sur des classes déséquilibrées.",
    "Precision": "TP/(TP+FP). À privilégier quand le coût d'un faux positif est élevé (ex: nourrir un chien qui n'a pas faim et le rendre malade).",
    "Recall": "TP/(TP+FN). À privilégier quand le coût d'un faux négatif est élevé (ex: rater un cancer).",
    "F1-score": "Moyenne harmonique de precision et recall — utile quand classes déséquilibrées et que precision et recall sont également importants.",
    "ROC curve": "Receiver Operating Characteristic — courbe sensitivity vs 1-specificity à différents seuils.",
    "AUC": "Area Under Curve (souvent ROC). Mesure de la qualité globale d'un classifieur.",
    "MSE": "Mean Square Error — métrique de regression.",
    "R-squared": "Coefficient de détermination — métrique de regression. Utilisé pour des problèmes comme la prédiction de la consommation électrique.",
    "Silhouette coefficient": "Métrique pour évaluer la qualité d'un clustering.",
    "ML benchmark suites": "Suites pour comparer objectivement les frameworks/modèles ML — fournissent notamment les temps d'entraînement (training time).",
    "Perceptron": "Réseau de neurones à une seule couche (un seul neurone). Premier exemple historique de neural network.",
    "Multi-layer perceptron": "Neural network à plusieurs couches.",
    "Deep neural network (DNN)": "Réseau de neurones avec plusieurs couches cachées. Composé de neurones connectés où chaque neurone a un biais et chaque connexion un poids.",
    "Activation value": "Valeur de sortie d'un neurone, calculée à partir des neurones de la couche précédente.",
    "Neuron coverage": "Couverture des neurones activés (valeur > 0) au moins une fois pendant les tests.",
    "Threshold coverage": "Proportion de neurones activés avec une valeur > seuil prédéfini.",
    "Sign change coverage": "Couverture des neurones ayant produit à la fois des valeurs positives ET négatives (pas zéro).",
    "Value change coverage": "Couverture des neurones dont la valeur d'activation change de plus d'un montant prédéfini.",
    "Sign-sign coverage": "Couverture où le changement de signe d'un neurone affecte le signe d'un neurone de la couche suivante.",
    "AI component": "Partie IA d'un système plus large (souvent encapsulée).",
    "Concept drift": "Changement dans les relations statistiques sous-jacentes aux données après le déploiement, dégradant la performance du modèle (ex: e-commerce avec changement de comportement clients).",
    "Automation bias": "Biais humain consistant à trop faire confiance aux recommandations d'un système automatisé (ex: typo-correct accepté sans vérifier; conducteur trop confiant en l'autopilote).",
    "Data pipeline": "Chaîne de transformation des données depuis la source brute jusqu'à un format utilisable par le modèle.",
    "Big data": "Données caractérisées par volume, velocity, variety. Sourcer du big data à haute vélocité est un défi.",
    "Test oracle": "Mécanisme déterminant si un test passe ou échoue (résultat attendu).",
    "Test oracle problem": "Difficulté à déterminer le résultat attendu pour un système IA — ex: ground truth inconnue pour un système de prédiction.",
    "Pseudo-oracle": "Système alternatif (ex: système non-IA équivalent, version open source) servant de référence en l'absence d'oracle exact. Base du back-to-back testing.",
    "Pairwise testing": "Test combinatoire couvrant toutes les paires de valeurs de paramètres — bon compromis pour tester des combinaisons (>50 conditions environnementales × 7 fonctions).",
    "A/B testing": "Compare deux variantes (A vs B) du SUT pour décider laquelle est meilleure. Nécessite des critères d'acceptation clairs.",
    "Back-to-back testing": "Aussi appelé differential testing. Compare le SUT à un pseudo-oracle (système avec mêmes fonctions). Utile quand pas d'oracle clair.",
    "Metamorphic testing (MT)": "Test basé sur des relations métamorphiques entre cas source et cas suivants (follow-up) — pas besoin de connaître la sortie exacte, juste la relation entre sorties.",
    "Metamorphic relation (MR)": "Relation entre input/output d'un test source et input/output d'un test suivant. Ex: ajouter une contrainte plus stricte → résultats follow-up ⊆ résultats source.",
    "Adversarial testing": "Test cherchant à provoquer des défaillances via des entrées malicieuses ou perturbées. Permet de protéger contre adversarial attacks.",
    "Adversarial attack": "Perturbation subtile d'entrées valides faite par un attaquant pour faire prédire incorrectement le modèle.",
    "Data poisoning": "Attaque consistant à corrompre les données d'entraînement.",
    "Exploratory testing": "Test simultané design + exécution. En IA : Exploratory Data Analysis (visualisation des données d'entraînement).",
    "Tours": "Forme d'exploratory testing structurée (ex: feature tour, money tour).",
    "Error guessing": "Technique experience-based reposant sur l'intuition du testeur pour deviner les erreurs probables.",
    "Virtual test environment": "Environnement simulé permettant de tester scénarios rares, dangereux ou coûteux (ex: voiture autonome, marché financier, smart city). Limite : ne convient pas quand l'évaluation visuelle/physique réelle est nécessaire (ex: dégât sur fruits récoltés).",
    "AI-specific processor": "Processeur dédié IA (ex: TPU, NPU).",
    "Multi-agent system": "Système composé de plusieurs agents IA interagissant.",
    "Visual testing": "Test basé sur la comparaison d'images via IA (pas pixel-par-pixel). Détecte les overlapping UI elements et fonctionne malgré les changements de layout.",
    "Defect prediction": "Prédire où les défauts vont apparaître en analysant des corrélations entre mesures code/process/personnes et défauts (sur un même code base ou similaire). N'est PAS du scanning de code à base de règles (= analyse statique).",
    "Bayesian techniques": "Techniques probabilistiques utilisées notamment pour estimer des probabilités (probabilistic software engineering).",
    "Clustering algorithm": "Algorithme groupant des données similaires (ex: regrouper des défauts similaires).",
    "GUI": "Graphical User Interface — peut être testée via image recognition (visual testing).",
    "LIME method": "Local Interpretable Model-agnostic Explanations — méthode d'explicabilité produisant des explications locales pour des prédictions individuelles.",
    "Expert system": "Système IA classique à base de règles encodant la connaissance d'experts."
  }
};

// Questions du sample exam — chaque entrée compatible avec les modes practice/exam
CTAI_DATA.questions = [
  // ====== MAIN SET (40 questions) ======
  {
    id: 1, set: "main", points: 1, lo: "AI-1.1.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following statements provides the BEST example of the 'AI Effect'?",
    options: [
      "People lose their jobs as AI-based systems perform their roles cheaper and better",
      "Competitive computer games lose popularity as AI-based systems always win",
      "Rule-based expert systems for medical diagnosis are no longer considered to be AI",
      "People believe AI will take over the world, as shown in films"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Des emplois peuvent être remplacés par l'IA, mais c'est du progrès, pas l'AI Effect.",
      "Incorrect. Les jeux où l'IA bat l'humain ne perdent pas particulièrement en popularité.",
      "Correct. L'AI Effect = la définition de l'IA évolue avec le temps. Les systèmes experts à base de règles étaient considérés comme IA dans les années 70/80, mais ne le sont souvent plus aujourd'hui.",
      "Incorrect. La crédulité des spectateurs n'est pas l'AI Effect."
    ]
  },
  {
    id: 2, set: "main", points: 1, lo: "AI-1.4.1", kLevel: "K1", chapter: 1, multi: false,
    stem: "Which of the following options is NOT a technology used to implement AI?",
    options: [
      "Support vector machine",
      "Decision tree",
      "Evolutionary reasoning",
      "Bayesian optimization"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. SVM est une forme de ML.",
      "Incorrect. Decision tree est une forme de ML.",
      "Correct. 'Evolutionary reasoning' n'existe pas comme techno IA. (Évolutionary algorithms existent, mais 'reasoning' non.)",
      "Incorrect. Bayesian optimization est une forme de ML."
    ]
  },
  {
    id: 3, set: "main", points: 1, lo: "AI-1.6.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following statements about the hardware used to implement AI-based systems is MOST likely to be CORRECT?",
    options: [
      "The processors used to train a mobile recommendation system must be the same as the processors on the mobile phone",
      "Graphical processing units (GPUs) are a reasonable choice to implement an AI-based computer vision system",
      "Deep learning systems need to be trained, evaluated, and tested using AI-specific chips",
      "It is always best to choose processors with more bits to achieve sufficient accuracy for AI-based systems"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Entraînement et inférence sont deux activités différentes — pas besoin du même processeur.",
      "Correct. Les GPU sont conçus pour le traitement parallèle d'images sur des milliers de cœurs, ce qui correspond bien à un système de vision par ordinateur (souvent neural network).",
      "Incorrect. Possible d'entraîner un système deep learning simple sur un PC avec GPU limité — pas besoin de chips spécifiques IA (juste plus rapide).",
      "Incorrect. Beaucoup de systèmes IA sont probabilistes, donc une grande précision arithmétique n'est pas toujours nécessaire."
    ]
  },
  {
    id: 4, set: "main", points: 1, lo: "AI-1.8.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "There are a number of good quality pre-trained models available in the market and you want to use one of them for an image-based classifier. You have decided to ask the provider of the model about the data used for training the model and its format. Which of the following statements is the BEST example of a risk that you are trying to mitigate by asking these questions?",
    options: [
      "Bad classification accuracy of the pre-trained models",
      "Differences in the data used to train the model and the operational data",
      "Performance efficiency issues of the pre-trained model",
      "Lack of explainability of the pre-trained model compared to that of a model trained by you"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. La question mentionne la 'good quality' du modèle — ce risque est négligé.",
      "Correct. Les données d'entraînement doivent ressembler aux données opérationnelles. C'est le risque clé des pre-trained models.",
      "Incorrect. La performance n'est pas l'enjeu ici.",
      "Incorrect. L'explainability n'est pas l'enjeu, et n'est pas obtenue en regardant les données."
    ]
  },
  {
    id: 5, set: "main", points: 1, lo: "AI-2.2.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following statements is MOST likely to be specifying a requirement for autonomy in an AI-based system?",
    options: [
      "The system shall maintain a safe distance to other vehicles until the brake or accelerator is pushed by the driver",
      "The system shall learn the preferred style of response to emails by remotely monitoring the email traffic",
      "The system shall compare its predictions of house prices with actual selling prices to determine if it needs to be retrained",
      "It shall be possible to modify the system's behavior to work with different types of users in less than a day"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Cette exigence définit les interventions humaines qui marquent la fin de l'autonomie du système.",
      "Incorrect. Spécifie comment le système fait du self-learning.",
      "Incorrect. Spécifie la gestion du concept drift.",
      "Incorrect. Spécifie une exigence d'adaptabilité (temps maxi pour modification)."
    ]
  },
  {
    id: 6, set: "main", points: 1, lo: "AI-2.4.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following statements about bias in AI-based systems is NOT correct?",
    options: [
      "Bias may be caused by users of a book recommendation system making choices that deliberately cause the system to make poor suggestions",
      "Bias may be caused in the employee age of death prediction system by collecting the training data from a dataset of patients who are all retired",
      "Bias may be caused in the creditworthiness system by using training data obtained from those who own and use a credit card",
      "Bias may be caused in the navigation system by using a route planning algorithm that is too complex to be explained to typical users"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect (cad : c'est vrai). Le biais peut être causé par data poisoning d'un système self-learning.",
      "Incorrect (cad : c'est vrai). Sample bias : les retraités ≠ les employés.",
      "Incorrect (cad : c'est vrai). Sample bias typique : les détenteurs de carte sont déjà jugés solvables.",
      "Correct (cad : la phrase est fausse). Si l'algorithme n'est pas explicable, ça pose un problème d'explainability, pas de biais. Manquer d'explainability ne signifie pas être biaisé."
    ]
  },
  {
    id: 7, set: "main", points: 1, lo: "AI-2.6.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following is MOST likely to be an example of reward hacking?",
    options: [
      "The programmer's assistant tool optimizes the code to provide reduced response times, while still ensuring that functional requirements are met",
      "An anesthetic supply device with a goal of keeping patients stable during surgery supplies too many doses and patients do not wake up as quickly as expected",
      "The third-party development organization paid their AI programmers based on the number of lines of code they write",
      "A type of AI used to play competitive computer games against humans that is focused on getting the highest score"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. L'outil atteint ses 2 objectifs sans effets secondaires.",
      "Correct. Le système atteint un objectif (stabiliser les patients) au détriment d'un autre objectif implicite (le réveil) — typique du reward hacking.",
      "Incorrect. Le reward hacking n'est pas un mode de paiement des développeurs.",
      "Incorrect. Maximiser un score est l'objectif voulu — pas du hacking."
    ]
  },
  {
    id: 8, set: "main", points: 1, lo: "AI-2.8.1", kLevel: "K1", chapter: 2, multi: false,
    stem: "Given the following attributes for an AI-based system: I. Probabilistic, II. Explicable, III. Unfair, IV. Non-deterministic, V. Deterministic. Which list of attributes below is likely to cause the MOST difficulties if the system is to be used as part of a safety-related system?",
    options: [
      "I, IV",
      "II, IV",
      "II, III, V",
      "I, III, V"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Probabilistic + Non-deterministic = très problématique pour la sécurité, car cela cause de la non-déterminisme.",
      "Incorrect. Explicable est normalement souhaité pour la sécurité.",
      "Incorrect. Deterministic et Explicable sont souhaités pour la sécurité.",
      "Incorrect. Deterministic est souhaité pour la sécurité."
    ]
  },
  {
    id: 9, set: "main", points: 1, lo: "AI-3.1.1", kLevel: "K2", chapter: 3, multi: false,
    stem: "Which of the following statements BEST describes classification and regression as part of supervised learning?",
    options: [
      "Regression is checking that the ML model test results do not change when the same test data is executed",
      "Classification is the assignment of unlabeled data into predefined classes",
      "Classification is the labelling of the data before training the ML model",
      "Regression is predicting the number of classes that are output by the ML model"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. La regression dans le supervised learning produit une sortie numérique (pas un test de non-régression !).",
      "Correct. La classification = assignation de données d'entrée à l'une de plusieurs classes prédéfinies.",
      "Incorrect. Étiqueter les données ≠ classification, c'est du labelling.",
      "Incorrect. La regression = sortie numérique, pas un nombre de classes."
    ]
  },
  {
    id: 10, set: "main", points: 1, lo: "AI-3.1.3", kLevel: "K2", chapter: 3, multi: false,
    stem: "Which of the following options BEST describes an example of reinforcement learning?",
    options: [
      "The mobile game app updates its feedback, response timing and the number of user options it provides based on how much the players spend",
      "The language translation app searches the internet to find text provided in multiple languages to improve its translation function",
      "The factory quality control system uses video cameras and audio analysis to identify manufactured items that are faulty based on monitoring a human quality control operative",
      "The software component test prediction system uses a range of quality measures to identify which components are likely to contain the most defects"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Le montant dépensé est la fonction de récompense — le système modifie son comportement pour l'augmenter.",
      "Incorrect. C'est du supervised learning (texte source + traduction 'correcte').",
      "Incorrect. C'est du supervised learning (le 'gold standard' = l'opérateur humain).",
      "Incorrect. C'est probablement du supervised learning basé sur l'historique."
    ]
  },
  {
    id: 11, set: "main", points: 2, lo: "AI-3.3.1", kLevel: "K3", chapter: 3, multi: false,
    stem: "You have been asked for your opinion on the ML approach to be used for a new system that is part of the traffic management for a SMART city. The idea is that the new system will control the traffic lights in the city to ensure traffic flows easily through and around the city. Which of the following approaches do you expect MOST likely to succeed?",
    options: [
      "Unsupervised learning that is based on identifying clusters around the city where the traffic density is higher than average",
      "A supervised learning regression solution based on thousands of journeys labelled with both journey length and duration",
      "Reinforcement learning that is based on a reward function that penalizes solutions that result in higher levels of traffic congestion",
      "A supervised learning classification solution that is based on drivers and passengers submitting their favorite routes for traversing the city"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Identifier les zones congestionnées via clustering ne donne pas la solution.",
      "Incorrect. Prédire la durée des trajets ne fournit pas une solution globale anti-congestion.",
      "Correct. Reinforcement learning avec fonction de récompense pénalisant la congestion = adapté à un système de contrôle dynamique.",
      "Incorrect. Dépend des opinions subjectives des volontaires — solution instable."
    ]
  },
  {
    id: 12, set: "main", points: 1, lo: "AI-3.5.1", kLevel: "K2", chapter: 3, multi: false,
    stem: "When performing testing of a trained model, an ML engineer found that the model was highly accurate when evaluated with validation data but that it performed poorly with independent test data. Which of the following options is MOST likely to cause this situation?",
    options: ["Underfitting", "Concept drift", "Overfitting", "Poor acceptance criteria"],
    correct: ["c"],
    justifications: [
      "Incorrect. Underfitting → mauvaise performance même sur validation.",
      "Incorrect. Concept drift se produit après la phase d'entraînement, en production.",
      "Correct. Bonne perf en validation + mauvaise sur test indépendant = signature classique de l'overfitting.",
      "Incorrect. De mauvais critères d'acceptation seraient cohérents entre validation et test."
    ]
  },
  {
    id: 13, set: "main", points: 1, lo: "AI-4.1.1", kLevel: "K2", chapter: 4, multi: false,
    stem: "Which of the following is an example of a challenge that is likely to be encountered in the course of developing and testing an ML solution?",
    options: [
      "Data anonymization operations typically require knowledge of various ML algorithms",
      "The data used might be unstructured data",
      "A large percentage of the budget gets spent just in data preparation",
      "The data pipeline scalability is a challenge when training the model"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. L'anonymisation ne requiert pas la connaissance des algorithmes ML.",
      "Incorrect. Les données non structurées (image, audio, texte) ne sont pas un défi en soi.",
      "Correct. Jusqu'à 36% de l'effort du workflow ML est consacré à la préparation des données.",
      "Incorrect. La scalabilité concerne le déploiement, pas l'entraînement."
    ]
  },
  {
    id: 14, set: "main", points: 1, lo: "AI-4.3.1", kLevel: "K2", chapter: 4, multi: false,
    stem: "The data scientist has complained that the model cannot be trained with one particular algorithm, although other algorithms work with the same training data. Which of the following options is the MOST likely reason for this?",
    options: ["Wrong data", "Missing data", "Badly labelled data", "Insufficient data"],
    correct: ["d"],
    justifications: [
      "Incorrect. Si d'autres algos marchent, les données sont correctes.",
      "Incorrect. Si d'autres algos marchent, il n'y a pas de données manquantes.",
      "Incorrect. Si d'autres algos marchent, les labels sont OK.",
      "Correct. Cet algorithme requiert plus de données — la quantité est insuffisante POUR LUI spécifiquement."
    ]
  },
  {
    id: 15, set: "main", points: 1, lo: "AI-4.4.1", kLevel: "K2", chapter: 4, multi: false,
    stem: "DataSure is a start-up with a product that promises to improve the quality of ML models. DataSure claim that this improvement comes from checking if the data has been labeled correctly. Which of the following defects is MOST likely to have been prevented by using this product?",
    options: [
      "The model will have security vulnerabilities",
      "The model will have poor accuracy",
      "The model will not fulfill its intended function",
      "The model will produce biased outputs"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. La sécurité n'est pas traitée par la qualité du labelling.",
      "Correct. Données mal étiquetées = ground truth incorrecte = précision réduite.",
      "Incorrect. Un modèle ne remplissant pas sa fonction vient de données incorrectes/inéquitables, pas d'un mauvais labelling.",
      "Incorrect. Le biais vient de données incomplètes/déséquilibrées/dupliquées, pas du mauvais labelling."
    ]
  },
  {
    id: 16, set: "main", points: 1, lo: "AI-4.5.1", kLevel: "K1", chapter: 4, multi: false,
    stem: "An ML engineer, upon finding insufficient training data, is rotating labeled images to create additional training data. Which of the following approaches to labeling is being applied in this above example?",
    options: ["Crowdsourcing", "Augmentation", "AI-based labeling", "Outsourcing"],
    correct: ["b"],
    justifications: [
      "Incorrect. Crowdsourcing = beaucoup de personnes ; ici une seule.",
      "Correct. Augmentation = transformer des données déjà étiquetées pour en créer de nouvelles.",
      "Incorrect. L'IA n'est pas utilisée pour étiqueter ici.",
      "Incorrect. Pas de sous-traitance à un tiers."
    ]
  },
  {
    id: 17, set: "main", points: 2, lo: "AI-5.1.1", kLevel: "K3", chapter: 5, multi: false,
    stem: "The confusion matrix for an image classifier is shown: TP=78, FP=22, FN=6, TN=14. Which of the following options represents the precision of the classifier?",
    options: ["20/120 *100", "78/120 *100", "78/100 *100", "22/100 *100"],
    correct: ["c"],
    justifications: [
      "Incorrect. Pas la formule de la précision.",
      "Incorrect. Pas la formule de la précision.",
      "Correct. Precision = TP/(TP+FP) = 78/(78+22) = 78/100 *100 = 78%.",
      "Incorrect. Pas la formule de la précision."
    ]
  },
  {
    id: 18, set: "main", points: 1, lo: "AI-5.2.1", kLevel: "K2", chapter: 5, multi: false,
    stem: "ThermalSpace is a solution provider that helps thermal power plants to optimize their power output. Their solution is based on an ML model created using past data with clearly marked output. The model helps determine the amount of electricity to be generated at a given time of the day. To determine the quality of the model using ML functional performance metrics, which of the following metrics is MOST likely to be used?",
    options: ["R-squared", "Precision", "Recall", "False Positives"],
    correct: ["a"],
    justifications: [
      "Correct. Problème de regression supervisée (sortie continue = quantité d'électricité). R-squared (ou MSE/RMSE) est la métrique appropriée.",
      "Incorrect. Métrique de classification.",
      "Incorrect. Métrique de classification.",
      "Incorrect. Concept de classification."
    ]
  },
  {
    id: 19, set: "main", points: 2, lo: "AI-5.4.1", kLevel: "K4", chapter: 5, multi: false,
    stem: "KnowYourPet is an app utilizing ML to determine whether a pet is hungry or not. It is understood that a dog is likely to be not hungry most of the time, as reflected in the training data. If the dog is mis-diagnosed as hungry then it may lead to overfeeding of the dog and this could lead to serious health issues. Which of the following metrics would you choose for determining the suitability of the model under test?",
    options: ["Accuracy", "Precision", "Recall", "F1-score"],
    correct: ["b"],
    justifications: [
      "Incorrect. Accuracy n'est pas utile sur classes déséquilibrées (la classe 'not hungry' domine).",
      "Correct. Précision à privilégier car le coût d'un faux positif (chien diagnostiqué affamé alors qu'il ne l'est pas → suralimentation → problèmes de santé) est élevé.",
      "Incorrect. Recall sert quand on ne veut pas rater les positifs. Ici la précision est plus critique.",
      "Incorrect. F1-score quand precision ET recall ont une importance similaire — mais ici precision est bien plus importante."
    ]
  },
  {
    id: 20, set: "main", points: 1, lo: "AI-6.1.1", kLevel: "K2", chapter: 6, multi: false,
    stem: "Which of the following options BEST describes a deep neural net?",
    options: [
      "It is comprised of a hierarchical structure of neurons with the lowest (deepest) neurons making most of the decisions",
      "It is comprised of connected neurons where each neuron has an associated bias and each connection has an associated weight",
      "It is made up several layers with each layer (except input and output layers) connected to each other layer and errors are propagated backwards through the network",
      "It is made up of layers of neurons, each of which generates an activation value based on the other neurons in the same layer"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Pas de structure hiérarchique.",
      "Correct. Comme le cerveau humain : neurones connectés, chacun avec un biais, chaque connexion avec un poids.",
      "Incorrect. Les couches ne sont connectées qu'aux suivantes (pas à toutes les autres).",
      "Incorrect. L'activation se base sur les neurones de la couche PRÉCÉDENTE, pas la même."
    ]
  },
  {
    id: 21, set: "main", points: 1, lo: "AI-6.2.1", kLevel: "K2", chapter: 6, multi: false,
    stem: "Which of the following statements CORRECTLY describes a test coverage measure for neural networks?",
    options: [
      "Value change coverage is based on individual neurons being seen to affect the overall output of the neural network",
      "Threshold coverage is based on neurons outputting an activation value greater than a pre-set value between zero and one",
      "Neuron coverage is a measure of the proportion of neurons that are activated at any time during the testing",
      "Sign change coverage measures the coverage of neurons that output both positive, negative and zero activation values"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Value change coverage = activations qui changent de plus d'un montant prédéfini, pas l'effet sur la sortie globale.",
      "Correct. Threshold coverage = proportion de neurones activés avec une valeur > seuil prédéfini.",
      "Incorrect. Tous les neurones sont 'activés' à chaque exécution ; neuron coverage mesure ceux dont la valeur > 0.",
      "Incorrect. Sign change coverage = positifs ET négatifs (PAS zéro)."
    ]
  },
  {
    id: 22, set: "main", points: 1, lo: "AI-7.1.1", kLevel: "K2", chapter: 7, multi: false,
    stem: "Which of the following requirements for an AI-based system is MOST likely to cause a significant challenge in testing?",
    options: [
      "The system shall be more accurate than the system it is replacing",
      "The AI component in the system shall have 100% accuracy",
      "A human operator should be able to override the system in 1 second",
      "The system shall mimic the human emotions of a typical game player"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. Exigence avec oracle clair, pas un défi de test.",
      "Incorrect. Difficile à atteindre, mais pas un défi de test.",
      "Incorrect. Exigence testable.",
      "Correct. Extrêmement complexe à tester sans définir toutes les émotions humaines et leur mimétisme."
    ]
  },
  {
    id: 23, set: "main", points: 1, lo: "AI-7.3.1", kLevel: "K1", chapter: 7, multi: false,
    stem: "Which of the following is a factor associated with the test data that can make the testing of AI-based systems difficult?",
    options: [
      "Sourcing big data with high velocity",
      "Sourcing data from a single source",
      "Sourcing data separately from the data scientists",
      "Sourcing data from public websites"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Sourcer des données massives et à haute vélocité est difficile.",
      "Incorrect. Sourcer depuis plusieurs sources cohérentes est plus difficile.",
      "Incorrect. Sourcer séparément des data scientists est une bonne pratique.",
      "Incorrect. Sourcer depuis le web public est simple."
    ]
  },
  {
    id: 24, set: "main", points: 1, lo: "AI-7.4.1", kLevel: "K2", chapter: 7, multi: false,
    stem: "Why would the accuracy of human decisions be considered in testing as well as the accuracy of AI-based systems?",
    options: [
      "Intuitive human decisions can be made faster than a corresponding AI-based system in some situations",
      "Unethical decisions can be made by humans as well as AI-based systems",
      "The accuracy of human decisions is not relevant to testing AI-based systems",
      "Human decisions may be of lower quality when they have been recommended by an AI-based system"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. La rapidité n'est pas liée à l'exactitude.",
      "Incorrect. Les choix éthiques humains ne sont pas liés au test des systèmes IA.",
      "Incorrect. L'exactitude humaine est pertinente — les humains valident les recommandations.",
      "Correct. Automation bias — les décisions humaines avec recommandation IA peuvent être de moindre qualité (5%+ d'erreurs)."
    ]
  },
  {
    id: 25, set: "main", points: 2, lo: "AI-7.7.1", kLevel: "K4", chapter: 7, multi: true,
    stem: "An ML-based toll charging solution determines the type of incoming vehicles from the images captured by a camera. There are different types of cameras available and the solution provider claims to be able to use cameras of different resolutions. The images need to be in jpeg format with a size of 320X480 pixels for the purpose of training the model as well as for predicting the outcome. The model should be able to classify the vehicle types with certain desired high level of accuracy and should be tested against vulnerabilities. Each toll plaza will have its own complete system unconnected to any other system. Which of the following types of testing are the MOST appropriate options for the tests you would choose for system testing? (Select TWO)",
    options: [
      "Testing for concept drift",
      "Adversarial testing",
      "Scalability testing",
      "Fairness testing",
      "Data pipeline testing"
    ],
    correct: ["b", "e"],
    justifications: [
      "Incorrect. Concept drift = test après déploiement.",
      "Correct. Adversarial testing répond à l'exigence 'tested against vulnerabilities'.",
      "Incorrect. Scalability non requise — systèmes indépendants par péage.",
      "Incorrect. Fairness = utilisation de données positivement biaisées ; pas de discrimination positive ici.",
      "Correct. Data pipeline testing — les images viennent dans des formats/résolutions variés et doivent être normalisées (320x480 jpeg)."
    ]
  },
  {
    id: 26, set: "main", points: 1, lo: "AI-8.1.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following statements BEST describes a testing challenge that specifically applies to a self-learning system?",
    options: [
      "The system requires regular retraining and therefore requires regular testing",
      "The system is regularly released which means regression testing is required",
      "The system changes in such a way that tests that previously passed can fail",
      "The system requires a human operator, who is also required for testing"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Un système nécessitant un ré-entraînement régulier n'est pas self-learning.",
      "Incorrect. Releases régulières ≠ self-learning.",
      "Correct. Tests qui passaient peuvent échouer parce que le système se modifie lui-même.",
      "Incorrect. Présence humaine ≠ self-learning."
    ]
  },
  {
    id: 27, set: "main", points: 1, lo: "AI-8.3.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following is NOT likely to be required to test a system for bias?",
    options: [
      "Involving selected users that are known to be biased",
      "Measuring how changes in test inputs change test outputs",
      "Observing how production outputs correlate to production inputs",
      "Obtaining additional data from other sources"
    ],
    correct: ["a"],
    justifications: [
      "Correct (cad : c'est ce qui n'est PAS requis). Des utilisateurs biaisés ne servent pas à tester le biais du système.",
      "Incorrect (cad : c'est utile). Tester des variations contrôlées d'inputs aide à détecter le biais.",
      "Incorrect (cad : c'est utile). Surveiller les corrélations en production est essentiel.",
      "Incorrect (cad : c'est utile). Obtenir d'autres sources de données aide à détecter le biais."
    ]
  },
  {
    id: 28, set: "main", points: 1, lo: "AI-8.5.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following statements BEST describes how system complexity can create challenges when testing an AI-based system?",
    options: [
      "Testing for bias may require data that the team does not have",
      "Manual generation of white-box tests can be difficult",
      "Determining whether a system is ethical can be subjective",
      "It can be difficult to find representative data to train a model"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Le biais n'est pas généralement lié à la complexité du système.",
      "Correct. Comprendre le système et créer assez de tests pour une couverture efficace = défi de la complexité IA.",
      "Incorrect. L'éthique n'est pas habituellement liée à la complexité.",
      "Incorrect. Les données représentatives ne sont pas un sujet de complexité système."
    ]
  },
  {
    id: 29, set: "main", points: 2, lo: "AI-8.8.1", kLevel: "K4", chapter: 8, multi: true,
    stem: "An AI-based system is being used by the health ministry to identify vulnerable groups of patients (...) trained on a large set of data collected by the health ministry from two surveys of 5,000 men over 50 years of age and 25,000 women over 30 years of age. (...) Which of the following attributes should be MOST carefully considered when specifying the objectives and acceptance criteria for the system? (Select TWO)",
    options: ["Adaptability", "Bias", "Explainability", "Flexibility", "Autonomy"],
    correct: ["b", "c"],
    justifications: [
      "Incorrect. L'environnement opérationnel ne change pas particulièrement.",
      "Correct. Données déséquilibrées (25 000 femmes vs 5 000 hommes, âges différents) → bias à considérer attentivement.",
      "Correct. Les patients identifiés comme vulnérables doivent comprendre pourquoi (impact médical/financier + privacy).",
      "Incorrect. Pas de raison de penser que le système sera utilisé hors spec initiale.",
      "Incorrect. Pas de besoin de fonctionnement prolongé sans intervention."
    ]
  },
  {
    id: 30, set: "main", points: 1, lo: "AI-9.1.1", kLevel: "K2", chapter: 9, multi: false,
    stem: "An ML engineer is trying to find exploitable inputs and then use these inputs to retrain the models to make them immune to these inputs. Which of the following options BEST describes the approach being used by the ML engineer?",
    options: ["Validation", "Adversarial testing", "Data pipeline testing", "Scalability testing"],
    correct: ["b"],
    justifications: [
      "Incorrect. Pas de la validation : on cherche des inputs exploitables et on les réutilise pour entraîner.",
      "Correct. Adversarial testing : trouver des inputs problématiques et entraîner le modèle pour les rendre inoffensifs.",
      "Incorrect. Aucun pipeline de données n'est testé ici.",
      "Incorrect. Aucun test de scalabilité ici."
    ]
  },
  {
    id: 31, set: "main", points: 1, lo: "AI-9.2.1", kLevel: "K2", chapter: 9, multi: false,
    stem: "A test manager has to select test techniques to be used for testing autonomous vehicle software. There are a large number of environmental conditions (>50) that need to be considered for seven vehicle functions. Which of the following test techniques is MOST likely to be used when testing the variety of vehicle functions (VF) in different environmental conditions (EC)?",
    options: [
      "A/B testing based on the VF and EC parameters",
      "Combination testing of all the parameters of VF and EC",
      "Pairwise testing of the relevant values of VF and EC",
      "Back-to-back testing of relevant VF and EC values"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. A/B testing n'est pas adapté au combinatoire.",
      "Incorrect. Tester toutes les combinaisons est quasi impossible (>50 × 7 explose).",
      "Correct. Pairwise testing : meilleur compromis pour réduire le nombre de combinaisons sans trop sacrifier la détection.",
      "Incorrect. Back-to-back testing n'est pas adapté au combinatoire."
    ]
  },
  {
    id: 32, set: "main", points: 1, lo: "AI-9.3.1", kLevel: "K2", chapter: 9, multi: false,
    stem: "A test manager decides to have a non-AI system with similar functionality to the AI based system under test (SUT) built to support system testing. Which of the following statements is most likely to be CORRECT?",
    options: [
      "The test manager has chosen back-to-back testing because it helps solve the test oracle problem by using a pseudo-oracle",
      "The test manager has chosen A/B testing because it helps solve the test oracle problem by using a pseudo-oracle",
      "The test manager has chosen back-to-back testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle",
      "The test manager has chosen A/B testing because the non-functional requirements of the SUT can be verified against the pseudo-oracle"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Back-to-back testing avec un système non-IA = pseudo-oracle, résout le test oracle problem.",
      "Incorrect. A/B testing compare une variante du SUT avec le SUT — pas un système alternatif.",
      "Incorrect. Les caractéristiques non-fonctionnelles diffèrent entre pseudo-oracle et SUT.",
      "Incorrect. Idem ci-dessus + ce n'est pas A/B."
    ]
  },
  {
    id: 33, set: "main", points: 2, lo: "AI-9.5.1", kLevel: "K3", chapter: 9, multi: false,
    stem: "An AI-based mobile phone search system... Source test case retourne {SnapHappy_X1, SnapHappy_M2, SnapHappy_M3, ClickNow_1000x, ClickNow_1000xs}. T1 ajoute la contrainte 3D camera=yes ; T2 ajoute 3D camera=no. Which of the following options is MOST likely to be a valid list of recommended phones for the follow-up test cases?",
    options: [
      "T1: SnapHappy_X1, SnapHappy_M2 — T2: ClickNow_1000x, ClickNow_1000xs",
      "T1: SnapHappy_M2, SnapHappy_M3, ClickNow_1000xs — T2: SnapHappy_X1, ClickNow_1000x",
      "T1: 5 phones — T2: 3 phones",
      "T1: 5 phones — T2: 5 phones"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. T1 ⊆ source et T2 ⊆ source ; mais T1 ∪ T2 doit reformer source sans overlap si la condition est binaire (3D oui/non).",
      "Correct. La contrainte ajoutée se découpe binairement : T1 contient les phones avec 3D, T2 ceux sans 3D, et ensemble ils reforment exactement le source set sans chevauchement (la métamorphic relation).",
      "Incorrect. T1 ne peut pas contenir tous les phones du source (la contrainte est plus stricte).",
      "Incorrect. Idem."
    ]
  },
  {
    id: 34, set: "main", points: 1, lo: "AI-9.6.1", kLevel: "K2", chapter: 9, multi: false,
    stem: "System testing of an AI-based system is being planned. It has been suggested that exploratory testing is used in addition to scripted test techniques. Which of the following scenarios is MOST likely to be an example of exploratory testing being performed?",
    options: [
      "Training data is visualized using tools to look at various aspects of the data",
      "Tests written using equivalence partitioning during the previous test cycle are being run",
      "The Google 'ML test checklist' is being used",
      "ML functional performance metrics are being calculated"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Exploratory Data Analysis (EDA) — méthode exploratoire.",
      "Incorrect. Tests scriptés.",
      "Incorrect. Checklist-based testing.",
      "Incorrect. Calcul de métriques ≠ exploratoire."
    ]
  },
  {
    id: 35, set: "main", points: 2, lo: "AI-9.7.1", kLevel: "K4", chapter: 9, multi: true,
    stem: "LAIgal systems has an AI-based product for extracting relevant favorable judgements similar to a given legal case. (...) The system needs to be safe from malicious inputs. A similar open-source product exists and is available. Not having a suitable test oracle is a challenge when testing. Which of the following test techniques should be selected to test the new version during system testing? (Select TWO)",
    options: [
      "A/B testing",
      "Back-to-back testing",
      "Adversarial testing",
      "State transition testing",
      "ML functional performance metrics calculation"
    ],
    correct: ["b", "c"],
    justifications: [
      "Incorrect. A/B testing compare 2 variantes du SUT.",
      "Correct. Back-to-back testing avec produit open source = pseudo-oracle (résout le test oracle problem).",
      "Correct. Adversarial testing nécessaire car 'safe from malicious inputs'.",
      "Incorrect. State transition n'est pas suggérée par le scénario.",
      "Incorrect. Adapté au model testing pour classification, pas system testing."
    ]
  },
  {
    id: 36, set: "main", points: 1, lo: "AI-10.1.1", kLevel: "K2", chapter: 10, multi: false,
    stem: "Which one of the following statements is an example of a difference between a test environment for AI-based systems and a test environment for conventional systems?",
    options: [
      "Test environments for AI-based systems may require some mechanism to determine how a particular decision is made",
      "Test environments for AI-based systems need simulators and virtual environments whereas conventional systems do not need these",
      "Test environments for AI-based systems need large amounts of data, whereas conventional systems do not need large amount of data",
      "GPUs are required for test environments for AI-based systems whereas conventional systems do not need these"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Mécanismes d'explainability requis pour environnements IA.",
      "Incorrect. Simulateurs/virtual envs sont aussi utilisés pour systèmes conventionnels.",
      "Incorrect. Beaucoup de données aussi pour systèmes conventionnels.",
      "Incorrect. GPUs aussi pour d'autres systèmes (jeux, etc.)."
    ]
  },
  {
    id: 37, set: "main", points: 1, lo: "AI-11.2.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "In which of the following situations would AI be MOST useful when categorizing new defects?",
    options: [
      "A small number of defects requires categorization on a new application",
      "A large number of defects is reported on a small application",
      "Minimal data is provided in typical defect reports",
      "A new development team needs to know the most appropriate developer to fix a defect"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Peu de défauts + nouvelle app = pas assez de données d'entraînement.",
      "Correct. Beaucoup de défauts sur une petite application = bénéfice + opportunité d'identifier des doublons.",
      "Incorrect. Peu de données = utilité limitée.",
      "Incorrect. Nouvelle équipe = pas d'historique → recommandations imprécises."
    ]
  },
  {
    id: 38, set: "main", points: 1, lo: "AI-11.3.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "Which of the following is an AI tool MOST likely to use as the basis for generating functional test cases?",
    options: [
      "A test charter",
      "A picture of the system as a flow chart",
      "Web server logs",
      "Crash reports"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Test charter = focus pour exploratory testing, rarement source de génération auto.",
      "Incorrect. Une image n'est pas machine-readable.",
      "Correct. Les web server logs reflètent l'usage réel et fournissent une base à l'IA pour générer des tests.",
      "Incorrect. Crash reports = échecs inattendus, pas les fonctions."
    ]
  },
  {
    id: 39, set: "main", points: 1, lo: "AI-11.4.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "Which of the following options CORRECTLY states how an AI-based tool can perform optimization of regression test suites?",
    options: [
      "By analyzing false positive test results",
      "By analyzing information from previous testing activities",
      "By using genetic algorithms to create new test cases",
      "By updating the expected results to counter concept drift"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. L'objectif n'est pas de réduire les faux positifs.",
      "Correct. Optimisation par analyse des historiques d'exécutions de tests.",
      "Incorrect. Génétique = créer de nouveaux tests, pas optimiser une suite existante.",
      "Incorrect. Concept drift n'est pas lié à l'optimisation de la régression (section 11.4)."
    ]
  },
  {
    id: 40, set: "main", points: 1, lo: "AI-11.5.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "Which of the following options CORRECTLY states how an AI-based tool can perform defect prediction?",
    options: [
      "Using natural language to ask developers where they predict defects will occur",
      "By analyzing the causes of defects raised on a similar code base",
      "By analyzing false positive defects",
      "Scanning code to identify defects using rules"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. NLP est de l'IA, mais pas du defect prediction.",
      "Correct. Defect prediction = corrélations entre mesures code/process/personnes et défauts (sur un code base identique ou similaire).",
      "Incorrect. Aucun intérêt à analyser des faux positifs pour prédire.",
      "Incorrect. Scanner du code avec des règles = analyse statique, pas defect prediction."
    ]
  },

  // ====== ADDITIONAL SET (27 questions) ======
  {
    id: 41, set: "additional", points: 1, lo: "AI-1.2.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following statements about AI is MOST likely to be CORRECT?",
    options: [
      "An autonomous robot that can act as a worker in a house, shop or office is an example of general AI",
      "A robot exhibiting similar skill levels as a human is considered to have achieved singularity",
      "AI-based systems that support a range of test management functions are considered to possess general AI",
      "An AI-based system that cannot access the internet is said to exhibit narrow AI"
    ],
    correct: ["a"],
    justifications: [
      "Correct. General AI = intelligence comparable humaine ; un robot polyvalent en maison/boutique/bureau correspond.",
      "Incorrect. Singularity = quand l'IA SURPASSE l'humain.",
      "Incorrect. Test management = tâche spécialisée → narrow AI.",
      "Incorrect. Narrow AI = tâche unique spécialisée, peu importe l'accès internet."
    ]
  },
  {
    id: 42, set: "additional", points: 1, lo: "AI-1.3.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following statements is MOST likely to be describing a conventional system (as opposed to an AI-based system)?",
    options: [
      "This system assigns customers into groups, based on their historical buying patterns",
      "This system controls the braking of the car dependent on its speed",
      "This system taught itself to recognize different words by listening to recordings",
      "This system detects anomalies from its experience of seeing anomalies in many X-rays"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. Clustering de clients = unsupervised learning → IA.",
      "Correct. Aucun élément suggérant l'utilisation d'IA — système conventionnel.",
      "Incorrect. Auto-apprentissage = IA.",
      "Incorrect. Apprentissage à partir d'exemples = supervised learning → IA."
    ]
  },
  {
    id: 43, set: "additional", points: 1, lo: "AI-1.5.1", kLevel: "K1", chapter: 1, multi: false,
    stem: "Which of the following options is NOT a framework used to develop AI-based software?",
    options: ["scikit-learn", "CNTK", "MxNet", "EZPy-AI"],
    correct: ["d"],
    justifications: [
      "Incorrect. Bibliothèque ML free pour Python.",
      "Incorrect. Microsoft Cognitive Toolkit, deep learning open source.",
      "Incorrect. Framework deep learning utilisé par Amazon AWS.",
      "Correct. Aucun framework IA n'a ce nom."
    ]
  },
  {
    id: 44, set: "additional", points: 1, lo: "AI-1.7.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following statements is MOST likely to be describing a system that includes the use of AI as a Service (AIaaS)?",
    options: [
      "The image classifier identifies defects in the gyroscope casings produced by the company and was built using a transfer learning approach so that it is of high accuracy",
      "The underwater AI-based vehicle steering system uses a third-party obstacle avoidance component based on decision trees and Bayesian optimization",
      "The contract checker uses an exclusive algorithm for determining levels of legal liability, but the pricing part of the contract is separately checked by a generic contract pricing AI component",
      "The car rental pricing system is built using AI to support a demand-based algorithm and is hosted in the cloud and made available to all of the company's car rental offices"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Classifier hyper-spécifique, pas AIaaS.",
      "Incorrect. Composant tiers embarqué + spécialisé, pas AIaaS.",
      "Correct. L'algorithme exclusif n'est PAS AIaaS, mais le composant générique de pricing l'est.",
      "Incorrect. Disponible seulement aux bureaux internes, pas un service public."
    ]
  },
  {
    id: 45, set: "additional", points: 1, lo: "AI-1.9.1", kLevel: "K2", chapter: 1, multi: false,
    stem: "Which of the following options is the MOST likely use of a regulatory standard/regulation for an AI-based system?",
    options: [
      "Use of ISO/PAS 21448 (SOTIF) for an unmanned autonomous submarine",
      "Use of GDPR for a bank loan decision-making system",
      "Use of ISO 26262 for a fully self-driving car",
      "Use of GDPR for a drone collision-avoidance system"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. SOTIF concerne les véhicules routiers, pas les sous-marins.",
      "Correct. Système de prêt bancaire traite des données personnelles → GDPR s'applique.",
      "Incorrect. Une voiture totalement autonome contient des systèmes non-déterministes, non autorisés par ISO 26262.",
      "Incorrect. Les systèmes anti-collision drone ne contiennent généralement pas de données personnelles."
    ]
  },
  {
    id: 46, set: "additional", points: 1, lo: "AI-2.1.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following statements about flexibility and adaptability is MOST likely to be CORRECT?",
    options: [
      "Adaptability is important in unsupervised learning as it allows the ML model to learn from data without labels",
      "Flexibility is important in supervised learning as it allows the ML model to recognize meaning even when data is poorly labelled",
      "Adaptability is important in reinforcement learning systems as such systems must adapt themselves to optimize their reward function",
      "Flexibility is important in self-learning systems as it allows them to adapt themselves to unexpected changes in their environment"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. Adaptability = être MODIFIÉ par l'extérieur, pas s'adapter soi-même.",
      "Incorrect. La flexibility n'est pas liée à la lecture de mauvais labels.",
      "Incorrect. RL optimise la récompense ; adaptability ≠ s'auto-modifier.",
      "Correct. Flexibility = capacité à être utilisé hors des exigences initiales (nouveaux contextes)."
    ]
  },
  {
    id: 47, set: "additional", points: 1, lo: "AI-2.3.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following statements about the evolution of AI-based systems is CORRECT?",
    options: [
      "Self-learning AI-based systems that continue to work in the same operational environment are not expected to change their behavior",
      "Side effects are not a concern for AI-based systems that change themselves to cope with changes in their environment",
      "AI-based systems must change themselves to cope with changes in system requirements during development",
      "Self-learning systems that physically interact with people, need to be managed to ensure system changes are not dangerous"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. Les self-learning peuvent s'optimiser même dans le même environnement.",
      "Incorrect. Les effets secondaires sont toujours une préoccupation.",
      "Incorrect. Evolution concerne le post-déploiement, pas le dev.",
      "Correct. Les systèmes physiques (robots) qui s'auto-modifient peuvent devenir dangereux pour les humains."
    ]
  },
  {
    id: 48, set: "additional", points: 1, lo: "AI-2.5.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following examples of an AI-based system is LEAST likely to require special attention with regard to ethical issues?",
    options: [
      "A computer game that teaches children the benefits of democracy by challenging them to become president",
      "An application that uses data available on social media to provide a trustworthiness rating for job applicants",
      "An autonomous self-powered underwater marine mapping system to create a map of the seabed in international waters",
      "A mobile app that monitors each employee's daily exercise and rewards them with health insurance benefits"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Cible des enfants (groupe vulnérable) avec une vision potentielle biaisée de la démocratie.",
      "Incorrect. Risque de biais et de violations de privacy.",
      "Correct. Cartographie sous-marine internationale — peu d'enjeux éthiques (autonomie humaine, prévention des dommages, équité, explicability).",
      "Incorrect. Risque d'inéquité envers handicapés et pression sur employés."
    ]
  },
  {
    id: 49, set: "additional", points: 1, lo: "AI-2.7.1", kLevel: "K2", chapter: 2, multi: false,
    stem: "Which of the following statements about the transparency, interpretability and explainability for AI-based systems is MOST likely to be CORRECT?",
    options: [
      "The search engine algorithm used for training students on search engine technology was selected as it was considered to be the most explainable",
      "The loan system was considered transparent as for each loan application it was clear to users how it decided whether to approve agree to the loan or not",
      "The doctors were happy with the level of interpretability of the rule-based oncology system as they could understand how the given rules were implemented in the system",
      "The drone operators were happy with the transparency of the control system as they felt that the system responded correctly to their instructions"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Comprendre la techno sous-jacente = interpretability, pas explainability.",
      "Incorrect. Comprendre la décision pour chaque cas = explainability, pas transparency.",
      "Correct. Comprendre la techno sous-jacente (règles) = interpretability.",
      "Incorrect. Le système répondant correctement = correctness fonctionnelle, pas transparency."
    ]
  },
  {
    id: 50, set: "additional", points: 1, lo: "AI-3.1.2", kLevel: "K2", chapter: 3, multi: false,
    stem: "Which of the following BEST describes the unsupervised approach to machine learning?",
    options: [
      "Data and labels are analyzed to group them into clusters",
      "A system automatically learns by satisfying a fitness function",
      "A system teaches itself to meet objectives based on rewards",
      "Data are analyzed to identify patterns in the data"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. Pas de labels en unsupervised learning.",
      "Incorrect. Fitness function = reinforcement learning.",
      "Incorrect. Self-learning par récompenses = reinforcement learning.",
      "Correct. Pas de labels, identification de patterns dans les données."
    ]
  },
  {
    id: 51, set: "additional", points: 1, lo: "AI-3.2.1", kLevel: "K2", chapter: 3, multi: false,
    stem: "Given descriptions: I.Performance via validation data, II.Origin of test data identified, III.Tuned model ready for hardware, IV.Test data for performance criteria, V.Model created from source code, VI.Critical features identified. Which option BEST matches the descriptions with the activities in the ML workflow?",
    options: [
      "III - Build & Compile Model / II - Prepare the Data / IV - Evaluate the Model",
      "V - Build & Compile Model / II - Prepare the Data / I - Evaluate the Model",
      "V - Build & Compile Model / VI - Prepare the Data / IV - Evaluate the Model",
      "III - Build & Compile Model / VI - Prepare the Data / I - Evaluate the Model"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. III = deploy, IV = test (pas evaluate).",
      "Correct. V (source code → model) = Build & Compile, II (origine test data) = Prepare Data, I (validation data) = Evaluate Model.",
      "Incorrect. VI ⊆ Prepare Data mais II l'est aussi ; IV = test, pas evaluate.",
      "Incorrect. III = deploy."
    ]
  },
  {
    id: 52, set: "additional", points: 1, lo: "AI-3.4.1", kLevel: "K2", chapter: 3, multi: false,
    stem: "Which of the following statements is LEAST likely to be used as a rationale for selecting an ML algorithm?",
    options: [
      "The amount of memory available for training the translation system in the mobile device",
      "The maximum time allowed for retraining the embedded health monitoring system",
      "The number of measured characteristics used as the basis for a sports prediction system",
      "The number of expected clusters of customer types for a retail marketing system"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Improbable que l'algorithme soit entraîné sur le mobile lui-même.",
      "Incorrect (cad : c'est utile). Système embedded → durée maximale de ré-entraînement importante.",
      "Incorrect. Le nombre de features influe sur le choix de modèle.",
      "Incorrect. Connaître le nombre de clusters aide à choisir l'algorithme."
    ]
  },
  {
    id: 53, set: "additional", points: 1, lo: "AI-4.2.1", kLevel: "K2", chapter: 4, multi: false,
    stem: "Which of the following statements about the test dataset is CORRECT?",
    options: [
      "The test dataset comes from a source totally different from the validation dataset",
      "The format of the test dataset is different from the format of the validation dataset",
      "The test dataset can be used as the validation dataset but not as the training dataset",
      "The test dataset should not be exposed to the model during the training process"
    ],
    correct: ["d"],
    justifications: [
      "Incorrect. Test et validation viennent typiquement de la même source.",
      "Incorrect. Mêmes formats.",
      "Incorrect. Le test set ne sert NI au training NI à la validation.",
      "Correct. Si le test set est exposé au modèle pendant l'entraînement, l'évaluation sera biaisée."
    ]
  },
  {
    id: 54, set: "additional", points: 1, lo: "AI-4.5.2", kLevel: "K1", chapter: 4, multi: false,
    stem: "Which of the following options would MOST likely be a reason for poor labeling of data?",
    options: ["Insufficient data", "Synthetic data", "Translation errors", "Algorithm chosen for the ML model"],
    correct: ["c"],
    justifications: [
      "Incorrect. La quantité ne détermine pas la qualité du labelling.",
      "Incorrect. Données synthétiques ≠ mauvais labelling.",
      "Correct. Erreurs de traduction → labels corrects en langue 1 deviennent faux en langue 2.",
      "Incorrect. Le choix d'algorithme ne crée pas de mauvais labels."
    ]
  },
  {
    id: 55, set: "additional", points: 1, lo: "AI-5.3.1", kLevel: "K2", chapter: 5, multi: false,
    stem: "An ML team asserts that the ML functional performance metrics based on validation data collected as part of training an ML model are sufficient for determining the quality of the system. Which of the following statements is a valid reason to show that this may be INCORRECT?",
    options: [
      "The ML functional performance metrics may not work well if the ground truth is not correct",
      "The ML functional performance metrics cannot be used for measuring quality as these are tool dependent",
      "Validation data is biased resulting in skewed functional performance measurements",
      "Data may need to be transformed prior to training the model, so the functional performance measurements do not reflect the quality of the model"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Si labels incorrects → ground truth fausse → métriques peuvent indiquer un bon modèle qui produit en fait des sorties fausses.",
      "Incorrect. Les métriques ne dépendent pas de l'outil utilisé pour les mesurer.",
      "Incorrect. La validation data peut ou non être biaisée — pas une certitude.",
      "Incorrect. La transformation des données n'impacte pas mécaniquement la qualité."
    ]
  },
  {
    id: 56, set: "additional", points: 1, lo: "AI-5.5.1", kLevel: "K2", chapter: 5, multi: false,
    stem: "Which of the following options regarding benchmark suites, BEST completes the following statement?",
    options: [
      "ML benchmark suites help choose a particular model by indicating the time it takes to train",
      "ML benchmark suites help choose a particular model by indicating the time it takes to test",
      "ML benchmark suites help choose a particular model by indicating the time it takes to validate",
      "ML benchmark suites help choose a particular model by indicating the time it takes to deploy"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Les benchmark suites indiquent les temps d'entraînement (training time) et d'inférence.",
      "Incorrect. Pas le test time.",
      "Incorrect. Pas le validation time.",
      "Incorrect. Pas le deployment time."
    ]
  },
  {
    id: 57, set: "additional", points: 1, lo: "AI-7.2.1", kLevel: "K2", chapter: 7, multi: false,
    stem: "Which of the following test levels provides the BEST choice for performing bias-related testing?",
    options: ["Component testing", "Input data testing", "System testing", "Model testing"],
    correct: ["b"],
    justifications: [
      "Incorrect. Component testing = composants non-modèle, conventionnel.",
      "Correct. Input data testing = niveau le plus efficace pour tester le bias (avant entraînement idéalement).",
      "Incorrect. Bias testing peut se faire en system testing, mais idéalement avant.",
      "Incorrect. Model testing vérifie que le modèle seul respecte ses critères."
    ]
  },
  {
    id: 58, set: "additional", points: 1, lo: "AI-7.5.1", kLevel: "K2", chapter: 7, multi: false,
    stem: "Which of the following statements about the documentation of AI components is CORRECT?",
    options: [
      "Because non-functional requirements are not a part of the documentation of an AI component, non-functional testing cannot be performed",
      "White-box testing of the interaction of AI and non-AI components is not possible if the interfaces are a part of the documentation",
      "Checking for bias in the data is made possible by including the source of the data in the documentation",
      "Self-adapting AI systems require each change made by the system to be fully documented"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Les non-fonctionnels font partie de la doc.",
      "Incorrect. Documenter les interfaces SUPPORTE le white-box testing.",
      "Correct. Inclure la source des données et leurs metadata permet de tester pour le biais.",
      "Incorrect. Les systèmes self-adapting documentent rarement chaque changement."
    ]
  },
  {
    id: 59, set: "additional", points: 1, lo: "AI-7.6.1", kLevel: "K2", chapter: 7, multi: false,
    stem: "An ecommerce application recommends products to the user on the basis of their purchase history... You have been asked to measure the current conversion rate of recommendations to compare with the original required conversion rate. Which of the following is the MOST likely underlying reason for this request?",
    options: ["AI effect", "Adversarial attacks", "Concept drift", "Lack of fairness"],
    correct: ["c"],
    justifications: [
      "Incorrect. AI effect = perception de l'IA changeant avec le temps.",
      "Incorrect. Adversarial attacks = perturbations malicieuses, pas le scénario.",
      "Correct. Le modèle perd en précision parce que le comportement client a changé = concept drift.",
      "Incorrect. Fairness = données positivement biaisées au training."
    ]
  },
  {
    id: 60, set: "additional", points: 1, lo: "AI-8.2.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following options is MOST likely to be relevant when testing a system's autonomy?",
    options: [
      "Testing over a sustained period of time",
      "Testing the accuracy of system predictions",
      "Testing how quickly the system can adapt",
      "Static analysis of training data"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Tester sur une période prolongée pour vérifier la fréquence des interventions.",
      "Incorrect. Un système autonome peut être très inexact.",
      "Incorrect. Un système autonome peut ne pas être adaptable.",
      "Incorrect. Analyse statique des données ≠ test d'autonomie."
    ]
  },
  {
    id: 61, set: "additional", points: 1, lo: "AI-8.2.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following statements demonstrates how non-deterministic systems can create challenges in testing?",
    options: [
      "Non-deterministic systems produce a different result each time, normally preventing the generation of expected results",
      "Non-deterministic systems are difficult to test because they are not explainable, which hinders the investigation and fixing of defects",
      "A system that is given the same inputs and initial state may produce different outputs, so can require multiple test executions",
      "Non-deterministic systems are usually biased and require additional tests to allow this bias to be excluded from the results"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. On peut spécifier des résultats attendus (avec tolérance ou plusieurs exécutions).",
      "Incorrect. Non-déterministe ≠ pas explicable.",
      "Correct. Description valide d'un système non-déterministe — exécutions multiples nécessaires pour validité statistique.",
      "Incorrect. Pas de corrélation bias/non-déterministe."
    ]
  },
  {
    id: 62, set: "additional", points: 1, lo: "AI-8.6.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "When testing a deep neural network, which of the following characteristics can be evaluated without using dynamic testing?",
    options: ["Explainability", "Transparency", "Automation bias", "Accuracy"],
    correct: ["b"],
    justifications: [
      "Incorrect. Tester l'explainability de DNN nécessite l'exécution.",
      "Correct. Tester la transparency = comparer doc vs implémentation, pas d'exécution requise.",
      "Incorrect. Automation bias nécessite exécution + utilisateurs.",
      "Incorrect. L'accuracy ne se vérifie pas sans exécution."
    ]
  },
  {
    id: 63, set: "additional", points: 1, lo: "AI-8.7.1", kLevel: "K2", chapter: 8, multi: false,
    stem: "Which of the following characteristics of an example AI-based system might cause a test oracle problem?",
    options: [
      "It is not known where the training data was obtained",
      "The output of the system is a prediction for which the ground truth is unknown",
      "The system runs with no human intervention and is considered to be autonomous",
      "There is a lack of transparency into how the system was implemented"
    ],
    correct: ["b"],
    justifications: [
      "Incorrect. L'origine des données ne pose pas un test oracle problem.",
      "Correct. Si la ground truth est inconnue, on ne peut pas définir le résultat attendu = test oracle problem.",
      "Incorrect. L'autonomie n'a pas de lien avec les test oracles.",
      "Incorrect. Le mode d'implémentation n'est pas requis pour déterminer le résultat attendu."
    ]
  },
  {
    id: 64, set: "additional", points: 1, lo: "AI-9.4.1", kLevel: "K2", chapter: 9, multi: false,
    stem: "Which of the following statements is CORRECT with regards to A/B testing?",
    options: [
      "A/B testing is also known as differential testing because two different programs are used for this type of testing",
      "A/B testing is mostly useful for testing simple ML models as it does not produce accurate results for complex models",
      "A/B testing requires multiple expected results from the same inputs to be compared to identify significant differences in tested models",
      "A/B testing is a good technique for writing test cases for various types of ML models, especially self-learning systems"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Differential testing = back-to-back testing, pas A/B.",
      "Incorrect. A/B fonctionne pour modèles simples ET complexes.",
      "Correct. A/B testing nécessite des critères d'acceptation bien définis pour comparer les deux modèles.",
      "Incorrect. A/B ne sert pas à écrire des cas de test."
    ]
  },
  {
    id: 65, set: "additional", points: 1, lo: "AI-10.2.1", kLevel: "K2", chapter: 10, multi: false,
    stem: "Which of the following statements is LEAST likely to be an example of a benefit provided by virtual test environments in the testing of an AI-based system?",
    options: [
      "A smart city application is tested in a virtual test environment to allow scenarios that very rarely happen (e.g., crowd control at a new year event) to be tested",
      "An AI-based money market trading system is tested in a virtual test environment as it would be impractical to test on real money markets due to the potential costs",
      "A smart fruit picker is tested in a virtual test environment to allow many picking scenarios to be run in an accelerated timeframe to check that fruit is not damaged",
      "An autonomous car is tested in a virtual test environment to allow potentially dangerous test scenarios to be run safely"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect (= un VRAI bénéfice). Tester scenarios rares en virtuel est utile.",
      "Incorrect. Tester en virtuel pour éviter pertes financières réelles est sensé.",
      "Correct (= PAS un vrai bénéfice). Vérifier les dégâts sur les fruits en virtuel est plus difficile que sur de vrais fruits.",
      "Incorrect. Bonne pratique de tester scenarios dangereux en virtuel."
    ]
  },
  {
    id: 66, set: "additional", points: 1, lo: "AI-11.1.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "It is possible to use an AI-assisted test automation tool to recognize objects through image processing, rather than using references to their location. To which type of AI software engineering technology is this example MOST likely referring?",
    options: [
      "Classification, Learning and Prediction",
      "Probabilistic Software Engineering",
      "Search-based Software Engineering",
      "Clustering"
    ],
    correct: ["a"],
    justifications: [
      "Correct. Image recognition par classification (modèles de classification) reconnaît les objets dans les GUIs.",
      "Incorrect. Probabilistic SE = estimer probabilités d'événements.",
      "Incorrect. Search-based = réduire un grand espace de recherche.",
      "Incorrect. Clustering = type d'algorithme, pas une catégorie de technologie SE."
    ]
  },
  {
    id: 67, set: "additional", points: 1, lo: "AI-11.6.1", kLevel: "K2", chapter: 11, multi: false,
    stem: "Which of the following statements is CORRECT with respect to visual testing?",
    options: [
      "Visual testing makes use of object IDs to determine changes",
      "Visual testing uses images to do pixel-by-pixel comparisons",
      "Visual testing helps find overlapping user interface elements",
      "Visual testing fails when the screen layout changes"
    ],
    correct: ["c"],
    justifications: [
      "Incorrect. Visual testing utilise des images, pas des object IDs.",
      "Incorrect. Visual testing utilise l'IA pour comparer, PAS du pixel-par-pixel.",
      "Correct. Visual testing détecte des éléments UI superposés (comme un humain le ferait).",
      "Incorrect. Visual testing fonctionne malgré les changements de layout."
    ]
  }
];

// Plan d'étude jour-par-jour personnalisé
CTAI_DATA.studyPlan = [
  {
    day: 1, dateLabel: "Jour 1", focus: "Fondations + Caractéristiques qualité IA",
    chapters: [1, 2], totalMinutes: 210,
    morning: [
      "Lire syllabus Chapitre 1 (Introduction to AI) — 90 min",
      "Fiches mots-clés Ch.1 (16 termes IA) — 30 min",
      "QCM Ch.1 (questions 1-4 main + 41-45 additional, 9 Q) — 45 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 2 (Quality Characteristics) — 90 min",
      "Fiches mots-clés Ch.2 (18 termes IA) — 30 min",
      "QCM Ch.2 (questions 5-8 main + 46-49 additional, 8 Q) — 45 min"
    ],
    keyTakeaways: [
      "AI Effect : la définition de l'IA évolue (les systèmes experts à base de règles ne sont plus considérés IA)",
      "Narrow AI vs General AI vs Super AI",
      "AIaaS : composant IA générique fourni par un cloud provider",
      "Pre-trained models : risque clé = différence entre données d'entraînement et données opérationnelles",
      "Adaptability (modifié par humain) ≠ Flexibility (utilisable hors specs initiales) ≠ Autonomy (longue durée sans intervention)",
      "Bias : algorithmic vs sample vs inappropriate",
      "Reward hacking : exemple anesthésie",
      "Transparency (doc vs implémentation, sans exécution) ≠ Interpretability (comprendre le 'pourquoi' technique) ≠ Explainability (le système explique sa décision)",
      "Probabilistic + Non-deterministic = pire cas pour systèmes safety"
    ]
  },
  {
    day: 2, dateLabel: "Jour 2", focus: "ML Overview – Formes d'apprentissage et workflow",
    chapters: [3], totalMinutes: 195,
    morning: [
      "Lire syllabus Chapitre 3 — sections 3.1 à 3.3 (Forms of ML, Workflow, Selection) — 90 min",
      "Schéma interactif ML workflow (12 étapes) — 30 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 3 — sections 3.4 à 3.6 (Algorithm selection, Overfitting, Underfitting) — 60 min",
      "Fiches mots-clés Ch.3 (19 termes) — 30 min",
      "QCM Ch.3 (questions 9-12 main + 50-52 additional, 7 Q) — 45 min"
    ],
    keyTakeaways: [
      "Supervised : classification (catégories) + regression (numérique continu)",
      "Unsupervised : clustering + association — sans labels, identifie des patterns",
      "Reinforcement : reward function, l'agent apprend par essai-erreur",
      "ML workflow : Build & Compile → Train → Evaluate (validation) → Tune → Test (test set indépendant) → Deploy",
      "Overfitting : excellent en train/validation, mauvais en test indépendant",
      "Underfitting : mauvais partout (modèle trop simple)"
    ]
  },
  {
    day: 3, dateLabel: "Jour 3", focus: "ML – Data (chapitre le plus dense !)",
    chapters: [4], totalMinutes: 270,
    morning: [
      "Lire syllabus Chapitre 4 — sections 4.1 à 4.3 (Preparation, Datasets, Quality issues) — 110 min",
      "Schéma interactif Train/Validation/Test datasets — 30 min",
      "Fiches mots-clés Ch.4 — 30 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 4 — sections 4.4 à 4.6 (Data quality, Labeling, Privacy/security/bias) — 80 min",
      "QCM Ch.4 (questions 13-16 main + 53-54 additional, 6 Q) — 30 min",
      "Récap : matrice de différences supervisé/non-supervisé/RL"
    ],
    keyTakeaways: [
      "Data preparation = jusqu'à 36% de l'effort total ML",
      "3 datasets distincts : Training (entraîner) / Validation (tuner) / Test (évaluation finale, JAMAIS exposé pendant le training)",
      "Causes de mauvaise qualité : insufficient (pour 1 algo précis), wrong, missing, badly labeled",
      "Approches de labelling : interne, outsourcing, crowdsourcing, AI-based, augmentation (rotation d'images)",
      "Mauvais labels → mauvaise accuracy ; déséquilibre → bias"
    ]
  },
  {
    day: 4, dateLabel: "Jour 4", focus: "Métriques de performance ML",
    chapters: [5], totalMinutes: 195,
    morning: [
      "Lire syllabus Chapitre 5 — sections 5.1 à 5.2 (Confusion matrix, métriques par type) — 90 min",
      "Exercice : calculer Precision, Recall, F1-score à partir de matrices données — 45 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 5 — sections 5.3 à 5.5 (Limitations, sélection, benchmark suites) — 60 min",
      "Fiches mots-clés Ch.5 — 30 min",
      "QCM Ch.5 (questions 17-19 main + 55-56 additional, 5 Q) — 30 min"
    ],
    keyTakeaways: [
      "Confusion matrix : TP, FP, FN, TN",
      "Accuracy = (TP+TN)/total — à éviter sur classes déséquilibrées",
      "Precision = TP/(TP+FP) — quand un FP coûte cher (overfeeding du chien)",
      "Recall = TP/(TP+FN) — quand un FN coûte cher (rater un cancer)",
      "F1 = harmonic mean P+R — quand classes déséquilibrées et P et R également importants",
      "R-squared / MSE = métriques de regression (ex: prédiction d'électricité)",
      "Silhouette coefficient = clustering",
      "Benchmark suites : indiquent le training time"
    ]
  },
  {
    day: 5, dateLabel: "Jour 5", focus: "Réseaux de neurones + Testing AI Overview",
    chapters: [6, 7], totalMinutes: 240,
    morning: [
      "Lire syllabus Chapitre 6 (Neural Networks) — 60 min",
      "Schéma interactif perceptron + DNN — 30 min",
      "Fiches mots-clés Ch.6 + 5 mesures de couverture neurones — 30 min",
      "QCM Ch.6 (questions 20-21 main, 2 Q) — 15 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 7 (Testing AI Overview, Test levels, Documentation) — 100 min",
      "Fiches mots-clés Ch.7 — 30 min",
      "QCM Ch.7 (questions 22-25 main + 57-59 additional, 7 Q) — 45 min"
    ],
    keyTakeaways: [
      "Perceptron = neural network 1 couche (1 neurone)",
      "DNN = plusieurs couches, neurones connectés ; chaque neurone a un biais, chaque connexion un poids",
      "Activation value calculée à partir de la couche PRÉCÉDENTE",
      "5 coverages : neuron (>0), threshold (>seuil), sign change (+/- mais pas 0), value change (>amount), sign-sign (changement de signe propagé)",
      "Test levels : input data, ML model, integration, system, acceptance",
      "Bias testing → idéalement à input data testing (avant entraînement)",
      "Automation bias : humains trop confiants envers les recommandations IA",
      "Concept drift : changement post-déploiement (e-commerce, marché)"
    ]
  },
  {
    day: 6, dateLabel: "Jour 6", focus: "Caractéristiques qualité spécifiques IA (chapitre dense)",
    chapters: [8], totalMinutes: 240,
    morning: [
      "Lire syllabus Chapitre 8 — sections 8.1 à 8.4 (Self-learning, Autonomous, Bias, Probabilistic) — 100 min",
      "Fiches mots-clés Ch.8 — 30 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 8 — sections 8.5 à 8.8 (Complexity, Transparency/Interpret/Explain, Test oracles, Acceptance criteria) — 80 min",
      "QCM Ch.8 (questions 26-29 main + 60-63 additional, 8 Q) — 45 min",
      "Tableau récapitulatif : transparency vs interpretability vs explainability"
    ],
    keyTakeaways: [
      "Self-learning : tests qui passaient peuvent échouer après auto-modif",
      "Autonomy : tester sur période prolongée",
      "Tester pour bias : variations d'inputs, observation des sorties prod, données alternatives — PAS d'utilisateurs biaisés",
      "Non-deterministic : mêmes inputs → outputs différents → exécutions multiples requises",
      "Transparency = comparer doc et implémentation (testable SANS exécution !)",
      "Interpretability = comprendre comment le système est conçu",
      "Explainability = comprendre POURQUOI cette décision (LIME)",
      "Test oracle problem : ground truth inconnue ⇒ pseudo-oracle (back-to-back testing)"
    ]
  },
  {
    day: 7, dateLabel: "Jour 7", focus: "Méthodes & Techniques (chapitre clé !)",
    chapters: [9], totalMinutes: 295,
    morning: [
      "Lire syllabus Chapitre 9 — sections 9.1 à 9.4 (Adversarial, Pairwise, Back-to-back, A/B) — 110 min",
      "Schéma interactif comparatif des techniques — 30 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 9 — sections 9.5 à 9.7 (Metamorphic, Experience-based, Choix de techniques) — 100 min",
      "Exercice : appliquer metamorphic relations sur cas SnapHappy/ClickNow — 30 min",
      "Fiches mots-clés Ch.9 — 30 min",
      "QCM Ch.9 (questions 30-35 main + 64, 7 Q) — 45 min"
    ],
    keyTakeaways: [
      "Adversarial testing : trouver entrées exploitables ET ré-entraîner le modèle",
      "Pairwise testing : combinaisons de paires (>50 conditions × 7 fonctions = pairwise idéal)",
      "Back-to-back testing : pseudo-oracle (ex: système non-IA, version open source) — résout test oracle problem",
      "A/B testing : compare DEUX VARIANTES du même SUT (pas A vs un autre système)",
      "Metamorphic testing : pas besoin de la sortie exacte, juste la relation entre source et follow-up cases",
      "Exemple métamorphic : ajouter contrainte plus stricte → résultats follow-up ⊆ résultats source",
      "Exploratory : EDA = visualisation des données d'entraînement"
    ]
  },
  {
    day: 8, dateLabel: "Jour 8", focus: "Test environments + AI for Testing",
    chapters: [10, 11], totalMinutes: 225,
    morning: [
      "Lire syllabus Chapitre 10 (Test Environments + Virtual) — 30 min",
      "QCM Ch.10 (questions 36 main + 65, 2 Q) — 15 min",
      "Lire syllabus Chapitre 11 — sections 11.1 à 11.3 (Catégories AI for testing, Defects, Test gen) — 75 min"
    ],
    afternoon: [
      "Lire syllabus Chapitre 11 — sections 11.4 à 11.6 (Régression, Defect prediction, Visual testing, UI test gen) — 100 min",
      "Fiches mots-clés Ch.10 + 11 — 30 min",
      "QCM Ch.11 (questions 37-40 main + 66-67, 6 Q) — 45 min"
    ],
    keyTakeaways: [
      "Différence env IA vs conventionnel : mécanismes d'explainability requis (les autres aspects — GPU, big data, simulateurs — existent aussi en conventionnel)",
      "Virtual env utile pour : scenarios rares, dangereux, coûteux MAIS PAS quand l'évaluation physique réelle est nécessaire (fruits abîmés)",
      "AI for defect categorization : utile sur GROS corpus de défauts, pas sur petits",
      "Test gen : inputs = web server logs (machine-readable + usage réel)",
      "Regression test optimization : analyse des historiques d'exécution",
      "Defect prediction : corrélations code/process/people sur code base similaire — ≠ analyse statique",
      "Visual testing : compare images via IA (pas pixel-par-pixel), détecte overlapping UI elements, robuste aux changements de layout"
    ]
  },
  {
    day: 9, dateLabel: "Jour 9", focus: "Examen blanc complet n°1 + Analyse des erreurs",
    chapters: [], totalMinutes: 270,
    morning: [
      "Examen blanc 40 questions / 60 minutes (mode chronométré strict)",
      "Pause 10 min",
      "Correction question par question : tu lis ta justification + la justification officielle — 90 min"
    ],
    afternoon: [
      "Pour chaque erreur, retour au syllabus sur la section correspondante (LO indiqué dans le QCM) — 90 min",
      "Refaire les questions ratées du jour — 30 min",
      "Fiches mémoire des concepts faibles — 30 min"
    ],
    keyTakeaways: [
      "Objectif : viser ≥ 65% (26/40) au premier examen blanc",
      "Toutes les erreurs doivent être tracées vers un LO du syllabus",
      "Repérer les patterns : confusion entre concepts (ex: transparency vs interpretability vs explainability)"
    ]
  },
  {
    day: 10, dateLabel: "Jour 10", focus: "Révisions ciblées + Examen blanc n°2",
    chapters: [], totalMinutes: 300,
    morning: [
      "Révision intensive des chapitres faibles identifiés au J9 — 90 min",
      "Re-relecture des fiches mémoire de tous les chapitres — 60 min",
      "Refaire toutes les questions où tu as hésité au J9 — 30 min"
    ],
    afternoon: [
      "Examen blanc n°2 — 40 questions complémentaires (set additional + relais main) en mode chronométré",
      "Correction et analyse rapide",
      "Synthèse finale : ta carte mentale personnelle des 11 chapitres — 60 min",
      "Préparation logistique le jour J : convocation, ID, calculatrice si autorisée, bonne nuit"
    ],
    keyTakeaways: [
      "Score cible final : ≥ 75% (30/40)",
      "Stratégie le jour J : lire CHAQUE option avant de répondre, repérer les pièges (NOT, LEAST, BEST, MOST)",
      "Time management : ~1.5 min/question, marquer les questions à revoir et y revenir si temps"
    ]
  }
];

// Plan global stats
CTAI_DATA.planStats = {
  totalDays: 10,
  totalHoursMinimum: 50,
  totalHoursMaximum: 60,
  totalQuestions: 67,
  totalChapters: 11
};

// Lessons content structure for all 11 chapters
CTAI_DATA.lessonsContent = {
  1: {
    learningObjectives: [
      {
        id: "lo1.1",
        text: "Describe the AI effect and how it influences the definition of AI.",
        kLevel: "K2",
        explanation: "Understand how AI definitions change as technology evolves and human perceptions shift"
      },
      {
        id: "lo1.2",
        text: "Distinguish between narrow AI, general AI, and super AI.",
        kLevel: "K2",
        explanation: "Learn the three categories of AI and their characteristics and current state of development"
      },
      {
        id: "lo1.3",
        text: "Differentiate between AI-based systems and conventional systems.",
        kLevel: "K2",
        explanation: "Understand key differences in how AI-based and conventional systems process data and make decisions"
      },
      {
        id: "lo1.4",
        text: "Recognize the different technologies used to implement AI.",
        kLevel: "K1",
        explanation: "Identify various AI technologies including fuzzy logic, search algorithms, reasoning techniques, and machine learning"
      },
      {
        id: "lo1.5",
        text: "Identify popular AI development frameworks.",
        kLevel: "K1",
        explanation: "Know the names and characteristics of common frameworks like TensorFlow, PyTorch, Keras, and others"
      },
      {
        id: "lo1.6",
        text: "Compare the choices available for hardware to implement AI-based systems.",
        kLevel: "K2",
        explanation: "Understand differences between CPUs, GPUs, and specialized hardware for AI implementation"
      },
      {
        id: "lo1.7",
        text: "Explain the concept of AI as a Service (AIaaS).",
        kLevel: "K2",
        explanation: "Learn how AI services are delivered via cloud platforms and the implications for testing"
      },
      {
        id: "lo1.8",
        text: "Explain the use of pre-trained AI models and the risks associated with them.",
        kLevel: "K2",
        explanation: "Understand benefits and risks of using pre-trained models including bias and performance issues"
      },
      {
        id: "lo1.9",
        text: "Describe how standards apply to AI-based systems.",
        kLevel: "K2",
        explanation: "Learn about standards and regulations that apply to AI systems including GDPR and other frameworks"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  2: {
    learningObjectives: [
      {
        id: "lo2.1",
        text: "Explain the importance of flexibility and adaptability as characteristics of AI-based systems.",
        kLevel: "K2",
        explanation: "Understand how AI systems must adapt to changing environments and new situations"
      },
      {
        id: "lo2.2",
        text: "Explain the relationship between autonomy and AI-based systems.",
        kLevel: "K2",
        explanation: "Learn about the ability of systems to work independently and the testing implications"
      },
      {
        id: "lo2.3",
        text: "Explain the importance of managing evolution for AI-based systems.",
        kLevel: "K2",
        explanation: "Understand how self-learning systems evolve and the constraints needed to manage this evolution"
      },
      {
        id: "lo2.4",
        text: "Describe the different causes and types of bias found in AI-based systems.",
        kLevel: "K2",
        explanation: "Learn about algorithmic bias, sample bias, and inappropriate bias and their sources"
      },
      {
        id: "lo2.5",
        text: "Discuss the ethical principles that should be respected in the development, deployment and use of AI-based systems.",
        kLevel: "K2",
        explanation: "Understand ethical frameworks like OECD principles for responsible AI development"
      },
      {
        id: "lo2.6",
        text: "Explain the occurrence of side effects and reward hacking in AI-based systems.",
        kLevel: "K2",
        explanation: "Learn how poorly defined goals can lead to unexpected and harmful results in AI systems"
      },
      {
        id: "lo2.7",
        text: "Explain how transparency, interpretability and explainability apply to AI-based systems.",
        kLevel: "K2",
        explanation: "Understand the importance of understanding how AI systems make decisions"
      },
      {
        id: "lo2.8",
        text: "Recall the characteristics that make it difficult to use AI-based systems in safety-related applications.",
        kLevel: "K1",
        explanation: "Know the challenges of deploying AI in safety-critical domains"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  3: {
    learningObjectives: [
      {
        id: "lo3.1",
        text: "Describe classification and regression as part of supervised learning.",
        kLevel: "K2",
        explanation: "Understand how supervised learning uses labeled data for classification and regression tasks"
      },
      {
        id: "lo3.2",
        text: "Describe clustering and association as part of unsupervised learning.",
        kLevel: "K2",
        explanation: "Learn how unsupervised learning discovers patterns in unlabeled data"
      },
      {
        id: "lo3.3",
        text: "Describe reinforcement learning.",
        kLevel: "K2",
        explanation: "Understand how agents learn through interaction with environments and reward/penalty signals"
      },
      {
        id: "lo3.4",
        text: "Summarize the workflow used to create an ML system.",
        kLevel: "K2",
        explanation: "Learn the steps from problem definition through data preparation, training, and deployment"
      },
      {
        id: "lo3.5",
        text: "Given a project scenario, identify an appropriate form of ML (from classification, regression, clustering, association, or reinforcement learning).",
        kLevel: "K3",
        explanation: "Apply knowledge of ML approaches to solve specific business problems"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  4: {
    learningObjectives: [
      {
        id: "lo4.1",
        text: "Describe the activities and challenges related to data preparation.",
        kLevel: "K2",
        explanation: "Understand data cleaning, normalization, and transformation challenges in ML workflows"
      },
      {
        id: "lo4.2",
        text: "Contrast the use of training, validation and test data sets in the development of an ML model.",
        kLevel: "K2",
        explanation: "Learn the different roles and purposes of train, validation, and test datasets"
      },
      {
        id: "lo4.3",
        text: "Describe typical data set quality issues.",
        kLevel: "K2",
        explanation: "Understand common data quality problems like duplicates, missing values, and inconsistencies"
      },
      {
        id: "lo4.4",
        text: "Recognize how poor data quality can cause problems with the resultant ML model.",
        kLevel: "K2",
        explanation: "Learn the impact of data quality on model performance and reliability"
      },
      {
        id: "lo4.5",
        text: "Recall the different approaches to the labelling of data in datasets for supervised learning.",
        kLevel: "K1",
        explanation: "Know manual labeling, crowdsourcing, and automated labeling approaches"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  5: {
    learningObjectives: [
      {
        id: "lo5.1",
        text: "Calculate the ML functional performance metrics from a given set of confusion matrix data.",
        kLevel: "K3",
        explanation: "Apply confusion matrix to calculate accuracy, precision, recall, and F1-score"
      },
      {
        id: "lo5.2",
        text: "Contrast and compare the concepts behind the ML functional performance metrics for classification, regression and clustering methods.",
        kLevel: "K2",
        explanation: "Understand different metrics for different ML problem types"
      },
      {
        id: "lo5.3",
        text: "Summarize the limitations of using ML functional performance metrics to determine the quality of the ML system.",
        kLevel: "K2",
        explanation: "Learn that metrics measure only functionality, not all quality characteristics"
      },
      {
        id: "lo5.4",
        text: "Select appropriate ML functional performance metrics and/or their values for a given ML model and scenario.",
        kLevel: "K4",
        explanation: "Choose and apply appropriate metrics based on specific business requirements and use cases"
      },
      {
        id: "lo5.5",
        text: "Explain the use of benchmark suites in the context of ML system quality.",
        kLevel: "K2",
        explanation: "Understand how industry benchmarks help compare ML technologies and implementations"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  6: {
    learningObjectives: [
      {
        id: "lo6.1",
        text: "Explain the structure and function of a neural network including a DNN.",
        kLevel: "K2",
        explanation: "Understand how artificial neural networks are structured and how they process information"
      },
      {
        id: "lo6.2",
        text: "Describe the different coverage measures for neural networks.",
        kLevel: "K2",
        explanation: "Learn testing coverage metrics specific to neural networks including neuron and activation coverage"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  7: {
    learningObjectives: [
      {
        id: "lo7.1",
        text: "Explain how system specifications for AI-based systems can create challenges in testing.",
        kLevel: "K2",
        explanation: "Understand how incomplete or unclear specifications complicate AI system testing"
      },
      {
        id: "lo7.2",
        text: "Describe how AI-based systems are tested at each test level.",
        kLevel: "K2",
        explanation: "Learn testing approaches at unit, integration, system, and acceptance test levels"
      },
      {
        id: "lo7.3",
        text: "Recall those factors associated with test data that can make testing AI-based systems difficult.",
        kLevel: "K1",
        explanation: "Know challenges with test data volume, representativeness, and realistic scenarios"
      },
      {
        id: "lo7.4",
        text: "Explain automation bias and how this affects testing.",
        kLevel: "K2",
        explanation: "Understand tendency to trust automated systems and its testing implications"
      },
      {
        id: "lo7.5",
        text: "Describe the documentation of an AI component and understand how documentation supports the testing of AI-based systems.",
        kLevel: "K2",
        explanation: "Learn what documentation is needed to support effective AI system testing"
      },
      {
        id: "lo7.6",
        text: "Explain the need for frequently testing the trained model to handle concept drift.",
        kLevel: "K2",
        explanation: "Understand how model performance degrades over time and the need for continuous testing"
      },
      {
        id: "lo7.7",
        text: "For a given scenario determine a test approach to be followed when developing an ML system.",
        kLevel: "K4",
        explanation: "Design comprehensive testing strategies for ML development projects"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  8: {
    learningObjectives: [
      {
        id: "lo8.1",
        text: "Explain the challenges in testing created by the self-learning of AI-based systems.",
        kLevel: "K2",
        explanation: "Understand unpredictability and continuous evolution challenges in self-learning systems"
      },
      {
        id: "lo8.2",
        text: "Describe how autonomous AI-based systems are tested.",
        kLevel: "K2",
        explanation: "Learn testing strategies specific to systems operating independently"
      },
      {
        id: "lo8.3",
        text: "Explain how to test for bias in an AI-based system.",
        kLevel: "K2",
        explanation: "Understand approaches to detecting and testing for bias in AI models"
      },
      {
        id: "lo8.4",
        text: "Explain the challenges in testing created by the probabilistic and non-deterministic nature of AI-based systems.",
        kLevel: "K2",
        explanation: "Learn testing complexities arising from non-deterministic AI behavior"
      },
      {
        id: "lo8.5",
        text: "Explain the challenges in testing created by the complexity of AI-based systems.",
        kLevel: "K2",
        explanation: "Understand testing difficulties from system complexity and opacity"
      },
      {
        id: "lo8.6",
        text: "Describe how the transparency, interpretability and explainability of AI-based systems can be tested.",
        kLevel: "K2",
        explanation: "Learn how to verify and test AI system explanability and transparency"
      },
      {
        id: "lo8.7",
        text: "Explain the challenges in creating test oracles resulting from the specific characteristics of AI-based systems.",
        kLevel: "K2",
        explanation: "Understand the test oracle problem in AI testing"
      },
      {
        id: "lo8.8",
        text: "Select appropriate test objectives and acceptance criteria for the AI-specific quality characteristics of a given AI-based system.",
        kLevel: "K4",
        explanation: "Define quality objectives and acceptance criteria appropriate for AI system characteristics"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  9: {
    learningObjectives: [
      {
        id: "lo9.1",
        text: "Explain how the testing of ML systems can help prevent adversarial attacks and data poisoning.",
        kLevel: "K2",
        explanation: "Understand security testing approaches for ML systems"
      },
      {
        id: "lo9.2",
        text: "Explain how pairwise testing is used for AI-based systems.",
        kLevel: "K2",
        explanation: "Learn combinatorial testing techniques adapted for AI systems"
      },
      {
        id: "lo9.3",
        text: "Explain how back-to-back testing is used for AI-based systems.",
        kLevel: "K2",
        explanation: "Understand comparative testing between different versions or implementations"
      },
      {
        id: "lo9.4",
        text: "Explain how A/B testing is applied to the testing of AI-based systems.",
        kLevel: "K2",
        explanation: "Learn statistical testing methods for comparing AI model variants"
      },
      {
        id: "lo9.5",
        text: "Apply metamorphic testing for the testing of AI-based systems.",
        kLevel: "K3",
        explanation: "Use metamorphic relations to test AI systems without explicit test oracles"
      },
      {
        id: "lo9.6",
        text: "Explain how experience-based testing can be applied to the testing of AI-based systems.",
        kLevel: "K2",
        explanation: "Learn exploratory and experience-based testing techniques for AI"
      },
      {
        id: "lo9.7",
        text: "For a given scenario, select appropriate test techniques when testing an AI-based system.",
        kLevel: "K4",
        explanation: "Choose and apply suitable testing techniques based on specific AI system characteristics"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  10: {
    learningObjectives: [
      {
        id: "lo10.1",
        text: "Describe the main factors that differentiate the test environments for AI-based systems from those required for conventional systems.",
        kLevel: "K2",
        explanation: "Understand specific environmental requirements for testing AI systems"
      },
      {
        id: "lo10.2",
        text: "Describe the benefits provided by virtual test environments in the testing of AI-based systems.",
        kLevel: "K2",
        explanation: "Learn advantages of using simulation and virtualization for AI system testing"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  },
  11: {
    learningObjectives: [
      {
        id: "lo11.1",
        text: "Categorize the AI technologies used in software testing.",
        kLevel: "K2",
        explanation: "Understand fuzzy logic, classification/learning, and computational search techniques in testing"
      },
      {
        id: "lo11.2",
        text: "Explain how AI can assist in supporting the analysis of new defects.",
        kLevel: "K2",
        explanation: "Learn how AI can aid in defect triage, categorization, and prioritization"
      },
      {
        id: "lo11.3",
        text: "Explain how AI can assist in test case generation.",
        kLevel: "K2",
        explanation: "Understand how AI can generate test cases automatically"
      },
      {
        id: "lo11.4",
        text: "Explain how AI can assist in optimization of regression test suites.",
        kLevel: "K2",
        explanation: "Learn how AI optimizes test selection for regression testing"
      },
      {
        id: "lo11.5",
        text: "Explain how AI can assist in defect prediction.",
        kLevel: "K2",
        explanation: "Understand predictive models for identifying potentially defective code"
      },
      {
        id: "lo11.6",
        text: "Explain the use of AI in testing user interfaces.",
        kLevel: "K2",
        explanation: "Learn how AI supports visual testing and UI testing automation"
      }
    ],
    lessonText: "",
    visualSummary: "",
    useCases: "",
    mnemonics: ""
  }
};
