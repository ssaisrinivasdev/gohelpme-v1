import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';

function usePagination({api}) {
const [data,setData] = useState()
  const router = useRouter();

  useEffect(() => {
    if(!router.isReady) return;
    const sync = async () => {
      let result = await fetch({api},
        {
          method: "PUT",
          body: JSON.stringify(),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
        []
      );

      if (result.status >= 200 && result.status <= 299) {
        const jsonresultData = await result.json();
        const timeout = setTimeout(() => {
          router.push("/fundraisers/" + jsonresultData.donationLog.fund_id);
        }, 5000);
        return () => clearTimeout(timeout);
      }
    };

    sync();
    
  },[router.isReady])

return data


  
}

export default usePagination