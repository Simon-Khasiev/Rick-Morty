import React from 'react';
import Character from './Character';

export default function PersonalArea({ user, favors }) {
  const [characters, setCharacters] = React.useState(null);
  // const [curFavors] = React.useState(favors);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${favors}`)
      .then((res) => res.json())
      .then((data) => {
        Array.isArray(data)
          ? setCharacters(data) : setCharacters([data]);
      });
  }, []);
  console.log(favors);
  return (
    <div className="container">
      {favors?.length ? (
        <div
          className="formReg container w-100 d-flex flex-wrap"
          style={{
            display: 'flex!important', alignContent: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start',
          }}
        >
          {characters?.map((el) => (
            <Character
              user={user}
              key={el.id}
              pers={el}
              setCharacters={setCharacters}
            />
          ))}
        </div>
      ) : (<p>empty</p>)}
    </div>
  );
}
