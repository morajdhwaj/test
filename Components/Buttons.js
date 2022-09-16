export const ActiveButton = ({ customClass, children }) => (
  <button className={` text-white bg-blue-700 rounded-full  btn-animation ${customClass} `}>
    {children}
  </button>
);
