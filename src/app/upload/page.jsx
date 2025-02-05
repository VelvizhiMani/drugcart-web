// pages/upload.js (or your component)
"use client"
import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!image) return alert("Please select an image");

    setUploading(true);
    const fileType = image.type;

    // 1. Get pre-signed URL from our API
    const res = await fetch(`/api/upload?fileType=${fileType}`);
    const { url, fileName } = await res.json();

    // 2. Upload directly to S3
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": fileType },
      body: image,
    });

    // 3. Get the public URL of the image
    const imageUrl = `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.amazonaws.com/${fileName}`;
    setImageUrl(imageUrl);
    setUploading(false);
  };
console.log(process.env.NEXT_PUBLIC_S3_BUCKET)
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: "200px" }} />}
    </div>
  );
}
