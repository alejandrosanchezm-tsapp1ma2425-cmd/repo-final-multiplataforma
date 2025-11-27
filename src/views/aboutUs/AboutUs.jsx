import './AboutUs.css'
import meme from "../../assets/meme.png"

const AboutUs = () => {

    return (
        <div className='fondo' >
            <div className='tittle'>
                <h1>REMEMBER THE DROIDS</h1>
            </div>
            <div className='subtitle'>
                <h2>"May the code be with you"</h2>
            </div>
            <div className='text-content'>
                <p> This Web has been created by a fan of starwars, currently studing a developer degree.</p>
            </div>
            <div className='darthvader'>
                <img src={meme}/>
            </div>
        </div>
    )
}

export default AboutUs;