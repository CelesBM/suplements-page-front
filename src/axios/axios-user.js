import axios from "axios";

const DATABASE_URL = "http://127.0.0.1:8080";

export const createUser = async (name, email, password) => {
  try {
    await axios.post(`${DATABASE_URL}/auth/register`, {
      name,
      email,
      password,
    });
    // Si la creación del usuario es exitosa, intentamos iniciar sesión
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    // Lanza el error para que pueda ser manejado por el componente
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
    //return console.log(error.response.data.msg);
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
      // Respuesta del servidor con errores
      alert(error.response.data.msg || "Error en el servidor");
    } else if (error.request) {
      // Solicitud realizada pero sin respuesta
      alert("No se recibió respuesta del servidor");
    } else {
      // Error al configurar la solicitud
      alert("Error al configurar la solicitud");
    }
    return null;
  }
};

export const createOrder = async (orderData) => {
  try {
    const response = await fetch(`${DATABASE_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": "your-auth-token", // Reemplaza con el token de autenticación actual
      },
      body: JSON.stringify(orderData),
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
