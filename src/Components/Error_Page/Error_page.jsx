import { Link } from 'react-router-dom';


function ErrorPage() {
    return (
        <div className='errorPage'>
            <h1 className='errorPage__title'>404</h1>
            <h2 className='errorPage__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='errorPage__link' to="/">Retourner sur la page d’accueil</Link >
        </div>
    )
}

export default ErrorPage;
