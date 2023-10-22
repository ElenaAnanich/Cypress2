describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });
  it("login succesfully", () => {
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    cy.contains("Log out").should("be.visible");
    cy.viewport(550, 750);
  });
  it("Added book", () => {
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("Три товарища");
    cy.get("#favorite").click();
    cy.contains("Submit").click();
    cy.viewport("iphone-6");
  });
  it("Delete book", () => {
    cy.contains("Delete from favorite").click();
  });
  it("Add to favorite", () => {
    cy.contains("Add to favorite").click();
    cy.viewport(414, 846);
  });
});