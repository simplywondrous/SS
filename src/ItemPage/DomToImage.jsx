import React from "react";

export const Demo = (element) => {
  const canvasRef = React.useRef(null);
  const contextRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");
  }, []);

  const image = new Image();
  image.onload = () => {
    contextRef.current.drawImage(image, 0, 0);
    canvasRef.current.toBlob((blob) => {
      const url = URL.createObjectURL(blob);

      const newImage = <img />;
      newImage.src = url;
      newImage.onload = () => URL.revokeObjectURL(url);
    });
  };

  return <canvas ref={canvasRef} />;
};
