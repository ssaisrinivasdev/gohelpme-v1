import React from "react";
import ProfileWithdrawlCard from "./ProfileWithdrawlCard";
import useUserFetch from "../../hooks/use-userFetch";
import { useState, useEffect } from "react";
import LoadingComponent from "./loadingComponent";

function ProfileWithdrawReq() {
  const userData = useUserFetch();
  const [createdFunds, setCreatedFunds] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(userData){
      setCreatedFunds(userData.response.created_funds);
    }
  },[isLoading]);

  const setLoadingStatus = (boolVal) => {
    setIsLoading(boolVal);
  }

  return (
    (
      isLoading?(
        <LoadingComponent/>
      ):(
        
        <div className="flex-col">
        { 
          (userData?.response?.created_funds?.map((fund) => {
            {console.log("fund Data")}
            {console.log(fund)}
            return (
              <>
                {(fund?.verification_status == "Approved") && (
                  <ProfileWithdrawlCard
                    fundtitle= {fund?.title}
                    goal= {fund?.goal}
                    amt= {(fund?.currentValue)}
                    RemainingAmt = {(fund?.currentValue) - (fund?.withdrawnAmount)}
                    withdrawnAmount = {fund?.withdrawnAmount}
                    InProgressAmount = {fund?.inProgressAmount}
                    fundId = {fund?._id}
                    currentValue = {fund?.currentValue}
                    loadingStatus = {setLoadingStatus}
                  />
                )}
            </>
            )
          })
          )
        }
      </div>

      )
    )
  
  )
}

export default ProfileWithdrawReq;
