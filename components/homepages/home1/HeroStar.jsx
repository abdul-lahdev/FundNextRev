const HeroStar = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );
};

export default HeroStar;
