const Section = ({ children, heading }) => {
  return (
    <section className="mb-12">
      {heading && <h3>{heading}</h3>}
      {children}
    </section>
  );
};

export default Section;
