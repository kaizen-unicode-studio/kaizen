import SmallHero from "@/components/SmallHero";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React from "react";
import { Section, SectionHeader } from "./style";
import TextTab from "@/components/TextTab";
import { Metadata } from "next";
import donut from "/public/covers/donut.svg";
import donut_part from "/public/covers/donut_part.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Refund Policy",
};

const page = () => {
  return (
    <>
      <Header />
      <main>
        <SmallHero />
        <Section>
          <Image src={donut} alt={""} className="first_cover" />
          <Image src={donut_part} alt={""} className="second_cover" />
          <SectionHeader>REFUND POLICY</SectionHeader>
          <TextTab
            header="refund eligibility"
            text="Refunds are eligible within 5 days from the date of purchase."
          />
          <TextTab
            header="requesting a refund"
            text={
              <>
                To initiate a refund, please contact our customer support via
                email at{" "}
                <a href="mailto:kaizenbyyulia@gmail.com">
                  kaizenbyyulia@gmail.com
                </a>{" "}
                and provide your order details (Email and Full Name). Your
                refund request should include the reasons for the return.
              </>
            }
          />
          <TextTab
            header="refund processing"
            text="Upon receiving your refund request, we will review it within 2 days. Refunds will be processed using the original payment method used for the purchase."
          />
          <TextTab
            header="quality-related refunds"
            text="If the service does not meet the advertised specifications, we commit to refunding the full cost, excluding a 3% commission fee."
          />
          <TextTab
            header="order cancellation"
            text="The ability to cancel an order and receive a refund depends on the stage of order processing. Please contact our customer support for clarification."
          />
          <TextTab
            header="exceptions"
            text="Some features or services may be exempt from the refund policy. This will be clearly stated on the product/service page."
          />
          <TextTab
            header="contact us"
            text={
              <>
                For any questions or issues related to refunds, please contact
                customer support via email at{" "}
                <a href="mailto:kaizenbyyulia@gmail.com">
                  kaizenbyyulia@gmail.com
                </a>{" "}
                This refund policy is an integral part of our Terms of Service.
                We reserve the right to make changes to this policy at any time
                without prior notice. Thank you for choosing our services!
              </>
            }
          />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default page;
