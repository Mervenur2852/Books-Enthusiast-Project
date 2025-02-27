import { useEffect, useState } from "react";
import Filter from "../../companents/Filter";
import api from "../../api";
import Card from "../../companents/Card";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // kitap stati
  const [books, setBooks] = useState([]);
  // url den parametreyi alma
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // parametre
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
      // bu projede json-server kullandık bu api bize soralama yapabilmemiz için iki adet parametre istediğini söylüyor
      // hangi değere göre sıralama yapacağımız ikincisi ise nasıl bir sıralama yapacağımız.sıralma
      // noktasında ise asc (assending [artan]) ve desc (descendig[azalan]) seçenekleri sunar
      // bizde burada bu değerleri parametre olarak geçerek api den sıralanmış verileri aldık
    };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchParams]);
  // url deki  parametreyi bağlı olarak api den veri alabilmek için arama parametresini url e geçtik

  return (
    <div className="container my-5">
      {/* result */}
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-3 w-50 text-nowrap text-center">
          Kitap Bulunamadı!
        </h3>
      ) : (
        <h3>{books.length} kitap bulundu</h3>
      )}
      {/* filter */}
      <Filter />

      {/*  cards */}
      <div className="card-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Products;
