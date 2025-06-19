import React from 'react';

export default function About() {
    return (
        <>
            <div className='flex justify-center items-center mt-[2px] mb-[2px]'>
                <h3 className="text-[6vw] font-bold text-emerald-900">About Us</h3>
            </div>
            <div className='flex justify-center text-center mx-[2px]'>
                <p className='text-justify mx-[2px] indent-[100px]'>Welcome to GeoPeek, your one-stop destination for exploring insightful and essential information about countries around the world. Whether you're a student, traveler, or just a curious mind, GeoPeek makes it easy to discover details such as a country's independence status, capital city, spoken languages, currency, and more—all in one place. Our platform is designed to be informative, user-friendly, and visually engaging, making learning about the world both fun and efficient.</p>
            </div>
            <div className='flex justify-center text-center mx-[2px] mb-[2px]'>
                <p className='text-justify mx-[2px] indent-[100px]'>We also bring the world closer to you by integrating interactive Google Maps, allowing you to locate countries geographically and get a visual sense of their region and borders. From national flags to landlocked status, area, and even UN membership status, GeoPeek gives you a broader perspective on every nation. Whether you're comparing multiple countries or just diving deep into one, GeoPeek ensures you get reliable and meaningful insights.</p>
            </div>
            <div className='flex justify-center items-center '>
                <h3 className="text-center text-2xl font-semibold text-emerald-600 mb-3">What GeoPeek Offers:</h3>
            </div>
            <div className='flex justify-center items-center mx-[2px]'>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li className='text-justify'><strong>🏛️ Political and cultural details</strong> like independence status, capital, and official languages</li>
                    <li className='text-justify'><strong>💱 Currency information</strong> and regional categorization (continent, subregion)</li>
                    <li className='text-justify'><strong>🏴‍☠️ National flag display</strong> for visual representation of each country</li>
                    <li className='text-justify'><strong>🧭 Geographical facts</strong> such as area, landlocked status, and map location</li>
                    <li className='text-justify'><strong>🌐 Google Maps integration</strong> for exploring countries' positions interactively</li>
                    <li className='text-justify'><strong>🇺🇳 UN member status</strong> to know if the country is part of global organizations</li>
                </ul>
            </div>
        </>
    )
}
