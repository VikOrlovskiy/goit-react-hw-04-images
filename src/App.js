import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Container from "./components/Container";
import Searchform from "./components/Searchform/Searchform";
import Main from "./components/Main";
import ImageGallery from "./components/ImageGallery";
import getPictures from "./components/PixabayAPI/PixabayApi";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

export default function App() {
  const [pictures, setPictures] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModals] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [status, setStatus] = useState("idle");
  const [loadMore, setLoadMore] = useState(false);
  useEffect(() => {
    if (name !== "") {
      let value = getPictures(name);
      setStatus("pending");
      value
        .then((res) => {
          const value = res.data;
          if (res.data.total === 0) {
            setLoadMore(false);
            toast.error("Could not find images with that name");
          }
          setPictures(value.hits);
          setPage((prev) => prev + 1);
          setStatus("resolved");
          setLoadMore(true);
          if (res.data.hits.length < 12) {
            setLoadMore(false);
          }
        })
        .catch((error) => {
          setStatus("rejected");
          console.log(error);
        });
    }
  }, [name]);
  const onloadMore = () => {
    let value = getPictures(name, page);
    value
      .then((res) => {
        setStatus("pending");
        const value = res.data;
        setPictures((prev) => [...prev, ...value.hits]);
        setPage((prev) => prev + 1);
        setStatus("resolved");
        setLoadMore(true);
        if (res.data.hits.length < 12) {
          setLoadMore(false);
        }
      })
      .catch((error) => {
        setStatus("rejected");
        console.log(error);
      });
  };
  const toglleModal = (e) => {
    setShowModals((prev) => !prev);
    if (!showModal) {
      if (e) {
        filtredLIst(e.target.parentNode.id);
      }
    }
  };
  const filtredLIst = (id) => {
    let value = pictures.find((item) => item.id === Number(id));
    setModalImage(value.largeImageURL);
  };
  const findPicture = (pictureName) => {
    setName(pictureName);
    setPage(1);
    setLoadMore(false);
  };

  return (
    <div className="App">
      <Header>
        <Container>
          <Searchform onSubmit={findPicture} />
        </Container>
      </Header>
      <Main>
        <Container>
          {status === "idle" && <p>please enter name picture</p>}
          {status === "pending" && (
            <Rings height="100" width="100" color="grey" ariaLabel="loading" />
          )}
          {status === "resolved" && (
            <ImageGallery pictures={pictures} open={toglleModal} />
          )}
          {loadMore && <Button loag={onloadMore} />}
          {showModal && <Modal src={modalImage} onClose={toglleModal} />}
        </Container>
      </Main>
      <ToastContainer />
    </div>
  );
}
