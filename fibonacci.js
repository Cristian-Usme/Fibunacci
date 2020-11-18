app.get("/fibonacci/:limite", (req, res) => {
    console.log("número límite: ", req.params.limite)
    function fibonacci(numero) {
        let serie = [0, 1];
        for (let i = 2; i < numero; i++) {
            serie[i] = serie[i - 2] + serie[i - 1];
        }
        return serie;
    }
    res.json(fibonacci(req.params.limite))
})