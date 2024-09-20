import useFetch from "./useFetch";

function useCountries(name) {
	const [data, error] = useFetch("https://restcountries.com/v3.1/all");
	var countries;
	if (data) {
		countries = JSON.parse(data)
			.map((elem) => elem.name.common)
			.sort()
		if (name) countries = countries.filter((n) => n.toUpperCase().includes(name.toUpperCase()))
	}
	return countries;
}
export default useCountries;
