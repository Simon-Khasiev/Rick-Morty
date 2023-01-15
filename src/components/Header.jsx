import React from 'react';

export default function Header({ user }) {
  return (
    <div>
      <nav className="navbar navbar-light h-100 m-0 p-0" style={{ background: 'linear-gradient(to top right, #333300 -29%, #666699 130%)', height: '10%' }}>
        <a href="/" className="navbar-brand ms-3">
          <h1 style={{ color: 'white' }} className="container">
            Rick & Morty fun club
          </h1>
        </a>
        <form className="form-inline mx-3">
          {user ? (
            <>
              <a href="/personalArea"><button style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} type="button" className="btn btn-outline mx-1">Personal area</button></a>
              <a href="/api/logout"><button style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} type="button" className="btn btn-outline mx-1">Log out</button></a>
            </>
          ) : (
            <>
              <a href="/login"><button style={{ color: 'white', background: 'linear-gradient(to top right, #666699 -29%, #333300 130%)' }} className="btn btn-outline mx-1" type="button">Log in</button></a>
              <a href="/reg"><button style={{ color: 'white', background: 'linear-gradient(to top right,  #666699 -29%, #333300 130%)' }} type="button" className="btn mx-1">Registration</button></a>
            </>
          )}
        </form>
      </nav>
    </div>
  );
}
