import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
// Components
import Navs from "./_navs";
import Boxs from "./_boxs";
import Items from "./_items";

export default function Page() {
  let dropzone = {
    onDrop: (files) => selectImage(files),
    multiple: true,
    accept: "image/*",
  };
  let { getRootProps, getInputProps } = useDropzone(dropzone);

  let [images, setImages] = useState([]);
  let [select, setSelect] = useState(0);

  function selectImage(e) {
    let _images = [...images];
    let selects = e;
    if (selects && selects.length > 0) {
      for (let i = 0; i < selects.length; i++) {
        const item = selects[i];
        // FileReader
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
          let img = new Image();
          img.onload = () => {
            let object = {
              key: "image-" + i,
              src: fileReader.result,
              file: item,
              width: img.naturalWidth,
              height: img.naturalHeight,
            };
            setImages([..._images, ...[object]]);
            setSelect(_images.length);
            _images.push(object);
          };
          img.src = fileReader.result;
        };
        fileReader.readAsDataURL(item);
      }
    }
  }

  function deleteImage(key) {
    setImages(images.slice(0, key).concat(images.slice(key + 1)));
  }


  return (
    <div className="app-algs">
      {
        // Menu
      }
      <div className="app-algs-menu">
        <div className="app-algs-input">
          <input {...getInputProps()} />
          <label className="bg-soft-primary text-primary" {...getRootProps({})}>
            <div>Fotograf Yükle</div>
            <div>
              <small className="text-muted">(Sürükle Bırak)</small>
            </div>
          </label>
        </div>
        <div className="app-algs-items">
          {
            // Items
          }
          <Items
            setSelect={setSelect}
            images={images}
            deleteImage={deleteImage}
            select={select}
          />
        </div>
      </div>
      {
        // Content
      }
      <div className="app-algs-content">
        <div className="app-algs-title">
          <Navs />
        </div>
        {images.length > 0 ? (
          images[select] ? (
            <div className="app-algs-boxs row m-0">
              {
                // Algs
              }
              <Boxs images={images} select={select} deleteImage={deleteImage} />
            </div>
          ) : (
            <div className="alet alert-warning text-center p-3">
              Lutfen Bir Goruntu Seciniz
            </div>
          )
        ) : (
          <div className="alet alert-warning text-center p-3">
            Yüklenmiş Goruntu Bulunamadi.
          </div>
        )}
      </div>
    </div>
  );
}
