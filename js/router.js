/**
 * angular 路由及启动项配置
 * @authors wangdongodng (dongdong.wang@acorn-net.com)
 * @date    2016-11-07 10:51:07
 * @version $Id$
 */

angular.module('myApp', ['ui.router', 'oc.lazyLoad', 'ngAnimate'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("introduce");
        $stateProvider.state("development", {
            url: '/development',
            views: {
                "main": {
                    templateUrl: 'page/development.html'
                }
            }
        })
            .state("development.btn", {
                url: '/btn',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/components/btn.html'
                    }
                },
                onEnter: function () {
                    setTimeout(function () {
                        Rainbow.color();
                    }, 10);
                }
            })
            .state("development.icons", {
                url: '/icons',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/components/icons.html'
                    }
                },
                onEnter: function () {
                    setTimeout(function () {
                        Rainbow.color();
                    }, 10);
                }
            })
            .state("development.grid", {
                url: '/grid',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/components/grid.html'
                    }
                },
                onEnter: function () {
                    setTimeout(function () {
                        Rainbow.color();
                    }, 10);
                }
            })
            .state("development.started", {
                url: '/started',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/indexPage.html'
                    }
                }
            })
            .state("development.practical", {
                url: '/practical',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/indexPage.html'
                    }
                }
            })
            .state("development.changelog", {
                url: '/changelog',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/indexPage.html'
                    }
                }
            })
            .state("design.distance", {
                url: '/distance',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/distance.html'
                    }
                },
                onEnter: function () {
                    setTimeout(function () {
                        Rainbow.color();
                    }, 10);
                }
            })
            .state("design.contrast", {
                url: '/contrast',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/contrast.html'
                    }
                },
                onEnter: function () {
                    setTimeout(function () {
                        Rainbow.color();
                    }, 10);
                }
            })
            .state("design.current", {
                url: '/current',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/current.html'
                    }
                }
            })
            .state("design.simplify", {
                url: '/simplify',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/simplify.html'
                    }
                }
            })
            .state("design.directly", {
                url: '/directly',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/directly.html'
                    }
                }
            })
            .state("design.reaction", {
                url: '/reaction',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/design/reaction.html'
                    }
                }
            })
            .state("design.color", {
                url: '/color',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/base/color.html'
                    }
                },
                resolve: {
                    deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('css/md.css');
                    }]
                },
            })
            .state("design.writing", {
                url: '/writing',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/base/writing.html'
                    }
                }
            })
            .state("design.font", {
                url: '/font',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/base/font.html'
                    }
                }
            })
            .state("design.typography", {
                url: '/typography',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/base/typography.html'
                    }
                }
            })
            .state("design.button", {
                url: '/button',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/visual/button.html'
                    }
                }
            })
            .state("design.form", {
                url: '/form',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/visual/form.html'
                    }
                }
            })
            .state("design.icon", {
                url: '/icon',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/visual/icon.html'
                    }
                }
            })
            .state("design.list", {
                url: '/list',
                views: {
                    "lazyLoadView": {
                        templateUrl: 'page/visual/list.html'
                    }
                }
            });
        $stateProvider.state("introduce", {
            url: '/introduce',
            views: {
                "main": {
                    templateUrl: 'page/introduce.html'
                }
            }
        });

        $stateProvider.state("design", {
            url: '/design',
            views: {
                "main": {
                    templateUrl: 'page/design.html'
                }
            }
        });

        $stateProvider.state("operate", {
            url: '/operate',
            views: {
                "main": {
                    templateUrl: 'page/operate.html'
                }
            }
        });
    }])
    .run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 30;
    }]);
