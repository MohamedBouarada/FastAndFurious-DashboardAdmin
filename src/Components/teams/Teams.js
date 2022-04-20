import React, { useEffect, useState } from "react";
import data from "./data";
import styles from "./teams.module.css";
import { Table,Button, ListGroup } from "react-bootstrap";
import axios from "axios";
export const Teams = ({ competition }) => {
  const handleDelete=async (e)=>{
    let _id=e
    try {
      const response= await axios({
        method: "delete",
        url: `http://localhost:5000/participant/teams/${_id}`,
        
      })
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      
    }
  }
  useEffect(async()=>{
  try {
    const response= await axios({
      method: "get",
      url: `http://localhost:5000/participant/teams/${competition}`,
      
    })
    console.log(response.data);
    setList(response.data);
    } catch (error) {
    console.log(error.response.data);
    }
},[handleDelete])
  const[List,setList]=useState([]);
  const[emailChef,setEmailChef]=useState("mbouarada2000@gmail.com");
  const handleEmail=async (e)=>{
    e.preventDefault();
    try {
      const response= await axios({
        method: "post",
        url: "http://localhost:5000/email/send",
        body:{
          emailChef,
        }
      })
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      
    }
  }


 
  return (
    <>
      <h2 className={styles.sectionTitle}>{competition}</h2>
      <Table responsive bordered className={styles.table}>
        <thead>
          <tr>
            <th>N°</th>
            <th>nom d'équipe</th>
            <th>Etablissement</th>
            <th>Chef d'équipe</th>
            <th>Email Chef</th>
            <th>N° tel Chef</th>
            <th>Membre1</th>
            <th>Membre2</th>
            <th>Membre3</th>
            <th>Membre4</th>
            <th>Confirmation</th>
            <th>suppression</th>
          </tr>
        </thead>
        {List.length>0 &&<tbody>
        {List.map((item, index) => {
                const {_id,competition,nomEquipe,etablissement,nomPrenomChef,mailChef,telChef,membre1,membre2,membre3,membre4,__v}=item;
            
                return(
                    <tr>
                        <td>{index+1}</td>
                        
                        <td >{nomEquipe} </td>
                        <td >{etablissement} </td>
                        <td >{nomPrenomChef} </td>
                        <td >{mailChef} </td>
                        <td >{telChef}</td>
                        <td >{membre1}</td>
                        <td >{membre2}</td>
                        <td >{membre3} </td>
                        <td >{membre4} </td>
                        <td>
                        <Button className={styles.confirmer} onClick={async()=>{
                          setEmailChef(mailChef);
                          handleEmail()}} >confirmer</Button>
                        </td>
                        <td>
                        <Button className={styles.supprimer} value={_id} onClick={e=>handleDelete(e.target.value)}>supprimer</Button>
                        </td>
                    </tr>
                )
                
            })}
          
        </tbody>
}</Table>
    </>
  );
};
