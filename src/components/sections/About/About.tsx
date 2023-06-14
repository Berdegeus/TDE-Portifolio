import { motion } from 'framer';

import Text from '../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const About = () => {
    return (
        <ContainerCommom id="Sobre">
            <div>
                <TitleSection
                    title={{
                        English: "",
                        Portugues: "Sobre o que você vai encontrar por aqui :D"
                    }}
                    className='mb-2'
                />
                <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                    <motion.div
                        className='flex w-[90%] flex-col items-center lg:w-[55%]'
                        initial={{ y: 110, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Text
                            className='px-0 sm:px-4'
                            size='lg'
                            text={{
                                English: ``,
                                Portugues: `Olá a todos! Bem-vindos ao meu portfólio, onde vocês poderão conhecer todas as aventuras 
                                e desafios que enfrentei durante o meu primeiro período de Ciência da Computação na PUCPR. 
                                Aqui você encontrará projetos incríveis de todas as disciplinas que tive o prazer de cursar. 
                                Então, vamos em frente e divirtam-se explorando tudo o que aprendi!`
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default About;