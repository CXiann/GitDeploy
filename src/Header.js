import { useEffect, useState } from "react";
import FetchJsonTable from "./FetchJsonTable";
import FetchJsonTab from "./FetchJsonTab";

const Header = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [tab, setTab] = useState("users");
  const [data, setData] = useState([""]);

  useEffect(() => {
    const fetchJsons = async () => {
      try {
        const reqAPI = `${API_URL}${tab}`;
        const response = await fetch(reqAPI);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.log(err.stack);
      }
    };

    fetchJsons();
  }, [tab]);

  return (
    <header>
      <FetchJsonTab tab={tab} setTab={setTab} />
      <FetchJsonTable data={data} />
    </header>
  );
};

export default Header;
