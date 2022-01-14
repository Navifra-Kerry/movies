import React, { useState } from 'react';
import FileUploader from './fileupload';
import { useHistory } from 'react-router-dom';
import * as apiCaller from '../../utils/apicaller';
import './Upload.scss';

function Upload() {
  const [title, setTile] = useState('');
  const [descrition, setDescrition] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const history = useHistory();

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', selectedFile);

      const movie = await apiCaller.CreateMovie(
        { title: title, content: descrition, imagepath: '' },
        formData,
      );

      history.push(`/movie/${movie.data.id}`);
    } catch (ex) {
      alert(ex);
    }
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
        <FileUploader
          onFileSelectSuccess={(file: any) => setSelectedFile(file)}
          onFileSelectError={(error: string) => alert(error)}
        />
        <button onClick={onSubmit} className="btn btn-primary">
          Summit
        </button>
      </form>
    </div>
  );
}

export default Upload;
