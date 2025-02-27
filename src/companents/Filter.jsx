import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    // sayfa yenilemöesini engelle
    e.preventDefault();
    // inputiçerisindeki değere eriş
    const text = e.target[0].value;

    //  url e geçilicek paramaetreyi ayarla
    searchParams.set("search", text);

    // url e parametre geç
    setSearchParams(searchParams);
  };
  // select den bir değer seçildiğinde çalışılacak fonskiyon

  const handleChange = (e) => {
    const value = e.target.value;

    // bu değeri parametre olarak kullan

    searchParams.set("sort", value);

    // url e parametre geç
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="d-flex justify-content-between">
        {/* seleck */}
        <select
          onChange={handleChange}
          defaultValue="sırala"
          className="form-select w-25"
        >
          <option disabled>sırala</option>
          <option defaultValue="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
        {/* fomr */}
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            placeholder="Kitap ismi giriniz..."
            className="form-control"
          />
          <button className="btn btn-primary px-4 ">Ara</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
