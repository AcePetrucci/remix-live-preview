import { TextBlockProps } from './types/props';

export const TextBlock = ({ className, children, style }: TextBlockProps) => {
  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 text-lg font-medium 
        text-blue-900 rounded-md cursor-pointer 
        bg-slate-200 hover:bg-slate-300 w-fit h-fit
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};
