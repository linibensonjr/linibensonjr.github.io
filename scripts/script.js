var map = L.map('map-container').setView([20, 0], 2); // Centered on the world

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Example project markers
L.marker([40.7128, -74.0060]).addTo(map) // New York
    .bindPopup('Urban Growth Analysis - New York')
    .openPopup();

L.marker([-1.2864, 36.8172]).addTo(map) // Nairobi
    .bindPopup('Wildlife Migration Patterns - Nairobi');

L.marker([35.6762, 139.6503]).addTo(map) // Tokyo
    .bindPopup('Flood Risk Assessment - Tokyo');

L.marker([-33.8688, 151.2093]).addTo(map) // Sydney
    .bindPopup('Emergency Response Mapping - Sydney');