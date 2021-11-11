import { useState,useEffect } from "react";
import Slider from "react-slick"; 
import Banners from 'api/banners.json'; 
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Campaigns() {

    const [banners ,setBanners] = useState([]);

    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true
        });
        setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };

    return (
        <div data-aos="fade-left" className="py-8">
            <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
            <Slider {...settings}>               
                {banners.length && banners.map((banner,index) => (
                    <div className="rounded" key={banner.id}>
                        <div className=" block px-2"> 
                            <img className="rounded-md" src={banner.image}/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
