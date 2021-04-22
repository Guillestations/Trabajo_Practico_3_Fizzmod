const operaciones = ({num1, num2, operacion}) => {
    let resultado = null;
    const error = {
            num1: {
                valor: num1 || null,
                tipo: typeof num1
            },
            num2: {
                valor: num2 || null,
                tipo: typeof num2
            },
            operacion: {
                valor: operacion || null,
                tipo: typeof operacion
            }
    }
    //Controlo los numeros ingresados para realizar las operaciones
    const a = parseInt(num1);
    const b = parseInt(num2);
    //const a = parseFloat(num1);
    //const b = parseFloat(num2);

    if(isNaN(a) || isNaN(b)){
        return error;
    }else if(operacion === 'suma'){
            resultado = a +b; 
    }else if(operacion === 'resta'){
        resultado = a - b; 
    }else if(operacion === 'multiplicacion'){
        resultado = a * b;
    }else if (operacion === 'division') {
         resultado = a / b;
    }
    return {num1, num2, operacion, resultado}; 
}

export default operaciones;