import React from "react";

const Pokedex = () => (
  <div id="pokedex">
    <div id="topbar" />
    <img
      id="deximg"
      src="https://orig00.deviantart.net/3e49/f/2017/080/d/5/glashandy_by_flurmimon-db3393t.png"
      alt="poke"
      border="0"
    />
    <img
      id="sprite"
      src="https://vignette.wikia.nocookie.net/pokemon/images/8/81/Bulbasaur_XY_EffectAnimation_Sprite.gif/revision/latest?cb=20141114181826"
      alt="sprite"
    />
    <div id="pokeinfo">
      <h1> Bulbasaur #001 </h1>
      <p id="des">
        {" "}
        Bulbasaur can be seen napping in bright sunlight. There is a seed on its
        back. By soaking up the sun's rays, the seed grows progressively larger.{" "}
      </p>
      <table align="center" text-align="left">
        <tr>
          <td>
            <p id="height"> Height: 2ft 04in </p>
          </td>
          <td>
            <p id="weight"> Weight: 15.2 lbs</p>
          </td>
        </tr>
        <tr>
          <td>
            <p id="category"> Category: Seed </p>
          </td>
          <td>
            <p id="abil"> Abilities: Overgrown</p>
          </td>
        </tr>
      </table>
      <p id="type"> Type: Grass Poison</p>
      <p id="weak"> Weaknesses: Fire Flying Ice Psychic</p>
    </div>
    <div id="bottombarpoke"/>
  </div>
);

export default Pokedex;
