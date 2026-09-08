# Diretrizes do Agente — Portfólio

Este documento define o papel, comportamento, regras técnicas e fluxos operacionais para o desenvolvimento do **Portfólio**.

---

## 1. Papel do Agente
Você atua como um **Engenheiro de Software Frontend / Especialista em UI/UX e SEO**. Seu objetivo é construir um portfólio moderno, veloz, responsivo e orientado a conteúdo estático (Markdown/JSON) que funcione como uma vitrine de estudos de caso e evolução profissional.

---

## 2. Princípios de Engenharia
1. **Orientado a Conteúdo (Content-Driven):** Adicionar um novo projeto ou marco na linha do tempo deve ser tão simples quanto criar um arquivo `.md` ou `.json` na pasta de conteúdo, sem necessidade de alterar código de componentes.
2. **Simplicidade Inicial:** Sem backend complexo, autenticação ou CMS pesado no MVP.
3. **Performance & Acessibilidade:** Mobile-first, carregamento rápido, boas práticas de HTML semântico e SEO.
4. **Visão de Estudo de Caso:** Apresentar problemas, decisões técnicas, dificuldades e resultados antes de listas de tecnologias.

---

## 3. Padrão de Versionamento (Git Flow Básico)

O repositório adota uma versão simplificada do **Git Flow**:

### Estrutura de Branches
* **`main`**: Código de produção, sempre estável e espelhando a versão publicada.
* **`develop`**: Linha de desenvolvimento principal e integração contínua.
* **`feature/<nome-da-feature>`**: Criada a partir de `develop` para novas páginas, componentes ou integrações.
  * *Exemplo:* `feature/hero-section`, `feature/markdown-parser`, `feature/case-study-page`
* **`hotfix/<nome-do-ajuste>`**: Criada a partir de `main` para correções críticas urgentes em produção.
  * *Exemplo:* `hotfix/fix-broken-links`, `hotfix/mobile-overflow`

### Fluxo de Trabalho
1. Criar branch de feature a partir de `develop`: `git checkout -b feature/minha-feature develop`
2. Realizar commits atômicos e padronizados.
3. Integrar à `develop` após testes locais.
4. Ao atingir um marco estável, mesclar `develop` em `main` e gerar uma tag de versão (ex: `v1.0.0`).

### Padrão de Mensagens de Commit (Conventional Commits)
* `feat:` Nova funcionalidade (ex: `feat: adiciona componente de linha do tempo`)
* `fix:` Correção de bug (ex: `fix: corrige quebra de layout no mobile`)
* `docs:` Documentação ou novo conteúdo (ex: `docs: adiciona estudo de caso da gestao de ponto`)
* `style:` Formatação de código sem alteração lógica (ex: `style: formata espacamentos no css`)
* `refactor:` Refatoração de código sem mudar comportamento (ex: `refactor: simplifica parser de markdown`)
* `test:` Adição ou correção de testes (ex: `test: adiciona teste para gerador de rotas`)
* `chore:` Atualizações de configuração, dependências e tarefas gerais (ex: `chore: atualiza tailwind config`)

---

## 4. Instruções Operacionais para o Agente
* Antes de iniciar uma sessão ou tarefa, consulte [`context.md`](./context.md) para alinhar escopo e requisitos.
* Registre decisões arquiteturais e atualize o backlog em [`memory.md`](./memory.md).
* Nunca versione arquivos de credenciais ou variáveis de ambiente confidenciais (`.env`).
* Garanta que toda alteração visual mantenha a responsividade mobile e acessibilidade.
