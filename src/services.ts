export type ServiceID = "services" | "plans";

export interface IService {
  id: ServiceID;
  title: string;
  gap: number;
}

export const services: IService[] = [
  {
    id: "services",
    title: "NUTRITION SERVICES",
    gap: 18,
  },
  {
    id: "plans",
    title: "NUTRITION PLANS",
    gap: 12,
  },
];
