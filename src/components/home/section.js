const HomeSection = ({ children, heading }) => {
  return (
    <section className="mb-8">
      {heading ? <h2>{heading}</h2> : null}
      {children}
    </section>
  );
};

export default HomeSection;
