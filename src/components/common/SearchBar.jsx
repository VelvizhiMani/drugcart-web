'use client';
import { useState, useEffect, useRef } from 'react';
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { useDispatch, useSelector } from 'react-redux';
import { GetProductNameService } from '@/services/productService';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const { productName } = useSelector((state) => state.productData)
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [pincode, setPincode] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const wrapperRef = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProductNameService(1, 10, query))
        if (query) {
            setSuggestions(productName?.products);

        } else {
            setSuggestions([]);
        }
    }, [query]);

    // Hide on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    console.log('productName', productName);

    return (
        <div ref={wrapperRef} className="relative max-w-3xl w-full">
            <div className="flex items-center rounded-full border border-gray-300 shadow-sm overflow-hidden bg-white">
                {/* Pincode Section */}
                <div className="bg-[#bf0d47] text-white px-4 py-2 flex items-center gap-2 min-w-[120px] rounded-l-full">
                    <AddLocationIcon size={14} />
                    <input
                        type="text"
                        placeholder="Pincode"
                        className="bg-transparent focus:outline-none text-sm placeholder-white w-16 md:w-full"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Search For Your Medicine"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                />

                {/* Search Icon */}
                <div className="px-4 text-gray-500">
                    <SavedSearchIcon />
                </div>
            </div>

            {/* Autocomplete Dropdown */}
            {suggestions?.length > 0 && (
                <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {suggestions?.map((item, idx) => (
                        <li
                            key={idx}
                            onClick={() => {
                                setQuery(item?.product_name);
                                router.push(`/product/${item?.url}`)
                                setSuggestions([]);

                            }}
                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 flex items-center"
                        >
                            <Image
                                src={
                                    item?.product_img
                                        ? `https://assets2.drugcarts.com/${item?.product_img}`
                                        : IMAGES.NO_IMAGE
                                }
                                alt={item?.product_name}
                                className="w-6 h-6"
                                width={48}
                                height={48}
                            />
                            <p className='ml-3'>{item?.product_name}</p>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
