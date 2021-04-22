const horas = function(){
    let saludo ;
    let date = new Date(); //obtengo la fecha
    let hora = date.getHours();
   
  if (hora >= 6) { saludo = 'Buenos dias!' }
  if (hora >= 13) { saludo = 'Buenos Tardes!' }
  if (hora >= 19) { saludo = 'Buenos Noches!' }
    return saludo
}
  
console.log(horas())
document.getElementById('saludo').innerHTML = horas()


