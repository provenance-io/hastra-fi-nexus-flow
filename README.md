# Hastra

Hastra is part of the **Hastra Finance** platform — a forward-looking initiative leveraging blockchain technology to reimagine the flow of assets and capital in financial markets. Hastra enables a new generation of digital finance through programmable, composable, and transparent infrastructure built on the Provenance Blockchain.

## 🌐 About Hastra

**Hastra Finance** is an ecosystem of DeFi and TradFi financial tools designed to simplify and accelerate how value moves in today's digital economy. Built with trust, compliance, and innovation at its core, Hastra helps developers and institutions alike launch, manage, and automate financial workflows using blockchain-native primitives.

### Core Goals

- **Reduce friction** in traditional finance using decentralized infrastructure
- **Accelerate asset mobility** across tokenized and real-world financial products
- **Enable programmability** in money movement, governance, and capital deployment

## 🔧 Technology Stack

Hastra is built using:

- **TypeScript** and **React**
- **Tailwind CSS** for UI styling
- **Vite** for front-end tooling
- **Provenance Blockchain** for on-chain integration
- **Cosmos SDK / CosmJS** to interact with governance, tokens, and smart contracts
- **WalletConnect** and **Keplr** for user wallet interaction

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=18)
- pnpm (preferred) or npm
- Git

### Clone the Repository

```bash
git clone https://github.com/provenance-io/hastra-fi-nexus-flow.git
cd hastra-fi-nexus-flow
```

### Install Dependencies

```bash
pnpm install
# or
npm install
```

### Run the App Locally

```bash
pnpm dev
# or
npm run dev
```

The app will start at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🧪 Testing

Testing is done using Playwright e2e tests, complete with an injected javascript wallet that allows for signing events, which is pretty cool.

To run the test suite, simply run the npm shortcut:

```bash
npm run e2e
```

You can also run the tests in UI mode to watch completion:

```bash
npm run e2e-ui
```

If you are creating new test cases, we highly recommend installing the VS Code playwright extension ms-playwright.playwright

This allows users to run tests using the VS Code extension, and build test cases quickly using the playwright "Record at cursor" feature, which will insert test language at the cursor through chromium interactions. You can read more about the test generator and set up your VS Code playwright extension [here](https://playwright.dev/docs/codegen)

## 📄 License

[Apache 2.0](https://github.com/provenance-io/hastra-fi-nexus-flow/blob/main/LICENSE)

---

## 🙌 Contributing

We welcome issues, feedback, and pull requests! Please open an issue to discuss your feature request or bug fix before submitting a PR.

---

## 🌍 Learn More

Visit [https://test.hastra.io/about](https://test.hastra.io/about) to explore Hastra Finance and its vision to reshape capital markets using blockchain.
