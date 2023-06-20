import useFetch from "./useFetch";

const {data,isPending,error} = useFetch('http://localhost:5000/api/service/services');
console.log(data);