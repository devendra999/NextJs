const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={onClick}>
          <h2>{title}</h2>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };

  export default AccordionItem;