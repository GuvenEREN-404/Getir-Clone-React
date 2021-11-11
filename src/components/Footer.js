import Menu from "./ui/Menu"
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import 'animate.css'
import 'aos'
export default function Footer() {

    const menus = [
        {
            title:'Getir\'i Keşfedin',
            items: [
                {
                    title:'Hakkımızda'
                },
                {
                    title:'Kariyer'
                },
                {
                    title:'İletişim'
                },
                {
                    title:'COVID-19 Duyuru'
                },
                {
                    title:'Sosyal Sorumluluk Projeleri'
                },
            ]
        },
        {
            title:'Yardıma mı ihtiyacınız var?',
            items: [
                {
                    title:'Sıkça Sorulan Sorular'
                },
                {
                    title:'Kişisel Verilerin Korunması'
                },
                {
                    title:'Gizlilik Politikası'
                },
                {
                    title:'Kullanım Koşulları'
                },
                {
                    title:'Çerez Politikası'
                },
            ]
        },
        {
            title:'İş Ortağımız Olun',
            items: [
                {
                    title:'Bayimiz Olun'
                },
                {
                    title:'Deponuzu Kiralayın'
                },
                {
                    title:'GetirYemek Restoranı Olun'
                },
                {
                    title:'GetirÇarşı İşletmesi Olun'
                },
            ]
        }
    ]

    return (
        <div className="bg-white mt-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-4 pt-10">
                    <section>
                        <nav className="grid gap-y-4">
                            <h6 className="text-lg text-primary-brand-color">Getir'i indirin!</h6>
                            <a href="#" className="transition-all transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                            </a>
                            <a href="#" className="transition-all transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                            </a>
                            <a href="#" className="transition-all transform hover:scale-105">
                                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                            </a>
                        </nav>
                    </section>
                    {menus.map((menu, index) => <Menu key={index} {...menu}/>)}
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 mt-6 pt-6 mb-4 pb-4">
                    <div className=" text-sm text-gray-700 flex gap-x-8">
                        &copy; 2021 Getir
                        <a href="#" className="text-primary-brand-color">
                            Bilgi Toplumu Hizmetleri
                        </a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-700 transition-all hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <BsFacebook size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-700 transition-all hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <BsTwitter size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-700 transition-all hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <BsInstagram size={21}/>
                        </a>
                    </nav>
                </div> 
            </div>
        </div>
    )
}
