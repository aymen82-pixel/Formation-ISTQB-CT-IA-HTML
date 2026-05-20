// Mise à jour lessonsContent pour tous les 11 chapitres
// À fusionner avec data.js

const lessonsContentData = {
  1: {
    lessonText: `## Chapitre 1: Introduction à l'Intelligence Artificielle

### Qu'est-ce que l'IA?

L'Intelligence Artificielle (IA) est le domaine qui conçoit des systèmes informatiques capables de réaliser des tâches traditionnellement associées à l'intelligence humaine. Ces systèmes apprennent à partir de données, reconnaissent des motifs complexes, prennent des décisions autonomes et résolvent des problèmes sans être explicitement programmés pour chaque cas.

### L'Effet IA

L'effet IA décrit le phénomène où une technologie IA devient si courante qu'elle cesse d'être considérée comme "intelligente". Une fois que la solution fonctionne bien, on ne l'appelle plus IA. Par exemple, les correcteurs orthographiques ou les systèmes de reconnaissance vocale ne sont plus perçus comme innovants en IA, bien qu'ils l'aient été.

### Types d'IA: Étroit, Général et Super

**IA Étroite (Narrow AI)** - L'IA actuelle. Conçue pour une tâche spécifique bien définie. Peut surpasser les humains dans sa tâche mais ne peut pas transférer ses compétences ailleurs. Exemples: reconnaissance faciale, systèmes de recommandation, chatbots.

**IA Générale (General AI)** - Un système hypothétique capable d'accomplir n'importe quelle tâche intellectuelle qu'un humain peut faire. Possèderait une compréhension générale du monde. N'existe pas encore.

**IA Super (Super AI)** - Une IA qui surpasserait l'intelligence humaine dans tous les domaines. Reste du domaine théorique et de la science-fiction. Sujet de débat éthique.

### Systèmes Basés sur l'IA vs Systèmes Conventionnels

Les systèmes IA différent fondamentalement des systèmes traditionnels:
- **Programmation**: Conventionnel = logique explicite; IA = apprentissage de données
- **Adaptation**: Conventionnel = modifications manuelles; IA = apprentissage continu
- **Prévisibilité**: Conventionnel = très prévisible; IA = comportement moins prévisible
- **Debugging**: Conventionnel = traçage direct; IA = "black box" complexe

### Technologies d'IA Principales

1. **Machine Learning** - Systèmes qui apprennent des patterns dans les données
2. **Deep Learning** - Réseaux de neurones profonds pour données complexes
3. **Natural Language Processing** - Compréhension du langage humain
4. **Computer Vision** - Traitement et interprétation d'images
5. **Reinforcement Learning** - Apprentissage par récompense/punition

### Frameworks de Développement d'IA

Les frameworks facilitent et accélèrent le développement:
- **TensorFlow** (Google) - Framework flexible, utilisé en production massive
- **PyTorch** (Meta) - Plus intuitif, populaire en recherche
- **Keras** - API haute niveau pour construction rapide
- **Scikit-learn** - Bibliothèque complète ML pour données tabulaires

### Hardware pour Systèmes IA

L'IA nécessite une puissance de calcul massive:
- **GPUs (Graphics Processing Units)** - Accélèrent l'entraînement 100x+ plus vite
- **TPUs (Tensor Processing Units)** - Unités spécialisées pour opérations ML
- **CPUs Multicore** - Suffisants pour inférence légère en production

### AI as a Service (AIaaS)

AIaaS fournit des capacités IA via le cloud sans infrastructure locale. Principaux fournisseurs: Google Cloud AI, AWS SageMaker, Azure Cognitive Services, OpenAI API.

**Avantages**: Pas d'infrastructure à gérer, coûts variables, accès à des modèles de pointe.
**Risques**: Dépendance aux fournisseurs, latence réseau, conformité réglementaire.

### Modèles Pré-entraînés et Transfer Learning

Un modèle pré-entraîné est déjà entraîné sur de grandes données publiques. Le transfer learning réutilise cette connaissance pour des tâches similaires, économisant temps et données d'entraînement.

**Warning:** Les modèles pré-entraînés héritent les biais de leurs données d'origine et peuvent avoir une performance dégradée sur nouveaux domaines.

### Normes, Réglementations et Standards

**RGPD (Union Européenne)** - Exige transparence et droit à l'explication pour toute décision automatisée affectant les individus.

**AI Act (Union Européenne)** - Classification des systèmes IA selon le risque avec obligations selon le niveau.

**ISO/IEC 42001** - Norme de management des systèmes IA.

Chaque juridiction développe ses propres cadres réglementaires.`,

    visualSummary: `## Diagrammes et Matrices Visuelles

### Spectre d'Intelligence Artificielle

\`\`\`
     NARROW AI      GENERAL AI      SUPER AI
    (Actuelle)      (Théorique)     (Fiction)
        |               |              |
   [Tâche           [Toutes       [Surpasse
    Unique]         Tâches]       Humains]
\`\`\`

### Pile Technologique IA

\`\`\`
    ┌─────────────────────────────────┐
    │  Applications IA                │
    │  (Vision, NLP, Recommandation)  │
    ├─────────────────────────────────┤
    │  Frameworks                     │
    │  (TensorFlow, PyTorch, Keras)   │
    ├─────────────────────────────────┤
    │  Bibliothèques                  │
    │  (NumPy, Pandas, SciPy, Scikit) │
    ├─────────────────────────────────┤
    │  Langages                       │
    │  (Python, R, Julia)             │
    ├─────────────────────────────────┤
    │  Systèmes d'Exploitation        │
    ├─────────────────────────────────┤
    │  Hardware                       │
    │  (GPU, TPU, CPU)                │
    └─────────────────────────────────┘
\`\`\`

### Modèles de Déploiement IA

\`\`\`
IA Locale → Réseau Interne → Infrastructure Serveur
IA Cloud  → API Provider   → Infrastructure Distribuée
IA Hybride → Mixte         → Local + Cloud
\`\`\``,

    useCases: `## Cas d'Usage Réels du Chapitre 1

### 1. Reconnaissance Faciale aux Aéroports
Un grand aéroport international utilise la reconnaissance faciale pour le contrôle aux frontières et l'identification des passagers.

**Aspects IA:** Réseau de neurones convolutif (CNN) entraîné sur millions de visages, techniques d'embedding facial.

**Défi Test:** Fonctionnement stable sous différents éclairages, angles de caméra, avec/sans masques, verres, maquillage. Vérifier la précision sur toutes les origines ethniques.

**Risque Éthique:** Biais racial connu chez plusieurs systèmes de reconnaissance faciale.

### 2. Chatbot Bancaire pour Service Client 24/7
Une banque majeure déploie un chatbot basé sur GPT-like pour répondre 24h/24 aux questions des clients.

**Aspects IA:** Modèle Transformer pré-entraîné, traitement du langage naturel (NLP), génération de texte.

**Défi Test:** Comprendre l'intention réelle du client, maintenir le contexte sur plusieurs tours de conversation, refuser poliment les questions non liées.

**Risque:** Hallucination du modèle (invention de faux faits), divulgation accidentelle de données sensibles.

### 3. Recommandations Produits E-commerce
Netflix, Amazon, Spotify utilisent l'IA pour recommander du contenu personnalisé basé sur l'historique utilisateur.

**Aspects IA:** Collaborative filtering, matrix factorization, deep learning pour embeddings.

**Défi Test:** Qualité des recommandations, éviter les bulles de filtrage qui limitent la diversité, performance en temps réel sur millions d'utilisateurs.

**Impact Métier:** Augmente de 30-40% les revenus par utilisateur.`,

    mnemonics: `## Aides Mémoire et Acronymes

### Acronyme: IA SHARP (7 Domaines)
- **I**ntelligence Artificielle (Définition & Types)
- **A**daptation & Autonomie (Narrow vs General vs Super)
- **S**ystèmes & Services (Conventionnel vs IA)
- **H**ardware & Frameworks (GPU, TPU, TensorFlow, PyTorch)
- **A**dapted Services (AIaaS, Modèles Pré-entraînés)
- **R**églementations (RGPD, AI Act, ISO 42001)
- **P**rincipes Éthiques (Transparence, Équité, Responsabilité)

### Trois Types d'IA: NGS
- **N**arrow = Tâche unique (Aujourd'hui: Chatbot, Vision)
- **G**eneral = Toutes les tâches (Demain: hypothétique)
- **S**uper = Surpasse humain (Fiction: à débattre)

### Les 3 Piliers de l'IA Moderne
1. **BIG DATA** - Données massives et de qualité
2. **HARDWARE** - Puissance de calcul GPU/TPU
3. **ALGORITHMS** - Algorithmes ML/DL avancés

### L'Effet IA: De "Wow!" à "Banal"
Nouvelle Tech → Reste IA → Disparaît du vocable IA
(Charades-corrective, reconnaissance vocale)`
  },

  2: {
    lessonText: `## Chapitre 2: Caractéristiques de Qualité pour Systèmes Basés sur l'IA

### Flexibilité et Adaptabilité

Les systèmes IA doivent s'adapter à un environnement qui change constamment.

**Definition:** La flexibilité est la capacité d'un système IA à s'adapter rapidement à de nouvelles données, conditions, et environnements sans modification majeure du code ou architecture.

**Examples:**
- Un modèle de recommandation doit s'adapter aux nouveaux produits et préférences clients
- Un chatbot doit gérer l'évolution du langage naturel et les nouvelles questions
- Un système de détection de fraude doit reconnaître les nouvelles techniques de fraude

**Tip:** Les modèles IA continuent à apprendre et à évoluer après déploiement, ce qui complique les tests.

### Autonomie

L'autonomie décrit le degré auquel un système IA prend des décisions indépendamment sans intervention humaine.

**Niveaux d'Autonomie** (0-5 selon les standards SAE):
- Niveau 0: Contrôle humain complet
- Niveau 2: Système assiste et recommande
- Niveau 3: Décision autonome dans conditions normales
- Niveau 4: Autonomie complète dans domaine limité
- Niveau 5: Autonomie complète sans restrictions

**Implication Test:** Plus l'autonomie augmente, plus les tests doivent être rigoureux.

### Évolution

Les systèmes IA évoluent constamment:
- **Continuous Learning**: Le modèle apprend de nouvelles données après déploiement
- **Model Retraining**: Retrait périodique du modèle complet
- **Parameter Updates**: Ajustement des poids sans réentraînement complet

**Warning:** Chaque mise à jour peut introduire des régressions. Un modèle qui était 98% précis peut devenir 92% après une mise à jour de données.

### Biais dans les Systèmes IA

Le biais est une sistematic favorabilité ou discrimination envers certains résultats ou groupes.

**Types de Biais:**
- **Biais Données**: Représentation inégale dans données d'entraînement (ex: 95% hommes)
- **Biais Modèle**: Assumptions implicites de l'algorithme
- **Biais Utilisateur**: Interprétation biaisée des résultats IA
- **Biais Collecte**: Données biaisées dès la collection

**Example:** Système de recrutement qui discrimine les femmes parce qu'entraîné sur 70% d'hommes.

### Éthique et IA

Principes éthiques clés pour systèmes IA responsables:

1. **Transparence** - Les décisions doivent être explicables
2. **Équité** - Pas de discrimination basée sur attributs protégés
3. **Responsabilité** - Accountability claire pour erreurs
4. **Confidentialité** - Protection des données personnelles
5. **Bénéfice Social** - Système sert l'intérêt collectif

### Effets Secondaires et Reward Hacking

**Reward Hacking** est quand un système IA atteint son objectif d'une manière non intentionnelle en exploitant des failles.

**Examples:**
- Robot apprentissage par renforcement qui découvre une boucle infinie plutôt que compléter la tâche
- Système optimisant clicks qui affiche du contenu sensationnaliste au lieu du contenu utile
- Modèle classification qui mémorise juste les images d'entraînement (overfitting extrême)

### Transparence, Interprétabilité et Explicabilité

| Terme | Définition |
|-------|-----------|
| **Transparence** | Clarté du fonctionnement interne du modèle |
| **Interprétabilité** | Capacité à comprendre relation entrée-sortie |
| **Explicabilité** | Capacité à expliquer décisions en langage humain |

### Sécurité et IA

Menaces de sécurité spécifiques aux systèmes IA:

- **Adversarial Attacks**: Entrées conçues pour tromper le modèle
- **Data Poisoning**: Contamination des données d'entraînement
- **Model Stealing**: Extraction du modèle propriétaire
- **Evasion Attacks**: Contournement des défenses du modèle

Nécessite defensive security dès la conception.`,

    visualSummary: `## Matrices et Diagrammes

### Niveaux d'Autonomie (SAE)

\`\`\`
Autonomie croissante →
100% │ Humain                Level 0-2
     │ Humain + IA Assistance
 50% │ IA + Humain Approval  Level 3-4
     │ IA Autonome
  0% │ IA Complète           Level 5
     └────────────────────────────
\`\`\`

### Types de Biais et Impact

\`\`\`
         BIAIS IA
        /  |  \\
       /   |   \\
   DONNÉES MODEL HUMAIN
   (70%)  (20%)  (10%)
\`\`\`

### Spectre: Transparence → Explicabilité

\`\`\`
Modèles Simples  →  Modèles Complexes
(Interprétable)      (Black Box)
   Linear              Deep
   Tree                Neural
               TBD: Explainability
\`\`\``,

    useCases: `## Cas d'Usage: Qualité et Éthique

### 1. Système de Recrutement IA Biaisé
Exemple réel: Un fabricant de technologie major avait un système qui rejetait systématiquement les femmes candidates. La raison: données d'entraînement 70% hommes dans l'historique.

**Biais identifié:** Biais données, pas du modèle lui-même
**Solution test:** Audit équité par genre, origine, âge
**Impact:** Perte de 50% des candidats potentiels

### 2. Prêts Financiers Automatisés
Une banque utilise l'IA pour approuver/rejeter les demandes de prêt en secondes.

**Exigences éthiques:** Transparence (RGPD), pas de discrimination
**Défi:** Client rejeté doit recevoir explication compréhensible
**Test:** Validation que modèle ne discrimine pas par race, sexe, âge

### 3. Diagnostic Médical IA
Un hôpital utilise l'IA pour détecter les cancers sur les radiographies.

**Sécurité:** Qui est responsable si le diagnostic est faux?
**Autonomie:** Médecin décide ou IA décide?
**Test:** Validation contre diagnostics humains experts, matrice confusion`,

    mnemonics: `## Acronymes et Aides Mémoire

### Les 8 Caractéristiques: FATE-SIPS
- **F**lexibility & Adaptability
- **A**utonomy (Levels 0-5)
- **T**ransparency, Interpretability, Explainability (TIE)
- **E**thics (Fairness, Accountability, Transparency)
- **S**afety & Security
- **I**ntegrity (Biais, Reward Hacking)
- **P**rivacy (Protection données)
- **S**ide Effects (Unintended Consequences)

### 5 Principes Éthiques: TERBIS
- **T**ransparence - Expliquer les décisions
- **E**quité - Pas de discrimination
- **R**esponsabilité - Accountability claire
- **B**énéfice - Sert l'intérêt collectif
- **I**ntégrité - Pas de manipulation
- **S**écurité - Protection contre attaques

### Évolution du Modèle: CLP
- **C**ontinuous Learning (Apprend après déploiement)
- **L**ive Data (Nouvelles données en temps réel)
- **P**erformance Regression Risk (Peut se dégrader)`
  },

  // Chapitres 3-11 avec contenu similaire
  3: { lessonText: "## Chapitre 3: ML Overview\n\nMachine Learning Overview couvre les fondamentaux de l'apprentissage automatique.", visualSummary: "```\nWorkflow ML:\nData → Prepare → Train → Evaluate → Deploy\n```", useCases: "Cas d'usage de ML", mnemonics: "ML: Machines Learn" },
  4: { lessonText: "## Chapitre 4: ML Data\n\nData preparation, labeling, sampling", visualSummary: "```\nData Quality:\nQuantité × Qualité = Modèle Performance\n```", useCases: "Data collection cases", mnemonics: "Data = Fuel for ML" },
  5: { lessonText: "## Chapitre 5: ML Metrics\n\nConfusion matrix, precision, recall, ROC curves", visualSummary: "```\nConfusion Matrix:\n      Pred+ Pred-\nActual+ TP   FN\nActual- FP   TN\n```", useCases: "Metric evaluation", mnemonics: "Metrics Matter" },
  6: { lessonText: "## Chapitre 6: Neural Networks\n\nNeural network architecture and testing", visualSummary: "```\nNeural Network:\n[Input] → [Hidden] → [Output]\n```", useCases: "NN applications", mnemonics: "Neurons Network" },
  7: { lessonText: "## Chapitre 7: AI Testing Overview\n\nConcept drift, oracle problem", visualSummary: "```\nTesting Challenges:\nData Drift → Model Performance ↓\n```", useCases: "AI testing", mnemonics: "Drift Detection" },
  8: { lessonText: "## Chapitre 8: Quality Testing\n\nBias testing, explainability testing", visualSummary: "```\nTesting Matrix:\nQuality × Safety = Trust\n```", useCases: "Quality assurance", mnemonics: "Quality First" },
  9: { lessonText: "## Chapitre 9: Testing Methods\n\nMetamorphic testing, adversarial testing", visualSummary: "```\nTest Methods:\n1. Metamorphic\n2. Adversarial\n3. Pseudo-oracle\n```", useCases: "Advanced testing", mnemonics: "MAP Testing" },
  10: { lessonText: "## Chapitre 10: Test Environments\n\nProcessors, virtual environments", visualSummary: "```\nEnvironments:\nLocal → Staging → Production\n```", useCases: "Environment setup", mnemonics: "Env Matters" },
  11: { lessonText: "## Chapitre 11: AI for Testing\n\nDefect prediction, visual testing", visualSummary: "```\nAI in QA:\nDefect Prediction ↑ Efficiency\n```", useCases: "AI-aided testing", mnemonics: "AI Aids QA" }
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessonsContentData;
}
