import { StyledServices, Header, ServicesWrapper, Separator } from "./style";
import ExpandCard from "@/components/ExpandCard";
import Expand from "@/components/Expand";
import List from "@/components/List";
import ExpandContent from "@/components/ExpandContent";
import services_1 from "/public/covers/services_1.webp";
import services_2 from "/public/covers/services_2.webp";
import services_3 from "/public/covers/services_3.webp";
import services_4 from "/public/covers/services_4.webp";
import services_5 from "/public/covers/services_5.webp";
import { services } from "@/services";
import { products } from "@/products";

const Services = () => {
  return (
    <StyledServices id="services">
      {services.map((service) => (
        <>
          <Header>{service.title}</Header>
          <ServicesWrapper gap={`${service.gap}px`}>
            {products
              .filter((item) => item.service === service.id)
              .map((product) => (
                <ExpandCard
                  image={`/covers/services_${product.id}.webp`}
                  position={product.imagePosition}
                  title={product.name}
                  description={product.description}
                  number={product.id}
                  key={product.id}
                >
                  <ExpandContent
                    header={product.name}
                    price={product.amount}
                    listHeader={product.listHeader}
                  >
                    {product.html.content}
                  </ExpandContent>
                  {product.html.expand?.length! > 0 &&
                    product.html.expand?.map((item) => (
                      <Expand wide bold title={item.title}>
                        <List>{item.content}</List>
                      </Expand>
                    ))}
                </ExpandCard>
              ))}
          </ServicesWrapper>
        </>
      ))}

      <Separator />
    </StyledServices>
  );
};

export default Services;
