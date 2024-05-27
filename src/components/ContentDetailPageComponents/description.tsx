type DescriptionProps = {
  description?: string;
};

export const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col border-b border-slate-50 pb-5">
      <h1 className="text-3xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
        Description by author
      </h1>
      <p className="[text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-text-color">
        {description}
      </p>
    </div>
  );
};
