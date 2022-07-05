import { Child, ChildRFC } from './Child';
import FindUser from './FindUser';
import InputComponent from './InputComponent';
import Event from './events/Event';
const Parent = () => {
  return (
    <>
      <h3>Parent Element</h3>
      <Child
        color='red'
        handleClick={() => {
          alert('Button CLicked');
        }}
      />
      <hr />
      <br />
      <ChildRFC
        handleClick={() => {
          alert('Button CLicked');
        }}
      />
      <hr />
      <br />
      <ChildRFC color='brown' handleClick={() => alert('Button CLicked')}>
        <h6>Children</h6>
      </ChildRFC>
      <br />
      <hr />
      <InputComponent />
      <br />
      <hr />
      <FindUser />
      <br />
      <hr />
      <Event />
    </>
  );
};

export default Parent;
