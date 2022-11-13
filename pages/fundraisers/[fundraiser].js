import React from 'react'
import Footer from '../../components/UI/Footer'
import FundData from '../../components/UI/FundData'
import Header from '../../components/UI/Header'

function Fundraiser({fund}) {
console.log(fund)

  return (
    <div>
    
<Header />
    
    
    <FundData title={fund.title} desc={fund.long_description} amount={fund.goal} image={fund.images} />


<Footer />



    </div>
  )
}



export async function getStaticProps(context) {

  const { params } = context
  
  const fundraiserId = params.fundraiser
  
  let result = await fetch("http://gohelpme.online/api/posts?category=others")

  const data = await result.json();

  const {posts} = data
  


  
  let fund = posts.find(fund => fund._id === fundraiserId)
  
    return {
      props: {
        fund,
      },
    };
  }


export async function getStaticPaths() {

  let result = await fetch("http://gohelpme.online/api/posts?category=others")

  const data = await result.json();

  const ids = data.posts.map(fund => fund._id )

  const pathsWithParams = ids.map((id) => ({ params: { fundraiser: id}}));


  return {
    paths: pathsWithParams,
    fallback: false, // can also be true or 'blocking'
  }
}
 
 
export default Fundraiser

