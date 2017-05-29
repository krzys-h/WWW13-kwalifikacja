// Masz dane następujące funkcje:
// getURL(string url) - pobiera dane spod URLa i zwraca Promise który przekaże je jako string
// getImage(string url) - pobiera obrazek spod URLa i zwraca Promise który przekaże obiekt <img> z obrazkiem
// showSpinner(bool show) - pokaż/ukryj animację ładowania
// display(image, text) - wyswietl pobrane dane na ekranie
// Zmienna ready - zawiera Promise, który zostanie wypełniony gdy strona jest gotowa do rozpoczęcia wykonywania Twojego kodu

// Twoim zadaniem jest:
// 1. Wyświetlić animację pobierania
// 2. Pobrać z https://www13-kwalifikacja.krzysh.pl/data/data.json dwa adresy URL - jeden do tekstu, drugi do obrazka
// 3. Pobrać obrazek z podanego URLa
// 4. Pobrać tekst z podanego URLa
// 5. Ukryć animację pobierania
// 6. Przekazać dane do funkcji display() w celu wyświetlenia na ekranie

// Dodatkowe punkty można zdobyć za równoczesne pobieranie obrazka i tekstu (podpowiedź: Promise.all()) oraz obsługę błędów

// Zauważ, że plik index.html używa ścieżek bezwzględnych. Oznacza to, że strona nie będzie działać jeśli tylko otworzysz index.html w przeglądarce - musisz uruchomić lokalny serwer HTTP w tym katalogu (to też jest częścią zadania ;)

// Jeśli potrzebujesz, możesz sprawdzić implementację podanych funkcji w pliku index.js

// Może ci się przydać opis Promises: https://developers.google.com/web/fundamentals/getting-started/primers/promises

// Uwaga: serwer celowo opóźnia odpowiedzi żeby zasymulować dłuższe czasy ładowania

function getJSON(url) {
	return getURL(url).then(JSON.parse);
}

ready.then(function() {
	showSpinner(true);
	return getJSON("https://www13-kwalifikacja.krzysh.pl/data/data.json");
})
.then(function(data) {
	console.log(data);
	// TODO: Dopisz resztę kodu ...
});
