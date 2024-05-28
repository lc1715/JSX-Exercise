const Person = ({ name, age, hobbies }) => {
    return (
        <div>
            <p>Learn some information about this person</p>

            <h3>Name: {name.length > 8 ? name.slice(0, 6) : name}</h3>
            <h3>Age: {age}</h3>

            <h3>
                {hobbies ? hobbies.map(h => (
                    <li>{h}</li>
                )) : 'No hobbies'}
            </h3>

            <h3>{age > 18 ? 'please go vote' : 'you must be 18'}</h3>
        </div >
    )
}
