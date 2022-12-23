const { readFile, writeFile } = require('fs/promises');

const lerjson = async () => {
    let lerJson = await readFile('./src/bancoDeDados.json');
    lerJson = JSON.parse(lerJson);
    return lerJson;
};

const escreverJson = async () => {
    const escreverJson = JSON.stringify(await lerjson());
    return await writeFile('./src/bancoDeDados.json', escreverJson);
};

module.exports = { lerjson, escreverJson }