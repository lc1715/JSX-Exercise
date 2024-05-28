const Tweet = (props) => {
    return (
        <ul class="tweets">
            <li>Username: {props.username}</li>
            <li>Name: {props.name}</li>
            <li>Date: {props.date}</li>
            <li>Tweet: {props.message}</li>
        </ul>
    )
}