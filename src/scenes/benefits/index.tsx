import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    AcademicCapIcon,
    UserGroupIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'Neque adisipcing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Facilities",
        description:
            'Neque adisipcing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainers',
        description:
            'Neque adisipcing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hiddem: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Neque sapiente soluta ullam iure sequi libero illo
                        blanditiis qui saepe! Blanditiis.
                    </p>
                </motion.div>
                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* Graphic And Description */}

                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img
                        src={BenefitsPageGraphic}
                        alt="benefits-page-graphic"
                        className="mx-auto"
                    />
                    <div>
                        {' '}
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hiddem: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        Millions Of Happy Members Getting{' '}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* Description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hiddem: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sed cumque aspernatur ex
                                tempore iusto, voluptatem sequi quae possimus
                                minus officia consectetur explicabo architecto
                                et ad maxime dolor autem corrupti porro.
                            </p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Similique magnam hic, eum
                                adipisci illo tempora dolorum. Quia illum
                                praesentium aliquid, cumque, ipsam quam
                                accusantium eius assumenda, recusandae suscipit
                                maiores pariatur.
                            </p>
                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
