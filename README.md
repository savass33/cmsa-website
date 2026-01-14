# CMSA Website — Comunidade Mariana Sagrado Amor

## Sobre o Projeto

Este repositório contém o código-fonte do website institucional da **Comunidade Mariana Sagrado Amor (CMSA)**, uma comunidade católica localizada em Fortaleza–CE, de espiritualidade mariana e profundamente enraizada na vivência do amor de Deus, da vida fraterna e do serviço à Igreja.

O website tem como objetivo ser o principal canal digital da comunidade, apresentando sua identidade, história, carisma, espiritualidade, formações, eventos, vida comunitária e meios de contato. Trata-se de um projeto voluntário, sem fins lucrativos, desenvolvido para fortalecer a presença digital da CMSA, facilitar o acolhimento de novos membros e ampliar a evangelização por meio da internet.

## Objetivos do Website

- Apresentar de forma clara e fiel a identidade, missão e carisma da Comunidade Mariana Sagrado Amor  
- Facilitar o acesso a informações institucionais, pastorais e formativas  
- Divulgar eventos, encontros, formações e atividades recorrentes  
- Servir como ponto de acolhimento para interessados, vocacionados e visitantes  
- Fortalecer a comunicação e a presença digital da comunidade  

## Sobre a Comunidade Mariana Sagrado Amor

A Comunidade Mariana Sagrado Amor é uma comunidade católica que tem como centro de sua espiritualidade o amor de Deus revelado em Cristo, vivido à luz de Maria Santíssima. Seu carisma se expressa na entrega, na vivência fraterna, na formação humana e espiritual e no serviço à Igreja, especialmente por meio da evangelização e do testemunho de vida cristã.

A comunidade desenvolve suas atividades por meio de encontros formativos, momentos de oração, vida comunitária, eventos evangelizadores e acompanhamento espiritual, buscando conduzir seus membros a uma vida de intimidade com Deus e compromisso com a missão da Igreja.

## Público-Alvo

- Membros da Comunidade Mariana Sagrado Amor  
- Pessoas interessadas em conhecer a comunidade  
- Jovens e adultos em busca de formação espiritual e discernimento vocacional  
- Fiéis católicos em geral que desejam aprofundar sua vida de fé  

## Principais Seções Previstas no Site

- **Página Inicial:** Apresentação institucional, destaques e chamada para conhecer a comunidade  
- **Quem Somos:** História, missão, espiritualidade e valores  
- **Nosso Carisma:** Um pouco sobre o carisma que nos move  
- **Atividades:** Falar sobre ministérios, grupos de oração e tudo que a CMSA tem a oferecer  
- **Eventos e Agenda:** Divulgação de eventos recorrentes e especiais  
- **Contato:** Informações de localização, redes sociais e canais de comunicação  
- **Doação:** Uma aba para a doações e informações sobre a benfeitoria  

## Identidade Visual e Comunicação

O website segue uma estética sóbria, acolhedora e contemporânea, alinhada à identidade católica e mariana da CMSA. A comunicação é clara, respeitosa e pastoral, equilibrando formalidade institucional com proximidade humana.

A identidade visual prioriza:
- Uso de símbolos cristãos e marianos de forma discreta e significativa  
- Paleta de cores que remete à espiritualidade, serenidade e sacralidade  
- Tipografia legível, moderna e adequada à comunicação institucional  
- Imagens que valorizam a vida comunitária, a oração e os momentos formativos

## Informações Técnicas e Profissionais

### Tecnologias Utilizadas

Este projeto é construído com um stack de tecnologias modernas e amplamente adotadas no desenvolvimento web:

*   **Frontend:** **React (v19.2.0)** - Biblioteca JavaScript de ponta para a construção de interfaces de usuário reativas e componentizadas.
*   **Build Tool:** **Vite (v7.2.4)** - Ferramenta de desenvolvimento e build de alta performance, conhecida por sua velocidade e facilidade de configuração.
*   **Estilização:** **Tailwind CSS (v4.1.18)** - Framework CSS utility-first que permite o desenvolvimento rápido e flexível de designs customizados e responsivos.
*   **Componentes UI:** **Radix UI (DropdownMenu, Dialog)** - Coleção de primitivas de UI "headless" focadas em acessibilidade e flexibilidade, utilizadas para construir componentes como o menu de navegação.
*   **Roteamento:** **React Router DOM (v7.12.0)** - Biblioteca padrão para gerenciamento de rotas e navegação declarativa em aplicações React.
*   **Linguagem:** **TypeScript (v5.9.3)** - Superset tipado do JavaScript, empregado para garantir maior robustez, manutenibilidade e escalabilidade do código.
*   **Animações:** **Configuração nativa do Tailwind CSS v4** - Utiliza o sistema de animação integrado do Tailwind v4 para transições e efeitos visuais suaves.

### Estrutura do Projeto

A organização do projeto segue uma estrutura modular e escalável, facilitando o desenvolvimento e a manutenção:

*   `src/components/`: Componentes de UI reutilizáveis (ex: `NavBar`, `Button`).
*   `src/pages/`: Componentes que representam as diferentes páginas da aplicação (ex: `Home`, `About`).
*   `src/layouts/`: Componentes de layout que definem a estrutura geral da página (ex: `MainLayout`).
*   `src/styles/`: Arquivos de estilo CSS globais e de tema (ex: `index.css`).
*   `src/assets/`: Ativos estáticos como imagens e fontes.
*   `src/data/`: Dados estáticos da aplicação (ex: links de redes sociais).
*   `src/hooks/`: Hooks React personalizados.
*   `src/services/`: Módulos para interações com APIs ou serviços externos.
*   `src/utils/`: Funções utilitárias diversas.

### Configuração e Desenvolvimento

Para configurar e rodar o projeto localmente:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará acessível em `http://localhost:5173` (ou outra porta disponível).

3.  **Build para Produção:**
    ```bash
    npm run build
    ```
    Isso gera uma versão otimizada do aplicativo na pasta `dist/`.

## Contribuição

Contribuições são bem-vindas! Por favor, entre em contato para mais informações sobre como contribuir com o projeto.

## Licença

[Inserir tipo de licença, ex: MIT, ou indicar "Todos os direitos reservados".]
