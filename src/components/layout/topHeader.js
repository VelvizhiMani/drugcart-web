"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IMAGES } from "@/components/common/images";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useSelector, useDispatch } from "react-redux";
import { getProfileService } from "@/services/profileService";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import { getCartService } from "@/services/cartService";

const TopHeader = () => {
  const { items } = useSelector((state) => state.cartData);
  const router = useRouter();
  const { profile } = useSelector((state) => state.profileData);
  const dispatch = useDispatch();
  const [pincode, setPincode] = useState("");
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    alert(`Searching for: ${query} in pincode: ${pincode}`);
  };

  useEffect(() => {
    dispatch(getProfileService());
    dispatch(getCartService())
  }, []);

  const logout = async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("cart");
    router.push("/");
    window.location.reload();
  };

  const loginLink = () => {
    router.push("/login");
  };

  return (
    <>
      <section className="mt-3 px-5 md:px-16">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/6">
            <div className="flex justify-center items-center">
              <Image priority src={IMAGES.LOGO} alt="Logo" className="w-40" />
            </div>
          </div>
          <div className="w-full md:w-3/6 my-5 md:my-0">
            <div className="flex items-center w-full rounded-full shadow-md border border-gray-300 bg-white overflow-hidden">
              {/* Pincode Section */}
              <div className="flex items-center bg-[#B7084B] md:px-4 px-2 py-2 text-white">
                <AddLocationIcon className="mr-2" />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="bg-transparent focus:outline-none text-sm placeholder-white w-16 md:w-full"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search For Your Medicine"
                className="flex-grow px-4 py-2 focus:outline-none text-gray-700 text-sm w-72"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              {/* Search Icon */}
              <button
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={handleSearch}
              >
                <SavedSearchIcon size={20} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/6 lg:w-3/3">
            <div className="flex justify-center items-center gap-6">
              <div className="flex">
                <button
                  type="button"
                  className="text-white bg-bgcolor hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
                >
                  <CloudUploadIcon size="small" className="me-2" /> Upload
                </button>
                <div className="relative" onClick={() => router.push('/cart')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black mt-1 ml-5 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  {items?.length > 0 && (
                    <div className="absolute top-0 right-0 left-8 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">
                      {items?.length}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative inline-block">
                  {/* User Profile Button */}
                  {profile?.username ? (
                    <>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                      >
                        <span className="bg-blue-500 text-white rounded-full p-2 text-xs">
                          <PersonIcon className="w-2 h-2" />
                        </span>
                        <span className="font-medium">{profile?.username}</span>
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-40">
                          <ul className="text-gray-700">
                            <li
                              className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                router.push('/profile')
                                setIsOpen(false)
                              }}
                            >
                              My Profile
                            </li>
                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                              My Orders
                            </li>
                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                              My Prescription
                            </li>
                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                              My Wallet
                            </li>
                            <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                              Refer & Earn
                            </li>
                            <li className="px-4 py-2 flex items-center gap-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={logout}>
                              Logout
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      type="button"
                      className="text-white bg-bgcolor hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"
                      onClick={loginLink}
                    >
                      LogIn 🔒
                    </button>
                  )}
                </div>
              </div>

              {/* <div className="flex justify-center items-center">
                <h2 className="text-md text-center">English</h2>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
