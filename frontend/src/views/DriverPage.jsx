import { useState, useEffect } from "react";
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

  return <Delivery delivery={delivery} />;
}
