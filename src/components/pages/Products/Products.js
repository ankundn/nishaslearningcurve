import React from 'react';
import HeroSection from '../../HeroSection';
import {  homeObjFour } from './Data';
// import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <Pricing /> */}
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;