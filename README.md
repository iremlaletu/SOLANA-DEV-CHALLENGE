# Solana Balance Checker

- A simple application to fetch solana wallet’s balance and transaction history using solana’s library @solana/web3.js

- A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- Used Typescript
- Styled with Tailwind.

#### Creating API routes

- used Next.js to create the Solana wallet balance checker API by importing the necessary libraries and configuring the network and conversion constants. The handler method handles requests by checking for POST requests and collecting the wallet address from the request body. Retrieved the wallet’s balance in lamports and convert it to SOL using web3.Connection. The formatted balance is then returned in the form of a JSON response. In the event of an error, an error response with the status code 500 is sent.

#### Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

##### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
