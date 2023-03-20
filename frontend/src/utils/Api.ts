interface ApiResponse {
  arg0: string,
}

export async function fetchData(endpoint: string, query?: string,): Promise<ApiResponse> {
  const url = query ? `${endpoint}?${query}` : endpoint;

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json() as ApiResponse;

  return data;
}
