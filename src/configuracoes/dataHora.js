const dataHora = () => {
    const data = new Date();

    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const dataHora = `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

    return dataHora;

}

module.exports = dataHora;