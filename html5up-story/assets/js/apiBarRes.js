/*const button = document.querySelector('#show')

let num = 1
const request = async () => {
    try {
        
        
        
        if (js.records && js.records[num]) {
            const record = js.records[num];
            if (record.length >= 3) {
                const nome = record[2];
                const descricao = record[3];
                
                sections.innerHTML += `
                    <section>
                        <div class="content">
                            <h2>${nome}</h2>
                            <p>${descricao}</p>
                            <div id="api-data"></div>
                        </div>
                        <div class="image">
                            <img src="images/born-to-die.jpeg" alt="Born to Die Album Image" />
                        </div>
                    </section>
                `;
            } else {
                console.error('Erro: Registro inválido ou incompleto.');
            }
        } else {
            console.error('Erro: Registro não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
};

button.addEventListener('click', () => {
    request();
    num++;
});*/