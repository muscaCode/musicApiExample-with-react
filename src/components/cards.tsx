import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ReactPlayer from "react-player";

export interface Result {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  isStreamable: boolean;
  collectionArtistName: string;
  contentAdvisoryRating: string;
}

export interface RootObject {
  resultCount: number;
  results: Result[];
}

const CardsData = (props: { item: Result,delete:(id:number)=>void,favourite:(id:number)=>void, isFavourite:boolean}) => {
  return (
    <div className="class">
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {props.item.trackName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {props.item.artistName}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="play/pause">
              <ReactPlayer
                url={props.item.previewUrl}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
              />
            </IconButton>
            <Button onClick={()=>props.delete(props.item.trackId)} variant="outlined">Delete</Button>
            <Button onClick={()=>props.favourite(props.item.trackId)} variant="outlined">{props.isFavourite ? 'Unfavourite' : 'Favourite'}</Button>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={props.item.artworkUrl100}
          alt="img from api itunes"
        />
      </Card>
    </div>
  );
};
export default CardsData;
