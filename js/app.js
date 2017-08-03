/**
 *
 * @authors  wangdongodng (dongdong.wang@acorn-net.com)
 * @date    2016-11-07 11:08:28
 * @version $Id$
 */

angular.module("myApp").controller('appCtrl', ['$scope', '$state', '$rootScope', '$anchorScroll', '$location', function($scope, $state, $rootScope, $anchorScroll, $location) {
  $scope.selectedItem = "development.started";
  $scope.showComponents = true;
  $scope.design = true;
  $scope.base = true;

  // 组件选项
  $scope.components = [{
    name: "Alert 警告提示",
    state: "development.alert"
  }, {
    name: "Badge 徽标数",
    state: "development.badge"
  }, {
    name: "Button 按钮",
    state: "development.btn"
  }, {
    name: "Calendar 日历",
    state: "development.calendar"
  }, {
    name: "Card 卡片",
    state: "development.card"
  }, {
    name: "Collapse 折叠面板",
    state: "development.collapse"
  }, {
    name: "Dialog 对话框",
    state: "development.dialog"
  }, {
    name: "Dropdown 下拉菜单",
    state: "development.dropdown"
  }, {
    name: "Form 表单",
    state: "development.form"
  }, {
    name: "Grid 栅格",
    state: "development.grid"
  }, {
    name: "Icon 图标",
    state: "development.icons"
  }, {
    name: "Message 全局提示",
    state: "development.message"
  }, {
    name: "Navigation 导航",
    state: "development.navigation"
  }, {
    name: "Notification 通知提醒",
    state: "development.notification"
  }, {
    name: "Progress 进度条",
    state: "development.progress"
  }, {
    name: "Spin 加载动画",
    state: "development.spin"
  }, {
    name: "Table 表格",
    state: "development.table"
  }, {
    name: "Tabs 标签页",
    state: "development.tabs"
  }, {
    name: "Tooltip 文字提醒",
    state: "development.tooltip"
  }, {
    name: "Tree 树状目录",
    state: "development.tree"
  }];

  // 设计原则选项
  $scope.designList = [{
    name: "距离",
    state: "design.distance"
  }, {
    name: "对比",
    state: "design.contrast"
  }, {
    name: "当前",
    state: "design.current"
  }, {
    name: "简化",
    state: "design.simplify"
  }, {
    name: "直接",
    state: "design.directly"
  }, {
    name: "反应",
    state: "design.reaction"
  }];

  // 基础样式选项
  $scope.baseList = [{
    name: "Color 颜色",
    state: "design.color"
  }, {
    name: "Font 字体",
    state: "design.font"
  }, {
    name: "Shadow 阴影",
    state: "design.shadow"
  }, {
    name: "Typography 排版",
    state: "design.typography"
  }, {
    name: "Writing 文案",
    state: "design.writing"
  }];
  // 视觉规范选项
  $scope.visualList = [{
    name: "Button 按钮",
    state: "design.button"
  }, {
    name: "Form 表单",
    state: "design.form"
  }, {
    name: "List 列表",
    state: "design.list"
  }, {
    name: "Icon 图标",
    state: "design.icon"
  }];

  $scope.openPage = function(state) {
    try {
      $state.go(state);
    } catch(error) {
      console.log(error);
    }
  };

  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
    console.log(toState);
    $scope.selectedItem = toState.name;
    if (toState.name === "development.btn" || toState.name === "development.grid" || toState.name === "development.icons") {
      $scope.showComponents = true;
    } else if (toState.name === "design.distance" || toState.name === "design.contrast" || toState.name === "design.current" ||
      toState.name === "design.simplify" || toState.name === "design.directly" || toState.name === "design.reaction") {
      $scope.design = true;
    } else if (toState.name === "design.color" || toState.name === "design.writing" || toState.name === "design.font" || toState.name === "design.typography") {
      $scope.base = true;
    } else if (toState.name === "design.button" || toState.name === "design.form" || toState.name === "design.icon" || toState.name === "design.list") {
      $scope.base = true;
    //} else if (toState.name === "development.started" && fromState.name.indexOf('development') < 0) {
    //  $scope.showComponents = false;
    //  $scope.design = false;
    //  $scope.base = false;
    }
  });

  $rootScope.anchor = function(id) {
    $location.hash(id);
    $anchorScroll();
  };
}]);
