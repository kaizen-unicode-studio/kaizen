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
  title: "Terms & Conditions",
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
          <SectionHeader>TERMS & CONDITIONS</SectionHeader>
          <TextTab
            header={"Use of Website and Services"}
            text="Our website offers nutrition services. Upon purchase, you receive a non-exclusive, non-transferable license to access and use the purchased services for personal and non-commercial purposes only. You may not distribute, modify, or resell the content without our explicit written permission."
          />
          <TextTab
            header={"Intellectual Property"}
            text="All content on our website, including but not limited to text, images, graphics, videos, logos, and trademarks, is the property of KAIZEN and is protected by applicable copyright and intellectual property laws. You agree not to reproduce, copy, or exploit any content without our consent."
          />
          <TextTab
            header={"Registration and Account"}
            text="To access certain features or services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and agree to notify us immediately of any unauthorized use or security breach."
          />
          <TextTab
            header={"Payment and Refunds"}
            text="For service purchases, we use the Stripe payment service. By completing a purchase, you agree to provide accurate billing information and authorize the transaction. All payments are non-refundable unless otherwise specified. Refunds, if applicable, are subject to our Refund Policy."
          />
          <TextTab
            header={"Privacy"}
            text="We respect your privacy and handle personal information in accordance with our Privacy Policy. By using our website, you consent to the collection, use, and disclosure of your information as outlined in our Privacy Policy."
          />
          <TextTab
            header={"Third-Party Links and Content"}
            text="Our website may contain links to external sites or content provided by third parties. We do not endorse, control, or take responsibility for such content or websites. Your interaction with third-party links is at your own risk."
          />
          <TextTab
            header={"Disclaimer of Warranties"}
            text={`While we strive to provide accurate and reliable information, our services and content are offered on an "as-is" basis. We make no warranties or guarantees regarding the accuracy, reliability, or effectiveness of our nutrition plans or consultation services. The effectiveness of our nutrition plans depends largely on the client's commitment to following the provided guidelines. As such, individual results may vary, and we cannot guarantee specific outcomes. For one-on-one consultations with a nutritionist, the effectiveness of the program depends equally on the client's adherence to the nutritionist's advice and the expertise of the nutritionist. Therefore, we make no guarantees regarding the outcomes of these consultations, as they are influenced by both parties' participation and efforts.`}
          />
          <TextTab
            header={"Limitation of Liability"}
            text="In no event shall KAIZEN, its affiliates, or employees be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of our website or services."
          />
          <TextTab
            header={"Indemnification"}
            text="You agree to indemnify and hold KAIZEN harmless from any claims, damages, or liabilities arising from your violation of these Terms & Conditions."
          />
          <TextTab
            header={"Changes to terms"}
            text={
              <>
                We reserve the right to modify these Terms & Conditions at any
                time. Any significant changes will be notified to you, and your
                continued use of our website constitutes acceptance of the
                revised terms. These Terms & Conditions form a binding agreement
                between you and KAIZEN. If you have any questions or concerns,
                please contact us at{" "}
                <a href="mailto:kaizenbyyulia@gmail.com">
                  kaizenbyyulia@gmail.com
                </a>
              </>
            }
          />
          <TextTab header={""} text={"Last updated: July 26, 2024"} />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default page;
