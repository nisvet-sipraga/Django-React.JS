import React, { useContext } from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";
import  { Row , ButtonToolbar, Dropdown, Nav, NavDropdown, Table, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import {  faArrowAltCircleRight, faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalInputAdd from "../inputCategory/modal";
import ModalInputEdit from "../inputCategory/modal";
import TokenAuthentication from "../token/token";
import AdminTokenAuthentication from "../token/adminToken";
import { useDispatch , useSelector } from "react-redux";
import { removeUser, setUser } from "../../views/auth/store/actions";


const AddCategory = () => {
    const [categories, setCategories] = useState([])
    const [visible, setVisible] = useState(Boolean)
    const [visibleEdit, setVisibleEdit] = useState(Boolean)
    const [name, setName] = useState("")
    const [categoryId , setCategoryId] = useState(Number)
    const [editCategory , setEditCategory] = useState ([])
    console.log("ovo je nasljedeno iz storra")
    const userStore = useSelector(store => store.userStore);
    console.log(userStore.token)




    function deleteCategory(props) {
      return (console.log(categoryId)
      );
    }

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/v1/backend_react/cat/")
          .then(res => res.json())
          .then((result) => {
              let items = result.categories

              setCategories(items);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
    
          )
          .catch((error) => {
            console.log(error.status)

          });
      }, []);


      const onSubmit1 = (e) => {
        e.preventDefault();
        window.location.reload(true);
        const user = {
          name:name



        };
        console.log("ovo je user")
        console.log(user)
        fetch("http://127.0.0.1:8000/api/v1/backend_react/cat/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
          });
          
      };




      const onSubmit = (a) => {
        a.preventDefault();
        window.location.reload(true);
        const user = {
          name:name,
          categoryId:categoryId,


        };
        console.log("ovo je user")
        console.log(user)
        fetch("http://127.0.0.1:8000/api/v1/backend_react/cat/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
          });
      };



      function deleteCategory(name) {
        console.log("ovo je iz funkcije deleteCategory")
        console.log(name)

        const user = {
          name:name,
        };
        fetch("http://127.0.0.1:8000/api/v1/backend_react/cat/", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(name),
            })
          .then((res) => res.json())
          .then((data) => {
          });
          window.location.reload(true);
          }

    return (
      
    <Container>
      <AdminTokenAuthentication/>
          <Card>
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon icon={ faListAlt } /> Categories
            </Card.Title>
            <Table hover size="sm" bordered>
              <thead>
                <tr>
                  <th colSpan={ 2 }> </th>
                  <th className="text-center">
                    <Button variant="primary" onClick={ () => setVisible (true) }>
                      <FontAwesomeIcon icon={ faPlus }/> Add
                    </Button>
                 
                  </th>
                  </tr>
                <tr>
                  <th className="text-right">ID</th>
                  <th>Name</th>
                  <th></th>
             
                </tr>
              </thead>
              <tbody>
              {categories.map(hit =>
                      <tr>
                        <td className="text-right"> {hit.categoryId} </td>
                        <td className="text-right"> {hit.name} </td>
                        <td className="text-center">
                        <Button variant="primary"
                       onClick={ () => {setVisibleEdit (true); setName(hit.name) ; setCategoryId(hit.categoryId)}} >
                      <FontAwesomeIcon icon={ faPlus }/> Edit
                       </Button>
                       <Button variant="danger" 
                       onClick={ () => { deleteCategory(hit.name)}} >
                      <FontAwesomeIcon icon={ faPlus }/> Delete
                       </Button>
                        </td>
                        </tr>
                        
                      )}

              </tbody>
            </Table>
          </Card.Body>
        </Card>

       <ModalInputEdit show= {visibleEdit} onHide={ () => setVisibleEdit(false) }  onSubmit={onSubmit} label={editCategory.name} value={name} change={(a) => setName(a.target.value)} label1={editCategory.name} value1={categoryId} change1={(a) => setCategoryId(a.target.value)}/>

        <ModalInputAdd show= {visible} onHide={ () => setVisible(false) }  onSubmit={onSubmit1} label={editCategory.name} value={name} change={(e) => setName(e.target.value)}/>


      </Container>
      );


}


export default AddCategory





