import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import MyContext from '../MyContext';

const PrivateRoute = ({ children }) => {

  const { usuario } =  useContext(MyContext);

  return (
    
        usuario?.auth ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute