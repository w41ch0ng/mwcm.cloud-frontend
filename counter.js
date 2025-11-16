const apiEndpoint = "https://api.mwcm.cloud/count";

async function updateVisitorCount() {
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    });
    if (!response.ok) {
      throw new Error(`API responded status ${response.status}`);
    }
    const data = await response.json();
    const count = data.count;
    document.getElementById("visitorCount").textContent = count;
  } catch (err) {
    console.error("Error fetching visitor count:", err);
    document.getElementById("visitorCount").textContent = "N/A";
  }
}

window.addEventListener("load", updateVisitorCount);
