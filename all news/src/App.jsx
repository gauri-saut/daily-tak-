import React from "react";
import Navbar from "./assets/Component/Navbar";
import NewsBord from "./assets/Component/NewsBord";
import CardsBors from "./assets/Component/CardsBors";

const App = () => {
  return (
    <>
      <Navbar />
      <NewsBord />
      <CardsBors
        Title="ABP-Maza"
        Description="The good news is nothing lasts forever. This is what I say"
        Img="/src/assets/Component/ABP-maza img.png"
      />
      <CardsBors
        Title="Deshonnati"
        Description="I've got good news and bad news. The good news."
        Img="/src/assets/Component/desgonati img.jpg"
      />
      <CardsBors
        Title="Lokmat"
        Description="The universe just doesn't put up with that."
        Img="/src/assets/Component/lokmat img.avif"
      />
      <CardsBors
        Title="Aaj-Tak"
        Description="God will save whomever He chooses to save."
        Img="/src/aaj tak.png"
      />
      <CardsBors
        Title="India News"
        Description="Life is like a box of chocolates."
        Img="/src/india news.jpg"
      />
      <CardsBors
        Title="Lokmat"
        Description="Magazines/Newspapers. Italicize the name of the publication."
        Img="/src/assets/Component/lokmat img.avif"
      />
    </>
  );
};

export default App;
 