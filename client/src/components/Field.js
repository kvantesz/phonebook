import Person from "./Person"

const Field = ({allPersons, handleDelete}) => {
    return (
        <div className="field">
            {
                allPersons.map(person => <li key={person.name}> <Person person={person} handleDelete={handleDelete} /> </li>)
            }
        </div>
    )
}

export default Field