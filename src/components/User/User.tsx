type Prop = {
    name:string,
    age:number
}

export function User({ name, age }:Prop) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Возраст: {age}</p>
    </div>
  );
}