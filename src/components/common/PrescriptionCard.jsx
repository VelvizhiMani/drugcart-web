import Image from "next/image";

const PrescriptionCard = ({ title, image, imageformat, btntext, onChange }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-between border p-4 rounded-lg shadow-md w-full bg-white my-7 mx-auto">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image src={image} alt="Prescription Icons" className="w-28" />
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-700 font-medium">{title}</p>
          <p className="text-sm text-gray-500">{imageformat}</p>
        </div>

        {/* Upload Button */}
        <label className="bg-green-500 text-white px-8 py-2 rounded-md hover:bg-green-600">
          {btntext}
          <input type="file" accept="image/*" className="hidden" onChange={onChange}/>
        </label>
      </div>
    </>
  );
};

export default PrescriptionCard;
