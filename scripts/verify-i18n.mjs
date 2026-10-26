import { readFile } from 'node:fs/promises';

const enHome = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const ptHome = await readFile(new URL('../dist/pt/index.html', import.meta.url), 'utf8');
const enProject = await readFile(new URL('../dist/projetos/gestao-de-ponto/index.html', import.meta.url), 'utf8');
const ptProject = await readFile(new URL('../dist/pt/projetos/gestao-de-ponto/index.html', import.meta.url), 'utf8');

const checks = [
  ['EN home html lang="en"', enHome.includes('<html lang="en"')],
  ['PT home html lang="pt-BR"', ptHome.includes('<html lang="pt-BR"')],
  ['EN home has data-lang-toggle', enHome.includes('data-lang-toggle')],
  ['PT home has data-lang-toggle', ptHome.includes('data-lang-toggle')],
  ['EN home has English deck', enHome.includes('Time and break tracking')],
  ['PT home has Portuguese deck', ptHome.includes('Controle de ponto e intervalos')],
  ['EN home links to /projetos/gestao-de-ponto', enHome.includes('/projetos/gestao-de-ponto')],
  ['PT home links to /pt/projetos/gestao-de-ponto', ptHome.includes('/pt/projetos/gestao-de-ponto')],
  ['EN project html lang="en"', enProject.includes('<html lang="en"')],
  ['PT project html lang="pt-BR"', ptProject.includes('<html lang="pt-BR"')],
  ['EN project has English status', enProject.includes('In production')],
  ['PT project has Portuguese status', ptProject.includes('Em produção')],
  ['EN project has toggle to /pt', enProject.includes('href="/pt/projetos/gestao-de-ponto"')],
  ['PT project has toggle to /en', ptProject.includes('href="/projetos/gestao-de-ponto"')],
  ['PT project has Portuguese body text', ptProject.includes('Profissionais autônomos, prestadores de serviços')],
  ['EN project has English body text', enProject.includes('Freelancers, service providers, and small teams')],
];

let failed = 0;
for (const [name, result] of checks) {
  if (result) {
    console.log(`PASS: ${name}`);
  } else {
    console.error(`FAIL: ${name}`);
    failed++;
  }
}

if (failed > 0) {
  process.exit(1);
} else {
  console.log(`\nAll ${checks.length} i18n checks passed!`);
}
