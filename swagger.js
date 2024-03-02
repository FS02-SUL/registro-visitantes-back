const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.js'];
const doc = {
    info: {
        title: 'Documentação API Museu',
        description: "Descrição de como utilizar as endpoits da API."
    },
    host: 'http://localhost:8000',
    tags: [
        {
            name: "Visitantes",
            description: "Rotas do visitante"
        }
    ],
    definitions: {
        Visitante: {
            $visitante_nome: 'Gleidson',
            $visitante_cpf: '000.000.000-00',
            $visitante_profissao: 'Developer',
            $visitante_cidade: 'Fortaleza',
            $visitante_bairro: 'Edson Queiroz',
            $visitante_genero: 0,
            $visitante_data: '2024-03-01 11:47:00',
            $visitante_status: false,
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc);