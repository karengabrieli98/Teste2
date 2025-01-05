/// <reference types="Cypress"/>


describe('Teste funcional do inicio', () => {
    it('Acesso a pagina "entrar"', () => {
        cy.visit ("https://staging.lacreisaude.com.br/")
        cy.get('.sc-84791bf0-5 > .cLoReE').click()
    });
});
    
it('Acesso a pagina "Quem somos"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-84791bf0-5 > :nth-child(1)').click()
});

it('Acesso a pagina "Ajuda"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-84791bf0-5 > :nth-child(2)').click()
});

it('Acesso a pagina "Buscar profissional "', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-45758d02-4 > .sc-b54de683-0').click()
});

it('Acesso a pagina "oferecer atendimento"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-45758d02-6 > .sc-b54de683-0').click()
});
it('Acesso a pagina "Seguranca e privacidade"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-8bdb78cc-2 > :nth-child(1) > .sc-b54de683-0').click()
});
it('Acesso a pagina "Acessibilidade"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-8bdb78cc-2 > :nth-child(2) > .sc-b54de683-0').click()
});
it('Acesso a pagina "Duvidas frequentes"', () => {
    cy.visit ("https://staging.lacreisaude.com.br/")
    cy.get('.sc-8bdb78cc-2 > :nth-child(3) > .sc-b54de683-0').click()
});