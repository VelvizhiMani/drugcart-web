import Image from "next/image";

const PrescriptionCard = ({ title, image, imageformat, file, onChange, onSubmit }) => {
  console.log(file);
  
  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-between border p-4 rounded-lg shadow-md w-full bg-white my-7 mx-auto">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image src={image} alt="Prescription Icons" className="w-28" />
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-700 font-medium">{file ? file?.name : title}</p>
          <p className="text-sm text-gray-500">{imageformat}</p>
        </div>

        {/* Upload Button */}
        {file ? <button
          type="submit"
          onClick={onSubmit}
          className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button> : <label className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600">
          {"Choose"}
          <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" onChange={onChange} />
        </label>}
      </div>
    </>
  );
};

export default PrescriptionCard;
