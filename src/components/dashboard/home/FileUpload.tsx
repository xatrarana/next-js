'use client'

import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File | undefined>();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set('file', file);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      });

      if (!res.ok) {
        throw new Error(`Failed to upload file: ${await res.text()}`);
      } else {
        setFile(undefined);
        setSelectedImage("");
        setError("");
      }
    } catch (error: any) {
      console.error(error);
      setError(error.message || "An error occurred during upload.");
    }
  };

  return (
    <div className='p-2 border'>
        <form onSubmit={onSubmit} className='flex items-center gap-x-5  px-3 py-4'>
      {/* Display error message if any */}
      {error && <p className="text-red-500">{error}</p>}
     <label>
         {/* File input */}
      <input
        type="file"
        name="file"
        hidden
        onChange={({ target }) => {
          if (target.files) {
            const file = target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            setFile(file);
          }
        }}
      />

      {/* Selected image preview */}
      <div className="w-full aspect-video h-32 rounded flex px-6 py-2 items-center justify-center border-2 border-dashed cursor-pointer">
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <span>Select Image</span>
        )}
      </div>
     </label>

      {/* Submit button */}
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        disabled={!file}
      >
        Upload
      </button>
    </form>
    </div>
  );
}
