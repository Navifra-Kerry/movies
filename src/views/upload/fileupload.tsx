import React, { useRef } from 'react';

const FileUploader = ({
  onFileSelectError,
  onFileSelectSuccess,
}: {
  onFileSelectError: any;
  onFileSelectSuccess: any;
}) => {
  const handleFileInput = (e: any) => {
    const file = e.target.files[0];
    if (file.size > 1000000)
      onFileSelectError({ error: 'File size cannot exceed more than 1MB' });
    else onFileSelectSuccess(file);
  };

  return (
    <div className="form-group">
      <label htmlFor="thumbnail">Thumbnail image</label>
      <input id="thumbnail" type="file" onChange={handleFileInput} />
    </div>
  );
};

export default FileUploader;
