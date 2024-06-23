import {
  NYW__NFTDelisted as NYW__NFTDelistedEvent,
  NYW__NFTListed as NYW__NFTListedEvent,
  NYW__NFTSold as NYW__NFTSoldEvent,
  NYW__withdraw as NYW__withdrawEvent,
} from "../generated/NYWMarket/NYWMarket"
import {
  NYW__NFTDelisted,
  NYW__NFTListed,
  NYW__NFTSold,
  NYW__withdraw,
} from "../generated/schema"

export function handleNYW__NFTDelisted(event: NYW__NFTDelistedEvent): void {
  let entity = new NYW__NFTDelisted(
    event.transaction.hash,
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNYW__NFTListed(event: NYW__NFTListedEvent): void {
  let entity = new NYW__NFTListed(
    event.transaction.hash,
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNYW__NFTSold(event: NYW__NFTSoldEvent): void {
  let entity = new NYW__NFTSold(
    event.transaction.hash,
  )
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNYW__withdraw(event: NYW__withdrawEvent): void {
  let entity = new NYW__withdraw(
    event.transaction.hash,
  )
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
