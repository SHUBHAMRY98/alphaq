import { useEffect, useState } from "react";
import api from "../services/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get("/services").then(res => setServices(res.data));
  }, []);

  return (
    <div>
      <h1>Our Services</h1>

      {services.map((s) => (
        <div key={s._id}>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <p>₹{s.price}</p>
        </div>
      ))}
    </div>
  );
}