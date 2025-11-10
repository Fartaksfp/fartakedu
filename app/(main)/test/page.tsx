"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function Page() {

  const [data, setdata] = useState("")

  const getPaymentToken = async () => {
    const res = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: 15000,
        phoneNumber: "09226839455",
      }),
    });

    const jsondata = await res.json()
    setdata(JSON.stringify(jsondata))
    console.log(jsondata);
    fetch(`/api/sendtopay?token=${jsondata.data.token}`)
    // redirect(`https://sep.shaparak.ir/OnlinePG/SendToken?token=${jsondata.data.token}`)
  };
  
  const checkip = async () => {
    const res = await fetch("/api/ipchecker")

    const jsondata = await res.json()
    setdata(JSON.stringify(jsondata))
  };

  return (
    <div className="py-30">
      <Button onClick={getPaymentToken}>Go To Payment</Button>
      <Button onClick={checkip}>Go To Payment</Button>
      <p>{data}</p>
    </div>
  );
}

export default Page;
