import React from 'react'

const Navcategory = () => {
    return (
        <section className='p-2'>
            <div className='container mx-auto px-10'>
                <div className='bg-gray-100 py-2'>
                    <div className='flex flex-wrap justify-around pl-14'>
                        <div className='p-1 w-full md:w-1/3 lg:w-1/5'>
                            <div className='flex'>
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white my-auto rounded-3xl bg-bgcolor p-1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 22L1.25192 18.6279C1.08766 18.3815 1 18.092 1 17.7958V13.25C1 12.5596 1.55964 12 2.25 12C2.94036 12 3.5 12.5596 3.5 13.25V16.0211C3.5 16.1162 3.52712 16.2093 3.57817 16.2895L3.79872 16.6361M5.44444 19.2222L3.79872 16.6361M8.22222 21.9999V19.4235C8.22222 18.93 8.07612 18.4474 7.80234 18.0368L6.79337 16.5233C6.34922 15.8571 5.46013 15.6572 4.77355 16.0691L3.79872 16.6361M20.7223 22L22.782 18.6088C22.9246 18.3741 23 18.1048 23 17.8301V13.2499C23 12.5596 22.4404 12 21.7501 12C21.0598 12 20.5001 12.5596 20.5001 13.2499V16.0211C20.5001 16.1162 20.473 16.2093 20.422 16.2895L20.4166 16.298M18.5557 19.2222L20.4166 16.298M16 22V19.0903C16 18.5967 16.1461 18.1142 16.4199 17.7035L17.4289 16.1901C17.873 15.5238 18.7621 15.3239 19.4487 15.7359L20.4166 16.298M12.9999 2C13.5521 2 13.9999 2.44772 13.9999 3V5.90014C13.9999 5.95536 14.0446 6.00013 14.0999 6.00013L17 6.00014C17.5523 6.00014 18 6.44785 18 7.00014V9.00013C18 9.55242 17.5523 10.0001 17 10.0001H14.0999C14.0446 10.0001 13.9999 10.0449 13.9999 10.1001V13C13.9999 13.5523 13.5521 14 12.9999 14H10.9999C10.4476 14 9.99985 13.5523 9.99985 13V10.1001C9.99985 10.0449 9.95508 10.0001 9.89985 10.0001H7.00005C6.44776 10.0001 6.00005 9.55242 6.00005 9.00013V7.00013C6.00005 6.44785 6.44776 6.00013 7.00005 6.00013L9.89985 6.00013C9.95508 6.00013 9.99985 5.95536 9.99985 5.90014V3C9.99985 2.44771 10.4476 2 10.9999 2H12.9999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>

                                <div className='pl-3 my-auto'>
                                    <h2 className='text-bgcolor text-sm'>Medicine</h2>
                                    <p className='text-xs'>Over 25000 product</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-1 w-full md:w-1/3 lg:w-1/5'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 my-auto rounded-2xl bg-bgcolor p-1">
                                    <path d="M1.00002 8.08345C1.00002 7.73437 1.18205 7.41055 1.48029 7.22912L11.4803 1.14567C11.7996 0.951443 12.2005 0.951444 12.5197 1.14567L22.5197 7.22913C22.8179 7.41056 23 7.73438 23 8.08346L23 22C23 22.5523 22.5523 23 22 23L17 23C16.4477 23 16 22.5523 16 22L16 14C16 13.4477 15.5523 13 15 13H9.00001C8.44773 13 8.00001 13.4477 8.00001 14L7.99999 22C7.99999 22.5523 7.55227 23 6.99999 23L2 23C1.44771 23 0.999997 22.5523 0.999997 22L1.00002 8.08345Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div className='pl-3'>
                                    <h2 className='text-bgcolor text-sm'>Welness</h2>
                                    <p className='text-xs'>Health Product</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-1 w-full md:w-1/3 lg:w-1/5'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white my-auto rounded-3xl bg-bgcolor p-1">
                                    <path d="M17 4V3.5C17 2.94772 16.5523 2.5 16 2.5H14.375C14.1679 2.5 14 2.33211 14 2.125C14 1.50368 13.4963 1 12.875 1H11.125C10.5037 1 10 1.50368 10 2.125C10 2.33211 9.83211 2.5 9.625 2.5H8C7.44772 2.5 7 2.94772 7 3.5V4M17 4V5C17 5.55228 16.5523 6 16 6H8C7.44772 6 7 5.55228 7 5V4M17 4H19C19.5523 4 20 4.44772 20 5V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V5C4 4.44771 4.44772 4 5 4H7M4 15H6.43589C6.47496 15 6.51045 14.9772 6.52676 14.9417L8.24693 11.1978C8.28262 11.1201 8.39299 11.1201 8.42867 11.1978L11.929 18.8164C11.9636 18.8916 12.0694 18.8946 12.1082 18.8215L14.1384 15L15.0833 13.1719C15.1206 13.0998 15.2237 13.0998 15.261 13.1719L16.178 14.9459C16.1951 14.9791 16.2294 15 16.2668 15H20" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <div className='pl-3 my-auto'>
                                    <h2 className='text-bgcolor text-sm'>Diagnostic</h2>
                                    <p className='text-xs'>Book test & checkups</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-1 w-full md:w-1/3 lg:w-1/5'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white my-auto rounded-3xl bg-bgcolor p-1">
                                    <path d="M12 20V20.0318M9.5 4H14.5M7 1H17C17.5523 1 18 1.44772 18 2V22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22V2C6 1.44772 6.44772 1 7 1ZM13.8523 8.85409C13.8523 9.87808 13.0222 10.7082 11.9982 10.7082C10.9743 10.7082 10.1442 9.87808 10.1442 8.85409C10.1442 7.8301 10.9743 7 11.9982 7C13.0222 7 13.8523 7.8301 13.8523 8.85409ZM7.88 16.7974C7.90221 14.5409 9.73829 12.7186 12 12.7186C14.2617 12.7186 16.0978 14.5409 16.12 16.7974C16.1202 16.8202 16.1018 16.8388 16.079 16.8388H7.921C7.89824 16.8388 7.87978 16.8202 7.88 16.7974Z" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>

                                <div className='pl-3 my-auto'>
                                    <h2 className='text-bgcolor text-sm'>Health Corner</h2>
                                    <p className='text-xs'>Trending for health experts</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-1 w-full md:w-1/3 lg:w-1/5'>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white my-auto rounded-3xl bg-bgcolor p-1">
                                    <path d="M8.00006 16.1556C8.0567 17.1333 8.65299 19.2845 10.585 20.0667M11.5527 1.89444L5.91936 13.1613C3.65925 17.6816 6.94624 23 12 23C17.0538 23 20.3408 17.6815 18.0807 13.1613L12.4472 1.89443C12.2629 1.52591 11.737 1.52591 11.5527 1.89444Z" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <div className='pl-3 my-auto'>
                                    <h2 className='text-bgcolor text-sm'>Others</h2>
                                    <p className='text-xs'>More Info</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navcategory