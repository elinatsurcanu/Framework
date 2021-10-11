app.controller('productsCtrl', function($scope) {
    $scope.services = [
        { "title": "Маникюр", "price": 300, "image": "images/products-photo/man.jpeg" },
        { "title": "Педикюр", "price": 250, "image": "images/products-photo/ped.jpg" },
        { "title": "Покраска волос", "price": 1000, "image": "images/products-photo/hc.jpg" },
        { "title": "Укладка", "price": 300, "image": "images/products-photo/hu.jpg" },
        { "title": "Ламинирование бровей", "price": 350, "image": "images/products-photo/brows.jpg" },
        { "title": "Ламинирование ресниц", "price": 450, "image": "images/products-photo/lashes.jpg" },
        { "title": "Наращивание ресниц", "price": 250, "image": "images/products-photo/lashes2.png" },
        { "title": "Дневной макияж", "price": 400, "image": "images/products-photo/d_makeup.jpg" },
        { "title": "Вечерний макияж", "price": 800, "image": "images/products-photo/n_makeup.jpg" },
          ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "admin";
    $scope.password = "admin";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.services.findIndex(x => x.title === itemTitle);

        $scope.services.splice(index, 1);

        console.log(index);
    }
	


    $scope.addNewService = function() {
        newService = {
            title: "Unknown",
            price: 0,
            image: "images/logos/logo.jpg"
        }

        $scope.services.push(newService);
    }


    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }


});