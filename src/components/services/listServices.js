import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BiCheck} from 'react-icons/bi';
import useFetch from '../../useFetch';
import List from '../List';

const ListServices = () => {

  const { data,isPending,error } = useFetch("https://dorayback.onrender.com/api/service/services");

  // const [data,setData] = useState([
  //   {
  //     _id: '6491b5b00090fbace92e9931',
  //     title: 'frontend development',
  //     description: 'Offer front end development services for any type of website',
  //     createdAt: '2023-06-20T14:20:32.831Z',
  //     updatedAt: '2023-06-20T14:20:32.831Z',
  //     __v: 0
  //   },
  //   {
  //     _id: '6491b61e8d46fff7d4a9104d',
  //     title: 'Backend development',
  //     description: 'Offer backend development services',
  //     createdAt: '2023-06-20T14:22:22.070Z',
  //     updatedAt: '2023-06-20T14:22:22.070Z',
  //     __v: 0
  //   },
  //   {
  //     _id: '6491b6f1f0ec1c93030b34ff',
  //     title: 'Database Management',
  //     description: 'Database creation, Deployment and Maintenance',
  //     createdAt: '2023-06-20T14:25:53.204Z',
  //     updatedAt: '2023-06-20T14:25:53.204Z',
  //     __v: 0
  //   },
  //   {
  //     _id: '6491b7b5ffc15f09cd9f3180',
  //     title: 'Fullstack pack',
  //     description: 'All frontend, backend + Database maintenance for you',
  //     createdAt: '2023-06-20T14:29:09.382Z',      
  //     updatedAt: '2023-06-20T14:29:09.382Z',  
  //   }    
  // ])

    // const [data, setData] = useState([])

    // useEffect(() =>{
    //     fetch('http://localhost:5000/api/service/services')
    //       .then(response => {
    //         return response.json()
    //       })
    //         .then((dat)=>{
    //           console.log(dat);
    //           setData(dat)
    //         }).catch(err=>{console.log(err)});
    // }, [])

    // {data && console.log(data)}
    
    return (

        // <article className='service' key={d._id}>
        //   <div className="service__head">
        //     <h3>{d.title}</h3>
        //   </div>
        //   <ul className='service__list'>
        //     <li>
        //       <BiCheck className='service__list__icon'/> 
        //       <p> {d.description} </p>
        //     </li>
        //   </ul>
        // </article>
        
        <div className="services">
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {data && <List data={data}/>}
          {data && console.log(data)}
        </div>
          
    
    );
}

export default ListServices;
