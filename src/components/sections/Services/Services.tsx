import { BsGearFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";

import { MdPhoneAndroid } from "react-icons/md";
import { ServiceCard } from "./ServicesStyled";


import ContainerCommom from "@/components/ContainerCommom";
import { TitleSection } from "@/components/CommomComponents";

const Services = () => {
    return (
        <ContainerCommom id="Aprendizado">
            <div>
                <TitleSection
                    title={{
                        English: "Services",
                        Portugues: "Habilidades aprendidas"
                    }}
                    className="mb-4"
                />
                <div
                    className="grid grid-cols-1 gap-6 w-full px-3 content-center mt-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8"
                >
                    <ServiceCard
                        icon={BsGearFill}
                        titleElement={{ Portugues: "Python", English: "Python" }}
                        x={-200}
                        text={{ Portugues: "Criação de scripts python", English: "Creation of Python scripts" }}
                    />
                    <ServiceCard
                        icon={RiCodeSSlashFill}
                        titleElement={{ Portugues: "Criação de sites", English: "Website Development" }}
                        y={-200}
                        text={{ Portugues: "Construção do design e funcionamento de sites.", English: "Construction of website design and functionality" }}
                    />
                    <ServiceCard
                        icon={MdPhoneAndroid}
                        titleElement={{ Portugues: "IOT", English: "IoT" }}
                        x={200}
                        text={{ Portugues: "Desenvolvimento de projetos IOT com ESP32", English: "Development of IoT projects with ESP32" }}
                    />
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Services;
