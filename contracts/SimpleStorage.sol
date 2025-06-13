//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    bool has = true;
    uint256 number = 139472049812;
    int256 num = -2567;
    string fav = "christopher";
    address owner = address(0x38E02C230B3f1a463405D471a80592329Ba958e0);
    bytes32 favB = "cat";

    uint256 public favoriteNumber;

    function store(uint256 _favNo) public {
        favoriteNumber = _favNo;
        retrieve();
        favoriteNumber = favoriteNumber * 2;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function add() public pure returns (uint256) {
        return (1 + 1);
    }

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    People public person = People({favoriteNumber: 2, name: "christopher "});

    uint256[] public favoriteNumberList;
    People[] public people;

    mapping(string => uint256) public namrToFavoriteNumber;

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        namrToFavoriteNumber[_name] = _favoriteNumber;
    }
}
