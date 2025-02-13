"use client";

import React from 'react'
import { useState } from 'react';

const countries = [
    {
        name: 'India',
        value: 'IN',
        cities: ['Delhi', 'Mumbai']
    },
    {
        name: 'Pakistan',
        value: 'PK',
        cities: ['Lahore', 'Karachi']
    },
    {
        name: 'Bangladesh',
        value: 'BG',
        cities: ['Dhaka', 'Chittagong']
    },
];

const page = () => {
    // State to store selected country and city
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    // Handle change in country dropdown
    const handleCountryChange = (event) => {
        const countryValue = event.target.value;
        setSelectedCountry(countryValue);
        setSelectedCity('');  // Reset city selection when country changes
    };

    // Handle change in city dropdown
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    // Find the cities corresponding to the selected country
    const selectedCountryData = countries.find((country) => country.value === selectedCountry);
    const cities = selectedCountryData ? selectedCountryData.cities : [];

    return (
        <div>
            
            {/* Country Dropdown */}
            <label htmlFor="country">Select Country: </label>
            <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                <option value="">--Select Country--</option>
                {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                        {country.name}
                    </option>
                ))}
            </select>

            {/* City Dropdown (dependent on country selection) */}
            <label htmlFor="city">Select City: </label>
            <select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedCountry} // Disable city dropdown if no country is selected
            >
                <option value="">--Select City--</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            <div>
                <p>
                    Selected Country: {selectedCountry ? selectedCountryData.name : 'None'}
                </p>
                <p>Selected City: {selectedCity || 'None'}</p>
            </div>
        </div>
    );
}


export default page;