import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, setLike } from "../../redux/actions/news-actions";
import { isFilterSelector, isLoadingSelector, likedNewsSelector, newsSelector } from "../../redux/selectors/news-selector";
import { getNews } from "../../redux/thunks/news-thunk";
import { CardComp } from "../Card/Card";
import { Preloader } from "../Preloader/Preloader";
import style from "./News.module.css";

export const News = () => {
  const dispatch = useDispatch();

  const news = useSelector(state => newsSelector(state));
  const likedNews = useSelector(state => likedNewsSelector(state));
  const isFilter = useSelector(state => isFilterSelector(state));
  const isLoading = useSelector(state => isLoadingSelector(state));

  const likeItem = (news) => {
    dispatch(setLike(news));
  };

  const deleteNews = (id) => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={style.News}>
      {isLoading
        ? <Preloader />
        : <>
          {!isFilter
            ? news.map(el => <CardComp news={el} key={el.id} likeItem={likeItem} deleteNews={deleteNews} />)
            : likedNews.map(el => <CardComp news={el} key={el.id} likeItem={likeItem} deleteNews={deleteNews} />)}
        </>
      }
    </div>
  );
};