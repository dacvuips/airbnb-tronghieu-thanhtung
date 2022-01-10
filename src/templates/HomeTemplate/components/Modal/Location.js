import React, { useEffect } from "react";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { actLocation } from "../../../../redux/actions/Location";
import { useDispatch, useSelector } from "react-redux";

const Location = ({ valueSearch, isPlace }) => {
  const { listLocation } = useSelector((state) => state.LocationReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actLocation());
  }, [dispatch]);

  let listSearch = listLocation ? [...listLocation] : [];
  if (valueSearch && listLocation) {
    listSearch = listLocation.filter((item) => {
      return item.province
        .trim()
        .toLowerCase()
        .includes(valueSearch.trim().toLowerCase());
    });
  }

  return (
    <>
      {valueSearch ? (
        <div
          style={{ display: isPlace ? "block" : "none" }}
          className="location"
        >
          {listSearch.map((item) => (
            <Link
              className="location-search"
              key={item._id}
              to={`/products?id=${item._id}`}
            >
              <span>{item.name} , </span>
              <span>{item.province} , </span>
              <span>{item.country}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div
          style={{ display: isPlace ? "block" : "none" }}
          className="location"
        >
          <p>MỌI LÚC, MỌI NƠI</p>
          <button>
            {listLocation?.slice(0, 1).map((item, index) => (
              <div key={index} className="location-btn">
                <Link to={`/products?id=${item._id}&img=${item.image}`}>
                  Tìm kiếm linh hoạt
                </Link>
              </div>
            ))}
            <ChevronRight className="icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default Location;
