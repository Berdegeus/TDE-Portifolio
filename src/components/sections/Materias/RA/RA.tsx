import { motion } from 'framer';

import Heading from '../../../Heading';
import Text from '../../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const Ra = () => {
    return (
        <ContainerCommom id="Materias">
            <div>
                <TitleSection
                    title={{
                        English: "Algorithmic Reasoning",
                        Portugues: "Raciocínio Algorítmico"
                    }}
                    className='mb-3'
                />
                <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                    <motion.div
                        className='flex w-full items-center justify-center lg:w-[45%]'
                        initial={{ x: 110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="My avatar" />
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
                                English: 'Teacher Marina de Lara',
                                Portugues: 'Professor Marina de Lara'
                            }}
                        />
                        <Text
                            className='px-0 text-center sm:px-4'
                            size='lg'
                            text={{
                                English: `Uncover the secrets of Python programming with me! In this discipline, 
                                I had the opportunity to dive into the fascinating world of algorithmic reasoning. 
                                Through practical lessons, I learned the essential foundations of programming and the 
                                art of turning ideas into code. It was amazing to discover how to develop efficient solutions 
                                and tackle challenges in a creative way.`,
                                Portugues: `Desvende os segredos da programação Python comigo! Nesta disciplina, 
                                tive a oportunidade de mergulhar no fascinante mundo do raciocínio algorítmico. 
                                Por meio de aulas práticas, aprendi os fundamentos essenciais da programação e a 
                                arte de transformar ideias em código. Foi incrível descobrir como desenvolver soluções 
                                eficientes e enfrentar desafios de maneira criativa.`
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Ra;
