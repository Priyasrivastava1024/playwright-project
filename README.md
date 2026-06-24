# Playwright Automation Project

## Overview
This project contains automated tests built with Playwright and TypeScript, covering:
- **UI Testing** – Amazon.com home page, category navigation, and product search
- **API Testing** – PetStore REST API (CRUD operations)

---

## Framework & Tools
| Tool | Purpose |
|------|---------|
| Playwright | Browser automation & API testing |
| TypeScript | Strongly-typed test authoring |
| dotenv | Environment variable management |
| HTML Reporter | Built-in Playwright test reporting |

---

## Sites / APIs Under Test

### UI – Amazon (https://www.amazon.com)
Tests verify:
1. Key navigation elements are visible on the home page
2. Category navigation works (Computers → Laptop Accessories)
3. Product search returns relevant results for "laptop"

### API – Petstore (https://petstore.swagger.io/v2)
Tests cover full CRUD:
1. **Create** – POST a new pet and verify response
2. **Read** – GET the created pet by ID
3. **Update** – PUT updated name and verify change
4. **Delete** – DELETE pet and confirm 404 on subsequent GET

---

## Project Structure
```
playwright-project/
├── pages/
│   ├── VerificationUI.ts      # Amazon page object model
│   └── PetAPI.ts               # PetStore API helper class
├── tests/
│   ├── ui/
│   │   └── Amazon.spec.ts   # UI tests
│   └── api/
│       └── pet.spec.ts      # API tests
├── utils/
│   └── testData.ts          # Dynamic test data generation
├── verification/            # All screenshots saved here
├── fixture.ts               # Custom Playwright fixtures
├── playwright.config.ts     # Playwright configuration
├── .env                     # Environment variables (not committed)
├── .env.example             # Template for environment variables
└── README.md
```

---

## Setup Instructions

### 1. Prerequisites
- Node.js v18+
- npm v9+

### 2. Install dependencies
```bash
npm install
npx playwright install
```

### 3. Configure environment variables
```bash
cp .env.example .env
```
Edit `.env` if you need to point to a different environment:
```
AMAZON_URL=https://www.amazon.com
PETSTORE_URL=https://petstore.swagger.io/v2
```

### 4. Run all tests
```bash
npx playwright test
```

### 5. Run only UI tests
```bash
npx playwright test tests/ui
```

### 6. Run only API tests
```bash
npx playwright test tests/api
```

### 7. View HTML report
```bash
npx playwright show-report
```

---

## Screenshots
All UI test screenshots are saved consistently under the `verification/` folder:
- `verification/test1-homepage.png`
- `verification/category.png`
- `verification/search.png`

---

## Dynamic Test Data
API tests use `TestData.generatePet()` (in `utils/testData.ts`) to generate a unique pet on every test run using `Date.now()` as the ID. This avoids test data collisions when tests run in parallel or are re-run, and ensures each test is fully independent with no shared state.

---


