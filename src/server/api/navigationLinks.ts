import { type INavigationLink } from "@/app/interfaces/interfaces";

export default defineEventHandler(() => {
  return <INavigationLink[]>[
    { id: 1, name: "about us", link: "/" },
    { id: 2, name: "products", link: "/" },
    { id: 3, name: "locations", link: "/" },
  ];
});
