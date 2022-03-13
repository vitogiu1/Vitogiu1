import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import ThemeUpdater from "../src/components/ThemeUpdater";
import { FaCss3Alt, FaReact, FaJs, FaHtml5, FaNodeJs, FaDocker, FaAngular, FaGithub, FaGitAlt} from 'react-icons/fa';
import {DiVisualstudio, DiJava, DiVim} from 'react-icons/di';
import { Container, SkillsContainer } from '../styles/styles';
import Link from 'next/link'

export default function Home(props: NextPage) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <Image src="https://github.com/vitogiu1.png" className={styles.logo} alt="logo" width={200} height={200} />
        <h3 className={styles.title}>
          Howdy 👋!
        </h3>
        <h3 className={styles.title}>
          {"I'm"} <Typewriter
          words={['Vito Giuliano']}
          /> 
        </h3>

        <p className={styles.description}>
          {"i'am a"} {' '}
          <span>
            <Typewriter
            words={['Full-Stack Developer', 'Web Developer']}         
            cursor
            typeSpeed={100}   
            loop  
            />
          </span>
        </p>
      <ThemeUpdater />
      <br></br>
      <br></br>
      <Container>
      <h1 className={styles.title}>Skills</h1>
      <section>
      <SkillsContainer data-aos="fade-up">
      <p>HTML</p>
      <FaHtml5 />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>CSS</p>
      <FaCss3Alt />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Java</p>
      <DiJava />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Javascript</p>
      <FaJs />
    </SkillsContainer>
      </section>
    </Container>

    <Container>
      <section>
    <SkillsContainer data-aos="fade-up">
      <p>Angular</p>
      <FaAngular />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Node.JS</p>
      <FaNodeJs />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>React</p>
      <FaReact />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Docker</p>
      <FaDocker />
    </SkillsContainer>
      </section>
    </Container>

    <Container>
      <section>
    <Link href="https://github.com/vitogiu1" passHref>
    <SkillsContainer data-aos="fade-up">
      <p>Github</p>
      <FaGithub />
    </SkillsContainer>
    </Link>

    <SkillsContainer data-aos="fade-up">
      <p>Git</p>
      <FaGitAlt />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Visual Studio / VSCode</p>
      <DiVisualstudio />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Vim / Neovim</p>
      <DiVim />
    </SkillsContainer>
      </section>
    </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/vitogiu1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make with ❤️ by Vitogiu.&nbsp;
          <Image src="https://github.com/vitogiu1.png" alt="logo" className={styles.logo} width={16} height={16}/>
        </a>
      </footer>
    </div>
  )
}
