import React, { useState, useEffect } from 'react';
import { FaFacebook } from 'react-icons/fa'
import Slider from "react-slick"; 
import ReactFlagsSelect from 'react-flags-select';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
    
  const [selected, setSelected] = useState('TR');

  useEffect(() => {
    Aos.init({duration:1000});
}, [])

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500
    };
    
    const phones={
        US: '+1',
        DE: '+50',
        TR: '+90',
        GB: '+72',
        FR: '+54',
        IT: '+41'
    }

    return (
      <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg" alt="Nav"/>
                </div>
                <div>
                    <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" />
                </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div data-aos="zoom-in-down">
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"/>
                    <h3 className="mt-8 text-4xl font-semibold text-white">
                        Dakikalar içinde <br/>kapınızda
                    </h3>
                </div>
                
                    <div data-aos="fade-left" className="w-[400px] rounded-lg bg-gray-50 p-6">
                        <h4 className="text-primary-brand-color font-semibold text-center mb-4">Giriş yap veya kayıt ol</h4>
                        <div className="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                            countries={["US", "GB", "FR","DE","IT","TR"]}
                            customLabels={phones}
                            placeholder="Select Language"
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            className="flag-select" />
                            <label className="flex-1 relative block">
                                <input  type="number" maxlength="11" required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-non peer text-sm pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-700 peer-focus:h-5 peer-valid:h-5 peer-focus:text-xs peer-valid:text-xs peer-focus:text-primary-brand-color transition-all duration-300 peer-valid:text-primary-brand-color transition-all duration-300">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow h-12 flex-item-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color transition-all hover:bg-primary-brand-color hover:text-brand-yellow">
                            Telefon numarası ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-300 my-2 "/>
                        <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold ">
                        <FaFacebook size={20}/>
                        <span className="mx-auto">Facebook ile devam et</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
    
}
