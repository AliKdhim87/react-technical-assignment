import React, { useState, useRef, useEffect } from 'react';
import { Input } from './components/Form-Elements/Input/Input';
import './App.css';
import users from './users.json';
import { filterUsers } from './utils/filter';
function App() {
  const [search, setSearch] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const [display, setDisplay] = useState(false);

  const wrapperRef = useRef(null);
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <>
      <div style={{ width: '50%', margin: 'auto' }}>
        <h1>Assignment</h1>
        <Input
          onSubmit={onSubmitHandler}
          left_icon='fa-search'
          right_icon='fa-sort-down'
          id='search'
          element='input'
          label={'Contect'}
          placeholder='Type Or Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={(e) => setDisplay(true)}
        />

        {display && (
          <div className={`dropdown`} ref={wrapperRef}>
            {filterUsers(users, search).length > 0
              ? filterUsers(users, search).map((user, index) => (
                  <div
                    key={index}
                    className={`dropdown-item `}
                    onClick={(e) => {
                      setSearch(user.name);
                      setDisplay(false);
                    }}
                  >
                    {user.name}
                  </div>
                ))
              : 'There is no match'}
          </div>
        )}
      </div>
      <Input
        onSubmit={onSubmitHandler}
        right_icon='fa-envelope'
        name='email'
        element='input'
        label={'Email'}
        placeholder='Type Yor Email.'
        value=''
      />
      <Input
        onSubmit={onSubmitHandler}
        right_icon='fa-lock'
        name='password'
        element='input'
        label={'Password'}
        placeholder='Type Yor Password.'
        value=''
      />
    </>
  );
}
export default App;
