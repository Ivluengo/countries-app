import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Error404() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 5000)
  }, [navigate]);
    
    return (
        <>
            <h2>Error 404</h2>
            <h3>Ruta no encontrada</h3>
        </>
    )
}

export default Error404;