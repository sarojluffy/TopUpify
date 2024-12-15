import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CombinedData } from "../shared/Data";

type Props = {
  src: string;
  alt: string;
  name: string;
  id: string;
};

const Description = () => {
  const params = useParams();
  const qaz = params.id;

  const [ert, setert] = useState<Props>();
  // console.log(params.id);

  useEffect(() => {
    const abc = CombinedData.find((abc) => abc.id === params.id);
    console.log(abc);
    setert(abc);
  }, [params.id]);

  // console.log(CombinedData);
  return (
    <div>
      <img src={ert?.src}></img>
    </div>
  );
};

export default Description;
