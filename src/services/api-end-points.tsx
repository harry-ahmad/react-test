import { config } from '../Constants';
export const endpoints = {

  developers : {
    list : config.url.API_URL + 'developers',
  },

  repositories : {
    list : config.url.API_URL + 'repositories',
  },
}