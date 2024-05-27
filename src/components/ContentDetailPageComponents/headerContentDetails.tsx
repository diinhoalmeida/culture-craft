type HeaderProps = {
  title?: string;
};

export const HeaderCotentDetails: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-3xl text-slate-50 [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] lg:line-clamp-1 line-clamp-2 overflow-hidden">
      {title}
    </h1>
  );
};
