import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/card";
import './List.css';
import { Navigate, useNavigate } from "react-router-dom";

const List = () => {

    const [droids, setDroids] = useState ([]);

    const navigate = useNavigate();

    useEffect(() => {
    axios.get('https://starwars-databank-server.vercel.app/api/v1/droids/')
      .then((response) => {
        console.log(response);
        setDroids(response.data.data)
      })
      .catch((err) => {
        
        
      })
      .finally(() => {
        
      })
  }, [])
  
    return (
        <div className="starwars-scroll">
            <div className="content">
                <div className="container mt-4">
                    <div className="row">
                        {droids.map((droid) => {

                            const id = droid._id

                            return (
                                <div 
                                    className="col-md-4 mb-4" 
                                    key={id}
                                >
                                <Card
                                    name={droid.name}
                                    imageUrl={droid.image}
                                    action={() => navigate(`/Details/${id}`)}
                                />
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;