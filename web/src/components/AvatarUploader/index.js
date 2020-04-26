import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

import { Avatar, Siglas, NewAvatar } from './styles';

export default function AvatarUploader({
  id,
  avatar,
  setAvatar,
  setFile,
  fullName,
}) {
  const fileRef = useRef();
  const previewRef = useRef();

  function getBase64(f, cb) {
    const reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      cb(reader.result);
    };
  }

  function fileSelectHandler(e) {
    if (e.currentTarget.files) {
      setFile(e.currentTarget.files[0]);
      getBase64(e.currentTarget.files[0], (preview) => {
        setAvatar(preview);
        previewRef.current.removeAttribute('hidden');
      });
    }
  }

  function handlePreview() {
    fileRef.current.click();
    // previewRef.current.removeAttribute('hidden');
  }

  function siglas() {
    if (fullName) {
      return fullName.match(/\b(\w)/g).join('');
    }
    return '';
  }

  return (
    <>
      <Avatar onClick={handlePreview}>
        {id &&
          (avatar ? (
            <img src={avatar} alt="avatar" />
          ) : (
            <Siglas>{siglas()}</Siglas>
          ))}
      </Avatar>

      {!id && (
        <NewAvatar onClick={handlePreview}>
          <img ref={previewRef} src={avatar} alt="avatar" hidden />
          {!avatar && (
            <>
              <MdPhotoSizeSelectActual size={48} color="#DDDDDD" />
              <p>Adicionar Foto</p>
            </>
          )}
        </NewAvatar>
      )}

      <input type="file" ref={fileRef} onChange={fileSelectHandler} hidden />
    </>
  );
}

AvatarUploader.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired,
  setFile: PropTypes.func.isRequired,
  fullName: PropTypes.string,
};

AvatarUploader.defaultProps = {
  id: '',
  fullName: '',
};
