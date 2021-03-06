import { createContext, useState , useEffect} from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({children}) => {

    const [db, setDb] = useState(null)
    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //const api = helpHttp();
    const url = "http://localhost:5000/santos";
    let api = helpHttp();



    useEffect(() => {
        setLoading(true)
        helpHttp().get(url).then(res => {
           // console.log(res)
            if(!res.err){
                setDb(res)
                setError(null)
            }else{
                setDb(null)
                setError(res)
            }
            setLoading(false)
        })
        
    }, [url])


    const createData = (data) => {

        let options = {
            body:data, 
            headers:{
                "content-type":"application/json"
            }
        }

        data.id = Date.now();
        api.post(url, options).then((res) => {
            console.log(res)
            if(!res.err){
                setDb([...db, res])
            }else{
                setError(res)
            }
        })
        
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        console.log(endpoint)

        let options = {
            body:data, 
            headers:{
                "content-type":"application/json"
            }
        }

        api.put(endpoint, options).then((res) => {
            console.log(res)
            if(!res.err){
                let newData = db.map((el) => (el.id === data.id? data: el))
                setDb(newData)
            }else{
                setError(res)
            }
        })
        
    }

    const deleteData = (id) => {
        let isDelete = window.confirm("Esta seguro de eliminar el registro con el id " + id)
        
        if (isDelete) {
            let endpoint = `${url}/${id}`
            let options = {               
                headers:{
                    "content-type":"application/json"
                }
            }
            api.del(endpoint, options).then(res =>{
                if(!res.err){
                    let newData = db.filter(el => (el.id !== id))
                    setDb(newData)
                }else{
                    setError(res)
                }
            })           
           
        }
    }

    const data = {db, error, loading, createData, deleteData, updateData, dataToEdit, setDataToEdit}
    console.log(data)
    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
}

export {CrudProvider};
export default CrudContext;