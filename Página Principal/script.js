
const dias =document.querySelector('#dias').addEventListener('change',maquina)

var cor1="#ff6300"
var cor2="#ff4307"

var graficoAtual = 1

var xValues1 = ['1H','2H','3H','4H','5H','6H','7H','8H','9H','10H','11H','12H','13H','14H','15H','16H','17H','18H','19H','20H','21H','22H','23H','24H'];
var yValues1 = [13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,13,17,10,13,12,15,11,15,11];
var grafico1 =
new Chart("grafico1", {
  type: "bar",
  data: {
    labels: xValues1,
    datasets: [{
      label:"Quantidade de Chamadas",
      backgroundColor: cor1,
      borderColor: "rgba(0,0,0,0.1)",
        radius:10,
        hoverRadius:15,
      fill:true,
      data: yValues1
    }]
  }
});

var xValues2 = ['Dificil','Media','Facil'];
var yValues2 = [13,12,15];
var grafico2 =
new Chart("grafico2", {
  type: "polarArea",
  data: {
    labels: xValues2,
    datasets: [{
      label:"Nivel da chamada",
      backgroundColor: ["red","yellow","green"],
      borderColor: "rgba(0,0,0,0.1)",
        radius:10,
        hoverRadius:15,
      fill:true,
      data: yValues2
    }]
  }
});

var grafico3 =
new Chart("grafico3", {
  type: "bubble",
   data: {
    datasets: [{
      label: 'Tempo medio/Atendimentos/Horas',
      data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
        {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
      backgroundColor: ['red','green','tomato','blue']
    }]
}
});


//Mudar gráficos
function maquina(){
    let options= document.querySelector('#dias').value.toLowerCase()
    if(options== '1'){
      document.querySelector("#teste").classList.add("grid")
      document.querySelector("#graf2").value = '1dia';
      graficoAtual = 1
       document.querySelector(".chart-2").style.display = 'grid';
        grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
        xValues1 = ['1H','2H','3H','4H','5H','6H','7H','8H','9H','10H','11H','12H','13H','14H','15H','16H','17H','18H','19H','20H','21H','22H','23H','24H'];
        yValues1 = [13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,13,17,10,13,12,15,11,15,11];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Quantidade de Chamadas",
              backgroundColor:cor1,
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
        xValues2 = ['Dificil','Media','Facil'];
        yValues2 = [13,12,15];
        grafico2 =
        new Chart("grafico2", {
          type: "polarArea",
          data: {
            labels: xValues2,
            datasets: [{
              label:"Nivel da chamada",
              backgroundColor: ["red","yellow","green"],
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues2
            }]
          }
        });
        
        grafico3 =
        new Chart("grafico3", {
          type: "bubble",
           data: {
            datasets: [{
              label: 'Tempo medio/Atendimentos/Horas',
              data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
                {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
              backgroundColor: ['red','green','tomato','blue']
            }]
        }
        });
               
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    else{
      graficoAtual = 2
      document.querySelector("#graf2").value = '1dia';
      document.querySelector("#teste").classList.remove("grid")
       grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
      document.querySelector(".chart-2").style.display = 'none';
      yValues1 = [8,8,8,8,7,6,6,6,6,5.5,5,4,4,3,3,3,2,2];
      xValues1 = ['Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick','Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick'];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Chamadas Atendidas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
   
        
        var xValues3 = ['Mario','Elizabet','Mikael','Alberto','Flavia','Rafael','Fabio','Jose','Maria','Anthony','Maiara','Antonio','Zezinho','Davi','Maria','Antonio','Matheus','Roberta'];
        var yValues3 = [8,8,8,8,7,6,6,6,6,5.5,5,4,4,3,3,3,2,2];

         grafico3 =
        new Chart("grafico3", {
          type: "bar",
          data: {
            labels: xValues3,
            datasets: [{
              label:"Chamadas realizadas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues3
            }]
          }
        });
      
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Mudar dias
document.querySelector("#graf2").addEventListener('change',gg)
function gg(){
    let opt = document.querySelector("#graf2").value.toLowerCase();
   document.querySelector(".title").innerHTML = "Gráfico Diário"
 if (  graficoAtual == 1){
        switch(opt){
            case '1dia':    
                 grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
        xValues1 = ['1H','2H','3H','4H','5H','6H','7H','8H','9H','10H','11H','12H','13H','14H','15H','16H','17H','18H','19H','20H','21H','22H','23H','24H'];
        yValues1 = [13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,13,17,10,13,12,15,11,15,11];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Quantidade de Chamadas",
              backgroundColor: cor1,
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
        xValues2 = ['Dificil','Media','Facil'];
        yValues2 = [13,12,15];
        grafico2 =
        new Chart("grafico2", {
          type: "polarArea",
          data: {
            labels: xValues2,
            datasets: [{
              label:"Nivel da chamada",
              backgroundColor: ["red","yellow","green"],
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues2
            }]
          }
        });
        
        grafico3 =
        new Chart("grafico3", {
          type: "bubble",
           data: {
            datasets: [{
              label: 'Tempo medio/Atendimentos/Horas',
              data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
                {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
              backgroundColor: ['red','green','tomato','blue']

            }]
        }
        });
              
            break;
            case '7dias':    
            grafico1.destroy();
            grafico2.destroy();
            grafico3.destroy();
            xValues1 = ['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7'];
            yValues1 = [13,12,15,11,15,11,13];
             grafico1 =
            new Chart("grafico1", {
              type: "bar",
              data: {
                labels: xValues1,
                datasets: [{
                  label:"Quantidade de Chamadas",
                  backgroundColor: cor1,
                  borderColor: "rgba(0,0,0,0.1)",
                    radius:10,
                    hoverRadius:15,
                  fill:true,
                  data: yValues1
                }]
              }
            });
            
            xValues2 = ['Dificil','Media','Facil'];
            yValues2 = [92,84,105];
            grafico2 =
            new Chart("grafico2", {
              type: "polarArea",
              data: {
                labels: xValues2,
                datasets: [{
                  label:"Nivel da chamada",
                  backgroundColor: ["red","yellow","green"],
                  borderColor: "rgba(0,0,0,0.1)",
                  fill:true,
                  data: yValues2
                }]
              }
            });
            
            grafico3 =
            new Chart("grafico3", {
              type: "bubble",
               data: {
                datasets: [{
                  label: 'Tempo medio/Atendimentos/Horas',
                  data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
                    {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
                  backgroundColor: ['red','green','tomato','blue']
                }]
            }
            });
                  
                break;
            case '15dias':    
            grafico1.destroy();
            grafico2.destroy();
            grafico3.destroy();
            xValues1 = ['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7','Dia 8','Dia 9','Dia 10','Dia 11','Dia 12','Dia 13','14 Dia','Dia 15'];
            yValues1 = [13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,13,17,10,13,12,15,11,15,11];
             grafico1 =
            new Chart("grafico1", {
              type: "bar",
              data: {
                labels: xValues1,
                datasets: [{
                  label:"Quantidade de Chamadas",
                  backgroundColor: cor1,
                  borderColor: "rgba(0,0,0,0.1)",
                    radius:10,
                    hoverRadius:15,
                  fill:true,
                  data: yValues1
                }]
              }
            });
            
            xValues2 = ['Dificil','Media','Facil'];
            yValues2 = [132,145,112];
            grafico2 =
            new Chart("grafico2", {
              type: "polarArea",
              data: {
                labels: xValues2,
                datasets: [{
                  label:"Nivel da chamada",
                  backgroundColor: ["red","yellow","green"],
                  borderColor: "rgba(0,0,0,0.1)",
                    radius:10,
                    hoverRadius:15,
                  fill:true,
                  data: yValues2
                }]
              }
            });
            
            grafico3 =
            new Chart("grafico3", {
              type: "bubble",
               data: {
                datasets: [{
                  label: 'Tempo medio/Atendimentos/Horas',
                  data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
                    {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
                  backgroundColor: ['red','green','tomato','blue']
                }]
            }
            });
                  
                break;
            case '1mes': 
            document.querySelector(".title").innerHTML = "Gráfico Mensal"
            grafico1.destroy();
            grafico2.destroy();
            grafico3.destroy();
            xValues1 = ['Dia 1','Dia 2','Dia 3','Dia 4','Dia 5','Dia 6','Dia 7','Dia 8','Dia 9','Dia 10','Dia 11','Dia 12','Dia 13','14 Dia','Dia 15','Dia 16','Dia 17','Dia 18','Dia 19','Dia 20','Dia 21','Dia 22','Dia 23','Dia 24','Dia 25','Dia 26','Dia 27','Dia 28','Dia 29','Dia 30'];
            yValues1 = [13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,13,17,10,13,12,15,11,15,11,11,15,11,13,17,10];
             grafico1 =
            new Chart("grafico1", {
              type: "bar",
              data: {
                labels: xValues1,
                datasets: [{
                  label:"Quantidade de Chamadas",
                  backgroundColor:cor1,
                  borderColor: "rgba(0,0,0,0.1)",
                    radius:10,
                    hoverRadius:15,
                  fill:true,
                  data: yValues1
                }]
              }
            });
            
            xValues2 = ['Dificil','Media','Facil'];
            yValues2 = [243,212,211];
            grafico2 =
            new Chart("grafico2", {
              type: "polarArea",
              data: {
                labels: xValues2,
                datasets: [{
                  label:"Nivel da chamada",
                  backgroundColor: ["red","yellow","green"],
                  borderColor: "rgba(0,0,0,0.1)",
                    radius:10,
                    hoverRadius:15,
                  fill:true,
                  data: yValues2
                }]
              }
            });
            
            grafico3 =
            new Chart("grafico3", {
              type: "bubble",
               data: {
                datasets: [{
                  label: 'Tempo medio/Atendimentos/Horas',
                  data: [{y:21,x:30,r:15}, {y:23,X:30,r:15}, {x: 43,y:10,r:10},{x:24,y:30,r:15}, {x: 44,y:10,r:10},{x:25,y:30,r:15}, {x: 45,y:10,r:10},{x:26,y:30,r:15}, {x: 46,y:10,r:10},
                    {x:27,y:37,r:15}, {x: 48,y:10,r:10},{x:28,y:30,r:15}, {x: 49,y:10,r:10},{x:29,y:30,r:15}, {x: 40,y:10,r:10},{x:20,y:30,r:15}, {x: 30,y:10,r:10},{x:50,y:30,r:15}, {x: 60,y:10,r:10},{x:70,y:30,r:15}, {x: 80,y:10,r:10}],
                  backgroundColor: ['red','green','tomato','blue']
                }]
            }
            });
                  
                break;
         
        }
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
 else if (  graficoAtual == 2){
        switch(opt){
       case '1dia':  
            
        grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
         yValues1 = [8,8,8,8,7,6,6,6,5,5,4,4,3,2];
         xValues1 = ['Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick','Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick'];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Chamadas Atendidas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
   
        var xValues3 = ['Mario','Elizabet','Mikael','Alberto','Flavia','Rafael','Fabio','Jose','Maria','Anthony','Maiara','Antonio','Zezinho','Davi','Maria','Antonio','Matheus','Roberta'];
         yValues3 = [10,8,8,7,7,7,6,6,6,6,5,5,4,4,4,3,3,2];

         grafico3 =
        new Chart("grafico3", {
          type: "bar",
          data: {
            labels: xValues3,
            datasets: [{
              label:"Chamadas realizadas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues3
            }]
          }
        });
              
            break;
            case '7dias':    
                grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
        yValues1 = [30,22,21,21,21,20,20,19,18,18,16,12,12,11];
        xValues1 = ['Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick','Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick'];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Chamadas Atendidas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
    
        var xValues3 = ['Mario','Elizabet','Mikael','Alberto','Flavia','Rafael','Fabio','Jose','Maria','Anthony','Maiara','Antonio','Zezinho','Davi','Maria','Antonio','Matheus','Roberta'];
         yValues3 = [8,8,7,7,7,7,6,6,6,6,5,5,5,5,4,4,3,2];

         grafico3 =
        new Chart("grafico3", {
          type: "bar",
          data: {
            labels: xValues3,
            datasets: [{
              label:"Chamadas realizadas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues3
            }]
          }
        });
              
            break;
            case '15dias':    
                 grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
        yValues1 = [8,8,7,7,7,6,6,6,5,5,4,4,3,2];
        xValues1 = ['Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick','Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick'];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Chamadas Atendidas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });

        
         var xValues3 = ['Mario','Elizabet','Mikael','Alberto','Flavia','Rafael','Fabio','Jose','Maria','Anthony','Maiara','Antonio','Zezinho','Davi','Maria','Antonio','Matheus','Roberta'];
         yValues3 = [8,8,8,7,7,6,6,6,5,5,5,5,5,4,4,4,3,2];

         grafico3 =
        new Chart("grafico3", {
          type: "bar",
          data: {
            labels: xValues3,
            datasets: [{
              label:"Chamadas realizadas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues3
            }]
          }
        });
              
            break;
            case '1mes':    
            document.querySelector(".title").innerHTML = "Gráfico Mensal"
          grafico1.destroy();
        grafico2.destroy();
        grafico3.destroy();
        yValues1 = [8,8,8,7,7,6,6,6,5,5,4,4,3,2];
        xValues1 = ['Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick','Joao','Maria','Antonio','Matheus','Roberta','Patricia','Patrick'];
         grafico1 =
        new Chart("grafico1", {
          type: "bar",
          data: {
            labels: xValues1,
            datasets: [{
              label:"Chamadas Atendidas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues1
            }]
          }
        });
        
        
        var xValues3 = ['Mario','Elizabet','Mikael','Alberto','Flavia','Rafael','Fabio','Jose','Maria','Anthony','Maiara','Antonio','Zezinho','Davi','Maria','Antonio','Matheus','Roberta'];
         yValues3 = [8,8,8,8,7,7,7,7,6,6,6,5,5,4,4,4,3,2];

         grafico3 =
        new Chart("grafico3", {
          type: "bar",
          data: {
            labels: xValues3,
            datasets: [{
              label:"Chamadas realizadas",
              backgroundColor: "red",
              borderColor: "rgba(0,0,0,0.1)",
                radius:10,
                hoverRadius:15,
              fill:true,
              data: yValues3
            }]
          }
        });
              
            break;

        }
    }

}

