# LMS FSA

## Descrição do Projeto

O **LMS FSA** (Learning Management System) é uma plataforma desenvolvida para atender às necessidades de aprendizado online da **Faculdade de Saúde Avançada**. Este sistema oferece funcionalidades de gestão de cursos, aulas, progresso dos alunos e ferramentas administrativas para educadores, buscando uma experiência integrada e eficiente para alunos e administradores.

## Funcionalidades

### Para Alunos:
- Dashboard com saudação personalizada.
- Visualização e acompanhamento do progresso em cursos matriculados.
- Gamificação: Conquista de troféus e certificados.
- Links úteis para suporte e FAQ.
- Modo escuro/claro com persistência.

### Para Administradores:
- Gerenciamento de usuários e cursos.
- Visualização de métricas gerais do sistema.
- Ferramentas para upload de materiais didáticos.

---

## Estrutura do Projeto

### Principais Pastas e Arquivos:

- **`src/`**
  - **`assets/`**: Arquivos estáticos como imagens e estilos globais.
  - **`components/`**: Componentes Vue reutilizáveis (ex.: `AppNavBar`, `AppFooter`).
  - **`views/`**: Páginas principais da aplicação (ex.: `LandingHome.vue`, `StudentDashboard.vue`, `AdminDashboard.vue`).
  - **`router/`**: Configurações de rotas da aplicação.
  - **`store/`**: Gerenciamento de estado global utilizando Vuex.
  - **`App.vue`**: Componente raiz da aplicação.
  - **`main.js`**: Ponto de entrada principal do projeto.

- **`public/`**
  - Arquivos públicos como `index.html` e `data/users.json` (para simulação de login).

- **Arquivos de Configuração**
  - `tailwind.config.js`: Configuração do Tailwind CSS.
  - `package.json`: Lista de dependências e scripts disponíveis.

---

## Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

---

## Instalação

1. Clone o repositório:

```bash
https://github.com/centraldevfsa/fsa
```

2. Navegue até a pasta do projeto LMS:

```bash
cd fsa/lms-fsa
```

3. Instale as dependências:

```bash
npm install
```

---

## Uso

### Iniciar o Servidor de Desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:8080`.

### Construir para Produção:

```bash
npm run build
```

Os arquivos otimizados estarão disponíveis na pasta `dist/`.

---

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório.
2. Crie uma branch para sua funcionalidade ou correção de bug:

```bash
git checkout -b minha-funcionalidade
```

3. Faça suas alterações e commite-as:

```bash
git commit -m "Minha nova funcionalidade"
```

4. Envie suas alterações:

```bash
git push origin minha-funcionalidade
```

5. Abra um Pull Request.

---

## Licenciamento

Este projeto é licenciado sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## Equipe

**Desenvolvimento e Suporte:**
- Central Dev FSA
- Especialistas em Vue.js, Tailwind CSS e Gestão de Projetos EAD.

---

## Contato

Para dúvidas e sugestões:

- **E-mail**: suporte@saudeavancada.com.br
- **Site**: [Faculdade de Saúde Avançada](https://saudeavancada.com.br)
