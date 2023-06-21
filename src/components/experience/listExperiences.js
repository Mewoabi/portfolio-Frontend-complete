import React, { useState, useEffect } from "react";
import axios from "axios";
import Exps from '../exps';
import useFetch from "../../useFetch";

const ListExperiences = () => {
  const { data,isPending,error } = useFetch("https://dorayback.onrender.com/api/experience/experiences");

 
  
  return ( 
    <div className="experiences">
          {error && <div>{error}</div>}
          {isPending && <div>loading...</div>}
          {data && <Exps data={data}/>}
          {data && console.log(data)}
        </div>
  );
};
export default ListExperiences;
