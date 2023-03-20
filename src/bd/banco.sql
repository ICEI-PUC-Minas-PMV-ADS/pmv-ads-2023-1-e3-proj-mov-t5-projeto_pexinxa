CREATE TABLE cadastro (
  nome varchar(64) NOT NULL,
  cpf_cnpj varchar(64) NOT NULL,
  email varchar(64) NOT NULL,
  senha varchar(64) NOT NULL,
  uuid varchar(64) NOT NULL,
  CONSTRAINT cadastro_pkey PRIMARY KEY (cpf_cnpj),
  CONSTRAINT cadastro_un UNIQUE (uuid)
);

CREATE TABLE cadastro_auditoria (
  nome varchar(64) NULL,
  cpf_cnpj varchar(64) NOT NULL,
  email varchar(64) NULL,
  senha varchar(64) NULL,
  CONSTRAINT cadastro_auditoria_pkey PRIMARY KEY (cpf_cnpj)
);

CREATE TABLE endereco (
  rua varchar(64) NOT NULL,
  numero varchar(64) NOT NULL,
  bairro varchar(64) NOT NULL,
  cidade varchar(64) NOT NULL,
  estado varchar(64) NOT NULL,
  pais varchar(64) NOT NULL,
  uuid varchar(64) NOT NULL,
  CONSTRAINT endereco_pkey PRIMARY KEY (uuid),
  CONSTRAINT endereco_un UNIQUE (uuid)
);

CREATE TABLE endereco_auditoria (
  rua varchar(64) NULL,
  numero varchar(64) NULL,
  bairro varchar(64) NULL,
  cidade varchar(64) NULL,
  estado varchar(64) NULL,
  pais varchar(64) NULL,
  uuid varchar(64) NOT NULL,
  CONSTRAINT endereco_auditoria_pkey PRIMARY KEY (uuid)
);

CREATE TABLE vendedor (
  id_vendedor bigserial NOT NULL,
	cadastro int8 NOT NULL,
	uuid varchar(64) NOT NULL,
	endereco int8 NOT NULL,
	CONSTRAINT vendedor_pkey PRIMARY KEY (id_vendedor),
  CONSTRAINT vendedor_un UNIQUE (uuid)
);

ALTER TABLE vendedor ADD CONSTRAINT cadastro_vendedor FOREIGN KEY (cadastro) REFERENCES cadastro(uuid);
ALTER TABLE vendedor ADD CONSTRAINT endereco_vendedor FOREIGN KEY (endereco) REFERENCES endereco(uuid);

CREATE TABLE vendedor_auditoria (
  id_vendedor bigserial NOT NULL,
	cadastro int8 NULL,
	endereco int8 NULL,
	CONSTRAINT vendedor_auditoria_pkey PRIMARY KEY (id_vendedor)
);

CREATE TABLE consumidor (
  id_consumidor bigserial NOT NULL,
	cadastro int8 NOT NULL,
	uuid varchar(64) NOT NULL,
	endereco int8 NOT NULL,
	CONSTRAINT consumidor_pkey PRIMARY KEY (id_consumidor),
  CONSTRAINT consumidor_un UNIQUE (uuid)
);

ALTER TABLE consumidor ADD CONSTRAINT cadastro_consumidor FOREIGN KEY (cadastro) REFERENCES cadastro(uuid);
ALTER TABLE consumidor ADD CONSTRAINT endereco_consumidor FOREIGN KEY (endereco) REFERENCES endereco(uuid);

CREATE TABLE consumidor_auditoria (
  id_consumidor bigserial NOT NULL,
	cadastro int8 NULL,
	endereco int8 NULL,
	CONSTRAINT consumidor_auditoria_pkey PRIMARY KEY (id_consumidor)
);

CREATE TABLE produto (
  id_produto bigserial NOT NULL,
  descricao varchar(128) NOT NULL,
  preco numeric NOT NULL,
  quantidade integer NOT NULL,
  data_cadastro DATE NOT NULL,
	vendedor int8 NOT NULL,
	uuid varchar(64) NOT NULL,
	CONSTRAINT produto_pkey PRIMARY KEY (id_produto),
  CONSTRAINT produto_un UNIQUE (uuid)
);

ALTER TABLE produto ADD CONSTRAINT vendedor_produto FOREIGN KEY (vendedor) REFERENCES vendedor(uuid);

CREATE TABLE produto_auditoria (
  id_produto bigserial NOT NULL,
  descricao varchar(128) NULL,
  preco numeric NULL,
  quantidade integer NULL,
  data_cadastro DATE NULL,
	vendedor int8 NULL,
	CONSTRAINT produto_auditoria_pkey PRIMARY KEY (id_produto),
);

CREATE TABLE carrinho (
  id bigserial NOT NULL,
  produto int8 NOT NULL,
  quantidade_produtos integer NOT NULL,
  data_criacao DATE NOT NULL,
	vendedor int8 NOT NULL,
	CONSTRAINT carrinho_pkey PRIMARY KEY (id),
  CONSTRAINT carrinho_un UNIQUE (id)
);

ALTER TABLE carrinho ADD CONSTRAINT vendedor_carrinho FOREIGN KEY (vendedor) REFERENCES vendedor(uuid);
ALTER TABLE carrinho ADD CONSTRAINT produto_carrinho FOREIGN KEY (produto) REFERENCES produto(uuid);

CREATE TABLE carrinho_auditoria (
  id bigserial NOT NULL,
  produto int8 NULL,
  quantidade_produtos integer NULL,
  data_criacao DATE NULL,
	vendedor int8 NULL,
	CONSTRAINT carrinho_auditoria_pkey PRIMARY KEY (id)
);
