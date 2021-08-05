import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Message from './Message';
import Loader from './Loader';
//import {CrudProvider} from ./CrudContext
import CrudContext from '../context/CrudContext';
import { useContext } from 'react';




//let url = "http://localhost:5005/santos";

const CrudApi = () => {

    const {loading, error, db} = useContext(CrudContext);

    return (
        <div>
           

            <h2>Crud API</h2>
            <article className="grid-1-2">
                <CrudForm
                    // createData={createData}
                    // updateData={updateData}
                    // dataToEdit={dataToEdit}
                    // setDataToEdit={setDataToEdit}
                />

                {loading && <Loader />}
                {error && (
                    <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545"/>
                )}

                { db &&
                    (<CrudTable />)
                }


               
            </article>
          
            

        </div>
    )
}

export default CrudApi

