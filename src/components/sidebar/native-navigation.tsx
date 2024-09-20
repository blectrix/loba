import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import LobaHomeIcon from '../icons/lobaHomeIcon';
import LobaSettingsIcon from '../icons/lobaSettingsIcon';
import LobaTrashIcon from '../icons/lobaTrashIcon';
import Settings from '../settings/settings';
import Trash from '../trash/trash';

interface NativeNavigationProps {
  myWorkspaceId: string;
  className?: string;
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={twMerge('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native
            flex
            text-foreground
            transition-all
            gap-2
            hover:bg-muted rounded-md w-full p-1
          "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <LobaHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>

        <Settings>
          <li
            className="group/native
            flex
            text-foreground
            transition-all
            gap-2
            cursor-pointer
            hover:bg-muted rounded-md w-full p-1
          "
          >
            <LobaSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>

        <Trash>
          <li
            className="group/native
            flex
            text-foreground
            transition-all
            gap-2
            hover:bg-muted rounded-md w-full p-1
          "
          >
            <LobaTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>
      </ul>
    </nav>
  );
};

export default NativeNavigation;
