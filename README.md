# ConsultaCepApi
API em Node.JS que recebe requisições POST com um CEP como parâmetro. O CEP é pesquisado em https://viacep.com.br/ e o retorno vai na resposta da requisição. API com autenticação.

PASSOS PARA RODAR O PROJETO:
Back-End:
# Faça o clone deste repositorio ou baixe o zip
git clone https://github.com/BrenoJoseCoelho/ConsultaCepApi.git

# Acesse a pasta server
cd server

# Instale as dependencias
npm install

# Para rodar a API
npm run dev

# Testando via POSTMAN
Após o porjeto estar rodando precisa acessar a rota de autenticação: localhost:3001/auth, copiar o token que da como resultado e passar esse Token no authorization com o type Bearer Token, após adicionar o token ai botar a rota localhost:3001/consultaendereco passando como Json o cep, segue um exemplo ao lado {"cep": "88150000"}