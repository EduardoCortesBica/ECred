# Guia para Recriar o Site VIP Financeira no Elementor

## Estrutura do Site

O site da VIP Financeira possui as seguintes seções principais:

1. **Header** - Logo e navegação
2. **Hero Section** - Título principal e call-to-action
3. **Estatísticas** - Números da empresa
4. **Sobre** - Informações da empresa
5. **Serviços** - Lista de serviços
6. **Depoimentos** - Avaliações de clientes
7. **FAQ** - Seção de perguntas
8. **Footer** - Informações de copyright

## Configurações Gerais do Elementor

### 1. Configurações de Página
- **Layout**: Elementor Full Width
- **Margem**: 0px em todos os lados
- **Padding**: 0px em todos os lados

### 2. Esquema de Cores
- **Cor Principal**: #4CAF50 (Verde)
- **Cor Secundária**: #f39c12 (Laranja)
- **Cor de Fundo**: #1a1a1a (Cinza escuro)
- **Cor de Fundo Alternativa**: #2d2d2d (Cinza médio)
- **Cor do Texto**: #ffffff (Branco)
- **Cor do Texto Secundário**: #cccccc (Cinza claro)

### 3. Tipografia
- **Fonte Principal**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tamanho do Título Principal**: 3.5em (56px)
- **Tamanho dos Subtítulos**: 3em (48px)
- **Tamanho do Texto**: 1.1em (18px)

## Seções Detalhadas

### SEÇÃO 1: HEADER
**Widget**: Header (Pro) ou Section com Inner Section

**Configurações**:
- Background: #000000
- Position: Fixed
- Z-index: 1000
- Box Shadow: 0 2px 10px rgba(0,0,0,0.3)

**Elementos**:
1. **Logo** (Image Widget)
   - Largura: 120px
   - Alinhamento: Esquerda

2. **Menu de Navegação** (Nav Menu Widget)
   - Item: "Fale Conosco"
   - Background: Linear gradient 45deg (#4CAF50, #45a049)
   - Border Radius: 25px
   - Padding: 10px 20px
   - Hover Effect: Transform translateY(-2px)

### SEÇÃO 2: HERO SECTION
**Widget**: Section

**Configurações**:
- Background: Linear gradient 135deg (#1a1a1a 0%, #2d2d2d 100%)
- Padding: 150px 0 100px
- Text Align: Center

**Elementos**:
1. **Badge "Conte com a Vip"** (Heading Widget)
   - Background: Linear gradient 45deg (#f39c12, #e67e22)
   - Color: #000000
   - Border Radius: 25px
   - Padding: 8px 25px
   - Position: Absolute, top: 80px

2. **Título Principal** (Heading Widget)
   - Texto: "Qual o tamanho do seu sonho?"
   - Tag: H1
   - Font Size: 3.5em
   - Font Weight: 700
   - Text Shadow: 2px 2px 4px rgba(0,0,0,0.5)
   - Animation: Fade In Up

3. **Subtítulo** (Text Editor Widget)
   - Texto: "Trabalhamos para ajudar pessoas como você a ter uma vida melhor a partir do crédito consignado."
   - Font Size: 1.3em
   - Color: #cccccc
   - Max Width: 600px
   - Margin: 0 auto 40px

4. **Botões** (Button Widgets)
   - **Botão 1**: "Fale Conosco"
     - Background: Linear gradient 45deg (#4CAF50, #45a049)
     - Border Radius: 30px
     - Padding: 15px 30px
     - Box Shadow: 0 4px 15px rgba(76, 175, 80, 0.3)
     - Hover: Transform translateY(-3px)
   
   - **Botão 2**: "Saiba Mais"
     - Background: Linear gradient 45deg (#f39c12, #e67e22)
     - Border Radius: 30px
     - Padding: 15px 30px
     - Box Shadow: 0 4px 15px rgba(243, 156, 18, 0.3)
     - Hover: Transform translateY(-3px)

### SEÇÃO 3: ESTATÍSTICAS
**Widget**: Section com Inner Section (4 colunas)

**Configurações**:
- Background: Linear gradient 135deg (#2d2d2d 0%, #1a1a1a 100%)
- Padding: 80px 0

**Elementos** (4 Counter Widgets):
1. **+60mil**
   - Number: 60000
   - Prefix: +
   - Suffix: mil
   - Title: "Clientes atendidos no mês"
   - Number Color: #f39c12
   - Animation: Counter

2. **+200**
   - Number: 200
   - Prefix: +
   - Title: "colaboradores"
   - Number Color: #f39c12
   - Animation: Counter

3. **Nota 4.9**
   - Number: 4.9
   - Prefix: Nota 
   - Title: "de avaliação no Google."
   - Number Color: #f39c12
   - Animation: Counter

4. **Desde 2008**
   - Number: 2008
   - Prefix: Desde 
   - Title: "atuando no mercado de crédito."
   - Number Color: #f39c12
   - Animation: Counter

**Estilo dos Cards**:
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border Radius: 15px
- Padding: 30px
- Backdrop Filter: blur(10px)
- Hover: Transform translateY(-10px)

### SEÇÃO 4: SOBRE
**Widget**: Section

**Configurações**:
- Background: Linear gradient 135deg (#1a1a1a 0%, #2d2d2d 100%)
- Padding: 100px 0
- Text Align: Center

**Elementos**:
1. **Título** (Heading Widget)
   - Texto: "Atuação sólida desde 2008."
   - Tag: H2
   - Font Size: 3em
   - Color: #f39c12
   - Font Weight: 700

2. **Descrição** (Text Editor Widget)
   - Texto: "Essa é uma garantia aos nossos clientes de que o processo terá credibilidade, segurança, qualidade, excelência e um atendimento exclusivo e pessoal."
   - Font Size: 1.2em
   - Color: #cccccc
   - Max Width: 800px
   - Line Height: 1.8

3. **Botão** (Button Widget)
   - Texto: "Saiba Mais"
   - Estilo igual aos botões da Hero Section

### SEÇÃO 5: SERVIÇOS
**Widget**: Section

**Configurações**:
- Background: Linear gradient 135deg (#2d2d2d 0%, #1a1a1a 100%)
- Padding: 100px 0
- Text Align: Center

**Elementos**:
1. **Título** (Heading Widget)
   - Texto: "Nossos serviços"
   - Tag: H2
   - Font Size: 3em
   - Color: #f39c12

2. **Cards de Serviços** (3 Icon Box Widgets):

   **Card 1: Antecipação do FGTS**
   - Icon: Money/Dollar icon
   - Title: "Antecipação do FGTS"
   - Description: "Antecipe seu FGTS com condições especiais e conquiste mais liberdade financeira. Use seu benefício para realizar planos, quitar dívidas ou investir no que realmente importa!"
   - Title Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

   **Card 2: Crédito Consignado**
   - Icon: Credit Card icon
   - Title: "Crédito Consignado"
   - Description: "Trabalhamos para ajudar mais pessoas como você a ter uma vida melhor a partir do crédito consignado. Conquiste uma folga financeira!"
   - Title Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

   **Card 3: Consignado para CLT**
   - Icon: User/Person icon
   - Title: "Consignado para CLT"
   - Description: "Empréstimo exclusivo para trabalhadores CLT, com taxas mais baixas do que os demais empréstimos e aprovação ainda mais fácil."
   - Title Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

3. **Botão** (Button Widget)
   - Texto: "Contratar Serviços"
   - Estilo igual aos botões da Hero Section

### SEÇÃO 6: DEPOIMENTOS
**Widget**: Section

**Configurações**:
- Background: Linear gradient 135deg (#1a1a1a 0%, #2d2d2d 100%)
- Padding: 100px 0
- Text Align: Center

**Elementos**:
1. **Título** (Heading Widget)
   - Texto: "Depoimentos de clientes"
   - Tag: H2
   - Font Size: 3em
   - Color: #f39c12

2. **Cards de Depoimentos** (3 Testimonial Widgets):

   **Depoimento 1**
   - Nome: "Tiago Santos"
   - Subtitle: "Via Google Reviews"
   - Content: "Não tenho que reclamar. Sempre fui muito bem atendido. Os atendentes são educados graças a Deus. Por isso vou recomendar. Continue assim autênticos e verdadeiro a prosperidade depende disso"
   - Name Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

   **Depoimento 2**
   - Nome: "Stephany Helen"
   - Subtitle: "Via Google Reviews"
   - Content: "Vocês são extremamente rápidos com as solicitações, eu não levei 1 hora para resolver tudo. Gostei bastante, rápido e fácil. A equipe está de parabéns!!"
   - Name Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

   **Depoimento 3**
   - Nome: "Ném Rodrigues"
   - Subtitle: "Via Google Reviews"
   - Content: "Fui atendido pelo Erick Farias Guedes, um atendimento humanizado e muito satisfatório, vocês estão de parabéns, e destaco se todos os funcionários aí forem que nem ele, nunca lhes faltarão clientes. Excelente pessoal, excelente profissional. 👏🏽👏🏽👏🏽👏🏽"
   - Name Color: #4CAF50
   - Background: rgba(255, 255, 255, 0.05)
   - Border Radius: 20px
   - Padding: 40px

3. **Botão** (Button Widget)
   - Texto: "Receber Atendimento Vip"
   - Estilo igual aos botões da Hero Section

### SEÇÃO 7: FAQ
**Widget**: Section

**Configurações**:
- Background: Linear gradient 135deg (#2d2d2d 0%, #1a1a1a 100%)
- Padding: 100px 0
- Text Align: Center

**Elementos**:
1. **Título** (Heading Widget)
   - Texto: "Tem Dúvidas?"
   - Tag: H2
   - Font Size: 3em
   - Color: #f39c12

2. **Subtítulo** (Text Editor Widget)
   - Texto: "Acesse agora nossa área de perguntas frequentes"
   - Font Size: 1.2em
   - Color: #cccccc

3. **Botão** (Button Widget)
   - Texto: "Perguntas Frequentes"
   - Estilo igual aos botões da Hero Section

### SEÇÃO 8: FOOTER
**Widget**: Footer (Pro) ou Section

**Configurações**:
- Background: #000000
- Padding: 40px 0
- Text Align: Center
- Border Top: 1px solid #333333

**Elementos**:
1. **Copyright** (Text Editor Widget)
   - Texto: "© 2025 VIP Financeira. Todos os direitos reservados."
   - Font Size: 0.9em
   - Color: #666666

## Animações e Efeitos

### Animações de Entrada
- **Hero Section**: Fade In Up com delay escalonado
- **Estatísticas**: Counter animation
- **Cards**: Fade In Up quando entram no viewport

### Efeitos Hover
- **Botões**: Transform translateY(-3px) + box-shadow aumentada
- **Cards**: Transform translateY(-5px) + background mais claro
- **Header**: Transform translateY(-2px) no menu

### Responsividade
- **Mobile**: Reduzir font-sizes, ajustar padding, empilhar elementos
- **Tablet**: Ajustes intermediários
- **Desktop**: Layout completo

## CSS Customizado Adicional

```css
/* Efeitos de backdrop filter para cards */
.elementor-widget-icon-box .elementor-icon-box-wrapper,
.elementor-widget-testimonial .elementor-testimonial-wrapper,
.elementor-widget-counter .elementor-counter {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

/* Gradientes personalizados */
.hero-gradient {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}

.stats-gradient {
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
}

/* Animações personalizadas */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

/* Efeito ripple para botões */
.elementor-button {
    position: relative;
    overflow: hidden;
}

.elementor-button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.elementor-button:active::after {
    width: 300px;
    height: 300px;
}
```

## Plugins Recomendados

1. **Elementor Pro** - Para widgets avançados
2. **Essential Addons for Elementor** - Widgets extras
3. **PowerPack for Elementor** - Mais opções de design
4. **JetElements** - Widgets adicionais

## Notas Importantes

- Use sempre unidades responsivas (em, rem, vw, vh)
- Teste em diferentes dispositivos
- Otimize imagens antes de fazer upload
- Use lazy loading para melhor performance
- Configure cache adequadamente
- Teste velocidade de carregamento

