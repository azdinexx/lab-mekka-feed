import React from 'react';
import { Happy } from '@/components/icones/happy';
import { Normal } from '@/components/icones/normal';
import { Sad } from '@/components/icones/sad';
import { VeryHappy } from '@/components/icones/very-happy';
import { VerySad } from '@/components/icones/very-sad';
import { useSurvey } from '@/lib/useSurvey';
import { motion } from 'framer-motion';

function Emrg() {
  const { setCurrent, current, query, setQuerry } = useSurvey();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      exit={{ opacity: 0 }}
      className='flex gap-10 items-center my-auto '
    >
      <motion.div
        className='flex flex-col gap-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            setQuerry({
              ...query,
              emrg: 'ABSOLUTELY_DISATISFIED',
            });
            setCurrent(current + 1);
          }}
        >
          <VerySad width={90} height={90} />
        </motion.button>
        <p className='text-center'>
          Absolutely <br /> disatisfied
        </p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            emrg: 'DISATISFIED',
          });
          setCurrent(current + 1);
        }}
      >
        <Sad width={90} height={90} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            emrg: 'OK',
          });
          setCurrent(current + 1);
        }}
      >
        <Normal width={90} height={90} />
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className=' mb-auto'
        onClick={() => {
          setQuerry({
            ...query,
            emrg: 'SATISFIED',
          });
          setCurrent(current + 1);
        }}
      >
        <Happy width={90} height={90} />
      </motion.button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-4'
      >
        <button
          onClick={() => {
            setQuerry({
              ...query,
              emrg: 'EXTREMELY_SATISFIED',
            });
            setCurrent(current + 1);
          }}
        >
          <VeryHappy width={90} height={90} />
        </button>
        <p className='text-center'>
          Absolutely <br /> satisfied
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Emrg;
