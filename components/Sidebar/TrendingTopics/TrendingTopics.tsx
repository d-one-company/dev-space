import TrendingTopicPill from './TrendingTopicPill';

const TrendingTopics = () => {
  const labels = ['lincode', 'avalanche', 'ankr', 'thewebapps', 'dev', 'polygon', '90daysofdevops'];

  return (
    <div className="flex w-full flex-col items-start gap-5 px-4">
      <p>Trending topics</p>
      <div className="flex flex-wrap items-center gap-4">
        {labels.map(label => (
          <TrendingTopicPill key={label} label={label} />
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
