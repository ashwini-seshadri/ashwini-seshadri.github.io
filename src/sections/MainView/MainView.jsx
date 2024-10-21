import styles from './MainViewStyles.module.css';
// import { Link } from 'react-router-dom';
// import heroImg from '../../assets/hero-img.png';
import letterA from '../../assets/letter-a.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
import gmailDark from '../../assets/gmail-dark.svg';
import gmailLight from '../../assets/gmail-light.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
// import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function MainView() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    // const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


    return (
        <section id="mainview" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.mainview}
                    src={letterA}
                    alt="Profile picture of Ashwini Seshadri"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Ashwini
                    <br/>
                    Seshadri
                </h1>
                <h2>Software Developer</h2>
                <p className={styles.description}>
                    Contact:
                </p>
                {/*Social Media Icon Container*/}
                <div className={styles.socialMediaIcons}>
                    <span>
                        {/*<Link to="/contact">*/}
                        {/*    <img src={gmailIcon} alt="Gmail icon"/>*/}
                        {/*</Link>*/}
                        <a href="mailto:ashwini.seshadrik@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src={gmailIcon} alt="Gmail icon"/>
                        </a>
                    </span>
                    <span>
                        <a href="https://github.com/ashwini-seshadri" target="_blank">
                            <img src={githubIcon} alt="Github icon"/>
                        </a>
                    </span>
                    <span>
                        <a href="https://linkedin.com/in/ashwini-seshadri" target="_blank">
                            <img src={linkedinIcon} alt="Linkedin icon"/>
                        </a>
                    </span>
                </div>
                {/*<span>*/}
                {/*    <a href="https://twitter.com/" target="_blank">*/}
                {/*        <img src={twitterIcon} alt="Twitter icon"/>*/}
                {/*    </a>*/}
                {/*</span>*/}
                {/*<span>*/}
                {/*    <a href="https://github.com/" target="_blank">*/}
                {/*        <img src={githubIcon} alt="Github icon"/>*/}
                {/*    </a>*/}
                {/*</span>*/}
                {/*<span>*/}
                {/*    <a href="https://linkedin.com/" target="_blank">*/}
                {/*        <img src={linkedinIcon} alt="Linkedin icon"/>*/}
                {/*    </a>*/}
                {/*</span>*/}
                {/*<p className={styles.description}>*/}
                {/*    Contact Me!*/}
                {/*</p>*/}
                {/*<a href={CV} download>*/}
                {/*    <button className="hover">Resume</button>*/}
                {/*</a>*/}
            </div>
        </section>
    )
}

export default MainView;