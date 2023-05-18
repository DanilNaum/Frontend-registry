import Head from "next/head";
import { Header } from "../../modules/Header";
import { Container } from "../../modules/shared";
import { Footer } from "../../modules/Footer";
import { Spacer } from "../../modules/shared";
import ProjectPublicAboutUs from "../../modules/ProjectPublicAboutUs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Contener4CuTuDiPridjectDescr } from "../../modules/ProjectPagePublicPath";
import { TagList } from "../../modules/Taglist";

import styles from "./Project.module.sass";
import ProjectRequirements from "../../modules/ProjectRequirements";
import ProjectEnroll from "../../modules/ProjectEnroll";
import { getProject, getProjects } from "../../modules/shared/lib/projects";
import { IAPIProject } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();

  const paths = projects
    .filter((project) => project.projectId !== undefined)
    .map((project) => {
      return {
        params: { id: "" + project.projectId! },
      };
    });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const project = await getProject(context.params.id);

  return {
    props: {
      project,
    },
    revalidate: 60,
  };
};

interface ProjectProps {
  project: IAPIProject;
}

const Project: NextPage<ProjectProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>Реестр проектов СПбГУ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Spacer axis="vertical" size={80} />
      <Container>
        <h1 className={styles.title}>{project.name}</h1>
        <Spacer axis="vertical" size={40} />
        <TagList tags={project.tags} />

        <Spacer axis="vertical" size={40} />

        <Contener4CuTuDiPridjectDescr
          curators={project.curators}
          clients={project.clients}
          supervisors={project.supervisors}
          description={project.description}
        />

        <Spacer axis="vertical" size={40} />

        <ProjectPublicAboutUs />
        {/* <Container>
        <InfoAboutCuTuDi />
        <AboutProject />
      </Container> */}
        <Spacer axis="vertical" size={40} />
        <ProjectRequirements
          id={"asdf"}
          projectRequirements={project.requirements || ""}
          contractorRequirements={project.requirementsForPerformers || ""}
          animationTimeMs={300}
        />
        <Spacer axis="vertical" size={40} />
        <ProjectEnroll
          startTime={project.startTime || ""}
          startFiling={project.startFiling || ""}
          endFiling={project.endFiling || ""}
          startImplementation={project.startImplementation || ""}
          endImplementation={project.endImplementation || ""}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Project;
