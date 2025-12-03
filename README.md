# 🏆 Champions League Hub  
### SPA em React com Rotas, Componentização, Responsividade e CSS Modules

Este projeto foi desenvolvido para fins acadêmicos como parte da avaliação prática da disciplina de Desenvolvimento Web.  
O sistema apresenta informações sobre clubes, partidas e uma página de contato — tudo no formato de **SPA (Single Page Application)** com **React + Vite**.

---

## 📁 Estrutura do Projeto

src/
│ App.jsx
│ main.jsx
│ index.css
├─ components/
│ ├─ Layout/
│ ├─ Navbar/
│ ├─ Footer/
│ └─ PageHeader/
└─ pages/
├─ Home/
├─ Teams/
├─ Matches/
└─ Contact/


- **components/** → componentes reutilizáveis como Navbar, Footer, Layout e PageHeader  
- **pages/** → páginas da aplicação controladas por rotas  
- **index.css** → estilos globais e variáveis  
- **App.jsx** → configurações de rotas  
- **main.jsx** → inicialização do React + Router

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| **React** | Estrutura da aplicação |
| **React Router DOM** | Sistema de rotas SPA |
| **Vite** | Build + Dev Server rápido |
| **JavaScript (ES6)** | Lógica e componentes |
| **CSS Modules** | Estilização isolada por componente |
| **HTML via JSX** | Estrutura da interface |

---

## 🗂️ Funcionalidades

✔ 4 páginas funcionais  
✔ Rotas dinâmicas sem reload (SPA)  
✔ Props utilizadas para renderização dinâmica  
✔ Navbar fixa no topo  
✔ Footer fixo ao final  
✔ Sistema totalmente responsivo  
✔ CSS organizado por componentes  
✔ Estilo moderno usando variáveis, gradientes e sombras suaves  
✔ Cards, tabelas e formulários estilizados  

---

## 📄 Páginas da Aplicação

### 🏠 Home  
Resumo do sistema, hero section moderna e dados gerais da Champions League.

### ⚽ Times  
Cards de clubes históricos com país e número de títulos.

### 📅 Partidas  
Tabela estilizada com confrontos marcantes.

### ✉️ Contato  
Formulário funcional com layout mais profissional.

---

## 📌 Requisitos da Prova — Atendidos ✔

| Requisito | Onde Está |
|----------|-----------|
| **Uso de Props** | `PageHeader.jsx` |
| **Componentização** | `components/*` |
| **SPA + Rotas** | `App.jsx` + `react-router-dom` |
| **HTML/CSS/JS** | Estrutura JSX + CSS Modules |
| **4 Páginas (Home obrigatória)** | Home, Teams, Matches, Contact |
| **Navbar e Footer fixos** | `Layout.jsx` |
| **Responsivo** | Toda estilização com CSS Modules |
| **Organização de pastas** | Estrutura modular no `src/` |
| **CSS Modules** | Todos arquivos `.module.css` |

---

## 🔧 Como Rodar o Projeto

### 1. Instale as dependências

```bash
npm install
npm run dev

## ✨ Autor

Projeto desenvolvido por Felipe Alho, para fins acadêmicos.