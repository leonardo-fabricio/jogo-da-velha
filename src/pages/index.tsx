import Game from "@/components/game";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" content={"/assets/jogo-da-velha.png"} />
        <meta property="og:url" content="https://leonardo-fabricio.github.io/jogo-da-velha/" />
        <meta
          property="og:title"
          content="Eu sou o milhor"
        />
        <meta
          property="og:description"
          content="Posso num ser. Mas em minha cabeça eu sou o milhor."
        />
       
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta property="og:locale" content="pt_BR" />
      </Head>
      <Game />
    </>
  );
}
