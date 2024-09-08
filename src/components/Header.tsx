import React from "react";
import { FizziLogo } from "./FizzyLogo";

type Props = {};

const Header = (props: Props) => {
  return (
    <h1 className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </h1>
  );
};

export default Header;
