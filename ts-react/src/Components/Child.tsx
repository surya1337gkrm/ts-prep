interface childProps {
  color?: string;
  handleClick(): void;
  children?: JSX.Element;
}

//Typescript doesn't know Child is a react component. it treats Child component as a function instead of REact Component.
export const Child = ({ color }: childProps) => {
  return <>Child Element {color}</>;
};

//this methods helps to get access of the children
export const ChildRFC: React.FC<childProps> = ({
  color,
  handleClick,
  children,
}) => {
  return (
    <>
      Child React Element : {color}
      <br />
      {children && children}
      <button onClick={handleClick}>Click Me</button>{' '}
    </>
  );
};

ChildRFC.defaultProps = {
  color: 'yellow',
};
