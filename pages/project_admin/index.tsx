import Head from "next/head";
import Header from "../../components/Header/";
import TagSliderForCurProject from "../../components/ProjectPagePublicPath/TagSliderForCurProject";
import AboutProject from "../../components/ProjectPagePublicPath/Contener4CuTuDi&PridjectDescr/AboutProject";
import InfoAboutCuTuDi from "../../components/ProjectPagePublicPath/Contener4CuTuDi&PridjectDescr/InfoAboutCustomerTutorDirector";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Spacer from "../../components/Spacer";
import ProjectPublicAboutUs from "../../components/ProjectPublicAboutUs";

import { NextPage } from "next";
import AdminSupervisors, {
  ISupervisor,
} from "../../components/AdminSupervisors";
import ProjectCalendar from "../../components/ProjectCalendar";
import { useEffect, useRef } from "react";
import Results from "../../components/AdminSupervisors/Results";
import InputTextArea from "../../components/InputTextArea";
import { LinksToPresentations } from "../../components/LinksToPresentations";

interface HomeProps {}

export interface ITimeline {
  dateAdd: string;
  applicationDeadline: {
    from: string;
    to: string;
  };
  projectImplementationDates: {
    from: string;
    to: string;
  };
  projectProtection: {
    from: string;
    to: string;
  };
  projectStatus: string;
}

export interface IFormData {
  supervisors: ISupervisor[];
  teams: Map<string, string>;
  description: string;
  projectDescription: string;
  commandRequirements: string;
  projectRequirements: string;
  projectTimeline: ITimeline;
}

const ProjectAdmin: NextPage<HomeProps> = () => {
  /*
  formDataRef надо будет передавать во все компоненты, чтобы отрендерить
  начальные данные, которые нам приходят с бекенда

  Когда админ будет что-то менять в ваших компонентах, помимо
  стейта своего компонента вы будете менять и соответствующее свойство этого рефа

  Нужно это, чтобы при нажатии на кнопку "Сохранить изменения", которая в этом файле
  будет находиться, сразу в готовом виде была информация, которую нужно отправлять бекенду

  Сейчас formDataRef использует от руки набранные данные,
  вы тоже набирайте их вручную, пока мы не настроили работу с бекендом
  По-хорошему мы будем делать запрос серверу и через getStaticProps/getServerSideProps
  передавать пропом то, что нам подкинет бекенд
  */
  const formDataRef = useRef<IFormData>({
    supervisors: [
      {
        title: "Заказчик",
        names: ["Иванов Иван Иванович"],
      },
      {
        title: "Куратор",
        names: ["Смирнов Александр Дмитриевич"],
      },
      {
        title: "Руководитель",
        names: ["Васильев Артём Андреевич"],
      },
    ],
    teams: new Map([
      [
        "Команда 1",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
      ],
      [
        "Команда 2",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
      ],
    ]),
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique et asperiores earum corporis impedit beatae dolorem, adipisci officia animi facere necessitatibus doloribus tempora velit quis ea, eius illum itaque quam molestiae, quos eaque. Minus temporibus laborum sed eligendi. Quia ipsa recusandae explicabo, hic iure repellendus, iste voluptatum labore perspiciatis veniam vitae, nulla laborum repudiandae nisi illo nihil aut incidunt vel voluptatem nostrum suscipit eum. Eveniet, ipsa veniam dignissimos ratione enim animi doloremque id tenetur quam libero repellendus cum veritatis totam molestiae non magni pariatur aliquam ex doloribus natus qui asperiores aliquid consequuntur? Quaerat sapiente, accusamus at enim quia quam eius, dolorum adipisci voluptas fuga quo cumque sunt vero! Perferendis nemo placeat sequi laboriosam non quae eveniet, beatae eligendi praesentium? Fugit, veritatis? Optio maxime ea ab, sequi, accusamus quidem recusandae porro vel dolorem eligendi illum expedita explicabo aut sapiente. Amet eligendi eaque distinctio vel quos, sed consequuntur. Eveniet consequuntur, deserunt quas debitis consectetur deleniti esse ab error. Illum corrupti voluptatem vel fugiat porro error, nulla, debitis vitae ad reprehenderit voluptas! Perferendis inventore architecto, explicabo suscipit quidem earum nobis sapiente. Quo reprehenderit sint aspernatur ex ipsa rem officiis doloribus iusto rerum quod eaque qui cum, autem laborum maxime alias aliquam at in.",

    projectDescription: "a",
    commandRequirements: "aa",
    projectRequirements: "aaa",

    projectTimeline: {
      dateAdd: "2000-01-01",
      applicationDeadline: {
        from: "2000-01-01",
        to: "",
      },
      projectImplementationDates: {
        from: "2000-01-01",
        to: "",
      },
      projectProtection: {
        from: "2000-01-01",
        to: "",
      },
      projectStatus: "Защита",
    },
  });

  const removeLink = (key: string) => {};

  return (
    <>
      <Head>
        <title>Реестр проектов СПбГУ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Spacer axis="vertical" size={40} />
      {/* рендерим только если есть значение у formDataRef.current.
        Вообще есть ощущение, что он и так изначально будет, но я решил,
        что лишним не будет на всякий случай эту проверку добавить */}
      {formDataRef.current && (
        <Container>
          <AdminSupervisors formDataRef={formDataRef} />
          <Spacer axis="vertical" size={60} />
          <Spacer axis="vertical" size={60} />
          <LinksToPresentations
            linksAndLabels={formDataRef.current.teams}
            removeLink={removeLink}
          />
          <Results />
        </Container>
      )}

      <Spacer axis="vertical" size={40} />
      {formDataRef.current && (
        <InputTextArea
          formDataRef={formDataRef}
          title="Описание проекта:"
          text="projectDescription"
        />
      )}
      {formDataRef.current && (
        <InputTextArea
          formDataRef={formDataRef}
          title="Требование к исполнителю:"
          text="commandRequirements"
        />
      )}
      {formDataRef.current && (
        <InputTextArea
          formDataRef={formDataRef}
          title="Требования проекта:"
          text="projectRequirements"
        />
      )}
      {formDataRef.current && <ProjectCalendar formDataRef={formDataRef} />}

      <Footer />
    </>
  );
};

export default ProjectAdmin;
