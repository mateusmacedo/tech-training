# Objetivos

Sistema de Autenticação e Autorização com OAuth2 Usando Strategy e Mediator Patterns

## 1. **Visão do Projeto**

O objetivo deste projeto é desenvolver um **sistema de autenticação e autorização** robusto, extensível e modular, utilizando o **protocolo OAuth2** para autenticação e os padrões de design **Strategy** e **Mediator** para autorização. Este sistema será usado como base para um treinamento técnico com o intuito de amadurecer as habilidades do time de desenvolvimento, aprimorando a capacidade de projetar e implementar soluções escaláveis e flexíveis em ambientes corporativos.

## 2. **Objetivos do Treinamento**

Este treinamento visa:

- **Amadurecer o time de desenvolvimento** em padrões avançados de design e arquitetura de software, como **Strategy**, **Mediator** e **SOLID principles**.
- Ensinar a integração com provedores de autenticação utilizando **OAuth2** e a criação de um **sistema de autorização customizável** baseado nos modelos **RBAC (Role-Based Access Control)**, **ReBAC (Relationship-Based Access Control)** e **ABAC (Attribute-Based Access Control)**.
- Proporcionar práticas de **Test-Driven Development (TDD)** com ênfase em garantir **100% de cobertura de linhas e ramos**, assegurando que o sistema seja confiável e sustentável a longo prazo.
- Desenvolver uma mentalidade de **desenvolvimento orientado à modularidade e extensibilidade**, permitindo fácil adaptação às necessidades de crescimento e mudança do negócio.

## 3. **Contexto e Justificativa**

Com o crescimento da plataforma e a complexidade das soluções a serem entregues, é essencial que o time de desenvolvimento esteja preparado para projetar sistemas que sejam:

- **Escaláveis**: Capazes de lidar com um número crescente de usuários e demandas sem comprometer o desempenho.
- **Extensíveis**: Onde novos provedores de autenticação ou modelos de autorização possam ser integrados sem grandes alterações no código existente.
- **Sustentáveis**: Seguindo padrões de desenvolvimento como **TDD**, garantindo que novas funcionalidades possam ser introduzidas sem comprometer a integridade do sistema.

O foco será a integração com provedores de identidade como **AWS Cognito** e **Keycloak**, fornecendo um entendimento profundo de como integrar sistemas empresariais modernos com soluções seguras de autenticação e autorização.

## 4. **Componentes e Arquitetura do Sistema**

### 4.1 **Autenticação com OAuth2** (Strategy Pattern)

O sistema de autenticação será construído utilizando o **Strategy Pattern**, permitindo fácil troca entre diferentes provedores OAuth2 como **AWS Cognito** e **Keycloak**. O **AuthenticationManager** gerenciará as estratégias e permitirá a escolha do provedor de identidade em tempo de execução.

**Exemplo de componentes**:

- **IAuthStrategy**: Interface que define o contrato para diferentes provedores OAuth2.
- **CognitoAuthStrategy**: Implementação da estratégia de autenticação usando **AWS Cognito**.
- **KeycloakAuthStrategy**: Implementação da estratégia de autenticação usando **Keycloak**.

### 4.2 **Autorização Multi-Modelo** (Mediator Pattern)

A autorização será gerida por um **AuthorizationMediator**, que coordenará três modelos de autorização diferentes:

- **RBAC** (Role-Based Access Control): Controle baseado em papéis.
- **ReBAC** (Relationship-Based Access Control): Controle baseado em relacionamentos.
- **ABAC** (Attribute-Based Access Control): Controle baseado em atributos do usuário.

O **AuthorizationMediator** permitirá a combinação de diferentes modelos de autorização para garantir flexibilidade na definição das regras de acesso.

**Exemplo de componentes**:

- **IAuthorizationHandler**: Interface para definir diferentes modelos de autorização.
- **RBACHandler**: Handler responsável pelo modelo de controle baseado em papéis.
- **ReBACHandler**: Handler responsável pelo modelo de controle baseado em relacionamentos.
- **ABACHandler**: Handler responsável pelo controle baseado em atributos.

### 4.3 **Gerenciamento de Tokens JWT**

O sistema também incluirá um **TokenService** para manipulação de **JWT (JSON Web Tokens)**, responsável por gerar, verificar e decodificar tokens usados na autenticação e autorização.

**Exemplo de componentes**:

- **TokenService**: Serviço responsável por validar e gerar tokens JWT.

## 5. **Práticas de Desenvolvimento**

- **Princípios SOLID**: O projeto será modular, seguindo os princípios de responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interfaces e inversão de dependência.
- **Test-Driven Development (TDD)**: Todo o código será escrito com cobertura de testes garantida em 100%, cobrindo **linhas e ramos**.
- **Desenvolvimento Orientado a Interface**: Para garantir a flexibilidade e extensibilidade do sistema.

## 6. **Fluxo do Treinamento**

### Fase 1: Introdução à Arquitetura do Sistema

- Apresentação dos conceitos de **OAuth2** e da arquitetura baseada em **Strategy** para autenticação.
- Apresentação dos conceitos de autorização e dos modelos **RBAC**, **ReBAC**, e **ABAC**, e como o **Mediator Pattern** será aplicado.

### Fase 2: Prática com OAuth2 e JWT

- Implementação da autenticação usando **AWS Cognito** e **Keycloak**.
- Criação de testes unitários e de integração para garantir cobertura total das funcionalidades de autenticação.

### Fase 3: Desenvolvimento de Autorização Avançada

- Implementação dos handlers de **RBAC**, **ReBAC** e **ABAC**.
- Aplicação do **Mediator Pattern** para coordenar diferentes modelos de autorização.

### Fase 4: Garantia de Qualidade e Extensibilidade

- Utilização de **TDD** para garantir a qualidade do código.
- Refatoração e implementação de novos casos de uso para demonstrar a extensibilidade do sistema.

### Fase 5: Desafios e Projetos Individuais

- O time será desafiado a adicionar novos provedores de autenticação, novos modelos de autorização ou a implementar integrações com sistemas externos, aplicando os princípios e práticas aprendidos.

## 7. **Ferramentas Utilizadas**

- **Node.js/TypeScript**: Linguagem e ambiente de desenvolvimento principal.
- **Jest**: Framework de testes para garantir cobertura de código.
- **AWS Cognito e Keycloak**: Provedores de identidade usados na autenticação via OAuth2.
- **JWT**: Para o gerenciamento de tokens de autenticação.

## 8. **Resultados Esperados**

- Ter uma compreensão clara dos padrões de design **Strategy** e **Mediator**, e como aplicá-los para resolver problemas complexos de autenticação e autorização.
- Ser capaz de integrar sistemas corporativos com provedores de identidade utilizando **OAuth2** e **JWT**.
- Desenvolver soluções escaláveis e sustentáveis, aplicando princípios de **TDD** e **SOLID**.
- Conseguir colaborar de forma mais eficiente em projetos complexos, seguindo as melhores práticas de modularidade e extensibilidade.

## 9. **Métricas de Sucesso**

- **Cobertura de Código**: 100% de cobertura de testes em todas as linhas e ramos.
- **Qualidade do Código**: Verificação da adesão aos princípios SOLID e boas práticas de arquitetura.
- **Engajamento do Time**: Participação ativa e soluções criativas propostas pelo time durante os desafios e exercícios.
- **Capacidade de Extensão**: Implementação bem-sucedida de novos provedores ou novos modelos de autorização durante o treinamento.
