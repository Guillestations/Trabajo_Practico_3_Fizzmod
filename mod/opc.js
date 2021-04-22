const operacion = ({num1, num2, operacion}) =>{
    const error = {
        num1 : {valor: num1 || null, tipo: typeof num1},
        num2 : {valor: num2 || null, tipo: typeof num2},
        operacion:{valor: operacion, tipo: typeof operacion}
    }
    const result = 0;
    if(isNaN(num1) || isNaN(num2)){
        return error;
    }else if (operacion === 'suma' || operacion === 'resta') {
        result = num1 + num2;
    }
        
    return {num1, num2, operacion, result};
}
export default operacion;
console.log(operacion(1,2,'suma'))