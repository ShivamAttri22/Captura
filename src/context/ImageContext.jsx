import { createContext, useContext, useEffect, useState } from "react";

const ImageContext = createContext();

function ImageProvider({ children }) {
  const [images, setImages] = useState([]);
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setImages(json));
  }, []);

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
}
function useImage() {
  const context = useContext(ImageContext);
  return context;
}
export { ImageProvider, useImage };
