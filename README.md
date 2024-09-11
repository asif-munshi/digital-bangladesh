# Digital Bangladesh

A Complete Digital Marketplace with Next.js 1, Prisma, and Postgres.

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original-wordmark.svg" alt="nextjs" width="40" height="40"/> </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss" width="40" height="40"/> </a>
<a href="https://www.prisma.io/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/prisma/prisma-original-wordmark.svg" alt="prisma" width="40" height="40"/>
<a href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>

## Authors

<a href="https://www.github.com/asif-munshi" target="_blank" rel="noreferrer"> <kbd> <img src="https://avatars.githubusercontent.com/u/75932258?v=4" alt="asif-munshi" width="40" height="auto" style="border-radius:50%"/> </kbd> </a>

## Notes

```bash
dotenv -e .env.local npx prisma db push

dotenv -e .env.local npx prisma studio
```

```bash
npx prisma init --datasource-provider postgresql

dotenv -e .env.local npx prisma migrate dev --name init0

npm install @prisma/client
```
