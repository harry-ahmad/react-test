import {endpoints} from './api-end-points';
import axios from 'axios';

class RepositoriesService {  

  async list(){    
    const res = await axios.get(endpoints.repositories.list);
    return res;
  }

}
const repositoriesService = new RepositoriesService();
export default repositoriesService;
