const Input = ({newName, setNewName, newNumber, setNewNumber, handleForm}) => {
    return (
        <form>
            <h1 className="App">Phonebook</h1>
            <div className="input-name">
                <label htmlFor="name">Name:</label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="input-number">
                <label htmlFor="number">Number:</label>
                <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
            </div>
            <button onClick={handleForm}>Add new person</button>
        </form>
    )
}

export default Input