import axios from "axios";

const DATABASE_URL = "http://127.0.0.1:8080";

export const createUser = async (name, email, password) => {
  try {
    await axios.post(`${DATABASE_URL}/auth/register`, {
      name,
      email,
      password,
    });
    //Si la creación del usuario es exitosa, intento iniciar sesión:
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${DATABASE_URL}/auth/login`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw (error, console.log(error.response.data.msg));
  }
};

export const verifyUser = async (email, code) => {
  try {
    const res = await axios.patch(`${DATABASE_URL}/auth/verify`, {
      email,
      code,
    });
    return res.data;
  } catch (error) {
    console.error("Error en la solicitud de verificación:", error);
    if (error.response) {
      alert(error.response.data.msg || "Error en el servidor");
    } else if (error.request) {
      alert("No se recibió respuesta del servidor");
    } else {
      alert("Error al configurar la solicitud");
    }
    return null;
  }
};

export const getOrders = async (token) => {
  try {
    const response = await axios.get(`${DATABASE_URL}/orders/`, {
      headers: {
        "x-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    throw error;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${DATABASE_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": "token",
      },
      body: JSON.stringify(orderData),
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
