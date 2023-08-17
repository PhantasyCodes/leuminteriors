import React, {useState, useEffect, useRef} from 'react';
import Button from '../components/button';
import { IoCall, IoPerson } from "react-icons/io5"; 
import { IonIcon } from '@ionic/react';  
import { searchOutline } from 'ionicons/icons';
import './css/Homepage.css';
import mainImage_a_1 from '../assets/greykitchen.jpg';
import mainImage_a_2 from '../assets/whitekitchen.jpg';
import mainImage_a_3 from '../assets/beigebathroom.jpg';
import whitelogo from '../assets/whitelogo.png';
import mainImage_b_1 from '../assets/diningset.jpg';  // Assuming your new images have these names
import mainImage_b_2 from '../assets/kingbed.jpg';
import mainImage_b_3 from '../assets/brownsittingspace.jpg';
import mainImage_c_1 from '../assets/carousel_bed_1.jpg';
import mainImage_c_2 from '../assets/carousel_bed_2.jpg';
import mainImage_c_3 from '../assets/carousel_bed_3.jpg'
import mainImage_c_4 from '../assets/carousel_kitchen_1.jpg'
import mainImage_c_5 from '../assets/carousel_kitchen_2.jpg'
import mainImage_c_6 from '../assets/carousel_kitchen_3.jpg'
import mainImage_c_7 from '../assets/carousel_kitchen_4.jpg'
import mainImage_c_8 from '../assets/carousel_kitchen_5.jpg'

function Homepage() {

    function handleCallClick() {
        console.log('Call icon clicked!');    
    }
    
    function handleProfileClick() {
        console.log('Profile icon clicked!');
    }
 
    const [opacityA, setOpacityA] = useState(1);
    const [opacityB, setOpacityB] = useState(1);
    const [currentImageIndexA, setCurrentImageIndexA] = useState(0);
    const [currentImageIndexB, setCurrentImageIndexB] = useState(0);
    const [currentSide, setCurrentSide] = useState('A'); // 'A' for left, 'B' for right
    const carouselRef = useRef(null);

    const imagesA = [mainImage_a_1, mainImage_a_2, mainImage_a_3];
    const imagesB = [mainImage_b_1, mainImage_b_2, mainImage_b_3];

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };
    
    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
        }
    };

    const handleImageClick = (imageSrc) => {
        // Do something with the clicked image, maybe open a modal, navigate to another page, etc.
        console.log(`Image clicked: ${imageSrc}`);
    };

    const carouselItems = [
        { src: mainImage_c_1, text: 'Overlay Text 1' },
        { src: mainImage_c_2, text: 'Overlay Text 2' },
        { src: mainImage_c_3, text: 'Overlay Text 3' },
        { src: mainImage_c_4, text: 'Overlay Text 4' },
        { src: mainImage_c_5, text: 'Overlay Text 5' },
        { src: mainImage_c_6, text: 'Overlay Text 6' },
        { src: mainImage_c_7, text: 'Overlay Text 7' },
        { src: mainImage_c_8, text: 'Overlay Text 8' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSide === 'A') {
                setOpacityA(0); // Start fading out the current image for A

                setTimeout(() => {
                    setCurrentImageIndexA(prevIndex => (prevIndex + 1) % imagesA.length);
                }, 50); // Wait for half the transition time before changing image

                setTimeout(() => {
                    setOpacityA(1); // Start fading in the next image for A
                    setCurrentSide('B'); // Switch to the right side
                }, 100); // Wait for the full transition time to fade in

            } else {
                setOpacityB(0); // Start fading out the current image for B

                setTimeout(() => {
                    setCurrentImageIndexB(prevIndex => (prevIndex + 1) % imagesB.length);
                }, 50); // Wait for half the transition time before changing image

                setTimeout(() => {
                    setOpacityB(1); // Start fading in the next image for B
                    setCurrentSide('A'); // Switch back to the left side
                }, 100); // Wait for the full transition time to fade in
            }

        }, 4000); // Image on one side will change every 6 seconds

        return () => clearInterval(interval);
    }, [currentSide]);

    return (
        <div className="homepage-container">
            <header className="header-section">
    
                {/* Logo Section */}
                <div className="logo-section">
                    <img src={whitelogo} alt="Company Logo" className="company-logo" />
                </div>
    
                <div className="main-content">
                {/* Buttons Section */}
                <div className="buttons-section">
                <div className="custom-button dropdown">
                OFFERS
                <div className="dropdown-content">
                    <a href="#">TODAYS DEALS!!!</a>
                    <a href="#">KITCHEN</a>
                    <a href="#">LIVING</a>
                    <a href="#">BATHROOMS</a>
                </div>
            </div>
            <div className="custom-button dropdown">
                HOME
                <div className="dropdown-content">
                    <a href="#">BOARDS</a>
                    <a href="#">COUNTER TOPS</a>
                    <a href="#">DOORS AND FRAMES</a>
                    <a href="#">CABINETRY ACCESSORIES</a>
                    <a href="#">TILES</a>
                </div>
            </div>
            <div className="custom-button dropdown">
                LIGHTING
                <div className="dropdown-content">
                    <a href="#">LED</a>
                    <a href="#">WALL LAMPS</a>
                    <a href="#">CHANDELIERS</a>
                    <a href="#">MIRROR STRIPS</a>
                    <a href="#">DESK LAMPS</a>
                    <a href="#">FLOOD LIGHTS</a>
                </div>
            </div>
            <div className="custom-button dropdown">
                ACCESSORIES
                <div className="dropdown-content">
                    <a href="#">DRAWER RAILS</a>
                    <a href="#">HANGING RODS</a>
                    <a href="#">HANDLES</a>
                    <a href="#">HINGES</a>
                    <a href="#">FULL CABINETS</a>
                </div>
            </div>
            <div className="custom-button dropdown">
                FURNITURE
                <div className="dropdown-content">
                    <a href="#">BEDS</a>
                    <a href="#">CHAIRS</a>
                    <a href="#">TABLES</a>
                    <a href="#">SHELVES</a>
                    <a href="#">DESKS</a>
                </div>
            </div>
            </div>
    
            <div className="right-section">

            <div className="search-container">
            
                        <div className="search-icon">
                            <IonIcon icon={searchOutline} />
                            
                        </div>
                        <input type="text" className="search-input" placeholder="Search..." />
                    </div>

                    <div className="icon-container">
                        <IoCall size={24} className="call-icon" onClick={handleCallClick} />
                        <IoPerson size={24} className="profile-icon" onClick={handleProfileClick} />
                    </div>

                </div>
                </div>
            </header>

            <div className="images-section">
    <div className="image-container">
        {imagesA.map((imgSrc, index) => (
            <img 
                key={index}
                src={imgSrc}
                alt="Descriptive alt text"
                className="mainImage"
                style={{
                    opacity: currentImageIndexA === index ? opacityA : 0,
                    zIndex: currentImageIndexA === index ? 2 : 1
                }}
            />
        ))}
        <div className="overlay">
            Your text or content here
        </div>
    </div>
    <div className="image-container">
        {imagesB.map((imgSrc, index) => (
            <img 
                key={index}
                src={imgSrc}
                alt="Descriptive alt text"
                className="mainImage"
                style={{
                    opacity: currentImageIndexB === index ? opacityB : 0,
                    zIndex: currentImageIndexB === index ? 2 : 1
                }}
            />
        ))}
        <div className="overlay">
            Your text or content for second image
        </div>
    </div>
</div>
    <div className="products-title">
      <p>PRODUCTS</p>
    </div>
    <div className="carousel-container">
            <button className="carousel-arrow left" onClick={handlePrevClick}>
                <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <div className="carousel-images" ref={carouselRef}>
                {carouselItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="carousel-image" 
                        onClick={() => handleImageClick(item.src)}
                        style={{ backgroundImage: `url(${item.src})` }}
                    >
                        <div className="overlay-text">{item.text}</div>
                    </div>
                ))}
            </div>
            <button className="carousel-arrow right" onClick={handleNextClick}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
        </div>
 </div>
    );
}
export default Homepage;
