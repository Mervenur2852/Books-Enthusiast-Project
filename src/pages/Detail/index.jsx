import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Info from "../../companents/Info";

function Detail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center">
        {/* Image */}
        <div className="col-md-6 text-center">
          <img
            src={book?.image}
            className="rounded img-fluid shadow"
            style={{ maxWidth: "350px", height: "auto" }}
            alt="book"
          />
        </div>
        {/* Info */}
        <div className="col-md-6">
          <h1 className="text-center">{book?.title}</h1>
          <div>
            <Info title="Yazar" value={book?.author} />
            <Info title="Yıl" value={book?.year} />
            <Info title="Sayfa Sayısı" value={book?.page} />
            <Info title="Ücret" value={book?.price} />
            <Info title="Açıklama" value={book?.description} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
