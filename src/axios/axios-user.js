import axios from "axios";

const DATABASE_URL = "http://127.0.0.1:8080";

export const createUser = async (name, email, password) => {
  try {
    await axios.post(`${DATABASE_URL}/auth/register`, {
      name,
      email,
      password,
    });
    const user = await loginUser(email, password);
    return user;
  } catch (error) {
    return console.log(error.response.data.errors[0].msg);
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
    return console.log(error.response.data.msg);
  }
};

/*export const verifyUser = async (email, code) => {
  try {
    const res = await axios.patch(`${DATABASE_URL}/auth/verify`, {
      email,
      code,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg) || "Error desconocido";
  }
};*/

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