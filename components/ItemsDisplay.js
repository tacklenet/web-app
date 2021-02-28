const ItemDisplay = () => {
  const array = [1, 2, 3];
  return (
    <div className='max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-12'>
      <div className='space-y-5 mx-auto sm:max-w-xl lg:max-w-5xl'>
        <h2 className='text-center mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl'>
          Lures
        </h2>
      </div>
      <ul className='space-y-4 md:grid md:space-y-0 md:grid-cols-3'>
        {array.map((_) => (
          <li className='mx-auto'>
            <div className='space-y-4'>
              <div className='aspect-w-16 aspect-h-16'>
                <img
                  className='object-cover rounded-lg shadow-2xl'
                  src='/opm.jpg'
                  alt
                />
              </div>
              <div className='space-y-2'>
                <div className='text-lg leading-6 font-medium space-y-1'>
                  <div>
                    <img
                      className='mx-auto h-12 w-12 inline rounded-full shadow-2xl mr-2'
                      src='/bassloverats.png'
                      alt
                    />
                    <h3 className='inline'>Mischief Topwater Rat</h3>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemDisplay;
