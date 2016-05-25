app.controller('UsersCtrl', ['$scope', 'usersServ', 'auth', function ($scope, usersServ, auth) {
  $scope.users = usersServ.users;
  $scope.currentUser = auth.currentUser();
  $scope.friends = usersServ.friends;
  $scope.user = usersServ.user;

  $scope.isFriend = function (id) {
    for (let i = 0; i < $scope.friends.length; i++) {
      if ($scope.friends[i] === id) {
        return true;
      }
    }

    return false;
  }

  $scope.addFriend = function (id) {
    usersServ.addFriend($scope.currentUser._id, id);
  }

  $scope.removeFriend = function (id) {
    usersServ.removeFriend($scope.currentUser._id, id);
  }

  $scope.getUserInfo = function (id) {
    usersServ.getUser(id);
  }


}])