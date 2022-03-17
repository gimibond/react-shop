import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
    return(
        <Layout>
            <Login /> {/* cierra la etiqueta si no recibe un hijo  */}
        </Layout>
    );
}

export default App;