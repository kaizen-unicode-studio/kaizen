"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const params = useSearchParams();

  useEffect(() => {
    fetch(`/api/payment_meta?${params.toString()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return <div>success</div>;
};

export default page;
