import { useState, useEffect } from "react";
import Delivery from "../components/driver/Delivery";
import api from "../utils/api";

export default function DriverPage() {
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    const fetchDelivery = async () => {
      const response = await api.get("driver/deliveries/", {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      });
      setDelivery(response.data.length !== 0 ? response.data[0] : null);
    };
    fetchDelivery();
  }, []);

  return <Delivery delivery={delivery} />;
}
