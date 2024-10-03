import { Router } from "express"

const planetasRoutes = Router()

let planetas = [
    {
        id: Number(Math.floor(Math.random() * 999999) +1),
        nome: "Dev",
        genero: 13.3 ,
        agua: false, // Indicação de existência de água
        atm: [
            "JS",
            "NODE",
            "VS",
            "Code"
        ]
    }
]

//Rota para cadastrar um novo planeta
planetasRoutes.get("/", (req, res) => {
        return res.status(200).send(planetas)
})


//Rota para criar novo filmesMarcante
planetasRoutes.post("/", (req, res) => {
    const {
        nome,
        temperatura,
        agua,
        atm
    } = req.body;

    if (!nome || !temperatura || !agua) {
        return res.status(400).send({
            message: "Os campos nome, temperatura e água sao obrigatórios",
        });
    }
    
    //Validação de existência de água
    if (agua != "sim" && agua != "não"){
        return res.status(400).send({
            message: "Digite 'sim' ou 'não'!"
    });
}

    const novoPlaneta = {
        id:  Number(Math.floor(Math.random() * 99) +1),
        nome ,
        temperatura ,
        agua ,
        atm
    }
    planetas.push(novoPlaneta);

    return res.status(201).send({
        message: "Planeta cadastrado!",
        novoPlaneta, 
    })

})


planetasRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const filme = planetas.find((movie) => movie.id === Number(id));

    if (!filme) {
    return res.status(404).send({ message: "Planeta nao encontrado!" });
    }

    planetas= planetas.filter((movie) => movie.id === Number(id));

    return res.status(200).send({ message: "Planeta deletado",
        filme})

    })
export default planetasRoutes