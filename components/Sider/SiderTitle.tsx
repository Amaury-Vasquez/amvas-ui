import { FC } from "react";
import { IconType } from "react-icons";
import clsx from "clsx";

export interface SiderTitleProps {
  text: string;
  Icon?: IconType;
  iconRight?: boolean;
  className?: string;
}

const SiderTitle: FC<SiderTitleProps> = ({
  text,
  Icon,
  iconRight,
  className,
}) => {
  const textStyle = clsx(
    "flex items-center font-semibold justify-center gap-2 text-xl text-white text-center",
    className
  );

  if (Icon) {
    return iconRight ? (
      <h1 className={textStyle}>
        {text}
        <Icon />
      </h1>
    ) : (
      <h1 className={textStyle}>
        <Icon />
        {text}
      </h1>
    );
  }
  return <h1 className={textStyle}> {text} </h1>;
};

export default SiderTitle;
