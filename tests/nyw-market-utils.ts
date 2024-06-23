import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NYW__NFTDelisted,
  NYW__NFTListed,
  NYW__NFTSold,
  NYW__withdraw
} from "../generated/NYWMarket/NYWMarket"

export function createNYW__NFTDelistedEvent(tokenId: BigInt): NYW__NFTDelisted {
  let nywNftDelistedEvent = changetype<NYW__NFTDelisted>(newMockEvent())

  nywNftDelistedEvent.parameters = new Array()

  nywNftDelistedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nywNftDelistedEvent
}

export function createNYW__NFTListedEvent(tokenId: BigInt): NYW__NFTListed {
  let nywNftListedEvent = changetype<NYW__NFTListed>(newMockEvent())

  nywNftListedEvent.parameters = new Array()

  nywNftListedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nywNftListedEvent
}

export function createNYW__NFTSoldEvent(
  tokenId: BigInt,
  buyer: Address,
  price: BigInt
): NYW__NFTSold {
  let nywNftSoldEvent = changetype<NYW__NFTSold>(newMockEvent())

  nywNftSoldEvent.parameters = new Array()

  nywNftSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nywNftSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nywNftSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return nywNftSoldEvent
}

export function createNYW__withdrawEvent(value: BigInt): NYW__withdraw {
  let nywWithdrawEvent = changetype<NYW__withdraw>(newMockEvent())

  nywWithdrawEvent.parameters = new Array()

  nywWithdrawEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return nywWithdrawEvent
}
