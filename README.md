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
<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/bd3f02f5-fe72-43bc-aec5-eb4a3967c616" />

Item selected and marker highlighted<br>
<img width="1920" height="921" alt="image" src="https://github.com/user-attachments/assets/043ac68a-1b7c-4126-8452-999013023948" />

### Mobile
List on mobile<br>
<img width="366" height="766" alt="image" src="https://github.com/user-attachments/assets/8864555a-a5f7-4bec-8554-b961ed523fb2" />

Map with selected item and highlighted marker.<br>
<img width="363" height="769" alt="image" src="https://github.com/user-attachments/assets/4dec4705-eb05-49f1-a278-757c1b93b903" />


