function updateTimer() {
  const future = Date.parse("jul 27, 2022 00:00:00"); // Retorna quantos milissegundos se passaram desde 01/01/1970 até a data especificada. 
  const now = new Date(); // Retorna quantos milissigundos se passaram desde 01/01/1970 até agora.
  const diff = future - now; // Calcula quantos milisigundos ainda se passarão de agora até a data especificada e guarda na constante "diff".
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Math.floor() retorna a parte inteira de um número, arredondando para baixo.
  const hours = Math.floor(diff / (1000 * 60 * 60));     // (1000*60*60*24) são quantos segundos há em um ano, (1000*60*60) em uma hora,
  const  mins = Math.floor(diff / (1000 * 60));          // (1000*60) em um minuto e (1000) em um segundo. Assim, calculamos quantas de cada
  const secs = Math.floor(diff / 1000);                  // uma dessas unidades há em diff.
  const d = days;               // O número de dias é exatamente o resultado de Math.floor(diff / (1000 * 60 * 60 * 24)), já o número de horas
  const h = hours - days * 24;  // é calculado multiplicando-se o número de dias por 24 e subtraindo-se de Math.floor(diff / (1000 * 60 * 60)).
  const m = mins - hours * 60;  // Analogamente fazemos para calcular o número de minutos e segundos.
  const s = secs - mins * 60;   // Todo esse cálculo é feito sempre que a função updateTImer() for chamada, mas ela ainda não acabou!

  const timeArray = [d,h,m,s]; // Cria um array com o número de dias, horas, minutos e segundos, nessa ordem.
  let counter=0; //Define um contador iniciando em zero.

  const timers = [...document.querySelectorAll(".number")]; // Cria um array com todos os items do html com a classe "number", que são os
                                                            // mostradores dos números na tela.
  timers.forEach(function(element){     // Para cada mostrador desse array ...
  element.innerHTML=timeArray[counter]; // ...mudamos o conteúdo dele para o valor no array de mesmo índice do contador e ...
  counter++;                            // ...somamos 1 ao contador. É importante que os contadores estejam no HTML na ordem certa:
});                                     // dias, horas, minutos e segundos.
};                                      // Agora sim a função acaba.
setInterval('updateTimer()', 1000); //Chama a função updateTimer() a cada 1000 milisegundos, ou seja, uma vez a cada segundo.

