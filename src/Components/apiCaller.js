const apiCaller = async (url,method) => {
    try {
      const res = await fetch(`https://fetlla.pythonanywhere.com/${url}/`, {
        method: method,
        headers: {
          'accept': 'application/json',
          'X-CSRFToken': 'AQDU2r7t9GDPPPMBrsTmJlXE9f2Fcx462Gmv3k0n4OYU0fkvbSlDE1g5k1dlax8T',
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