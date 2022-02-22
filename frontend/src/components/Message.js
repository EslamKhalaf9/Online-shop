const Message = ({ message, bg = 'bg-blue-500', color = 'text-white' }) => {
  return (
    <div className={`${bg} p-3 font-semibold shadow-md rounded m-2 ${color}`}>
      {message}
    </div>
  );
};

export default Message;
