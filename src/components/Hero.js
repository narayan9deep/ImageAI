import { useState } from "react";

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const handleImageSubmit = (selectedImage) => {
    // Save the image as a file in the local directory
    console.log(selectedImage);
    
    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    console.log(imageUrl);
    setSelectedImage(null)
  };
  

  return (
    <div className="mt-4">
      <div className="flex items-center justify-center">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="selected" className="w-64 h-64 object-cover" />
        ) : (
          <div className="w-64 h-64 bg-gray-100"></div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <label htmlFor="upload-photo" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Upload Photo
        </label>
        <input
          id="upload-photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <>
            <button
              className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={handleImageRemove}
            >
              Cancel
            </button>
            <button
  className="ml-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
  onClick={() => handleImageSubmit(selectedImage)}
>
  Submit
</button>

          </>
        )}
      </div>
    </div>
  );
}
