const apiCaller = async (url) => {
    try {
      const res = await fetch(`https://munavirt.pythonanywhere.com/${url}/`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'XqYwi74rytF3UAOmQFxF23w9JDC3nCpCjiZMd99tyjnKn4r9Ee6Lyo1XUUJkg7KE',
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