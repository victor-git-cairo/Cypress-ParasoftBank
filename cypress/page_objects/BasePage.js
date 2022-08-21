///<reference types="cypress" />
class BasePage {
  //load a home page
  open() {
    return cy.visit("/", { failOnStatusCode: false });
  }

  //get pageTitle
  pageTitle() {
    return cy.title();
  }

  //get homepage button
  homeButton() {
    return cy.contains("home");
  }

  //get aboutpage button
  aboutButton() {
    return cy.contains("about");
  }

  //get contactpage button
  contactButton() {
    return cy.contains("contact");
  }

  //methods
  navigateTo(location) {
    if (location === "contactPage") {
      this.contactButton().click();
    } else if (location === "aboutPage") {
      this.aboutButton().click();
    } else if (location === "homePage") {
      this.homeButton().click();
    }
  }
}

export default BasePage