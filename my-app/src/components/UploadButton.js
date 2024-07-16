import React, { useState } from 'react';

function UploadButton() {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      alert('Image uploaded successfully!');
    }, 1000);
  };

  return (
    <button onClick={handleUpload}>
      {isUploading ? 'Uploading...' : 'Upload Image'}
    </button>
  );
}

export default UploadButton;