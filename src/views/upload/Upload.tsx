import React, { useState } from 'react';
import './Upload.scss';

function Upload() {
  const [title, setTile] = useState('');
  const [descrition, setDescrition] = useState('');

  const onSubmit = () => {
    console.log(title + descrition);
  };

  return (
    <div className="upload-main">
      <form className="form">
        <div className="form-group">
          <label htmlFor="inputmoive">Movie title</label>
          <input
            type="text"
            className="form-control"
            id="inputmoive"
            aria-describedby="moveHelp"
            placeholder="Movie title"
            onChange={(e) => setTile(e.target.value)}
          />
          <small id="moveHelp" className="form-text text-muted">
            영화 제목을 입력 하세요.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="inputdescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="inputdescription"
            placeholder="description"
            onChange={(e) => setDescrition(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="thumbnailFile">Thumbnail image</label>
          <input type="file" className="form-control-file" id="sup" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Upload;
