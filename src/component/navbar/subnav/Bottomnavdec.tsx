import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Bottomnavdec = ({ children }: Props) => {
  return <div className="text-terinary text-2xl pb-5">{children}</div>;
};

export default Bottomnavdec;
