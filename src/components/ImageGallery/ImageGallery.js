import PropTypes from "prop-types";
import GalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";
export default function imageGallery({ pictures, open }) {
  return (
    <>
      <ul className={s.gallery__list}>
        {pictures.map(({ webformatURL, tags, id }) => {
          return (
            <li key={id} className={s.gallery__item} onClick={open}>
              <GalleryItem userImageURL={webformatURL} tags={tags} id={id} />
            </li>
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
