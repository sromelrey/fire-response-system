## Simple Todo List with Next.js 14 and NextAuth.js

<!-- ABOUT THE PROJECT -->

## About The Project

### FIRE RESPOND Web App: Facilitate efficient fire response management

#### Summary

The FIRE RESPOND web app provides an easy-to-use interface for fire response management, featuring quick access to key functions such as dashboard, reports, account management, notifications, and settings. The dashboard provides critical information, while the reports page logs detailed fire incidents. The accounts page manages registered properties, and the notifications page serves as an alert inbox. The app also includes pop-up warnings for emergencies, with visual and textual alerts.
Description of the FIRE RESPOND Web App

The FIRE RESPOND web application is designed to facilitate efficient fire response management. The interface includes several key features:

- [x] Dashboard: Central hub displaying crucial information.
- [x] Reports: Detailed logs of fire incidents, including house ID, location, date, time, and incident images.
- [x] Accounts: Management of registered properties with owner details and property location.
- [x] Notifications: Inbox for alerts and updates, including emergency pop-ups with critical information.

## Installed packages

```bash
npm install next@14.0.0 react@18.2.0 react-dom@18.2.0 next-auth@5.0.0-beta.3 postcss@8.4.31 tailwindcss@3.3.3 typescript@5.2.2 use-debounce@10.0.0 zod@3.22.2 @vercel/postgres @mui/material @emotion/react bcryptjs@2.4.3 @types/bcryptjs@2.4.6 @heroicons/react@2.1.3 jose @tailwindcss/forms@0.5.6 autoprefixe@10.0.1
prettier prettier-plugin-tailwindcss eslint-config-prettier

```

```bash
npm install --save-dev @types/react @types/react-dom
```

#### generate a secret key for your application. This key is used to encrypt cookies, ensuring the security of user sessions. You can do this by running the following command in your terminal:

```bash
openssl rand -base64 32
```

### Built With

This section list any major frameworks/libraries used in the project.

https://nextjs.org/

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Authentication

This NEXTJS Boiler App uses NEXT-AUTH for authentication

## Database Setup

To connect with the existing database got to vercel and Projects storage and click `.env.local` and copy the env
