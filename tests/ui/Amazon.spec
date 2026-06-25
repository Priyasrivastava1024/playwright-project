import { test } from "../../fixture";

test.describe('Test 1 - Home Page Verification', () => {

  test.beforeEach(async ({ amazonPage }) => {
    await amazonPage.login();
  });

  test('should display key navigation elements on Amazon home page', async ({ amazonPage }) => {
    await amazonPage.verificationHomePage();
  });

  test('Category Navigation', async ({ amazonPage }) => {
    await amazonPage.verificationHomePage();
    await amazonPage.categoryNavigation();
  });

  test('Search Product', async ({ amazonPage }) => {
    await amazonPage.verificationHomePage();
    await amazonPage.searchProduct();
  });
});
