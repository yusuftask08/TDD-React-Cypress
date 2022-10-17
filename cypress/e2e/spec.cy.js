describe('user form', () => {

  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit('http://localhost:3000/')
  });

  it('user can save form', () => {
    cy.get('input[name="firstname"]').type('Yusuf');
    cy.get('input[name="lastname"]').type('Taskiran');
    cy.get('input[name="email"]').type('Yusuftaskiran1@gmail.com');
    cy.get('input[name="bio"]').type('Frontend Developer');
    cy.get('button[name="save"]').click();
  })
});