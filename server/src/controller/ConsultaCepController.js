const { StatusCodes } = require('http-status-codes');
const axios = require('axios');
const NodeCache = require('node-cache');


const cache = new NodeCache({ stdTTL: process.env.TEMPOCACHE });

exports.consultaEndereco =  async (req, res) => {
    const cep = req.body.cep;

  // Validação do CEP
  if (!cep || !/^\d{8}$/.test(cep)) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'CEP inválido' });
  }

  // Verifica se o endereço está em cache
  const cachedAddress = cache.get(cep);
  if (cachedAddress) {
    return res.json({ source: 'cache', data: cachedAddress });
  }

  try {
    const response = await axios.get(`${process.env.VIACEPURL}/${cep}/json/`);

    const resultado = response.data;

    if (response.status == 200 && !response.erro) {
      // Salva o endereço no cache
      cache.set(cep, response.data);
      
      return res.status(StatusCodes.OK).json({resultado});
    } else {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Endereço não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar endereço:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Erro ao buscar endereço' });
  }
  };