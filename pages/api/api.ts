import Axios from 'axios';
import { API_BASEURL } from './config';
const LOCAL_URL = 'http://localhost:5002'

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

  export const findMovieCategory = async(id:number)=>{
    const res = await Axios.get(`${API_BASEURL}/products/find?page=1&per_page=100&tags=${id}`)
    return res.data.data;
  }

  export const findOneTags = async(id:number)=>{
    const res = await Axios.get(`${API_BASEURL}/tags/${id}`)
    return res.data.tag
    
  }