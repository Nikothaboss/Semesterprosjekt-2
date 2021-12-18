import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Box, Flex } from '@chakra-ui/layout';
import { useCallback, useEffect } from 'react';




const Burger = ({showMenu, toggleMenu}) => {

    const burgerUpperLine = useAnimation();
    const burgerMiddleLine = useAnimation();
    const burgerLowerLine = useAnimation();

    const burgerSequence = useCallback(() => {
        burgerUpperLine.start(
          showMenu
            ? { rotate: [0, 45], y: [0, 10], transition: { duration: 0.4 } }
            : { rotate: [45, 0], y: [10, 0], transition: { duration: 0.4 } }
        );
        burgerMiddleLine.start(
          showMenu
            ? { opacity: [1, 0], transition: { duration: 0.4 } }
            : { opacity: [0, 1], transition: { duration: 0.4 } }
        );
        burgerLowerLine.start(
          showMenu
            ? { rotate: [0, -45], y: [0, -10], transition: { duration: 0.4 } }
            : { rotate: [-45, 0], y: [-10, 0], transition: { duration: 0.4 } }
        );
      }, [burgerUpperLine, burgerMiddleLine, burgerLowerLine, showMenu]);
    
      useEffect(() => {
        burgerSequence();
      }, [burgerSequence]);

    const MotionBox = motion(Box);
    const MotionFlex = motion(Flex)

    return (
        <MotionFlex layout className='hamburger' onClick={toggleMenu} height="1.4rem" flexDir="column" justifyContent="space-between">
            <MotionBox
            layout
            bg="#f3f3f3"
            width="2.2rem"
            height="4px"
            animate={burgerUpperLine}
            className='line'
            ></MotionBox>

            <MotionBox
            bg="#f3f3f3"
            width="1.5rem"
            height="4px"
            animate={burgerMiddleLine}
            className='line'
            margin="5px 0"
            ></MotionBox>

            <MotionBox
            bg="#f3f3f3"
            width="2.2rem"
            height="4px"
            animate={burgerLowerLine}
            className='line'
            ></MotionBox>
      </MotionFlex>
    )
}

export default Burger
