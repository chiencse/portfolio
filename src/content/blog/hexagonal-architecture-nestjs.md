---
title: Hexagonal architecture in NestJS, without the ceremony
description: A practical folder layout for ports and adapters in NestJS — what goes where, and the few rules that actually matter.
pubDate: 2026-10-01
tags: [nestjs, architecture, backend]
draft: true
---

> **Draft outline** — this is an example of a draft post. It only appears in `npm run dev`. Rewrite it in your own words (or delete it) before setting `draft: false`.

## The idea in one sentence

Your domain logic sits in the middle and knows nothing about HTTP, databases or queues; everything else plugs into it through interfaces (*ports*) and implementations (*adapters*).

## A layout that stays readable

```text
src/modules/order/
├── domain/            # entities, value objects, domain events — plain TypeScript
├── application/       # use cases + port interfaces (OrderRepository, PaymentGateway)
├── infrastructure/    # adapters: TypeORM repositories, HTTP clients, Redis cache
└── interface/         # controllers, DTOs, message consumers
```

## The rules that matter

1. `domain/` imports nothing from NestJS or TypeORM.
2. Use cases depend on port interfaces, never on adapters.
3. Adapters are bound to ports in the module file — that's the only place that knows both.

```ts
@Module({
  providers: [
    PlaceOrderUseCase,
    { provide: ORDER_REPOSITORY, useClass: TypeOrmOrderRepository },
  ],
})
export class OrderModule {}
```

## When it's overkill

- CRUD-only modules with no real business rules.
- Prototypes you expect to throw away.

## Notes to expand

- How this played out on a real project
- Testing use cases with in-memory adapters
- Where transactions belong
