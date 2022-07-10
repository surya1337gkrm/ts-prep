import { ChangeEvent, useState } from 'react';
// import { useSelector } from 'react-redux';

// import { actionCreators } from '../state';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rootState } from '../state';

const App: React.FC = () => {
  const [term, setTerm] = useState('');
  const [dispTerm, setDispTerm] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  // const dispatch = useDispatch();
  const { searchRepos } = useActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDispTerm(term);
    // dispatch(actionCreators.searchRepos(term));
    searchRepos(term);
    setTerm('');
  };

  const { data, error, loading } = useTypedSelector(
    (state: rootState) => state.repos
  );
  console.log({ data, error, loading });

  return (
    <div className='ui container'>
      <h1>Search For a Package</h1>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
      <br />
      {dispTerm && (
        <>
          <b>
            Search Results for{' '}
            <span style={{ color: 'red' }}>'{dispTerm}'</span>
          </b>
        </>
      )}
      <hr />
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <>
          {data.map((name) => (
            <div
              key={name}
              style={{
                backgroundColor: 'steelblue',
                color: 'white',
                padding: '2px',
                margin: '2px',
                paddingBottom: '5px',
                borderRadius: '5px',
                width:'25%'
              }}>
              {name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default App;
