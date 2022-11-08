import React from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import CategoryFunds from "../../components/UI/CategoryFunds";

function funds() {
  return (
    <div>
      <Header />

      <CategoryFunds
        title="Fundraisers"
        desc="Home/Fundraisers"
        categoryTitle="Top Performing Funds"
      />

      <CategoryFunds categoryTitle="Medical Fundraisers" />

      <CategoryFunds categoryTitle="Memorial Fundraisers" />

      <CategoryFunds categoryTitle="Emergency Fundraisers" />

      <CategoryFunds categoryTitle="Charity Fundraisers" />

      <CategoryFunds categoryTitle="Education Fundraisers" />
      <Footer />
    </div>
  );
}

export default funds;
