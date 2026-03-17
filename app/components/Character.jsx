export default function Character({ name, species, image }) {
  return (
    <div className="flex flex-col items-center justify-center text-center" >
      <h1><b>{name}</b></h1>
      <p>Species: {species}</p>
      <img src={image} alt={name}/>
    </div>
  );
}

