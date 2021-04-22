import { useEffect, useState } from "react";
import Card from "../components/card";

export default function Grid(props) {
  const { data, type } = props;
  const [searchText, setSearchText] = useState();
  const [filteredData, setFilteredData] = useState(data);

  const filterData = () => {
    setFilteredData(
      data
        .filter((item) => {
          if (!type) return true;
          return item.type.toLowerCase() === type.toLowerCase();
        })
        .filter((item) => {
          if (!searchText || searchText === "") return true;
          return (
            Object.values(item).filter((value) =>
              value.toLowerCase().includes(searchText.toLowerCase())
            ).length > 0
          );
        })
    );
  };
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    filterData();
  }, [data]);

  useEffect(() => {
    filterData();
  }, []);

  return (
    <div className="card-grid-container">
      <div className="w-full my-10 text-center">
        <h1 className="text-5xl mb-5">Resource: {type ? type[0].toUpperCase() + type.slice(1) : "All"}</h1>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={onSearchChange}
        />
      </div>
      <div className="card-grid">
        {filteredData.map((item, key) => (
          <Card key={key} showType={!type} {...item} />
        ))}
      </div>
    </div>
  );
}
