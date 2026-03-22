# Dominus

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.20.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

# Estrutura
bash```
src
 ├── app
 │
 │   ├── core
 │   │    ├── layout
 │   │    │    ├── header
 │   │    │    │    ├── header.component.ts
 │   │    │    │    ├── header.component.html
 │   │    │    │    └── header.component.scss
 │   │    │    │
 │   │    │    ├── footer
 │   │    │    │    ├── footer.component.ts
 │   │    │    │    ├── footer.component.html
 │   │    │    │    └── footer.component.scss
 │   │    │
 │   │    ├── services
 │   │    │    └── seo.service.ts
 │   │
 │   │    └── models
 │   │         └── card-product-home.model.ts
 │
 │   ├── shared
 │   │    ├── components
 │   │    │    └── card
 │   │    │         ├── card.component.ts
 │   │    │         ├── card.component.html
 │   │    │         └── card.component.scss
 │   
 │   ├── pages
 │   │    ├── home
 │   │    │    ├── home.component.ts
 │   │    │    ├── home.component.html
 │   │    │    └── home.component.scss
 │   │
 │   │    ├── sobre
 │   │    │    ├── sobre.component.ts
 │   │    │    ├── sobre.component.html
 │   │    │    └── sobre.component.scss
 │   │
 │   │    ├── not-found
 │   │    │    └── not-found.component.ts
 │   │
 │   │    └── maintenance
 │   │         └── maintenance.component.ts
 │
 │   ├── app.routes.ts
 │   └── app.config.ts

```

---

# SSG 

## Semantic Versioning
bash```
package.json
    "version": "0.0.0"


1.4.2
│ │ │
│ │ └── Correção de bug
│ └──── Nova funcionalidade compatível
└────── Mudança grande / breaking change
```