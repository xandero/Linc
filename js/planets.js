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
    var columnGroup;
    var barTimer;
    var graphTimer;
    
    var tableData = {
      chartData: function() {

      },
      chartHeading: function() {

      },
      chartLegend: function() {

      },
      chartYMax: function() {

      },
      yLegend: function() {

      },
      xLegend: function() {

      },
      columnGroups: function() {
        columnGroup = [];
        var columns = data.find('tbody tr:eq(0) td').length;
        for (var i = 0; i < columns; i++) {
          columnGroup[i] = [];
          data.find('tbody tr').each(function() {
            columnGroup[i].push($(this).find('td').eq(i).text());
          });
        }
        return columnGroup;
      }
    }

      $.each(columnGroup, function(i) {
        var barGroup = $('<div class="bar-group"></div>');
        for (var c = 0, d = columnGroup[i].length; c < d; c++){
          var barObject = {};
          barObject.label = this[c];
          barObject.height = barObject.label/chartYMax * 100 + '%';
          barObject.bar = $('div class="bar fig' + j +'"><span>' + barObject.label + '</span></div>').appendTo(barGroup);
          bars.push(barObject);
        }
        barGroup.appendTo(barContainer);
      });
    function  displayGraph(bars) {

    }
    function resetGraph() {
      displayGraph(bars);
    }
    resetGraph();
  }
});)