describe("test de l'api", () => {
  it("should get all tasks (emplty tasks)", () => {
    cy.request("GET", Cypress.env("urlBackend") + "tasks").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.model).to.have.lengthOf(0);
    });
  });
});
//projet react bien structuré
//installer cypress
//installer react-router-dom
