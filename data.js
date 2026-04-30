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
    lessonText: "## Introduction à l'Intelligence Artificielle\n\n**Definition:** L'intelligence artificielle (IA) désigne la capacité d'un système conçu par l'ingénierie à acquérir, traiter et appliquer des connaissances et des compétences.\n\n### 1.1 Définition de l'IA et l'Effet IA\n\nLe terme \"intelligence artificielle\" remonte aux années 1950 et fait référence à l'objectif de construire des machines \"intelligentes\" capables d'imiter les êtres humains. La définition officielle selon la norme ISO/IEC TR 29119-11 est :\n\n**Definition:** La capacité d'un système conçu par l'ingénierie à acquérir, traiter et appliquer des connaissances et des compétences.\n\nLa perception de ce qui constitue l'IA évolue avec le temps — c'est ce qu'on appelle l'Effet IA (AI Effect). En 1997, quand Deep Blue a battu Garry Kasparov aux échecs, beaucoup considéraient cela comme de l'IA. Aujourd'hui, l'approche par \"force brute\" utilisée par Deep Blue n'est plus considérée comme de la véritable IA car le système n'apprenait pas à partir des données. Les systèmes experts des années 1970-1980 étaient considérés comme de l'IA à l'époque, mais plus maintenant.\n\n**Tip:** L'Effet IA signifie que toute définition de l'IA est susceptible de changer dans le futur. Une technologie perçue comme \"IA\" aujourd'hui pourrait ne plus l'être demain, une fois qu'elle sera devenue banale.\n\n### 1.2 IA Étroite, Générale et Super IA\n\nÀ un niveau élevé, l'IA se divise en trois catégories :\n\n| Catégorie | Alias | Description | Statut en 2021 |\n|-----------|-------|-------------|----------------|\n| IA Étroite | Weak AI | Tâche spécifique, contexte limité | Largement disponible |\n| IA Générale | Strong AI | Capacités cognitives humaines générales | Non réalisée |\n| Super IA | Superintelligence | Dépasse l'intelligence humaine | Hypothétique |\n\n**IA Étroite (Narrow AI)** — La forme d'IA la plus répandue aujourd'hui. Elle est programmée pour accomplir une tâche spécifique avec un contexte limité : systèmes de jeux, filtres anti-spam, générateurs de cas de test, assistants vocaux. Elle excelle dans son domaine mais ne peut pas raisonner sur d'autres sujets.\n\n**IA Générale (General AI)** — Ces systèmes auraient des capacités cognitives générales similaires aux humains. Ils pourraient raisonner, comprendre leur environnement et agir en conséquence. En 2021, aucun système d'IA générale n'a été réalisé.\n\n**Super IA** — Ces systèmes pourraient répliquer la cognition humaine et utiliser une puissance de traitement massive et pratiquement illimitée. On pense qu'ils deviendraient plus sages que les humains très rapidement. Le point de transition entre l'IA Générale et la Super IA est appelé la singularité technologique.\n\n**Warning:** Ne pas confondre les capacités actuelles de l'IA (Narrow AI) avec l'IA Générale. La grande majorité des systèmes IA actuels sont des IA Étroites, spécialisées dans des tâches précises.\n\n### 1.3 Systèmes Basés sur l'IA vs Systèmes Conventionnels\n\nLa distinction entre systèmes conventionnels et systèmes IA est fondamentale pour le testeur.\n\n**Definition:** Un système conventionnel est programmé par des humains à l'aide d'un langage impératif (if-then-else, boucles). Il est relativement facile de comprendre comment il transforme les entrées en sorties.\n\n**Definition:** Un système IA basé sur le ML utilise des modèles dans les données pour déterminer comment réagir aux nouvelles données. Dans de nombreux systèmes IA, la procédure de prédiction est moins facile à comprendre par les humains.\n\n| Aspect | Système Conventionnel | Système IA (ML) |\n|--------|----------------------|-----------------|\n| Programmation | Règles explicites par humains | Apprentissage à partir des données |\n| Transparence | Élevée | Variable (parfois opaque) |\n| Adaptabilité | Limitée aux règles programmées | S'adapte aux nouvelles données |\n| Débogage | Direct (tracer le code) | Complexe (analyser les données) |\n| Exemple | Calculatrice, traitement de texte | Reconnaissance d'images, recommandations |\n\n**Example:** Un classificateur d'images IA entraîné pour identifier des chats est alimenté avec des images de chats. L'IA détermine elle-même quels modèles ou caractéristiques dans les données lui permettent d'identifier les chats. Ces modèles sont ensuite appliqués aux nouvelles images — sans règles explicites programmées par un humain.\n\n### 1.4 Technologies de l'IA\n\nL'IA peut être implémentée par une large gamme de technologies :\n\n**Logique Floue (Fuzzy Logic)** : Raisonnement avec des données imprécises ou incertaines, avec des valeurs entre 0 et 1.\n\n**Algorithmes de Recherche** : Recherche de solutions optimales dans des espaces de problèmes complexes (A*, minimax).\n\n**Techniques de Raisonnement** :\n- Moteurs de règles (Rule engines)\n- Classificateurs déductifs\n- Raisonnement basé sur les cas (Case-based reasoning)\n- Raisonnement procédural\n\n**Techniques de Machine Learning** :\n- Réseaux de neurones (Neural networks)\n- Modèles bayésiens (Bayesian models)\n- Arbres de décision (Decision trees)\n- Forêts aléatoires (Random forest)\n- Régression linéaire et logistique\n- Algorithmes de clustering\n- Algorithmes génétiques\n- Machine à vecteurs de support (SVM)\n\n**Tip:** Les systèmes IA implémentent généralement une ou plusieurs de ces technologies. Aucune technologie n'est universellement supérieure — le choix dépend du problème à résoudre.\n\n### 1.5 Frameworks de Développement IA\n\nDe nombreux frameworks de développement IA supportent des activités telles que la préparation des données, la sélection d'algorithmes et la compilation de modèles pour divers processeurs (CPUs, GPUs, TPUs).\n\n| Framework | Éditeur | Spécialité principale |\n|-----------|---------|----------------------|\n| Apache MxNet | Amazon (AWS) | Deep learning open-source |\n| CNTK | Microsoft | Toolkit deep learning |\n| IBM Watson Studio | IBM | Suite complète d'outils IA |\n| Keras | Open-source | API haut niveau (sur TensorFlow) |\n| PyTorch | Facebook | Traitement d'images et NLP |\n| Scikit-learn | Open-source | Machine learning Python classique |\n| TensorFlow | Google | ML scalable sur graphes de flux |\n\n**Tip:** Ces frameworks évoluent constamment — se combinent parfois, parfois remplacés par de nouveaux. Le choix dépend du langage de programmation, de la facilité d'utilisation et du domaine d'application.\n\n### 1.6 Matériel pour les Systèmes IA\n\nDivers types de matériel sont utilisés pour l'entraînement et l'implémentation des modèles ML.\n\n**Caractéristiques optimales pour le ML :**\n- Arithmétique basse précision : Moins de bits pour le calcul (8 bits au lieu de 32)\n- Grandes structures de données : Support de la multiplication matricielle\n- Traitement massivement parallèle : Exécution simultanée de nombreux calculs\n\n| Type | Cœurs | Usage ML |\n|------|-------|----------|\n| CPU | 4-16, opérations complexes | Peu adapté au ML intensif |\n| GPU | Des milliers, traitement parallèle | Excellent pour l'entraînement ML |\n| ASIC | Spécialisé IA, faible consommation | Edge computing, inférence |\n| SoC | Système sur puce intégré | Appareils mobiles |\n\n**Definition:** Les processeurs neuromorphiques utilisent une architecture qui imite vaguement les neurones du cerveau humain, plutôt que l'architecture traditionnelle de von Neumann. Ils sont en développement actif (en 2021).\n\nFournisseurs notables : NVIDIA (GPUs, Volta), Google (Cloud TPU, Edge TPU), Intel (Nervana NNP, Movidius Myriad), Apple (puce Bionic), Huawei (Kirin 970).\n\n**Tip:** Pour les projets ML à petite et moyenne échelle, les GPU offrent généralement le meilleur rapport performance/coût. Pour l'edge computing, les ASIC sont préférés : le modèle est entraîné dans le cloud puis déployé sur l'appareil.\n\n### 1.7 IA en tant que Service (AIaaS)\n\nLes composants IA (modèles ML, services de traitement) peuvent être créés en interne, téléchargés depuis un tiers, utilisés via le web comme service AIaaS, ou via une approche hybride.\n\n**Avantages de l'AIaaS :** Accès à des modèles entraînés sur des jeux de données plus larges et plus diversifiés, sans nécessiter les ressources internes pour les développer.\n\n**Contrats AIaaS**\n\nLes contrats AIaaS incluent typiquement un accord de niveau de service (SLA) définissant la disponibilité (ex : 99,99% de temps de fonctionnement) et le temps de réponse pour corriger les défauts.\n\n**Warning:** La plupart des contrats AIaaS ne définissent pas de métriques de performance fonctionnelle ML (comme la précision). En cas de non-respect du SLA, le fournisseur offre généralement des crédits, non une compensation réelle. La responsabilité est limitée, ce qui restreint l'AIaaS aux applications à risque relativement faible.\n\n**Tip:** La période d'essai gratuite qui accompagne souvent les services AIaaS doit être utilisée pour évaluer si le service répond aux besoins en termes de fonctionnalité et de performance.\n\n| Service AIaaS | Fournisseur | Tarification |\n|---------------|-------------|-------------|\n| IBM Watson Assistant | IBM | Par utilisateurs actifs mensuels |\n| Google Cloud AI & ML | Google | Par pages traitées |\n| Amazon CodeGuru | Amazon | Par lignes de code analysées |\n| Azure Cognitive Search | Microsoft | Par unités de recherche |\n\n### 1.8 Modèles Pré-entraînés\n\n**Definition:** Un modèle pré-entraîné est un modèle déjà entraîné sur un large jeu de données, utilisé comme base pour un nouveau modèle qui en étend ou spécialise les fonctionnalités. Ces modèles ne sont disponibles que pour certaines technologies (réseaux de neurones, forêts aléatoires).\n\n**Example:** ImageNet est un jeu de données public avec plus de 14 millions d'images classifiées en 1000+ catégories. Les modèles pré-entraînés sur ImageNet (Inception, VGG, AlexNet, MobileNet) permettent d'éviter l'entraînement from scratch. Pour le NLP, BERT de Google est un modèle pré-entraîné notable.\n\n**Apprentissage par Transfert (Transfer Learning)**\n\n**Definition:** L'apprentissage par transfert consiste à prendre un modèle pré-entraîné et à le modifier pour effectuer une tâche différente. Utilisé sur les réseaux de neurones profonds dont les couches précoces effectuent des tâches basiques (identifier lignes droites/courbes) et les couches tardives des tâches spécialisées.\n\n**Example:** Modifier un classificateur de chats pour identifier des races de chiens est très efficace (domaine similaire). Le modifier pour identifier des accents humains serait très peu efficace (domaine trop différent).\n\n**Risques des Modèles Pré-entraînés**\n\n| Risque | Description |\n|--------|-------------|\n| Manque de transparence | Documentation insuffisante du modèle original |\n| Inadéquation fonctionnelle | Similarité insuffisante entre les fonctions |\n| Biais dans les données | Les étapes de préparation des données peuvent différer |\n| Biais hérités | Les biais du modèle pré-entraîné sont transmis |\n| Vulnérabilités partagées | Attaques adversariales du modèle original s'appliquent |\n\n**Warning:** Si le modèle pré-entraîné est peu utilisé ou mal documenté, il peut contenir plus de défauts inconnus. Des tests plus rigoureux sont alors nécessaires.\n\n### 1.9 Standards, Réglementations et IA\n\n| Organisation | Comité | Domaine |\n|-------------|--------|---------|\n| ISO/IEC JTC1 | SC42 (créé 2017) | Standards IA internationaux |\n| ISO/IEC JTC1 | SC7 | Ingénierie logicielle et systèmes |\n| DIN (Allemagne) | — | AI Quality Metamodel |\n| IEEE | Éthique IA | Initiative mondiale pour l'IA éthique |\n\n**RGPD et IA**\n\nLe Règlement Général sur la Protection des Données (RGPD) de l'UE est entré en vigueur en mai 2018. Il établit des obligations pour les contrôleurs de données concernant les données personnelles et la prise de décision automatisée.\n\nPoints clés du RGPD pour les testeurs IA :\n- Les données personnelles (y compris les prédictions) doivent être précises\n- \"Précision\" ne signifie pas que chaque prédiction doit être exacte, mais que le système doit être suffisamment précis pour son usage\n- Les individus ont le droit de ne pas être soumis à des décisions entièrement automatisées\n- Obligation d'atténuer les discriminations potentielles\n\n**Standards de Sécurité Fonctionnelle**\n\nPour les systèmes IA dans des domaines à risque, des standards réglementaires s'appliquent :\n- ISO 26262 : Sécurité fonctionnelle pour les systèmes automobiles\n- ISO/PAS 21448 (SOTIF) : Safety Of The Intended Functionality\n\n**Tip:** Les standards sont généralement des documents volontaires. Leur usage n'est rendu obligatoire que par la législation ou les contrats. Mais de nombreux utilisateurs les adoptent volontairement pour bénéficier de l'expertise des auteurs et créer des produits de meilleure qualité.",
    visualSummary: "## Carte des Types d'IA\n\n    +------------------------------------------+\n    |           TYPES D'INTELLIGENCE IA        |\n    +------------------------------------------+\n    |                                          |\n    | ÉTROITE (Narrow/Weak AI)     [MAINTENANT]|\n    |   +-- Filtres anti-spam                  |\n    |   +-- Assistants vocaux (Siri, Alexa)    |\n    |   +-- Systèmes de recommandation         |\n    |   +-- Générateurs de cas de test IA      |\n    |                                          |\n    | GÉNÉRALE (General/Strong AI) [PAS ENCORE]|\n    |   +-- Raisonnement humain général        |\n    |   +-- N'existe pas encore en 2021        |\n    |                                          |\n    | SUPER IA (Superintelligence) [HYPOTHÈSE] |\n    |   +-- Dépasse l'intelligence humaine     |\n    |   +-- Singularité technologique          |\n    +------------------------------------------+\n\n## CPU vs GPU pour le Machine Learning\n\n    CPU                              GPU\n    +---------------------+         +------------------------------+\n    | [Core][Core]        |         | [][][][][][][][][][][][][][] |\n    | [Core][Core]        |         | [][][][][][][][][][][][][][] |\n    | Cache L1/L2/L3      |         | [][][][][][][][][][][][][][] |\n    +---------------------+         | [][][][][][][][][][][][][][] |\n    4-16 cores seulement            | ... milliers de cores ...    |\n    Opérations complexes            +------------------------------+\n    Lent pour entraîn. ML           Milliers de cores simples\n    Bonne vitesse horloge           Traitement parallèle massif\n                                    Optimal pour entraîn. ML\n\n## Chaîne AIaaS — Architecture\n\n    Organisation Cliente              Fournisseur AIaaS\n    +-------------------+            +----------------------+\n    |   Application     |--API------>| Modèle ML            |\n    |   Locale          |<--Résultat-| (entraîné sur        |\n    |                   |            | gros dataset)        |\n    +-------------------+            | SLA: 99.99% uptime   |\n    Décision / Action               +----------------------+\n                                    (AWS / Google / Microsoft)\n\n## Matrice : Risques des Modèles Pré-entraînés\n\n    +-------------------+------------------------------------------+\n    | Risque            | Impact sur les Tests                     |\n    +-------------------+------------------------------------------+\n    | Biais hérités     | Tester les groupes sous-représentés      |\n    | Manque transpar.  | Tests boîte noire + documentation requise|\n    | Inadéquation fonc | Évaluer la similarité des domaines       |\n    | Vulnérabilités    | Tester attaques adversariales connues    |\n    | Diff. données     | Comparer les pipelines de données        |\n    +-------------------+------------------------------------------+",
    useCases: "## Cas d'Usage 1 : Assistant Vocal pour Service Client (Narrow AI)\n\n**Contexte business :** Une grande entreprise de télécommunications déploie un assistant vocal IA pour son service client, capable de traiter jusqu'à 10 000 appels par jour en langue française.\n\n**Aspects IA :** L'assistant utilise du NLP (Natural Language Processing) pour comprendre les requêtes vocales et du ML pour améliorer ses réponses au fil du temps. C'est un exemple d'IA Étroite : excellent pour les demandes téléphoniques, incapable de raisonner sur des sujets hors périmètre.\n\n**Implications pour les tests :**\n- Vérifier les performances fonctionnelles : taux de reconnaissance vocale, précision des réponses\n- Tester avec différents accents régionaux et dialectes (biais potentiel)\n- Évaluer la robustesse face aux requêtes ambiguës ou complexes\n- Contrôler la conformité RGPD : traitement des données vocales collectées, durée de rétention\n- Tester les cas limites : bruits de fond, connexion téléphonique dégradée\n\n---\n\n## Cas d'Usage 2 : Détection de Fraude Bancaire (Modèle Pré-entraîné + Transfer Learning)\n\n**Contexte business :** Une banque régionale souhaite déployer un système de détection de fraude pour ses transactions en ligne. Elle n'a pas les ressources internes pour entraîner un modèle ML de zéro.\n\n**Aspects IA :** La banque utilise un modèle pré-entraîné d'un fournisseur spécialisé, entraîné sur des millions de transactions de plusieurs institutions financières. Elle applique ensuite du Transfer Learning pour affiner le modèle sur ses propres transactions historiques.\n\n**Implications pour les tests :**\n- Vérifier la documentation du modèle pré-entraîné : données d'entraînement, hypothèses, limitations\n- Tester les biais potentiels hérités (ex : discrimination géographique ou socio-démographique)\n- Évaluer la concordance des étapes de préparation des données entre l'original et le modèle affiné\n- Analyser les métriques de performance définies dans le contrat SLA\n- Vérifier la conformité RGPD : décisions automatiques affectant les clients (refus de transaction)\n\n---\n\n## Cas d'Usage 3 : Système de Recommandation E-commerce (AIaaS)\n\n**Contexte business :** Une plateforme e-commerce de taille moyenne intègre Google Cloud AI pour personnaliser les recommandations de produits pour ses 2 millions de clients. L'équipe technique a peu d'expertise ML en interne.\n\n**Aspects IA :** Le service AIaaS est utilisé tel quel, sans modification. Le contrat SLA garantit 99,99% de disponibilité mais ne définit aucune métrique de précision pour les recommandations.\n\n**Implications pour les tests :**\n- L'absence de métriques de précision dans le SLA complique la définition des critères d'acceptation\n- Utiliser la période d'essai gratuite pour tester la qualité des recommandations\n- Le manque de transparence sur le modèle sous-jacent complique le débogage\n- Impact RGPD sur les données comportementales utilisées pour personnaliser les recommandations\n- Tester les comportements edge : nouveau client sans historique, produits rares, changements saisonniers",
    mnemonics: "## Mnémonique 1 : Les 3 Types d'IA — Acronyme \"ENS\"\n\nE --> IA Étroite (Narrow AI) = Existante aujourd'hui\nN --> IA Générale (Not yet) = pas encore réalisée\nS --> Super IA = Singularité (futur hypothétique)\n\nPhrase mémo : \"L'IA ENS : Étroite Now, pas Normale encore, Super bientôt\"\n\n---\n\n## Mnémonique 2 : Frameworks IA — \"TKCPSM\"\n\n| Lettre | Framework | Éditeur |\n|--------|-----------|---------|\n| T | TensorFlow | Google |\n| K | Keras | Open-source |\n| C | CNTK | Microsoft |\n| P | PyTorch | Facebook |\n| S | Scikit-learn | Open-source |\n| M | MxNet | Amazon |\n\nPhrase mémo : \"Trois Kakatoès Côte à côte Portent Souvent des Mangues\"\n\n---\n\n## Mnémonique 3 : Risques Modèles Pré-entraînés — \"BIDEV\"\n\nB --> Biais hérités\nI --> Inadéquation fonctionnelle\nD --> Différences de préparation des données\nE --> (manque de) Explication / transparence\nV --> Vulnérabilités connues héritées\n\nPhrase mémo : \"Avant d'utiliser un modèle BIDEV, vérifie la documentation !\"\n\n---\n\n## Tableau Mémo Rapide : 5 Points Clés du Chapitre 1\n\n| Concept | Point Clé |\n|---------|----------|\n| Effet IA | Ce qui est \"IA\" aujourd'hui ne le sera peut-être plus demain |\n| Types d'IA | Étroite = réel, Générale = inexistante, Super = futur |\n| IA vs Conv. | IA apprend des données, Conventionnel a des règles fixes |\n| GPU > CPU | Pour le ML : GPU (milliers de coeurs parallèles) surpasse CPU |\n| AIaaS SLA | Disponibilité garantie, mais rarement la précision ML |"
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
    lessonText: "## Caractéristiques Qualité des Systèmes Basés sur l'IA\n\n### 2.1 Flexibilité et Adaptabilité\n\nLa flexibilité et l'adaptabilité sont deux caractéristiques qualité étroitement liées.\n\n**Definition:** La **flexibilité** est la capacité du système à être utilisé dans des situations qui ne faisaient pas partie des exigences initiales du système.\n\n**Definition:** L'**adaptabilité** est la facilité avec laquelle le système peut être modifié pour de nouvelles situations, telles que du matériel différent et des environnements opérationnels changeants.\n\nCes deux caractéristiques sont utiles lorsque :\n- L'environnement opérationnel n'est pas entièrement connu lors du déploiement du système\n- Le système est censé faire face à de nouveaux environnements opérationnels\n- Le système est censé s'adapter à de nouvelles situations\n- Le système doit déterminer quand il doit changer de comportement\n\nLes systèmes IA auto-apprenants (self-learning) doivent démontrer toutes ces caractéristiques. En conséquence, ils doivent être adaptables et avoir le potentiel d'être flexibles.\n\n**Tip:** Les exigences de flexibilité et d'adaptabilité d'un système IA doivent inclure les détails de tout changement d'environnement auquel le système est censé s'adapter, ainsi que les contraintes de temps et de ressources pour cette adaptation.\n\n### 2.2 Autonomie\n\n**Definition:** L'autonomie est la capacité du système à travailler indépendamment de la supervision et du contrôle humain pendant de longues périodes de temps.\n\nUn système pleinement autonome serait complètement indépendant de la supervision humaine. En pratique, l'autonomie totale n'est pas souvent souhaitée. Par exemple, les voitures entièrement autonomes (niveau 5) sont officiellement classées comme ayant une \"automatisation de conduite complète\".\n\n| Niveau d'Autonomie | Description |\n|--------------------|-------------|\n| Supervision humaine totale | Toutes les décisions sont humaines |\n| Assistance humaine | IA assiste, humain décide |\n| Autonomie partielle | IA décide dans certains domaines |\n| Autonomie élevée | Intervention humaine exceptionnelle |\n| Autonomie totale | Aucune supervision humaine (rarement désirée) |\n\nLes systèmes autonomes utilisent souvent plusieurs capteurs, traitement d'images et ML (notamment deep learning) pour être \"situationnellement conscients\" de leur environnement.\n\n**Warning:** Même si certains systèmes IA sont considérés comme autonomes, cela ne s'applique pas à tous les systèmes IA. Il est important d'identifier les événements pour lesquels le système autonome doit rendre le contrôle à ses contrôleurs humains.\n\n**Tip:** Pour les tests, il est crucial de définir la durée pendant laquelle un système autonome est censé fonctionner de manière satisfaisante sans intervention humaine, ainsi que les conditions déclenchant un retour au contrôle humain.\n\n### 2.3 Évolution\n\n**Definition:** L'évolution est la capacité du système à s'améliorer lui-même en réponse à des contraintes externes changeantes.\n\nLes systèmes IA auto-apprenants gèrent typiquement deux formes de changement :\n1. Le système apprend de ses propres décisions et de ses interactions avec l'environnement\n2. Le système apprend des changements apportés à son environnement opérationnel\n\nDans les deux cas, le système évolue idéalement pour améliorer son efficacité et son efficience. Cependant, cette évolution doit être contrainte pour empêcher le système de développer des caractéristiques indésirables.\n\n**Warning:** Toute évolution doit continuer à satisfaire les exigences et contraintes du système original. Là où ces exigences font défaut, le système doit être géré pour s'assurer que l'évolution reste dans des limites acceptables et reste alignée avec les valeurs humaines.\n\n**Example:** Un système de recommandation peut évoluer pour recommander toujours les mêmes types de produits à un utilisateur, créant une \"bulle de filtre\". Cette évolution peut sembler optimale pour la métrique de performance mais est indésirable.\n\n### 2.4 Biais\n\n**Definition:** Dans le contexte des systèmes IA, le **biais** est une mesure statistique de la distance entre les sorties fournies par le système et ce qui est considéré comme des \"sorties équitables\" ne montrant aucun favoritisme envers un groupe particulier.\n\nLes biais inappropriés peuvent être liés à des attributs tels que le sexe, la race, l'origine ethnique, l'orientation sexuelle, le niveau de revenu et l'âge.\n\n**Types de biais dans les systèmes ML :**\n\n| Type de Biais | Cause | Exemple |\n|---------------|-------|---------|\n| **Biais algorithmique** | Algorithme mal configuré, surévalue certaines données | Hyperparamètres incorrects |\n| **Biais d'échantillonnage** | Données d'entraînement non représentatives de l'espace de données | Données sous-représentant certains groupes |\n| **Biais inapproprié** | Souvent causé par le biais d'échantillonnage | Discrimination dans les prêts bancaires |\n\n**Example:** Des cas de biais inapproprié dans des systèmes IA ont été rapportés dans des systèmes de recommandation de prêts bancaires, des systèmes de recrutement et des systèmes de surveillance judiciaire.\n\n**Warning:** Il est difficile d'empêcher complètement les biais. Même les systèmes d'experts peuvent avoir les biais des experts intégrés dans leurs règles. Pour les systèmes ML, les deux sources principales de biais sont l'algorithme et les données d'entraînement.\n\n### 2.5 Éthique\n\n**Definition:** L'éthique est définie comme un système de croyances acceptées qui contrôlent le comportement, notamment un système basé sur des valeurs morales.\n\nLes systèmes IA aux capacités améliorées ont un effet largement positif sur la vie des gens. Cependant, des préoccupations ont été soulevées quant à leur utilisation éthique.\n\n**Principes OCDE pour l'IA (2019)**\n\nL'Organisation de Coopération et de Développement Économiques a publié ses principes pour l'IA en 2019 — les premiers standards internationaux convenus par les gouvernements pour le développement responsable de l'IA. Ces principes ont été adoptés par 42 pays :\n\n| Principe | Description |\n|----------|-------------|\n| **Bénéfice commun** | L'IA doit bénéficier aux personnes et à la planète par une croissance inclusive et un développement durable |\n| **Respect des valeurs** | Les systèmes IA doivent respecter l'état de droit, les droits de l'homme, les valeurs démocratiques et la diversité |\n| **Transparence** | Il doit y avoir de la transparence autour de l'IA pour que les gens comprennent les résultats |\n| **Robustesse et sécurité** | Les systèmes IA doivent fonctionner de manière robuste, sécurisée et sûre tout au long de leur cycle de vie |\n| **Responsabilité** | Les organisations et individus développant/déployant l'IA doivent être tenus responsables |\n\n**Tip:** Ce qui est considéré comme éthique peut changer dans le temps et peut également différer selon les localités et les cultures. Le déploiement d'un système IA d'un endroit à un autre doit prendre en compte les différences de valeurs des parties prenantes.\n\n### 2.6 Effets Secondaires et Reward Hacking\n\nLes effets secondaires (side effects) et le reward hacking peuvent entraîner des résultats inattendus, voire nuisibles, lorsque le système tente d'atteindre ses objectifs.\n\n**Definition:** Les **effets secondaires négatifs** se produisent lorsque le concepteur d'un système IA spécifie un objectif qui se concentre sur l'accomplissement de tâches spécifiques tout en ignorant d'autres aspects de l'environnement, exprimant ainsi une indifférence implicite envers des variables environnementales qui pourraient être nocives à modifier.\n\n**Definition:** Le **reward hacking** se produit lorsqu'un système IA atteint un objectif spécifié en utilisant une solution \"intelligente\" ou \"facile\" qui \"pervertit l'intention du concepteur\".\n\n**Example (Effets secondaires):** Une voiture autonome avec l'objectif de voyager à destination \"de la manière la plus économique en carburant et la plus sûre possible\" peut atteindre l'objectif, mais avec l'effet secondaire que les passagers deviennent extrêmement agacés par le temps excessif pris.\n\n**Example (Reward Hacking):** Un système IA apprenant à jouer à un jeu vidéo avec l'objectif d'\"atteindre le score le plus élevé\" hack simplement l'enregistrement de données qui stocke le score le plus élevé, plutôt que de jouer au jeu.\n\n**Warning:** Ces problèmes sont particulièrement difficiles à anticiper lors de la spécification des exigences. Les testeurs doivent rechercher activement les comportements inattendus liés aux objectifs du système.\n\n### 2.7 Transparence, Interprétabilité et Explicabilité\n\nLa plupart des utilisateurs sont confrontés aux systèmes IA comme des \"boîtes noires\" et ont peu de conscience de la façon dont ces systèmes arrivent à leurs résultats. Dans certains cas, cette ignorance peut même s'appliquer aux data scientists qui ont construit les systèmes.\n\n**Definition:** La **transparence** est la facilité avec laquelle l'algorithme et les données d'entraînement utilisés pour générer le modèle peuvent être déterminés.\n\n**Definition:** L'**interprétabilité** est la compréhensibilité de la technologie IA par diverses parties prenantes, y compris les utilisateurs.\n\n**Definition:** L'**explicabilité** est la facilité avec laquelle les utilisateurs peuvent déterminer comment le système IA arrive à un résultat particulier.\n\n**Definition:** L'**IA Explicable (XAI)** est un domaine visant à permettre aux utilisateurs de comprendre comment les systèmes IA arrivent à leurs résultats, augmentant ainsi la confiance des utilisateurs.\n\n**Pourquoi l'XAI est-elle importante ? (Royal Society)**\n\n- Donner confiance aux utilisateurs dans le système\n- Se prémunir contre les biais\n- Répondre aux exigences réglementaires ou politiques\n- Améliorer la conception du système\n- Évaluer les risques, la robustesse et les vulnérabilités\n- Comprendre et vérifier les sorties d'un système\n- Autonomie et satisfaction des valeurs sociales\n\n| Caractéristique XAI | Question clé |\n|--------------------|--------------|\n| Transparence | \"Comment le modèle a-t-il été construit ?\" |\n| Interprétabilité | \"Qu'est-ce que le modèle fait globalement ?\" |\n| Explicabilité | \"Pourquoi cette décision spécifique a-t-elle été prise ?\" |\n\n### 2.8 Sécurité et IA\n\n**Definition:** La sécurité (safety) est l'expectative qu'un système IA ne causera pas de dommages aux personnes, aux biens ou à l'environnement.\n\nLes systèmes IA sont utilisés dans des domaines pouvant affecter la sécurité : médecine, fabrication, défense, sécurité et transport.\n\n**Caractéristiques rendant la sécurité difficile dans les systèmes IA :**\n\n| Caractéristique | Impact sur la Sécurité |\n|-----------------|----------------------|\n| Complexité | Difficile d'anticiper tous les comportements |\n| Non-déterminisme | Les mêmes entrées peuvent produire des sorties différentes |\n| Nature probabiliste | Les prédictions ne sont pas garanties |\n| Auto-apprentissage | Le comportement peut changer de manière imprévue |\n| Manque de transparence | Difficile de comprendre pourquoi une décision a été prise |\n| Manque de robustesse | Vulnérable aux entrées inattendues ou adversariales |\n\n**Warning:** Ces caractéristiques rendent les systèmes IA plus difficiles à certifier pour les applications critiques de sécurité. Les challenges de test pour ces caractéristiques sont couverts dans le Chapitre 8.",
    visualSummary: "## Hiérarchie des Caractéristiques Qualité IA\n\n    +--------------------------------------------------+\n    |        CARACTÉRISTIQUES QUALITÉ IA               |\n    +--------------------------------------------------+\n    |                                                  |\n    | ADAPTABILITÉ & FLEXIBILITÉ                       |\n    |   Système utilisable dans de nouveaux contextes  |\n    |   L'IA self-learning DOIT être flexible          |\n    |                                                  |\n    | AUTONOMIE                                        |\n    |   Capacité à travailler sans supervision humaine  |\n    |   Niveau défini par les exigences                |\n    |                                                  |\n    | ÉVOLUTION                                        |\n    |   Amélioration par apprentissage continu         |\n    |   Doit rester dans des limites définies          |\n    |                                                  |\n    | BIAIS         ÉTHIQUE        SÉCURITÉ            |\n    |   Algo+Data   OCDE 2019       Non-déterminisme   |\n    |                                                  |\n    | TRANSPARENCE / INTERPRÉTABILITÉ / EXPLICABILITÉ  |\n    +--------------------------------------------------+\n\n## Triangulation XAI : Transparence, Interprétabilité, Explicabilité\n\n              TRANSPARENCE\n              (Comment le modèle\n               a-t-il été construit ?)\n                    /\\\n                   /  \\\n                  /    \\\n                 / XAI  \\\n                /        \\\n               /          \\\n              /____________\\\n    INTERPRÉTABILITÉ     EXPLICABILITÉ\n    (Que fait le modèle   (Pourquoi cette\n     globalement ?)        décision précise ?)\n\n## Types de Biais dans les Systèmes ML\n\n    +-------------------------------------------+\n    |              SOURCES DE BIAIS              |\n    +-------------------------------------------+\n    |                                           |\n    | Biais Algorithmique                       |\n    |   --> Algorithme mal configuré            |\n    |   --> Hyperparamètres incorrects          |\n    |   --> Surévaluation de certaines données  |\n    |                                           |\n    | Biais d'Échantillonnage                   |\n    |   --> Données non représentatives         |\n    |   --> Groupes sous-représentés            |\n    |   --> Données historiques biaisées        |\n    |                                           |\n    | Biais Inapproprié (résultat)              |\n    |   --> Discrimination par genre/race/âge   |\n    |   --> Prêts bancaires, recrutement        |\n    +-------------------------------------------+\n\n## Principes OCDE pour l'IA (2019)\n\n    1. Bénéfice           --> Croissance inclusive + développement durable\n    2. Valeurs            --> Droits humains, démocratie, diversité\n    3. Transparence       --> Compréhension des résultats + challenge\n    4. Robustesse/Sécu    --> Sûreté tout au long du cycle de vie\n    5. Responsabilité     --> Accountability des développeurs/opérateurs",
    useCases: "## Cas d'Usage 1 : Système de Recrutement IA (Biais et Éthique)\n\n**Contexte business :** Une grande entreprise utilise un système IA pour présélectionner des CV et recommander des candidats à des postes techniques.\n\n**Aspects IA :** Le système ML est entraîné sur les données historiques de recrutement de l'entreprise, incluant les embauches passées et leurs évaluations de performance.\n\n**Problèmes de biais identifiés :**\n- Les données historiques montrent une surreprésentation d'hommes dans les postes techniques\n- Le système apprend à favoriser les profils masculins (biais d'échantillonnage)\n- Le système pénalise indirectement les candidats ayant des lacunes dans leur CV dues à des congés maternité (biais inapproprié)\n\n**Implications pour les tests :**\n- Tester la distribution des recommandations par genre, origine, âge\n- Comparer les taux d'acceptation pour des CV équivalents de candidats différents\n- Vérifier la conformité avec les principes OCDE d'IA éthique\n- Évaluer l'explicabilité du système : pourquoi ce candidat est-il recommandé ?\n- Tester les effets secondaires : le système favorise-t-il des candidats surqualifiés ?\n\n---\n\n## Cas d'Usage 2 : Voiture Autonome (Autonomie et Effets Secondaires)\n\n**Contexte business :** Un constructeur automobile développe un système de conduite autonome de niveau 3 (conduite conditionnellement automatisée) pour ses véhicules haut de gamme.\n\n**Aspects IA :** Le système utilise du ML (notamment deep learning) pour la perception de l'environnement, combiné à des algorithmes de prise de décision pour la navigation.\n\n**Défis d'autonomie et d'effets secondaires :**\n- Le système optimise \"sécurité + efficacité énergétique\" mais génère des comportements trop prudents (effet secondaire : agacement des passagers)\n- Le système doit savoir quand transférer le contrôle au conducteur humain\n- L'évolution du système en conditions réelles peut créer des comportements inattendus\n\n**Implications pour les tests :**\n- Définir précisément les conditions de transfert de contrôle humain-IA\n- Tester les scénarios de reward hacking (ex : le système évite les situations difficiles plutôt que de les gérer)\n- Évaluer la robustesse avec des inputs adversariaux (panneaux modifiés, conditions météo extrêmes)\n- Vérifier la conformité aux standards ISO 26262 et SOTIF\n- Tester l'évolution du modèle : le système apprend-il des décisions sous-optimales ?\n\n---\n\n## Cas d'Usage 3 : Système de Scoring Crédit (Transparence et RGPD)\n\n**Contexte business :** Une fintech utilise un modèle ML pour évaluer le risque crédit des demandeurs de prêt et automatiser les décisions d'approbation/refus.\n\n**Aspects IA :** Le modèle (réseau de neurones profond) analyse des centaines de variables pour prédire la probabilité de défaut. Il opère en \"boîte noire\" — même les data scientists ne peuvent pas expliquer chaque décision.\n\n**Problèmes de transparence et de conformité :**\n- Le RGPD exige que les individus puissent contester les décisions automatisées\n- L'interprétabilité du modèle est insuffisante pour fournir des explications aux clients refusés\n- Le système peut avoir des biais disparates non détectés\n\n**Implications pour les tests :**\n- Tester l'explicabilité : le système peut-il expliquer pourquoi un prêt a été refusé ?\n- Vérifier les mécanismes de challenge des décisions automatiques (exigence RGPD)\n- Tester les biais de groupe : différences de taux d'acceptation pour des profils équivalents\n- Évaluer la robustesse aux données manquantes ou corrompues\n- Contrôler la conformité réglementaire avec les standards bancaires et RGPD",
    mnemonics: "## Mnémonique 1 : Les 8 Caractéristiques Qualité — \"FAÉB-ESTÉ\"\n\n**F** --> Flexibilité (et adaptabilité)\n**A** --> Autonomie\n**É** --> Évolution (auto-apprentissage)\n**B** --> Biais (algorithmique, échantillonnage)\n**E** --> Éthique (principes OCDE)\n**S** --> Side Effects et Reward Hacking\n**T** --> Transparence / Interprétabilité / Explicabilité\n**É** --> (saf)ety = Sécurité\n\nPhrase mémo : \"Pour un IA FAÉBle, l'ESTÉtique compte !\"\n\n---\n\n## Mnémonique 2 : XAI — \"TIE\" (comme \"cravate\" en anglais)\n\n**T** --> Transparence = Comment le modèle est construit (algorithme + données)\n**I** --> Interprétabilité = Ce que le modèle fait globalement (compréhensible par humains)\n**E** --> Explicabilité = Pourquoi cette décision précise (cas par cas)\n\nRègle mémo : \"La cravate TIE de l'IA : Transparent, Interprétable, Explicable\"\n\n---\n\n## Mnémonique 3 : Biais ML — \"A-S-I\"\n\n**A** --> biais **A**lgorithmique (mauvaise config de l'algorithme)\n**S** --> biais d'**É**chantillonnage (données non représentatives)\n**I** --> biais **I**napproprié (résultat discriminatoire)\n\nRègle : A et S causent I. \"ASI = Algorithme + Samples = Inapproprié\"\n\n---\n\n## Tableau Mémo : Sécurité IA — Pourquoi c'est difficile\n\n| Caractéristique | Raison du Problème |\n|-----------------|-------------------|\n| Complexité | Trop de variables à anticiper |\n| Non-déterminisme | Même input != même output |\n| Probabiliste | Résultats non garantis |\n| Auto-apprenant | Comportement peut dériver |\n| Boîte noire | Décisions inexplicables |\n| Non-robuste | Vulnérable aux attaques |"
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
    lessonText: "## Machine Learning (ML) — Vue d'Ensemble\n\n### 3.1 Formes de Machine Learning\n\nLes algorithmes ML peuvent être catégorisés en trois grandes familles :\n\n#### 3.1.1 Apprentissage Supervisé (Supervised Learning)\n\n**Definition:** Dans l'apprentissage supervisé, l'algorithme crée le modèle ML à partir de **données étiquetées** (labeled data) pendant la phase d'entraînement. Les paires entrée-sortie permettent à l'algorithme d'inférer la relation entre les données d'entrée et les étiquettes de sortie.\n\nLes problèmes résolus par l'apprentissage supervisé se divisent en deux catégories :\n\n| Sous-type | Sortie | Exemples |\n|-----------|--------|----------|\n| **Classification** | Catégories discrètes | Reconnaissance faciale, détection d'objets, filtres anti-spam |\n| **Régression** | Valeur numérique continue | Prédiction de prix, âge, revenus futurs |\n\n**Warning:** Ne pas confondre la \"régression\" au sens ML (prédiction de valeurs numériques) avec la \"régression\" au sens des tests logiciels (défauts causés par des modifications). Ce sont deux usages différents du même terme.\n\n**Example:** Classifier les e-mails en \"spam\" ou \"non-spam\" est une classification. Prédire le prix futur d'une action en bourse est une régression.\n\n#### 3.1.2 Apprentissage Non-Supervisé (Unsupervised Learning)\n\n**Definition:** Dans l'apprentissage non-supervisé, l'algorithme crée le modèle ML à partir de **données non étiquetées** (unlabeled data). L'algorithme infère des modèles dans les données d'entrée et assigne les inputs à différentes classes basées sur leurs points communs.\n\nLes problèmes résolus par l'apprentissage non-supervisé se divisent en deux catégories :\n\n| Sous-type | Objectif | Exemples |\n|-----------|---------|----------|\n| **Clustering** | Grouper des données similaires | Segmentation client, détection d'anomalies |\n| **Association** | Trouver des relations entre données | Recommandations produits, analyse de paniers |\n\n**Example:** Le clustering est utilisé pour catégoriser différents types de clients pour le marketing. L'association identifie que les clients qui achètent des couches achetent souvent aussi de la bière (association de données).\n\n#### 3.1.3 Apprentissage par Renforcement (Reinforcement Learning)\n\n**Definition:** L'apprentissage par renforcement est une approche où le système (un \"agent intelligent\") apprend en interagissant avec l'environnement de manière itérative. L'agent est récompensé quand il prend une bonne décision et pénalisé quand il en prend une mauvaise. Il n'utilise pas de données d'entraînement.\n\nDéfis principaux :\n- Configurer l'environnement\n- Choisir la bonne stratégie pour l'agent\n- Concevoir une fonction de récompense appropriée\n\n**Example:** Applications typiques : robotique, véhicules autonomes, chatbots, jeux vidéo (AlphaGo).\n\n### 3.2 Workflow ML\n\nLe workflow ML comprend les activités suivantes, souvent itératives :\n\n#### Comprendre les Objectifs\nLe but du modèle ML doit être compris et convenu avec les parties prenantes pour assurer l'alignement avec les priorités métier. Les critères d'acceptation (incluant les métriques de performance fonctionnelle ML — voir Chapitre 5) doivent être définis.\n\n#### Sélectionner un Framework\nUn framework de développement IA adapté est sélectionné selon les objectifs, critères d'acceptation et priorités métier (voir Section 1.5).\n\n#### Sélectionner & Construire l'Algorithme\nL'algorithme ML est sélectionné selon divers facteurs : objectifs, critères d'acceptation et données disponibles (voir Section 3.4). L'algorithme peut être codé manuellement ou récupéré depuis une bibliothèque.\n\n#### Préparer & Tester les Données\nLa préparation des données comprend :\n- Acquisition des données\n- Pré-traitement des données\n- Ingénierie des features (feature engineering)\n- Analyse exploratoire des données (EDA)\n\n**Tip:** Les données utilisées pour entraîner, ajuster et tester le modèle doivent être **représentatives** des données opérationnelles qui seront utilisées par le modèle.\n\n#### Entraîner le Modèle\n\nL'algorithme ML sélectionné utilise les données d'entraînement pour créer le modèle.\n\n| Terme | Définition |\n|-------|-----------|\n| **Epoch** | Une itération complète d'entraînement sur l'ensemble du dataset d'entraînement |\n| **Hyperparamètres du modèle** | Paramètres définissant la structure du modèle (ex : nombre de couches d'un réseau de neurones) |\n| **Hyperparamètres de l'algorithme** | Paramètres contrôlant l'entraînement (ex : nombre d'epochs) |\n\n#### Évaluer le Modèle\nLe modèle est évalué par rapport aux métriques de performance fonctionnelle ML convenues, en utilisant le **dataset de validation**. En pratique, plusieurs modèles sont typiquement créés avec différents algorithmes et le meilleur est choisi.\n\n#### Ajuster le Modèle (Tuning)\nLes résultats de l'évaluation sont utilisés pour ajuster les paramètres du modèle via le **hyperparameter tuning** pour améliorer ses performances.\n\n#### Tester le Modèle\nUne fois le modèle généré (entraîné, évalué et ajusté), il doit être testé sur un **dataset de test indépendant** pour s'assurer que les critères de performance ML sont satisfaits. Si la performance du modèle avec des données indépendantes est significativement inférieure à celle lors de l'évaluation, il peut être nécessaire de sélectionner un modèle différent.\n\nDes tests non-fonctionnels sont également nécessaires : temps d'entraînement, temps et ressources utilisées pour fournir une prédiction.\n\n#### Déployer le Modèle\nUne fois le développement du modèle terminé, le modèle ajusté doit typiquement être ré-ingénié pour le déploiement avec ses ressources associées (pipeline de données). Les cibles peuvent inclure des systèmes embarqués et le cloud.\n\n#### Utiliser le Modèle\nUne fois déployé, le modèle fait partie d'un système IA plus large. Les modèles peuvent effectuer des prédictions par lots à des intervalles de temps définis ou en temps réel.\n\n#### Surveiller et Ajuster le Modèle\nPendant l'utilisation du modèle, sa situation peut évoluer et le modèle peut dériver de ses performances prévues (**concept drift**). Une surveillance régulière et un ré-entraînement périodique peuvent être nécessaires.\n\n**Tip:** Le workflow ML est une séquence logique. En pratique, le workflow est appliqué de manière itérative — par exemple, lors de l'évaluation du modèle, il est souvent nécessaire de revenir à l'étape d'entraînement, voire à la préparation des données.\n\n### 3.3 Sélectionner la Forme de ML Appropriée\n\nLignes directrices pour sélectionner l'approche ML :\n\n| Condition | Approche Recommandée |\n|-----------|---------------------|\n| Données étiquetées disponibles + sortie catégorielle | Classification (supervisé) |\n| Données étiquetées disponibles + sortie numérique continue | Régression (supervisé) |\n| Pas d'étiquettes + grouper des données similaires | Clustering (non-supervisé) |\n| Pas d'étiquettes + trouver des relations | Association (non-supervisé) |\n| Interaction avec l'environnement + états multiples | Apprentissage par renforcement |\n\n**Tip:** La disponibilité et la qualité des données sont souvent le facteur déterminant dans le choix de l'approche ML.\n\n### 3.4 Facteurs dans la Sélection des Algorithmes ML\n\nIl n'y a pas d'approche définitive pour sélectionner l'algorithme ML optimal. En pratique, ce choix est basé sur un mélange de facteurs :\n\n| Facteur | Considérations |\n|---------|----------------|\n| **Fonctionnalité requise** | Classification, régression, clustering, association ? |\n| **Caractéristiques qualité** | Précision, vitesse, mémoire, explicabilité |\n| **Type de données disponibles** | Images, texte, numérique, séries temporelles |\n| **Quantité de données** | Certains modèles sont plus susceptibles d'overfitting avec peu de données |\n| **Nombre de features** | Impact sur la vitesse et la précision |\n| **Nombre de classes** | Certains modèles inadaptés aux problèmes multi-classes |\n| **Expérience précédente** | Connaissance du domaine |\n| **Essai et erreur** | Expérimentation avec plusieurs algorithmes |\n\n**Tip:** En pratique, plusieurs algorithmes sont souvent testés (ex : forêts aléatoires, SVM, et réseaux de neurones) et le meilleur est choisi selon les résultats d'évaluation et d'ajustement.\n\n### 3.5 Overfitting et Underfitting\n\n#### Overfitting (Sur-apprentissage)\n\n**Definition:** L'**overfitting** se produit lorsque le modèle s'adapte trop étroitement à un ensemble de données et ne parvient pas à se généraliser correctement. Un tel modèle fonctionne très bien avec les données d'entraînement mais peine à fournir des prédictions précises pour de nouvelles données.\n\nCauses de l'overfitting :\n- Le modèle essaie de s'adapter à chaque point de données, y compris le bruit et les outliers\n- Données d'entraînement insuffisantes\n\n**Analogie:** Un étudiant qui mémorise les réponses exactes des examens précédents sans comprendre les concepts — il réussit ces examens mais échoue sur de nouvelles questions.\n\n#### Underfitting (Sous-apprentissage)\n\n**Definition:** L'**underfitting** se produit lorsque le modèle n'est pas suffisamment sophistiqué pour s'adapter avec précision aux modèles dans les données d'entraînement. Les modèles sous-ajustés tendent à être trop simplistes.\n\nCauses de l'underfitting :\n- Dataset d'entraînement ne contenant pas de features reflétant des relations importantes\n- Algorithme ne correspondant pas correctement aux données (ex : modèle linéaire pour des données non-linéaires)\n\n| | Overfitting | Underfitting |\n|--|--|--|\n| **Données entraînement** | Très bonne précision | Mauvaise précision |\n| **Données test** | Mauvaise précision | Mauvaise précision |\n| **Cause principale** | Modèle trop complexe / peu de données | Modèle trop simple / données pauvres |\n| **Solution** | Plus de données, régularisation, simplification | Plus de features, modèle plus complexe |\n\n**Warning:** L'objectif est d'atteindre l'équilibre entre overfitting et underfitting — un modèle qui généralise bien sur des données non vues. C'est ce qu'on appelle une \"bonne généralisation\".",
    visualSummary: "## Les 3 Formes de ML\n\n    +----------------------------------------+\n    |         FORMES DE MACHINE LEARNING     |\n    +----------------------------------------+\n    |                                        |\n    | SUPERVISÉ (données étiquetées)         |\n    |   Classification --> Catégories (spam/ok)|\n    |   Régression     --> Valeur continue   |\n    |                                        |\n    | NON-SUPERVISÉ (données non étiquetées) |\n    |   Clustering     --> Groupes similaires|\n    |   Association    --> Relations entre   |\n    |                       attributs        |\n    |                                        |\n    | PAR RENFORCEMENT (interaction env.)    |\n    |   Agent + Récompenses/Pénalités        |\n    |   Apprentissage par l'expérience       |\n    +----------------------------------------+\n\n## Workflow ML — Séquence des Étapes\n\n    1. Comprendre les Objectifs (Business + KPIs)\n             |\n             v\n    2. Sélectionner Framework (TensorFlow, PyTorch...)\n             |\n             v\n    3. Sélectionner & Construire l'Algorithme\n             |\n             v\n    4. Préparer & Tester les Données\n             |\n             v\n    5. Entraîner le Modèle (Dataset d'entraînement)\n             |\n             v\n    6. Évaluer le Modèle (Dataset de validation) <--+\n             |                                      |\n             v                                      |\n    7. Ajuster le Modèle (Hyperparameter Tuning) ---+\n             |\n             v\n    8. Tester le Modèle (Dataset de test INDÉPENDANT)\n             |\n             v\n    9. Déployer le Modèle\n             |\n             v\n    10. Utiliser le Modèle\n             |\n             v\n    11. Surveiller & Ajuster (Concept Drift ?)\n\n    Note: Les étapes 5-7 forment le cycle de\n    \"génération de modèle\" (itératif)\n\n## Overfitting vs Underfitting\n\n    Précision\n    ^\n    |         .Overfitting          .Just Right\n    |        /  (memorisation)      /\n    |       /                      /\n    |      /                      /\n    |     /                      /      Underfitting\n    |    /                      /       (trop simple)\n    +--/----------------------/-----> Complexité du Modèle\n\n    +------------------+------------------+------------------+\n    |   UNDERFITTING   |   IDÉAL          |   OVERFITTING    |\n    +------------------+------------------+------------------+\n    | Train: mauvais   | Train: bon       | Train: excellent |\n    | Test:  mauvais   | Test:  bon       | Test:  mauvais   |\n    +------------------+------------------+------------------+\n    | Modèle trop      | Équilibre        | Modèle trop      |\n    | simple           | parfait          | complexe         |\n    +------------------+------------------+------------------+",
    useCases: "## Cas d'Usage 1 : Système de Détection de Spams Email (Classification Supervisée)\n\n**Contexte business :** Un fournisseur de messagerie email doit créer un filtre anti-spam pour 50 millions d'utilisateurs, en traitant des milliards d'emails par jour.\n\n**Aspects ML :** Classification supervisée — chaque email est classifié en \"spam\" ou \"non-spam\". Le modèle est entraîné sur des millions d'emails étiquetés manuellement par des humains.\n\n**Workflow ML appliqué :**\n1. Objectifs : minimiser les faux positifs (emails légitimes classés spam) et faux négatifs (spams non détectés)\n2. Features : expéditeur, contenu, liens, pièces jointes, métadonnées\n3. Algorithme : Random Forest ou SVM, évalué par précision et rappel\n\n**Implications pour les tests :**\n- Tester avec des datasets représentatifs de différentes langues et cultures\n- Évaluer le risque d'overfitting (mémorisation des patterns de spam spécifiques)\n- Tester le comportement avec de nouveaux types de spam non vus pendant l'entraînement\n- Surveiller le concept drift : les techniques de spam évoluent constamment\n\n---\n\n## Cas d'Usage 2 : Prédiction des Prix Immobiliers (Régression Supervisée)\n\n**Contexte business :** Une agence immobilière veut automatiser l'estimation des prix de vente pour accélérer le processus d'évaluation et aider ses agents.\n\n**Aspects ML :** Régression supervisée — le modèle prédit une valeur numérique (le prix). Les features incluent : superficie, localisation, nombre de chambres, état, etc.\n\n**Défis ML identifiés :**\n- Risque d'overfitting si le modèle mémorise les prix de quartiers spécifiques\n- Les données historiques peuvent refléter des biais de marché passés\n- Les features importantes varient selon les régions\n\n**Implications pour les tests :**\n- Séparer clairement les données d'entraînement, validation et test (pas de data leakage)\n- Tester les performances sur des zones géographiques non représentées dans l'entraînement\n- Vérifier les métriques de régression : MAE, RMSE, R² (voir Chapitre 5)\n- Tester la robustesse avec des outliers (propriétés de luxe, propriétés dégradées)\n\n---\n\n## Cas d'Usage 3 : Segmentation Client pour le Marketing (Clustering Non-Supervisé)\n\n**Contexte business :** Une grande enseigne de distribution veut personnaliser ses campagnes marketing en identifiant des groupes de clients aux comportements similaires.\n\n**Aspects ML :** Clustering non-supervisé — aucune étiquette préexistante. Le modèle identifie des groupes naturels dans les données de comportement client.\n\n**Défis spécifiques au non-supervisé :**\n- Pas de \"bonne réponse\" définie — difficile d'évaluer la qualité des clusters\n- Le nombre de clusters optimal doit être déterminé (hyperparamètre clé)\n- Interpréter les clusters et leur donner un sens métier\n\n**Implications pour les tests :**\n- Évaluer la stabilité des clusters sur différents échantillons de données\n- Tester le comportement avec différents nombres de clusters (k)\n- Vérifier que les clusters sont interprétables et actionnables pour le métier\n- Surveiller la dérive des clusters dans le temps (les comportements client évoluent)",
    mnemonics: "## Mnémonique 1 : Les Formes de ML — \"SCR + CA + R\"\n\nSupervisé :\n  **C** --> Classification (sortie catégorielle)\n  **R** --> Régression (sortie numérique)\n\nNon-Supervisé :\n  **C** --> Clustering (grouper des similaires)\n  **A** --> Association (trouver des relations)\n\nPar Renforcement :\n  **R** --> Renforcement (agent + récompenses)\n\nMémo : \"Deux C-R pour Supervisé, C-A pour Non-Supervisé, R pour Renforcé\"\nRègle simple : \"Si étiquettes --> Supervisé. Sinon --> Non-Supervisé ou Renforcement\"\n\n---\n\n## Mnémonique 2 : Workflow ML — \"OSFPED-ETDUUM\"\n\n**O** - Objectifs (comprendre les objectifs business)\n**S** - Sélectionner le framework\n**F** - Former (sélectionner & construire) l'algorithme\n**P** - Préparer & tester les données\n**E** - Entraîner le modèle\n**T** - Tuner (ajuster) le modèle\n**D** - Déployer le modèle\n**U** - Utiliser le modèle\n**M** - Monitorer le modèle\n\nPhrase mémo : \"On Sait Faire Partout. Entraîne, Teste, Déploie, Utilise, Monitore !\"\n\n---\n\n## Mnémonique 3 : Overfitting vs Underfitting — \"GEN-MÉM-SIMP\"\n\n**GENéralisation** = l'objectif (bonnes performances sur de nouvelles données)\n**MÉMorisation** = overfitting (trop bien adapté aux données d'entraînement)\n**SIMPlicité excessive** = underfitting (modèle trop simple)\n\nTest rapide :\n- Train = excellent, Test = mauvais --> OVERFITTING (mémorise, ne généralise pas)\n- Train = mauvais, Test = mauvais --> UNDERFITTING (trop simple)\n- Train = bon, Test = bon --> GÉNÉRALISATION (parfait !)\n\n---\n\n## Tableau des 3 Datasets\n\n| Dataset | Utilisé pour | Taille typique |\n|---------|-------------|----------------|\n| **Entraînement** | Créer le modèle | 60-80% des données |\n| **Validation** | Évaluer et ajuster | 10-20% des données |\n| **Test** | Test final indépendant | 10-20% des données |\n\nRègle d'or : Le dataset de test ne doit JAMAIS influencer l'entraînement ou le tuning !"
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
    lessonText: "## ML - Données (ML Data)\n\nLa préparation des données représente en moyenne **36% de l'effort** du workflow ML, ce qui en fait l'activité la plus intensive en ressources. En comparaison, la sélection et la construction du modèle n'utilisent que 14% de l'effort.\n\n### 4.1 Préparation des Données dans le Workflow ML\n\nLa préparation des données fait partie du **pipeline de données**, qui prend des données brutes et produit des données dans une forme utilisable pour entraîner et faire des prédictions avec un modèle ML.\n\n#### Acquisition des Données\n\n**Identification** : Les types de données à utiliser pour l'entraînement et les prédictions sont identifiés.\n- Exemple : Pour une voiture autonome — radar, vidéo, LiDAR\n\n**Collecte** : La source des données est identifiée et les moyens de collecte sont déterminés.\n- Exemple : Identifier le FMI comme source de données financières\n\n**Étiquetage** : Voir Section 4.5 (Data Labelling)\n\nLes données acquises peuvent être de diverses formes : numérique, catégorielle, image, tabulaire, texte, séries temporelles, capteur, géospatiale, vidéo et audio.\n\n#### Pré-traitement des Données\n\n| Activité | Description | Exemple |\n|----------|-------------|---------|\n| **Nettoyage** | Supprimer/corriger données incorrectes, doublons, outliers | Imputation des valeurs manquantes par la moyenne |\n| **Transformation** | Changer le format des données | Convertir données catégorielles en numériques, normalisation |\n| **Augmentation** | Augmenter le nombre d'échantillons dans un dataset | Inclure des exemples adversariaux pour la robustesse |\n| **Échantillonnage** | Sélectionner une partie du dataset total | Réduire les coûts et le temps de création du modèle |\n\n**Definition:** La **normalisation** redimensionne les données pour assurer une plage entre zéro et un. La **standardisation** redimensionne les données pour avoir une moyenne de zéro et un écart-type de un.\n\n**Warning:** Tout pré-traitement comporte un risque de modifier des données valides utiles ou d'ajouter des données invalides.\n\n#### Ingénierie des Features (Feature Engineering)\n\n**Definition:** La **sélection de features** implique de sélectionner les attributs/propriétés les plus susceptibles de contribuer à l'entraînement et à la prédiction du modèle. En supprimant les informations non pertinentes (bruit), la sélection de features peut réduire les temps d'entraînement, prévenir l'overfitting, augmenter la précision et rendre les modèles plus généralisables.\n\n**Definition:** L'**extraction de features** implique la dérivation de features informatives et non-redondantes à partir des features existantes. Le dataset résultant est généralement plus petit.\n\nEn parallèle à ces activités, l'**Analyse Exploratoire des Données (EDA)** est typiquement menée pour identifier les tendances inherentes aux données et les visualiser.\n\n#### Défis de la Préparation des Données\n\n- Besoin de connaissances du domaine d'application, des données et de leurs propriétés, et des techniques de préparation\n- Difficulté d'obtenir des données de haute qualité provenant de sources multiples\n- Difficulté d'automatiser le pipeline de données et d'assurer sa scalabilité\n- Coûts associés à la préparation des données\n- Risque de ne pas donner suffisamment de priorité aux défauts introduits dans le pipeline\n- Introduction de biais dans les données\n\n### 4.2 Datasets d'Entraînement, Validation et Test\n\nLogiquement, trois ensembles de données équivalentes sont nécessaires pour développer un modèle ML :\n\n| Dataset | Utilisation | Taille Typique |\n|---------|------------|----------------|\n| **Entraînement** | Entraîner le modèle | 60-80% |\n| **Validation** | Évaluer et ajuster (tuning) le modèle | 10-20% |\n| **Test** (holdout) | Tester le modèle ajusté final | 10-20% |\n\n**Tip:** Le ratio typique d'utilisation va de 60:20:20 à 80:10:10 (entraînement:validation:test). Il n'y a pas de ratio optimal universel.\n\n**Warning:** Le dataset de test doit être gardé séparé et ne doit PAS être utilisé pendant l'entraînement. Cela garantit que le modèle développé n'est pas influencé par les données de test et que les résultats de test donnent un reflet fidèle de la qualité du modèle.\n\n**Techniques pour données limitées :**\nLorsque les données sont limitées, diviser en trois datasets peut être insuffisant. Des techniques comme la **validation croisée k-fold**, le **bootstrap** ou le **leave-one-out cross validation** permettent d'utiliser les données de manière plus efficace.\n\n### 4.3 Problèmes de Qualité des Datasets\n\n| Problème de Qualité | Description |\n|---------------------|-------------|\n| **Données incorrectes** | Données capturées incorrectement (capteur défaillant, erreur de saisie) |\n| **Données incomplètes** | Valeurs manquantes pour certains champs ou intervalles de temps |\n| **Données mal étiquetées** | Étiquettes incorrectes pour diverses raisons (voir 4.5.2) |\n| **Données insuffisantes** | Volume insuffisant pour que les algorithmes reconnaissent des patterns |\n| **Données non pré-traitées** | Données sales, format inconsistant, outliers non gérés |\n| **Données obsolètes** | Données périmées qui ne reflètent plus la réalité opérationnelle |\n| **Données déséquilibrées** | Représentation inégale des classes (biais) |\n| **Données non équitables** | Favorise ou discrimine certains groupes |\n| **Données dupliquées** | Enregistrements répétés qui influencent indûment le modèle |\n| **Données non pertinentes** | Données sans rapport avec le problème à résoudre |\n| **Problèmes de vie privée** | Non-conformité avec les lois de protection des données (RGPD) |\n| **Problèmes de sécurité** | Données frauduleuses ou trompeuses délibérément insérées |\n\n### 4.4 Qualité des Données et son Effet sur le Modèle ML\n\n**La qualité du modèle ML est hautement dépendante de la qualité du dataset sur lequel il est créé.**\n\nLes mauvaises données peuvent entraîner :\n\n| Catégorie de Défaut | Causes | Conséquences |\n|--------------------|--------|--------------|\n| **Précision réduite** | Données incorrectes, incomplètes, mal étiquetées, insuffisantes, obsolètes, non pertinentes | Prédictions inexactes |\n| **Modèle biaisé** | Données incomplètes, déséquilibrées, non équitables, dupliquées | Discrimination, résultats injustes |\n| **Modèle compromis** | Problèmes de vie privée et de sécurité | Vulnérabilités, fuites de données personnelles |\n\n**Example:** Si les données d'entraînement pour un modèle de prédiction de maladies ne contiennent des données médicales que pour un seul sexe, le modèle sera probablement très peu performant pour l'autre sexe (modèle biaisé).\n\n### 4.5 Étiquetage des Données pour l'Apprentissage Supervisé\n\n**Definition:** L'**étiquetage des données** est l'enrichissement de données non étiquetées (ou mal étiquetées) en ajoutant des étiquettes, les rendant ainsi utilisables dans l'apprentissage supervisé.\n\nL'étiquetage des données est une activité intensive en ressources représentant en moyenne **25% du temps** sur les projets ML.\n\n#### 4.5.1 Approches d'Étiquetage\n\n| Approche | Description | Avantages/Inconvénients |\n|----------|-------------|------------------------|\n| **Interne** | Par les développeurs/testeurs de l'organisation | Contrôle qualité élevé, coût élevé |\n| **Externalisé** | Par une organisation spécialisée externe | Expertise spécialisée, coût variable |\n| **Crowdsourcé** | Par un grand groupe d'individus | Volume élevé, qualité variable |\n| **IA-Assisté** | Outils IA pour reconnaître et annoter + validation humaine | Rapide, mais erreurs héritées |\n| **Hybride** | Combinaison des approches ci-dessus | Flexible selon les besoins |\n\n**Technique courante :** L'annotation (dessiner des rectangles autour d'objets dans des images) est une technique d'étiquetage commune. Des annotations plus complexes sont nécessaires pour les objets 3D ou les formes irrégulières.\n\n#### 4.5.2 Causes de Données Mal Étiquetées\n\n- Erreurs aléatoires des annotateurs (ex : appuyer sur le mauvais bouton)\n- Erreurs systémiques (ex : instructions incorrectes ou mauvaise formation)\n- Erreurs délibérées par des annotateurs malveillants\n- Erreurs de traduction (étiquettes correctes dans une langue, incorrectes dans une autre)\n- Jugements subjectifs conduisant à des étiquettes conflictuelles entre annotateurs\n- Manque de connaissances du domaine\n- Tâches de classification complexes entraînant plus d'erreurs\n- Défauts dans les outils de support à l'étiquetage\n- Approches d'étiquetage basées sur l'IA (probabilistes, donc parfois incorrectes)\n\n**Warning:** L'apprentissage supervisé suppose que les données sont correctement étiquetées. En pratique, il est rare que tous les éléments d'un dataset soient étiquetés correctement. La qualité de l'étiquetage est critique pour la qualité du modèle.",
    visualSummary: "## Pipeline de Données ML\n\n    Données Brutes\n         |\n         v\n    +------------------+\n    | ACQUISITION      |\n    | - Identification |\n    | - Collecte       |\n    | - Étiquetage     |\n    +------------------+\n         |\n         v\n    +------------------+\n    | PRÉ-TRAITEMENT   |\n    | - Nettoyage      |\n    | - Transformation |\n    | - Augmentation   |\n    | - Échantillonnage|\n    +------------------+\n         |\n         v\n    +------------------+\n    | FEATURE ENGIN.   |\n    | - Sélection      |\n    | - Extraction     |\n    +------------------+\n         |\n         v\n    Dataset Préparé\n    (Prêt pour Entraînement)\n\n## Répartition des 3 Datasets\n\n    Dataset Total (100%)\n    +----------------------------------------+\n    |                                        |\n    | Entraînement     | Validation | Test   |\n    | (60-80%)         | (10-20%)   | (10-20%)|\n    |                  |            |         |\n    | Créer le modèle  | Évaluer/   | Test    |\n    |                  | Ajuster    | Final   |\n    +------------------+------------+---------+\n\n    RÈGLE D'OR: Le dataset de Test est SACRÉ.\n    Il ne doit JAMAIS influencer l'entraînement !\n\n## Matrice des Problèmes de Qualité des Données\n\n    +------------------+---------------------------+\n    | Problème         | Conséquence pour le modèle|\n    +------------------+---------------------------+\n    | Incorrectes      | --> Précision réduite      |\n    | Incomplètes      | --> Précision réduite      |\n    | Mal étiquetées   | --> Précision réduite      |\n    | Insuffisantes    | --> Précision réduite      |\n    | Déséquilibrées   | --> Modèle BIAISÉ          |\n    | Dupliquées       | --> Modèle BIAISÉ          |\n    | Vie privée       | --> Modèle COMPROMIS       |\n    | Sécurité         | --> Modèle COMPROMIS       |\n    +------------------+---------------------------+\n\n## Approches d'Étiquetage des Données\n\n    +--------+----------+-----------+-----------+---------+\n    | Interne|Externalisé|Crowdsourcé|IA-Assisté | Hybride |\n    +--------+----------+-----------+-----------+---------+\n    | Haute  | Moyenne   | Variable  | Rapide    | Flexible|\n    | qualité| qualité   | qualité   | + humain  |         |\n    | Coût   | Coût      | Faible    | Semi-auto | Selon   |\n    | élevé  | variable  | coût      |           | besoins |\n    +--------+----------+-----------+-----------+---------+",
    useCases: "## Cas d'Usage 1 : Préparation des Données pour la Reconnaissance Médicale (Annotation)\n\n**Contexte business :** Un hôpital veut développer un système de détection automatique de tumeurs dans les radiographies thoraciques. Il dispose de 50 000 radiographies mais aucune n'est étiquetée.\n\n**Aspects ML :** Apprentissage supervisé (classification). Le système doit étiqueter chaque radiographie comme \"tumeur présente\" ou \"tumeur absente\", avec localisation via des bounding boxes.\n\n**Processus d'étiquetage :**\n- 200 radiologues bénévoles annotent les images (crowdsourcé supervisé)\n- Chaque image est annotée par 3 radiologues indépendants\n- Un algorithme de consensus détermine l'étiquette finale\n- Validation par un panel de radiologues séniors sur un sous-ensemble\n\n**Implications pour les tests :**\n- Tester la cohérence des annotations entre annotateurs (inter-rater reliability)\n- Identifier les cas de désaccord et les traiter comme des cas ambigus\n- Vérifier que la distribution des classes est représentative (ratio tumeurs/pas de tumeur)\n- Contrôler la conformité RGPD pour les données médicales anonymisées\n- Tester le pipeline de préparation des données pour détecter les fuites de données personnelles\n\n---\n\n## Cas d'Usage 2 : Détection de Fraude Financière (Données Déséquilibrées)\n\n**Contexte business :** Une banque veut entraîner un modèle de détection de fraude. Elle dispose de 1 million de transactions dont seulement 0,1% sont frauduleuses.\n\n**Problème de données :** Les données sont fortement déséquilibrées — 999 transactions légitimes pour 1 fraude. Un modèle qui prédit \"toujours légitime\" atteindrait 99,9% de précision mais ne détecterait aucune fraude.\n\n**Techniques de gestion du déséquilibre :**\n- Sursampling de la classe minoritaire (SMOTE)\n- Sous-sampling de la classe majoritaire\n- Pondération différentielle des classes dans l'algorithme\n\n**Implications pour les tests :**\n- Tester les métriques au-delà de la simple précision (utiliser Recall, F1, AUC)\n- Vérifier que le dataset de test reflète la distribution réelle des fraudes\n- Tester l'impact des techniques d'équilibrage sur les performances\n- Surveiller les faux négatifs (fraudes non détectées) — coût élevé pour la banque\n\n---\n\n## Cas d'Usage 3 : Entraînement d'un Assistant IA (Données Obsolètes)\n\n**Contexte business :** Une entreprise de e-commerce veut améliorer son assistant IA pour les recommandations produits. Son dataset d'entraînement date de 3 ans et inclut des données pré-pandémie COVID.\n\n**Problème de données :** Les comportements d'achat ont radicalement changé pendant et après la pandémie. Les données historiques de 2019 ne reflètent plus les patterns actuels des consommateurs.\n\n**Impact de l'obsolescence des données :**\n- Recommandations basées sur des tendances dépassées\n- Sous-performance sur les nouvelles catégories de produits\n- Manque de représentation des nouvelles habitudes d'achat\n\n**Implications pour les tests :**\n- Tester les performances sur des données récentes vs anciennes\n- Détecter le concept drift entre les données d'entraînement et les données opérationnelles\n- Mettre en place des mécanismes de surveillance continue des performances\n- Définir une stratégie de ré-entraînement périodique avec des données fraîches",
    mnemonics: "## Mnémonique 1 : Pipeline de Préparation des Données — \"ACT-PTE-FE\"\n\nAcquisition :\n  **A** --> Acquisition (identification + collecte)\n  **C** --> Collection des données brutes\n  **T** --> eTiquetage (labelling)\n\nPré-traitement :\n  **P** --> Préparer (nettoyage)\n  **T** --> Transformer (format + normalisation)\n  **E** --> Enrichir (augmentation + échantillonnage)\n\nFeature Engineering :\n  **F** --> Features (sélection)\n  **E** --> Extraction de features dérivées\n\nMémo : \"ACTe, Préparation, Transformation, Enrichissement, puis Feature Engineering\"\n\n---\n\n## Mnémonique 2 : Problèmes de Qualité des Données — \"OIMNI-DDUP-SS\"\n\n**O** --> Obsolètes\n**I** --> Incomplètes\n**M** --> Mal étiquetées\n**N** --> Non pertinentes\n**I** --> Insuffisantes\n**D** --> Données incorrectes\n**D** --> Dupliquées\n**U** --> Unbalanced (déséquilibrées)\n**P** --> Privacy (vie privée)\n**S** --> Sécurité\n**S** --> Sans pré-traitement\n\nMémo : \"OIMNI DDUP-SS = Beaucoup de problèmes possibles dans les données !\"\n\n---\n\n## Mnémonique 3 : Conséquences des Mauvaises Données — \"PBC\"\n\n**P** --> Précision Réduite (données incorrectes, incomplètes, insuffisantes)\n**B** --> modèle Biaisé (données déséquilibrées, dupliquées)\n**C** --> modèle Compromis (vie privée, sécurité)\n\nRègle : \"PBC = Précision réduite, Biais, Compromission\"\n\n---\n\n## Tableau Mémo : Ratio d'Or des Datasets\n\n| Dataset | But | Ratio Typique |\n|---------|-----|---------------|\n| Entraînement | Créer le modèle | 60-80% |\n| Validation | Évaluer + Tuner | 10-20% |\n| Test | Vérification finale | 10-20% |\n\nRègle magique : Le test est SACRÉ. Ne jamais l'utiliser avant le test final !"
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
    lessonText: "## Métriques de Performance Fonctionnelle ML\n\n### 5.1 La Matrice de Confusion\n\nLa matrice de confusion est un outil fondamental pour évaluer les modèles de classification. Pour tout problème de classification, un modèle ne prédit pas correctement les résultats tout le temps.\n\n**Definition:** La **matrice de confusion** est une table qui présente les 4 résultats possibles pour un classifieur binaire.\n\n| | Prédit Positif | Prédit Négatif |\n|--|--|--|\n| **Réel Positif** | Vrai Positif (TP) | Faux Négatif (FN) |\n| **Réel Négatif** | Faux Positif (FP) | Vrai Négatif (TN) |\n\n**Signification des 4 cas :**\n- **TP (Vrai Positif)** : Le modèle prédit positif et c'est réellement positif (correct)\n- **TN (Vrai Négatif)** : Le modèle prédit négatif et c'est réellement négatif (correct)\n- **FP (Faux Positif)** : Le modèle prédit positif mais c'est réellement négatif (erreur de type I)\n- **FN (Faux Négatif)** : Le modèle prédit négatif mais c'est réellement positif (erreur de type II)\n\n#### Les 4 Métriques de Base\n\n**Accuracy (Précision globale)**\nFormule : Accuracy = (TP + TN) / (TP + TN + FP + FN) × 100%\nMesure le pourcentage de toutes les classifications correctes.\n\n**Precision (Précision)**\nFormule : Precision = TP / (TP + FP) × 100%\nMesure la proportion de positifs prédits qui sont réellement positifs. C'est une mesure de la confiance dans les prédictions positives.\n\n**Recall (Rappel / Sensibilité)**\nFormule : Recall = TP / (TP + FN) × 100%\nÉgalement connue sous le nom de Sensibilité. Mesure la proportion de positifs réels qui ont été correctement prédits. C'est une mesure de la capacité à ne pas manquer de positifs.\n\n**F1-Score**\nFormule : F1 = 2 × (Precision × Recall) / (Precision + Recall)\nLe F1-score est la moyenne harmonique de la Precision et du Recall. Sa valeur est entre 0 et 1. Un score proche de 1 indique que les fausses données ont peu d'influence sur le résultat.\n\n**Example (Filtre Spam) :**\n- 100 emails : 30 vrais spams, 70 vrais légitimes\n- Le modèle classe : 25 comme spam, 75 comme légitimes\n- TP=20, FP=5, FN=10, TN=65\n- Accuracy = (20+65)/100 = 85%\n- Precision = 20/25 = 80%\n- Recall = 20/30 = 67%\n- F1 = 2×(0.8×0.67)/(0.8+0.67) = 73%\n\n### 5.2 Métriques Supplémentaires\n\n#### Classification Supervisée\n\n**Courbe ROC (Receiver Operating Characteristic)**\nLa courbe ROC est un graphique qui illustre la capacité d'un classifieur binaire en faisant varier son seuil de discrimination. Elle trace le Taux de Vrais Positifs (TPR = Recall) contre le Taux de Faux Positifs (FPR = FP/(TN+FP)).\n\n**Definition:** L'**AUC (Area Under Curve)** est l'aire sous la courbe ROC. Elle représente le degré de séparabilité d'un classifieur — comment le modèle distingue bien les classes. Plus l'AUC est élevée, meilleures sont les prédictions du modèle.\n\n| AUC | Interprétation |\n|-----|----------------|\n| 1.0 | Classifieur parfait |\n| 0.9-1.0 | Excellent |\n| 0.7-0.9 | Bon |\n| 0.5-0.7 | Médiocre |\n| 0.5 | Équivalent au hasard |\n\n#### Régression Supervisée\n\n**MSE (Mean Square Error — Erreur Quadratique Moyenne)**\nFormule : MSE = moyenne des (valeur réelle - valeur prédite)²\nLe MSE est toujours positif. Une valeur proche de zéro indique un meilleur modèle de régression. Le carré assure que les erreurs positives et négatives ne s'annulent pas.\n\n**R-squared (Coefficient de Détermination)**\nMesure de la qualité d'ajustement du modèle de régression. Varie de 0 à 1 (idéalement proche de 1).\n\n#### Clustering Non-Supervisé\n\n**Definition:** Les **métriques intra-cluster** mesurent la similarité des points de données au sein d'un même cluster (doivent être élevées).\n\n**Definition:** Les **métriques inter-cluster** mesurent la similarité des points de données dans des clusters différents (doivent être faibles).\n\n**Definition:** Le **coefficient de silhouette** est une mesure entre -1 et +1 basée sur les distances intra et inter-cluster moyennes.\n- +1 : Clusters bien séparés\n- 0 : Clustering aléatoire\n- -1 : Points mal assignés\n\n### 5.3 Limitations des Métriques de Performance ML\n\nLes métriques de performance fonctionnelle ML sont limitées à mesurer la fonctionnalité du modèle. Elles ne mesurent pas d'autres caractéristiques qualité non-fonctionnelles telles que celles définies dans ISO 25010 (ex : performance-efficience) ou celles du Chapitre 2 (ex : explicabilité, flexibilité, autonomie).\n\n**Autres limitations :**\n- Pour l'apprentissage supervisé, les métriques dépendent des données étiquetées — leur précision dépend de l'exactitude des étiquettes\n- Les données utilisées pour les mesures peuvent ne pas être représentatives (biaisées)\n- Les métriques ne s'appliquent qu'au modèle ML, pas aux autres composants du système (ex : pipeline de données)\n- La plupart des métriques ne peuvent être mesurées qu'avec des outils\n\n**Warning:** Une haute accuracy ne signifie pas nécessairement un bon modèle. Avec des données déséquilibrées (ex : 99% d'une classe, 1% de l'autre), un modèle qui prédit toujours la classe majoritaire atteindrait 99% d'accuracy mais serait inutile.\n\n### 5.4 Sélection des Métriques Appropriées\n\nIl est normalement impossible de construire un modèle ML qui atteint le score le plus élevé pour toutes les métriques simultanément. Les métriques les plus appropriées sont sélectionnées comme critères d'acceptation.\n\n| Métrique | Quand l'utiliser |\n|----------|-----------------|\n| **Accuracy** | Datasets symétriques (coûts FP et FN similaires) |\n| **Precision** | Coût élevé des faux positifs (ex : filtre spam — ne pas bloquer les emails légitimes) |\n| **Recall** | Critique de ne pas manquer les positifs (ex : détection du cancer — ne pas manquer les vrais cas) |\n| **F1-Score** | Déséquilibre dans les classes attendues + precision et recall d'importance similaire |\n| **AUC-ROC** | Problèmes de classification supervisée binaire |\n| **MSE / R²** | Problèmes de régression supervisée |\n| **Silhouette** | Problèmes de clustering non-supervisé |\n\n**Example (Détection de Cancer) :**\nManquer un vrai cas de cancer (FN) est beaucoup plus grave qu'un faux positif qui nécessite des tests supplémentaires. Donc, le **Recall** doit être maximisé (minimiser les FN).\n\n**Example (Filtre Spam) :**\nClasser trop d'emails légitimes comme spam (FP) est inacceptable. Donc, la **Precision** doit être élevée (minimiser les FP).\n\n### 5.5 Suites de Benchmark ML\n\nDe nouvelles technologies IA (datasets, algorithmes, modèles, matériel) sont publiées régulièrement. Pour fournir des comparaisons objectives, des **suites de benchmark ML** standardisées sont disponibles.\n\n| Suite | Organisation | Description |\n|-------|-------------|-------------|\n| **MLCommons** | Organisation à but non lucratif (2020) | Benchmarks pour frameworks, processeurs IA, plateformes cloud |\n| **DAWNBench** | Stanford University | Suite de benchmark ML académique |\n| **MLMark** | EEMBC | Performance et précision de l'inférence embarquée |\n\n**Mesures fournies :** Temps d'entraînement (ex : vitesse pour atteindre 75% d'accuracy sur un dataset défini), temps d'inférence (ex : vitesse de prédiction du modèle entraîné).",
    visualSummary: "## Matrice de Confusion — Structure Visuelle\n\n    +------------------------------------------+\n    |              MATRICE DE CONFUSION         |\n    +------------------------------------------+\n    |              | Prédit POS | Prédit NEG   |\n    +--------------+------------+--------------+\n    | Réel POS     |  TP (bon)  |  FN (type II)|\n    | Réel NEG     |  FP (type I)|  TN (bon)   |\n    +--------------+------------+--------------+\n\n    TP = Vrai Positif   TN = Vrai Négatif\n    FP = Faux Positif   FN = Faux Négatif\n\n## Les 4 Métriques Issues de la Matrice\n\n    ACCURACY  = (TP + TN) / (TP + TN + FP + FN)\n                --> % de toutes les prédictions correctes\n\n    PRECISION = TP / (TP + FP)\n                --> \"Parmi les positifs prédits, combien sont vrais ?\"\n                --> Minimiser les FP\n\n    RECALL    = TP / (TP + FN)\n                --> \"Parmi les positifs réels, combien sont détectés ?\"\n                --> Minimiser les FN\n\n    F1-SCORE  = 2 × (P × R) / (P + R)\n                --> Moyenne harmonique de P et R\n                --> Entre 0 et 1 (1 = parfait)\n\n## Courbe ROC et AUC\n\n    TPR (Recall)\n    ^\n    1|    .----             Modèle parfait = courbe vers (0,1)\n     |   /  AUC            Modèle aléatoire = diagonale\n     |  /  élevée\n     | /\n     |/________________> FPR\n    0                  1\n\n    AUC proche de 1 = Excellent classifieur\n    AUC = 0.5 = Aussi bon que le hasard\n\n## Guide de Sélection des Métriques\n\n    Données symétriques ?         --> ACCURACY\n    FP très coûteux ?             --> PRECISION (filtre spam)\n    FN très coûteux ?             --> RECALL (détection maladie)\n    Déséquilibre de classes ?     --> F1-SCORE\n    Classification binaire ?      --> AUC-ROC\n    Régression ?                  --> MSE / R²\n    Clustering ?                  --> SILHOUETTE COEFFICIENT",
    useCases: "## Cas d'Usage 1 : Détection de Cancer par Imagerie (Maximiser le Recall)\n\n**Contexte business :** Un hôpital universitaire développe un système IA pour détecter les tumeurs malignes dans les mammographies. Il est utilisé comme aide au diagnostic par les radiologues.\n\n**Choix de métriques :** Le Recall doit être maximisé. Un faux négatif (cancer non détecté) peut entraîner un retard de traitement fatal. Un faux positif (alarme non fondée) nécessite des examens complémentaires — coûteux mais pas fatal.\n\n**Configuration :**\n- Seuil de classification abaissé pour maximiser le Recall (même si la Precision diminue)\n- Objectif : Recall > 95%, avec Precision acceptable > 60%\n\n**Implications pour les tests :**\n- Tester avec des datasets représentatifs de tous les types de tumeurs\n- Évaluer le Recall pour chaque sous-groupe (âge, densité mammaire)\n- Tester la robustesse avec des images de qualité variable\n- Comparer les performances avec les radiologues humains (benchmark)\n- Surveiller les métriques après déploiement avec un feedback loop\n\n---\n\n## Cas d'Usage 2 : Filtre Anti-Spam Email (Maximiser la Precision)\n\n**Contexte business :** Un fournisseur d'email pour entreprises déploie un filtre anti-spam. Les utilisateurs sont très sensibles aux emails légitimes classifiés comme spam (faux positifs).\n\n**Choix de métriques :** La Precision doit être maximisée. Un faux positif (email légitime bloqué) peut faire manquer des contrats importants ou des communications critiques.\n\n**Configuration :**\n- Seuil de classification élevé pour maximiser la Precision (même si le Recall diminue)\n- Objectif : Precision > 99%, avec Recall acceptable > 85%\n\n**Implications pour les tests :**\n- Tester avec des emails légitimes variés (tous formats, langues, pièces jointes)\n- Évaluer la Precision par catégorie d'utilisateur (commercial, technique, RH)\n- Tester le comportement avec des nouveaux patterns de spam\n- Surveiller le ratio FP/FN dans les rapports utilisateurs post-déploiement\n\n---\n\n## Cas d'Usage 3 : Segmentation de Marché (Évaluation de Clustering)\n\n**Contexte business :** Une entreprise de marketing utilise un modèle de clustering pour segmenter ses clients en groupes pour des campagnes personnalisées.\n\n**Métriques de clustering :**\n- Coefficient de silhouette pour évaluer la qualité globale des clusters\n- Métriques intra-cluster pour évaluer la cohérence de chaque segment\n- Métriques inter-cluster pour évaluer la distinction entre segments\n\n**Défi de sélection :**\n- Pas de \"bonne réponse\" comme en classification supervisée\n- Le nombre de clusters (k) doit être déterminé expérimentalement\n- Les métriques doivent être complétées par une validation métier (les segments ont-ils du sens ?)\n\n**Implications pour les tests :**\n- Tester avec différentes valeurs de k et comparer les coefficients de silhouette\n- Évaluer la stabilité des clusters sur différents échantillons (bootstrap)\n- Valider l'interprétabilité des clusters avec des experts métier\n- Tester le comportement avec de nouveaux clients non représentés dans les données d'entraînement",
    mnemonics: "## Mnémonique 1 : Les 4 Cases de la Matrice — \"TP-TN-FP-FN\"\n\nRetenir en 2 paires :\n- TP et TN = BONS résultats (Vrai Positif, Vrai Négatif)\n- FP et FN = ERREURS (Faux Positif = type I, Faux Négatif = type II)\n\nAide mémo : \"Les Vrais sont Bons, les Faux sont des Erreurs\"\n- Faux Positif = Alarme injustifiée (dit positif mais c'est faux)\n- Faux Négatif = Manque un vrai positif (dit négatif mais c'est faux)\n\n---\n\n## Mnémonique 2 : Quand Utiliser Quelle Métrique — \"APRF\"\n\n**A** --> **A**ccuracy : données équilibrées, coûts FP=FN\n**P** --> **P**recision : FP très coûteux (spam, fausses alertes)\n**R** --> **R**ecall : FN très coûteux (maladie, fraude critique)\n**F** --> **F**1-Score : données déséquilibrées, P et R également importants\n\nPhrase mémo : \"APRF = Accuracy Pour Régulier, Faux-négatif = Recall\"\n\n---\n\n## Mnémonique 3 : Formules Clés\n\nPRECISION = TP / (TP + FP)\n  --> \"Parmi mes prédictions positives, combien étaient vraies ?\"\n  --> \"Je suis précis dans mes alarmes\"\n\nRECALL = TP / (TP + FN)\n  --> \"Parmi les vrais positifs, combien ai-je détectés ?\"\n  --> \"Je rappelle (ne rate pas) les vrais positifs\"\n\nF1 = 2PR/(P+R)\n  --> Compromis entre Precision et Recall\n\nAUC --> \"Plus c'est grand, mieux c'est !\"\n\n---\n\n## Tableau Mémo : Erreurs de Classification\n\n| Erreur | Symbole | Signification | Exemple |\n|--------|---------|---------------|---------|\n| Faux Positif | FP | Dit positif, c'est négatif | Email légitime classé spam |\n| Faux Négatif | FN | Dit négatif, c'est positif | Cancer non détecté |\n| Type I | = FP | Alarme injustifiée | Test positif pour une maladie absente |\n| Type II | = FN | Manque un vrai cas | Test négatif pour une maladie présente |"
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
    lessonText: "## ML - Réseaux de Neurones et Tests\n\n### 6.1 Réseaux de Neurones Artificiels\n\nLes réseaux de neurones artificiels ont été initialement conçus pour imiter le fonctionnement du cerveau humain, qui peut être vu comme de nombreux neurones biologiques connectés.\n\n#### Le Perceptron Simple\n\n**Definition:** Le **perceptron simple** (single-layer perceptron) est l'un des premiers exemples d'implémentation d'un réseau de neurones artificiel. Il comprend un réseau de neurones à une seule couche (un seul neurone). Il peut être utilisé pour l'apprentissage supervisé de classifieurs.\n\n#### Réseaux de Neurones Profonds (DNN)\n\nLa plupart des réseaux de neurones actuels sont des **réseaux de neurones profonds (DNN)** car ils comprennent plusieurs couches et peuvent être considérés comme des perceptrons multi-couches.\n\n**Structure d'un DNN :**\n\n| Couche | Rôle | Description |\n|--------|------|-------------|\n| **Couche d'entrée** | Réception | Reçoit les inputs (ex : valeurs de pixels d'une caméra) |\n| **Couches cachées** | Traitement | Neurones artificiels (nodes) qui effectuent des calculs |\n| **Couche de sortie** | Résultat | Fournit les résultats au monde extérieur |\n\nLes neurones d'une couche sont connectés à chacun des neurones de la couche suivante. Les neurones effectuent des calculs et transmettent l'information à travers le réseau.\n\n#### Calcul dans chaque Neurone\n\n**Definition:** La **valeur d'activation** est la valeur calculée par chaque neurone (sauf ceux de la couche d'entrée) en exécutant une formule (la fonction d'activation). Elle prend comme inputs les valeurs d'activation des neurones de la couche précédente, les **poids** des connexions entre les neurones (qui changent lors de l'apprentissage), et le **biais** individuel de chaque neurone.\n\nLes valeurs d'activation sont typiquement centrées autour de zéro et ont une plage entre -1 (\"le neurone n'est pas intéressé\") et +1 (\"le neurone est très intéressé\").\n\n#### Processus d'Entraînement\n\n1. Chaque neurone est préconfiguré avec une valeur de biais\n2. Les données d'entraînement passent à travers le réseau\n3. Chaque neurone exécute la fonction d'activation pour générer une sortie\n4. La sortie générée est comparée au résultat correct connu (données étiquetées)\n5. La différence est propagée en arrière (backpropagation) dans le réseau pour modifier les poids\n6. Ce processus se répète jusqu'à ce que les sorties soient considérées suffisamment bonnes\n\n**Tip:** Plus les données d'entraînement passent à travers le réseau, plus les poids s'ajustent graduellement. L'apprentissage est progressif et itératif.\n\n### 6.2 Mesures de Couverture pour les Réseaux de Neurones\n\n#### Limites des Mesures Traditionnelles\n\nAtteindre des critères de couverture white-box (ex : couverture des instructions, des branches, MC/DC) est obligatoire pour la conformité avec certains standards de sécurité fonctionnelle pour le code source impératif traditionnel.\n\n**Cependant**, utiliser ces mesures pour mesurer la couverture des réseaux de neurones apporte peu de valeur car le même code tend à être exécuté chaque fois que le réseau de neurones est exécuté. Des mesures de couverture spécifiques aux réseaux de neurones ont donc été proposées.\n\n**Warning:** La couverture pour les réseaux de neurones est un domaine de recherche émergent. Des articles académiques n'ont été publiés qu'à partir de 2017, et il y a peu de preuves objectives que ces mesures sont efficaces. Cependant, notez que même la couverture des instructions et des décisions, utilisée depuis plus de 50 ans, a également peu de preuves objectives de leur efficacité relative.\n\n#### Critères de Couverture pour les Réseaux de Neurones\n\nLa plupart de ces mesures sont basées sur les **valeurs d'activation** des neurones.\n\n| Critère | Description |\n|---------|-------------|\n| **Couverture des Neurones** (Neuron Coverage) | Chaque neurone doit atteindre une valeur d'activation > 0. Très facile à atteindre en pratique — presque 100% avec très peu de cas de test. Plus utile comme signal d'alarme quand non atteinte. |\n| **Couverture par Seuil** (Threshold Coverage) | Chaque neurone doit atteindre une valeur d'activation > seuil spécifié. Utilisé par DeepXplore avec seuil 0.75 pour trouver des comportements de cas limites incorrects. |\n| **Couverture Changement de Signe** (Sign-Change Coverage) | Les cas de test doivent faire que chaque neurone atteigne des valeurs d'activation positives ET négatives. |\n| **Couverture Changement de Valeur** (Value-Change Coverage) | Les cas de test doivent faire que chaque neurone atteigne deux valeurs d'activation dont la différence dépasse une valeur choisie. |\n| **Couverture Signe-Signe** (Sign-Sign Coverage) | Considère des paires de neurones dans des couches adjacentes. Concept similaire à la couverture MC/DC pour le code source impératif. |\n\n**Tip:** L'outil TensorFuzz implémente une approche basée sur les algorithmes des plus proches voisins pour identifier des changements significatifs dans des ensembles voisins de neurones.\n\n**Example:** Le framework DeepXplore a utilisé la couverture par seuil (threshold = 0.75) en approche white-box pour trouver efficacement des milliers de comportements de cas limites incorrects dans divers réseaux de neurones profonds.",
    visualSummary: "## Structure d'un Réseau de Neurones Profond (DNN)\n\n    INPUT              HIDDEN LAYERS          OUTPUT\n    LAYER                                     LAYER\n    +------+     +------+     +------+     +------+\n    |  x1  |---->|  h11 |---->|  h21 |---->|      |\n    |      |---->|  h12 |---->|  h22 |---->|  y1  |\n    |  x2  |---->|  h13 |---->|  h23 |---->|      |\n    |      |---->|  h14 |---->|  h24 |---->|  y2  |\n    |  x3  |                               |      |\n    +------+     +------+     +------+     +------+\n    (pixels)     (features)   (patterns)   (classe)\n\n    Chaque neurone reçoit toutes les activations de la couche précédente\n    + poids des connexions + biais individuel\n    --> calcule sa valeur d'activation\n\n## Calcul dans un Neurone\n\n    Neurones couche précédente\n    [a1, a2, a3, ...] × [w1, w2, w3, ...]  +  biais\n                     |\n                     v\n               Fonction d'Activation\n                     |\n                     v\n         Valeur d'Activation\n         (entre -1 et +1)\n         -1 = \"désintéressé\"\n         +1 = \"très intéressé\"\n\n## Mesures de Couverture pour les Réseaux de Neurones\n\n    Critère               | Seuil        | Valeur Pratique\n    ----------------------+--------------+----------------\n    Neuron Coverage       | activation>0 | Très facile (100%)\n                          |              | Alarm si non atteint\n    Threshold Coverage    | activation>T | Plus sélectif\n                          | (ex: 0.75)   | Trouve les corner cases\n    Sign-Change Coverage  | +/- requis   | Exhaustif par signe\n    Value-Change Coverage | delta>D      | Exhaustif par delta\n    Sign-Sign Coverage    | Paires layers| Similaire MC/DC\n\n    Note: Domaine de RECHERCHE actif depuis 2017 seulement !\n    Peu de preuves objectives d'efficacité (comme pour les\n    mesures traditionnelles d'ailleurs)",
    useCases: "## Cas d'Usage 1 : Reconnaissance d'Images Médicales (DNN en Production)\n\n**Contexte business :** Un CHU développe un système de détection de rétinopathie diabétique par analyse de photos du fond d'oeil. Un DNN avec 50 couches est utilisé (ResNet-50, pré-entraîné sur ImageNet).\n\n**Architecture du réseau :**\n- Couche d'entrée : pixels de l'image (224×224×3)\n- 50 couches cachées (feature extraction progressive)\n- Couche de sortie : niveau de sévérité (0-4)\n\n**Défis de test spécifiques aux DNN :**\n- Les mesures de couverture traditionnelles (instructions, branches) sont inadaptées\n- La couverture par seuil (threshold > 0.75) est utilisée pour identifier les cas limites\n- Test adversarial : légères modifications imperceptibles de l'image peuvent changer le diagnostic\n\n**Implications pour les tests :**\n- Appliquer la couverture par seuil pour identifier les images \"incertaines\"\n- Tester la robustesse avec des images de qualité variable (artefacts, luminosité)\n- Évaluer les performances sur des sous-groupes (âge du patient, qualité de l'image)\n- Tester le comportement avec des images adversariales (bruit imperceptible ajouté)\n\n---\n\n## Cas d'Usage 2 : Chatbot de Service Client (Perceptron Multi-couches)\n\n**Contexte business :** Une banque déploie un chatbot NLP pour répondre aux questions fréquentes. Le modèle est un réseau de neurones multi-couches entraîné sur des milliers d'échanges clients.\n\n**Défis de test :**\n- Le réseau apprend des patterns dans les conversations mais peut créer des associations inattendues\n- Les valeurs d'activation des neurones cachés sont difficiles à interpréter\n- Le comportement peut changer après chaque cycle de ré-entraînement\n\n**Utilisation des mesures de couverture :**\n- Neuron Coverage : vérifier que tous les neurones sont activés sur l'ensemble de test\n- Sign-Change Coverage : s'assurer que les cas de test couvrent les deux polarités d'activation\n\n**Implications pour les tests :**\n- Tester avec des questions reformulées de manière identique (robustesse)\n- Vérifier la cohérence des réponses pour des questions sémantiquement similaires\n- Tester les questions hors-périmètre (le chatbot doit reconnaître ses limites)\n- Surveiller les performances après chaque ré-entraînement (régression)",
    mnemonics: "## Mnémonique 1 : Structure du DNN — \"IHO\"\n\n**I** --> Input Layer (entrée : données brutes)\n**H** --> Hidden Layers (couches cachées : traitement)\n**O** --> Output Layer (sortie : résultat)\n\nMémo : \"IHO = In, Hidden, Out\"\n\"Les données entrent (I), sont traitées (H), et sortent (O)\"\n\n---\n\n## Mnémonique 2 : Mesures de Couverture DNN — \"NTSV-SS\"\n\n**N** --> Neuron Coverage (activation > 0)\n**T** --> Threshold Coverage (activation > seuil T)\n**S** --> Sign-Change Coverage (+ ET -)\n**V** --> Value-Change Coverage (delta > D)\n**SS** --> Sign-Sign Coverage (paires de couches)\n\nMémo : \"NTSV-SS = Neural Testing Special Values, Sign-Sign\"\nRègle : N est le plus facile, SS est le plus complexe (similaire à MC/DC)\n\n---\n\n## Mnémonique 3 : Valeur d'Activation — \"-1 à +1\"\n\n-1 = \"Le neurone est DÉSINTÉRESSÉ par l'input\"\n 0 = \"Le neurone est NEUTRE / INACTIF\"\n+1 = \"Le neurone est TRÈS INTÉRESSÉ par l'input\"\n\nAnalogie : comme une note de sentiment (-1 négatif, +1 positif)\n\n---\n\n## Tableau Mémo : Perceptron vs DNN\n\n| Aspect | Perceptron Simple | DNN |\n|--------|------------------|-----|\n| Couches | 1 seule couche | Plusieurs couches |\n| Complexité | Simple | Complexe |\n| Capacité | Problèmes linéaires | Problèmes non-linéaires |\n| Usage | Historique/éducatif | Utilisation actuelle |\n| Apprentissage | Données étiquetées | Données étiquetées (supervisé) |"
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
    lessonText: "## Tests des Systèmes Basés sur l'IA — Vue d'Ensemble\n\n### 7.1 Spécification des Systèmes IA\n\nLes exigences système et les spécifications de conception sont également importantes pour les systèmes IA et les systèmes conventionnels. Elles fournissent la base pour que les testeurs vérifient si le comportement réel du système est conforme aux exigences spécifiées.\n\n**Défis de spécification spécifiques aux systèmes IA :**\n\n| Défi | Description |\n|------|-------------|\n| Objectifs business de haut niveau | Les projets IA démarrent souvent avec un dataset et cherchent quelles prédictions peuvent en être tirées |\n| Précision inconnue a priori | La précision du système IA est souvent inconnue avant les résultats des tests indépendants |\n| Nature probabiliste | Nécessite de spécifier des tolérances pour certaines exigences de qualité |\n| Réplication du comportement humain | Conduit à des exigences de comportement mal spécifiées quand l'objectif est d'être \"aussi bon que l'humain\" |\n| Interfaces naturelles | IA utilisant NLP, vision par ordinateur ou interaction physique nécessite une flexibilité accrue |\n| Caractéristiques qualité IA | Adaptabilité, flexibilité, évolution, autonomie sont difficiles à définir et à tester |\n\n**Warning:** Si les spécifications sont incomplètes et manquent de testabilité, cela introduit un **problème d'oracle de test** — il devient difficile de déterminer si un résultat est correct ou non.\n\n### 7.2 Niveaux de Test pour les Systèmes IA\n\nLes systèmes IA comprennent généralement des composants IA et non-IA. Les composants non-IA peuvent être testés avec des approches conventionnelles, tandis que les composants IA peuvent nécessiter des approches différentes.\n\n**Différence majeure avec les systèmes conventionnels :** Deux nouveaux niveaux de test spécialisés sont introduits pour gérer explicitement les tests des données d'entrée et des modèles utilisés dans les systèmes IA.\n\n#### 7.2.1 Tests des Données d'Entrée (Input Data Testing)\n\n**Objectif :** S'assurer que les données utilisées par le système pour l'entraînement et les prédictions sont de la plus haute qualité.\n\nTechniques utilisées :\n- Revues (reviews)\n- Techniques statistiques (ex : test des données pour les biais)\n- Analyse Exploratoire des Données (EDA)\n- Tests statiques et dynamiques du pipeline de données\n\n**Tip:** La pipeline de données d'entraînement peut être très différente de la pipeline opérationnelle. Les tester séparément ET tester leur équivalence fonctionnelle est recommandé.\n\n#### 7.2.2 Tests du Modèle ML (ML Model Testing)\n\n**Objectif :** S'assurer que le modèle sélectionné satisfait les critères de performance spécifiés.\n\nTests inclus :\n- Critères de performance fonctionnelle ML (voir Chapitre 5)\n- Critères d'acceptation non-fonctionnels (vitesse d'entraînement, vitesse de prédiction, ressources de calcul, adaptabilité, transparence)\n- Couverture white-box (voir Chapitre 6) si approprié\n- Optimisation du framework, algorithme, modèle, paramètres et hyperparamètres\n\n#### 7.2.3 Tests des Composants (Component Testing)\n\nNiveau de test conventionnel applicable aux composants non-modèle : interfaces utilisateur, composants de communication.\n\n#### 7.2.4 Tests d'Intégration des Composants\n\nS'assurer que les composants système (IA et non-IA) interagissent correctement. Inclut des **tests API** si l'IA est fournie comme service (AIaaS).\n\n#### 7.2.5 Tests Système\n\nTest du système complet de composants intégrés, des points de vue fonctionnel et non-fonctionnel, dans un environnement de test proche de l'environnement opérationnel. Les critères de performance ML sont re-testés pour s'assurer que les résultats initiaux ne sont pas affectés négativement.\n\n#### 7.2.6 Tests d'Acceptation\n\nDéterminer si le système complet est acceptable pour le client. La définition des critères d'acceptation peut être particulièrement difficile pour les systèmes IA.\n\n### 7.3 Données de Test pour les Systèmes IA\n\n**Défis potentiels liés aux données de test :**\n\n- **Big data** : Données volumineuses, à haute vélocité et haute variété difficiles à créer et gérer\n- **Évolution dans le temps** : Les données d'entrée peuvent nécessiter de changer (ex : photos \"vieillis\" pour tester la reconnaissance faciale sur plusieurs années)\n- **Données personnelles/confidentielles** : Nécessite des techniques spéciales de sanitisation, chiffrement ou occultation\n- **Même implémentation que les data scientists** : Peut masquer des défauts dans les étapes d'acquisition et de pré-traitement\n\n### 7.4 Tests pour le Biais d'Automatisation (Automation Bias)\n\n**Definition:** Le **biais d'automatisation** (ou biais de complaisance) est la tendance des humains à faire trop confiance aux recommandations des systèmes IA.\n\n**Deux formes de biais d'automatisation :**\n\n| Forme | Description | Exemple |\n|-------|-------------|---------|\n| **Acceptation aveugle** | L'humain accepte les recommandations sans considérer d'autres sources | Pré-remplissage automatique de formulaires que l'humain valide sans vérifier — réduit la qualité de décision de ~5% |\n| **Surveillance insuffisante** | L'humain ne surveille pas adéquatement le système | Véhicules semi-autonomes — le conducteur devient trop confiant et ne réagit pas assez vite en cas d'urgence |\n\n**Tip:** Les testeurs doivent comprendre comment la prise de décision humaine peut être compromise et tester à la fois la qualité des recommandations du système ET la qualité des inputs humains correspondants.\n\n### 7.5 Documentation d'un Composant IA\n\nUne documentation claire améliore les tests en fournissant de la transparence sur l'implémentation du système IA.\n\n**Contenu typique de la documentation d'un composant IA :**\n\n| Catégorie | Éléments |\n|-----------|---------|\n| **Général** | Identifiants, description, détails développeur, exigences matérielles, licence, version |\n| **Conception** | Hypothèses et décisions techniques |\n| **Usage** | Cas d'usage primaires/secondaires, approche d'auto-apprentissage, biais connus, problèmes éthiques, sécurité, transparence |\n| **Datasets** | Features, collecte, disponibilité, pré-traitement, étiquetage, taille, vie privée, sécurité, biais |\n| **Tests** | Dataset de test, indépendance des tests, résultats, approche pour robustesse/explicabilité/concept drift |\n| **ML et Performance** | Algorithme ML, poids, dataset de validation, métriques sélectionnées, seuils, valeurs réelles |\n\n**Domaines clés de documentation importants pour les tests :**\n- But du système et exigences fonctionnelles/non-fonctionnelles\n- Information architecturale (interactions composants IA et non-IA)\n- Spécification de l'environnement opérationnel\n- Source des données d'entrée et métadonnées associées\n- Manière dont le système s'adapte aux changements\n- Détails des utilisateurs attendus du système\n\n### 7.6 Tests pour le Concept Drift (Dérive de Concept)\n\n**Definition:** Le **concept drift** est le phénomène par lequel l'environnement opérationnel change dans le temps sans que le modèle entraîné ne change en correspondance, causant une dégradation progressive de la précision et de l'utilité des sorties du modèle.\n\n**Exemples de concept drift :**\n- L'impact de campagnes marketing sur le comportement des clients (changement saisonnier)\n- Changements culturels, moraux ou sociétaux abruptes\n- L'impact de la pandémie COVID-19 sur les modèles de prévision des ventes et des marchés financiers\n\n**Gestion du concept drift :**\n- Tests réguliers du modèle opérationnel contre ses critères de performance ML convenus\n- Si drift détecté : retrait du système OU ré-entraînement avec des données à jour\n- Après ré-entraînement : tests de confirmation + tests de régression + éventuellement A/B testing (le système B mis à jour doit surpasser le système A original)\n\n### 7.7 Sélectionner une Approche de Test pour un Système ML\n\nL'approche de test est basée sur une **analyse de risques** et inclut des tests conventionnels ET des tests spécialisés pour les composants IA.\n\n**Risques typiques et mitigations pour les systèmes ML :**\n\n| Risque | Mitigation |\n|--------|-----------|\n| Qualité des données inférieure aux attentes | Revues, EDA, tests dynamiques (Section 4.4) |\n| Pipeline de données opérationnel défaillant | Tests dynamiques des composants du pipeline, tests d'intégration |\n| Workflow ML sous-optimal | Revues avec experts, accord préalable sur le workflow |\n| Framework/algorithme/hyperparamètres sous-optimaux | Revues avec experts, meilleure gestion des étapes d'évaluation et de tuning |\n| Critères ML non satisfaits en opération malgré tests en isolation | Revues des datasets par experts/utilisateurs pour vérifier la représentativité |\n| Critères ML satisfaits mais utilisateurs insatisfaits | Revues des métriques sélectionnées, tests basés sur l'expérience |\n| Système auto-apprenant ne fournit pas le service attendu | Revues des données d'auto-apprentissage, tests de régression automatisés |\n| Utilisateurs frustrés par le manque d'explicabilité | Tests d'explicabilité, interprétabilité et transparence (Section 8.6) |\n| Overfitting : bonnes performances sur données similaires, mauvaises sur nouvelles | Tests avec dataset complètement indépendant, tests basés sur l'expérience |",
    visualSummary: "## Niveaux de Test pour les Systèmes IA\n\n    +-------------------------------------------------+\n    | NIVEAUX DE TEST SYSTÈMES IA (de bas en haut)   |\n    +-------------------------------------------------+\n    |                                                 |\n    | 1. INPUT DATA TESTING (NOUVEAU)                 |\n    |    --> Qualité des données d'entraînement       |\n    |    --> Reviews, EDA, tests pipeline             |\n    |                                                 |\n    | 2. ML MODEL TESTING (NOUVEAU)                   |\n    |    --> Métriques performance fonctionnelle ML   |\n    |    --> Vitesse, ressources, couverture          |\n    |                                                 |\n    | 3. COMPONENT TESTING (Conventionnel)            |\n    |    --> Composants non-modèle (UI, APIs)         |\n    |                                                 |\n    | 4. COMPONENT INTEGRATION TESTING (Conventionnel)|\n    |    --> Interaction IA + non-IA                  |\n    |    --> Tests API pour AIaaS                     |\n    |                                                 |\n    | 5. SYSTEM TESTING (Conventionnel)               |\n    |    --> Tests fonctionnels et non-fonctionnels   |\n    |    --> Adversarial testing, explicabilité        |\n    |                                                 |\n    | 6. ACCEPTANCE TESTING (Conventionnel)           |\n    |    --> Système acceptable pour le client ?      |\n    +-------------------------------------------------+\n\n## Concept Drift — Évolution dans le Temps\n\n    Précision\n    du modèle\n    ^\n    100%|.......\n        |      ...........\n        |                 ..............\n        |                              ....\n    0%  +-----------------------------------> Temps\n        |Déploiement    |Concept       |Action\n        |               |Drift         |requise\n\n    Changements pouvant causer le Concept Drift :\n    - Saisonnalité (comportement client)\n    - Changements culturels/sociétaux\n    - Événements abruptes (COVID-19, crises)\n    - Évolution technologique\n\n    Détection: Tests réguliers des métriques ML\n    Mitigation: Ré-entraînement + Confirmation + A/B Test\n\n## Biais d'Automatisation — Deux Formes\n\n    FORME 1: Acceptation Aveugle\n    Recommandation IA --> [Humain valide sans vérifier]\n    Impact: -5% qualité de décision en moyenne\n\n    FORME 2: Surveillance Insuffisante\n    Système IA --> [Humain ne surveille plus]\n    Impact: Humain incapable de réagir en urgence\n    Exemple: Voiture semi-autonome",
    useCases: "## Cas d'Usage 1 : Ré-entraînement après Concept Drift (Plateforme E-commerce)\n\n**Contexte business :** Une grande plateforme e-commerce utilise un modèle de prévision des ventes. Après la pandémie COVID-19, les performances du modèle se dégradent fortement car les comportements d'achat ont radicalement changé.\n\n**Concept drift identifié :**\n- Le modèle prédit des ventes basées sur les patterns pré-pandémie\n- Les nouvelles catégories (produits de santé, télétravail) sont sous-évaluées\n- Les catégories traditionnelles (voyages, loisirs) sont surévaluées\n\n**Processus de mitigation :**\n1. Détection par monitoring régulier des métriques ML\n2. Ré-entraînement avec données post-pandémie\n3. Tests de confirmation : le nouveau modèle satisfait les critères ML\n4. Tests de régression : pas de régression sur les catégories stables\n5. A/B testing : le modèle B (nouveau) surpasse le modèle A (ancien)\n\n**Implications pour les tests :**\n- Définir des seuils d'alerte pour les métriques ML (ex : déclencher alerte si accuracy < 85%)\n- Automatiser les tests de régression pour surveiller le déploiement\n- Documenter le drift détecté pour améliorer les futures spécifications\n\n---\n\n## Cas d'Usage 2 : Documentation d'un Système de Scoring RH (Section 7.5)\n\n**Contexte business :** Une entreprise déploie un système IA pour aider les RH à présélectionner des candidats. Le système utilise un modèle ML propriétaire pour scorer les CV.\n\n**Problèmes de documentation identifiés :**\n- Aucune documentation sur les datasets d'entraînement (biais potentiels inconnus)\n- Pas de spécification des critères de performance ML retenus\n- Absence de documentation sur les cas d'usage limites du système\n\n**Implications pour les tests — basées sur la documentation manquante :**\n- Impossible de vérifier les biais sans documentation sur les données\n- Impossibilité de définir des critères d'acceptation clairs\n- Non-conformité potentielle avec le RGPD (décisions automatiques sur des individus)\n\n**Actions correctives requises :**\n- Exiger une documentation complète avant tout test\n- Effectuer des tests de biais même sans documentation (tests en boîte noire)\n- Vérifier que les utilisateurs (RH) comprennent les limites du système (biais d'automatisation)\n\n---\n\n## Cas d'Usage 3 : Sélection d'Approche de Test ML (Voiture Autonome)\n\n**Contexte business :** Un constructeur automobile développe un système de conduite autonome de niveau 4. L'approche de test doit être définie avant le développement.\n\n**Analyse de risques ML :**\n- Qualité des données capteurs : risque élevé → tests input data, EDA, tests pipeline\n- Concept drift (conditions routières) : risque élevé → tests de concept drift hebdomadaires\n- Biais d'automatisation : risque élevé → tests comportement humain-machine\n- Explicabilité des décisions : requis par régulation → tests explicabilité systématiques\n\n**Approche de test sélectionnée :**\n1. Input Data Testing : validation de toutes les données capteurs en temps réel\n2. ML Model Testing : métriques performance + couverture neurones\n3. System Testing : tests en simulateur + essais sur route contrôlée\n4. Tests spécialisés : adversarial testing, concept drift, biais, explicabilité\n5. Acceptance Testing : conformité ISO 26262 + SOTIF",
    mnemonics: "## Mnémonique 1 : Les 6 Niveaux de Test IA — \"IDC CIS A\"\n\n**I** --> Input Data Testing (Données entrée)\n**D** --> (ML) moDel Testing (Modèle ML)\n**C** --> Component Testing (Composants)\n**C** --> Component Integration (Intégration composants)\n**S** --> System Testing (Système)\n**A** --> Acceptance Testing (Acceptation)\n\nMémo : \"IDC CIS A = In, Des, Com, Com, Sys, Acc\"\nLes 2 premiers (I et D) sont NOUVEAUX pour l'IA !\n\n---\n\n## Mnémonique 2 : Concept Drift — \"CD-R-RAB\"\n\n**C** --> Concept **D**rift détecté (tests réguliers)\n**R** --> **R**etirer le système OU\n**R** --> **R**é-entraîner avec données fraîches\n**A** --> Tests de confirmation (**A**cceptance)\n**B** --> **A/B** Testing (nouveau modèle vs ancien)\n\nRègle : \"Si CD --> Retire ou Ré-entraîne, puis RAB (Régression + Acceptation + A/B)\"\n\n---\n\n## Mnémonique 3 : Biais d'Automatisation — \"A-C\" (Acceptation / Complaisance)\n\nBiais **A**cceptation : Humain accepte TROP les recommandations IA (forme 1)\nBiais **C**omplaisance : Humain surveille PAS ASSEZ le système IA (forme 2)\n\nRappel : Les deux réduisent la qualité des décisions humaines !\nTest nécessaire : évaluer AUSSI le comportement humain, pas seulement le système IA\n\n---\n\n## Tableau : Risques ML et Mitigations\n\n| Risque | Mitigation Principale |\n|--------|----------------------|\n| Mauvaise qualité données | Reviews + EDA + Tests dynamiques |\n| Pipeline défaillant | Tests composants + intégration |\n| Workflow ML sous-optimal | Revues experts + accord préalable |\n| Mauvais hyperparamètres | Revues experts + tuning rigoureux |\n| Concept drift | Tests réguliers + ré-entraînement |\n| Overfitting | Dataset test indépendant |\n| Utilisateurs insatisfaits | Tests expérience + revue métriques |"
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
    lessonText: "## Tests des Systèmes IA — Défis Spécifiques\n\n### 8.1 Défis du Test des Systèmes Auto-Apprenants\n\nLes systèmes auto-apprenants (self-learning) modifient leur propre comportement au fil du temps, ce qui crée des défis de test inédits.\n\n**Principaux défis :**\n\n| Défi | Description | Approche |\n|------|-------------|----------|\n| **Changement inattendu** | Le système modifie son implémentation ; les tests précédents peuvent devenir invalides | Concevoir des tests robustes aux changements comportementaux |\n| **Critères d'acceptation complexes** | Difficile de spécifier précisément l'amélioration attendue | Définir des critères basés sur des améliorations mesurables |\n| **Temps de test insuffisant** | Le système s'adapte trop rapidement pour des tests manuels | Automatisation des tests en continu |\n| **Ressources** | Le self-learning consomme des ressources (CPU, mémoire) | Spécifier les limites de ressources dans les critères d'acceptation |\n| **Environnement opérationnel** | Un environnement hors des plages prévues peut déclencher des changements | Définir les plages d'environnement comme critères d'acceptation |\n| **Comportement indésirable** | Le système peut \"apprendre\" à répondre aux tests plutôt qu'au problème réel | Varier régulièrement les tests ; surveiller les comportements anormaux |\n\n**Warning:** Si le même ensemble de tests est répété sur un système auto-apprenant, le système peut apprendre à y répondre correctement sans résoudre le vrai problème. Il est important de varier les tests régulièrement.\n\n### 8.2 Test des Systèmes IA Autonomes\n\nUn système autonome doit savoir quand agir seul et quand demander l'intervention humaine.\n\n**Scenarios à tester pour l'autonomie :**\n- Le système demande-t-il l'intervention humaine quand il devrait (changement d'environnement, dépassement des limites d'autonomie) ?\n- Le système demande-t-il l'intervention humaine après un délai spécifié ?\n- Le système demande-t-il inutilement l'intervention humaine quand il devrait rester autonome ?\n\n**Tip:** L'analyse des valeurs limites appliquée à l'environnement opérationnel est utile pour générer les conditions nécessaires à ce type de tests.\n\n### 8.3 Tests du Biais Algorithmique, d'Échantillonnage et Inapproprié\n\nUn système ML doit être évalué contre les différents types de biais (voir Chapitre 2) :\n\n**Types de biais à tester :**\n\n| Type de Biais | Méthode de Test |\n|---------------|----------------|\n| **Biais algorithmique** | Analyse pendant l'entraînement, l'évaluation et le réglage du modèle |\n| **Biais d'échantillonnage** | Revue des sources et processus d'acquisition des données d'entraînement |\n| **Biais inapproprié** | Mesurer l'impact des changements d'entrées sur les sorties pour différents groupes (méthode LIME) |\n\n**Definition:** La méthode **LIME** (Local Interpretable Model-Agnostic Explanations) est une approche model-agnostique qui utilise des perturbations d'entrées et l'analyse des sorties pour fournir aux testeurs une vue des relations entrées-sorties. Elle peut être appliquée en production ou avant la mise en production.\n\n**Tip:** Pour tester le biais sur des variables \"cachées\" (non présentes dans les inputs mais inférées par l'algorithme), il peut être utile d'obtenir des données externes (ex : données démographiques) et de les corréler aux résultats.\n\n### 8.4 Défis du Test des Systèmes Probabilistes et Non-Déterministes\n\nLa plupart des systèmes probabilistes sont aussi non-déterministes.\n\n**Défis principaux :**\n\n1. **Résultats multiples valides** — Pour le même ensemble d'entrées et préconditions, il peut exister plusieurs sorties valides. Cela complique :\n   - Les tests de confirmation (on ne peut pas simplement réutiliser les mêmes tests)\n   - Les tests de régression (les résultats peuvent varier)\n   - La reproductibilité\n   - L'automatisation\n\n2. **Connaissance approfondie requise** — Le testeur doit définir des résultats attendus sophistiqués incluant des tolérances (ex : \"le résultat est-il dans les 2% de la solution optimale ?\")\n\n3. **Tests multiples nécessaires** — Pour obtenir un résultat statistiquement valide, il faut souvent exécuter un test plusieurs fois.\n\n### 8.5 Défis du Test des Systèmes IA Complexes\n\nLes systèmes IA sont souvent utilisés pour des tâches trop complexes pour les humains, créant un **problème d'oracle de test** (voir Section 8.7) :\n\n- Les testeurs ne peuvent pas déterminer les résultats attendus comme ils le feraient normalement\n- La structure interne peut être générée par code, trop complexe pour être comprise par les humains\n- Le système ne peut être testé qu'en boîte noire\n- Même si la structure interne est visible, cela ne fournit aucune information utile supplémentaire\n\n**Example:** Un système de reconnaissance faciale utilise généralement un modèle pour détecter un visage dans une image et un second pour reconnaître de quel visage il s'agit. Les interactions entre ces composants peuvent être complexes et difficiles à appréhender.\n\n### 8.6 Test de la Transparence, Interprétabilité et Explicabilité\n\n**Niveaux de visibilité :**\n\n| Concept | Définition | Comment Tester |\n|---------|------------|----------------|\n| **Transparence** | Niveau de visibilité de l'algorithme et des données | Comparer la documentation sur les données et l'algorithme avec l'implémentation réelle |\n| **Interprétabilité** | Niveau de compréhension du fonctionnement de la technologie IA | Questionnaires utilisateurs et parties prenantes (varie selon les profils) |\n| **Explicabilité** | Niveau de compréhension de comment le système est arrivé à un résultat | Tests dynamiques avec perturbations du modèle ML (ex : méthode LIME) |\n\n**Tip:** Différents stakeholders ont des besoins différents en matière d'interprétabilité. Mesurer et tester le niveau de compréhension est difficile car les stakeholders varient dans leurs capacités.\n\n**Definition:** La méthode **LIME** est model-agnostique et utilise des perturbations d'entrées dynamiquement injectées et l'analyse des sorties pour fournir une vue de la relation entrées-sorties. Elle est limitée à fournir des raisons possibles (pas définitives) et n'est pas applicable à tous les types d'algorithmes.\n\n### 8.7 Oracles de Test pour les Systèmes IA\n\n**Definition:** Un **oracle de test** est la source utilisée pour déterminer le résultat attendu d'un test. Le défi de détermination des résultats attendus est connu sous le nom de **problème d'oracle de test**.\n\n**Sources du problème :**\n- Systèmes complexes, non-déterministes ou probabilistes → difficile d'établir un oracle sans connaître la \"vérité terrain\" (ground truth)\n- Systèmes auto-apprenants → modifient eux-mêmes et rendent les attentes fonctionnelles fréquemment à mettre à jour\n- Comportement subjectif → ex : les assistants virtuels (Siri, Alexa) dont les résultats varient selon les utilisateurs\n\n**Solutions partielles :**\n- Définir des résultats attendus avec limites ou tolérances\n- Consulter des experts (avec les mises en garde liées à la variabilité humaine)\n- Utiliser des techniques spéciales : A/B testing, back-to-back testing, metamorphic testing (voir Chapitre 9)\n\n**Caveats sur les experts :**\n- Les experts varient en niveau de compétence\n- Les experts peuvent ne pas être d'accord entre eux\n- Les experts peuvent ne pas approuver l'automatisation de leur jugement → évaluation en double-aveugle nécessaire\n\n### 8.8 Objectifs de Test et Critères d'Acceptation\n\nLes objectifs de test et critères d'acceptation doivent être basés sur les **risques produit perçus**, eux-mêmes issus des caractéristiques de qualité requises.\n\n**Caractéristiques de qualité IA spécifiques (au-delà d'ISO 25010) :**\n\n| Aspect | Critères d'Acceptation |\n|--------|----------------------|\n| **Adaptabilité** | Fonctionnement correct après adaptation ; temps d'adaptation ; ressources utilisées |\n| **Flexibilité** | Comportement hors spécification initiale ; temps/ressources pour gérer nouveau contexte |\n| **Évolution** | Qualité d'apprentissage ; comportement lors du concept drift |\n| **Autonomie** | Réponse hors enveloppe opérationnelle ; résistance aux demandes d'intervention inappropriées |\n| **Transparence/Explicabilité** | Accès facile à l'algorithme et dataset ; niveau de compréhension des utilisateurs |\n| **Liberté de biais** | Test avec dataset indépendant et exempt de biais ; comparaison avec données externes |\n| **Éthique** | Vérification contre une liste de contrôle (ex : EC Assessment List for Trustworthy AI) |\n| **Systèmes probabilistes** | Pas de critères précis possibles ; résultats légèrement différents pour les mêmes tests |\n| **Effets de bord** | Identifier les effets potentiellement nocifs et créer des tests les provoquant |\n| **Reward Hacking** | Tests indépendants avec mesure de succès différente de l'agent testé |\n| **Sécurité** | Évaluation en environnement virtuel ; tentatives de forcer le système à se nuire |",
    visualSummary: "## Défis du Test des Systèmes IA — Vue d'Ensemble\n\n    Système IA\n         |\n    +---------+----------+----------+----------+\n    |         |          |          |          |\n    v         v          v          v          v\nAuto-      Autonome   Probabiliste  Complexe  Biais\napprenant              /Non-det.\n\n## Défis Principaux par Type de Système\n\n    AUTO-APPRENANT\n    +-----------------------------------------+\n    | Comportement change dans le temps       |\n    | Tests précédents peuvent invalider      |\n    | → Tester comportement adaptatif        |\n    | → Critères d'acceptation d'amélioration|\n    | → Tests automatisés en continu         |\n    +-----------------------------------------+\n\n    AUTONOME\n    +-----------------------------------------+\n    | Quand agir seul vs demander l'aide ?    |\n    | → Tester les limites d'autonomie        |\n    | → BVA sur l'environnement opérationnel  |\n    +-----------------------------------------+\n\n    PROBABILISTE/NON-DÉTERMINISTE\n    +-----------------------------------------+\n    | Même input → résultats différents       |\n    | → Résultats avec tolérances            |\n    | → Exécuter tests plusieurs fois        |\n    | → Résultats statistiquement valides    |\n    +-----------------------------------------+\n\n## Problème d'Oracle de Test\n\n    Test          Résultat Attendu ?\n    Input  -->   [   SUT IA   ]  -->  ???\n                                      |\n    Difficile car:                    v\n    - Complexité > capacité humaine   Oracle ??\n    - Non-déterministe\n    - Subjectif\n\n    Solutions:\n    - Tolérances (ex : \"résultat dans 2%\")\n    - Experts (limités, subjectifs)\n    - A/B Testing\n    - Back-to-Back Testing\n    - Metamorphic Testing\n\n## Critères d'Acceptation IA (§8.8)\n\n    ISO 25010 STANDARD   +   CRITÈRES IA SPÉCIFIQUES\n    +---------------+       +------------------------+\n    | Fonctionnalité|       | Adaptabilité           |\n    | Performance   |       | Flexibilité            |\n    | Compatibilité |       | Evolution              |\n    | Utilisabilité |       | Autonomie              |\n    | Fiabilité     |       | Transparence/Explicab. |\n    | Sécurité      |       | Liberté de biais       |\n    | Maintenabilité|       | Ethique                |\n    | Portabilité   |       | Reward Hacking, Safety |\n    +---------------+       +------------------------+",
    useCases: "## Cas d'Usage 1 : Voiture Autonome de Niveau 3 (Autonomie et Auto-apprentissage)\n\n**Contexte business :** Un constructeur automobile déploie un véhicule de niveau 3 (conduite autonome en certaines conditions, retour humain requis pour situations complexes). Le système ML s'améliore avec les données collectées lors des trajets.\n\n**Défis identifiés :**\n- Système auto-apprenant : le comportement change avec chaque mise à jour du modèle\n- Système autonome : doit savoir quand reprendre le contrôle\n- Systèmes probabilistes : les décisions ne sont pas déterministes\n\n**Stratégie de test :**\n- Tests de l'autonomie : forcer le système hors de son enveloppe opérationnelle (brouillard dense, signalisation endommagée, obstacles inattendus)\n- Tests adaptatifs : vérifier que les performances s'améliorent après chaque mise à jour (A/B testing entre versions)\n- BVA sur l'environnement : tester les conditions limites (nuit vs jour, pluie légère vs forte, etc.)\n\n**Critères d'acceptation :**\n- Adaptabilité : adaptation aux nouvelles conditions routières en < 1000 km\n- Autonomie : demande d'intervention humaine dans 100% des scénarios critiques définis\n- Safety : aucun incident lors de 1 million de km de simulation virtuelle\n\n---\n\n## Cas d'Usage 2 : Système de Recommandation RH (Test du Biais)\n\n**Contexte business :** Une entreprise utilise un système IA pour pré-sélectionner des candidats pour des postes. Le système a été entraîné sur des données historiques d'embauche.\n\n**Défis identifiés :**\n- Biais d'échantillonnage possible : les données historiques reflètent les biais passés de sélection\n- Biais inapproprié : le système pourrait discriminer sur le genre, l'origine, l'âge\n\n**Stratégie de test :**\n- Revue des données d'entraînement : identifier la représentation de chaque groupe (genre, nationalité, âge)\n- Tests LIME : perturber les inputs pour identifier quels facteurs influencent le plus les décisions\n- Tests avec données externes : comparer les distributions de sélection avec des données démographiques nationales\n- Tests de groupes : comparer le taux de sélection entre groupes comparables\n\n**Critères d'acceptation :**\n- Aucune disparité de taux de sélection > 5% entre groupes ayant des qualifications équivalentes\n- Les facteurs \"protégés\" (genre, origine, âge) doivent avoir une importance proche de zéro dans le modèle LIME\n\n---\n\n## Cas d'Usage 3 : Système Expert Médical (Oracle de Test)\n\n**Contexte business :** Un hôpital déploie un système expert pour l'aide au diagnostic en oncologie. Le système compare les cas avec une base de connaissances médicales.\n\n**Défi central : Problème d'oracle de test**\n- Les médecins experts peuvent diverger dans leurs diagnostics\n- La \"bonne réponse\" peut ne pas exister avec certitude\n- Les résultats du système sont subjectifs et contextuels\n\n**Approche de test :**\n- Panel d'experts : au moins 5 oncologistes indépendants évaluent chaque cas de test\n- Double-aveugle : les experts ne savent pas si le résultat vient du système ou d'un collègue\n- Tolérances : le système est considéré correct si son résultat est dans le consensus à 80% des experts\n- Metamorphic testing : si un facteur de risque augmente, la probabilité de cancer doit augmenter (ou rester stable)",
    mnemonics: "## Mnémonique 1 : Les Défis du Test IA — \"SAPCP-BEO\"\n\n**S** --> Self-learning (auto-apprenant) : comportement change\n**A** --> Autonomy (autonomie) : quand agir seul vs avec aide\n**P** --> Probabilistic (probabiliste) : résultats variables\n**C** --> Complexity (complexité) : oracle difficile\n**P** --> Bias (biais) : algorithmique, d'échantillonnage, inapproprié\n**B** --> (omitted)\n**E** --> Explainability (explicabilité) : transparence, interprétabilité\n**O** --> Oracle (oracle de test) : problème central pour l'IA\n\nMémo : \"Super AI Pose Certains Problèmes : Biais, Explicabilité, Oracle\"\n\n---\n\n## Mnémonique 2 : Types d'Oracles de Substitution\n\nQuand on ne peut pas avoir un oracle parfait, utiliser :\n\n**A** --> A/B Testing (comparer 2 versions du même système)\n**B** --> Back-to-Back Testing (pseudo-oracle : système équivalent)\n**M** --> Metamorphic Testing (relations entre tests, pas valeurs absolues)\n**T** --> Tolerances (résultats avec limites d'acceptabilité)\n**E** --> Experts (humains qualifiés, avec mises en garde)\n\nMémo : \"ABMTE = Au-delà du standard, je trouve des Experts\"\n\n---\n\n## Mnémonique 3 : Caractéristiques de Qualité IA au-delà d'ISO 25010\n\nStandard ISO 25010 :\n\"**F**onctionnalité, **P**erformance, **C**ompatibilité, **U**tilisabilité, **F**iabilité, **S**écurité, **M**aintenabilité, **P**ortabilité\" = FP CUFSMP\n\nSpécifique IA (ajouts) :\n\"**A**daptabilité, **F**lexibilité, **E**volution, **A**utonomie, **T**ransparence, **B**iais, **E**thique, **S**ecurity\" = AFEABTES\n\nMémo : \"Le FP CUFSMP standard + AFEATBES IA\"\n\n---\n\n## Tableau Mémo : Problème d'Oracle de Test\n\n| Cause | Conséquence | Solution |\n|-------|-------------|---------|\n| Système complexe | Human incapable de calculer résultat | Back-to-back testing |\n| Non-déterministe | Résultats différents = normal | Tolérances + statistiques |\n| Subjectif | Experts divergent | Double-aveugle + consensus |\n| Auto-apprenant | Résultats changent | Critères basés sur amélioration |\n| Probabiliste | Pas de valeur exacte attendue | Tests multiples + statistiques |"
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
    lessonText: "## Méthodes et Techniques de Test pour les Systèmes IA\n\n### 9.1 Attaques Adversariales et Empoisonnement de Données\n\n#### 9.1.1 Attaques Adversariales\n\n**Definition:** Une **attaque adversariale** (adversarial attack) est une attaque où un attaquant perturbe subtilement des entrées valides passées au modèle entraîné pour l'amener à fournir des prédictions incorrectes. Ces entrées perturbées sont appelées **exemples adversariaux** (adversarial examples).\n\n**Caractéristiques importantes :**\n- Premières détections : filtres anti-spam trompés par de légères modifications\n- Plus récemment : classifieurs d'images (changer quelques pixels invisibles à l'œil humain peut faire classifier une image très différemment avec haute confiance)\n- **Transférabilité** : un exemple adversarial qui fait échouer un système ML fait souvent échouer un autre système ML entraîné sur la même tâche, même avec des données et architectures différentes\n\n**Types d'attaques :**\n\n| Type | Description |\n|------|-------------|\n| **White-box** | L'attaquant connaît l'algorithme, les paramètres du modèle → génère des exemples adversariaux via petites perturbations d'inputs |\n| **Black-box** | L'attaquant explore le modèle, crée un modèle dupliqué, puis utilise une approche white-box sur le duplicat → exemples transférables à l'original |\n\n**Tip:** Si on ne peut pas créer un modèle dupliqué, on peut utiliser des tests automatisés à haut volume pour découvrir différents exemples adversariaux.\n\n**Definition:** Le **test adversarial** (adversarial testing) consiste à effectuer des attaques adversariales dans le but d'identifier des vulnérabilités pour que des mesures préventives puissent être prises. Les exemples adversariaux identifiés sont ajoutés aux données d'entraînement.\n\n#### 9.1.2 Empoisonnement de Données (Data Poisoning)\n\n**Definition:** Les **attaques par empoisonnement de données** (data poisoning attacks) sont des attaques où un attaquant manipule les données d'entraînement pour :\n- Insérer des backdoors ou des trojans de réseau de neurones pour faciliter des intrusions futures\n- Utiliser des données corrompues (ex : données mal étiquetées) pour induire le modèle à fournir des prédictions incorrectes\n\n**Types d'attaques d'empoisonnement :**\n- **Ciblées** : faire mal classifier dans des situations spécifiques\n- **Indiscriminées** : comme une attaque par déni de service\n\n**Example:** Le chatbot Microsoft Tay a été corrompu par un relativement petit nombre de conversations Twitter nocives, qui l'ont entraîné à produire des conversations inappropriées.\n\n**Détection :**\n- EDA (Exploratory Data Analysis) : les données empoisonnées peuvent apparaître comme des valeurs aberrantes (outliers)\n- Revue des politiques d'acquisition de données\n- A/B testing pour vérifier qu'une version mise à jour reste alignée avec la précédente\n- Tests de régression avec un ensemble de tests de confiance\n\n### 9.2 Tests par Paires (Pairwise Testing)\n\nLes systèmes IA peuvent avoir un nombre extrêmement élevé de paramètres. Les tests exhaustifs (toutes combinaisons) sont impossibles en pratique.\n\n**Definition:** Le **test par paires** (pairwise testing) est la technique combinatoire la plus utilisée car :\n- Elle est facile à comprendre\n- Elle dispose d'un bon support d'outils\n- Des recherches ont montré que la plupart des défauts sont causés par des interactions impliquant peu de paramètres\n\n**Avantages vs coûts :**\n- Réduit considérablement le nombre de cas de test\n- Peut nécessiter l'automatisation pour certains systèmes (ex : voitures autonomes)\n- La recherche est encore incertaine sur le niveau de rigueur requis pour les systèmes IA critiques\n\n**Warning:** Même si le test par paires peut ne pas être suffisant pour des systèmes de sécurité critique (voitures autonomes), il est reconnu comme efficace pour trouver des défauts.\n\n### 9.3 Tests Back-to-Back (Tests en Parallèle)\n\n**Definition:** Le **test back-to-back** (également appelé differential testing) est une technique où une version alternative du système est utilisée comme **pseudo-oracle** et ses sorties comparées avec les résultats du SUT (System Under Test).\n\n**Caractéristiques du pseudo-oracle :**\n- Peut être un système existant ou un système développé par une équipe différente\n- Peut utiliser une plateforme différente, une architecture différente, un langage de programmation différent\n- N'a pas besoin de respecter les mêmes critères non-fonctionnels (ex : peut être plus lent)\n\n**Risque important :** Pour être efficace dans la détection de défauts, le pseudo-oracle ne doit partager AUCUN code avec le SUT. Avec la prévalence des logiciels IA open-source réutilisables, ce risque de réutilisation de code est élevé.\n\n**Warning:** La réutilisation de code entre le pseudo-oracle et le SUT peut compromettre le pseudo-oracle. Si le même défaut est présent dans les deux, les résultats correspondront (incorrectement) et le défaut ne sera pas détecté.\n\n### 9.4 A/B Testing\n\n**Definition:** Le **A/B testing** est une méthode où la réponse de deux variantes du programme (A et B) aux mêmes entrées sont comparées pour déterminer laquelle est meilleure. C'est une approche de test statistique qui compare les résultats de plusieurs exécutions de test.\n\n**Usages :**\n- Commerce électronique et web : diviser les utilisateurs entre deux fonctionnalités pour identifier les préférences\n- Tests des mises à jour de systèmes IA : vérifier que la variante mise à jour performe aussi bien ou mieux que la précédente\n- Tests des systèmes auto-apprenants : quand le système change, comparer les caractéristiques avant/après\n\n**Limites :**\n- Ne génère pas de cas de test et ne fournit pas de guidance sur la conception des tests\n- Utilise souvent des inputs opérationnels (pas spécifiquement conçus)\n\n**Différence avec Back-to-Back :**\n- A/B Testing : compare deux variantes du MÊME système (pour l'amélioration)\n- Back-to-Back Testing : utilise un système ÉQUIVALENT pour détecter des défauts\n\n### 9.5 Tests Métamorphiques (Metamorphic Testing — MT)\n\n**Definition:** Le **test métamorphique** est une technique visant à générer des cas de test basés sur un **cas de test source** qui a réussi. Un ou plusieurs **cas de test de suivi** sont générés en modifiant (métamorphisant) le cas de test source basé sur une **relation métamorphique** (MR).\n\n**Definition:** Une **relation métamorphique** (MR) est basée sur une propriété d'une fonction requise du test object, décrivant comment un changement dans les inputs d'un test se reflète dans les résultats attendus de ce même test.\n\n**Exemple simple (calcul de moyenne) :**\n- Cas source : {3, 5, 7} → moyenne = 5 ✓\n- MR1 : l'ordre des nombres ne change pas la moyenne → {7, 3, 5} → résultat attendu = 5 (sans calculer)\n- MR2 : multiplier tous les éléments par 2 double la moyenne → {6, 10, 14} → résultat attendu = 10\n\n**Avantages :**\n- Utile quand la génération de résultats attendus est difficile (problème d'oracle de test)\n- Applicable à la plupart des test objects, en fonctionnel et non-fonctionnel\n- 3 à 6 MR diversifiés peuvent révéler > 90% des défauts détectables par un oracle traditionnel\n- Les cas de suivi peuvent être générés automatiquement à partir de MR bien spécifiées\n\n**Domaines d'application IA :** reconnaissance d'images, moteurs de recherche, optimisation d'itinéraires, reconnaissance vocale\n\n**Limites :**\n- Ne fournit pas de résultats définitifs (résultats relatifs, pas absolus)\n- Pas encore de support commercial en outils (mais Google l'utilise pour Android avec GraphicsFuzz)\n\n### 9.6 Tests Basés sur l'Expérience pour les Systèmes IA\n\nLes trois formes de tests basés sur l'expérience s'appliquent aux systèmes IA :\n\n| Technique | Application aux Systèmes IA |\n|-----------|---------------------------|\n| **Error Guessing** | Connaissance sur les défauts ML passés (biais systemiques, données mal étiquetées) |\n| **Tests Exploratoires** | Très utile quand spécifications pauvres ou problème d'oracle ; souvent utilisé pour compléter les tests systématiques |\n| **Checklist-Based Testing** | Google ML Test Checklist : 28 assertions en 4 domaines |\n\n**Definition:** Un **tour** est une métaphore pour un ensemble de stratégies et objectifs pour les testeurs lors des tests exploratoires. Exemples de tours pour les systèmes IA : focus sur le biais, le sous-apprentissage (underfitting), le sur-apprentissage (overfitting).\n\n**EDA et Tests Exploratoires :**\n- EDA (Exploratory Data Analysis) examine des patterns, relations, tendances et valeurs aberrantes dans les données\n- Étroitement lié aux tests exploratoires : exploration hypothèse-driven, interactive, des données\n- Outil puissant pour valider l'algorithme ML utilisé, identifier des améliorations d'efficacité\n\n**La Checklist ML de Google (28 assertions) :**\n- *ML Data* : schéma de features, features bénéfiques, coût acceptable, exigences méta-niveau, contrôles de confidentialité, ajout rapide, code testé\n- *Model Development* : specs revues, métriques online/offline corrélées, hyperparamètres tuned, impact de staleness connu, modèle simple non meilleur, qualité sur data slices importantes, tests d'inclusion\n- *ML Infrastructure* : entraînement reproductible, specs testées unitairement, pipeline testé en intégration, qualité validée avant déploiement, modèle debuggable, canary avant serving, rollback possible\n- *Monitoring* : notifications de changement de dépendances, invariants de données, pas de skew train/serving, modèle pas trop stale, stabilité numérique, performance computing, qualité de prédiction\n\n### 9.7 Sélection des Techniques de Test pour les Systèmes IA\n\n**Principe :** Un système IA comprend généralement des composants IA ET non-IA. La sélection des techniques pour les composants non-IA est identique aux tests conventionnels. Pour les composants IA, le choix peut être plus contraint.\n\n| Problème | Technique Recommandée |\n|----------|----------------------|\n| Problème d'oracle de test | Back-to-back, A/B, Metamorphic testing |\n| Paramètres nombreux et complexes | Pairwise testing |\n| Tests exploratoires de données et modèles | Experience-based testing, EDA |\n| Systèmes ML critiques (mission-critical) | Couverture des réseaux de neurones |\n| Attaques potentielles, vulnérabilités | Adversarial testing |\n| Données potentiellement empoisonnées | Tests contre data poisoning |\n\n**Tip:** Les tests basés sur l'expérience, et en particulier l'EDA, sont souvent adaptés aux systèmes IA, notamment pour l'évaluation des données d'entraînement et opérationnelles.",
    visualSummary: "## Techniques de Test IA — Carte Mentale\n\n    TECHNIQUES DE TEST POUR SYSTÈMES IA\n    ├── Attaques et Sécurité\n    │   ├── Adversarial Testing → trouver vulnérabilités\n    │   └── Data Poisoning Testing → vérifier intégrité données\n    ├── Réduction de l'Espace de Test\n    │   └── Pairwise Testing → paramètres nombreux\n    ├── Résolution du Problème d'Oracle\n    │   ├── Back-to-Back Testing → pseudo-oracle équivalent\n    │   ├── A/B Testing → comparaison de variantes\n    │   └── Metamorphic Testing → relations entre tests\n    └── Basé sur l'Expérience\n        ├── Error Guessing\n        ├── Tests Exploratoires (+ EDA)\n        └── Checklists (Google ML 28 points)\n\n## Comparaison A/B Testing vs Back-to-Back Testing\n\n    A/B TESTING                    BACK-TO-BACK TESTING\n    +--------------------+         +--------------------+\n    | Variante A (v1.0)  |         | SUT                |\n    | Variante B (v1.1)  |         | Pseudo-Oracle      |\n    +--------------------+         +--------------------+\n    | But: AMÉLIORATION  |         | But: DÉTECTION     |\n    | même système       |         | système équivalent |\n    | métriques ML       |         | développement indép|\n    | statistiques       |         | aucun code commun! |\n    +--------------------+         +--------------------+\n\n## Metamorphic Testing — Comment ça Marche\n\n    Source Test Case (doit avoir réussi):\n    Input: {3, 5, 7} → Résultat: 5 ✓\n\n    Métamorphic Relations (MR) appliquées:\n    MR1: Réordonner → {7, 3, 5} → Attendu: 5 (même)\n    MR2: ×2 → {6, 10, 14} → Attendu: 10 (×2)\n    MR3: +1 → {4, 6, 8} → Attendu: 6 (+1)\n\n    Clé: le résultat attendu est RELATIF, pas absolu\n    → Pas besoin de savoir la réponse exacte !\n    → 3-6 MR diversifiées = 90%+ de détection de défauts\n\n## Guide de Sélection des Techniques IA\n\n    Problème d'Oracle ?        → MT + Back-to-Back + A/B\n    Paramètres > 5 ?           → Pairwise Testing\n    Données suspectes ?        → EDA + Data Poisoning Tests\n    Système attaquable ?       → Adversarial Testing\n    Spécifications pauvres ?   → Tests Exploratoires\n    Système NN mission-critical? → Couverture neuronale\n    Mise à jour à vérifier ?   → A/B Testing",
    useCases: "## Cas d'Usage 1 : Classifieur d'Images Médicales (Adversarial Testing)\n\n**Contexte business :** Un hôpital utilise un CNN (réseau de neurones convolutif) pour analyser des radiographies thoraciques et détecter des pneumonies. Le système doit être robuste aux tentatives de manipulation.\n\n**Risque adversarial :**\n- Des modifications imperceptibles de l'image (quelques pixels) pourraient faire passer une pneumonie grave comme normale\n- Dans un contexte médical, les conséquences peuvent être fatales\n\n**Stratégie de test adversarial :**\n- White-box : en accédant aux poids du modèle, générer des exemples adversariaux minimalistes\n- Black-box : tenter de tromper le modèle sans accès aux internals, par perturbations aléatoires à haute fréquence\n- Tester la transférabilité : vérifier si les exemples adversariaux générés contre un modèle alternatif fonctionnent aussi\n\n**Résultats attendus et mesures :**\n- Le modèle robuste ne doit pas changer de classification pour des perturbations < 2% de variance par pixel\n- Les exemples adversariaux découverts sont ajoutés aux données d'entraînement (adversarial training)\n\n---\n\n## Cas d'Usage 2 : Système de Routage de Transport (Metamorphic Testing)\n\n**Contexte business :** Une ville utilise un système IA pour optimiser le routage des transports en commun. Le problème est trop complexe pour qu'un expert humain puisse vérifier chaque résultat.\n\n**Problème d'oracle :** Il est impossible de calculer manuellement le routage optimal pour une ville entière. Comment savoir si le système répond correctement ?\n\n**Relations Métamorphiques définies :**\n- MR1 : Si la demande de passagers double sur une ligne, le nombre de véhicules alloués doit augmenter (ou rester stable)\n- MR2 : Si on enlève une contrainte (fermeture d'une route), le temps moyen de trajet doit diminuer ou rester stable\n- MR3 : Le routage symétrique (A→B vs B→A) doit donner des temps comparables (pour des infrastructures identiques)\n- MR4 : Ajouter un bus supplémentaire ne doit jamais augmenter le temps moyen de trajet\n\n**Exécution :**\n- Générer des cas de test source (configurations réelles)\n- Appliquer les MRs pour créer des cas de suivi\n- Vérifier les relations, pas les valeurs absolues\n\n---\n\n## Cas d'Usage 3 : Chatbot Financier (A/B Testing après Mise à Jour)\n\n**Contexte business :** Une banque met à jour son modèle de chatbot tous les trimestres. Il faut vérifier que chaque nouvelle version performe mieux que l'ancienne.\n\n**Stratégie A/B Testing :**\n- Diviser les utilisateurs : 10% sur la nouvelle version (B), 90% sur l'ancienne (A)\n- Métriques de comparaison : taux de résolution au premier contact, score de satisfaction (CSAT), taux d'escalade vers un agent humain\n- Durée : 2 semaines pour accumulation de données statistiquement significatives\n\n**Tests de régression data poisoning :**\n- Simuler des conversations adversariales (utilisateurs tentant de biaiser le modèle)\n- Comparer les sorties A vs B sur ces conversations : divergence > 5% = alerte\n- Analyse EDA sur les nouvelles données collectées pour détecter des outliers (potentiellement malveillants)\n\n**Critères de succès :**\n- B ≥ A sur toutes les métriques clés, ou amélioration statistiquement significative (p < 0.05)\n- Aucune dégradation visible lors des tests data poisoning",
    mnemonics: "## Mnémonique 1 : Les Techniques de Test IA — \"APPBME\"\n\n**A** --> Adversarial testing (tester les attaques)\n**P** --> Pairwise testing (paramètres nombreux)\n**P** --> Poisoning data testing (empoisonnement)\n**B** --> Back-to-Back testing (pseudo-oracle)\n**M** --> Metamorphic testing (relations entre tests)\n**E** --> Experience-based testing (EDA, exploratory, checklists)\n\n(A/B testing est inclus dans \"Back-to-Back\" pour simplifier)\n\nMémo : \"APPBME = Attaques Peuvent Produire des Bugs, Métamorphic les Évite\"\n\n---\n\n## Mnémonique 2 : Metamorphic Testing — \"SFR\"\n\n**S** --> Source test case (cas source qui a réussi)\n**F** --> Follow-up test cases (cas de suivi générés)\n**R** --> Relations métamorphiques (MR : la règle de transformation)\n\nLa MR décrit comment un changement dans les INPUTS se reflète dans les OUTPUTS attendus.\n→ \"Si j'ajoute X à l'input, l'output doit augmenter de Y\"\n\n---\n\n## Mnémonique 3 : A/B vs Back-to-Back — \"VD\"\n\nA/B testing --> **V**ariantes du même système → amélioration\nBack-to-Back --> **D**eux systèmes différents → détection de défauts\n\nMémo : \"A/B = Version améliorée, B2B = Deux équipes détectent\"\n\n---\n\n## Tableau Mémo : Résoudre le Problème d'Oracle\n\n| Technique | Oracle Used | Ce qu'elle teste | Limitation |\n|-----------|-------------|-----------------|------------|\n| Back-to-Back | Système équivalent | Cohérence avec pseudo-oracle | Risque de code commun |\n| A/B Testing | Version précédente | Amélioration relative | Pas de génération de tests |\n| Metamorphic | Relations logiques | Cohérence des MRs | Résultats relatifs, pas absolus |\n| Tolérance | Expert humain | Précision dans plage acceptée | Subjectivité humaine |\n\n---\n\n## Checklist Google ML — 4 Domaines à Retenir\n\n1. **ML Data** (7 points) : schéma, features utiles, coût, méta-niveau, vie privée, ajout rapide, tests\n2. **Model Development** (7 points) : specs, métriques, hyperparams, staleness, modèle simple, slices, inclusion\n3. **ML Infrastructure** (7 points) : reproductibilité, unités, intégration, validation, debuggable, canary, rollback\n4. **Monitoring** (7 points) : dépendances, invariants, train/serving skew, staleness, stabilité numérique, performance, prédiction"
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
    lessonText: "## Environnements de Test pour les Systèmes IA\n\n### 10.1 Spécificités des Environnements de Test IA\n\nLes systèmes IA sont utilisés dans une grande variété d'environnements opérationnels, ce qui rend les environnements de test similairement diversifiés.\n\n**Caractéristiques des systèmes IA qui différencient leurs environnements de test :**\n\n| Caractéristique | Impact sur l'Environnement de Test |\n|-----------------|-----------------------------------|\n| **Auto-apprentissage** | L'environnement opérationnel peut ne pas être entièrement défini à l'avancement ; difficile de définir des environnements de test mimant des changements indéfinis ; peut nécessiter imagination et aléatoire intégré |\n| **Autonomie** | L'environnement doit pousser le système aux extrêmes pour déclencher la cession de contrôle ; certains systèmes autonomes opèrent dans des environnements dangereux (difficile à répliquer) |\n| **Multi-agents** | L'environnement peut nécessiter un niveau de non-déterminisme pour mimer le non-déterminisme des autres systèmes IA avec lesquels le SUT interagit |\n| **Explicabilité** | L'environnement peut nécessiter des outils intégrés pour expliquer comment les décisions sont prises |\n| **Hardware spécialisé** | Les processeurs IA spécifiques (GPU, TPU, neuromorphiques) doivent être pris en compte dans la planification des tests |\n| **Big Data** | La mise en place d'un environnement avec des données à haut volume/vélocité/variété nécessite une planification et implémentation soigneuses |\n\n**Warning:** Pour les systèmes autonomes, certains environnements de test peuvent devoir être extrêmes ou dangereux à mettre en place dans la réalité. Les environnements virtuels (voir Section 10.2) permettent de résoudre ces problèmes.\n\n### 10.2 Environnements de Test Virtuels pour les Systèmes IA\n\nL'utilisation d'un environnement de test virtuel lors des tests de systèmes IA apporte les bénéfices suivants :\n\n**Bénéfices des Environnements Virtuels :**\n\n| Bénéfice | Description |\n|----------|-------------|\n| **Scénarios dangereux** | Testables sans mettre en danger le SUT, les systèmes interactants (incluant les humains) ou l'environnement opérationnel |\n| **Scénarios inhabituels** | Testables quand il serait très long ou coûteux de les mettre en place dans la réalité (ex : attendre un événement rare comme une éclipse solaire totale ou 4 bus entrant simultanément dans le même carrefour) |\n| **Scénarios extrêmes** | Testables quand il serait coûteux ou impossible de les réaliser (ex : désastre nucléaire, exploration spatiale profonde) |\n| **Scénarios intensifs en temps** | Testables en temps réduit (ex : plusieurs fois par seconde dans un environnement virtuel vs heures ou jours en temps réel) ; plusieurs environnements virtuels peuvent tourner en parallèle dans le cloud |\n| **Observabilité et contrôlabilité** | Contrôle total de l'environnement ; toutes les parties numériques peuvent être continuellement monitorées et enregistrées |\n| **Disponibilité** | Permet de tester avec du matériel (simulé) non encore disponible ou trop coûteux |\n\n**Exemples d'Environnements de Test Virtuels Disponibles :**\n\n| Environnement | Organisation | Description |\n|---------------|-------------|-------------|\n| **MORSE** | Open Source | Modular Open Robots Simulation Engine — simulateur pour robots mobiles, basé sur Blender |\n| **AI Habitat** | Facebook AI | Plateforme de simulation pour entraîner des agents incarnés dans des environnements 3D photo-réalistes |\n| **DRIVE Constellation** | NVIDIA | Plateforme ouverte et scalable pour voitures autonomes basée sur le cloud ; capable de générer des milliards de km de tests |\n| **MATLAB/Simulink** | MathWorks | Préparation de données d'entraînement, production de modèles ML et simulation de l'exécution de systèmes IA |\n\n**Tip:** Les environnements virtuels peuvent être construits spécifiquement pour un système donné, ou être génériques, ou développés pour soutenir des domaines d'application spécifiques. Les deux versions commerciales et open-source sont disponibles.\n\n**Example (Voiture autonome NVIDIA) :** DRIVE Constellation est capable de générer des milliards de km de tests de véhicules autonomes dans le cloud, permettant de tester des conditions qui prendraient des années à accumuler en monde réel (conditions météorologiques extrêmes, collisions évitées, scénarios de trafic rares).",
    visualSummary: "## Environnements de Test IA — Structure\n\n    CARACTÉRISTIQUES IA     IMPACT SUR L'ENVIRONNEMENT DE TEST\n    +------------------+    +--------------------------------+\n    | Auto-apprentissage| -> | Randomness, adaptation         |\n    | Autonomie         | -> | Tests aux limites, extrêmes    |\n    | Multi-agents      | -> | Non-déterminisme simulé        |\n    | Explicabilité     | -> | Outils d'explication intégrés  |\n    | Hardware IA       | -> | GPU/TPU dans l'env de test     |\n    | Big Data          | -> | Infrastructure data spécialisée|\n    +------------------+    +--------------------------------+\n\n## Environnements Réels vs Virtuels\n\n    ENVIRONNEMENT RÉEL           ENVIRONNEMENT VIRTUEL\n    +------------------+         +------------------+\n    | ✅ Représentatif  |         | ✅ Sécurisé       |\n    | ✅ Authentique    |         | ✅ Reproductible  |\n    | ❌ Dangereux ?   |         | ✅ Scalable       |\n    | ❌ Impossible ?  |         | ✅ Parallélisable |\n    | ❌ Trop long ?   |         | ✅ Observabilité  |\n    | ❌ Trop rare ?   |         | ✅ Disponibilité  |\n    +------------------+         +------------------+\n\n## Quand Utiliser un Environnement Virtuel ?\n\n    Scénario dangereux ?     ──> VIRTUEL OBLIGATOIRE\n    Événement rare ?         ──> VIRTUEL RECOMMANDÉ\n    Temps réduit nécessaire? ──> VIRTUEL RECOMMANDÉ\n    Hardware indisponible ?  ──> VIRTUEL POSSIBLE\n    Test d'explicabilité ?   ──> VIRTUEL AVEC OUTILS\n\n## Environnements Virtuels Notables\n\n    MORSE (Robots)          AI Habitat (Facebook)\n    DRIVE Constellation     MATLAB/Simulink\n    (NVIDIA, voitures)      (MathWorks, IA générale)\n\n    Disponibles: Open Source + Commercial\n    Portée: Générique + Domaine-spécifique",
    useCases: "## Cas d'Usage 1 : Test d'un Robot Chirurgical (Environnement Dangereux)\n\n**Contexte business :** Un fabricant développe un robot chirurgical assisté par IA pour des opérations cardiaques à cœur ouvert. Le robot peut prendre des décisions semi-autonomes en cas d'urgence chirurgicale.\n\n**Défis d'environnement de test :**\n- Tests réels impossibles sur des patients humains à ce stade\n- Certains scénarios (hémorragie massive, arrêt cardiaque soudain) sont trop risqués pour des tests physiques\n- Le système doit être testé dans des conditions extrêmes sans danger pour les patients\n\n**Environnement virtuel :**\n- Simulation physique de l'anatomie humaine (tensions des tissus, dynamique du sang)\n- Injection de scénarios d'urgence (hémorragie, variation de tension)\n- Multiples instances virtuelles en parallèle pour accélérer les tests\n\n**Résultats :**\n- 10 millions de simulations chirurgicales réalisées en 3 semaines (impossible en monde réel)\n- Identification de 47 scénarios d'urgence non couverts par la spécification initiale\n- Tous résolus avant les premiers tests sur simulateurs physiques\n\n---\n\n## Cas d'Usage 2 : Voiture Autonome (Scénarios Rares et Extrêmes)\n\n**Contexte business :** Un constructeur automobile teste un véhicule de niveau 4 (autonomie totale dans des conditions définies) avant son lancement commercial.\n\n**Scénarios testés en environnement virtuel :**\n- Conditions météorologiques extrêmes : blizzard, brouillard dense (visibilité < 10m), forte pluie\n- Événements rares : piéton traversant soudainement, animal sur la route, camion renversé\n- Défaillances de capteurs simulées : caméra dégradée (boue), LIDAR perturbé (soleil fort)\n- Interactions multi-agents : 4 voitures autonomes à un carrefour sans signal\n\n**Avantages de DRIVE Constellation (NVIDIA) :**\n- Génération de milliards de km en quelques semaines\n- Reproductibilité exacte des scénarios pour comparaison entre versions\n- Observabilité totale (tous les capteurs enregistrés)\n\n**Critères d'acceptation :**\n- Zéro accident simulé pour 1 milliard de km de scenarios aléatoires\n- Temps de réaction conforme aux spécifications dans 99.99% des cas\n\n---\n\n## Cas d'Usage 3 : Système de Trading Algorithmique (Big Data et Multi-Agents)\n\n**Contexte business :** Une société financière déploie un système IA pour des transactions à haute fréquence. Le système interagit avec des dizaines d'autres algorithmes de trading sur les marchés.\n\n**Défis d'environnement :**\n- Big Data : millions de transactions par seconde à traiter\n- Multi-agents : interactions non-déterministes avec d'autres algorithmes\n- Impossibilité de tester en production (impact réel sur les marchés)\n\n**Environnement de test virtuel :**\n- Simulation de marché avec données historiques (replay de journées de trading réelles)\n- Injection d'algorithmes adversariaux simulés (comportement aléatoire non-déterministe)\n- Infrastructure cloud scalable pour traitement big data\n\n**Monitoring intégré :**\n- Enregistrement de toutes les décisions et leurs justifications (explicabilité)\n- Alertes automatiques si le système dévie des patterns attendus (concept drift détection)",
    mnemonics: "## Mnémonique 1 : Pourquoi les Environnements IA Sont Différents — \"SAMHEB\"\n\n**S** --> Self-learning (auto-apprentissage) : environnement indéfini\n**A** --> Autonomy (autonomie) : tests aux extrêmes pour cession de contrôle\n**M** --> Multi-agency (multi-agents) : non-déterminisme dans l'env\n**H** --> Hardware (matériel spécialisé) : GPU/TPU à prévoir\n**E** --> Explainability (explicabilité) : outils dans l'env\n**B** --> Big Data : infrastructure spécialisée\n\nMémo : \"SAMHEB = Systèmes IA Modernes ont des Habitats Exigeants et Bizarres\"\n\n---\n\n## Mnémonique 2 : Bénéfices des Environnements Virtuels — \"DSETO\"\n\n**D** --> Dangereux scénarios (sans risque réel)\n**S** --> Scénarios Spéciaux/inhabituels (pas de longue attente)\n**E** --> Extrêmes scénarios (impossible en réalité)\n**T** --> Temporellement réduits (rapide, parallèle)\n**O** --> Observabilité et contrôlabilité maximales\n\n+ bonus : disponibilité du hardware\n\nMémo : \"DSETO = Dans Simulation, Examiner Tous les Obstacles\"\n\n---\n\n## Tableau Mémo : Environnements Virtuels Notables\n\n| Outil | Éditeur | Domaine | Modèle |\n|-------|---------|---------|--------|\n| MORSE | Open Source | Robots mobiles | Gratuit |\n| AI Habitat | Facebook | Agents incarnés 3D | Gratuit |\n| DRIVE Constellation | NVIDIA | Voitures autonomes | Commercial |\n| MATLAB/Simulink | MathWorks | IA générale | Commercial |\n\nRetenir : \"MADs\" (MORSE, AI Habitat, DRIVE, Simulink)\n\n---\n\n## Résumé Visuel : Quand Utiliser l'Environnement Virtuel\n\n    Réel     vs    Virtuel\n    -----          -------\n    Authentique    Sécurisé ✓\n    Unique         Reproductible ✓\n    Lent           Rapide ✓\n    Dangereux      Sûr ✓\n    Rare           Commun ✓\n    Limité         Scalable ✓\n\n    Règle : SI dangereux/rare/extrême/long → VIRTUEL"
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
    lessonText: "## Utiliser l'IA pour les Tests\n\n### 11.1 Technologies IA pour les Tests\n\nL'IA peut soutenir des aspects spécifiques des tests logiciels. Trois grandes catégories de technologies IA sont utilisées :\n\n| Catégorie | Description | Applications aux Tests |\n|-----------|-------------|----------------------|\n| **Logique floue et méthodes probabilistes** | Gestion de problèmes réels probabilistes | Analyse et prédiction de défaillances (techniques Bayésiennes), modélisation des interactions humaines aléatoires |\n| **Classification, Apprentissage et Prédiction** | ML pour prédiction | Gestion des défauts, prédiction des défauts, tests d'interfaces utilisateur |\n| **Recherche computationnelle et optimisation** | Résolution de problèmes d'optimisation | Génération de cas de test, minimisation du nombre de tests pour une couverture donnée, optimisation des tests de régression |\n\n**Warning:** Ces catégories se chevauchent considérablement. D'autres catégorisations peuvent être tout aussi valides.\n\n**Tip:** La distinction entre IA faible (narrow AI) et IA générale (general AI) est importante. La plupart des applications de test IA actuelles utilisent l'IA faible. Certaines tâches de test (comme spécifier des oracles de test, communiquer avec les parties prenantes, comprendre les besoins utilisateurs) restent difficiles à automatiser même avec l'IA faible.\n\n**Tâches de test difficiles pour l'IA (actuellement) :**\n- Spécifier des oracles de test\n- Communiquer avec les parties prenantes pour clarifier les ambiguïtés\n- Suggérer des améliorations à l'expérience utilisateur\n- Remettre en question les hypothèses des parties prenantes\n- Comprendre les besoins des utilisateurs\n\n### 11.2 Utiliser l'IA pour Analyser les Défauts Signalés\n\nLes défauts signalés doivent être catégorisés, priorisés et les doublons identifiés (triage des défauts). L'IA peut soutenir cette activité de plusieurs façons :\n\n| Application IA | Technologie | Comment ça Marche |\n|----------------|-------------|-------------------|\n| **Catégorisation** | NLP + algorithmes de clustering (k-nearest neighbors, SVM) | Analyser le texte des rapports de défauts, extraire des topics → identifier catégories et doublons |\n| **Criticité** | Modèles ML | Identifier les défauts les plus susceptibles de causer des défaillances système importantes |\n| **Assignation** | Modèles ML | Suggérer les développeurs les mieux adaptés pour corriger des défauts spécifiques |\n\n**Tip:** L'IA est particulièrement utile pour les systèmes de signalement automatisé de défauts (ex : Microsoft Windows, Firefox) et les grands projets avec de nombreux ingénieurs.\n\n### 11.3 Utiliser l'IA pour la Génération de Cas de Test\n\nL'IA peut générer des tests très efficacement pour maximiser la couverture.\n\n**Sources pour la génération de tests par IA :**\n- Code source\n- Interface utilisateur\n- Modèle de test lisible par machine\n- Observation du comportement bas niveau (instrumentation, fichiers journaux)\n\n**Limitation importante :** Sans modèle de test définissant les comportements requis, la génération de tests IA souffre d'un problème d'oracle de test — l'outil IA ne sait pas quels sont les résultats attendus.\n\n**Résultats de recherche :**\n- Les outils de génération de tests basés sur IA atteignent des niveaux de couverture équivalents aux outils de fuzz testing non-IA\n- Trouvent plus de défauts\n- Réduisent la séquence moyenne d'étapes nécessaires pour provoquer une défaillance de ~15 000 étapes à ~100 étapes → debugging beaucoup plus facile\n\n**Example:** Google's Sapienz est un outil de test automatisé multi-objectif pour applications Android qui utilise des techniques d'optimisation inspirées par l'évolution biologique.\n\n### 11.4 Utiliser l'IA pour l'Optimisation des Suites de Tests de Régression\n\nLes suites de tests de régression ont tendance à croître et à devenir trop grandes au fil du temps.\n\n**Comment l'IA optimise les suites de régression :**\n- Analyse des résultats de tests précédents, des défauts associés, et des changements récents\n- Identification des fonctionnalités défectueuses plus fréquemment\n- Sélection des tests qui exercent du code impacté par des changements récents\n- Priorisation intelligente des cas de test\n\n**Résultats de recherche :**\n- Réductions de 50% de la taille de la suite de régression tout en détectant la plupart des défauts\n- Réductions de 40% de la durée d'exécution des tests sans réduction significative de la détection des défauts (pour les tests d'intégration continue)\n\n### 11.5 Utiliser l'IA pour la Prédiction des Défauts\n\n**Definition:** La **prédiction des défauts** (defect prediction) peut prédire :\n- La présence d'un défaut\n- Le nombre de défauts présents\n- La capacité à trouver des défauts\n\nElle est normalement utilisée pour prioriser les tests.\n\n**Bases de la prédiction :**\n- Métriques de code source\n- Métriques de processus\n- Métriques des personnes et de l'organisation\n\n**Les meilleurs prédicteurs** sont les métriques des personnes et de l'organisation plutôt que les métriques de code source plus largement utilisées (comme le nombre de lignes de code ou la complexité cyclomatique).\n\n**Conditions pour l'efficacité :** La prédiction des défauts est plus efficace quand elle est basée sur des expériences antérieures dans une situation similaire (même base de code et/ou mêmes développeurs).\n\n### 11.6 Utiliser l'IA pour les Tests d'Interfaces Utilisateur\n\n#### 11.6.1 Tester À Travers l'Interface Graphique (GUI)\n\nLes approches traditionnelles d'automatisation GUI (capture/playback) souffrent de fragilité (sensibilité aux changements d'interface, de code, de plateforme).\n\n**Comment l'IA réduit la fragilité :**\n- Utilise des outils basés sur l'IA pour identifier les objets corrects en utilisant divers critères (XPath, label, id, classe, coordonnées X/Y)\n- Choisit historiquement les critères d'identification les plus stables\n- Si l'ID d'un bouton change à chaque release, l'outil IA lui attribue une importance moindre au fil du temps et se fie davantage à d'autres critères\n\n**Definition:** Le **test visuel** (visual testing) utilise la reconnaissance d'images pour interagir avec les objets GUI de la même façon qu'un utilisateur réel, sans accéder au code sous-jacent ni aux définitions d'interface.\n\n**Avantages du test visuel :**\n- Complètement non-intrusif et indépendant de la technologie sous-jacente\n- Les scripts travaillent uniquement à travers l'interface utilisateur visible\n- Disponibilité de l'IA abordable rend cette approche possible pour le grand public\n\n#### 11.6.2 Tester l'Interface Graphique Elle-Même\n\nL'IA peut évaluer l'acceptabilité des écrans d'interface :\n- Identifier les éléments mal rendus\n- Déterminer si des objets sont inaccessibles ou difficiles à détecter\n- Détecter diverses problèmes d'apparence visuelle\n\n**Autres formes de vision par ordinateur IA :**\n- Comparaison d'images (ex : captures d'écran) pour identifier des changements non intentionnels\n- Tests de compatibilité sur différents navigateurs, appareils ou plateformes\n\n**Outil combiné avancé :**\n- Technologie de vérification d'acceptabilité + outils de comparaison\n- Capable de déterminer si les changements d'interface détectés sont susceptibles d'être acceptables pour les utilisateurs\n- Ou s'ils doivent être signalés pour vérification humaine",
    visualSummary: "## IA pour les Tests — Trois Grandes Catégories\n\n    TECHNOLOGIES IA UTILISÉES EN TESTING\n    ├── 1. Logique floue / Probabiliste\n    │   └── → Prédiction défaillances (Bayésien)\n    │       → Modélisation interactions aléatoires\n    ├── 2. Classification / Apprentissage / Prédiction\n    │   └── → Gestion défauts (triage)\n    │       → Prédiction défauts\n    │       → Tests UI\n    └── 3. Recherche / Optimisation\n        └── → Génération cas de test\n            → Optimisation régression\n            → Minimisation couverture\n\n## Ce que l'IA Peut et Ne Peut Pas (encore) Faire en Test\n\n    L'IA PEUT:                      L'IA NE PEUT PAS (bien):\n    ✅ Générer des tests             ❌ Spécifier des oracles\n    ✅ Catégoriser les défauts      ❌ Comprendre les besoins\n    ✅ Prédire les défauts          ❌ Communiquer l'ambiguïté\n    ✅ Optimiser la régression      ❌ Suggérer l'UX\n    ✅ Tester l'UI par vision       ❌ Défier les hypothèses\n\n## Applications IA par Activité de Test\n\n    DÉFAUTS SIGNALÉS  → NLP + Clustering → Catégorisation, Criticité, Assignation\n    GÉNÉRATION TESTS  → Search/Optim. IA → Couverture++, Sequences courtes\n    RÉGRESSION        → ML sur historique → -50% tests, -40% temps\n    PRÉDICTION DÉFAUTS → ML sur métriques → Priorisation zones à risque\n    TESTS UI (GUI)    → Vision IA → Moins fragile, Visual Testing\n\n## Prédiction des Défauts — Meilleurs Prédicteurs\n\n    Métriques Code Source         Métriques Organisation\n    (classiques, mais moins bons) (plus prédictifs !)\n    +--------------------+        +--------------------+\n    | Lignes de code     |        | Expérience équipe  |\n    | Complexité cyclomat|        | Rotation personnel |\n    | Couplage           |        | Charge de travail  |\n    | Cohésion           |        | Pratiques revue    |\n    +--------------------+        +--------------------+\n    Source: [Nagappan 2008]",
    useCases: "## Cas d'Usage 1 : Triage Automatisé des Défauts (Grande Entreprise Tech)\n\n**Contexte business :** Une entreprise de logiciels de 5000 développeurs reçoit 10 000 rapports de défauts par mois depuis ses systèmes de télémétrie automatisés (crash reports Windows, erreurs Firefox, etc.). L'équipe de triage manuelle ne peut plus suivre.\n\n**Solution IA déployée :**\n- NLP pour extraire les topics et composants affectés depuis le texte des rapports\n- Algorithme k-nearest neighbors pour identifier les doublons (même stack trace, même module)\n- Modèle ML pour prédire la criticité (basé sur les features des défauts les plus graves passés)\n- Modèle de recommandation pour suggérer l'équipe/développeur assigné\n\n**Résultats :**\n- 70% de réduction du temps de triage manuel\n- 85% de précision dans la détection des doublons\n- Priorités alignées avec les jugements humains experts dans 78% des cas\n\n**Implications de test du système IA lui-même :**\n- Tester la qualité des clusters (coefficient de silhouette)\n- Valider les assignations suggérées avec des experts métier\n- Surveiller la dérive du modèle quand de nouvelles technologies apparaissent\n\n---\n\n## Cas d'Usage 2 : Optimisation de Tests de Régression (Intégration Continue)\n\n**Contexte business :** Une fintech fait des déploiements multiples par jour. La suite de régression complète prend 4 heures à exécuter, ce qui bloque les déploiements.\n\n**Solution IA :**\n- Analyse des patterns de défauts historiques : certains modules sont 10× plus défectueux que d'autres\n- Analyse des changements de code récents : identifier quels tests exercent le code modifié\n- Priorisation intelligente : les tests les plus susceptibles de trouver des défauts s'exécutent en premier\n\n**Résultats (alignés avec la recherche académique) :**\n- Suite réduite de 40% (de 4h à 2h24) sans augmentation du nombre de défauts manqués\n- Le 1er cycle de 30 minutes détecte 85% des défauts que la suite complète aurait trouvés\n- Go/No-Go décidé en 30 minutes, déploiement accéléré\n\n**Ce que l'IA fait :** Apprend que le module \"Paiement International\" est historiquement buggy, et que les tests qui l'exercent doivent toujours être en tête de priorité.\n\n---\n\n## Cas d'Usage 3 : Test d'Interface Utilisateur par Vision IA (E-commerce)\n\n**Contexte business :** Un e-commerce majeur fait des mises à jour UI fréquentes. Les tests GUI automatisés traditionnels se cassent à chaque changement de design (ID de boutons qui changent, positions des éléments qui bougent).\n\n**Solution IA — Deux niveaux :**\n\n**Niveau 1 : Tests fonctionnels UI robustes**\n- L'outil IA identifie les boutons par reconnaissance visuelle (pas seulement par ID)\n- Si l'ID du bouton \"Ajouter au panier\" change, l'outil le reconnait quand même visuellement\n- Les tests continuent de fonctionner après les refactoring CSS/HTML\n\n**Niveau 2 : Tests de régression visuelle**\n- Comparaison d'écrans avant/après chaque déploiement\n- L'IA détermine si un changement visuel détecté est probablement acceptable ou doit être vérifié\n- Ex : texte qui déborde = problème ; espacement légèrement différent = acceptable\n- Tests sur 15 navigateurs différents × 8 tailles d'écran = 120 combinaisons en parallèle",
    mnemonics: "## Mnémonique 1 : 6 Applications de l'IA en Test — \"DGOPRU\"\n\n**D** --> Défauts signalés (triage, catégorisation, assignation)\n**G** --> Génération de cas de test (couverture, automatique)\n**O** --> Optimisation de la régression (réduction, priorisation)\n**P** --> Prédiction des défauts (zones à risque)\n**R** --> Reconnaissance visuelle pour tests UI (visual testing)\n**U** --> UI testing robuste (moins fragile, multi-critères)\n\nMémo : \"DGOPRU = De Grands Outils Pour les Recrutements (de bugs) Utiles\"\n\n---\n\n## Mnémonique 2 : Les 3 Catégories Tech IA — \"FCP\"\n\n**F** --> Fuzzy/Probabilistic (Bayésien, logique floue)\n**C** --> Classification/Learning/Prediction (ML classique)\n**P** --> Problem-solving / Search / Optimization (recherche, évolution)\n\nMémo : \"FCP = Fais-le avec Classe et Précision\"\n\n---\n\n## Mnémonique 3 : Ce que l'IA NE PEUT PAS Bien Faire\n\nORACLE + COMMUNICATION + BESOINS + UX + HYPOTHÈSES\n\n\"OCBUH\" = \"Oracles ? Ce n'est pas Bien d'Un Humain d'Abdiquer\"\n\n- O : Oracle de test (spécifier)\n- C : Communication ambiguïtés avec parties prenantes\n- B : Besoins utilisateurs (comprendre)\n- U : UX (suggérer des améliorations)\n- H : Hypothèses (challenger)\n\n---\n\n## Tableau Mémo : Prédiction des Défauts\n\n| Type de Métriques | Exemples | Efficacité |\n|-------------------|---------|-----------|\n| Code source | LOC, complexité cyclomatique | Faible à modéré |\n| Processus | Fréquence des changes, tests | Modéré |\n| Personnes/Org | Rotation, expérience, charge | Élevé (meilleur !) |\n\nRègle : \"Les métriques HUMAINES prédisent mieux les défauts que les métriques CODE\"\nSource : Nagappan 2008\n\n---\n\n## Résumé : Réductions Quantifiables avec l'IA\n\n| Application | Réduction Mesurée |\n|-------------|------------------|\n| Suite de régression | -50% tests, mêmes défauts détectés |\n| Durée CI regression | -40% temps, même qualité |\n| Séquences pour déclencher défaut | De ~15 000 à ~100 étapes |\n| Triage manuel de défauts | -70% temps (selon systèmes) |"
  }
};
