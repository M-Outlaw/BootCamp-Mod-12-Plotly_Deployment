function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var idSample = samples.filter(sampleID => sampleID.id === sample);
    console.log(sample);
    
    //  5. Create a variable that holds the first sample in the array.
    var firstSample = idSample[0];
    console.log(firstSample);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = firstSample.otu_ids;
    console.log(otuIDs);
    var otuLabels = firstSample.otu_labels;
    console.log(otuLabels);
    var values = firstSample.sample_values;
    console.log(values);
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIDs.slice(0, 10).reverse();
    console.log(yticks);
    var ylabels = yticks.map(yticks => `OTU ${yticks}`)
    console.log(ylabels);
    var top10values = values.slice(0,10).reverse()
    // 8. Create the trace for the bar chart. 
    var trace = {
      x: top10values,
      y: ylabels,
      type: "bar",
      orientation: 'h'
    };

    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
    title: "Top 10 Bacteria Cultures Found",
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var eachID = otuIDs.slice(0,);
    var eachValue = values.slice(0,)
    var tracebubble = {
      x: eachID,
      y: values,
      text: otuLabels,
      mode: 'markers',
      marker:{
        size: eachValue,
        color: eachID}
    }
    var bubbleData = [tracebubble];
    console.log(otuIDs);
    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Culture Per Sample',
      xaxis: {title: 'OTU ID'},
      showlegend: false,
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 

    // Guage Chart
    // variables to pull the washing frequency
    var metadata = data.metadata;
    var idMeta = metadata.filter(metaID => metaID.id === parseInt(sample));
    console.log(idMeta);
    var washFreq = idMeta[0].wfreq.toFixed(1);
    console.log(washFreq)

    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
      domain: { x: [0, 0.9], y: [0, 1] },
      value: washFreq,
      title: { text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week' },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 10] },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lightgreen" },
          { range: [8, 10], color: "green" },
        ],
      }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { width: 550, height: 450, margin: { t: 0, b: 0 } };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);

  });
}
