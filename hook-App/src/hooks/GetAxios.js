import  { useEffect } from 'react'
import  Axios  from  'axios'

export const GetAxios = (url) => {

    const getAxios = axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    useEffect(() => {

    },[url])
   

  return;
}
