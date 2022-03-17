import React from "react";
import data from "./data";
import styles from "./teams.module.css";
import { Table,Button } from "react-bootstrap";

export const Teams = ({ competition }) => {
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
            <th>Confirmation</th>
            <th>suppression</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, index) => {
                const {_id,competition,nomEquipe,etablissement,nomPrenomChef,mailChef,telChef,membre1,membre2,membre3,__v}=item;
            
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
                        <td>
                        <Button className={styles.confirmer}>confirmer</Button>
                        </td>
                        <td>
                        <Button className={styles.supprimer}>supprimer</Button>
                        </td>
                    </tr>
                )
                
            })}
          
        </tbody>
      </Table>
    </>
  );
};
