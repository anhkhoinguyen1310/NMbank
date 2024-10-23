<div align="center">
  <h3 align="center">NMbank: Manage Your Bank Account Better</h3>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀  [Production](#production)

## <a name="introduction"> 🤖 Introduction</a> 

NMbank is a financial SaaS platform that lets you manage your bank accounts effortlessly. Connect multiple bank accounts, view real-time transactions, transfer funds, and manage finances all in one place. Sign-up and easily sign-in with your bank account in Plaid using the credentials:

- **Username**: `user_good`
- **Password**: `password_good`


## <a name="tech-stack"> ⚙️ Tech Stack</a>  

- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## <a name="features">🔋 Features</a>  

- **Authentication**: Secure SSR authentication with validations.
- **Connect Banks**: Link multiple bank accounts with Plaid.
- **Home Page**: Overview of account balance, transactions, and spending categories.
- **My Banks**: View all connected banks and their details.
- **Transaction History**: Paginated transaction history with filtering.
- **Real-Time Updates**: Changes reflect across all relevant pages.
- **Funds Transfer**: Transfer money using Dwolla.
- **Responsiveness**: Adapts to different screen sizes.

... and many more, including code architecture and reusability.

## <a name="features">🤸 Quick Start</a>  

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/banking.git](https://github.com/anhkhoinguyen1310/NMbank.git
cd banking
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/), and [Dwolla](https://dwolla.com/).

### Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="production">🚀 Production</a>  

[Live Production](https://nmbank.netlify.app/sign-in)

