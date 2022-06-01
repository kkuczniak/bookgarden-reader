import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { GlobalProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
