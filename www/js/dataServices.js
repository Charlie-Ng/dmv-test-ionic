/**
 * Created by kitchiong on 5/15/16.
 */
(function() {

  'use strict';

  angular.module('data.services', []);

  angular.module('data.services').factory('dataServices',
    function() {

      var DataServices = {};

      DataServices.getTData = function() {
        var data = [

          {
            "question": "除非另外公布，商業區限速是多少？",
            "answers" : [
              { "answer" : "每小時25哩", "check": true},
              { "answer" : "每小時20哩", "check": false},
              { "answer" : "每小時35哩", "check": false}],
            "correct" : 1
          },

          {
            "question": "如果對面來車開始在您面前左轉，您應當",
            "answers" : [
              { "answer" : "按喇叭警告司機並保持車速", "check": false},
              { "answer" : "向右打方向盤，在這輛車完成轉彎前繞過它", "check": false},
              { "answer" : "減速或停車以防發生車禍", "check": true}],
            "correct" : 3
          },

          {
            "question": "fffffff轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "adsfads轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "asdf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "asdfadsf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "safdasdf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "asdfadsf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "asdf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "adsf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "fdas轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "asdf轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "77轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "4轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "444轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "12341234轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "25123轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "1234134轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "12341234轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "12341234轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "12341234轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "435345轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "5345轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "14124轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "1231轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "1233轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "1233轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "99轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "88轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "67轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "6轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "5轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "4轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          },

          {
            "question": "123轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
            "answers" : [
              { "answer" : "您必須左轉或掉頭", "check": true},
              { "answer" : "任何綠燈亮起都允許任何左轉或掉頭", "check": false},
              { "answer" : "左轉箭頭亮起時允許左轉或掉頭", "check": false}],
            "correct" : 1
          }

          //{"question": "如果對面來車開始在您面前左轉，您應當",
          //  "answer1" : "按喇叭警告司機並保持車速",
          //  "answer2" : "向右打方向盤，在這輛車完成轉彎前繞過它",
          //  "answer3" : "減速或停車以防發生車禍",
          //  "correct" : "3"},

          //{"question": "轉彎車道上有信號表示僅僅在左轉箭頭亮起時允許左轉或掉頭。信號的意思是：",
          //  "answer1" : "您必須左轉或掉頭",
          //  "answer2" : "任何綠燈亮起都允許任何左轉或掉頭",
          //  "answer3" : "左轉箭頭亮起時允許左轉或掉頭",
          //  "correct" : "3"}
        ];


        return data;
      };


      return DataServices;


    });

}());
