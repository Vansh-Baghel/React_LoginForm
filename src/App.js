import Footer from './components/Footer';
import Form from './components/Form';
import Heading from './components/Heading';
import Inputs from './components/Inputs';
import Navbar from './components/Navbar';

function App() {
  const data = (fName , lName , email) => {
    alert(fName + " " + lName + " " + email);
  }

  return (
    <div>
      <Navbar />
      <Heading />
    <Form>
      <Inputs onSubmitInApp={data} />
    </Form>
    <Footer />
    </div>
  )
}

export default App;
