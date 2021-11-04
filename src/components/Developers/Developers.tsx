import {useState, useEffect} from "react";
import DeveloperService from "../../services/developer-service";
import Header from "../../views/Header/Header";
import DevelopersView from "../../views/Developers/Developers";
import Spinner from "../../shared/Spinner";

export default function Developers() {
    const [developersList, setDevelopersList] = useState([]);
    const [spinner, setSpinner] = useState(false);
    
    useEffect(() => {
        getDevelopersList();
    }, []);
    
    const getDevelopersList = async ()=>{
        try{
            setSpinner(true);
            const res = await DeveloperService.list();
            setDevelopersList(res.data);
            setSpinner(false);
        }catch(err){
            console.log(err)
            setSpinner(false);
        }
    }
    return (
        <>
            <Header/>
            {developersList.length > 0 && <DevelopersView
                list = {developersList}
            />}
            <Spinner
              spinner = {spinner}
            />
        </>
    );
}
