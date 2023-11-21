import express, { Request, Response } from "express";

import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const livros = [
    { id: 1, titulo: "Aprendendo TypeScript", autor: "John Doe" },
    { id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith" },
];

app.get("/livros", (req: Request, res: Response) => {
    res.send(livros);
});

app.get("/livros/:id", (req: Request, res: Response) => {

    const livro = livros.find((l) => l.id === parseInt(req.params.id));

    if (!livro) {
        return res.status(404).json({ mensagem: "Livro não encontrado!" });
    }

    res.send(livro);
});

app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo ao meu servidor!");
});

const porta: number = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});