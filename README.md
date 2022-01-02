# Projeto Modal + Apps Extras

Projeto modal setando cookies. Desenvolvido em React + TypeScript para aplicação em e-commerce VTEXIO.

:rotating_light: Este projeto se encontra dentro da pasta "React" arquivo :arrow_right: "Modal.tsx"

![Modal](https://cdn.discordapp.com/attachments/889854314095452201/910647713169813514/Screenshot_1.png)
Demonstração modal sobrepondo a home-page.

#### CSS HANDLES

CSS Handles é um identificador de elementos HTML. Portanto, ele pode ser usado para personalizar qualquer um dos componentes da loja simplesmente usando classes CSS por meio do código do tema da loja.

**CSS Handles foi utilizado a partir da linha 5 até a linha 14 do projeto.**

![CSS_Handles](https://cdn.discordapp.com/attachments/889854314095452201/910651940147433562/Screenshot_3.png)

Ao decorrer da documentação ele será inserido como "className" na estrutura HTML de nosso modal.

### Interface e Props

Inicializamos nossas variáveis e seus tipos na "interface ModalChildren".

Em seguida, passamos como props para a constante "MODAL".

- Em "MODAL" inicializaremos o CSS HANDLES;
- Usaremos useState para manipular a exibição de nosso modal, utilizando "[modalVisible, setModalVisible]"
- Em seguida, criamos dois ternários para setar o valor inicial de "titleWelcome" e "CookieDays". 

![Interface/Props](https://cdn.discordapp.com/attachments/900704871517409340/910544727152136202/Captura_de_Tela_2021-11-17_as_11.57.21.png)

### Cookie

![Set/Get - Cookie](https://cdn.discordapp.com/attachments/889854314095452201/910658738547990528/Screenshot_4.png)

**Cookies** são arquivos criados pelos sites que você visita. Eles tornam sua experiência online mais fácil, economizando informações de navegação. Com os cookies, os sites podem manter seu login, lembrar suas preferências do site e fornecer conteúdo relevante localmente.

- Em nosso projeto ele será responsável por armazenar os dias em que nosso modal não será exibido caso o usúario selecione o botão "X" para fechar o modal. Caso ele clique fora do modal (na parte escura) o modal desaparecerá porém seu cookie não será setado.

Para desenvolver a função setCookie e getCookie foi utilizado a documentação do site w3schools.

**Documentação cookie w3schools**: https://www.w3schools.com/js/js_cookies.asp

#### Verificando cookies com useEffect

![useEffect](https://cdn.discordapp.com/attachments/889854314095452201/910663805145612309/Screenshot_5.png)

**O que o useEffect faz?** Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização.

### Estrutura HTML de nosso Modal

![HTML MODAL](https://cdn.discordapp.com/attachments/889854314095452201/910664653938511932/Screenshot_6.png)

Desenvolvemos aqui o "esqueleto" de nosso modal com suas classes para aplicação do CSS HANDLES em que foi iniciado na linha 5 e finalizado na linha 14 de nossa aplicação.

**Extra:**

![HTML MODAL](https://cdn.discordapp.com/attachments/889854314095452201/910666900751667280/Screenshot_7.png)

Criamos alguns schemas para facilitar a manipulação do cliente em nosso modal diretamente pelo site editor da VTEX. Através do site editor o cliente poderá fazer a alteração do título, cookie e imagem de nosso modal.

## Apps extras

01:

Consumindo uma API externa com Axios.

Axios é um cliente HTTP baseado em Promises para fazer requisições.

:rotating_light: Este projeto se encontra dentro da pasta "React" arquivo :arrow_right: "Api.tsx"

02:

Criando flags de categorias específicas na página de produto.

:rotating_light: Este projeto se encontra dentro da pasta "React" arquivo :arrow_right: "ApiProductContext.tsx"

![Flags](https://cdn.discordapp.com/attachments/900704871517409340/927324473026297856/pdp.png)
Demonstação das flags: blusas, novidade e inovação sendo demonstradas específicamente na categoria "Woman".

03:

Fazendo uma requisão com axios para consultar o ID e SKU do produto no MasterData da VTEX.

:rotating_light: Este projeto se encontra dentro da pasta "React" arquivo :arrow_right: "ApiSearchProduct.tsx"


**Autor: Marcelo A. Monteiro**
