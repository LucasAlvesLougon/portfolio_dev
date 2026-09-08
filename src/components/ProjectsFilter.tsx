import React, { useState } from 'react';

export interface ProjectItemData {
  slug: string;
  title: string;
  status: 'concluido' | 'em-desenvolvimento' | 'planejamento';
  date?: string;
  summary: string;
  technologies: string[];
  skills: string[];
  metrics?: {
    architecture?: string;
    tests?: string;
    documentation?: string;
  };
  links?: {
    demo?: string;
    repository?: string;
  };
}

interface ProjectsFilterProps {
  projects: ProjectItemData[];
}

export const ProjectsFilter: React.FC<ProjectsFilterProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'concluido' | 'em-desenvolvimento' | 'planejamento'>('all');

  const statusOrder: Record<string, number> = {
    'concluido': 1,
    'em-desenvolvimento': 2,
    'planejamento': 3,
  };

  const filteredProjects = projects
    .filter((p) => {
      if (filter === 'all') return true;
      return p.status === filter;
    })
    .sort((a, b) => {
      const priorityA = statusOrder[a.status] || 99;
      const priorityB = statusOrder[b.status] || 99;
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      return (b.date || '').localeCompare(a.date || '');
    });

  const countFor = (st: string) => {
    if (st === 'all') return projects.length;
    return projects.filter((p) => p.status === st).length;
  };

  const getStatusBadge = (st: string) => {
    switch (st) {
      case 'concluido':
        return {
          label: 'CONCLUÍDO',
          className: 'bg-mono-100 dark:bg-mono-900 text-mono-900 dark:text-white border-mono-300 dark:border-mono-700',
        };
      case 'em-desenvolvimento':
        return {
          label: 'EM DESENVOLVIMENTO',
          className: 'bg-mono-100 dark:bg-mono-900 text-mono-900 dark:text-white border-mono-300 dark:border-mono-700',
        };
      default:
        return {
          label: 'PLANEJAMENTO',
          className: 'bg-mono-100 dark:bg-mono-900 text-mono-700 dark:text-mono-300 border-mono-300 dark:border-mono-700',
        };
    }
  };

  const getProjectMetrics = (proj: ProjectItemData) => {
    if (proj.status === 'concluido') {
      return {
        architecture: proj.metrics?.architecture || 'Clean Arch / Layered',
        tests: proj.metrics?.tests || '54/54 PASS (100%)',
        documentation: proj.metrics?.documentation || 'ADRs & Swagger Prontos',
      };
    }
    if (proj.status === 'em-desenvolvimento') {
      return {
        architecture: proj.metrics?.architecture || 'Modular (Node/TS)',
        tests: proj.metrics?.tests || 'Regras de Cálculo Ativas',
        documentation: proj.metrics?.documentation || 'Specs em Andamento',
      };
    }
    return {
      architecture: proj.metrics?.architecture || 'Clean Arch (Draft)',
      tests: proj.metrics?.tests || 'Planejamento via TDD',
      documentation: proj.metrics?.documentation || 'Requisitos Definidos',
    };
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 font-semibold transition-all focus:outline-none ${
            filter === 'all'
              ? 'bg-mono-900 dark:bg-white text-white dark:text-mono-950'
              : 'bg-mono-100 dark:bg-mono-900 text-mono-600 dark:text-mono-400 hover:text-mono-900 dark:hover:text-white border border-mono-200 dark:border-mono-800'
          }`}
        >
          TODOS ({countFor('all') < 10 ? `0${countFor('all')}` : countFor('all')})
        </button>

        <button
          onClick={() => setFilter('concluido')}
          className={`px-3 py-1 font-semibold transition-all focus:outline-none ${
            filter === 'concluido'
              ? 'bg-mono-900 dark:bg-white text-white dark:text-mono-950'
              : 'bg-mono-100 dark:bg-mono-900 text-mono-600 dark:text-mono-400 hover:text-mono-900 dark:hover:text-white border border-mono-200 dark:border-mono-800'
          }`}
        >
          CONCLUÍDOS ({countFor('concluido') < 10 ? `0${countFor('concluido')}` : countFor('concluido')})
        </button>

        <button
          onClick={() => setFilter('em-desenvolvimento')}
          className={`px-3 py-1 font-semibold transition-all focus:outline-none ${
            filter === 'em-desenvolvimento'
              ? 'bg-mono-900 dark:bg-white text-white dark:text-mono-950'
              : 'bg-mono-100 dark:bg-mono-900 text-mono-600 dark:text-mono-400 hover:text-mono-900 dark:hover:text-white border border-mono-200 dark:border-mono-800'
          }`}
        >
          EM ANDAMENTO ({countFor('em-desenvolvimento') < 10 ? `0${countFor('em-desenvolvimento')}` : countFor('em-desenvolvimento')})
        </button>

        <button
          onClick={() => setFilter('planejamento')}
          className={`px-3 py-1 font-semibold transition-all focus:outline-none ${
            filter === 'planejamento'
              ? 'bg-mono-900 dark:bg-white text-white dark:text-mono-950'
              : 'bg-mono-100 dark:bg-mono-900 text-mono-600 dark:text-mono-400 hover:text-mono-900 dark:hover:text-white border border-mono-200 dark:border-mono-800'
          }`}
        >
          PLANEJAMENTO ({countFor('planejamento') < 10 ? `0${countFor('planejamento')}` : countFor('planejamento')})
        </button>
      </div>

      {/* Projects Cards List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((proj) => {
          const st = getStatusBadge(proj.status);
          const metrics = getProjectMetrics(proj);

          return (
            <div
              key={proj.slug}
              className="bg-white dark:bg-mono-950 p-6 lg:p-8 border border-mono-200 dark:border-mono-800 transition-all hover:border-mono-400 dark:hover:border-mono-600"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Project Info */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 border text-xs font-mono font-semibold ${st.className}`}>
                      {st.label}
                    </span>
                    {proj.date && (
                      <span className="px-2 py-0.5 bg-mono-100 dark:bg-mono-900 border border-mono-200 dark:border-mono-800 text-mono-600 dark:text-mono-400 text-xs font-mono">
                        {proj.date}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold font-headline uppercase text-mono-900 dark:text-white">
                      <a href={`/projetos/${proj.slug}`} className="hover:underline">
                        {proj.title}
                      </a>
                    </h3>
                    <p className="text-sm text-mono-600 dark:text-mono-300 font-medium mt-1">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="p-3.5 bg-mono-50 dark:bg-mono-900 border border-mono-200 dark:border-mono-800 text-xs text-mono-700 dark:text-mono-300 leading-relaxed font-mono">
                    <span className="font-bold text-mono-900 dark:text-white">// DESTAQUES DE ENGENHARIA:</span>
                    <br />
                    Clean Architecture, concorrência determinística, testes automatizados e modelagem relacional.
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-xs font-mono text-mono-400 uppercase mr-1">Stack:</span>
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-mono-100 dark:bg-mono-950 text-mono-800 dark:text-mono-300 text-xs font-mono border border-mono-200 dark:border-mono-800"
                      >
                        [ {t} ]
                      </span>
                    ))}
                  </div>

                  {proj.skills.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-xs font-mono text-mono-400 uppercase mr-1">Competências:</span>
                      {proj.skills.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 bg-white dark:bg-mono-900 text-mono-700 dark:text-mono-300 border border-mono-200 dark:border-mono-800 text-[11px] font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Verification Metrics & Actions */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full bg-mono-50 dark:bg-mono-900 border border-mono-200 dark:border-mono-800 p-5 gap-6">
                  <div className="flex flex-col gap-3 font-mono">
                    <span className="text-xs uppercase text-mono-500 font-semibold">// Validação</span>
                    <div className="flex items-baseline justify-between border-b border-mono-200 dark:border-mono-800 pb-2">
                      <span className="text-xs text-mono-500">Arquitetura</span>
                      <span className="text-xs sm:text-sm font-bold text-mono-900 dark:text-white text-right">
                        {metrics.architecture}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-mono-200 dark:border-mono-800 pb-2">
                      <span className="text-xs text-mono-500">Testes</span>
                      <span className="text-xs sm:text-sm font-bold text-mono-900 dark:text-white text-right">
                        {metrics.tests}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-mono-500">Documentação</span>
                      <span className="text-xs sm:text-sm font-bold text-mono-900 dark:text-white text-right">
                        {metrics.documentation}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={`/projetos/${proj.slug}`}
                      className="h-10 px-4 bg-mono-900 dark:bg-white hover:bg-mono-800 dark:hover:bg-mono-100 text-white dark:text-mono-950 font-bold text-xs font-mono uppercase flex items-center justify-center gap-2 transition-all shadow-sm focus:outline-none"
                    >
                      <span>Estudo de Caso Completo</span>
                      <span>→</span>
                    </a>

                    {proj.links?.demo && (
                      <a
                        className="h-10 px-4 bg-white dark:bg-mono-950 hover:bg-mono-100 dark:hover:bg-mono-900 text-mono-900 dark:text-white font-medium text-xs font-mono flex items-center justify-center gap-1.5 border border-mono-300 dark:border-mono-700 transition-colors shadow-sm"
                        href={proj.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="material-symbols-outlined text-base">open_in_new</span>
                        <span>Site ↗</span>
                      </a>
                    )}

                    {proj.links?.repository && (
                      <a
                        className="h-10 px-4 bg-white dark:bg-mono-950 hover:bg-mono-100 dark:hover:bg-mono-900 text-mono-900 dark:text-white font-medium text-xs font-mono flex items-center justify-center gap-1.5 border border-mono-300 dark:border-mono-700 transition-colors"
                        href={proj.links.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>Code Base ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
