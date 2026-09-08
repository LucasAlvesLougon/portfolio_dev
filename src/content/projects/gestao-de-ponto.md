---
title: "Gestão de Ponto"
status: "em-desenvolvimento"
featured: true
date: "2026-09"
summary: "Sistema simples e seguro para controle de jornadas de trabalho, focado em autônomos e freelancers."
technologies:
  - "TypeScript"
  - "React"
  - "Node.js"
  - "PostgreSQL"
skills:
  - "Autenticação & JWT"
  - "Modelagem Relacional"
  - "Cálculos Temporais"
  - "Exportação CSV/PDF"
  - "Testes de Regras de Negócio"
metrics:
  architecture: "Modular (Node/TS)"
  tests: "Regras de Cálculo Ativas"
  documentation: "Specs em Andamento"
links:
  repository: "https://github.com/LucasAlvesLougon/gestao_ponto"
---

## 1. Problema

Profissionais autônomos e prestadores de serviço precisam acompanhar suas horas de trabalho de forma ágil, mas os sistemas corporativos de RH existentes são excessivamente burocráticos, lentos e cheios de regras desnecessárias para o contexto individual.

## 2. Público-Alvo

Freelancers, desenvolvedores PJ, designers e consultores independentes que precisam registrar suas horas diárias e comprovar jornadas para múltiplos clientes.

## 3. Solução

Uma aplicação web intuitiva e rápida (registro em 1 clique) que calcula automaticamente o saldo de horas trabalhadas no dia e no mês, suporta pausas/intervalos, permite correções justificadas e gera relatórios para exportação.

## 4. Funcionalidades Principais

- **Autenticação Segura:** Login, cadastro e perfil de usuário com isolamento de dados.
- **Bater Ponto em 1 Clique:** Registro de entrada, pausas de almoço/descanso e saída.
- **Histórico e Resumo Mensal:** Visualização clara do total de horas realizadas vs. meta mensal.
- **Cálculo de Saldo:** Indicador automático de saldo positivo (horas extras) ou saldo negativo.
- **Exportação de Relatórios:** Download dos registros em PDF ou planilha CSV.

## 5. Decisões Técnicas

- **Fuso Horário em UTC:** Todos os registros são gravados em UTC no banco de dados para evitar inconsistências de horário de verão ou troca de fuso horário.
- **Isolamento de Tenant:** Cada consulta ou mutação valida obrigatoriamente o identificador do usuário autenticado no token JWT.
- **Git Flow:** Ramificação baseada em `feature/*` com Conventional Commits e testes de regras de cálculo.

## 6. Dificuldades & Aprendizados

- Desafio de tratar marcações incompletas (ex: usuário esqueceu de marcar a saída).
- Resolução com alerta no dashboard e funcionalidade de ajuste manual com flag de histórico editado.

## 7. Próximos Passos

- Integração com envio de relatórios automáticos por e-mail no final de cada mês.
