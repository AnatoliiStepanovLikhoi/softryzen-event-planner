import { Helmet } from "react-helmet-async";

const HelmetInfo = () => {
  return (
    <Helmet>
      <title>Event Planner App</title>
      <meta
        name="description"
        content="Event Planner is a web application that allows users to plan and organize events."
      />
      <link rel="canonical" href="/" />
    </Helmet>
  );
};

export default HelmetInfo;
