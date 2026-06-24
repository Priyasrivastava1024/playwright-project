import { test as baseTest, Page } from "@playwright/test";
import { AmazonPage } from "./pages/VerificationUI";
import { PetApi } from "./pages/PetAPI";

type MyFixtures = {
  page: Page;
  amazonPage: AmazonPage;
  petApi: PetApi;
};

export const test = baseTest.extend<MyFixtures>({

  amazonPage: async ({ page }, use) => {
    const amazonPage = new AmazonPage(page);
    await use(amazonPage);
  },

  petApi: async ({ request }, use) => {
    const petApi = new PetApi(request);
    await use(petApi);
  }

});

export { expect } from "@playwright/test";
