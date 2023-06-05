import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Check Our Pricing</h1>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull" 
            style={{display : "flex", justifyContent:"center", alignItems:"center",   flexWrap: "wrap"}}
          >
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="roller"
                price="Rs. 500"
                title="Painting"
              />
            </TableBox>
            <TableBox style={{margin : "3px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="cleaning"
                price="Rs. 500"
                title="Home Cleaning"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px",  boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="ac"
                price="Rs. 500"
                title="AC Service & Repair"
              />
            </TableBox>
            <TableBox style={{margin : "3px 5px"  ,boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="repair"
                price="Rs. 500"
                title="Appliance Repair"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px",  boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="pest"
                price="Rs. 500"
                title="Pest Control"
              />
            </TableBox>
            <TableBox style={{margin : "3px 5px",  boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="electric"
                price="Rs. 500"
                title="Electrician"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="plumber"
                price="Rs. 500"
                title="Plumber"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="carpenter"
                price="Rs. 500"
                title="Carpenter"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="interior"
                price="Rs. 500"
                title="Interior Designing"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="ceiling"
                price="Rs. 500"
                title="False Ceiling"
              />
            </TableBox>
            <TableBox style={{margin : "5px 5px" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px", borderRadius:"5%"}}>
              <PricingTable
                icon="movers"
                price="Rs. 500"
                title="Packers & Movers"
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  box-shadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px";
    border-radius:"5%"
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
  }
`;




