const LinkDisplay = ({ title, url, logo }) => {
  return (
    <>
      <div className='mt-6 text-center'>
        <a href={url} target='_blank'>
          <button
            type='button'
            className='inline-flex w-full sm:w-1/2 justify-left px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'>
            <img className='rounded-sm -ml-1 mr-2 h-7' src={logo} />
            <div className='my-auto'>{title}</div>
          </button>
        </a>
      </div>
    </>
  );
};
export default LinkDisplay;
