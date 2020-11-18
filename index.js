const express = require('express')
const app = express()

app.get ('/', function(req, res) {
    res.send ("Hola, Concejo de Medellín"); 
})

app.get ('/Usme', (req, res)=>{
    res.send (`<h1>Hellowda</h1> 
    <h2> Welcome </h2>`)
})

app.get('/json', function(req, res){
    res.json({nombre: "Cristian", Apellido: "Usme"})
})

app.get('/estudintes/:numero_estudiantes', (req, res)=>{
    console.log("El parametro numero_estudiantes es", req.params.numero_estudiantes)
    res.json({numero_estudiantes:10})
})
app.get("/fibonacci", (req, res) => {

    var numero1 = parseInt(prompt("Ingrese el primer número"));
    var numero2 = parseInt(prompt("Ingrese el segundo número"));

    var array = [numero1, numero2];
    
    function fibonacci(i) {

        for (var i = 0; i <= 100; i++) {
            var newnumero = numero1 + numero2;
            array.push(newnumero);
            numero1 = numero2;
            numero2 = newnumero;

            for (x of array) {
                document.write(x + "<br>");
            }
        }
    }
    res.json(fibonacci(10))
})

app.listen(5075, function(){
    console.log("Servidor corriendo en el puerto 5075")
})
