import React from "react";
import Header from "../../components/UI/Header";
import Footer from "../../components/UI/Footer";
import CategoryFunds from "../../components/UI/CategoryFunds";
import PageTitle from "../../components/UI/PageTitle";
import Button from "../../components/UI/Button";
import { useForm } from "react-hook-form";
import DefaultTitle from "../../components/UI/DefaultTitle";
import { useRouter } from "next/router";

function Funds() {
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
    <div className="overflow-hidden">
      <Header />
      <PageTitle title="Fundraisers" desc="Home/Fundraisers" />

      <div className=" bg-slate-100">
        <div className="xl:w-[1000px] xl:mx-auto pt-5 mx-3">
          <DefaultTitle title="All Categories" />
        </div>
        <div className=" pb-6 xl:w-[1000px] xl:mx-auto lg:w-[800px] lg:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-3 justify-items-center">
          {categories.map((item) => {
            return (
              <Button
                key={item.category}
                title={item.category}
                link={`/funds/search?keyword=&category=${item.category}&page=1`}
              />
            );
          })}
        </div>
      </div>
      <div className="xl:w-[1500px] xl:mx-auto w-[350px] mx-3 my-4 ">
        <div>
          <DefaultTitle title="Medical Funds" />
          <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
              <CategoryFunds categoryTitle="Medical Funds" category="Medical" />
            </div>
          </div>
        </div>

        <div>
          <DefaultTitle title="Memorial Funds" />
          <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
              <CategoryFunds category="Memorial" />
            </div>
          </div>
        </div>

        <div>
          <DefaultTitle title="Emergency Funds" />
          <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
              <CategoryFunds category="Emergency" />
            </div>
          </div>
        </div>

        <div>
          <DefaultTitle title="NonProfit Funds" />
          <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
              <CategoryFunds category="NonProfit" />
            </div>
          </div>
        </div>

        <div>
          <DefaultTitle title="Business Funds" />
          <div className="grid grid-flow-row col-auto grid-cols-1 mx-auto">
            <div className="w-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide">
              <CategoryFunds category="Business" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Funds;
