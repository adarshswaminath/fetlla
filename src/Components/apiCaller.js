const apiCaller = async (url) => {
    try {
      const res = await fetch(`https://munavirt.pythonanywhere.com/${url}/`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'G0OyBeaUJWJhJnW1A3oZfxIfNNURkX7m2SPOwgfWJMrYcRzOoCX5LSd3Y418dsso',
        },
      })
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data
    } catch (error) {
      console.error("API call error:", error);
    }
  }

  export default apiCaller