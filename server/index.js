const express = require("express");
const cors = require("cors");
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());

let persons = [
  {
    id: 1,
    name: "Cassi Faulks",
    number: "512-602-9682",
  },
  {
    id: 2,
    name: "Thacher Seiffert",
    number: "620-186-3213",
  },
  {
    id: 3,
    name: "Pete Mc Carrick",
    number: "389-963-9372",
  },
  {
    id: 4,
    name: "Larissa Olivier",
    number: "162-508-8363",
  },
  {
    id: 5,
    name: "Shalne Turnor",
    number: "778-621-9007",
  },
];
//fetch all persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//fetch a single person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  console.log(typeof id, typeof person);
  res.json(person);
});

//remove a single person
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const filteredPersons = persons.filter((person) => person.id !== id);
  console.log(`person at ${id} id has been deleted`);
  res.json(filteredPersons);
});

app.post("/api/persons", (req, resp) => {
  const body = req.body;

  const generateId = () => {
    const maxId = Math.max(...persons.map((person) => person.id));
    return maxId + 1;
  };

  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  persons = persons.concat(newPerson);

  resp.json(persons);
});

//add person
app.listen(3003, () => {});
