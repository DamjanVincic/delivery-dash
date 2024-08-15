import { useState, useEffect } from "react";
import backgroundImage from "../assets/background.jpg";
import Delivery from "../components/driver/Delivery";
import api from "../utils/api";

export default function DriverPage() {
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    const fetchDelivery = async () => {
      const response = await api.get("driver/deliveries/");
      setDelivery(response.data.length !== 0 ? response.data[0] : null);
    };

    fetchDelivery();

    const interval = setInterval(() => {
      fetchDelivery();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="bg-img"
      className="p-5 text-center bg-image img-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Delivery delivery={delivery} />
        </div>
      </div>
    </div>
  );
}
