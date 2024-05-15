import styles from './HeroStyles.module.css'
import heroImg from '../../assets/deane-logan.png'
import themeIcon from '../../assets/sun.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
import CV from '../../assets/CV.pdf'

function Hero () {
    return (
    <section id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Deane" />
            <img className={styles.colorMode} src={themeIcon} alt='Color mode icon'/>
        </div>
        <div className={styles.info}>
            <h1>
                Deane
                <br />
                Logan
            </h1>
            <h2>
                Full Stack Developer
            </h2>
            <span>
                <a href="https://linkedin.com/" target='_blank'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://github.com/" target='_blank'>
                    <img src={githubIcon} alt="github icon" />
                </a>
            </span>
            <p>
                Your Full Stack Pathfinder!
                Welcome to my digital playground! Nestled in Swartz Creek, Michigan, I craft web wonders using JavaScript, React, Node.js, Python, Django, and FastAPI. Here, I transform ideas into digital experiences that spark joy and efficiency.
                Dive into my portfolio and you'll find projects that are not just about coding—they're adventures in problem-solving, where each line of code aims to make the digital world a little more user-friendly and a lot more fun.
                Curious to see magic in action? Explore, enjoy, and reach out! Let's connect and create something awesome together.
                Cheers to tech that makes us smile! 🚀
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>

    )
}

export default Hero
