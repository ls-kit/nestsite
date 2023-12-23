import Image from 'next/image'

import Hero from './components/Hero';
import Product from './components/Product_home';
import BOne from './components/Banner_one';
import BTwo from './components/Banner_two';
import ProductTwo from './components/ProductTwo';
import FeatureHome from './components/Feature_home';
import BlogHome from './components/Blog_home';
import Brand from './components/Brand';

export default function Home() {
  return (
    <>
    
    {/* Hero Section Start */}
    <Hero />
    {/* Hero Section End */}
    {/* Banner Section Start */}
    <BOne />
    {/* Banner Section End */}
    {/* Product Section Start */}
    <Product />
    {/* Product Section End */}
    {/* Banner Section Start Banner Two */}
    <BTwo />
    {/* Banner Section End */}
    {/* Product Section Start */}
    <ProductTwo />
    {/* Product Section End */}
    {/* Feature Section Start */}
    <FeatureHome />
    {/* Feature Section End */}
    {/* Blog Section Start */}
    <BlogHome />
    {/* Blog Section End */}
    {/* Brand Section Start */}
    <Brand />
    {/* Brand Section End */}
    {/* Footer Top Section Start */}

    </>
  )
}
