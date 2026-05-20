const fs = require('fs');

// Lire les données
const dataPath = './data.js';
const lessonsDataFile = require('./lesson-content-update.js');
const lessonsData = lessonsDataFile;

let dataContent = fs.readFileSync(dataPath, 'utf8');

// Trouver l'index où lessonsContent commence
let lessonStartIdx = dataContent.indexOf('CTAI_DATA.lessonsContent = {');
if (lessonStartIdx === -1) {
  // Chercher l'autre format
  lessonStartIdx = dataContent.indexOf('lessonsContent:');
  if (lessonStartIdx === -1) {
    console.error('lessonsContent non trouvé');
    process.exit(1);
  }
}

// Trouver où commence le contenu
const contentStartIdx = dataContent.indexOf('{', lessonStartIdx);

// Trouver la fin
let braceCount = 0;
let contentEndIdx = contentStartIdx;
for (let i = contentStartIdx; i < dataContent.length; i++) {
  if (dataContent[i] === '{') braceCount++;
  if (dataContent[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      contentEndIdx = i;
      break;
    }
  }
}

console.log(`✓ lessonsContent trouvé à ligne ${dataContent.substring(0, lessonStartIdx).split('\n').length}`);

// Générer le nouvel objet
const isExternal = dataContent.includes('CTAI_DATA.lessonsContent = {');
let newLessonsContent = isExternal ? 'CTAI_DATA.lessonsContent = {\n' : 'lessonsContent: {\n';

for (let ch = 1; ch <= 11; ch++) {
  const lesson = lessonsData[ch.toString()];
  if (!lesson) {
    console.error(`Chapitre ${ch} manquant`);
    continue;
  }

  // Échapper pour template literals
  const escape = (str) => str.replace(/\\/g, '\\\\').replace(/`/g, '\\`');

  const lt = escape(lesson.lessonText);
  const vs = escape(lesson.visualSummary);
  const uc = escape(lesson.useCases);
  const mn = escape(lesson.mnemonics);

  newLessonsContent += `  ${ch}: {\n`;
  newLessonsContent += `    learningObjectives: CTAI_DATA.lessonsContent[${ch}].learningObjectives,\n`;
  newLessonsContent += `    lessonText: \`${lt}\`,\n`;
  newLessonsContent += `    visualSummary: \`${vs}\`,\n`;
  newLessonsContent += `    useCases: \`${uc}\`,\n`;
  newLessonsContent += `    mnemonics: \`${mn}\`\n`;
  newLessonsContent += `  },\n`;
}

newLessonsContent += '}';

// Remplacer
const newDataContent = dataContent.substring(0, contentStartIdx) +
                       newLessonsContent +
                       dataContent.substring(contentEndIdx + 1);

// Sauvegarder
fs.writeFileSync(dataPath, newDataContent, 'utf8');
console.log('✓ data.js mis à jour');
console.log(`✓ ${newDataContent.length} bytes`);
