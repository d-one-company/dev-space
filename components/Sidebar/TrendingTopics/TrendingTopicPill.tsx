type Props = { label: string };

const TrendingTopicPill = ({ label }: Props) => {
  return (
    <div className="cursor-pointer rounded-md border border-oslo-gray px-2 py-1 text-sm text-oslo-gray transition-colors duration-200 hover:border-oslo-gray/70 hover:text-oslo-gray/80">
      #{label}
    </div>
  );
};

export default TrendingTopicPill;
