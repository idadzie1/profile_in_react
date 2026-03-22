import Nav from "./components/Nav";
import Header from './components/Header'
import About from './sections/About'
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import MessageForm from "./sections/MessageForm";
import Footer from './components/Footer'

const App = () => {  

  return (
    <>
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <MessageForm />
      <Footer />
    </>  
  )
}

export default App

