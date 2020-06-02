let tagHoraInicial,
  tagHoraFinal,
  tagTotalHoras,
  tagPrecoHora,
  tagPrecoTratorista,
  tagPrecoLitro,
  tagValorTotalDiesel,
  tagQtdLitros,
  divResultado;
let numberFormat = null;

window.addEventListener('load', () => {
  iniciarCamposHora();
  iniciarCamposValor();
  iniciarCamporCombustivel();

  divResultado = document.querySelector('#resultado');
  numberFormat = Intl.NumberFormat('pt-BR');
});

function iniciarCamporCombustivel() {
  tagPrecoLitro = document.querySelector('#precoLitro');
  tagValorTotalDiesel = document.querySelector('#valorTotalDiesel');
  tagQtdLitros = document.querySelector('#qtdLitros');

  tagPrecoLitro.addEventListener('blur', alterarCombustivel);
  tagValorTotalDiesel.addEventListener('blur', alterarCombustivel);
  tagQtdLitros.addEventListener('blur', alterarCombustivel);
}

function alterarCombustivel(event) {
  if (tagPrecoLitro.value !== '' && tagValorTotalDiesel.value !== '') {
    tagQtdLitros.value = tagValorTotalDiesel.value / tagPrecoLitro.value;
  } else if (
    tagPrecoLitro.value === '' &&
    tagValorTotalDiesel.value !== '' &&
    tagQtdLitros.value !== ''
  ) {
    tagPrecoLitro.value = tagValorTotalDiesel.value / tagQtdLitros.value;
  } else if (
    tagPrecoLitro.value !== '' &&
    tagValorTotalDiesel.value === '' &&
    tagQtdLitros.value !== ''
  ) {
    tagValorTotalDiesel.value = tagQtdLitros.value * tagPrecoLitro.value;
  }
}

function iniciarCamposValor() {
  tagPrecoHora = document.querySelector('#precoHora');
  tagPrecoTratorista = document.querySelector('#precoTratorista');
}

function iniciarCamposHora() {
  tagHoraInicial = document.querySelector('#horaInicial');
  tagHoraFinal = document.querySelector('#horaFinal');
  tagTotalHoras = document.querySelector('#totalHoras');

  tagHoraInicial.addEventListener('input', alterarHora);
  tagHoraFinal.addEventListener('input', alterarHora);
  tagTotalHoras.addEventListener('input', limparCamposHora);
}

function alterarHora(event) {
  if (
    tagHoraInicial.value < tagHoraFinal.value &&
    tagHoraFinal.value !== '' &&
    tagHoraInicial.value !== ''
  ) {
    tagTotalHoras.value = tagHoraFinal.value - tagHoraInicial.value;
  }
}

function limparCamposHora(event) {
  tagHoraFinal.value = '';
  tagHoraInicial.value = '';
}

function limpar() {
  tagHoraInicial.value = '';
  tagHoraFinal.value = '';
  tagTotalHoras.value = '';
  tagPrecoHora.value = '';
  tagPrecoTratorista.value = '';
  tagPrecoLitro.value = '';
  tagValorTotalDiesel.value = '';
  tagQtdLitros.value = '';
  divResultado.innerHTML = '';
}

function calcular(event) {
  let favoritesHTML = '<div>';

  let valorTotal = toNumber(tagTotalHoras.value) * toNumber(tagPrecoHora.value);
  let valorTratorista =
    toNumber(tagTotalHoras.value) * toNumber(tagPrecoTratorista.value);
  let valorCombustivel = toNumber(tagValorTotalDiesel.value);
  let litrosPorHora =
    toNumber(tagQtdLitros.value) / toNumber(tagTotalHoras.value);
  let valorLitrosPorHora = litrosPorHora * toNumber(tagPrecoLitro.value);
  let valorGastoPorHora =
    valorLitrosPorHora + toNumber(tagPrecoTratorista.value);
  let lucroLiquido = valorTotal - valorTratorista - valorCombustivel;

  const favoriteCountryHTML = `
      <div >
        <div>
         <h3>Resultado</h3>
        </div>
        <div>
          <ul>
            <li>Valor Total: ${valorTotal}</li>
            <li>Valor Tratorista: ${valorTratorista}</li>
            <li>Valor Combustível: ${valorCombustivel}</li>
            <li>Lucro Líquido: ${lucroLiquido}</li>
          </ul>
        </div>
        <div>
         <h3>Gastos por hora</h3>
        </div>
        <div>
          <ul>
            <li>Tratorista: ${tagPrecoTratorista.value}</li>
            <li>Litros: ${litrosPorHora}</li>
            <li>Valor Litros: ${valorLitrosPorHora}</li>
            <li>Total Gasto: ${valorGastoPorHora}</li>
            <li>Lucro Líquido: ${
              toNumber(tagPrecoHora.value) - toNumber(valorGastoPorHora)
            }</li>
          </ul>
        </div>
      </div>  
    `;

  favoritesHTML += favoriteCountryHTML;

  favoritesHTML += '</div>';
  divResultado.innerHTML = favoritesHTML;
}

function toNumber(numero) {
  return parseFloat(numero, 10);
}
