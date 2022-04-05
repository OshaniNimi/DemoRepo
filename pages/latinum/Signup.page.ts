import { expect, Locator, Page } from '@playwright/test'

export class SignupPage {

  //Locators
  readonly page: Page
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly passwordConfirmationInput: Locator
  readonly acceptCheckBox: Locator
  readonly signupButton: Locator

  constructor(page: Page) {
    this.page = page
    this.firstNameInput = page.locator("input[name='firstName']")
    this.lastNameInput = page.locator("input[name='lastName']")
    this.emailInput = page.locator("input[name='email']")
    this.passwordInput = page.locator("input[name='password']")
    this.passwordConfirmationInput = page.locator("input[name='passwordConfirmation']")
    this.acceptCheckBox = page.locator('#c1')
    this.signupButton = page.locator("button[type='submit']")
  }

  //Actions
  async enterFirstName(firstName : string){
    await this.firstNameInput.type(firstName);
  }

  async enterLastName(lastName : string){
    await this.lastNameInput.type(lastName);
  }

  async enterEmail(email : string){
    await this.emailInput.type(email); 
  }

  async enterPassword(password : string){
    await this.passwordInput.type(password);
  }

  async enterConfirmPassword(confirmPassword : string){
    await this.passwordConfirmationInput.type(confirmPassword);
  }

  async clickAcceptCheckbox(){
    await this.acceptCheckBox.click();
  }

  async clickOnSignupBtn(){
    await this.signupButton.click();
  }
    
}