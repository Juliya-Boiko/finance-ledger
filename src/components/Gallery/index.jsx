import { useState } from "react";
import { GalleryList, GalleryItem, GalleryImage } from "./Gallery.styled";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const data = [
  { id: 1 }, 
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const initialState = { isOpen: false, index: 1 };

export const Gallery = () => {
  const [lightboxState, setLightboxState] = useState(initialState);
  const limiter = { firstElem: 1, lastElem: data.length};

  const lightboxHandler = (id) => {
    setLightboxState({ isOpen: true, index: id, })
  };

  return (
    <div id="cases">
      <GalleryList>
        {data.map(({ id }) => {
          return <GalleryItem key={id} onClick={() => lightboxHandler(id)}>
            <picture>
              <source
                srcSet={`${require(`../../images/cases/cases${id}.webp`)} 1x, ${require(`../../images/cases/cases${id}@2x.webp`)} 2x,`}
                type="image/webp" />
              <GalleryImage
                src={require(`../../images/cases/cases${id}.jpg`)} 
                srcSet={`${require(`../../images/cases/cases${id}@2x.jpg`)} 2x`}
                alt={`Case ${id}`}
              />
            </picture>
        </GalleryItem>
        })}
      </GalleryList>
      {lightboxState.isOpen
        ? <Lightbox
            enableZoom={false}
            clickOutsideToClose={true}
            mainSrc={require(`../../images/cases/cases${lightboxState.index}.jpg`)}
            nextSrc={ lightboxState.index === limiter.lastElem ? undefined : require(`../../images/cases/cases${lightboxState.index + 1}.jpg`)}
            prevSrc={ lightboxState.index > limiter.firstElem ? require(`../../images/cases/cases${lightboxState.index - 1}.jpg`) : undefined}
            onCloseRequest={() => setLightboxState(initialState)}
            onMovePrevRequest={() => setLightboxState(prevState => { 
              return { isOpen: true, index: prevState.index - 1 }
            })}
            onMoveNextRequest={() => setLightboxState(prevState => { 
              return { isOpen: true, index: prevState.index + 1 }
            })}
          />
        : null
      }
    </div>
  );
};

