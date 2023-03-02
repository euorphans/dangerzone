import { ReactElement } from 'react';

export type InputTypes = {
  icon?: {
    position: 'left' | 'right';
    self: ReactElement;
  };
  badge?: {
    position: 'left' | 'right';
    self: string;
  };
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (e: any) => void;
  height: number;
  name?: string;
};
