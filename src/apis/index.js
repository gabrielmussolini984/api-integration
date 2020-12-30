import axios from 'axios';

export const pipeDriveUrl = axios.create({
  baseURL: 'https://api.pipedrive.com/v1/',
});
export const blingUrl = axios.create({
  baseURL: 'https://bling.com.br/Api/v2/',
});
