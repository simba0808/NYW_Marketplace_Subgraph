import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { NYW__NFTDelisted } from "../generated/schema"
import { NYW__NFTDelisted as NYW__NFTDelistedEvent } from "../generated/NYWMarket/NYWMarket"
import { handleNYW__NFTDelisted } from "../src/nyw-market"
import { createNYW__NFTDelistedEvent } from "./nyw-market-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let newNYW__NFTDelistedEvent = createNYW__NFTDelistedEvent(tokenId)
    handleNYW__NFTDelisted(newNYW__NFTDelistedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NYW__NFTDelisted created and stored", () => {
    assert.entityCount("NYW__NFTDelisted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NYW__NFTDelisted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
