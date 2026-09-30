import React, { useEffect, useRef, useState } from 'react';

export interface ProjectItemData {
  slug: string;
  title: string;
  status: 'concluido' | 'em-desenvolvimento' | 'planejamento';
  date?: string;
  summary: string;
  technologies: string[];
  links?: {
    demo?: string;
    repository?: string;
  };
}

interface ProjectsFilterProps {
  projects: ProjectItemData[];
}

type Filter = 'all' | ProjectItemData['status'];

const filterOptions: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'concluido', label: 'Concluídos' },
  { value: 'em-desenvolvimento', label: 'Em andamento' },
  { value: 'planejamento', label: 'Planejamento' },
];

const statusLabels: Record<ProjectItemData['status'], string> = {
  concluido: 'Concluído',
  'em-desenvolvimento': 'Em desenvolvimento',
  planejamento: 'Em planejamento',
};

export const ProjectsFilter: React.FC<ProjectsFilterProps> = ({ projects }) => {
  const [filter, setFilter] = useState<Filter>('all');
  const browserRef = useRef<HTMLDivElement>(null);
  const visibleProjects = filter === 'all' ? projects : projects.filter((project) => project.status === filter);

  useEffect(() => {
    const browser = browserRef.current;
    browser?.setAttribute('data-reveal-ready', '');
    browser?.dispatchEvent(new CustomEvent('portfolio:content-ready', { bubbles: true }));
  }, [filter]);

  return (
    <div className="projects-browser" ref={browserRef}>
      <div className="project-filters" role="group" aria-label="Filtrar projetos por situação">
        {filterOptions.map((option) => {
          const count = option.value === 'all'
            ? projects.length
            : projects.filter((project) => project.status === option.value).length;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => setFilter(option.value)}
            >
              {option.label} <span>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="project-list" aria-live="polite">
        {visibleProjects.map((project) => {
          const isMuPonto = project.slug === 'gestao-de-ponto';
          return (
            <article key={project.slug} className={isMuPonto ? 'project-row project-row-featured' : 'project-row'}>
              <div className="project-meta">
                <span className={isMuPonto ? 'project-status-live' : ''}>
                  {isMuPonto ? 'Em produção' : statusLabels[project.status]}
                </span>
                {project.date && <time dateTime={project.date}>{project.date}</time>}
              </div>
              <div className="project-description">
                <h3><a href={'/projetos/' + project.slug}>{project.title}</a></h3>
                <p>{project.summary}</p>
                <p className="project-technology">{project.technologies.slice(0, 4).join(', ')}</p>
              </div>
              <div className="project-actions">
                <a href={'/projetos/' + project.slug}>Ler estudo de caso</a>
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer">
                    Abrir produto <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.links?.repository && (
                  <a href={project.links.repository} target="_blank" rel="noreferrer">
                    Repositório <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
        {visibleProjects.length === 0 && (
          <p className="project-empty">Ainda não há projetos nesta etapa. Escolha outro filtro para ver os trabalhos disponíveis.</p>
        )}
      </div>
    </div>
  );
};
