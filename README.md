# Plotly_Deployment
Performing data visualization using plotly.

## Overview of Project
The purpose of this analysis is to use plotly to help Roza, a biological researcher, visualize bacteria sampled from people around the country. A website was created to allow each person sampled to access information about what bacteria was found in their belly button using their Test Subject ID 

### Process
- First, the data was provided in a json file.
- Second, the drop-down for the Test Subject ID and the demographic infomation based on which Test Subject ID is selected.
- Three visualizations were created:
  * a bar chart
  * a bubble chart
  * a gauge chart
- Finally, the site was enhanced 

### Visualizations
#### Bar Chart
- A horizontal bar chart was created to show the top 10 bacteria found in the belly button of the test subject selected.
- The bacteria identification numbers are listed on the y-axis.
- The numbers of each bacteria are plotted on the x-axis.

#### Bubble Chart
- A bubble chart was created to show the all of the bacteria types found in the belly button of the test subject selected.
- The bacteria numbers are plotted on the x-axis.
- The number of each bacteria collected are plotted on the y-value.
- The size of each bubble is proportional to the number of each bacteria collected.
- The color of each bubble is based on the bacteria's identifcation number.
- Hover over text was added to each bubble so that when the cursor is over each bubble is shows the bacteria name.

#### Gauge Chart
- A gauge chart was created to show the frequency in which the test subject washed their belly button.
- The black line on the gauge chart changes to match the number indicated in the chart.


### Enhancements
- While just having the visualizations is good, it can easily be made much more appealing and easy on the eyes. The following were customazations performed on the website:
  1. Added an image to the jumbotron.
  2. Changed the font and font color of the jumbotron.
  3. Changed the background color of the webpage.
  4. Reordered the charts to fit better on the page next to the metadata panal.
  5. Made the webpage mobile-responsive.
