# BG Earthquake Tracker


## Setup Instructions
### Requirements
- Node
- NPM

### Steps
Clone the repository to your local machine.<br>
Run ```npm install``` in the project directory to install the necessary dependencies.<br>
Run ```npm run dev``` to open the development server. The address to open should appear in the console output.

## Design Choices
- The chosen framework was React
- The chosen map library was Mapbox.
- For ease of setup, the Mapbox Token is hardcoded and visible in the repository.
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
- For optimization memoization of list items was implemented.
- Added keyboard navigation and simulated clicking when using enter on a focused element using tabIndex. Navigation was added for the buttons in the navigation bar and the list items.

## Screenshots
### PC
No item selected.<br>
<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/77d8b095-8654-481f-9eb2-177f5793de34" />

Item selected and marker highlighted.<br>
<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/f9b4823b-9c67-4383-adf0-29617e969a0a" />

### Mobile
List on mobile.<br>
<img width="368" height="775" alt="image" src="https://github.com/user-attachments/assets/3151e33a-1b10-4b77-b9b3-208da26b06a5" />

Map with selected item and highlighted marker.<br>
<img width="366" height="769" alt="image" src="https://github.com/user-attachments/assets/a493ccb5-b16b-41c5-be48-5c23f43801f7" />
