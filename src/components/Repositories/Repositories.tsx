import {useState, useEffect} from "react";
import RepositoriesService from "../../services/repositories-service";
import Header from "../../views/Header/Header";
import RepositoriesView from "../../views/Repositories/Repositories";
import Spinner from "../../shared/Spinner";

export default function Repositories() {
    const [repositoriesList, setRepositoriesList] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        getDevelopersList();
    }, []);
    
    const getDevelopersList = async ()=>{
      setSpinner(true);
      try{
          const res = await RepositoriesService.list();
          setRepositoriesList(res.data);
          setSpinner(false);
      }catch(err){
          console.log(err)
          setSpinner(false);
      }
    }
    return (
        <>
            <Header/>
            {repositoriesList.length > 0 && <RepositoriesView
                list = {repositoriesList}
            />}
            <Spinner
              spinner = {spinner}
            />
        </>
    );
}
