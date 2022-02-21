import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ userImageURL, tags, id, open }) {
  return (
    <li className={s.gallery__item} onClick={open}>
      <div id={id}>
        <img
          className={s.ImageGalleryItem__image}
          src={userImageURL}
          alt={tags}
        />
      </div>
    </li>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  userImageURL: PropTypes.string,
  tags: PropTypes.string,
};
