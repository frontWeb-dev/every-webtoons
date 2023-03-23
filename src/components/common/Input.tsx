interface InputProps {
  label?: string;
  name: string;
  [key: string]: any;
}

const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <div>
      <input
        id={name}
        {...rest}
        className='w-full appearance-none rounded-xl border border-gray-300 px-3 py-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500'
      />
    </div>
  );
};

export default Input;
