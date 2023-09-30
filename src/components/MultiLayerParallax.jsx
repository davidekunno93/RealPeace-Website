import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react"

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const background2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const background4 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const background6 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const background8 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const background0Y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "115%"]);
    const background3Y = useTransform(scrollYProgress, [0, 1], ["0%", "130%"]);
    const background4Y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "110%"])
    const textO = useTransform(scrollYProgress, [0, 1], ["100%", "50%"])


    return (
        <>
            <div ref={ref} className="parallax-complex">
                <motion.div style={{ y: textY, opacity: textO }} className="para-t"></motion.div>
                {/* <motion.img style={{ y: textY }} className="para-text" src="https://i.imgur.com/iuNhQlr.png" alt="" /> */}

                <motion.div style={{ y: background0Y }} className="para-1"></motion.div>
                <motion.div style={{ y: background2 }} className="para-2"></motion.div>
                <motion.div style={{ y: background4 }} className="para-3"></motion.div>
                <motion.div style={{ y: background8 }} className="para-4"></motion.div>
                <img src="https://i.imgur.com/1zt94zW.png" alt="" className="placeholder" />
            </div>
        </>
    );
}