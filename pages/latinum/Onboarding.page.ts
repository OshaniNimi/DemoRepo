import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class OnboardingPage extends AbstractPage {

  //Locators
  // readonly page: Page

  constructor(page: Page) {
    // this.page = page
    super(page)
  }

  //Validations
  async validateOnboardingPageTitle(page){
    await expect(page).toHaveTitle('Personal Info | Latinum')
  }

}