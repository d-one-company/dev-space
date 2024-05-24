type Props = {
  params: {
    notificationId: string;
  };
};

const Page = ({ params: { notificationId } }: Props) => {
  return <div>{notificationId}</div>;
};

export default Page;
