export const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch("https://backend.remmi.space/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Error al iniciar sesión");
    }

    //const data = await res.json();
    return true;
    //console.log("Inicio de sesión exitoso:", data);
    // Aquí puedes guardar token, redirigir, etc.
  } catch (err) {
    console.error("Hubo un problema con el login:", err);
    return false;
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  console.log("register");
  try {
    const res = await fetch("https://backend.remmi.space/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, rol: 1 }),
    });

    if (!res.ok) {
      throw new Error("Error al iniciar sesión");
    }

    //const data = await res.json();
    return true;
    //console.log("Inicio de sesión exitoso:", data);
    // Aquí puedes guardar token, redirigir, etc.
  } catch (err) {
    console.error("Hubo un problema con el login:", err);
    return false;
  }
};

export const saveService = async (titulo: string, descripcion: string, caracteristicas: string[], precio: number) => {
    try {
      const res = await fetch("https://backend.remmi.space/api/registerServicios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ servicio: titulo, descripcion, caracteristicas, precio }),
      });
  
      if (!res.ok) {
        throw new Error("Error al iniciar sesión");
      }
  
      //const data = await res.json();
      return true;
      //console.log("Inicio de sesión exitoso:", data);
      // Aquí puedes guardar token, redirigir, etc.
    } catch (err) {
      console.error("Hubo un problema con el login:", err);
      return false;
    }
  };
