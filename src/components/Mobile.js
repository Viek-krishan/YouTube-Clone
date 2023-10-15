const Mobile = () => {
  const url =
    "https://mobile-phone-specs-database.p.rapidapi.com/gsm/all-brands";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ef70ad83d4msh536e56c6296c92cp125260jsnf75312a15d7f",
      "X-RapidAPI-Host": "mobile-phone-specs-database.p.rapidapi.com",
    },
  };

  async function data() {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  }

  return (
    <div>
      <h1>This page is for mobile devices</h1>
    </div>
  );
};

export default Mobile;
