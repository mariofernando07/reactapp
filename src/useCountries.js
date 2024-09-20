import useFetch from "./useFetch";

function useCountries() {
	const [data, error] = useFetch("https://restcountries.com/v3.1/all");
	var countries;
	if (data) {
		countries = JSON.parse(data)
			.map((elem) => elem.name.common)
			.sort()
	}
	return countries;
}
export default useCountries;
