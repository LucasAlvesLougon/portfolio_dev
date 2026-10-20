import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const sectionStart = html.indexOf('id="featured-projects"');
const sectionEnd = html.indexOf('id="trajectory"', sectionStart);

if (sectionStart === -1 || sectionEnd === -1) {
  throw new Error('The projects section was not found in the generated HTML.');
}

const projectsSection = html.slice(sectionStart, sectionEnd);
const expectedProjects = [
  'muponto - electronic time tracking',
  'cine random',
  'govintel ai - document intelligence',
  'personal finance management',
];
const normalizedSection = projectsSection.toLowerCase();

if (projectsSection.includes('<astro-island')) {
  throw new Error('The projects still depend on a React island to exist in the static HTML.');
}

if (!projectsSection.includes('data-projects-filter')) {
  throw new Error('The static project container was not found in the generated HTML.');
}

for (const project of expectedProjects) {
  if (!normalizedSection.includes(project)) {
    throw new Error(`Project missing from static HTML: ${project}`);
  }
}

console.log(`OK: ${expectedProjects.length} projects rendered in static HTML.`);
