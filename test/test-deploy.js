const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorage
    let SimpleStorageFactory

    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await SimpleStorageFactory.deploy()
    })

    it("Should start with 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        console.log("Current Value:", currentValue.toString())
        assert.equal(currentValue.toString(), "0")
    })
    it("Should update when we call store", async function () {
        const transactionResponse = await simpleStorage.store(42)
        await transactionResponse.wait(1)
        const updatedValue = await simpleStorage.retrieve()
        console.log("Updated Value:", updatedValue.toString())
        assert.equal(updatedValue.toString(), "84")
    })
})
