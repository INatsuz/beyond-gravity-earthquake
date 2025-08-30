# BG Earthquake Tracker


## Setup Instructions
Clone the repository to your local machine.<br>
Run ```npm install``` in the project directory to install the necessary dependencies.<br>
Run ```npm run dev``` to open the development server. The address to open should appear in the console output.

## Design Choices
- The chosen map library was Mapbox.
- The data is being fetched from a realtime API provided by USGS.
- A max limit of 200 items was defined for fetching earthquakes.
- To aid with some design consistency Bootstrap was used. 
The choice was mostly to implement breakpoints, responsive behaviour and some components like the navigation bar.
- While some custom CSS was used for some elements, styling was mainly implemented through Bootstrap classes.
- For the responsive behavior the choice was to fold the map under the list on smaller screens. To simplify scrolling "cooperativeGestures" were used in Mapbox which requires 2 fingers to move the map on mobile and prioritize scrolling.
- Added a "load more" button at the bottom of the earthquake list to fetch more data from the API.
- Marker highlighting was done through changing the color of the marker from the default blue  to red.
- While not specified a different background color was also added to a selected list item.
- To simplify navigating through the page on mobile a couple of icons were added to the navbar. The map icon scroll down to the map and the up arrow scroll back to the top of the page.
- When pressing a list item on mobile the page scroll down to the map component to give proper feedback on mobile devices.
