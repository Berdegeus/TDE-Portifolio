import { motion } from 'framer';


import Heading from '../../../Heading';
import Text from '../../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const ExpCriativa = () => {
    return (
        <ContainerCommom id="Materias">
            <div>
                <TitleSection
                    title={{
                        English: "Creative Experience",
                        Portugues: "Experiência Criativa"
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
                        <Heading
                            size="lg"
                            className='mb-4'
                            text={{
                                English: 'Teacher Luiz Antônio Pavão',
                                Portugues: 'Professor Luiz Antônio Pavão'
                            }}
                        />
                        <Text
                            className='px-0 text-center sm:px-4'
                            size='lg'
                            text={{
                                English: `Welcome to my creative world! In this discipline, 
                                I had the opportunity to explore my creativity through four exciting projects. 
                                With collaboration among students and self-learning, I immersed myself in stimulating challenges 
                                and discovered new possibilities in the field of computing. 
                                Here you will find a series of exciting projects that explored creativity and innovation in the field of computing.`,
                                Portugues: `Sejam bem-vindos ao meu mundo criativo! Nesta disciplina, 
                                tive a oportunidade de explorar minha criatividade por meio de quatro projetos empolgantes. 
                                Com a colaboração entre alunos e o aprendizado autodidata, mergulhei em desafios estimulantes 
                                e descobri novas possibilidades na área da computação. 
                                Aqui você encontrará uma série de projetos emocionantes que exploraram a criatividade e a inovação no campo da computação. `
                            }}
                        />
                    </motion.div>
                    <motion.div
                        className='flex w-full items-center justify-center lg:w-[45%]'
                        initial={{ x: 110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Black&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Light' className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="My avatar" />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default ExpCriativa;
