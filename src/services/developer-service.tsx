import {endpoints} from './api-end-points';
import axios from 'axios';

class DeveloperService {  

  async list(){    
    const res = await axios.get(endpoints.developers.list);
    return res;
  }

}
const developerService = new DeveloperService();
export default developerService;
