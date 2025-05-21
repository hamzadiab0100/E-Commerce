import React,{Suspense,} from 'react';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { ProductProvider, useProduct } from './components/ProductContext';
import Footer from './components/Footer';
import Productesview from './components/Productesview';
import ScrollToTop from './components/ScrollToTop';
import ProductDetails from './components/ProductDetails';
import Account from './components/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import { AuthProvider } from './components/AuthContext';
import Cart from './components/Cart';





function App() {
const {bestproduct}=useProduct();
 const year =new Date().getFullYear();

  return (
    
    <ProductProvider>
 <Suspense fallback={<div className=' h-screen w-full flex justify-center items-center'>
        <div className='w-[100px] h-[100px] border-4 rounded-full border-t-Secondary2  border-b-Secondary2  animate-spin '></div>
      </div>}>
<div className="flex items-center justify-center h-screen bg-gray-100 px-4 text-center lg:hidden">
      <div className="max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-6xl mb-4 text-blue-500">🖥️</div>
        <h1 className="text-xl font-semibold mb-2 text-gray-800">
          Our site is optimized for larger screens.
        </h1>
        <p className="text-gray-600 mb-4">
          Kindly switch to a tablet or laptop to continue.
        </p>
        <footer className="text-sm text-gray-400">© {year} TwinStack</footer>
      </div>
    </div>

    <div className='xs:hidden lg:block'>
      
      
   

    
    <Router>
    <AuthProvider >
    <ScrollToTop />
     <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<SignUp signup />} />
      <Route path='/login' element={<SignUp />} />
      <Route path='/account' element={<Account />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/produts/flashsales' element={<Productesview data={bestproduct}  suptitle="Today’s" title="Flash Sales" />} />
      <Route path='/products/bestsellingproducts' element={<Productesview suptitle="This Month" title="Best Selling Products" data={bestproduct} />} />
      <Route path='/products/exploreourproducts' element={<Productesview suptitle="Our Products" title="Explore Our Products" data={bestproduct}  />} />
      <Route path="/product/:name" element={<ProductDetails data={bestproduct} />} />
     
    </Routes>
    <Footer />  
     </AuthProvider >
    </Router>
    </div>
    </Suspense>
    </ProductProvider>
    
  )
}

export default App