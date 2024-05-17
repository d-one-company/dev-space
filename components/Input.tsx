import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, icon, ...props }, ref) => {
  return (
    <div className={cn('bg-onyx focus-within:ring-gold-drop flex w-full items-center rounded-md px-3 py-2 text-sm ring-1 ring-transparent', className)}>
      {icon && <div className="mr-3">{icon}</div>}
      <input type={type} className={cn('placeholder:text-liver flex-grow bg-transparent outline-none', className)} ref={ref} {...props} />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
