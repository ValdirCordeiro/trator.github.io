<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
    <title>Cálculo Horas Trator</title>
  </head>

  <body>
    <div class="container-sm">
      <h4>Cálculo de horas trabalhadas</h4>
      <div class="row">
        <!--Entrada de dados-->
        <div class="col-auto">
          <span class="input-group-text">Hora Inicial</span>
          <input id="horaInicial" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Hora Final</span>
          <input id="horaFinal" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Total de Horas</span>
          <input id="totalHoras" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Preço da Hora</span>
          <input id="precoHora" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Valor Tratorista/Hora</span>
          <input id="precoTratorista" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Preço /Litro</span>
          <input id="precoLitro" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Preco Total</span>
          <input id="valorTotalDiesel" type="text" class="form-control" />
        </div>
        <div class="col-auto">
          <span class="input-group-text">Qtd. Litros</span>
          <input id="qtdLitros" type="text" class="form-control" />
        </div>
      </div>
      <div class="col-auto" style="margin-top: 1rem; text-align: center;">
        <button onclick="limpar()" type="button" class="btn btn-primary">
          Limpar
        </button>
        <button onclick="calcular()" type="button" class="btn btn-primary">
          Calcular
        </button>
      </div>
      <div class="col-auto" id="resultado"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
