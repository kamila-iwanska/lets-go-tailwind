export async function fetchData() {
  const url = "https://api.api-ninjas.com/v1/holidays?country=PL";
  return await (
    await fetch(url, {
      headers: { "X-Api-Key": "OH+HEf/9IH2zuHR/cMO/8g==ldhBovC6Rpa1TIss" },
    })
  ).json();
}
export async function sendApplication(formData: FormData) {
  const url = "http://letsworkout.pl/submit";
  return await fetch(url, { method: "POST", body: formData });
}
