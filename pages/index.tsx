import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
import ThemeUpdater from "../src/components/ThemeUpdater";
import { FaCss3Alt, FaReact, FaJs, FaHtml5, FaNodeJs, FaDocker, FaAngular, FaGithub, FaGitAlt} from 'react-icons/fa';
import {DiVisualstudio, DiJava, DiVim, DiMongodb, DiLinux} from 'react-icons/di';
import {CgCPlusPlus} from 'react-icons/cg'
import {SiCsharp, SiTypescript} from 'react-icons/si'
import { Container, SkillsContainer } from '../styles/styles';
import Link from 'next/link'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

export default function Home(props: NextPage) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
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
          {"I'm a "} {' '}
          <span className={styles.span}>
            <Typewriter
            words={['Simple developer in the world, looking to learn more', 'Full-Stack Developer', 'Software Engineer']}         
            cursor
            typeSpeed={70}   
            loop  
            />
          </span>
        </p>
      <ThemeUpdater />
      <br></br>
      <br></br>
      <Container data-aos="fade-up">
      <h1 className={styles.title}><span className={styles.span}>#</span>Skills</h1>
      <br></br>
      <br></br>
      <br></br>
      <h1 className={styles.title}><span className={styles.span}>#</span>Languages</h1>
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
      <p>Javascript</p>
      <FaJs />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Typescript</p>
      <SiTypescript />
    </SkillsContainer>
    </section>
    <section>
    <SkillsContainer data-aos="fade-up">
      <p>Java</p>
      <DiJava />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>C#</p>
      <SiCsharp />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>C++</p>
      <CgCPlusPlus />
    </SkillsContainer>
      </section>
    </Container>

    <Container>
    <br></br>
    <br></br>
    <br></br>
    <h1 className={styles.title}><span className={styles.span}>#</span>Frameworks</h1>
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
      <br></br>
      <br></br>
      <br></br>
    <h1 className={styles.title}><span className={styles.span}>#</span>Tools</h1>
      <section>
    <a
      href="https://github.com/vitogiu1"
      target="_blank"
      rel="noopener noreferrer"
    >
    <SkillsContainer data-aos="fade-up">
      <p>Github</p>
      <FaGithub />
    </SkillsContainer>
    </a>

    <SkillsContainer data-aos="fade-up">
      <p>Git</p>
      <FaGitAlt />
    </SkillsContainer>

    <SkillsContainer data-aos="fade-up">
      <p>Visual Studio / VSCode</p>
      <DiVisualstudio />
    </SkillsContainer>
    </section>
    <section>

    <SkillsContainer data-aos="fade-up">
      <p>MongoDB</p>
      <DiMongodb />
    </SkillsContainer>

    <a
      href="https://github.com/vitogiu1/dotfiles"
      target="_blank"
      rel="noopener noreferrer"
    >
    <SkillsContainer data-aos="fade-up">
      <p>Linux</p>
      <DiLinux />
    </SkillsContainer>
    </a>

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
