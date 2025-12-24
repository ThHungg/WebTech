import { memo } from "react";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="p-[32px]">
      <p>{description}</p>
    </div>
  );
};

export default memo(ProductDescription);
