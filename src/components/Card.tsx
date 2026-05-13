type CardProps = {
  name: string;
  title: string;
  bio: string;
};

const Card = ({ name, title, bio }: CardProps) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  );
};

export default Card;
