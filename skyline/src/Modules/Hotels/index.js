import Layout from "../../Shared/Layout";
import CustomHeadeing from "../../Shared/CustomComponent/CustomHeading";
import CustomCard from "../../Shared/CustomComponent/CustomCard";
import "./style.css";

const Hotel = () => {
  return (
    <Layout>
      <CustomHeadeing title="Hotel" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <CustomCard
            title1="Create Hotel"
            title2="List Hotels"
            link1="/Hotel/Create"
            link2="/Hotel/HotelList"
          />
      </div>
    </Layout>
  );
};

export default Hotel;
