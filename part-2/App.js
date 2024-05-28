const App = () => (
    <div>
        <Tweet
            username="elephant"
            name="Elle"
            date={new Date().toDateString()}
            message="Hi, hope you have a nice day!"
        />
        <Tweet
            username='turtle'
            name='Tommy'
            date={new Date().toDateString()}
            message='I love swimming'
        />
        <Tweet
            username='seal'
            name='Sally'
            date={new Date().toDateString()}
            message='I love playing with my beach ball'
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))