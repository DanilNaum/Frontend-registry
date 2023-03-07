import Head from "next/head";
import Header from "../../components/Header/";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormForClient from "../../components/FormForClient";
import Spacer from "../../components/Spacer";

export default function ClientForm() {
  return (
    <div>
      <Head>
        <title>Реестр проектов СПбГУ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Spacer axis="vertical" size={50} />
      <Container>
        <FormForClient styles={{ width: "100%", height: "80vh" }} />
      </Container>
      <Footer />
    </div>
  );
}
