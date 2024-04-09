const express = require("express");
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Enpoint workds");
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get("/notes", async (req, res) => {
try {
    const result = await prisma.note.findMany();
    res.status(200).json(result).send("Notes fetched successfully")
} catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error")
}
})


app.post("/notes" ,async(req, res) =>{
    try {
        const note = await prisma.note.create({
            data: {
                title: req.body.title,
                description: req.body.description
            }
        })
        res.status(201).json(note).send("Note created successfully")
    } catch (error) {
        res.status(500).send("Internal Server Error, Error sending POST REQUEST")
    }
})