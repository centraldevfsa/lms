const apiUrl = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error;
  }
};
