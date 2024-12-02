import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/sarath-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitteriight from "../../assets/twitter-light.svg";
import twitterdark from "../../assets/twitter-dark.svg";
import linkedinlight from "../../assets/linkedin-light.svg";
import linkedindark from "../../assets/linkedin-dark.svg";
import githublight from "../../assets/github-light.svg";
import githubdark from "../../assets/github-dark.svg";
import CV from "../../assets/Resume_Sarath_KJ.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeicon = theme === "light" ? sun : moon;
  const twittericon = theme === "light" ? twitteriight : twitterdark;
  const linkedinicon = theme === "light" ? linkedinlight : linkedindark;
  const githubicon = theme === "light" ? githublight : githubdark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="Profile Picture" className={styles.hero} />
        <img
          src={themeicon}
          alt="color theme icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sarath&nbsp;&nbsp;K&nbsp;J
        </h1>
        <h2>PYTHON FULL STACK DEVELOPER</h2>
        <span>
          <a href="https://x.com/home">
            <img src={twittericon} alt="twitter icon" />
          </a>
          <a href="https://www.linkedin.com/in/kjsarath11/">
            <img src={linkedinicon} alt="linkedin icon" />
          </a>
          <a href="https://github.com/KJSarath11">
            <img src={githubicon} alt="github icon" />
          </a>
        </span>
        <p className={styles.description}>
          As a Python Full Stack Developer, I merge my love for coding with a
          recent passion for web development, constantly solving problems with
          Python while building impactful web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
