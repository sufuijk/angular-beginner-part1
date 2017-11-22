
	var myApp = angular
		.module("myApp",[])
		.controller("myController",myController);

		myController.$inject = ['$scope'];
		

		function myController($scope){
			var students = [
				{fullName :"Từ Minh Hiếu",Math:0,Physical:0,Chemistry:0},
				{fullName :"Nguyễn Văn Sang",Math:5,Physical:2,Chemistry:7},
				{fullName :"Lê Bùi Nhẫn",Math:3,Physical:4,Chemistry:9},
				{fullName :"Lê Phạm Ngọc Trâm",Math:0,Physical:0,Chemistry:0},
				{fullName :"Võ Đình Duy",Math:4,Physical:6,Chemistry:7}
			]

			$scope.students = students;
			
			$scope.limitRecord = 4;
		}

