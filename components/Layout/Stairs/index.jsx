import React from 'react';
import { motion } from 'framer-motion';

export default function Stairs({children}) {
    const anim = (variants, custom) => {
        return {
            initial: 'initial',
            animate: 'enter',
            exit: 'exit',
            variants,
            custom
        }
    }

    const expand = {
        initial: {
            top: 0,
        },
        enter: (i) => ({
            top: '100%',
            transition: {
                duration: 0.4,
                delay: 0.05 * i,
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i) => ({
            height: '100%',
            transition: {
                duration: 0.3,
                delay: 0.05 * i,
            },
        })
    }

    const overlay = {
        initial: {
            opacity: 1
        },
        enter: {
            opacity: 0,
        },
        exit: {
            opacity: 1
        }

    }

    const numOfColumns = 5;
    return (
        <div  className='page stairs'>
            <motion.div {...anim(overlay)} className='background'></motion.div>
            <div className='transition-container'>
                {
                    [...Array(numOfColumns)].map((_, i) => { //_ is often used as a throwaway variable. In other words, just ignore it. Increments it by 1 to return 1-5 instead of 0-4.
                        return <motion.div {...anim(expand, numOfColumns - i)} key={i}/>
                    })   
                }
            </div>
            {children}
        </div>
    )
}

