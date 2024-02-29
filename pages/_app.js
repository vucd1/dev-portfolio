import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider>
      <div className='main'>
        <AnimatePresence mode='wait'>
            <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default App;
