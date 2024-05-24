import { cn } from '@/lib/utils/cn';
import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, icon, ...props }, ref) => {
  return (
    <div className={cn('focus-within:ring-foreground flex w-full items-center rounded-md bg-onyx px-3 py-2 text-sm ring-1 ring-transparent', className)}>
      {icon && <div className="mr-3">{icon}</div>}
      <input type={type} className={cn('flex-grow bg-transparent text-oslo-gray outline-none placeholder:text-oslo-gray', className)} ref={ref} {...props} />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
