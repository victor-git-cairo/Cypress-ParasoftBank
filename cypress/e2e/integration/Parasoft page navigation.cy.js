/// <reference types="cypress" />
import BasePage from "../../page_objects/BasePage";
import contactPage from "../../page_objects/ContactPage";

const page = new BasePage();
// const contactPage = new contactPage();

describe("ParaBank Parasoft", () => {
  before(() => {
    page.open();
  })
  
  it("verify access to About page", () => {
    page.navigateTo("aboutPage");
    page.pageTitle().should('contains','About Us');
  })

  it("verify access to Contact page", () => {
    // todo
    page.navigateTo("contactPage");
    page.pageTitle().should('contains','Customer Care');
  })

  it("verify that all the elements are present in contact page", () => {
    // todo
  })

  it("verify that the service page has Reserve in book table", () => {
    // todo todo
  })
})
