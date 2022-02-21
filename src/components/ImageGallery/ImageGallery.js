import PropTypes from "prop-types";
import GalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";
export default function imageGallery({ pictures, open }) {
  return (
    <>
      <ul className={s.gallery__list}>
        {pictures.map(({ webformatURL, tags, id }) => {
          return (
            <GalleryItem
              key={id}
              userImageURL={webformatURL}
              tags={tags}
              id={id}
              open={open}
            />
          );
        })}
      </ul>
    </>
  );
}
imageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.func,
};
