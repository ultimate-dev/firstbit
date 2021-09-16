import {
  RiDashboardFill,
  RiUserSettingsFill,
  RiShoppingBag3Fill,
  RiFirstAidKitFill,
  RiApps2Fill,
} from "react-icons/ri";

export default [
  {
    name: "Gösterge Paneli",
    to: "/panel/dashboard",
    icon: RiDashboardFill,
  },
  {
    section: "Panel",
  },
  {
    name: "Kullanıcılar",
    icon: RiUserSettingsFill,
    menu: [
      { name: "Kullanıcı Liste", to: "/panel/users/list" },
      { name: "Kullanıcı Ban", to: "/panel/users/ban" },
    ],
  },
];
