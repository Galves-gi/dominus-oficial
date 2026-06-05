# Dominus Cafés

![Banner Desktop](public/capa-readme.jpg)

---

## Badges

![Angular Badge](https://img.shields.io/badge/Angular-20.3.0-dd0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.2+-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Node Badge](https://img.shields.io/badge/Node.js-20.x+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![License Badge](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## Resumo do Projeto

Projeto desenvolvido em Angular 20 com SSR, focado em performance, SEO e responsividade. A plataforma apresenta cafés especiais através de uma experiência visual moderna, arquitetura escalável e carregamento otimizado.

---

## 📑 Índice

* [Introdução](#-introdução)
* [Demonstração / Exibição](#-demonstração--exibição)
* [Design](#-design)
* [Arquitetura do Sistema](#-arquitetura-do-sistema)
* [Decisões de Desenvolvimento](#-decisões-de-desenvolvimento)
* [Funcionalidades](#-funcionalidades)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Código Fonte](#-estrutura-do-código-fonte)
* [Requisitos](#-requisitos)
* [Guia de Instalação](#-guia-de-instalação)
* [Referências](#-referências)

---

## Introdução

Dominus Cafés é uma plataforma digital desenvolvida para apresentar cafés especiais de forma sofisticada, moderna e informativa. O projeto funciona como um catálogo premium, destacando a identidade da marca através de uma experiência visual refinada, navegação intuitiva e foco total na valorização de cada produto.

A plataforma surgiu da necessidade de fortalecer a presença digital da Dominus Cafés, unindo design contemporâneo, performance e organização técnica das informações. Cada detalhe foi pensado para transmitir qualidade, exclusividade e credibilidade, proporcionando uma experiência agradável tanto em dispositivos desktop quanto mobile.

Além da apresentação visual, o sistema foi estruturado para oferecer alta performance, carregamento otimizado e excelente indexação em mecanismos de busca, garantindo uma aplicação rápida, responsiva e preparada para crescimento.

---

## Website em Produção

Acesse o site Dominus Cafés através do link abaixo:

🔗 **[dominuscafes.com.br](https://dominuscafes.com.br)**

---

## Design

### Características Visuais Principais

**Paleta de Cores:**
- Tons terrosos (marrom, bege) remetem ao café
- Tons neutros (branco, cinza) para clareza
- Destaques em tons quentes para call-to-action

**Tipografia:**
- Sans-serif moderna para leitura clara
- Hierarquia visual bem definida entre títulos e corpo de texto

**Layout:**
- Interface limpa e sofisticada
- Hierarquia visual bem definida
- Layout totalmente responsivo
- Animações suaves
- Imagens otimizadas em formato AVIF


---

## Arquitetura do Sistema


## Decisões de Desenvolvimento

### 1. Uso de Angular v20 (Standalone)

**Diferenciais:**
- ✅ Componentes standalone reduzem boilerplate e melhoram performance
- ✅ Suporte nativo a SSR desde a versão 20
- ✅ Signals para reatividade mais previsível
- ✅ Comunidade ativa e documentação excelente

**Justificativa:** Angular 20 oferece a melhor integração com SSR e performance para aplicações estáticas com dados estruturados.

---

### 2. Server-Side Rendering (SSR)

**Diferenciais:**
- ✅ Renderização no servidor melhora SEO drasticamente
- ✅ Primeira renderização instantânea (First Contentful Paint melhorado)
- ✅ Compatibilidade garantida com scrapers de buscadores
- ✅ Ideal para conteúdo estático como catálogos de produtos

**Justificativa:** SSR garante que os motores de busca indexem corretamente todas as páginas e produtos.


### 3. Imagens em Formato AVIF

**Diferenciais:**
- Compressão superior ao JPEG
- Melhor LCP e carregamento
- Menor consumo de banda
- Alta qualidade visual

**Justificativa:** Melhorar performance sem perder qualidade nas imagens dos produtos.

---

## Funcionalidades

### 1. Catálogo de Produtos

**O que faz:**
Exibe uma seleção curada de cafés especiais com detalhes técnicos, imagens em alta qualidade e preços.

**Como faz:**
- Dados estruturados em `data.ts` com modelos TypeScript
- Componente `CardProductHome` itera sobre array de produtos
- Cada card exibe: imagem, título, pontuação, tipo, especificação (peso/preço) e descrição
- Template responsivo que se adapta para mobile e desktop

---

### 2. Navegação Multi-página com Roteamento

**O que faz:**
Permite navegação entre Home, Sobre e página 404, sem recarga completa da página.

**Como faz:**
- `app.routes.ts` define rotas com componentes principais
- `app.routes.server.ts` configura rotas para SSR
- Componentes carregados dinamicamente conforme rota ativada
- Transições suaves entre páginas

**Rotas Disponíveis:**
```
GET /              → Home (catálogo)
GET /sobre         → Sobre (história da empresa)
GET /{qualquer}    → 404 (página não encontrada)
```

---

### 3. Otimização SEO Dinâmica

**O que faz:**
Define meta tags, Open Graph e JSON-LD dinamicamente em cada página, melhorando indexação em buscadores.

**Como faz:**
- `Meta` e `Title` services do Angular atualizam tags no servidor
- `ngOnInit()` em cada página define tags específicas
- JSON-LD estruturado para Rich Snippets
```

**Benefícios:**
- ✅ Better Rich Snippets no Google (imagens em carrossel)
- ✅ Compatibilidade com redes sociais (preview em links)
- ✅ Maior CTR (Click-Through Rate) nos resultados de busca
```
---


### 4. Animações ao Scroll

**O que faz:**
Elementos fade-in e slide-up conforme usuário faz scroll da página, melhorando visual.
```
**Como faz:**
- Directive `AnimateCardOnScroll` observa elementos com `IntersectionObserver`
- Quando elemento entra na viewport, aplica classe CSS com animação
- Animations compiladas no CSS com `@keyframes`
```
---

### 5. Ícone WhatsApp Flutuante

**O que faz:**
Exibe botão flutuante no canto inferior direito linkando para chat do WhatsApp.

**Como faz:**
- Componente `IconeWhatsapp` com link pré-formatado
- Helper `whatsapp.helper.ts` cria URL com número e mensagem
- Posicionamento fixo no viewport (vísivel sempre)
- Mobile-friendly com tamanho adequado


---

### 6. Design Responsivo (Mobile-First)

**O que faz:**
Interface se adapta perfeitamente para celular, tablet e desktop mantendo usabilidade em qualquer tamanho de tela.

**Como faz:**
- CSS Media Queries
- Images com srcset para carregar versão apropriada
- Flexbox e Grid para layouts fluidos
- Touch-friendly buttons e espaçamento

---

### 7. Geração de Sitemap e Robots.txt

**O que faz:**
Configura arquivos para motores de busca encontrarem todas as páginas e entenderem política de rastreamento.

**Como faz:**
- `public/sitemap.xml` lista todas URLs indexáveis
- `public/robots.txt` permite crawling e direciona para sitemap

---
### 8. Geração Dinâmica de Link para WhatsApp

**O que faz:**

Gera automaticamente um link personalizado para o WhatsApp contendo as informações do produto selecionado, permitindo que o cliente entre em contato com a empresa com uma mensagem pré-preenchida e contextualizada.

**Como faz:**

- Utiliza um helper centralizado (`/core/helpers/whatsapp.helper`) para encapsular toda a lógica de geração do link.
- O componente cria um `computed()` que recalcula automaticamente a URL sempre que os dados do produto são alterados.
- Extrai dinamicamente informações como nome, tipo, destaque, peso e valor do produto.
- Monta uma mensagem padronizada utilizando template strings.
- Aplica `encodeURIComponent()` para garantir compatibilidade com caracteres especiais, acentos e quebras de linha.
- Gera a URL final utilizando a API oficial do WhatsApp (`wa.me`).
- Mantém a lógica desacoplada da interface, facilitando reutilização e manutenção do código.

**Implementação:**

```ts
link = computed(() => generateWhatsAppLink(this.product()));
```

**Benefícios:**

- ✅ Mensagens consistentes para todos os produtos
- ✅ Melhor experiência do usuário
- ✅ Redução de erros de digitação pelo cliente
- ✅ Lógica reutilizável em qualquer componente
- ✅ Atualização automática através dos Angular Signals
- ✅ Código mais limpo e desacoplado

---

## Tecnologias Utilizadas

| Categoria | Tecnologia | Versão | Propósito no Projeto | Justificativa da Escolha |
|-----------|-----------|--------|----------------------|--------------------------|
| **Frontend** | Angular | 20.3.0 | Framework principal para UI, roteamento e SSR | Melhor suporte a SSR nativo, componentes standalone, performance otimizada |
| **Frontend** | TypeScript | 5.2+ | Linguagem para componentes e lógica | Tipagem estática reduz bugs, melhor experiência de desenvolvimento, suporte IDE |
| **Frontend** | RxJS | 7.8.0 | Programação reativa e observables | Integração nativa com Angular, facilitada manipulação de eventos assíncronos |
| **Frontend** | Angular Router | 20.3.0 | Roteamento entre páginas | Roteamento nativo e otimizado para Angular, suporte a SSR |
| **Servidor** | SSR | 5.1.0 | Servidor Node.js para SSR | Lightweight, rápido, e configurável para servir aplicação Angular SSR |
| **Markup** | HTML5 | 5 | Estrutura semântica das páginas | Suporte a meta tags, semantic tags, e features modernas |
| **Estilos** | CSS3 | 3 | Estilização e responsividade | Flexbox, Grid, media queries, e animações nativas do navegador |

---

##  Estrutura do Código Fonte

### Organização de Diretórios

```
src/
├── app/                              # Código principal da aplicação
│   ├── app.config.ts                 # Configurações globais
│   ├── app.config.server.ts          # Configurações para SSR
│   ├── app.routes.ts                 # Definição de rotas
│   ├── app.routes.server.ts          # Rotas para servidor
│   ├── app.ts                        # Componente raiz
│   ├── app.html                      # Template raiz (RouterOutlet)
│   ├── app.css                       # Estilos globais
│   │
│   ├── core/                         # Funcionalidades principais do app
│   │   ├── helpers/
│   │   │   └── whatsapp.helper.ts    # Utilitários para URLs do WhatsApp
│   │   ├── layout/                   # Componentes de layout reutilizáveis
│   │   │   ├── header/               # Cabeçalho com navegação
│   │   │   ├── footer/               # Rodapé com informações
│   │   │   └── icone-whatsapp/       # Botão flutuante WhatsApp
│   │   ├── models/
│   │   │   └── card-product-home.ts  # Interface de Produto
│   │   └── services/
│   │       └── seo.ts                # Serviço de gerenciamento SEO
│   │
│   ├── pages/                        # Páginas da aplicação
│   │   ├── home/                     # Página inicial com catálogo
│   │   │   ├── home.ts               # Lógica e SEO
│   │   │   ├── home.html             # Template
│   │   │   ├── home.css              # Estilos
│   │   │   ├── data.ts               # Array com produtos
│   │   │   └── home.spec.ts          # Testes
│   │   ├── sobre/                    # Página sobre a empresa
│   │   │   ├── sobre.ts
│   │   │   ├── sobre.html
│   │   │   ├── sobre.css
│   │   │   └── sobre.spec.ts
│   │   └── not-found/                # Página 404
│   │       ├── not-found.ts
│   │       ├── not-found.html
│   │       ├── not-found.css
│   │       └── not-found.spec.ts
│   │
│   └── shared/                       # Componentes compartilhados
│       ├── animate-card-on-scroll.ts # Diretiva de animação
│       └── components/
│           ├── banner/               # Banner com imagens destacadas
│           └── card-product-home/    # Card reutilizável de produto
│
├── main.ts                           # Entry point da aplicação (Client)
├── main.server.ts                    # Entry point para SSR (Server)
├── server.ts                         # Configuração do servidor Express
├── index.html                        # Template HTML base
└── styles.css                        # Estilos globais

public/                               # Assets estáticos
├── robots.txt                        # Configuração para crawlers
├── sitemap.xml                       # Mapa do site para SEO
└── imagens-home/                     # Imagens de produtos (formato AVIF)
    ├── banner-desktop.avif
    ├── banner-mobile.avif
    └── [arquivos de produtos]
```

### Fluxo de Dados

**Home Page:**
```
data.ts (Produtos brutos)
    ↓
home.html (loop *ngFor)
    ↓
card-product-home.component
    ↓
Template renderizado
    ↓
CSS + AnimateCardOnScroll

```

---

## Requisitos

### Ambiente de Desenvolvimento

- **Node.js**: 20.x ou superior
- **npm**: 10.x ou superior (incluído com Node.js)
- **Angular CLI**
- **Git**: Para versionamento de código
- **Navegador moderno**: Chrome 120+, Firefox 120+, Safari 16+, Edge 120+

### Versões Mínimas

| Dependência | Versão Mínima | Versão no Projeto |
|------------|---------------|-------------------|
| Node.js | 18.x | 20.x+ |
| npm | 9.x | 10.x+ |
| Angular | 20.0.0 | 20.3.0 |
| TypeScript | 5.0.0 | 5.2+ |

---

## 📦 Guia de Instalação

### Passo 1: Pré-requisitos

Verifique se você tem Node.js e npm instalados:

```bash
node --version
npm --version
```

Se não estiverem instalados, baixe de: https://nodejs.org/ (versão LTS 20.x recomendada)

---

### Passo 2: Clonar o Repositório

Clone o projeto para sua máquina local

---

### Passo 3: Instalar Dependências

Instale todas as dependências do projeto:

```bash
npm install
```

Isso criará a pasta `node_modules` e instalará:
- Angular e seus módulos
- Express.js
- RxJS
- Ferramentas de build
- Ferramentas de teste

---

### Passo 4: Ambiente de Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em: `http://localhost:4200`

A página recarregará automaticamente ao detectar mudanças nos arquivos.

---

### Passo 5: Build para Produção

Para criar um build otimizado para produção:

```bash
npm run build
```

Os arquivos estáticos serão gerados em:

```
dist/
```

---

### Troubleshooting

**Erro: "Command 'ng' not found"**
```bash
npm install -g @angular/cli@20
```

**Erro: "Port 4200 already in use"**
```bash
npm start -- --port 4300
```

**Erro: Node modules corrompidos**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Erro: Build falha com TypeScript**
```bash
npm run build -- --verbose
```

---

## 🔗 Referências

### Documentação Oficial

- **Angular**: https://angular.io/docs
- **Angular SSR**: https://angular.io/guide/ssr
- **TypeScript**: https://www.typescriptlang.org/docs/


### Performance e SEO

- **Core Web Vitals**: https://web.dev/vitals/
- **Schema.org**: https://schema.org/
- **Open Graph**: https://ogp.me/
- **AVIF Format**: https://aomediacodec.org/av1-image-format/

---

Desenvolvido por **Galves-gi**  
Criado em **2026**

