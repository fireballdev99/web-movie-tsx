import Axios from 'axios';
import { API_BASEURL } from './config';

export const getAllMovies = async () => {
    const res = await Axios.get(
      `${API_BASEURL}/products?page=1&per_page=100&search=&search_fields=name`
    );
    return res.data.data;
  };
  
  export const getAllTags = async () => {
    const res = await Axios.get(
      `${API_BASEURL}/tags?page=1&per_page=100&search=&search_fields=name`
    );
    return res.data.data;
  };

  export const findMovie = async(id:string)=>{
    const res = await Axios.get(`${API_BASEURL}/products/${id}`)
    return res.data.product[0]
  }