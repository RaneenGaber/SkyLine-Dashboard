import Layout from "../../Shared/Layout";
import CustomHeadeing from "../../Shared/CustomComponent/CustomHeading";
import CustomCard from "../../Shared/CustomComponent/CustomCard";
import "./style.css";

const Flight = () => {
  return (
    <Layout>
      <CustomHeadeing title="Flight" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomCard
          title1="Create Flight"
          title2="List Flights"
          link1="/Flight/create"
          link2="/Flight/FlightList"
        />
      </div>
     
    </Layout>
  );
};

export default Flight;
