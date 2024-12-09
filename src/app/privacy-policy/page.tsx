import SmallHero from "@/components/SmallHero";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import React from "react";
import { Section, SectionHeader } from "./style";
import TextTab from "@/components/TextTab";
import { Metadata } from "next";
import donut from "/public/covers/donut.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const page = () => {
  return (
    <>
      <Header removeButtons />
      <main>
        <SmallHero />
        <Section>
          <Image src={donut} alt={"Donut"} className="first_cover" />
          <SectionHeader>PRIVACY POLICY</SectionHeader>
          <TextTab
            header={"information collection"}
            text={
              "We may collect personal details such as your name, email address, and other information when you voluntarily provide them through contact forms or account registration."
            }
          />
          <TextTab
            header={"information usage"}
            text={
              "Your personal information may be used to respond to inquiries, enhance user experience, and deliver relevant content and promotions."
            }
          />
          <TextTab
            header={"data sharing"}
            text={
              "We do not sell, trade, or share your personal information with third parties without your consent, except as required by law."
            }
          />
          <TextTab
            header={"data security"}
            text={
              "We employ industry-standard security measures to protect your information from unauthorized access or disclosure. However, we cannot ensure the security of any information you transmit to KAIZEN or guarantee that information on the Service may not be accessed, disclosed, altered, or destroyed. Please do your part to help us. You are responsible for maintaining the secrecy of purchasing orders and for controlling access to emails between you and KAIZEN, at all times."
            }
          />
          <TextTab
            header={"cookies"}
            text={
              "Our website may use cookies to improve your browsing experience. You can manage cookie preferences through your browser settings."
            }
          />
          <TextTab
            header={"third-party links"}
            text={
              "Our website may contain links to external sites. We are not responsible for their privacy practices, so please review their policies separately."
            }
          />
          <TextTab
            header={"children's privacy"}
            text={
              "Our services are not intended for children under 13, and we do not knowingly collect personal information from them."
            }
          />
          <TextTab
            header={"changes to the policy"}
            text={
              "We may update this Privacy Policy periodically. Any significant changes will be posted on this page. By using our website, you agree to the terms of this Privacy Policy. If you have any questions or concerns, please contact us at kaizenbyyulia@gmail.com"
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
