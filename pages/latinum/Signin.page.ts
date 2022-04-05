import { expect, Locator, Page } from '@playwright/test'
import { AbstractPage } from './AbstractPage'

export class SigninPage extends AbstractPage {

  //Locators
  // readonly page: Page
  readonly emailAddressInput: Locator
  readonly passwordInput: Locator
  readonly forgotPasswordLink: Locator
  readonly signinButton: Locator
  readonly signupLink: Locator

  constructor(page: Page) {
    // this.page = page
    super(page)
    this.emailAddressInput = page.locator("input[name='email']")
    this.passwordInput = page.locator("input[name='password']")
    this.forgotPasswordLink = page.locator('text = Forgot Password')
    this.signinButton = page.locator("button[type='submit']")
    this.signupLink = page.locator('text = Create Account')
  }

  //Actions
  async enterEmailAddress(emailAddress : string){
    await this.emailAddressInput.type(emailAddress);
  }

  async enterPassword(password : string){
    await this.passwordInput.type(password);
  }

  async clickOnForgotPasswordLink(){
    await this.forgotPasswordLink.click();
  }

  async clickOnSigninBtn(){
    await this.signinButton.click();
  }

  async clickOnCreateAccountLink(){
    await this.signupLink.click();
  }

  //Validations
  async validateSigninPageTitle(page){
    await expect(page).toHaveTitle('Sign In | Latinum')
  }
    
}