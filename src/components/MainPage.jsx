import React from 'react';
import Character from './Character';

export default function MainPage({ user }) {
  const [pers, setPers] = React.useState([]);
  const [tap, setTap] = React.useState(false);
  const [curPage, setCurPage] = React.useState(0);

  const backHandler = () => setCurPage((prev) => prev - 1);

  const clickHandler = () => {
    setCurPage((prev) => prev + 1);
    setTap(true);
  };

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${curPage}`)
      .then((response) => response.json())
      .then((data) => setPers(data.results))
      .catch((err) => console.error(err));
  }, [curPage]);

  return (
    <>
      <div className="d-flex" style={{ justifyContent: 'center' }}>
        {!tap ? (
          <button className="btn btn-outline m-2" style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} onClick={clickHandler} type="button">go-go-go</button>)
          : (
            <>
              { curPage > 1
              && <button className="btn btn-outline m-2" style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} onClick={backHandler} type="button">back</button>}
              <button className="btn btn-outline m-2" style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} onClick={clickHandler} type="button">next</button>
            </>
          )}
      </div>
      <div
        className="formReg container w-100 d-flex flex-wrap"
        style={{
          display: 'flex!important', alignContent: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start',
        }}
      >
        { tap
          ? (
            pers?.map((el) => (
              <Character
                key={el.id}
                pers={el}
                user={user}
                flag
                clickHandler={clickHandler}
              />
            ))
          ) : (
            <div />
          )}
      </div>
    </>
  );
}
