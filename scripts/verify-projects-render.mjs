import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const sectionStart = html.indexOf('id="projetos-destaque"');
const sectionEnd = html.indexOf('id="trajetoria"', sectionStart);

if (sectionStart === -1 || sectionEnd === -1) {
  throw new Error('A seção de projetos não foi encontrada no HTML gerado.');
}

const projectsSection = html.slice(sectionStart, sectionEnd);
const expectedProjects = [
  'muponto — gestão de ponto eletrônico',
  'cine random',
  'govintel ai — inteligência documental com rag',
  'gestão financeira pessoal',
];
const normalizedSection = projectsSection.toLowerCase();

if (projectsSection.includes('<astro-island')) {
  throw new Error('Os projetos ainda dependem de uma ilha React para existir no HTML estático.');
}

if (!projectsSection.includes('data-projects-filter')) {
  throw new Error('O contêiner estático de projetos não foi encontrado no HTML gerado.');
}

for (const project of expectedProjects) {
  if (!normalizedSection.includes(project)) {
    throw new Error(`Projeto ausente no HTML estático: ${project}`);
  }
}

console.log(`OK: ${expectedProjects.length} projetos renderizados no HTML estático.`);
