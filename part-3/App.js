const App = () => (
    <div>
        <Person name='Alice' age={23} hobbies={['roller blading', 'hiking', 'reading']} />
        <Person name='Christopher' age={12} />
        <Person name='Cloey' age={50} hobbies={['sewing', 'baking', 'swimming']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'))