import Axios from "axios";
Axios.get(" http://localhost:4000/users")
    .then(
        resp => {
            data = resp.data;
            data.map(e =>{
                console.log(`${e.first_name},${e.last_name},${e.email}`);
            });
        })
    .catch(
        error =>{
            console.log(error);
        });