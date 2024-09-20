import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import clsx from 'clsx';

interface CustomDialogTriggerProps {
  header?: string;
  content?: React.ReactNode;
  children: React.ReactNode;
  description?: string;
  className?: string;
}

const CustomDialogTrigger: React.FC<CustomDialogTriggerProps> = ({
  header,
  content,
  children,
  description,
  className,
}) => {
  return (
    <Dialog>
      <DialogTrigger className={clsx('', className)}>{children}</DialogTrigger>
      <DialogContent
        className="h-screen
        block
        sm:h-[440px]
        overflow-auto
        w-full
      "
      >
        <DialogHeader className='text-center self-center justify-center items-center'>
          <DialogTitle>{header}</DialogTitle>
          <DialogDescription className='text-center self-center py-2'>{description}</DialogDescription>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialogTrigger;
