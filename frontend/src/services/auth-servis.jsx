import axios from "axios";


class AuthService {

    static register(body){
        console.log("radi")
        console.log(body)
    
        fetch("http://127.0.0.1:8000/api/v1/backend_react/testRegister/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
            
          } ) 
            .then((res) => res.json())
            .then((data) => {
                console.log("ovo je data")
              console.log(data)
              
            });
          
    }

    static login(body){
      return axios.post("http://127.0.0.1:8000/api/v1/backend_react/testLogin/", body); 

      }

    static logout(history){
      localStorage.removeItem('app_user_data');
      history.push('/');
    }
    static storeUserData(user_data){
      localStorage.setItem('app_user_data', JSON.stringify(user_data))
    }

    static getUserData(){
      let userData = localStorage.getItem('app_user_data');
      console.log("OVO JE userData")
      console.log(userData)
      if (userData){
        return JSON.parse(userData)
      }
      else{
      return null;
    } }


};
export default AuthService;