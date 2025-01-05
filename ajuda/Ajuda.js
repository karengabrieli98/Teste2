/// <reference types="Cypress"/>
import {Dado, Quando, Então, E } from "@badeball/cypress-cucumber-preprocessor";
describe('Ajuda', () => {
    Dado("que o paciente ou profissional queira saber como se cadastrar no site", () => {
        // Acessa a página de perguntas frequentes ou o site inicial
        cy.visit("/faq"); // Substitua "/faq" pelo caminho real, se necessário
      });
      
      Quando('ele clica na primeira opção "Como faço para me cadastrar na Lacrei Saúde"', () => {
        // Clica na pergunta específica
        cy.contains("Como faço para me cadastrar na Lacrei Saúde").click(); // Verifica pelo texto e clica
      });
      
      Então("poderá visualizar a resposta", () => {
        // Verifica se a resposta está visível
        cy.get('[data-testid="faq-answer"]').should("be.visible"); // Substitua pelo seletor correto
      });


      Dado("que o paciente ou profissional queira saber como alterar o cadastro", () => {
        // Acessa a página de perguntas frequentes ou o site inicial
        cy.visit("/faq"); // Substitua "/faq" pela URL correta se necessário
      });
      
      Quando('clicar na opção "Como faço para alterar meu cadastro?"', () => {
        // Localiza e clica na pergunta específica
        cy.contains("Como faço para alterar meu cadastro?").click(); // Ajuste conforme o texto exato
      });
      
      Então("poderá visualizar a resposta", () => {
        // Verifica se a resposta está visível
        cy.get('[data-testid="faq-answer"]').should("be.visible"); // Substitua pelo seletor correto
      });



      Dado("que o paciente ou profissional queira saber como excluir o cadastro", () => {
        // Acessa a página onde está a opção de excluir o cadastro
        cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
      });
      
      Quando('clicar na opção "Como faço para excluir meu cadastro na Lacrei Saúde?"', () => {
        // Localiza e clica na pergunta sobre exclusão de cadastro
        cy.contains("Como faço para excluir meu cadastro na Lacrei Saúde?").click();
      });
      
      Então("poderá visualizar a resposta", () => {
        // Verifica se a resposta está visível
        cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
      });
      

    Dado(
  "que o paciente ou profissional tenha esquecido a senha e queira acessar a conta",
  () => {
    // Acessa a página onde está a opção de recuperação de senha
    cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
  }
);

Quando(
  'clicar na opção "Esqueci minha senha. Como faço para acessar a conta?"',
  () => {
    // Localiza e clica na pergunta sobre recuperação de senha
    cy.contains("Esqueci minha senha. Como faço para acessar a conta?").click();
  }
);

Então("poderá visualizar a resposta", () => {
  // Verifica se a resposta está visível
  cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
});



Dado(
    "que o paciente ou profissional não tenha recebido o email para redefinir a senha",
    () => {
      // Acessa a página onde está a opção relacionada ao email de validação
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'ele clica na quinta opção "Não estou recebendo o email de validação.O que faço?"',
    () => {
      // Localiza e clica na quinta opção
      cy.get('.faq-option').eq(4).click(); // A opção é a quinta, portanto usamos .eq(4) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o link de redefinição de senha ou email tenha expirado",
    () => {
      // Acessa a página onde está a opção relacionada ao link de redefinição de senha
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'ele clica na sexta opção "Link para redefinição de senha ou email expirou.O que devo fazer?"',
    () => {
      // Localiza e clica na sexta opção
      cy.get('.faq-option').eq(5).click(); // A opção é a sexta, então usamos .eq(5) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o paciente ou profissional não tenha recebido o código SMS",
    () => {
      // Acessa a página onde está a opção relacionada ao código SMS
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'ele clica na sétima opção "Não recebo o código SMS. O que faço?"',
    () => {
      // Localiza e clica na sétima opção
      cy.get('.faq-option').eq(6).click(); // A opção é a sétima, então usamos .eq(6) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o usuário queira buscar um profissional de saúde na Lacrei",
    () => {
      // Acessa a página onde está a opção de busca de profissional de saúde
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'usuário vai clicar na oitava opção "Como busco uma pessoa profissional da saúde na Lacrei?"',
    () => {
      // Localiza e clica na oitava opção
      cy.get('.faq-option').eq(7).click(); // A opção é a oitava, então usamos .eq(7) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o paciente ou profissional queira registrar uma reclamação",
    () => {
      // Acessa a página onde está a opção de registrar uma reclamação
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'usuário vai clicar na nona opção "Como faço para registrar uma reclamação?"',
    () => {
      // Localiza e clica na nona opção
      cy.get('.faq-option').eq(8).click(); // A opção é a nona, então usamos .eq(8) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o paciente ou profissional queira registrar uma denúncia",
    () => {
      // Acessa a página onde está a opção de registrar uma denúncia
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'usuário vai clicar na décima opção "Quero fazer uma denúncia. O que devo fazer?"',
    () => {
      // Localiza e clica na décima opção
      cy.get('.faq-option').eq(9).click(); // A opção é a décima, então usamos .eq(9) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });



  Dado(
    "que o paciente ou profissional queira saber porque precisa informar o número de registro",
    () => {
      // Acessa a página onde está a opção de saber sobre o número de registro
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'usuário vai clicar na décima primeira opção "Porque preciso informar meu número de registro profissional?"',
    () => {
      // Localiza e clica na décima primeira opção
      cy.get('.faq-option').eq(10).click(); // A opção é a décima primeira, então usamos .eq(10) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });


  Dado(
    "que o paciente ou profissional queira saber quanto tempo leva para a validação do cadastro",
    () => {
      // Acessa a página onde está a opção de saber o tempo de validação
      cy.visit("/faq"); // Substitua "/faq" pela URL correta, se necessário
    }
  );
  
  Quando(
    'usuário vai clicar na décima segunda opção "Qual o tempo de validação do meu cadastro?"',
    () => {
      // Localiza e clica na décima segunda opção
      cy.get('.faq-option').eq(11).click(); // A opção é a décima segunda, então usamos .eq(11) para selecioná-la
    }
  );
  
  Então("poderá visualizar a resposta", () => {
    // Verifica se a resposta está visível
    cy.get('[data-testid="faq-answer"]').should("be.visible"); // Ajuste o seletor conforme necessário
  });
});