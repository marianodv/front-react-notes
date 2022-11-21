
function Note(props){

    const {id,title,site_id} = props.data

    return(
        <div>
            <h3>{id} - {title || "**"}</h3>
            <p>{site_id || "****"}</p>
            <hr/>
        </div>
    )
}

export default Note