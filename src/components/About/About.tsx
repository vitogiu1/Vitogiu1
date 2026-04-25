import React from "react";
import styles from "./About.module.css";
import { FaUserAstronaut, FaGraduationCap, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className="section-title">
        <span className="highlight">#</span> About Me
      </h2>

      <div className={styles.bentoGrid}>
        <div className={`${styles.card} ${styles.bioCard}`}>
          <div className={styles.cardHeader}>
            <FaUserAstronaut className={styles.icon} />
            <h3>My Journey</h3>
          </div>
          <p className={styles.text}>
            Hello! I&apos;m Vito Giuliano, a Full Stack Developer and student of
            Software Engineering. My journey into the world of programming began
            in 2020, fueled by an insatiable curiosity to understand the inner
            workings of technology. Since then, I have cultivated extensive
            experience in building robust web applications, designing efficient
            database schemas, and architecting scalable APIs. My expertise spans
            the entire Full-Stack ecosystem, leveraging modern frameworks like
            React and Angular alongside back-end powerhouses like Node.js and
            Java Spring to deliver impactful digital solutions.
          </p>
          <p className={styles.text}>
            Beyond high-level development, I am a dedicated Low-Level systems
            enthusiast. I thrive in the complexities of operating system
            development, x86 architecture, RISC-V architecture, and manual
            memory management. I am currently architecting ArzaOS, my own kernel
            in 64-bit long mode. My commitment to system internals is further
            demonstrated by my work on ArzaOS, where I built the entire kernel
            from scratch, including drivers for serial port and connections with
            multiple kernels.
          </p>
          <p className={styles.text}>
            Currently a Software Engineering student at Inteli, I bridge the gap
            between high-level application design and low-level system
            performance. Whether I&apos;m optimizing algorithms for
            computational complexity or managing hardware interrupts, my goal is
            to build systems that are as efficient as they are innovative.
          </p>
        </div>

        <div className={`${styles.card} ${styles.eduCard}`}>
          <div className={styles.cardHeader}>
            <FaGraduationCap className={styles.icon} />
            <h3>Education & Focus</h3>
          </div>
          <ul className={styles.list}>
            <li>
              <strong>Inteli (Instituto de Tecnologia e Liderança)</strong>
              <span>
                B.S. in Software Engineering — focusing on software architecture
                and agile development.
              </span>
            </li>
            <li>
              <strong>Low-Level Engineering</strong>
              <span>
                Architecting ArzaOS (x86/64-bit Kernel), and studying more about
                the low-level systems, from operating systems to hardware
                interactions.
              </span>
            </li>
            <li>
              <strong>Linux Internals & Tooling</strong>
              <span>
                Mastering the Linux toolchain through Linux From Scratch (LFS)
                and a custom Linux-based development environment.
              </span>
            </li>
            <li>
              <strong>Full-Stack Ecosystems</strong>
              <span>
                Developing scalable web applications and APIs using React,
                Angular, Node.js, and Java Spring Boot.
              </span>
            </li>
            <li>
              <strong>Data Structures & Complexity</strong>
              <span>
                In-depth study of sorting algorithms, computational complexity
                (Big O), and optimized memory structures.
              </span>
            </li>
          </ul>
        </div>

        <div className={`${styles.card} ${styles.codeCard}`}>
          <div className={styles.cardHeader}>
            <FaCode className={styles.icon} />
            <h3>What&apos;s Vito&apos;s Stack?</h3>
          </div>
          <div className={styles.ideMock}>
            <div className={styles.ideHeader}>
              <div className={styles.macDots}>
                <div className={`${styles.dot} ${styles.dotRed}`}></div>
                <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                <div className={`${styles.dot} ${styles.dotGreen}`}></div>
              </div>
              <div className={styles.ideTab}>vito-config.json</div>
            </div>
            <pre className={styles.codeSnippet}>
              <code>
                <span className={styles.jsonBracket}>{"{"}</span>
                {"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;developer&quot;
                </span>:{" "}
                <span className={styles.jsonString}>
                  &quot;Vito Giuliano&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;status&quot;
                </span>:{" "}
                <span className={styles.jsonString}>
                  &quot;Software Engineering Student @ Inteli&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonKey}> &quot;roles&quot;</span>:{" "}
                <span className={styles.jsonArray}>[</span>
                {"\n"}
                <span className={styles.jsonString}>
                  {" "}
                  &quot;Full-Stack Engineer&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonString}>
                  {" "}
                  &quot;Low-Level Enthusiast&quot;
                </span>
                {"\n"}
                <span className={styles.jsonArray}> ]</span>,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;core_stack&quot;
                </span>: <span className={styles.jsonBracket}>{"{"}</span>
                {"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;low_level&quot;
                </span>: <span className={styles.jsonArray}>[</span>
                <span className={styles.jsonString}>&quot;C&quot;</span>,{" "}
                <span className={styles.jsonString}>&quot;C++&quot;</span>,{" "}
                <span className={styles.jsonString}>&quot;Rust&quot;</span>,{" "}
                <span className={styles.jsonString}>&quot;Assembly&quot;</span>
                <span className={styles.jsonArray}>]</span>,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;full_stack&quot;
                </span>: <span className={styles.jsonArray}>[</span>
                <span className={styles.jsonString}>
                  &quot;React&quot;
                </span>,{" "}
                <span className={styles.jsonString}>&quot;Angular&quot;</span>,{" "}
                <span className={styles.jsonString}>&quot;Node.js&quot;</span>,{" "}
                <span className={styles.jsonString}>
                  &quot;Java Spring&quot;
                </span>
                <span className={styles.jsonArray}>]</span>
                {"\n"}
                <span className={styles.jsonBracket}> {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;os_internals&quot;
                </span>
                : <span className={styles.jsonBracket}>{"{"}</span>
                {"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;current_project&quot;
                </span>
                :{" "}
                <span className={styles.jsonString}>
                  &quot;ArzaOS (x86 to 64-bit Long Mode)&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;architecture_focus&quot;
                </span>
                :{" "}
                <span className={styles.jsonString}>
                  &quot;Monolithic Kernel (x86_64)&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;deep_dives&quot;
                </span>: <span className={styles.jsonArray}>[</span>
                <span className={styles.jsonString}>
                  &quot;GDT/IDT&quot;
                </span>,{" "}
                <span className={styles.jsonString}>&quot;Paging&quot;</span>,{" "}
                <span className={styles.jsonString}>
                  &quot;Manual Memory Management&quot;
                </span>
                <span className={styles.jsonArray}>]</span>
                {"\n"}
                <span className={styles.jsonBracket}> {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}> &quot;environment&quot;</span>
                : <span className={styles.jsonBracket}>{"{"}</span>
                {"\n"}
                <span className={styles.jsonKey}> &quot;os&quot;</span>:{" "}
                <span className={styles.jsonString}>
                  &quot;Arch Linux&quot;
                </span>
                ,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;editor&quot;
                </span>:{" "}
                <span className={styles.jsonString}>&quot;Neovim&quot;</span>,
                {"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;terminal&quot;
                </span>:{" "}
                <span className={styles.jsonString}>&quot;Zsh&quot;</span>,
                {"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;side_quest&quot;
                </span>:{" "}
                <span className={styles.jsonString}>
                  &quot;Linux From Scratch (LFS)&quot;
                </span>
                {"\n"}
                <span className={styles.jsonBracket}> {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}>
                  {" "}
                  &quot;mission&quot;
                </span>:{" "}
                <span className={styles.jsonString}>
                  &quot;Bridging the gap between high-level design and core
                  system mechanics.&quot;
                </span>
                {"\n"}
                <span className={styles.jsonBracket}>{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
