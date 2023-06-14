import { motion } from 'framer';

import Button from '../../../Button/Button';
import Heading from '../../../Heading';
import Text from '../../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const Cyber = () => {
    return (
        <ContainerCommom id="Materias">
            <div>
                <TitleSection
                    title={{
                        English: "Cyber-Physical Systems",
                        Portugues: "Sistemas Ciberfísicos"
                    }}
                    className='mb-2'
                />
                <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                    <motion.div
                        className='flex w-full items-center justify-center lg:w-[45%]'
                        initial={{ x: 110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcited&mouthType=Serious&skinColor=Light' className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="My avatar" />
                    </motion.div>
                    <motion.div
                        className='flex w-[90%] flex-col items-center lg:w-[55%]'
                        initial={{ y: 110, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Heading
                            size="lg"
                            className='mb-4'
                            text={{
                                English: 'Teacher Andrey Cabral',
                                Portugues: 'Professor Andrey Cabral'
                            }}
                        />
                        <Text
                            className='px-0 text-center sm:px-4'
                            size='lg'
                            text={{
                                English: `Embark on an exciting journey through Cyber-Physical Systems! In this discipline, 
                                I immersed myself in the world of microprocessors, communication, and cloud services applied to 
                                the Internet of Things (IoT). I explored architectures, networks, operating systems, and cloud 
                                computing, connecting the physical world to the digital world.`,
                                Portugues: `uma jornada emocionante pelos Sistemas Ciberfísicos! Nesta disciplina, 
                                mergulhei no mundo dos microprocessadores, comunicação e serviços em nuvem aplicados à 
                                Internet das Coisas (IoT). Explorei arquiteturas, redes, sistemas operacionais e nuvens 
                                computacionais, conectando o mundo físico ao digital.`
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Cyber;
