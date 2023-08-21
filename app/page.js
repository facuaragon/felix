import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { projects } from "@/utils/data";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.padding}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link href="#">FR</Link>
            </div>
            <div className={styles.contact}>
              <Link href="#">Contact</Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.pagePadding}>
            <div className={styles.container}>
              <div className={styles.headingWrapper}>
                <h1 className={styles.heading}>
                  <span className={styles.lineOne}>Lorem Ipsum</span>
                  <span className={styles.lineTwo}>Lorem Ipsum</span>
                </h1>
              </div>
              <div className={styles.intro}>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.projects}>
          <div className={styles.pagePadding}>
            <div className={styles.container}>
              <div className={styles.headingWrapper}>
                <div className={styles.bullet}></div>
                <div className={styles.lineWrapper}>
                  <h3 className={styles.heading}>selected Projects</h3>
                </div>
                <div className={styles.headingLine}></div>
              </div>
              <div className={styles.projectsWrapper}>
                <div className={styles.projectsGrid}>
                  {projects.map((project) => (
                    <a
                      key={project.id}
                      id={project.id}
                      className={styles.projectLink}
                    >
                      <div className={styles.projectWrapper}>
                        <div className={styles.projectImageWrapper}></div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
