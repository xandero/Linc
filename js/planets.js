$(document).ready(function() {
  createGraph('#data-table', '.chart');
  function createGraph(data, container){

    var bars = [];
    var figureContainer = $('<div id="figure"></div>');
    var graphContainer = $('<div id="graph"></div>');
    var barContainer = $('<div id="bars"></div>');
    var data = $(data);
    var container = $(container);
    var chartData;
    var chartYMax;
    var columnGroups;
    var barTimer;
    var graphTimer;
    var tableData = {

    }
    function  displayGraph(bars) {

    }
    function resetGraph() {
      displayGraph(bars);
    }
    resetGraph();
  }
});)