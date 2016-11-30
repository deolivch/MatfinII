function OcultarRespostas()
{
  document.getElementById("resSAC0").style.display = 'none';  
  document.getElementById("resSAC1").style.display = 'none';
  document.getElementById("resSAC2").style.display = 'none';
  document.getElementById("resSAC3").style.display = 'none';
  document.getElementById("resSAC4").style.display = 'none';
  document.getElementById("resSAC5").style.display = 'none';
  document.getElementById("resSAC6").style.display = 'none';
  document.getElementById("resSAC7").style.display = 'none';
  document.getElementById("resSAC8").style.display = 'none';
  document.getElementById("resSAC9").style.display = 'none';
  document.getElementById("resSAC10").style.display = 'none';
  document.getElementById("resSAC11").style.display = 'none';

  document.getElementById("resPRICE0").style.display = 'none';
  document.getElementById("resPRICE1").style.display = 'none';
  document.getElementById("resPRICE2").style.display = 'none';
  document.getElementById("resPRICE3").style.display = 'none';
  document.getElementById("resPRICE4").style.display = 'none';
  document.getElementById("resPRICE5").style.display = 'none';
  document.getElementById("resPRICE6").style.display = 'none';
  document.getElementById("resPRICE7").style.display = 'none';
  document.getElementById("resPRICE8").style.display = 'none';
  document.getElementById("resPRICE9").style.display = 'none';
  document.getElementById("resPRICE10").style.display = 'none';

}

var criartabelaSAC = 0;
var criartabelaPrice = 0;

var valorFinanciado = 0;
var numeroprestacoes = 0;
var taxaJuros = 0;

var tx = 0;
var vf = 0;
var np = 0;


var txP = 0;
var vfP = 0;
var npP = 0;

var testeSAC = 0;
var testePRICE= 0;

function removerTabela(list, qtdLinha)
{
  for ( var i = 1; i <= (qtdLinha); i++)
  {
    list.removeChild(list.childNodes[0]);
  }
}


function Mudarestado() 
{ 
  if(parseFloat(document.getElementById("valorFinanciar").value) > 0 && (parseFloat(document.getElementById("taxaJuros").value)) > 0 && parseFloat(document.getElementById("qtPrestacoes").value) > 0)
  {
    document.getElementById("Rad_SAC").disabled = false;
    document.getElementById("Rad_PRICE").disabled = false;
  } 

  if(	document.getElementById("Rad_SAC").checked == true){
    document.getElementById("mostrarTabelaPRICE").style.display = 'none';
  	document.getElementById("mostrarTabelaSAC").style.display = 'block';
   
    valorFinanciado = parseFloat(document.getElementById("valorFinanciar").value);
    numeroprestacoes = parseFloat(document.getElementById("qtPrestacoes").value);
    taxaJuros = (parseFloat(document.getElementById("taxaJuros").value)) / 100;
    var SaldoDevedor = valorFinanciado;
    var somarJuros = 0;
    var somarPrestacoes= 0;

  switch(document.getElementById("select_SAC").value) 
  {
    case "sac0":
        OcultarRespostas();

        for (var i = 0; i <= (numeroprestacoes + 1); i++) 
        {
          var linha = document.createElement("tr");

          for (var j = 0; j < 5; j++)
          {

              var node = document.createElement("td");
              switch(j)
              {
                case 0:
                  if(i <= numeroprestacoes)
                  {
                    var textnode = document.createTextNode(i);
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }
                  else
                  {
                    var textnode = document.createTextNode("TOTAL");
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }
                break;
                case 1:
                  
                  if(i > 0 && i <= numeroprestacoes)
                  {
                    var SaldoDevedor = SaldoDevedor - (valorFinanciado / numeroprestacoes);
                    var textnode = document.createTextNode(SaldoDevedor);
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }
                  else if(i < 1)
                  {
                    var textnode = document.createTextNode(valorFinanciado);
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }
                  else
                  {
                    var textnode = document.createTextNode("-");
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }
                break;
                case 2:
                  if(i > 0 && i <= numeroprestacoes)
                      {
                        var amortização = valorFinanciado / numeroprestacoes;
                        var textnode = document.createTextNode(amortização);
                        node.appendChild(textnode);
                        linha.appendChild(node);
                      }
                      else if(i < 1)
                      {
                        var textnode = document.createTextNode("-");
                        node.appendChild(textnode);
                        linha.appendChild(node);
                      }
                      else
                      {
                        var textnode = document.createTextNode(amortização * numeroprestacoes);
                        node.appendChild(textnode);
                        linha.appendChild(node);
   
                      }

                break;
                case 3:
                  if(i > 0 && i <= numeroprestacoes)
                      {  
                        var juros = (SaldoDevedor + (valorFinanciado / numeroprestacoes)) * taxaJuros;
                        somarJuros = somarJuros + juros;
                        var textnode = document.createTextNode(juros);
                        node.appendChild(textnode);
                        linha.appendChild(node); 
                      }
                      else  if(i < 1)
                      {
                        var textnode = document.createTextNode("-");
                        node.appendChild(textnode);
                        linha.appendChild(node);
                      }  

                      else
                      {
                        var textnode = document.createTextNode(somarJuros);
                        node.appendChild(textnode);
                        linha.appendChild(node);
                      }         

                break;
                case 4:
                  if(i > 0 && i <= numeroprestacoes)
                  {
                    var prestacao = amortização + juros;
                    somarPrestacoes = somarPrestacoes + prestacao;
                    var textnode = document.createTextNode(prestacao);
                    node.appendChild(textnode);
                    linha.appendChild(node); 

                  }
                  else  if(i < 1)
                  {
                    var textnode = document.createTextNode("-");
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  } 
                  else
                  {
                    var textnode = document.createTextNode(somarPrestacoes);
                    node.appendChild(textnode);
                    linha.appendChild(node);
                  }

                break;

              }
          }
            document.getElementById("sac-body").appendChild(linha);
        }

      if(vf != 0 && np != 0 && tx != 0 )
      {
        if(vf != parseFloat(document.getElementById("valorFinanciar").value) || np != parseFloat(document.getElementById("qtPrestacoes").value) || (tx * 100 )!= parseFloat(document.getElementById("qtPrestacoes").value)) 
        {
          removerTabela(document.getElementById("sac-body"), (np + 2));
        }
        if(testeSAC == 0)
        {
          document.getElementById("sac-body").removeChild(document.getElementById("sac-body").childNodes[0]);
          testeSAC = 1;
        }
      }

      vf = valorFinanciado;
      np = numeroprestacoes;
      tx = taxaJuros;

      document.getElementById("resSAC0").style.display = 'block';

    break;
    case "sac1":
      OcultarRespostas();
      
      resultado = valorFinanciado / numeroprestacoes;
      document.getElementById("fs_valor_amortizacao").innerHTML = resultado;
      document.getElementById("resSAC1").style.display = 'block';
    break;
    case "sac2":
      OcultarRespostas();
      //Saldo Devedor de ordem t
      document.getElementById("resSAC2").style.display = 'block';
     
      var ordem = 0;
      ordem = parseFloat(document.getElementById("fs_ordem_t").value);

      if(ordem >= 0 && ordem <= numeroprestacoes)       
      {
        saldoDevedorOrdemT = ((valorFinanciado / numeroprestacoes) * (numeroprestacoes - ordem));
      }
      else
      {
        saldoDevedorOrdemT = 0;
      }
      document.getElementById("fs_saldo_devedor_t").innerHTML = saldoDevedorOrdemT; 
    break;
    case "sac3":
      OcultarRespostas();
      document.getElementById("resSAC3").style.display = 'block';
      
      var ordem = 0;
      ordem = parseFloat(document.getElementById("fs_ordem_t1").value);

      if(ordem >= 0 && ordem <= numeroprestacoes)       
      {
        saldoDevedorOrdemTMenos = ((valorFinanciado / numeroprestacoes) * (numeroprestacoes - (ordem - 1)));
      }
      else
      {
        saldoDevedorOrdemTMenos = 0;
      }
      document.getElementById("fs_saldo_devedor_t1").innerHTML = saldoDevedorOrdemTMenos; 
    break;
    case "sac4":
      OcultarRespostas();
      document.getElementById("resSAC4").style.display = 'block';

      var ordem = 0;
      ordem = parseFloat(document.getElementById("fs_ordem_t2").value);

      if(ordem >= 1 && ordem <= numeroprestacoes)       
      {
        jurosEmOrdemT = (taxaJuros * ((valorFinanciado / numeroprestacoes) * (numeroprestacoes - ordem + 1)));       
      }
      else
      {
        jurosEmOrdemT = 0;
      }
      document.getElementById("fs_valor_juros_t").innerHTML = jurosEmOrdemT; 
    break;
    case "sac5":
      OcultarRespostas();
      document.getElementById("resSAC5").style.display = 'block';

      var ordem = 0;
      ordem = parseFloat(document.getElementById("fs_ordem_t4").value);

      if(ordem >= 0 && ordem <= numeroprestacoes)       
      {
        if(ordem != 0)
        {
          prestacaoOrdemT = ((valorFinanciado / numeroprestacoes) * (1 + taxaJuros * (numeroprestacoes - ordem + 1)));
        }
        else
        {
          prestacaoOrdemT = 0;
        }
          document.getElementById("fs_valor_prestacao_t").innerHTML = prestacaoOrdemT; 
      }
      
    break;
    case "sac6":
      OcultarRespostas();
      document.getElementById("resSAC6").style.display = 'block';   

        somaOrdemT = parseFloat(document.getElementById("fs_ordem_t3").value);
        somaOrdemTK = parseFloat(document.getElementById("fs_ordem_t3k").value);
        if(somaOrdemT >= 0 && somaOrdemTK <= numeroprestacoes)       
        {
          somaOrdemTplusK = ((somaOrdemTK - somaOrdemT) * (valorFinanciado / numeroprestacoes));
        }
        else
        {
          somaOrdemTplusK = 0;
        }
          document.getElementById("fs_valor_amortizacao_tk").innerHTML = somaOrdemTplusK;

    break;
    case "sac7": //Juros acumulados até um tempo (t)
      OcultarRespostas();
      
      document.getElementById("resSAC7").style.display = 'block';
      ordemJurosAcumulado = document.getElementById("fs_ordem_t5").value;

      if(ordemJurosAcumulado > 0 && ordemJurosAcumulado <= numeroprestacoes)
      {
        somaDosJurosAcumulado = taxaJuros * (valorFinanciado / numeroprestacoes) * ordemJurosAcumulado * (((2 * numeroprestacoes) - ordemJurosAcumulado + 1) / 2);
      }
      else
      {
        somaDosJurosAcumulado = 0;
      }
        document.getElementById("fs_valor_juros_ta").innerHTML = somaDosJurosAcumulado;
    break;
    case "sac8": //Soma dos Juros entre os período (t) e (t + k)
      OcultarRespostas();
      document.getElementById("resSAC8").style.display = 'block'; 

      ordemJurosAcumuladot = (document.getElementById("fs_ordem_t6").value) - 1;
      ordemJurosAcumuladotk = document.getElementById("fs_ordem_t6k").value;

      ordemFinal = 0;

      ordemFinal = ordemJurosAcumuladotk - ordemJurosAcumuladot;
      if(ordemJurosAcumuladot >= 0 && ordemJurosAcumuladotk <= numeroprestacoes)
      {
        somaDosJurosAcumuladotk = taxaJuros * (valorFinanciado / numeroprestacoes) * ordemFinal * ( numeroprestacoes - ordemJurosAcumuladot - ((ordemFinal - 1) / 2));
      }
      else
      {
        somaDosJurosAcumuladotk = 0;
      }
      document.getElementById("fs_valor_juros_tk").innerHTML = somaDosJurosAcumuladotk;

    break;
    case "sac9":
      OcultarRespostas();
      document.getElementById("resSAC9").style.display = 'block';     

      ordemPrestacoesAcumuladas = parseFloat(document.getElementById("fs_ordem_t7").value);

      if(ordemPrestacoesAcumuladas >= 0 && ordemPrestacoesAcumuladas <= numeroprestacoes)
      {
        somarPrestacoesAcumuladas = ((valorFinanciado / numeroprestacoes) * ordemPrestacoesAcumuladas * ( 1 + taxaJuros * ((2 * numeroprestacoes - ordemPrestacoesAcumuladas + 1) / 2 )));
      }
      else
      {
         somarPrestacoesAcumuladas = 0;
      }
        document.getElementById("fs_valor_prestacao_ta").innerHTML = somarPrestacoesAcumuladas;
    break;
    case "sac10": //Soma das Prestações entre os período (t) e (t + k)
      OcultarRespostas();
      document.getElementById("resSAC10").style.display = 'block';     
      
      ordemPrestacoesAcumuladasT = parseFloat(document.getElementById("fs_ordem_t8").value);
      ordemPrestacoesAcumuladasK = parseFloat(document.getElementById("fs_ordem_t8k").value);

      if(ordemPrestacoesAcumuladasT >= 0 && ordemPrestacoesAcumuladasK <= numeroprestacoes && ordemPrestacoesAcumuladasK >= 0)
      {
        ordemPrestacoesAcumuladasTK = ordemPrestacoesAcumuladasK - ordemPrestacoesAcumuladasT;
        somarPrestacoesAcumuladasTK = ((valorFinanciado / numeroprestacoes) * ordemPrestacoesAcumuladasTK * (1 + taxaJuros * (numeroprestacoes - ordemPrestacoesAcumuladasT - ((ordemPrestacoesAcumuladasTK -1 ) / 2))));
      }
      else
      {
        somarPrestacoesAcumuladasTK = 0;
      }
        document.getElementById("fs_valor_prestacao_tk").innerHTML = somarPrestacoesAcumuladasTK;

    break;
    case "sac11":
      OcultarRespostas();
      document.getElementById("resSAC11").style.display = 'block';  

      decrPrestacao = (taxaJuros * (valorFinanciado / numeroprestacoes));
      
      document.getElementById("fs_valor_decrescimo").innerHTML = decrPrestacao;
    
    break;
  }
}

  if(document.getElementById("Rad_PRICE").checked == true)
  {
  	document.getElementById("mostrarTabelaPRICE").style.display = 'block';
  	document.getElementById("mostrarTabelaSAC").style.display = 'none';

    valorFinanciado = parseFloat(document.getElementById("valorFinanciar").value);
    numeroprestacoes = parseFloat(document.getElementById("qtPrestacoes").value);
    taxaJuros = (parseFloat(document.getElementById("taxaJuros").value)) / 100;


    var SaldoDevedorPrice = valorFinanciado;
    var amortizaçãoPrice = 0.0;
    var amortizaçãoPriceTotal = 0.0;
    var somarJurosPrice = 0.0;
    var somarPrestacoesPrice = 0.0;

  switch(document.getElementById("select_PRICE").value) 
  {
    case "price0":
      OcultarRespostas();

      for(var i = 0; i <= (numeroprestacoes + 1); i++) 
      {
        var linha = document.createElement("tr");

        for (var j = 0; j < 5; j++)
        {

          var node = document.createElement("td");
          switch(j)
          {
            case 0: //(t)
              if(i <= numeroprestacoes && i >= 0)
              {
                var textnode = document.createTextNode(i);
              }
              else
              {
                var textnode = document.createTextNode("TOTAL");
              }
                node.appendChild(textnode);
                linha.appendChild(node);
            break;
            
            case 1: //Saldo devedor P(t)
              if(i == 0)
              {
                var textnode = document.createTextNode(valorFinanciado);
              }
              else if(i > 0 && i < numeroprestacoes)
              {
                  var textnode = document.createTextNode((SaldoDevedorPrice - ((valorFinanciado / ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros))) - (SaldoDevedorPrice * taxaJuros))));
              }
              else
              {

                 var textnode = document.createTextNode("-");
              }

              node.appendChild(textnode);
              linha.appendChild(node);
            
            break;
            
            case 2: //Amortizações A(t)
              if(i == 0)
              {

                var textnode = document.createTextNode("-");
              }
              else if(i > 0 && i <= numeroprestacoes)
              {
                amortizaçãoPrice = (valorFinanciado / ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros))) - (taxaJuros * SaldoDevedorPrice);
                amortizaçãoPriceTotal = amortizaçãoPriceTotal + amortizaçãoPrice;
                var textnode = document.createTextNode(amortizaçãoPrice);
              }
              else
              {
                var textnode = document.createTextNode(amortizaçãoPriceTotal);
              }

              node.appendChild(textnode);
              linha.appendChild(node);
            break;

            case 3: //Juros (Jt)
              if(i == 0)
              {
                var textnode = document.createTextNode("-");
              }
              else if(i > 0 && i <= numeroprestacoes)
              {
                var jurosPrice = SaldoDevedorPrice * taxaJuros;
                somarJurosPrice = somarJurosPrice + jurosPrice;
                var textnode = document.createTextNode(jurosPrice);
              }
              else
              {
                var textnode = document.createTextNode(somarJurosPrice);
              }
              
              node.appendChild(textnode);
              linha.appendChild(node);
            break;

            case 4: //prestações(R)

              if(i == 0)
              {
                var textnode = document.createTextNode("-");
              }
              else if(i > 0 && i <= numeroprestacoes)
              {
                var pmt = (valorFinanciado / ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros)));
                somarPrestacoesPrice = somarPrestacoesPrice + pmt;
                var textnode = document.createTextNode(pmt);
                
              }
              else
              {
                var textnode = document.createTextNode(somarPrestacoesPrice);
              }
                node.appendChild(textnode);
                linha.appendChild(node);

            break;
          } //case
        } // for

        document.getElementById("price-body").appendChild(linha);
        
        if(i > 0)
        {
          SaldoDevedorPrice = SaldoDevedorPrice - ((valorFinanciado / ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros))) - (SaldoDevedorPrice * taxaJuros));
        }
      }

      if(vfP != 0 && npP != 0 && txP != 0 )
      {
        if(vfP != parseFloat(document.getElementById("valorFinanciar").value) || npP != parseFloat(document.getElementById("qtPrestacoes").value) || (txP * 100 )!= parseFloat(document.getElementById("qtPrestacoes").value)) 
        {
          removerTabela(document.getElementById("price-body"), (npP + 2));
        }
        if(testePRICE == 0)
        {
          document.getElementById("price-body").removeChild(document.getElementById("price-body").childNodes[0]);
          testePRICE = 1;
        }
      }

      vfP = valorFinanciado;
      npP = numeroprestacoes;
      txP = taxaJuros;

      document.getElementById("resPRICE0").style.display = 'block';
    break

    case "price1":
      OcultarRespostas();
      
      valorPrestacaoPrice = (valorFinanciado * ((Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros) / (Math.pow((1 + taxaJuros), numeroprestacoes) - 1)) );
      
      document.getElementById("fp_valor_prestacao").innerHTML = valorPrestacaoPrice;
      document.getElementById("resPRICE1").style.display = 'block';
    break;

    case "price2":
      OcultarRespostas();
      document.getElementById("resPRICE2").style.display = 'block';   
      
      sdot = document.getElementById("fp_ordem_t").value;

      if(sdot >= 0 && sdot <= numeroprestacoes)
      {
        Price_sdot = ((Math.pow((1 + taxaJuros), (numeroprestacoes - sdot)) - 1 ) / (Math.pow((1 + taxaJuros), (numeroprestacoes - sdot)) * taxaJuros));
        Price_sdot2 = (valorFinanciado * (((Math.pow((1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));

        Price_sdotFinal = Price_sdot2 * Price_sdot;
      }
      else
      {
        Price_sdotFinal = 0;
      }
        document.getElementById("fp_saldo_devedor_t").innerHTML = Price_sdotFinal;

    break;

    case "price3":
      OcultarRespostas();
      document.getElementById("resPRICE3").style.display = 'block';

      sdotm = document.getElementById("fp_ordem_t1").value;
        
      if(sdotm >= 1 && sdotm <= numeroprestacoes)
      {
        price_sdotm2 = (valorFinanciado * (((Math.pow((1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        price_sdotm1 = ((Math.pow((1 + taxaJuros), (numeroprestacoes - sdotm + 1 )) - 1) / (Math.pow((1 + taxaJuros), (numeroprestacoes - sdotm + 1 )) * taxaJuros));
        
        price_sdotmFinal = price_sdotm1 * price_sdotm2;
      }
      else
      {
        price_sdotmFinal = 0;
      }
        document.getElementById("fp_saldo_devedor_t1").innerHTML = price_sdotmFinal;
        
    break;

    case "price4":
      OcultarRespostas();

      vpa = (valorFinanciado * (((Math.pow((1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
      vpaFinal = vpa - taxaJuros * valorFinanciado;

      document.getElementById("fp_valor_amortizacao_1").innerHTML = vpaFinal;
      document.getElementById("resPRICE4").style.display = 'block';
    break;

    case "price5":
      OcultarRespostas(); 

      vpaotOrdem = document.getElementById("fp_ordem_t3").value;
      
      if(vpaotOrdem > 0 && vpaotOrdem <= numeroprestacoes)
      {
        vpaot = (valorFinanciado * (((Math.pow((1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        vpaot2 = vpaot - taxaJuros * valorFinanciado;
        vpaotFinal = vpaot2 * (Math.pow((1 + taxaJuros),(vpaotOrdem - 1)));
      }
      else
      {
        vpaotFinal = 0;
      }
      document.getElementById("fp_valor_amortizacao_t").innerHTML = vpaotFinal;
      
      document.getElementById("resPRICE5").style.display = 'block';
    break;

    case "price6": //Amortizações acumuladas até o período (t)
      OcultarRespostas();

      aaapt = document.getElementById("fp_ordem_t4").value;

      if(aaapt > 0 && aaapt <= numeroprestacoes)
      { 
        aaapt1 = (valorFinanciado * (((Math.pow((1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        aaapt2 = ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1 ) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros));
        aaapt3 = ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaapt)) - 1) / ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaapt)) * taxaJuros)));

        aaaptFinal = aaapt1 * (aaapt2 - aaapt3);
      }
      else
      {
        aaaptFinal = 0;
      }
      document.getElementById("fp_valor_amortizacao_ta").innerHTML = aaaptFinal;
      document.getElementById("resPRICE6").style.display = 'block';
    break;

    case "price7": //Amortizações acumuladas entre os período (t) e (t + k)
      OcultarRespostas(); 

      aaept = parseFloat(document.getElementById("fp_ordem_t5").value);
      aaepk = parseFloat(document.getElementById("fp_ordem_t5k").value);

      if(aaept >= 0 && aaept < aaepk && aaepk > aaept && aaepk <= numeroprestacoes )
      {
        aaeptk = aaepk - aaept;
        
        aaeptk1 = (valorFinanciado * (((Math.pow(( 1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        aaeptk2 = ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaept)) - 1) / ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaept)) * taxaJuros)));
        aaeptk3 = ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaept - aaeptk)) - 1) / ((Math.pow((1 + taxaJuros), (numeroprestacoes - aaept - aaeptk)) * taxaJuros)));

        aaeptkFinal = aaeptk1 * (aaeptk2 - aaeptk3);
      }
      else
      {
      aaeptkFinal = 0;
      }
      document.getElementById("fp_valor_amortizacao_tk").innerHTML = aaeptkFinal;


      document.getElementById("resPRICE7").style.display = 'block';
    break;

    case "price8":
      OcultarRespostas();

      vpjot = parseFloat(document.getElementById("fp_ordem_t2").value);

      if(vpjot > 0 && vpjot <= numeroprestacoes)
      {
        vpjot1 = (valorFinanciado * (((Math.pow(( 1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        vpjot2 = ((Math.pow((1+taxaJuros), (numeroprestacoes - vpjot + 1)) - 1) / ((Math.pow((1+taxaJuros), (numeroprestacoes - vpjot + 1)) * taxaJuros)));
        vpjotFinal = taxaJuros * vpjot1 * vpjot2; 
      }
      else
      {
        vpjotFinal = 0;
      }
      document.getElementById("fp_valor_juros_t").innerHTML = vpjotFinal;

      document.getElementById("resPRICE8").style.display = 'block';
    break;

    case "price9":
      OcultarRespostas();

      vjaot = parseFloat(document.getElementById("fp_ordem_t6").value);
      if(vjaot >= 0 && vjaot <= numeroprestacoes)
      {
        vjaot1 = (valorFinanciado * (((Math.pow(( 1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        vjaot2 = ((Math.pow((1 + taxaJuros), numeroprestacoes) - 1) / (Math.pow((1 + taxaJuros), numeroprestacoes) * taxaJuros));
        vjaot3 = ((Math.pow((1 + taxaJuros), (numeroprestacoes - vjaot )) - 1) / (Math.pow((1 + taxaJuros), (numeroprestacoes - vjaot )) * taxaJuros))

        vjaotFinal = vjaot1 * (vjaot - vjaot2 + vjaot3);
      }
      else
      {
        vjaotFinal = 0;
      }
      document.getElementById("fp_valor_juros_ta").innerHTML = vjaotFinal;

      document.getElementById("resPRICE9").style.display = 'block';
    break;

    case "price10":
      OcultarRespostas();
      
      vjaepot = parseFloat(document.getElementById("fp_ordem_t7").value);
      vjaepok = parseFloat(document.getElementById("fp_ordem_t7k").value);
      
      if(vjaepot >= 0 && vjaepot < vjaepok && vjaepok > vjaepot && vjaepok <= numeroprestacoes)
      {
        vjaepotk1 = (valorFinanciado * (((Math.pow(( 1 + taxaJuros), numeroprestacoes)) * taxaJuros) / ((Math.pow((1 + taxaJuros), numeroprestacoes)) - 1)));
        vjaepotk2 = ((Math.pow((1+taxaJuros), (numeroprestacoes - vjaepot)) - 1) / (Math.pow((1 + taxaJuros), (numeroprestacoes - vjaepot)) * taxaJuros));
        vjaepotk3 = ((Math.pow((1+taxaJuros), (numeroprestacoes - vjaepot - vjaepok)) - 1) / (Math.pow((1+taxaJuros), (numeroprestacoes - vjaepot - vjaepok)) * taxaJuros));

        vjaepotkFinal = vjaepotk1 * (vjaepok - vjaepotk2 + vjaepotk3);
      }
      else
      {
        vjaepotkFinal = 0;
      }
      document.getElementById("fp_valor_juros_tk").innerHTML = vjaepotkFinal;

      document.getElementById("resPRICE10").style.display = 'block';
    break;
  }
  }
 }