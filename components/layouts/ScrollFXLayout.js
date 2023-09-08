import { motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';

const animateOnScroll = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Layout = ({ children, title }) => {
  const siteTitle = `${title} - Kalindu Adikari`;

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.advanced-motion-element');

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const topPosition = rect.top;
        const bottomPosition = rect.bottom;

        const isElementOnScreen = topPosition < window.innerHeight && bottomPosition >= 0;
        if (isElementOnScreen) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={animateOnScroll}
      transition={{ duration: 0.8, type: 'spring', damping: 10, stiffness: 100 }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{siteTitle}</title>
            <meta name="twitter:title" content={siteTitle} />
            <meta property="og:title" content={siteTitle} />
          </Head>
        )}
        <motion.div
          className="advanced-motion-element"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </>
    </motion.article>
  );
};

export default Layout;
