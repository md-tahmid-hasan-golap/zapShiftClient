import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import L from "leaflet";

// Leaflet default marker icon fix (Mobile-e onek somoy marker dekhay na)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const serviceCenterdata = useLoaderData();

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Coverage Area
        </h2>
        <p className="text-gray-600 mt-2">
          We deliver almost all over Bangladesh
        </p>
      </div>

      {/* Map Container Wrapper */}
      <div className="w-full h-[400px] md:h-[600px] lg:h-[750px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <MapContainer
          center={position}
          zoom={7} // Bangladesh-er full map-er jonno zoom 7 best
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenterdata?.map((serviceCenter, index) => (
            <Marker
              key={index}
              position={[serviceCenter.latitude, serviceCenter.longitude]}
            >
              <Popup>
                <div className="font-sans">
                  <strong className="text-lg text-[#b8d65a]">
                    {serviceCenter.district}
                  </strong>
                  <p className="mt-1">
                    <span className="font-semibold">Covered Areas:</span> <br />
                    {serviceCenter.covered_area.join(", ")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
