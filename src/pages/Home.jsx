import React from 'react';
import Hero from "../components/Hero";
import ProductSlider from '../components/ProductSlider';
import { Frame } from '../assets';
import Category from '../components/Category';
import Categories from '../components/Categories';
import Arrival from '../components/Arrival';
import Heroend from '../components/Heroend';
import { useProduct } from '../components/ProductContext';

const Home = () => {
  const {hamza,bestproduct}= useProduct();

  return (
 <>
 <Hero />
 <ProductSlider suptitle="Today’s" title="Flash Sales" link="/produts/flashsales" data={bestproduct} Arrow all slider/>
 <div className='container mx-auto'> <hr /></div>
 <Category />
 <ProductSlider suptitle="This Month" title="Best Selling Products" data={bestproduct} slider link="/products/bestsellingproducts"  />
 <Categories />
 <ProductSlider suptitle="Our Products" title="Explore Our Products" data={bestproduct} link="/products/exploreourproducts"   />
 <Arrival />
 <Heroend />

 
 </>
  )
}

export default Home