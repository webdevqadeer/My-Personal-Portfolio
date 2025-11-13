import  React , {useState } from "react";
import {Sidebar} from './components/Sidebar';
import {Navbar} from './components/Navbar';
import {About} from './components/About';
import {Resume} from './components/Resume';
import {Portfolio} from './components/Portfolio';
import {Certifications} from './components/Certifications';
import {Contact} from './components/ContactForm';

const App = () => {
  const [activePage, setActivePage] = useState('about');
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212]  text-white flex flex-col md:flex-row gap-6 p-6 ">
      <Sidebar isActive={sidebarActive} toggleSidebar={() => setSidebarActive(!sidebarActive)} />
      <main className="flex-1 bg-[#1e1e1f] border border-[#383838] rounded-xl p-4 md:p-8 shadow-2xl relative max-w-7xl mx-auto w-full">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {activePage === 'about' && <About />}
        {activePage === 'resume' && <Resume />}
        {activePage === 'portfolio' && <Portfolio />} 
        {activePage === 'certificate' && <Certifications />} 
        {activePage === 'contact' && <Contact />} 
      </main>
    </div>
  );
};

export default App;