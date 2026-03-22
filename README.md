<div align="center">

<img src="https://img.shields.io/badge/Status-Em%20Produção-2ea043?style=flat-square" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/React%20Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />
<img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-0d1117?style=flat-square&logo=github&logoColor=white" />

<br />
<br />

# 🎯 Board de Metas

### SPA para gerenciamento de metas pessoais por área da vida

<br />

[![▶ Acessar Projeto](https://img.shields.io/badge/▶%20%20ACESSAR%20PROJETO%20AO%20VIVO-2ea043?style=for-the-badge&logoColor=white)](https://tomd4vs.github.io/Metas-projeto-final/)

<br />

</div>

---

## 📋 Sobre o Projeto

O **Board de Metas** é uma Single Page Application desenvolvida em grupo com **React.js**, com o objetivo de ajudar usuários a acompanhar suas metas pessoais organizadas por área da vida: **Carreira**, **Saúde**, **Finanças** e **Relacionamentos**.

A aplicação permite cadastrar metas com prazo e descrição, acompanhar o progresso de forma manual (0% a 100%), aplicar filtros dinâmicos e visualizar um dashboard com a visão geral de todas as áreas — tudo com persistência automática entre sessões.

---

## ✨ Funcionalidades

- ✅ Cadastrar, editar e remover metas
- ✅ Atualizar progresso via slider (0–100%)
- ✅ Filtrar por área ou por prazo próximo (7 dias)
- ✅ Dashboard com progresso médio por área e alertas de prazo
- ✅ Persistência automática via `localStorage`
- ✅ Select de área totalmente customizado (sem estilo nativo do browser)
- ✅ Tema escuro/claro automático via `prefers-color-scheme`
- ✅ Modal do time de desenvolvimento
- ✅ Layout responsivo para mobile e desktop
- ✅ Tratamento de rota 404

---

## 🛠️ Tecnologias

| Tecnologia       | Versão | Uso                       |
| ---------------- | ------ | ------------------------- |
| React            | 19     | Biblioteca principal      |
| Vite             | 8      | Bundler e servidor de dev |
| React Router DOM | 7      | Roteamento SPA            |
| CSS Variables    | —      | Theming dark/light        |
| gh-pages         | 6      | Deploy no GitHub Pages    |

---

## ⚙️ Conceitos React Aplicados

| Conceito                     | Onde aparece                                                            |
| ---------------------------- | ----------------------------------------------------------------------- |
| `useState`                   | Progresso, filtros, formulários, modo de edição                         |
| `useEffect` + `localStorage` | Persistência de metas entre sessões                                     |
| `useContext` / Context API   | `MetasContext` — dados compartilhados entre dashboard, lista e detalhes |
| `useRef`                     | Fechar dropdown ao clicar fora                                          |
| React Router                 | `/` dashboard · `/metas` lista · `/meta/:id` detalhes · `*` 404         |
| Filtros dinâmicos            | Por área e por prazo próximo em `PaginaMetas`                           |
| Componentização              | Cards, formulários, modais e utilitários reutilizáveis                  |

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── FormNovaMeta.jsx      ← Formulário de nova meta com validação
│   ├── Footer.jsx            ← Footer com link para modal do time
│   ├── Header.jsx            ← Navegação principal
│   ├── LayoutPrincipal.jsx   ← Wrapper com Header + Outlet + Footer
│   ├── MetaCard.jsx          ← Card individual de meta
│   ├── ModalTime.jsx         ← Modal com time de desenvolvimento
│   ├── ProgressoBar.jsx      ← Barra de progresso visual
│   └── SelectArea.jsx        ← Select customizado para áreas
├── contexts/
│   └── MetasContext.jsx      ← Context API com todas as operações de metas
├── pages/
│   ├── PaginaInicio.jsx      ← Dashboard com resumo e progresso por área
│   ├── PaginaMetas.jsx       ← Lista de metas com filtros dinâmicos
│   ├── PaginaDetalhes.jsx    ← Detalhes, edição e controle de progresso
│   └── PaginaNaoEncontrada.jsx ← Página 404
├── utils/
│   └── areas.js              ← Configurações de áreas e helpers de data
├── App.jsx                   ← Definição das rotas
├── App.css                   ← Estilos globais com variáveis CSS
├── main.jsx                  ← Entry point com BrowserRouter + MetasProvider
└── index.css                 ← Reset e configurações base
```

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js instalado

```bash
# 1. Clonar o repositório
git clone https://github.com/TomD4vs/Metas-projeto-final.git

# 2. Entrar na pasta
cd Metas-projeto-final

# 3. Instalar dependências
npm install

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 👨‍💻 Time de Desenvolvimento

<br />

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/CalebeMaia">
        <img src="https://github.com/CalebeMaia.png" width="80" style="border-radius:50%" /><br />
        <sub><b>CalebeMaia</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rafaeldevstudio">
        <img src="https://github.com/rafaeldevstudio.png" width="80" style="border-radius:50%" /><br />
        <sub><b>rafaeldevstudio</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/TomD4vs">
        <img src="https://github.com/TomD4vs.png" width="80" style="border-radius:50%" /><br />
        <sub><b>TomD4vs</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lucas-lsz">
        <img src="https://github.com/lucas-lsz.png" width="80" style="border-radius:50%" /><br />
        <sub><b>Lucas Santos</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bennyfarias">
        <img src="https://github.com/bennyfarias.png" width="80" style="border-radius:50%" /><br />
        <sub><b>Benjamin Farias</b></sub>
      </a>
    </td>
  </tr>
</table>