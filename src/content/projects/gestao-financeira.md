---
title: "Personal Finance Management"
status: "planning"
featured: true
date: "2026-10"
summary: "Project in planning to record income and expenses and review transactions by category."
technologies:
  - "TypeScript"
  - "React"
  - "Node.js / Express"
  - "PostgreSQL"
  - "Tailwind CSS"
skills:
  - "UX Fast-Input"
  - "Monetary precision"
  - "Data visualization (charts)"
  - "Grouping and dynamic filters"
  - "Security and privacy"
links:
  repository: "https://github.com/LucasAlvesLougon/gestao_financeira"
---

## 1. Problem

Recording small expenses throughout the day can require more steps than necessary. This project starts from that friction to organize a simple entry flow.

## 2. Target audience

People who want to record income and expenses and review their transactions by category.

## 3. Solution

The proposal combines an entry form with views for income, expenses, and categories. This page describes the planned scope; the features are not presented as a completed delivery.

## 4. Main features

- **Transactions:** Income or expense form with category and account.
- **Categories:** Organize transactions for review.
- **Monthly view:** Summary of balance and expenses by category.
- **Recurring expenses:** Record fixed costs.
- **Export:** CSV history.

## 5. Proposed decisions

- **Values in cents:** Persistence is planned with integers to avoid floating-point rounding in monetary values.
- **User-scoped data:** The design includes input validation, credential protection, and separation of financial records.

## 6. Next steps

- Add reports comparing planned and actual budgets by category.
