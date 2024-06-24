import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);

      const reader = new FileReader()

      reader.readAsText(event.target.files[0])
      reader.addEventListener('load', () => {
        // Print the result of the read operation
        setSelectedFile(reader.result)
      });
      }
    
    
  

  // Function to handle file upload
  const handleUpload = () => {
    
    // You can perform file upload logic here, like sending the file to a server
    console.log(selectedFile);
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file"  onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;
