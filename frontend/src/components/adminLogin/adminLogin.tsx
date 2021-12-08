import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";



interface UserLoginPageState {
    username : string;
    password : string;
    errorMessage: string;
    isLoggedIn : boolean;
}



export default class AdminLoginPage extends React.Component{
    state: UserLoginPageState;

    constructor(props: Readonly<{}>){
        super(props);

        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            isLoggedIn : false,
           
        }
    
    }
    private formInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const newState = Object.assign(this.state, {
            [ event.target.id ]: event.target.value,
        })

        this.setState(newState);
    }
    private setErrorMessage(message: string){
        const newState = Object.assign(this.state, {
            errorMessage: message,
        });
        this.setState(newState);
    }

    private setLogginState(isLoggedIn: boolean){
        const newState = Object.assign(this.state,{
            isLoggedIn: isLoggedIn,
        });
        this.setState(newState);
    }


    private doLogin(){
        const user = {
            email: this.state.username,
            password: this.state.password,
          };
        
          fetch("http://127.0.0.1:8000/api/v1/users/adminLogin/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
                console.log("ovo je odmah u then")
                console.log(data.token)
              if (data.key) {
                localStorage.clear();
                localStorage.setItem('token', data.token);
              } else {
                localStorage.setItem('token', data.token);
                console.log("sada je sve u redu");
              }
            });
        };



    render(){
        if(this.state.isLoggedIn === true){
            return(
               <></>
            );
        }

        return(
        <Container>
            <Col md={ { span : 6, offset: 3 } }>
            <Card>
                <Card.Body>
                    <Card.Title>
                    <FontAwesomeIcon icon= {faSignInAlt}/> User Login
                    </Card.Title>
                        <Form>
                            <Form.Group>
                                <Form.Label htmlFor="username"> Username</Form.Label>
                                <Form.Control type="text" id="username" value={ this.state.username }  onChange={ event => this.formInputChange(event as any) } />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" id="password" value={ this.state.password } onChange={ event => this.formInputChange(event as any) } />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" onClick={ () => this.doLogin() }  >
                                    Log in
                                </Button>
                            </Form.Group>
                        </Form> 
                        <Alert variant="danger" className= { this.state.errorMessage? '' : 'd-none' }> { this.state.errorMessage } </Alert>
                </Card.Body>
            </Card>
           </Col>
        </Container>
   ) ;}

   
} 