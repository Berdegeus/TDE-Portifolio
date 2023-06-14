import { Dispatch, SetStateAction, useEffect } from "react";

import { Carousel } from "react-carousel3";
import MediaQuery from "react-responsive";

import { motion } from 'framer';

import ContainerCommom from "@/components/ContainerCommom";

import Batalha from '../../../assets/Batalha.png';
import Rega from '../../../assets/Rega.png';
import Calculadora from '../../../assets/Calculadora.png';

import { ProjectCardProps, ProjectCards } from "./ProjectsStyled";

type breakPointsProps = {
    breakPoint: number,
    width: number,
    height: number
}

const Projects2 = ({ loading }: { loading?: Dispatch<SetStateAction<boolean>> }) => {

    const BreakPoints: breakPointsProps[] = [
        { breakPoint: 0, width: 500, height: 330 },
        { breakPoint: 400, width: 700, height: 350 },
        { breakPoint: 768, width: 600, height: 380 },
        { breakPoint: 1000, width: 900, height: 460 },
    ]

    const ProjectsCards: ProjectCardProps[] = [
        {
            imgSrc: Calculadora.src,
            titleComponent: { Portugues: "Calculadora", English: "Calculator" },
            description: { Portugues: "Calculadora de tabela verdade baseada em expreções logicas", English: "Truth table calculator based on logical expressions" },
            Repo: "https://github.com/Berdegeus/LogicaMatematica/tree/main/Codes/Tabela%20Verdade",
        },
        {
            imgSrc: Rega.src,
            titleComponent: { Portugues: "Rega automatica", English: "Automatic Irrigation" },
            description: { Portugues: "projeto de rega automatca usando ESP32 e Blynk cloud", English: "Automatic irrigation project using ESP32 and Blynk cloud" },
            Repo: "https://github.com/Berdegeus",
        },
        {
            imgSrc: Batalha.src,
            titleComponent: { Portugues: "Batalha naval", English: "Battleship Game" },
            description: { Portugues: "Batalha Naval online em python com PyGames", English: "Online Battleship game in Python with PyGames" },
            Repo: "https://github.com/Berdegeus/BatalhaNaval",
        },
    ];
    

    useEffect(() => {
        if (loading != null) {
            loading(false);
        }
    }, [])

    return (
        <ContainerCommom id="Projetos">
            <div>
                <motion.div
                    className="flex items-center justify-center my-16"
                    initial={{ scale: 0.90, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    {
                        BreakPoints.map((item, i) => {
                            return <MediaQuery key={i} maxWidth={BreakPoints.length - 1 == i ? 9999 : BreakPoints[i + 1].breakPoint} minWidth={item.breakPoint}>
                                <Carousel height={item.height} width={item.width} yOrigin={item.height / 10} yRadius={item.height / 6} xOrigin={item.width / 2} xRadius={item.width / 2.3} autoPlay={true}>
                                    {
                                        ProjectsCards.map((item, i) => {
                                            return <ProjectCards
                                                key={i}
                                                imgSrc={item.imgSrc}
                                                titleComponent={item.titleComponent}
                                                description={item.description}
                                                Repo={item.Repo}
                                                Site={item.Site}

                                            />
                                        })
                                    }
                                </Carousel>
                            </MediaQuery>
                        })
                    }
                </motion.div>
            </div>
        </ContainerCommom>
    );
}

export default Projects2;