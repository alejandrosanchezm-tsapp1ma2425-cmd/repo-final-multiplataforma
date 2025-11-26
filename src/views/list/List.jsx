import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/card";
import './List.css';
import { useNavigate } from "react-router-dom";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const List = () => {
    
    const [droids, setDroids] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null);       

    const navigate = useNavigate();

    useEffect(() => {
        
        setIsLoading(true);
        setError(null);
        
        axios.get('https://starwars-databank-server.vercel.app/api/v1/droids/')
            .then((response) => {
                setDroids(response.data.data);
            })
            .catch((err) => {
                setError("No pudimos conectar con la base de datos de droides.");
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    const numberOfSkeletons = 10;
    
    return (
        <div className="starwars-scroll">
            <div className="content">
                <div className="container mt-4">
                    
                    {isLoading && (
                        <div className="row">
                            {Array.from({ length: numberOfSkeletons }).map((_, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <CardSkeleton />
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger text-center" role="alert">
                            {error}
                        </div>
                    )}

                    {!isLoading && !error && droids.length > 0 && (
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
                    )}

                    {!isLoading && !error && droids.length === 0 && (
                         <div className="text-center mt-5">
                            <h2 style={{ color: 'white' }}>No se encontraron Droides.</h2>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default List;