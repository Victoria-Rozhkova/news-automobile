import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import style from "./Card.module.css";


export const CardComp = ({ news, onLike }) => {

  const onClick = (news) => {
    setLike(!like);
    onLike(news);
  };

  const [like, setLike] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 }} className={style.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }

        title={news.title}
        subheader={news.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={news.imageUrl}
        alt="image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {news.content}
        </Typography>
        <Typography variant="body3">
          {news.author}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => onClick(news)}>
          <FavoriteIcon className={`${like ? style.active : style.like}`} />
        </IconButton>
      </CardActions>
    </Card>
  );
};