const Main = () => {
  return (
    <div className='page main'>
      <div>
        <h1>Focusing on the web, so you can focus on your business.</h1>
      </div>
      <div className='action'>
        <div className='contact'>
          <a href='#contact-form'>Get in touch.</a>
        </div>
      </div>
      <div id='contact-form' className='contact-form'>
        <div className='modal'>
          <span className='close'>
            <a href='#main'>x</a>
          </span>
          <h2>Contact Us</h2>
          <form>
            <label htmlFor='name'>
              Name:
              <input name='name' type='text' />
            </label>
            <label htmlFor='telephone'>
              Telephone:
              <input name='telephone' type='tel' />
            </label>
            <label htmlFor='email'>
              Email:
              <input name='email' type='email' />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
