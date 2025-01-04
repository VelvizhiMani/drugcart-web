import Image from 'next/image'
import ActiveStarIcon from '@/components/Icons/ActiveStarIcon'
import StarIcon from '@/components/Icons/StarIcon'
import CartIcon from '@/components/Icons/CartIcon'
import FavouriteIcon from '@/components/Icons/FavouriteIcon'

function TrendingCard({ data }) {
    return (
        <div>
            <div className="max-w-xs mt-6">
                <div className="relative">
                    <Image
                        src={data?.imageUrl}
                        alt="Product"
                        className="w-48 h-48 ml-3"
                    />
                    <button className="absolute top-1 right-0 bg-[#FFE5EF] p-1.5 rounded-full shadow hover:bg-gray-200">
                        <FavouriteIcon active={data?.fav} />
                    </button>
                </div>
                <div className="p-4">
                    <h3 className="text-gray-500 font-poppins font-medium text-[13px] w-[60%] line-clamp-1">{data?.name}</h3>
                    <p className="text-black font-poppins font-medium text-[13px] mt-1 w-[60%] line-clamp-1">{data?.name}</p>
                    <div className="bg-white mt-1 flex justify-items-center justify-between">
                        <p className="text-black font-poppins font-semibold text-[14px]">${data?.price}</p>
                        <button onClick={() => alert('Add Cart')} style={{ marginRight: -12, marginTop: -40 }}>
                            <CartIcon />
                        </button>
                    </div>

                    <div className="flex items-center mt-1">
                        <div className="flex space-x-1">
                            <ActiveStarIcon />
                            <ActiveStarIcon />
                            <ActiveStarIcon />
                            <ActiveStarIcon />
                            <StarIcon />
                        </div>
                    </div>
                </div>
                <hr className="w-full border-t border-gray-300 my-2" />
            </div>
        </div>
    )
}

export default TrendingCard