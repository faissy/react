import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

const About = () => {
    const { fname } = useParams();
    //const HelloTxt = "Hello its mee before useState"
    const [HelloTxt, setHelloTxt] = useState([]);

    const getDepotMembers = async () => {
        try {
            const response = await fetch('https://app7.batapkapps.com/NRSD/Frapi/LoadDepotCustomersByID?depotID=101');
            //console.log(response);

            const Data = await response.json();
            console.log(Data)
            //console.log(await response.json());
            setHelloTxt(Data);
            

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => { getDepotMembers() }, []);

    return (
        <>
            <h1>Depot Customers Detail</h1>

            <table class="table">


                <thead>
                    <tr>

                        <th scope="col">Dealer No</th>
                        <th scope="col">Messers</th>

                    </tr>
                </thead>
                <tbody>



                    {
                        HelloTxt.map((curElem) => {
                            return (
            
            <tr>
            <td>{curElem.DealerNo}</td>
            <td>{curElem.Messers}</td>
           </tr>
                
                )
            })
            }

            </tbody>
        </table>
        </>
    );

}

export default About;