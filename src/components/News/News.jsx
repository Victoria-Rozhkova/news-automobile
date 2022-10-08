import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLike } from "../../redux/actions/news-actions";
import { isFilterSelector, likedNewsSelector, newsSelector } from "../../redux/selectors/news-selector";
import { getNews } from "../../redux/thunks/news-thunk";
import { CardComp } from "../Card/Card";
import style from "./News.module.css";

export const News = () => {
  const dispatch = useDispatch();

  const news = useSelector(state => newsSelector(state));
  const likedNews = useSelector(state => likedNewsSelector(state));
  const isFilter = useSelector(state => isFilterSelector(state));

  const onLike = (news) => {
    dispatch(setLike(news));
  };

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div className={style.News}>
      {!isFilter
        ? news.map(el => <CardComp news={el} key={el.id} onLike={onLike} />)
        : likedNews.map(el => <CardComp news={el} key={el.id} onLike={onLike} />)
      }
    </div>
  );
};