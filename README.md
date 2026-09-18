# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Running this project (local)

To start the development server:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is taken).

## Recent local changes

- Fixed incorrect CSS import in `src/main.jsx` (now imports `src/index.css`).
- Small accessibility improvements in `src/components/Header.jsx` (`aria-expanded`, `aria-controls`, role and labels).

See `CHANGELOG.md` for a concise history of edits made during this session.

## GitHub Pages

Site: https://larissydarc.github.io/ESCOLA-DE-IDIOMAS/

O workflow em .github/workflows/pages.yml instala as dependências, executa lint e build e publica a pasta dist. Novos pushes em feat/redesign-vivalingua ou main acionam a publicação.

A versão do redesign está na branch feat/redesign-vivalingua. Depois da integração em main, remova a branch de desenvolvimento dos gatilhos de publicação e das permissões do ambiente github-pages.

O Vite usa a base /ESCOLA-DE-IDIOMAS/. Para desenvolvimento local, acesse http://localhost:5173/ESCOLA-DE-IDIOMAS/.

O formulário prepara uma mensagem no aplicativo de e-mail do visitante; não há serviço de envio no servidor.