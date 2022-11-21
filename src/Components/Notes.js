import { useState, useEffect } from "react"
import Note from "../Components/Note"
import {getAll} from "../Services/notesServices"

function Notes(){
    const [loading, setLoading] = useState(true)
    const [listado, setListado] = useState([])

    useEffect(
        ()=>{
            const init = async ()=>{
                const document = await getAll()
                setListado(document.data.results)
                console.log(document.data.results)
                setLoading(false)
            }

            init()
        }
        ,
        []
    )

    if (loading){
        return(
            <>
                loading...
            </>
        )
    }else{
        return(
            <>
                {listado.map((nota)=><Note data={nota} />)}
            </>
        )
    }
}

export default Notes