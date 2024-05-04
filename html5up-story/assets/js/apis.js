const albuns = [
  {
    "nome": "Born to Die",
    "descricao": "Born To Die é o segundo álbum de estúdio da artista musical estadunidense Lana Del Rey. O seu lançamento ocorreu em 27 de janeiro de 2012 na Alemanha e na Irlanda e no dia 31 do mesmo mês nos Estados Unidos, através das editoras discográficas Interscope, Polydor e Stranger Records.",
    "imagem": "images/born-to-die.jpeg"
  },
  {
    "nome": "Ultraviolence",
    "descricao": "O álbum foi lançado no dia 17 de Junho de 2014, estreando como número 1 em doze países, incluindo Reino Unido e Estados Unidos, e alcançando o 1º lugar da Billboard. 'Ultraviolence' foi considerado um ícone da música atual, vendendo cerca de 200,000 cópias na primeira semana.",
    "imagem": "images/ultra.jpeg"
  },
  {
    "nome": "Born to Die - The Paradise Edition",
    "descricao": "Em novembro de 2012, a cantora norte-americana Lana Del Rey relançou seu segundo álbum, Born to Die, sob o nome de Born to Die - The Paradise Edition.",
    "imagem": "images/paradise.jpg"
  },
  {
    "nome": "Honeymoon",
    "descricao": "Honeymoon é o quarto álbum de estúdio da cantora americana Lana Del Rey. O seu lançamento ocorreu em 18 de setembro de 2015 sob a distribuição da gravadora Universal Music e afiliadas.",
    "imagem": "images/honey.jpg"
  },
  {
    "nome": "Lust For Life",
    "descricao": "Lust for Life é o quinto álbum de estúdio gravado pela cantora e compositora americana Lana Del Rey. O seu lançamento mundial ocorreu em 21 de julho de 2017.",
    "imagem": "images/lust.jpeg"
  },
  {
    "nome": "Blue Banisters",
    "descricao": "Blue Banisters é o oitavo álbum de estúdio da cantora e compositora estadunidense Lana Del Rey. Foi lançado em 22 de outubro de 2021 através das gravadoras Polydor e Interscope, sete meses após lançar o seu sétimo álbum Chemtrails over the Country Club.",
    "imagem": "images/blue.jpg"
  }
];

const button = document.querySelector('#show');
const sections = document.querySelector('.divided');

let num = 0

const showMore = () => {
    const album = albuns[num]

    if(num % 2 === 0){
        sections.innerHTML += `
    <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
            <h2>${album.nome}</h2>
            <p>${album.descricao}</p>
        </div>
        <div class="image">
            <img src=${album.imagem} alt="album2" />
        </div>
    </section>
    `
    } else{
        sections.innerHTML += `
    <section class="spotlight style1 orient-right content-align-right image-position-center onscroll-image-fade-in">
        <div class="content">
            <h2>${album.nome}</h2>
            <p>${album.descricao}</p>
        </div>
        <div class="image">
            <img src=${album.imagem} alt="album2" />
        </div>
    </section>
    `
    }
    num++
}

button.addEventListener('click', showMore)


