import { useState, useRef, useEffect } from 'react';
const FindUser: React.FC = () => {
  const [search, setSearch] = useState('');
  const users = [
    { name: 'surya', age: 24 },
    { name: 'maddy', age: 25 },
  ];
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const handleClick = () => {
    setSearch('');
    const userFound = users.find((el) => el.name === search.toLowerCase());
    setUser(userFound);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <b>User Search</b>
      <br />
      <input
        ref={inputRef}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleClick}>Search</button>
      <br />
      {user ? (
        <div>{`User Found - Name: ${user.name},age:${user.age}`}</div>
      ) : (
        ''
      )}
    </>
  );
};
export default FindUser;
