import React, { useState } from 'react';

export default function Login() {
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location.href = '/personalArea';
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };
  return (
    <div className="formReg  w-100 h-100">
      <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            <input type="email" name="email" style={{ color: 'white', background: 'linear-gradient(to top right, #333300 -29%, #666699 130%)' }} className="form-control" />

          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input type="password" name="pass" style={{ color: 'white', background: 'linear-gradient(to top right, #333300 -29%, #666699 130%)' }} className="form-control" />

          </label>
        </div>
        <button style={{ color: 'white', background: 'linear-gradient(to top right, #333300 -29%, #666699 130%)' }} type="submit" className="btn btn-outline">Log in</button>

        <span className="mt-3" style={{ color: 'red' }}>{error}</span>

      </form>
    </div>
  );
}
