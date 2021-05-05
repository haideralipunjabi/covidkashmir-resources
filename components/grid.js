import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Card from "../components/card";

export default function Grid(props) {
  const { data, type, searchQuery } = props;
  const [searchText, setSearchText] = useState();
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 30
  const searchInput = useRef();
  const changePage = (fact) => {
      if(currentPage+fact >= 1 && currentPage+fact <= Math.ceil(filteredData.length/pageSize)) {
        setCurrentPage(currentPage+fact)
      }
  }
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
  }, [data, searchText]);
useEffect(()=>{
  if(searchQuery) {
    setSearchText(searchQuery)
    searchInput.current.value = searchQuery;
  }
},[searchQuery])

  return (
    <div className="card-grid-container">
      <div className="w-full my-10 text-center">
        <h1 className="text-5xl mb-5">
          Resource: {type ? type[0].toUpperCase() + type.slice(1) : "All"}
        </h1>
        <input
          className="text-black"
          type="text"
          name="search"
          placeholder="Search by Location, Requirement, Provider, etc"
          onChange={onSearchChange}
          ref={searchInput}
        />
        {/* <span>
          <FontAwesomeIcon icon={["fas","share-alt"]} />
        </span> */}
      </div>
      <div className="card-grid">
        {filteredData.slice((currentPage-1)*pageSize, currentPage*pageSize).map((item, key) => (
          <Card key={key} showType={!type} {...item} />
        ))}
      </div>
      {
        filteredData.length > pageSize &&
      <div className="flex justify-between mt-5">
      <button disabled={currentPage===1} onClick={()=>{changePage(-1)}}>Prev</button>
      <button disabled={currentPage===(Math.ceil(filteredData.length /pageSize))} onClick={()=>{changePage(1)}}>Next</button>

      </div>
      }
    </div>
  );
}
