import { Dispatch, SetStateAction, useEffect } from "react";

import { Carousel } from "react-carousel3";
import MediaQuery from "react-responsive";

import { motion } from 'framer';

import { TitleSection } from "@/components/CommomComponents";
import ContainerCommom from "@/components/ContainerCommom";

import Benz from '../../../assets/Benz.png';
import Groovit from '../../../assets/Groovit.png';
import TDE from '../../../assets/TDE.png';
import Almirante from '../../../assets/Almirante.png';

import { ProjectCardProps, ProjectCards } from "./ProjectsStyled";

type breakPointsProps = {
    breakPoint: number,
    width: number,
    height: number
}

const Projects = ({ loading }: { loading?: Dispatch<SetStateAction<boolean>> }) => {

    const BreakPoints: breakPointsProps[] = [
        { breakPoint: 0, width: 500, height: 330 },
        { breakPoint: 400, width: 700, height: 350 },
        { breakPoint: 768, width: 600, height: 380 },
        { breakPoint: 1000, width: 900, height: 460 },
    ]

    const ProjectsCards: ProjectCardProps[] = [
        {
            imgSrc: Benz.src,
            titleComponent: { Portugues: "Benz", English: "Benz" },
            description: { Portugues: "Projeto de um jogo desenvolvido na engine construct 3", English: "Game project developed in Construct 3 engine" },
            Repo: "https://github.com/Berdegeus",
            Site: "https://www.construct.net/en"
        },
        {
            imgSrc: Groovit.src,
            titleComponent: { Portugues: "Groovit", English: "Groovit" },
            description: { Portugues: "Player de Musica em JavaFX", English: "Music Player in JavaFX" },
            Repo: "https://github.com/Berdegeus",
            Site: "https://openjfx.io/"
        },
        {
            imgSrc: Almirante.src,
            titleComponent: { Portugues: "Almirante Turismo", English: "Almirante Turismo" },
            description: { Portugues: "Site com o objetivo de promover o turismo na cidade de almirante tamandaré", English: "Website aimed at promoting tourism in the city of Almirante Tamandaré" },
            Repo: "https://github.com/Berdegeus/Akame-Wiki",
            Site: "https://Bernardo.github.io/almirante-turismo/"
        },
        {
            imgSrc: TDE.src,
            titleComponent: { Portugues: "Este site!", English: "This website!" },
            description: { Portugues: "Este portifolio também é parte de um dos trabalhos desenvolvidos na matéria", English: "This portfolio is also part of one of the projects developed in the subject" },
            Repo: "https://github.com/Berdegeus",
        },
    ]


    useEffect(() => {
        if (loading != null) {
            loading(false);
        }
    }, [])

    return (
        <ContainerCommom id="Projetos">
            <div>
                <TitleSection title={{
                    English: "Projects",
                    Portugues: "Projetos"
                }} />
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

export default Projects;