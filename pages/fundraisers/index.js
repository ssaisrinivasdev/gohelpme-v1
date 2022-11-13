import React from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import CategoryFunds from "../../components/UI/CategoryFunds";
import PageTitle from "../../components/UI/PageTitle";

function funds() {
  return (
    <div>
      <Header />
      <PageTitle title="Fundraisers" desc="Home/Fundraisers" />
<div className=" xl:mx-[320px]">
      <CategoryFunds categoryTitle="Top Performing Funds" />

      <CategoryFunds categoryTitle="Medical Fundraisers" />

      <CategoryFunds categoryTitle="Memorial Fundraisers" />

      <CategoryFunds categoryTitle="Emergency Fundraisers" />

      <CategoryFunds categoryTitle="Charity Fundraisers" />

      <CategoryFunds categoryTitle="Education Fundraisers" />
      </div>
      <Footer />
    </div>
  );
}

export default funds;
