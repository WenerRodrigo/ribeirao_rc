describe('Header e Menu Mobile', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('deve exibir o header fixo no topo', () => {
    cy.get('header').should('exist').and('be.visible');
  });

  it('deve abrir e fechar o menu mobile', () => {
     cy.viewport('iphone-6');
      cy.get('[data-testid="menu-toggle"]').click();
     cy.get('.fixed.inset-0').should('exist'); 
     cy.get('[data-testid="menu-close"]').click();
     cy.get('.fixed.inset-0').should('not.exist');
   });
});
