import "./App.css";
import { useState, useEffect } from "react";
//Components
import Input from "./components/Input";
import Field from "./components/Field";
import personServices from "./services/personServices";

function App() {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [allPersons, setAllPersons] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    personServices.getAll().then(resp => setAllPersons(resp.data))
  },[refreshKey])

  const handleForm = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber 
    }

    personServices.create(newPerson)
    
    setNewName('')
    setNewNumber('')

    setRefreshKey(refreshKey + 1)
  }

  const handleDelete = (id) => {
    personServices.remove(id)
    setRefreshKey(refreshKey + 1)
  }

  return <div className="App">
    <Input newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleForm={handleForm} />
    <Field allPersons={allPersons} handleDelete={handleDelete} />
  </div>;
}

export default App;
