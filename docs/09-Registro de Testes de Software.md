# Registro de Testes de Software

<span style="color:red"> Plano de Testes de Software</a></span>

Neste etapa foram realizados os testes referentes ao cadastro de usuários,Valor de horas e Atividades o gerenciamento da conta e o login. 

|Caso de teste    | Requisito Associado  | Resultado |
|------------|--------------------------------------------------------------------------------------------------------------------|----|
|CT-01 – Cadastrar usuário| RF-07 - A aplicação deve possuir uma área para cadastrar novos usuários e vendedores. | Não foi possível testar pois funcionalidade ainda não foi implementada.  | 
|CT-02 – Efetuar login| RF-05 - A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas . <br> RF-06 - A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas. | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-03 – Realizar busca| RF-01 - A aplicação deve apresentar a funcionalidade de buscador (search).<br> RF-04 A aplicação deve possuir um filtro para refinar a busca do usuário.  | [Clique aqui para ver o resultado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-projeto_pexinxa/blob/main/docs/img/Arquivos/Teste_Busca.gif)  |
|CT-04 – Avaliar Estabelecimentos| RF-03 - A aplicação deve apresentar mecanismos para avaliação dos estabelecimentos através de comentário e notas .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-05 – Anunciar Produtos| RF-09 - A aplicação deve possuir um mecanismo de inclusão dos produtos disponívies dos vendedores.  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-06 – Editar Anúncios| RF-14 - A aplicação deve permitir a edição dos dados do anúncio .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-07 – Perguntas e Respostas| RF-10 - A aplicação deve possuir um local de perguntas e resposta na descrição do produto.  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-08 – Pós venda| RF-11 - A aplicação deve possuir um canal de comunicação entre compradores e vendedores para pós venda .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-09 – Suporte| RF-12 - A aplicação deve possuir um canal de comunicação direto com os administradores dentro da área de login de usuários.  | [Clique aqui para ver o resultado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-projeto_pexinxa/blob/main/docs/img/Arquivos/Suporte.gif).  |
|CT-10 – Sacola de compra| RF-15 - A aplicação deve possuir um sacola de compra.  |[Clique aqui para ver o resultado](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-projeto_pexinxa/blob/main/docs/img/Arquivos/Sacola.gif)  |
|CT-11 – Status do pedido| RF-13 - A aplicação deve mostrar uma tela onde o cliente conseguirá visualizar o status do pedido  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |


## Teste realizados para a etapa 4

Neste etapa foram realizados os testes referentes ao cadastro de usuários,Valor de horas e Atividades o gerenciamento da conta e o login. 

|Caso de teste    | Requisito Associado  | Resultado |
|------------|--------------------------------------------------------------------------------------------------------------------|----|
|CT-01 – Cadastrar usuário| RF-07 - A aplicação deve possuir uma área para cadastrar novos usuários e vendedores. | O cadastro foi realizado, mas não foi devolvido nenhum aviso que o cadastro foi realizado.  | 
|CT-02 – Efetuar login| RF-05 - A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas . <br> RF-06 - A aplicação deve possuir uma área de login para as vendedores fazer a gestão de suas vendas. | O loginfoi feito, mas não aparece o nome do usuário ou os dados na área de perfil. Somente aparece a opção de "Logout" no menu. |
|CT-03 – Realizar busca| RF-01 - A aplicação deve apresentar a funcionalidade de buscador (search).<br> RF-04 A aplicação deve possuir um filtro para refinar a busca do usuário.  | A busca pela lupa não funcionou, mas a busca pelos tópicos que estão na primeira página funcionou sem problemas  |
|CT-04 – Avaliar Estabelecimentos| RF-03 - A aplicação deve apresentar mecanismos para avaliação dos estabelecimentos através de comentário e notas .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-05 – Anunciar Produtos| RF-09 - A aplicação deve possuir um mecanismo de inclusão dos produtos disponívies dos vendedores.  | A tela de cadastro abre mas não há retorno se o produto foi ou não cadastrado. Na busca, o produto que foi cadastrado não estava no banco de dados.  |
|CT-06 – Editar Anúncios| RF-14 - A aplicação deve permitir a edição dos dados do anúncio .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-07 – Perguntas e Respostas| RF-10 - A aplicação deve possuir um local de perguntas e resposta na descrição do produto.  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-08 – Pós venda| RF-11 - A aplicação deve possuir um canal de comunicação entre compradores e vendedores para pós venda .  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |
|CT-09 – Suporte| RF-12 - A aplicação deve possuir um canal de comunicação direto com os administradores dentro da área de login de usuários.  | A página de fale conosco abre a tem os campos para escrever uma dúvida, sugestões ou elogios, mas ao clicar em enviar, nada acontece.  |
|CT-10 – Sacola de compra| RF-15 - A aplicação deve possuir um sacola de compra.  | Em um produto, quando clicamos em "Adicionar a sacola", não há nenhum aviso se o produto foi ou não para a sacola. Quando pressionamos o icone da sacola, o produto está dentro dela. Foi testado a retidada do item da sacola mas o mesmo não foi excluido.  |
|CT-11 – Status do pedido| RF-13 - A aplicação deve mostrar uma tela onde o cliente conseguirá visualizar o status do pedido  | Não foi possível testar pois funcionalidade ainda não foi implementada.  |

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
