'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
        $("#add-story-cta").click(function () {
            var $storyName = $('#story-name').val();
            var $storyUrl = $('#story-url').val();
            var $storyDescription = $(' #story-description').val();

            $("#story-table").append(
                "<tr>"+
                "<td>" + $storyName + "</td>"+
                "<td>" + $storyUrl + "</td>"+
                "<td>" + $storyDescription + "</td>"+
                "<td>" + '<button class="btn btn-edit fa fa-edit edit-row"></button>' +
                         '<button class="btn btn-red fa fa-trash delete-row"></button>' +
                "</td>" +
                "</tr>"
            );


        });

        $("#add-podcast-cta").click(function () {
            var $podcastName = $('#podcast-name').val();
            var $podcastUrl = $('#podcast-url').val();
            var $podcastDescription = $('#podcast-description').val();

            $("#podcast-table").append(
                "<tr>"+
                "<td>" + $podcastName + "</td>"+
                "<td>" + $podcastUrl + "</td>"+
                "<td>" + $podcastDescription + "</td>"+
                "<td>" + '<button class="btn btn-edit fa fa-edit edit-row"></button>' +
                         '<button class="btn btn-red fa fa-trash delete-row"></button>' +
                "</td>" +
                "</tr>"
            );


        });
        $("#add-website-cta").click(function () {
            var $websiteName = $('#website-name').val();
            var $websiteUrl = $('#website-url').val();
            var $websiteDescription = $('#website-description').val();

            $("#website-table").append(
                "<tr>"+
                "<td>" + $websiteName + "</td>"+
                "<td>" + $websiteUrl + "</td>"+
                "<td>" + $websiteDescription + "</td>"+
                "<td>" + '<button class="btn btn-edit fa fa-edit edit-row"></button>' +
                         '<button class="btn btn-red fa fa-trash delete-row"></button>' +
                "</td>" +
                "</tr>"
            );

        });





        /* Delete Row*/
        $('#story-table').delegate('.delete-row', 'click', function(){
            $(this).closest('tr').remove();
        });
        $('#website-table').delegate('.delete-row', 'click', function(){
            $(this).closest('tr').remove();
        });
        $('#podcast-table').delegate('.delete-row', 'click', function(){
            $(this).closest('tr').remove();
        });

        //scrollspy

        $('body').scrollspy({ target: '#gloo-nav' });
}]);