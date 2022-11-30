import React from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import CategoryFunds from "../../components/UI/CategoryFunds";
import PageTitle from "../../components/UI/PageTitle";
import Button from "../../components/UI/Button";
import { useForm } from "react-hook-form";
import DefaultTitle from "../../components/UI/DefaultTitle";
import { useRouter } from "next/router";

function funds() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const categories = [
    { category: "Medical", path: "/" },
    { category: "Memorial", path: "/howitworks" },
    { category: "Emergency", path: "/faqs" },
    { category: "NonProfit", path: "/fundraisers" },
    { category: "FinancialEmergency", path: "/blog" },
    { category: "Animals", path: "/blog" },
    { category: "Environment", path: "/blog" },
    { category: "Business", path: "/blog" },
    { category: "Community", path: "/blog" },
    { category: "Competition", path: "/blog" },
    { category: "Creative", path: "/blog" },
    { category: "Event", path: "/blog" },
    { category: "Faith", path: "/blog" },
    { category: "Family", path: "/blog" },
    { category: "Sports", path: "/blog" },
    { category: "Wishes", path: "/blog" },
    { category: "Travel", path: "/blog" },
    { category: "Volunteer", path: "/blog" },
    { category: "Others", path: "/blog" },
  ];

  return (
    <div>
      <Header />
      <PageTitle title="Fundraisers" desc="Home/Fundraisers" />
      <div className="xl:w-[1000px] mx-auto text-center">
        <DefaultTitle title="All Categories" />
      </div>

      <div className=" py-10 xl:w-[1000px] xl:mx-auto lg:w-[800px] lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-3 justify-items-center">
        {categories.map((item) => {
          return (
            <Button
              title={item.category}
              link={`/funds/search?keyword=help&category=${item.category}&page=1`}
            />
          );
        })}
      </div>

      <div className="w-[1500px] mx-auto">
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
