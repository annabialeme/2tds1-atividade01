import { Router } from "express"

const docesRoutes = Router()

let guloseimas = [
    {
        id: Number(Math.floor(Math.random() * 99) +1),
        nome: "Trufa",
        preco: 8.5,
    },
    {
        id:  Number(Math.floor(Math.random() * 99) +1),
        nome: "Chocolate",
        preco: 5.0,
    },
    {
        id:  Number(Math.floor(Math.random() * 99) +1),
        nome: "Cocada",
        preco: 3.0,
    },
];
//Rota para buscar todos os elementos do array guloseimas
docesRoutes.get("/", (req, res) => {
    return res.status(200).send(guloseimas)
})

//Rota para criar nova guloseima
docesRoutes.post("/", (req, res) => {
    const { nome, preco } = req.body;

    const novoDoce = {
        id:  Number(Math.floor(Math.random() * 99) +1),
        nome ,
        preco , 
    }
    guloseimas.push(novoDoce);

    return res.status(201).send(guloseimas)

})

//Rota para buscar o elemento específico do array guloseima
docesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const guloseima = guloseimas.find((doce) => doce.id === Number(id));

    console.log(guloseima);

    if (!guloseima) {
    return res.status(404).send({ message: "Guloseima não encontrada!" });
    }

    return res.status(200).send(guloseima);
});

  //Rota para editar uma guloseima 
docesRoutes.put("/:id", (req,res) => {
    const { id } = req.params

    const guloseima = guloseimas.find((doce) => doce.id === Number(id));

    //console.log(guloseima);

    if (!guloseima) {
    return res.status(404).send({ message: "Guloseima não encontrada!" });
    }
    const {nome, preco} = req.body;
    console.log(nome)

    guloseimas.nome = nome
    guloseimas.preco = preco

    return res.status(200).send({
        message:"Guloseima atualizada!",
        guloseimas,
    })
});

  //Rota para deletar uma guloseima
docesRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const guloseima = guloseimas.find((doce) => doce.id === Number(id))

    if(!guloseimas){
        return res.status(404).send({message: "Guloseima não encontrada!"})
    }

    guloseimas = guloseimas.filter((doce) => doce.id !== Number(id))

    return res.status(200).send({message: "Guloseima deletada!",
        guloseima,})
    }
)

export default docesRoutes;