const apiCaller = async (url,method) => {
    try {
      let payload = `https://fetlla.pythonanywhere.com/${url}/`
      const res = await fetch(payload, {
        method: method,
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'qw9bLNRmxdAwYnWo53TtQxnBLbJsDWqVSmSMMGKgslVB9NuiPtlKLdG2WXU8BWuI',
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