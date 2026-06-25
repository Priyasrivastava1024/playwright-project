import { Page, Locator, expect } from '@playwright/test';
import * as path from 'path';

export class AmazonPage {
  readonly page: Page;
  readonly amazonLink: Locator;
  readonly amazonCart: Locator;
  readonly continueBtn: Locator;
  readonly menu: Locator;
  readonly computerOption: Locator;
  readonly subCat: Locator;
  readonly searchBox: Locator;
  readonly searchBtn: Locator;
  readonly result: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.amazonLink = page.getByRole('link', { name: 'Amazon', exact: true });
    this.amazonCart = page.getByRole('link', { name: 'items in cart' });
    this.continueBtn = page.getByRole('button', { name: 'Continue shopping' });
    this.menu = page.getByRole('button', { name: 'Open All Categories Menu' });
    this.computerOption = page.getByRole('button', { name: 'Computers' });
    this.subCat = page.getByRole('link', { name: 'Laptop Accessories', exact: true }).first();
    this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon' });
    this.searchBtn = page.getByRole('button', { name: 'Go' }).first();
    this.result = page.getByText('results for "laptop"');
    this.heading = page.getByRole('heading', { name: 'Click the button below to' });
  }

  async login() {
    const baseUrl = process.env.AMAZON_URL ?? 'https://www.amazon.com';
    await this.page.goto(baseUrl);
    if (await this.heading.isVisible()) {
      await this.continueBtn.click();
    }
  }

  async verificationHomePage() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.amazonLink).toBeVisible();
    await expect(this.amazonCart).toBeVisible();
    await this.page.screenshot({
      path: path.join('verification', 'test1-homepage.png'),
      fullPage: true,
    });
  }

  async categoryNavigation() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.menu.click();
    await this.computerOption.click();
    await this.page.waitForTimeout(200);
    await this.subCat.isVisible();
    await this.subCat.click({ force: true });
    await expect(this.page).toHaveURL(/laptop_accessories/);
    await this.page.screenshot({
      path: path.join('verification', 'category.png'),
      fullPage: true,
    });
  }

  async searchProduct() {
    await this.searchBox.fill('laptop');
    await this.searchBtn.click();
    await expect(this.page).toHaveURL(/laptop/);
    await expect(this.result).toBeVisible();
    await this.page.screenshot({
      path: path.join('verification', 'search.png'),
      fullPage: true,
    });
  }
}
