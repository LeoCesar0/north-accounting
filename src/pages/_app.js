import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return  (
    <div className='flex flex-col' >
        <Header />
      <main className='flex-1 bg-background-color'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
    

export default MyApp
