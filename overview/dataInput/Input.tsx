import { FC } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { TextInput } from '@/components';

const InputOverview: FC = () => (
  <div className="flex flex-col w-full h-full gap-4 justify-center">
    <TextInput readOnly placeholder="Text input" />
    <TextInput
      readOnly
      type="email"
      placeholder="Icon input"
      Icon={AiOutlineMail}
    />
    <TextInput
      readOnly
      type="password"
      value="howareyoudude?"
      Icon={RiLockPasswordLine}
    />
  </div>
);

export default InputOverview;
