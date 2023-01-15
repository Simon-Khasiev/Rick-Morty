import React from 'react';

export default function Character({
  user, pers, flag, setCharacters,
}) {
  const likeHandler = () => {
    fetch(`/api/addFavor/${user.id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ persId: pers.id }),
    });
  };

  const deleteHandler = () => {
    fetch(`/api/delFavor/${user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ persId: pers.id }),
    })
      .then(() => {
        setCharacters((prev) => prev.filter((el) => Number(el.id) !== Number(pers.id)));
      });
  };
  return (
    <div>
      <div className="container w-25">
        <div className="card m-3" style={{ width: '18rem' }}>
          <img className="card-img-top" src={pers?.image} alt="res" />
          <div className="card-body">
            <h5 className="card-title">{pers?.name}</h5>
            <p className="card-text">{pers?.status}</p>
            <p className="card-text">{pers?.species}</p>
            {user
              && (
                <button type="button" onClick={flag ? likeHandler : deleteHandler} className="btn btn-outline mx-1" style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }}>{flag ? 'Like' : 'Dislike'}</button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
