import routes from "../features/routes/routes.const";
import { LinkButton } from "../features/ui/components";
import { CardContainer } from "../features/ui/components/card/card-container";
import { CardItem } from "../features/ui/components/card/card-item";
import { PageHeader } from "../features/ui/components/page-header";
import {
  ChartBarIcon,
  CheckIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from "../features/ui/icons";

export const HomePage = () => {
  const featuresList = [
    "Interactive Leaflet map",
    "GeoJSON data visualization",
    "Color-coded road evaluations",
    "Hover effects and tooltips",
    "Statistics dashboard",
    "TODO management system",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="WebDev Task 01"
          description="React application with Leaflet map integration"
        />
        <div className="flex flex-col gap-8">
          <CardContainer direction="horizontal">
            <CardItem
              title={
                <div className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  Interactive Map
                </div>
              }
            >
              <div className="text-secondary mb-4">
                Explore the interactive map powered by Leaflet. View roads data
                with color-coded evaluations and interactive features.
              </div>
              <LinkButton to={routes.map} variant="blue">
                Open Map
              </LinkButton>
            </CardItem>
            <CardItem
              title={
                <div className="flex items-center">
                  <ChartBarIcon className="w-5 h-5 mr-2" />
                  Statistics Dashboard
                </div>
              }
            >
              <div className="text-secondary mb-4">
                View comprehensive statistics and analytics for roads data.
                Analyze grade distributions, evaluation metrics, and quality
                trends.
              </div>
              <LinkButton to={routes.roadStatistics} variant="green">
                View Statistics
              </LinkButton>
            </CardItem>
          </CardContainer>
          <CardContainer direction="vertical">
            <CardItem
              title={
                <div className="flex items-center">
                  <WrenchScrewdriverIcon className="w-5 h-5 mr-2" />
                  Features
                </div>
              }
            >
              <ul className="text-secondary space-y-2">
                {featuresList.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="w-4 h-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardItem>
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
