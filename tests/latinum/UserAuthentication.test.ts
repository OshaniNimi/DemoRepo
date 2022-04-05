import { test, expect } from '@playwright/test'
import { OnboardingPage } from '../../pages/latinum/Onboarding.page'
import { SigninPage } from '../../pages/latinum/Signin.page'
import Env from '../../utils/environment'
import Data from '../../data'

test.describe.parallel.only('User Authentication', () => {
    let signinPage: SigninPage
    let onboardingPage: OnboardingPage

// Before Hook
test.beforeEach(async ({ page }) => {
    signinPage = new SigninPage(page)
    onboardingPage = new OnboardingPage(page)
    await page.goto(Env.QAEnv)
})

test('User is able to login with valid data', async ({ page }) => {
    await signinPage.validateSigninPageTitle(page)
    await signinPage.enterEmailAddress(Data.Valid_Username)
    await signinPage.enterPassword(Data.Valid_Password)
    await signinPage.clickOnSigninBtn()
    await signinPage.wait(2000)
    await onboardingPage.validateOnboardingPageTitle(page)   
  })

})