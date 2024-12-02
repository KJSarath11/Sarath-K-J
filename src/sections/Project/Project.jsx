import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png"; //auto aid logo added here
import ProjectCard from "../../common/ProjectCard";
function Project() {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/JoelMathewV/AutoAid-workshop-management-miniproject"
          h3="Auto Aid"
          p="Web Application for Workshop Management"
        />
      </div>
    </section>
  );
}

export default Project;
