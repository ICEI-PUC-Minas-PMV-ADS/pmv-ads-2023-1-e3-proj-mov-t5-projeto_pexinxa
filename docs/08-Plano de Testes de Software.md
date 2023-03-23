# Plano de Testes de Software

## 1 - Introdução

Este documento tem como objetivo apresentar os requisitos que precisam ser testados e os testes que serão realizados para garantir a qualidade do software.

## 2 - Casos de Teste
Esta seção apresenta a descrição detalhada dos casos de teste que serão aplicados ao software para verificar seu funcionamento correto e sua aderência aos requisitos definidos.

 
| **Caso de Teste** 	| **CT-01 – Cadastrar usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-07 - A aplicação deve possuir uma área para cadastrar novos usuários e vendedores. |
| Objetivo do Teste 	| Verificar se o cliente consegue se cadastrar na aplicação. |
| Passos 	| - Acessar o app <br>  - Clicar em "Criar conta" <br> - Clicar em "Registrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-05	- A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas	. <br>RF-06 - A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas. |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar o app <br> - Clicar no botão "Entrar" <br> - Preencher o campo de login  <br> - Preencher o campo da senha <br> - Clicar em "Login" |
|Critério de Êxito | - O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Realizar busca**	|
|Requisito Associado | RF-01	- A aplicação deve apresentar a funcionalidade de buscador (search). <br> RF-04	A aplicação deve possuir um filtro para refinar a busca do usuário |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar buscas no app. |
| Passos 	| - Acessar o app <br> - Selecionar busca de produtos <br> - Digitar o que se procura ou selecionar um filtro|
|Critério de Êxito | - Produtos aparecem de acordo com o que foi digitado. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Avaliar Estabelecimentos**	|
|Requisito Associado | RF-03	- A aplicação deve apresentar mecanismos para avaliação dos estabelecimentos através de comentário e notas	). |
| Objetivo do Teste 	| Verificar se o usuário comprador consegue avaliar estabelecimentos. |
| Passos 	| - Acessar o app <br> - Acessar página do estabelecimento <br> - Selecionar campo de comentário <br> - Inserir comentário |
|Critério de Êxito | - Comentário salvo na página do estabelecimento. |
|  	|  	|
| **Caso de Teste** 	| **CT-05 – Anunciar Produtos**	|
|Requisito Associado | RF-09	- A aplicação deve possuir um mecanismo de inclusão dos produtos disponívies dos vendedores. |
| Objetivo do Teste 	| Verificar se o usuário vendedor consegue incluir produtos. |
| Passos 	| - Acessar o app <br> - Acessar página do usuário <br> - Selecionar inclusão de produto <br> - Inserir informações necessárias <br> - Clicar em salvar |
|Critério de Êxito | - Produto incluído com sucesso pelo perfil do vendedor. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Editar Anúncios**	|
|Requisito Associado | RF-14	- A aplicação deve permitir a edição dos dados do anúncio	. |
| Objetivo do Teste 	| Verificar se o usuário vendedor consegue editar seus anúncios criados. |
| Passos 	| - Acessar o app <br> - Acessar página do usuário <br> - Selecionar anúncio <br> - Alterar informações desejadas <br> - Clicar em salvar |
|Critério de Êxito | - Informações do produto alteradas com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Perguntas e Respostas**	|
|Requisito Associado | RF-10	- A aplicação deve possuir um local de perguntas e resposta na descrição do produto. |
| Objetivo do Teste 	| Verificar se o contato entre usuários por meio de perguntas e respostas está funcionando. |
| Passos 	| - Acessar o app <br> - Acessar algum produto <br> - Selecionar campo de perguntas e respostas <br> - Inserir pergunta ou resposta <br> - Clicar em enviar |
|Critério de Êxito | - Produto possui perguntas e respostas inseridas pelos usuários. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Pós venda**	|
|Requisito Associado | RF-11	- A aplicação deve possuir um canal de comunicação entre compradores e vendedores para pós venda	. |
| Objetivo do Teste 	| Verificar se o contato entre comprador e vendedor após compra é possível. |
| Passos 	| - Acessar o app <br> - Acessar pedido realizado <br> - Entrar em contato pelo meio de comunicação fornecido pelo vendedor <br> |
|Critério de Êxito | - Contato realizado com sucesso entre comprador e vendedor. |
|  	|  	|
| **Caso de Teste** 	| **CT-09 – Suporte**	|
|Requisito Associado | RF-12	- A aplicação deve possuir um canal de comunicação direto com os administradores dentro da área de login de usuários. |
| Objetivo do Teste 	| Verificar se o usuário possui algum meio de comunicação com os administradores do app. |
| Passos 	| - Acessar o app <br> - Acessar área de contato <br> - Entrar em contato |
|Critério de Êxito | - Usuário realiza contato direto com adminstradores. |
|  	|  	|
| **Caso de Teste** 	| **CT-10 – Sacola de compra**	|
|Requisito Associado | RF-15	- A aplicação deve possuir um sacola de compra. |
| Objetivo do Teste 	| Verificar se o comprador consegue adicionar e visualizar produtos em sua sacola de comrpa. |
| Passos 	| - Acessar o app <br> - Acessar produto de desejo <br> - Adicionar produto à sacola <br> - Visualizar sacola com produto <br> - Finalizar compra do produto |
|Critério de Êxito | - Usuário adicona produtos a sua sacola. |
|  	|  	|
| **Caso de Teste** 	| **CT-11 – Status do pedido**	|
|Requisito Associado | RF-13	- A aplicação deve mostrar uma tela onde o cliente conseguirá visualizar o status do pedido |
| Objetivo do Teste 	| Verificar se o usuário consegui visualizar o status do seu pedido realizado. |
| Passos 	| - Acessar o app <br> - Acessar área de pedidos <br> - Selecionar pedido realizado |
|Critério de Êxito | - Usuário consegue visualizar qual o status do seu pedido realizado. |





## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
