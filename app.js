const express = require("express");

const app = express();

app.get("/", (req, res) => {
    //res.send("Bem-vindo ao meu servidor!");
    res.send(`
    <h1>Bem-vindo ao meu servidor!</h1>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. 
    Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. 
    Copo furadis é disculpa de bebadis, arcu quam euismod magna. 
    Delegadis gente finis, bibendum egestas augue arcu ut est.
    </p>
    `);
});

const porta = 4000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});