/// <reference types="Cypress"/>

describe('Teste funcional do epico Segurança e Privacidade', () => {
    it('Acessar Termos de Uso ', () => {
        cy.visit("https://staging.lacreisaude.com.br/seguranca-e-privacidade/")
        cy.get(':nth-child(1) > .sc-8cb75853-2 > .sc-8cb75853-3').click()
    });

    it('Acessar Política de Privacidade ', () => {
        cy.visit("https://staging.lacreisaude.com.br/seguranca-e-privacidade/")
        cy.get(':nth-child(2) > .sc-8cb75853-2 > .sc-8cb75853-3').click()
    });

    it('Redirecionamento para "Direitos do Titular" ', () => {
        cy.visit("https://staging.lacreisaude.com.br/seguranca-e-privacidade/")
        cy.get(':nth-child(3) > .sc-8cb75853-2 > .sc-8cb75853-3').click()
    });

    it('Solicitar direitos da pessoa titular ', () => {
        cy.visit("https://staging.lacreisaude.com.br/direitos-de-titular/")
        cy.get('#name').type("Teste")
        cy.get('#email').type("lasac43155@iminko.com")
        cy.get('#profile').select("Paciente")
        cy.get(':nth-child(6) > .sc-c9ac1c65-1 > .sc-c9ac1c65-2 > .sc-c9ac1c65-3 > .sc-c9ac1c65-4').click()
        cy.get('.sc-6471a344-10 > .sc-b54de683-0').click()
    });

    it('Informar o direito que gostaria de solicitar', () => {
        cy.visit("https://staging.lacreisaude.com.br/direitos-de-titular/")
        cy.get('#name').type("Teste")
        cy.get('#email').type("lasac43155@iminko.com")
        cy.get('#profile').select("Paciente")
        cy.get(':nth-child(14) > .sc-c9ac1c65-1 > .sc-c9ac1c65-2 > .sc-c9ac1c65-3 > .sc-c9ac1c65-4').click()
        cy.get('#right').type("Teste01")
        cy.get('.sc-6471a344-10 > .sc-b54de683-0').click()
    });
});

    