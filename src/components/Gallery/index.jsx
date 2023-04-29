//import { GalleryList, GalleryItem, GalleryImage } from "./Gallery.styled";
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

// const data = [
//   { id: 1 }, 
//   { id: 3 },
//   { id: 5 },
//   { id: 7 },
//   { id: 2 },
//   { id: 4 },
// ];


export const Gallery = () => {

  return (
    <div>gallery</div>
    // <LightGallery
    //   elementClassNames="custom-wrapper-class"
    //   hideControlOnEnd={true}
    //     //onBeforeSlide={onBeforeSlide}
    // >
    //   {data.map(({ id }) => {
    //     return <a href={require(`../../images/cases/cases${id}.jpg`)} key={id}>
    //       <img src={require(`../../images/cases/cases${id}.jpg`)} alt={`Case ${id}`} />
    //     </a>
    //   })}
    // </LightGallery>
  );
};

      // {/* <GalleryList>
      //   {data.map(({ id }) => {
      //     return <GalleryItem key={id} onClick={() => { setSlide(id); setShowSlider(true) }}>
      //       <picture>
      //         <source type="image/webp" srcSet={`${require(`../../images/cases/cases${id}.webp`)} 1x, ${require(`../../images/cases/cases${id}@2x.webp`)} 2x`}></source>
      //         <GalleryImage
      //           src={require(`../../images/cases/cases${id}.jpg`)}
      //           srcSet={require(`../../images/cases/cases${id}@2x.jpg`)}
      //           alt={`Case ${id}`} />
      //       </picture>
      //   </GalleryItem>
      //   })}
      // </GalleryList> */}