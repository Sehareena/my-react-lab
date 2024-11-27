
import React from 'react';
import './Components/style/app.css'; // Import global styles
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import FooterApp from './Components/footer';
import ContactForm from './Components/contactform';
function App() {
return (
<div>
<Navbar />
<LandingPage />

<ContactForm/>
<FooterApp/>

</div>
);
}
export default App;