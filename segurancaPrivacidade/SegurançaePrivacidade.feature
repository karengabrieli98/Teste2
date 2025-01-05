Feature: Segurança de Privacidade
	Como pessoa usuária ou profissional
	Quero acessar a página de segurança e privacidade da Lacrei Saúde
	Para entender como funciona a proteção de dados do site
	
Contexto:
	Dado que a pessoa usuária ou profissional está na página "segurança e privacidade"

Cenário: Acesso à página “Entrar” do Lacrei Saúde
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando quiser fazer o login
  Então irá clicar em “Entrar”
  E irá clicar em "Paciente" ou "Profissional"

Cenário: Acesso à página “Quem Somos” do Lacrei Saúde
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando quiser saber mais informações sobre a Lacrei Saúde
  Então irá clicar em “Conhecer”
  E será direcionada para a página “Quem Somos”

Cenário: Acesso à página “Ajuda”
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando precisar de ajuda com a página
  E clicar no botão “Ajuda”
  Então será direcionada para a página de “Ajuda” da Lacrei Saúde

Cenário: Acesso à página “Buscar Profissional”
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando buscar por um profissional de saúde
  Então irá clicar no botão de “Buscar Atendimento”
  E será direcionada para a página de cadastro

Cenário: Acesso à página “Oferecer Atendimento”
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando quiser se cadastrar para oferecer atendimento
  Então irá clicar no botão de “Oferecer Atendimento”
  E será direcionada para a página de cadastro

Cenário: Acesso à página "Segurança e Privacidade"
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando quiser saber sobre a segurança e privacidade da Lacrei Saúde
  E descer a página até a área de “Entenda”
  Então irá clicar no botão “Entenda”

Cenário: Acesso à página “Acessibilidade”
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando quiser saber sobre a acessibilidade da Lacrei Saúde
  E descer a página até a área de “Conheça”
  E clicar no botão “Conheça”
  Então será direcionada para a página de acessibilidade da Lacrei Saúde

Cenário: Acesso à página “Dúvidas Frequentes”
  Dado que a pessoa usuária ou profissional esteja na página de Início
  Quando estiver com dúvidas sobre a Lacrei Saúde
  E descer a página até a área de “Acesse”
  E clicar no botão “Acesse”
  Então será direcionada para a página de “Dúvidas Frequentes” da Lacrei Saúde