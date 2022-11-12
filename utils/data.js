const date = new Date();
const semana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

// console.log(`Dia: ${semana[date.getDay()]}`);
// console.log(`Data: ${date.toLocaleDateString()}`);

const horaAtual = () => {
  const horas = date.getHours();
  const minutos = date.getMinutes();

  if (minutos < 10) {
    return `${horas}:0${minutos}`;
  }
  return `${horas}:${minutos}`;
}

const calculoHoras = (entrada, saida) => {
  const [eH, eM] = entrada.split(':');
  const [sH, sM] = saida.split(':');

  const horas = Number(sH) - Number(eH);
  const minutos = Number(sM) - Number(eM);

  if(minutos < 0) {
    return `${horas - 1}:${60 + minutos}`;
  }

  return minutos === 0 || minutos < 10
    ? `${horas - 1}:0${minutos}`
    : `${horas - 1}:${minutos}`;
}

// console.log(`BH: ${calculoHoras('09:00', '18:05')}`);

const calculoBhMesAnterior = (info) => {
  const [_dia, mes, _ano] = date.toLocaleDateString().split('/');

  const cauculo = info.reduce((acc, bh) => {
    const [_bhDia, bhMes, _bhAno] = bh.data.split('/');

    if (Number(mes) - 1 === Number(bhMes)) {
      const [bhH, bhM] = bh.bancoHora.split(':');
      const [accH, accM] = acc.split(':');
      const minutos = Number(accM) + Number(bhM);
      const horas = Number(accH) + Number(bhH);
      if (minutos < 10) {
        return `${horas}:0${minutos}`;
      }
      console.log(minutos);
      if(minutos >= 60) {
        return `${horas + 1}:${minutos - 60}`;
      }
      return `${horas}:${minutos}`;
    }

    return acc;
  }, '00:00');

  return cauculo;
}

const calculoBhMesAtual = (info) => {
  const [_dia, mes, _ano] = date.toLocaleDateString().split('/');

  const cauculo = info.reduce((acc, bh) => {
    const [_bhDia, bhMes, _bhAno] = bh.data.split('/');

    if (Number(mes) === Number(bhMes)) {
      const [bhH, bhM] = bh.bancoHora.split(':');
      const [accH, accM] = acc.split(':');
      const minutos = Number(accM) + Number(bhM);
      const horas = Number(accH) + Number(bhH);
      if (minutos < 10) {
        return `${horas}:0${minutos}`;
      }

      if(minutos >= 60) {
        return `${horas + 1}:${minutos - 60}`;
      }
      return `${horas}:${minutos}`;
    }

    return acc;
  }, '00:00');

  return cauculo;
}

const somaBh = (mesAn, mesAt) => {
  const [eH, eM] = mesAn.split(':');
  const [sH, sM] = mesAt.split(':');

  const minutos = Number(eM) + Number(sM);
  const horas = Number(eH) + Number(sH);

  if (minutos < 10) {
    return `${horas}:0${minutos}`;
  }

  if(minutos >= 60) {
    return `${horas + 1}:${minutos - 60}`;
  }
  return `${horas}:${minutos}`;
}

const calculoTraspoetMes = (info) => {
  return typeof info[0].transporte
}

const transporte = [
  {transporte: 9.60},
  {transporte: 9.60},
  {transporte: 9.60},
]

console.log(calculoTraspoetMes(transporte));