import { Router } from "express"

const filmesRoutes = Router()

let filmesMarcantes = [
    {
        id: Number(Math.floor(Math.random() * 99) +1),
        titulo: "Para todos os garotos que já amei",
        genero: "Romance",
        emCartaz: false
    },
    {
        id: Number(Math.floor(Math.random() * 99) +1),
        titulo: "Enrolados",
        genero: "Animação",
        emCartaz: false,
    },
    {
        id: Number(Math.floor(Math.random() * 99) +1),
        titulo: "Sherek",
        genero: "Animação",
        emCartaz: false,
    }
]

//Rota para buscar todos os elementos do array filmesMarcantes
filmesRoutes.get("/", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})

//Rota para criar novo filmesMarcante
filmesRoutes.post("/", (req, res) => {
    const { titulo, genero, emCartaz } = req.body;

    const novoFilme = {
        id:  Number(Math.floor(Math.random() * 99) +1),
        titulo ,
        genero ,
        emCartaz ,
    }
    filmesMarcantes.push(novoFilme);

    return res.status(201).send(filmesMarcantes)

})

//Rota para buscar o elemento específico do array filmesMarcantes
filmesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id));

    console.log(filme);

    if (!filme) {
    return res.status(404).send({ message: "filme não encontrado!" });
    }

    return res.status(200).send(filme);
});

//Rota para editar uma filme 
filmesRoutes.put("/:id", (req,res) => {
    const { id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id));

    //console.log(filme);

    if (!filme) {
    return res.status(404).send({ message: "filme não encontrado!" });
    }
    const {titulo, genero, emCartaz} = req.body;
    console.log(titulo)

    filme.titulo = titulo
    filme.genero = genero
    filme.emCartaz = emCartaz

    return res.status(200).send({
        message:"filme atualizado!",
        filme,
    })
});

  //Rota para deletar um filme marcante
filmesRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const filme = filmesMarcantes.find((movie) => movie.id === Number(id))

    if(!filme){
        return res.status(404).send({message: "filme não encontrado!"})
    }

    filmesMarcantes = filmesMarcantes.filter((movie) => movie.id !== Number(id))

    return res.status(200).send({message: "filme deletado!",
        filme,})
    }
)

export default filmesRoutes;