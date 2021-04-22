import fs from 'fs';
const informacion = async () =>{

    let info = {
        contenidoStr: '',
        contenidoObj: {},
        size: 0
    };
    try {
        //Muestro en consola el objeto info
        info.contenidoStr = await fs.promises.readFile('package.json','utf-8');
        info.contenidoObj = JSON.parse(info.contenidoStr);
        info.size = `${info.contenidoStr.length} bits`;
        console.log('\n*********** ACONTINUACION SE MUESTRA LA INFORMACION ************');
        console.log('info = ', info);
        console.log('******************* FIN DE LA INFORMACION ************************\n');
        // Escribo el info.txt
        await fs.promises.writeFile('info.txt', JSON.stringify(info, null, 4));
    }
    catch(error) {
        console.log('\n*********** ACONTINUACION SE MUESTRA EL ERROR ************');
        console.log(`error => ${error}`);
        console.log('*************************************************************\n');
    }
    return info;

}

export default informacion;