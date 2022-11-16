import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({children}) => (
    <>
    <Head>
        <title> my portafolio</title>
    </Head>
    <Navbar/> 
    <main className = "container py-4">
        {children}
    </main>
    
    </>
)
export default Layout