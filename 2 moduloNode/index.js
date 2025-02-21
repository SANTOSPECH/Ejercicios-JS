const fs = require("fs");

// //usar el metodo writefile para escribir un archivo 
// //fs.writefile(file, data¨options,calback)

// fs.writeFile("archivo.txt","texto modificado", (err)=>{
//     if(err)throw err;
//     console.log("el archivo se ha creado");
// });

fs.readFile("archivo.txt", "utf8", (err,data)=>{
    if (err)throw err;
    console.log(data);
});