import React, { useState } from "react";
import "./App.css";
import CardsData, { Result, RootObject } from "./components/cards";

function App() {
  const [song, setSong] = useState<Result[]>([]);
  const [favouriteData, setFavourite] = useState<Result[]>([]);

  const getData = async () => {
    const response = await fetch(
      "https://itunes.apple.com/search?term=niko+pandetta&limit=10"
    );
    const { results } = (await response.json()) as RootObject;
    setSong(results);
  };

  const deleteData = (idToRemove: number) => {
    const index= song.findIndex(({trackId}) => idToRemove === trackId);
    const indexInFavorite = favouriteData.findIndex(({ trackId }) => trackId === idToRemove);
    if (index !== -1){
      song.splice(index, 1);
      setSong([...song]);
    }
    if (indexInFavorite !== -1){
      favouriteData.splice(index, 1);
      setFavourite([...favouriteData]);
    }
  };

  const addFavourite= (idAToDelete:number) =>{
    const index = song.findIndex(({ trackId }) => trackId === idAToDelete);
    const index2 = song.findIndex(({ trackId }) => trackId === idAToDelete);

    if (index !== -1) {
      let item = song.splice(index, 1);
      setSong([...song]);
      favouriteData.push(item[0]);
      setFavourite([...favouriteData]);
    }   
     if (index2 !== -1) {
      let item = favouriteData.splice(index, 1);
      setFavourite([...favouriteData]);
      favouriteData.push(item[0]);
      setSong([...song]);
  }
  }

  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);



  return (
    <div className="App">
      {song.map((item) => (
        <CardsData item={item} delete={deleteData} favourite={addFavourite} isFavourite={false}  />
      ))}

      <h1>Preferiti</h1>
      {favouriteData.map((item) => (
        <CardsData item={item} delete={deleteData} favourite={addFavourite} isFavourite={true}  />
      ))}
    </div>
  );
};

export default App;
