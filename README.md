# 🌲 WoodWork

## 🪚 Sobre o Projeto
O **WoodWork** é um projeto desenvolvido em **React** com **Vite**, configurado para **deploy automático no GitHub Pages**.  
O site apresenta uma aplicação web moderna e responsiva, utilizando **Bootstrap** para estilização e **React Router** para navegação entre páginas.

---

## 🧰 Tecnologias Utilizadas
- **React 19** – Biblioteca para construção de interfaces dinâmicas  
- **Vite** – Ferramenta de build rápida e moderna  
- **Bootstrap 5** – Framework CSS para estilização responsiva  
- **React Router DOM** – Roteamento para aplicações React  
- **ESLint** – Linting para manter a qualidade do código  
- **GitHub Pages** – Hospedagem gratuita para sites estáticos  

---

## ⚙️ Instalação e Execução

### 🧾 Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn instalado

### 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/abratreus/WoodWork.git
   cd WoodWork
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### 🚀 Execução em Desenvolvimento
```bash
npm run dev
```
A aplicação será executada em [http://localhost:5173](http://localhost:5173).

### 🏗️ Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta **dist/**.

### 🌐 Deploy para GitHub Pages
O deploy é automatizado via **GitHub Actions**.  
Para realizar o deploy manualmente:
```bash
npm run deploy
```

---

## 🧩 Scripts Disponíveis

| Comando | Função |
|----------|--------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Executa verificação de qualidade de código |
| `npm run deploy` | Publica automaticamente no GitHub Pages |

---

## 🗂️ Estrutura do Projeto

```
WoodWork/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── Navbar/
│   ├── Pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── dist/               # Gerado após o build
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧱 Desenvolvimento

### ➕ Adicionando Novas Páginas
1. Crie um novo componente dentro de `src/Pages/`.
2. Adicione a rota correspondente em `App.jsx` usando o React Router.
3. Utilize classes do **Bootstrap** para estilização rápida e responsiva.

### 🧹 Linting
Execute:
```bash
npm run lint
```

---

## 🤖 Deploy Automático
O projeto está configurado com **GitHub Actions**.  
Sempre que houver **push** na branch `main`, o site será **automaticamente construído e publicado** no GitHub Pages.

---

## 🤝 Contribuição

1. Faça um **fork** do projeto  
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. Faça commit das mudanças:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie a branch:
   ```bash
   git push origin feature/nova-feature
   ```
5. Abra um **Pull Request**

---

## 📜 Licença
Este projeto está sob a licença **MIT**.  
Consulte o arquivo `LICENSE` para mais detalhes.
