import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const INITIAL_INDEX = 0;
const images = [
  {
    src:
      "https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    src:
      "https://images.unsplash.com/photo-1495895828857-6bbf2f319e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
  },
  {
    src:
      "https://images.unsplash.com/photo-1540326768851-b1d06f9bd481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    src:
      "https://images.unsplash.com/photo-1493274850009-b6b4ed3ed3a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1288&q=80"
  },



];

function Slider() {
  const [index, setIndex] = React.useState(INITIAL_INDEX);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        width: "100%",
        height: "40vh"
      }}
    >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {images.map(img => (
          <GalleryImage objectFit="cover" key={img.src} src={img.src} />
        ))}
      </Gallery>
    </div>
  );
}

export default Slider;
