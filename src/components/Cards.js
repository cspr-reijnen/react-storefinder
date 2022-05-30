import axios from "axios";
import { useState, useEffect } from "react";

const Shops = () => {
  const [searchFilter, setSearchFilter] = useState([]);
  const [result, setResult] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const results = searchFilter.filter(
      (resp) =>
        resp.city.toString().includes(result) || resp.city.toLowerCase().includes(result) 
    );
    setData(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e"
    );

    setSearchFilter(data);
  };

  const onChange = (evt) => {
    setResult(evt.target.value);
  };

  return (
    <section>
      <div className="store-search">
        <input
          type="text"
          placeholder="Zoek een winkel in jouw stad..."
          value={result}
          onChange={onChange}
          className="store-search__input"
        />
      </div>
      <div className="shop-overview">
        {data.map((r, i) => (
          <article className="shop-card" key={r.uuid}>
            <div className="shop-card__image">
              <img src="./img/jumbo-store.jpeg" alt="jumbo-shop" />
            </div>
            <div className="shop-card__body">
              <div className="shop-card__body-title">
                <h2>{r.addressName}</h2>
              </div>
              <div className="shop-card__body-main">
                <ul>
                  <li className="address-street">
                    <p>
                      {r.street} {r.street2}
                    </p>
                  </li>
                  <li className="address">
                    <p>
                      {r.postalCode} {r.city}
                    </p>
                  </li>
                  <li className="opening-hours">
                    <p>
                      Today: {r.todayOpen} - {r.todayClose}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Shops;
