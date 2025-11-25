import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 
import './Details.css'; 

const Details = () => {
    const { id } = useParams();
    
    // Añadimos estados para manejar la carga, los errores y el droide
    const [droid, setDroid] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setIsLoading(true);
        setError(null);
        
        
        axios.get(`https://starwars-databank-server.vercel.app/api/v1/droids/${id}`)
            .then((response) => {
                setDroid(response.data.data); 
            })
            .catch((err) => {
                console.error("Error al obtener los detalles del droide:", err);
                setError("Hubo un error de red al cargar la información.");
            })
            .finally(() => {
                setIsLoading(false);
            });
            
    }, [id]); 

    

    if (isLoading) {
        return (
            <div className="container text-center mt-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <h2 style={{ color: 'yellow', marginTop: '15px' }}>Cargando detalles del droide...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger text-center">{error}</div>
            </div>
        );
    }
    
    
    if (!droid) {
         return (
            <div className="container mt-5">
                <div className="alert alert-warning text-center">No se pudieron cargar los detalles del droide.</div>
            </div>
        );
    }

    // Renderizar la información del droide
    return (
        <div className="starwars-scroll details-page">
            <div className="container my-5 starwars-details-card">
                <div className="row">
                    
                    {/* Columna de la Imagen */}
                    <div className="col-md-5 text-center">
                        <img 
                            src={droid.image} 
                            alt={droid.name} 
                            className="img-fluid droid-image" 
                        />
                    </div>
                    
                    {/* Columna de los Detalles */}
                    <div className="col-md-7 droid-info">
                        <h1 className="droid-name">{droid.name}</h1>
                        <hr className="starwars-hr" />
                        
                        {/* Descripción (asumiendo que hay un campo 'description' o similar) */}
                        <p className="droid-description">{droid.description || "No hay una descripción disponible."}</p>

                        <h3 className="spec-heading">Especificaciones Técnicas</h3>
                        <ul className="list-unstyled spec-list">
                            <li><strong>Clasificación:</strong> {droid.classification || 'N/A'}</li>
                            <li><strong>Modelo:</strong> {droid.model || 'N/A'}</li>
                            <li><strong>Fabricante:</strong> {droid.manufacturer || 'N/A'}</li>
                            <li><strong>Altura:</strong> {droid.height || 'N/A'}</li>
                            <li><strong>Apariciones:</strong> {droid.appearances || 'N/A'}</li>
                            {/* Puedes añadir más campos que vengan de la API */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;