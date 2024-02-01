const books = (props) => {
    const { img, title, author } = props;
  
    return (
        <div className="box">
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
  
        <h4>{author} </h4>
      </article>
      </div>
    );
  };
  
  export default books;
  