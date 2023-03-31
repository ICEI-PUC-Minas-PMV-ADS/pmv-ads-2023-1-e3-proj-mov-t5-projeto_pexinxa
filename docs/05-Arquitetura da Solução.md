# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![image](https://user-images.githubusercontent.com/80654018/229249090-3f6e0b34-a4cd-4706-bb7d-ead96e0df860.png)

## Processos de Negócios

O processo de negócio precisar ser representado para que seja melhor entendido pelos envolvidos em seu desenvolvimento. Na modelagem de processo de negócio a seguir foi utilizada a notação BPMN que contém um conjunto de símbolos, como tarefas, eventos, subprocessos e a maneira como o fluxo de atividades percorre o caminho do processo.

![processodenegocio](https://user-images.githubusercontent.com/80654018/226068977-c27009cb-69f3-4e90-8aed-e4758885dbea.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![image](https://user-images.githubusercontent.com/80654018/226074450-9449f349-f7a4-4331-a6b4-234741d12898.png)



## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

![image](https://user-images.githubusercontent.com/80654018/226076343-b7f6de5a-58be-4259-8201-29820087995f.png)



## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![image](https://user-images.githubusercontent.com/80654018/226460223-3e7d0921-ab4b-4a2c-ba79-673bf38ed337.png)


## Modelo Físico

Os scripts da criação das tabelas do banco se encontram na pasta src\bd

Caminho: https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t5-projeto_pexinxa/blob/main/src/bd/banco.sql

## Tecnologias Utilizadas

As tecnologias utilizadas foram: Lucidchart para criação de fluxogramas e diagramas, Figma para criação de mockup de telas, além do Oracle - SQL Developer, Oracle - Data Modeler, React Native, linguagens: HTML, CSS, JavaScript.

## Hospedagem

A hospedagem do projeto está sendo feita no "GitHub", para o banco de dados utiliza-se o "DBaver".


## Qualidade de Software

A qualidade de software é um conjunto de características que as aplicações devem possuir para que o projeto cumpra todos os seus requisitos e atendam, de uma melhor maneira possível, a necessidades dos usuários.
Essas normas foram adotadas inicialmente pela ISO/IEC 9126, de 1991, e que foram atualizadas para a ISO/IEC 25010, de 2011. Essa última define a qualidade para produtos de software em 8 características e 30 subcaracterísticas, que são:

| Característica | Subcaracterística | Definição|
| -------------- | ----------------- | -------- |
| Adequação Funcional |   | Mede o grau em que o produto disponibiliza funções que satisfazem necessidades estabelecidas e implicadas quando o produto é usado sob condições especificadas |
|    | Integridade Funcional   | O software possibilita executar as funções que são apropriadas, ou seja, as entradas e saídas de dados necessárias para o usuário atingir seus objetivos são possíveis?  |
|    | Correção Funcional   | Também denominada acurácia, essa sub característica avalia o quanto o software gera dados e consultas corretos e precisos de acordo com sua definição |
|    | Pertinência Funcional | Esta sub característica indica qual o grau em que as funções do sistema facilitam a realização de tarefas e objetivos para os quais o sistema foi especificado |
| Eficiência de Desempenho   |   | Trata da otimização do uso de recursos de tempo e espaço   |
|    | Comportamento Temporal | Mede o tempo que o software leva para processar suas funções   |
|    | Utilização De Recursos | Normalmente associada a espaço de armazenamento ou memória, também pode ser associada a outros recursos necessários como, por exemplo, banda de transmissão de rede  |
|    | Capacidade | Avalia o grau em que os limites máximos do produto atendem aos requisitos |
| Compatibilidade  |   | Avalia o grau em que dois ou mais sistemas ou componentes podem trocar informação e/ou realizar suas funções requeridas enquanto compartilham o mesmo ambiente de hardware e software   |
|    | Interoperabilidade | Avalia o grau no qual o software é capaz de interagir com outros sistemas com os quais se espera que ele interaja |
|    | Coexistência  | Avalia o grau no qual o produto pode desempenhar as funções requeridas eficientemente enquanto compartilha ambiente e recursos comuns com outros produtos, sem impacto negativo nos outros produtos  |
| Usabilidade   |   | Avalia o grau no qual o produto tem atributos que permitem que seja entendido, aprendido, usado e que seja atraente ao usuário, quando usado sob condições especificadas |
|    | Adequação ao Reconhecimento | grau em que os usuários reconhecem que o produto é apropriado para suas necessidades |
|    | Apreensibilidade | Tem relação com o grau de facilidade que um usuário tem em entender os conceitos chave do software e assim tornar-se competente no seu uso   |
|    | Operacionalidade | Avalia o grau no qual o produto é fácil de operar e controlar |
|    | Proteção ao Erros | Avalia o grau em que o produto foi projetado para evitar que o usuário cometa erros   |
|    | Estética da Interface | Avalia o grau em que a interface com usuário proporciona uma interação satisfatória |
|    | Acessibilidade | Avalia o grau em que o produto foi projetado para atender pessoas com características e capacidades diferenciadas |
| Confiabilidade   |   | O software, ao longo do tempo, se mantém com um comportamento consistente com o esperado |
|    | Maturidade | Medida da frequência com que um software apresenta defeitos |
|    | Tolerância a Falhas | A forma como o software reage quando em situação anômala   |
|    | Disponibilidade | O quanto o software está operacional e disponível para uso quando se tornar necessário |
|    | Recuperabilidade | Capacidade de recuperar dados e colocar-se novamente em operação após uma situação de desastre |
| Segurança   |   | Avalia o grau em que as funções e dados são protegidos de acesso não autorizado e o grau em que são disponibilizados para acesso autorizado   |
|    | Confidencialidade |  Avalia o grau em que as informações e funções do sistema estejam acessíveis por quem tenha a devida autorização para isso  |
|    | Integridade | Avalia o grau em que os dados e funções do sistema são protegidos contra acesso por pessoas ou sistemas não autorizados |
|    | Não Repúdio | Avalia o grau em que o sistema permite constatar que ações ou acessos foram efetivamente feitos, de forma que não possam ser posteriormente negados |
|    | Responsabilização | Avalia o grau em que as ações realizadas por uma pessoa ou sistema podem ser rastreadas de forma a comprovar que foram efetivamente realizadas por esta pessoa ou sistema  |
| Manutenibilidade   |   | Mede a facilidade de se realizar alterações no software para sua evolução, ou de detectar e corrigir erros   |
|    | Modularidade | Avalia o grau em que o sistema é subdividido em partes lógicas coesas, de forma que mudanças em uma dessas partes tenha impacto mínimo nas outras  |
|    | Reusabilidade | Avalia o grau em que partes do sistema podem potencialmente ser usadas para construir outros sistemas  |
|    | Analisabilidade | Um sistema é analisável quando permite encontrar defeitos (depurar) facilmente quando erros ou falhas ocorrem   |
|    | Modificabilidade |  Tem relação com a facilidade que o sistema oferece para que erros sejam corrigidos quando detectados, sem que as modificações introduzam novos defeitos, ou degradando sua organização interna |
|    | Testabilidade | Mede a facilidade de se realizar testes de regressão  |
| Portabilidade   |   | Avalia o grau em que o software pode ser efetivamente e eficientemente transferido de um ambiente de hardware ou software para outro |
|    | Adaptabilidade   | Avalia o quanto é fácil adaptar o software a outros ambientes sem a necessidade de aplicar ações ou meios além daqueles fornecidos com o próprio software   |
|    | Facilidade de ser Instalado | Avalia a facilidade de se instalar o software   |
|    | Capacidade para Substituir | Avalia o grau em que o sistema pode substituir outro no mesmo ambiente e com os mesmos objetivos   |

Para o nosso trabalho, vamos focar nas seguintes características para a construção da nossa aplicação:

| Característica | Subcaracterística | Definição|
| -------------- | ----------------- | -------- |
| Adequação Funcional |   | Mede o grau em que o produto disponibiliza funções que satisfazem necessidades estabelecidas e implicadas quando o produto é usado sob condições especificadas |
|    | Integridade Funcional   | O software possibilita executar as funções que são apropriadas, ou seja, as entradas e saídas de dados necessárias para o usuário atingir seus objetivos são possíveis?  |
|    | Correção Funcional   | Também denominada acurácia, essa sub característica avalia o quanto o software gera dados e consultas corretos e precisos de acordo com sua definição |
|    | Pertinência Funcional | Esta sub característica indica qual o grau em que as funções do sistema facilitam a realização de tarefas e objetivos para os quais o sistema foi especificado |
| Usabilidade   |   | Avalia o grau no qual o produto tem atributos que permitem que seja entendido, aprendido, usado e que seja atraente ao usuário, quando usado sob condições especificadas |
|    | Adequação ao Reconhecimento | grau em que os usuários reconhecem que o produto é apropriado para suas necessidades |
|    | Apreensibilidade | Tem relação com o grau de facilidade que um usuário tem em entender os conceitos chave do software e assim tornar-se competente no seu uso   |
|    | Operacionalidade | Avalia o grau no qual o produto é fácil de operar e controlar |
|    | Proteção ao Erros | Avalia o grau em que o produto foi projetado para evitar que o usuário cometa erros   |
|    | Estética da Interface | Avalia o grau em que a interface com usuário proporciona uma interação satisfatória |
|    | Acessibilidade | Avalia o grau em que o produto foi projetado para atender pessoas com características e capacidades diferenciadas |
| Portabilidade   |   | Avalia o grau em que o software pode ser efetivamente e eficientemente transferido de um ambiente de hardware ou software para outro |
|    | Facilidade de ser Instalado | Avalia a facilidade de se instalar o software   |
