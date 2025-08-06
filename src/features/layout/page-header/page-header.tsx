import type { FC } from "react";

import routes from "../../routes/routes.const";
import { HomeIcon, MapIcon, CarIcon, ClipboardListIcon } from "../../ui/icons";
import { LinkButton } from "../../ui/components";

export const PageHeader: FC = () => {
  const navItems = [
    {
      path: routes.home,
      label: "Home",
      icon: HomeIcon,
      iconColor: "text-blue-600",
    },
    {
      path: routes.map,
      label: "Map",
      icon: MapIcon,
      iconColor: "text-green-600",
    },
    {
      path: routes.roadStatistics,
      label: "Road statistics table",
      icon: CarIcon,
      iconColor: "text-purple-600",
    },
    {
      path: routes.todoTable,
      label: "Todo table",
      icon: ClipboardListIcon,
      iconColor: "text-orange-600",
    },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">WebDev Task 01</h1>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <LinkButton
                  to={item.path}
                  key={item.path}
                  variant="white"
                  hideIcon
                >
                  <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                  <span className="ml-2">{item.label}</span>
                </LinkButton>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
