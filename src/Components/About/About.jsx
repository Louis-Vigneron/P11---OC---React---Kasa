import Banner_About from './Banner_about.png'
import BannerAboutMob from './BannerAboutMob.png'

function AboutPage() {
    return (
        <div className='aboutPage'>
            
            <img className='aboutPage__img--desktop' src={Banner_About} alt="Banner_About" />
            <img className='aboutPage__img--mobile' src={BannerAboutMob} alt="Banner_About" /> 

            <details className='aboutPage__collapse'>
                <summary className='aboutPage__collapse__title'>Fiabilité</summary>
                <p className='aboutPage__collapse__text'>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </p>
            </details>

            <details className='aboutPage__collapse'>
                <summary className='aboutPage__collapse__title'>Respect</summary>
                <p className='aboutPage__collapse__text'>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </p>
            </details>

            <details className='aboutPage__collapse'>
                <summary className='aboutPage__collapse__title'>Service</summary>
                <p className='aboutPage__collapse__text'>
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </p>
            </details>

            <details className='aboutPage__collapse'>
                <summary className='aboutPage__collapse__title'>Sécurité</summary>
                <p className='aboutPage__collapse__text'> 
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire,cela permet à nos équipes de vérifier que les standards sont bien respectés.
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </p>
            </details>
        </div>
    )
}

export default AboutPage;