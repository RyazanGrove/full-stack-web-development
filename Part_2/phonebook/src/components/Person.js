const Person = ({name, number, deleteFunction}) => {
    const deleteFunctionForButton = () => {
        deleteFunction(name)
    }
    return(
        <p>
            {name} {number}
            <button onClick={deleteFunctionForButton}>delete</button>
        </p>
    )
}

export default Person