const fs = require('fs/promises');

const lerjson = async () => {
    const lerJson = await fs.readFile('./src/bancoDeDados.json');
    const parseJson = JSON.parse(lerJson);
};

const escreverJson = async () => {
    const escreverJson = JSON.stringify(lerjson);
    await fs.writeFile('./src/bancoDeDados.json', escreverJson);
};

module.exports = { lerjson, escreverJson }