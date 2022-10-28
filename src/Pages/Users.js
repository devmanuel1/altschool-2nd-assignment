import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavigateContext } from "../App";
import UserCard from "../Components/UsersPage/UserCard";
import LoadingComp from "../Components/Shared/LoaderComp";
import "../Styles/UsersPage.css";

const Handler = () => {
  const { setActiveRoute } = useContext(NavigateContext);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveRoute("users");
    setIsLoading(true)

    const func = async () => {
      const url = `https://randomuser.me/api/?page=${page}&results=25&seed=abc&fbclid=IwAR0li7ZV4fC1fp9-3F5L4PzmlflC128GUqy0nDb3eNtOd9yiRMSAhxQ6zdM`;
      const { data } = await axios.get(url);
      setUsers(data?.results);
      setIsLoading(false)
    };

    func();
  }, [page]);
  return (
    <div className="users_container">
      <div className="users_card_container">
        {users?.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
      {/* pagination div  */}
      <div className="pagination_div">
        <span onClick={() => setPage(page - 1)} className="page_number">
          prev
        </span>
        <span
          onClick={() => setPage(1)}
          className={`page_number ${page === 1 && "active_page"}`}
        >
          1
        </span>
        <span
          onClick={() => setPage(2)}
          className={`page_number ${page === 2 && "active_page"}`}
        >
          2
        </span>
        <span
          onClick={() => setPage(3)}
          className={`page_number ${page === 3 && "active_page"}`}
        >
          3
        </span>
        {page > 6 ? (
          <span className={`page_number ${page > 6 && "active_page"}`}>
            {page}
          </span>
        ) : (
          <span
            onClick={() => setPage(4)}
            className={`page_number ${page === 4 && "active_page"}`}
          >
            4
          </span>
        )}
        {page > 6 ? (
          <span onClick={() => setPage(page + 1)} className="page_number">
            {page + 1}
          </span>
        ) : (
          <span
            onClick={() => setPage(5)}
            className={`page_number ${page === 5 && "active_page"}`}
          >
            5
          </span>
        )}
        {page > 6 ? (
          <span onClick={() => setPage(page + 2)} className="page_number">
            {page + 2}
          </span>
        ) : (
          <span
            onClick={() => setPage(6)}
            className={`page_number ${page === 6 && "active_page"}`}
          >
            6
          </span>
        )}
        <span onClick={() => setPage(page + 1)} className="page_number">
          next
        </span>
      </div>
      {isLoading && <LoadingComp />}
    </div>
  );
};

export default Handler;
