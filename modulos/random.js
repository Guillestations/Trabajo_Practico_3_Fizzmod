const random = () =>{
    //Declaro variable a retornar
    let obj = {};

    for(let i=0; i<10000; i++){
        let num = Math.round(Math.random()*20);
        (obj[num]> 0) ?obj[num]++ :obj[num]=1;
    }
  
    let result = 0;
    for(let key in obj){
        result += obj[key];
    }
  
    let objresult = new Map(Object.entries(obj))
    objresult.delete('0');
    return objresult ;
};
export default random;