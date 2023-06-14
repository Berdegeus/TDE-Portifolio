import { motion } from 'framer';

import Heading from '../../../Heading';
import Text from '../../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const Logica = () => {
    return (
        <ContainerCommom id="Materias">
            <div>
                <TitleSection
                    title={{
                        English: "Mathematical Logic",
                        Portugues: "Lógica Matemática"
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
                                English: 'Teacher Rafaela Otemaier',
                                Portugues: 'Professora Rafaela Otemaier'
                            }}
                        />
                        <Text
                            className='px-0 text-center sm:px-4'
                            size='lg'
                            text={{
                                English: `Develop your computational logical reasoning in this engaging discipline. 
                                I learned to model real-world problems using logical language and apply deduction methods 
                                and mathematical proofs. It was an enriching experience, demystifying logic and allowing me to solve 
                                structured problems efficiently and creatively.`,
                                Portugues: `Desenvolva seu raciocínio lógico computacional nesta disciplina envolvente. 
                                Aprendi a modelar problemas do mundo real utilizando linguagem lógica e a aplicar métodos 
                                de dedução e provas matemáticas. Foi uma experiência enriquecedora, descomplicando a lógica e 
                                me permitindo resolver problemas estruturados de forma eficiente e criativa.`
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
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=BlondeGolden&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="My avatar" />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Logica;
