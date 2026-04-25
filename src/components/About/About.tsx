"use client";

import React from "react";
import styles from "./About.module.css";
import { FaUserAstronaut, FaGraduationCap, FaCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const educationList: { title: string; desc: string }[] = t("about.educationList") || [];
  const ideMock: any = t("about.ideMock") || {};

  return (
    <section className={styles.container} id="about">
      <h2 className="section-title">
        <span className="highlight">#</span> {t("about.sectionTitle")}
      </h2>

      <div className={styles.bentoGrid}>
        <div className={`${styles.card} ${styles.bioCard}`}>
          <div className={styles.cardHeader}>
            <FaUserAstronaut className={styles.icon} />
            <h3>{t("about.journeyTitle")}</h3>
          </div>
          <p className={styles.text}>{t("about.journey1")}</p>
          <p className={styles.text}>{t("about.journey2")}</p>
          <p className={styles.text}>{t("about.journey3")}</p>
        </div>

        <div className={`${styles.card} ${styles.eduCard}`}>
          <div className={styles.cardHeader}>
            <FaGraduationCap className={styles.icon} />
            <h3>{t("about.educationTitle")}</h3>
          </div>
          <ul className={styles.list}>
            {Array.isArray(educationList) && educationList.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.codeCard}`}>
          <div className={styles.cardHeader}>
            <FaCode className={styles.icon} />
            <h3>{t("about.ideTitle")}</h3>
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
                <span className={styles.jsonKey}>  &quot;developer&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.developer}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;status&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.status}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;roles&quot;</span>: <span className={styles.jsonArray}>[</span>{"\n"}
                {ideMock.roles?.map((role: string, i: number) => (
                  <React.Fragment key={i}>
                    <span className={styles.jsonString}>    &quot;{role}&quot;</span>
                    {i < ideMock.roles.length - 1 ? "," : ""}
                    {"\n"}
                  </React.Fragment>
                ))}
                <span className={styles.jsonArray}>  ]</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;core_stack&quot;</span>: <span className={styles.jsonBracket}>{"{"}</span>{"\n"}
                <span className={styles.jsonKey}>    &quot;low_level&quot;</span>: <span className={styles.jsonArray}>[</span>
                {ideMock.core_stack?.low_level?.map((ll: string, i: number) => (
                  <React.Fragment key={i}>
                    <span className={styles.jsonString}>&quot;{ll}&quot;</span>
                    {i < ideMock.core_stack.low_level.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                <span className={styles.jsonArray}>]</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;full_stack&quot;</span>: <span className={styles.jsonArray}>[</span>
                {ideMock.core_stack?.full_stack?.map((fs: string, i: number) => (
                  <React.Fragment key={i}>
                    <span className={styles.jsonString}>&quot;{fs}&quot;</span>
                    {i < ideMock.core_stack.full_stack.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                <span className={styles.jsonArray}>]</span>{"\n"}
                <span className={styles.jsonBracket}>  {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;os_internals&quot;</span>: <span className={styles.jsonBracket}>{"{"}</span>{"\n"}
                <span className={styles.jsonKey}>    &quot;current_project&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.os_internals?.current_project}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;architecture_focus&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.os_internals?.architecture_focus}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;deep_dives&quot;</span>: <span className={styles.jsonArray}>[</span>
                {ideMock.os_internals?.deep_dives?.map((dd: string, i: number) => (
                  <React.Fragment key={i}>
                    <span className={styles.jsonString}>&quot;{dd}&quot;</span>
                    {i < ideMock.os_internals.deep_dives.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))}
                <span className={styles.jsonArray}>]</span>{"\n"}
                <span className={styles.jsonBracket}>  {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;environment&quot;</span>: <span className={styles.jsonBracket}>{"{"}</span>{"\n"}
                <span className={styles.jsonKey}>    &quot;os&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.environment?.os}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;editor&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.environment?.editor}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;terminal&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.environment?.terminal}&quot;</span>,{"\n"}
                <span className={styles.jsonKey}>    &quot;side_quest&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.environment?.side_quest}&quot;</span>{"\n"}
                <span className={styles.jsonBracket}>  {"}"}</span>,{"\n"}
                <span className={styles.jsonKey}>  &quot;mission&quot;</span>: <span className={styles.jsonString}>&quot;{ideMock.mission}&quot;</span>{"\n"}
                <span className={styles.jsonBracket}>{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
