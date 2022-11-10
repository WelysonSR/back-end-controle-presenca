const date = new Date();
const semana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

console.log(`Dia: ${semana[date.getDay()]}`);
console.log(`Data: ${date.toLocaleDateString()}`);

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
    return `${horas - 1}:${60 - (-minutos)}`;
  }

  return minutos === 0 || minutos < 10
    ? `${horas}:0${minutos}`
    : `${horas}:${minutos}`;
}

console.log(`BH: ${calculoHoras('09:15', '17:30')}`);
