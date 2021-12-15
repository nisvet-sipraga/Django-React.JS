import React from "react";
import { Card, Container, Form ,Button, Col, Alert} from "react-bootstrap";
import { useState, useEffect } from "react";
import InputLogin from "../formInput/SignupForm";
import  { Row , ButtonToolbar, Dropdown, Nav, NavDropdown, Table, Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import {  faArrowAltCircleRight, faListAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalInput from "../inputCategory/modal";


const AddCategory = () => {
    const [categories, setCategories] = useState([])
    const [visible, setVisible] = useState(Boolean)
    const [visibleEdit, setVisibleEdit] = useState(Boolean)
    const [name, setName] = useState("")
    const [categoryId , setCategoryId] = useState(Number)
    const [editCategory , setEditCategory] = useState ([])
    
    console.log("ovo je name")
    console.log(name)
    console.log("ovo je izmedu name i categoryId")
    console.log(categoryId)



    function deleteCategory(props) {
      return (console.log(categoryId)
      );
    }

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/v1/users/cat/")
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
            console.log("imate problem");
            console.log(error.status)
            console.log("iznad je error response status")
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
        fetch("http://127.0.0.1:8000/api/v1/users/cat/", {
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
        fetch("http://127.0.0.1:8000/api/v1/users/cat/", {
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
        fetch("http://127.0.0.1:8000/api/v1/users/cat/", {
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

        <Modal size="lg" centered show={ visibleEdit } onHide={ () => setVisibleEdit(false) } >
         <Modal.Header closeButton>
           <Modal.Title> Add new category</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <form onSubmit={onSubmit}>
            <br />
      
            <Form.Label>Your old category</Form.Label>
            <InputLogin  label={editCategory.name}  value={categoryId} change={(a) => setCategoryId(a.target.value)}/>
            <InputLogin  label={editCategory.name}  value={name} change={(a) => setName(a.target.value)} />
            <input type="submit" value="Edit category" />
          </form>
         </Modal.Body>
          </Modal>


     
        <ModalInput show= {visible} nHide={ () => setVisible(false) }  onSubmit={onSubmit1} label={editCategory.name} value={name} change={(e) => setName(e.target.value)}/>


      </Container>
      );


}


export default AddCategory





