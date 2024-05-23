import Discussion from './Discussion';

const TopDiscussions = () => {
  return (
    <div className="flex flex-col items-start gap-3 px-4">
      <p> Top Discussions this Week</p>
      <Discussion numberOfComments={181} text="Why isn't react Re-rendering when state is update to the same value?" />
      <Discussion numberOfComments={13} text="What are your goals for the week Nov 20?" />
    </div>
  );
};

export default TopDiscussions;
