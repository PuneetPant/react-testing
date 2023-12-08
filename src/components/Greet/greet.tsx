type GreetProps = {
  name?: string;
};
const Greet = ({ name }: GreetProps): JSX.Element => {
  return <div>Hello {name}</div>;
};
export default Greet;
