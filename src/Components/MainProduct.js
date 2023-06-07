import React from 'react'
import Header from './Header'
import '../Style/MainProduct.css';
import Facewash from '../media/facewash.png';
import itra2 from '../media/itra2.png';
import Shampoo from '../media/Shampoo.png';
import itra1 from '../media/itra1.png'
import kas from '../media/kas.png';
import luk from '../media/luk.png';
import kdoxi from '../media/kdoxi.png';
import levo from '../media/levo.jpeg';
import pantojio  from '../media/pantojio.jpeg';


function MainProduct() {
  return (
    <>
    
    <Header />
    <div className="Products">
        <div className="HeadingInfo m-5 ">
        <h3 className="mt-2 mb-3 overflow-hidden">Our Products Range </h3>

        <p>We Kaosmettika lab are a leading and distinguished Manufacturer, Exporter, Supplier, Retailer, Trader, Distributor and Service Provider of quality Antibiotic Drugs, Antifungal Drugs, Antihistamines, Face Wash and Gastrointestinal drug.</p>
        </div>
        <div className="DProducts">
        <div className="firstProduct">
        <h5>Face Wash</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={Facewash} />
            <p className="ProductName">OKKLAY Facewash</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Antifungal Drugs</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={itra1} />
            <p className="ProductName">ITRA Kas 100 Capsule</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Vitamin Supplements</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={kas} />
            <p className="ProductName">KAS-VIT Tablet</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Medicines Tonics and Drugs</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={luk} />
            <p className="ProductName">Luk Cream</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Pharmaceutical raw materials</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={itra2} />
            <p className="ProductName">ITRA KAS 200 Capsule</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Antibiotic Drugs</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={kdoxi} />
            <p className="ProductName">KDOXI Plus Capsule</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Hair Shampoo</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={Shampoo} />
            <p className="ProductName">LUK Plus Shampoo</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Antihistamines</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={levo} />
            <p className="ProductName">Levoeco Tablet</p>
            </div>
        </div>
        <div className="firstProduct">
        <h5>Gastrointestinal drug</h5>
        <div className="ProductIC">
            <img className="ImgSrc" src={pantojio} />
            <p className="ProductName">Pantojio Tablet</p>
            </div>
        </div>
        
       

        </div>
       
       
    </div>




    </>
  )
}

export default MainProduct