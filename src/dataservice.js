const fetchData = async () => {
  try {
    const response = await fetch('./data.json');
    const jsonData = await response.json();
    const dataArray = await fetchData();

    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { fetchData };
