
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model car
 * 
 */
export type car = $Result.DefaultSelection<Prisma.$carPayload>
/**
 * Model car_location
 * 
 */
export type car_location = $Result.DefaultSelection<Prisma.$car_locationPayload>
/**
 * Model car_model
 * 
 */
export type car_model = $Result.DefaultSelection<Prisma.$car_modelPayload>
/**
 * Model car_status
 * 
 */
export type car_status = $Result.DefaultSelection<Prisma.$car_statusPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>
/**
 * Model rent
 * 
 */
export type rent = $Result.DefaultSelection<Prisma.$rentPayload>
/**
 * Model review
 * 
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model maintenance_log
 * 
 */
export type maintenance_log = $Result.DefaultSelection<Prisma.$maintenance_logPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cars
 * const cars = await prisma.car.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.car`: Exposes CRUD operations for the **car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.carDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car_location`: Exposes CRUD operations for the **car_location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Car_locations
    * const car_locations = await prisma.car_location.findMany()
    * ```
    */
  get car_location(): Prisma.car_locationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car_model`: Exposes CRUD operations for the **car_model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Car_models
    * const car_models = await prisma.car_model.findMany()
    * ```
    */
  get car_model(): Prisma.car_modelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car_status`: Exposes CRUD operations for the **car_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Car_statuses
    * const car_statuses = await prisma.car_status.findMany()
    * ```
    */
  get car_status(): Prisma.car_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rent`: Exposes CRUD operations for the **rent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rents
    * const rents = await prisma.rent.findMany()
    * ```
    */
  get rent(): Prisma.rentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.reviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance_log`: Exposes CRUD operations for the **maintenance_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenance_logs
    * const maintenance_logs = await prisma.maintenance_log.findMany()
    * ```
    */
  get maintenance_log(): Prisma.maintenance_logDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    car: 'car',
    car_location: 'car_location',
    car_model: 'car_model',
    car_status: 'car_status',
    payment: 'payment',
    rent: 'rent',
    review: 'review',
    users: 'users',
    maintenance_log: 'maintenance_log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "car" | "car_location" | "car_model" | "car_status" | "payment" | "rent" | "review" | "users" | "maintenance_log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      car: {
        payload: Prisma.$carPayload<ExtArgs>
        fields: Prisma.carFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          findFirst: {
            args: Prisma.carFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          findMany: {
            args: Prisma.carFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>[]
          }
          create: {
            args: Prisma.carCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          createMany: {
            args: Prisma.carCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>[]
          }
          delete: {
            args: Prisma.carDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          update: {
            args: Prisma.carUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          deleteMany: {
            args: Prisma.carDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>[]
          }
          upsert: {
            args: Prisma.carUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.carGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.carCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      car_location: {
        payload: Prisma.$car_locationPayload<ExtArgs>
        fields: Prisma.car_locationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.car_locationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.car_locationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          findFirst: {
            args: Prisma.car_locationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.car_locationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          findMany: {
            args: Prisma.car_locationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>[]
          }
          create: {
            args: Prisma.car_locationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          createMany: {
            args: Prisma.car_locationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.car_locationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>[]
          }
          delete: {
            args: Prisma.car_locationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          update: {
            args: Prisma.car_locationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          deleteMany: {
            args: Prisma.car_locationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.car_locationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.car_locationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>[]
          }
          upsert: {
            args: Prisma.car_locationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_locationPayload>
          }
          aggregate: {
            args: Prisma.Car_locationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar_location>
          }
          groupBy: {
            args: Prisma.car_locationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Car_locationGroupByOutputType>[]
          }
          count: {
            args: Prisma.car_locationCountArgs<ExtArgs>
            result: $Utils.Optional<Car_locationCountAggregateOutputType> | number
          }
        }
      }
      car_model: {
        payload: Prisma.$car_modelPayload<ExtArgs>
        fields: Prisma.car_modelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.car_modelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.car_modelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          findFirst: {
            args: Prisma.car_modelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.car_modelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          findMany: {
            args: Prisma.car_modelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>[]
          }
          create: {
            args: Prisma.car_modelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          createMany: {
            args: Prisma.car_modelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.car_modelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>[]
          }
          delete: {
            args: Prisma.car_modelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          update: {
            args: Prisma.car_modelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          deleteMany: {
            args: Prisma.car_modelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.car_modelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.car_modelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>[]
          }
          upsert: {
            args: Prisma.car_modelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_modelPayload>
          }
          aggregate: {
            args: Prisma.Car_modelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar_model>
          }
          groupBy: {
            args: Prisma.car_modelGroupByArgs<ExtArgs>
            result: $Utils.Optional<Car_modelGroupByOutputType>[]
          }
          count: {
            args: Prisma.car_modelCountArgs<ExtArgs>
            result: $Utils.Optional<Car_modelCountAggregateOutputType> | number
          }
        }
      }
      car_status: {
        payload: Prisma.$car_statusPayload<ExtArgs>
        fields: Prisma.car_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.car_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.car_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          findFirst: {
            args: Prisma.car_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.car_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          findMany: {
            args: Prisma.car_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>[]
          }
          create: {
            args: Prisma.car_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          createMany: {
            args: Prisma.car_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.car_statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>[]
          }
          delete: {
            args: Prisma.car_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          update: {
            args: Prisma.car_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          deleteMany: {
            args: Prisma.car_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.car_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.car_statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>[]
          }
          upsert: {
            args: Prisma.car_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$car_statusPayload>
          }
          aggregate: {
            args: Prisma.Car_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar_status>
          }
          groupBy: {
            args: Prisma.car_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Car_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.car_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Car_statusCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      rent: {
        payload: Prisma.$rentPayload<ExtArgs>
        fields: Prisma.rentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          findFirst: {
            args: Prisma.rentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          findMany: {
            args: Prisma.rentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>[]
          }
          create: {
            args: Prisma.rentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          createMany: {
            args: Prisma.rentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>[]
          }
          delete: {
            args: Prisma.rentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          update: {
            args: Prisma.rentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          deleteMany: {
            args: Prisma.rentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>[]
          }
          upsert: {
            args: Prisma.rentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rentPayload>
          }
          aggregate: {
            args: Prisma.RentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRent>
          }
          groupBy: {
            args: Prisma.rentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentGroupByOutputType>[]
          }
          count: {
            args: Prisma.rentCountArgs<ExtArgs>
            result: $Utils.Optional<RentCountAggregateOutputType> | number
          }
        }
      }
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>
        fields: Prisma.reviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[]
          }
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      maintenance_log: {
        payload: Prisma.$maintenance_logPayload<ExtArgs>
        fields: Prisma.maintenance_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maintenance_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maintenance_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          findFirst: {
            args: Prisma.maintenance_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maintenance_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          findMany: {
            args: Prisma.maintenance_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>[]
          }
          create: {
            args: Prisma.maintenance_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          createMany: {
            args: Prisma.maintenance_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.maintenance_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>[]
          }
          delete: {
            args: Prisma.maintenance_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          update: {
            args: Prisma.maintenance_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          deleteMany: {
            args: Prisma.maintenance_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maintenance_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.maintenance_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>[]
          }
          upsert: {
            args: Prisma.maintenance_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maintenance_logPayload>
          }
          aggregate: {
            args: Prisma.Maintenance_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance_log>
          }
          groupBy: {
            args: Prisma.maintenance_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.maintenance_logCountArgs<ExtArgs>
            result: $Utils.Optional<Maintenance_logCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    car?: carOmit
    car_location?: car_locationOmit
    car_model?: car_modelOmit
    car_status?: car_statusOmit
    payment?: paymentOmit
    rent?: rentOmit
    review?: reviewOmit
    users?: usersOmit
    maintenance_log?: maintenance_logOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    rent: number
    review: number
    maintenance_log: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | CarCountOutputTypeCountRentArgs
    review?: boolean | CarCountOutputTypeCountReviewArgs
    maintenance_log?: boolean | CarCountOutputTypeCountMaintenance_logArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountRentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountMaintenance_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenance_logWhereInput
  }


  /**
   * Count Type Car_locationCountOutputType
   */

  export type Car_locationCountOutputType = {
    car: number
  }

  export type Car_locationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Car_locationCountOutputTypeCountCarArgs
  }

  // Custom InputTypes
  /**
   * Car_locationCountOutputType without action
   */
  export type Car_locationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car_locationCountOutputType
     */
    select?: Car_locationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Car_locationCountOutputType without action
   */
  export type Car_locationCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput
  }


  /**
   * Count Type Car_modelCountOutputType
   */

  export type Car_modelCountOutputType = {
    car: number
  }

  export type Car_modelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Car_modelCountOutputTypeCountCarArgs
  }

  // Custom InputTypes
  /**
   * Car_modelCountOutputType without action
   */
  export type Car_modelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car_modelCountOutputType
     */
    select?: Car_modelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Car_modelCountOutputType without action
   */
  export type Car_modelCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput
  }


  /**
   * Count Type Car_statusCountOutputType
   */

  export type Car_statusCountOutputType = {
    car: number
  }

  export type Car_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Car_statusCountOutputTypeCountCarArgs
  }

  // Custom InputTypes
  /**
   * Car_statusCountOutputType without action
   */
  export type Car_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car_statusCountOutputType
     */
    select?: Car_statusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Car_statusCountOutputType without action
   */
  export type Car_statusCountOutputTypeCountCarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput
  }


  /**
   * Count Type RentCountOutputType
   */

  export type RentCountOutputType = {
    payment: number
  }

  export type RentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | RentCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * RentCountOutputType without action
   */
  export type RentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentCountOutputType
     */
    select?: RentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentCountOutputType without action
   */
  export type RentCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    rent: number
    review: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | UsersCountOutputTypeCountRentArgs
    review?: boolean | UsersCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    car_id: number | null
    year: number | null
    price_per_hour: Decimal | null
    location_id: number | null
    status_id: number | null
    model_id: number | null
  }

  export type CarSumAggregateOutputType = {
    car_id: number | null
    year: number | null
    price_per_hour: Decimal | null
    location_id: number | null
    status_id: number | null
    model_id: number | null
  }

  export type CarMinAggregateOutputType = {
    car_id: number | null
    license_plate: string | null
    year: number | null
    price_per_hour: Decimal | null
    location_id: number | null
    status_id: number | null
    model_id: number | null
  }

  export type CarMaxAggregateOutputType = {
    car_id: number | null
    license_plate: string | null
    year: number | null
    price_per_hour: Decimal | null
    location_id: number | null
    status_id: number | null
    model_id: number | null
  }

  export type CarCountAggregateOutputType = {
    car_id: number
    license_plate: number
    year: number
    price_per_hour: number
    location_id: number
    status_id: number
    model_id: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    car_id?: true
    year?: true
    price_per_hour?: true
    location_id?: true
    status_id?: true
    model_id?: true
  }

  export type CarSumAggregateInputType = {
    car_id?: true
    year?: true
    price_per_hour?: true
    location_id?: true
    status_id?: true
    model_id?: true
  }

  export type CarMinAggregateInputType = {
    car_id?: true
    license_plate?: true
    year?: true
    price_per_hour?: true
    location_id?: true
    status_id?: true
    model_id?: true
  }

  export type CarMaxAggregateInputType = {
    car_id?: true
    license_plate?: true
    year?: true
    price_per_hour?: true
    location_id?: true
    status_id?: true
    model_id?: true
  }

  export type CarCountAggregateInputType = {
    car_id?: true
    license_plate?: true
    year?: true
    price_per_hour?: true
    location_id?: true
    status_id?: true
    model_id?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car to aggregate.
     */
    where?: carWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type carGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput
    orderBy?: carOrderByWithAggregationInput | carOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: carScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    car_id: number
    license_plate: string
    year: number | null
    price_per_hour: Decimal
    location_id: number | null
    status_id: number | null
    model_id: number
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends carGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type carSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    car_id?: boolean
    license_plate?: boolean
    year?: boolean
    price_per_hour?: boolean
    location_id?: boolean
    status_id?: boolean
    model_id?: boolean
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
    rent?: boolean | car$rentArgs<ExtArgs>
    review?: boolean | car$reviewArgs<ExtArgs>
    maintenance_log?: boolean | car$maintenance_logArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type carSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    car_id?: boolean
    license_plate?: boolean
    year?: boolean
    price_per_hour?: boolean
    location_id?: boolean
    status_id?: boolean
    model_id?: boolean
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type carSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    car_id?: boolean
    license_plate?: boolean
    year?: boolean
    price_per_hour?: boolean
    location_id?: boolean
    status_id?: boolean
    model_id?: boolean
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type carSelectScalar = {
    car_id?: boolean
    license_plate?: boolean
    year?: boolean
    price_per_hour?: boolean
    location_id?: boolean
    status_id?: boolean
    model_id?: boolean
  }

  export type carOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"car_id" | "license_plate" | "year" | "price_per_hour" | "location_id" | "status_id" | "model_id", ExtArgs["result"]["car"]>
  export type carInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
    rent?: boolean | car$rentArgs<ExtArgs>
    review?: boolean | car$reviewArgs<ExtArgs>
    maintenance_log?: boolean | car$maintenance_logArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type carIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
  }
  export type carIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_location?: boolean | car$car_locationArgs<ExtArgs>
    car_status?: boolean | car$car_statusArgs<ExtArgs>
    car_model?: boolean | car_modelDefaultArgs<ExtArgs>
  }

  export type $carPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "car"
    objects: {
      car_location: Prisma.$car_locationPayload<ExtArgs> | null
      car_status: Prisma.$car_statusPayload<ExtArgs> | null
      car_model: Prisma.$car_modelPayload<ExtArgs>
      rent: Prisma.$rentPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
      maintenance_log: Prisma.$maintenance_logPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      car_id: number
      license_plate: string
      year: number | null
      price_per_hour: Prisma.Decimal
      location_id: number | null
      status_id: number | null
      model_id: number
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type carGetPayload<S extends boolean | null | undefined | carDefaultArgs> = $Result.GetResult<Prisma.$carPayload, S>

  type carCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface carDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car'], meta: { name: 'car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {carFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carFindUniqueArgs>(args: SelectSubset<T, carFindUniqueArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carFindUniqueOrThrowArgs>(args: SelectSubset<T, carFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carFindFirstArgs>(args?: SelectSubset<T, carFindFirstArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carFindFirstOrThrowArgs>(args?: SelectSubset<T, carFindFirstOrThrowArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `car_id`
     * const carWithCar_idOnly = await prisma.car.findMany({ select: { car_id: true } })
     * 
     */
    findMany<T extends carFindManyArgs>(args?: SelectSubset<T, carFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {carCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends carCreateArgs>(args: SelectSubset<T, carCreateArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {carCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carCreateManyArgs>(args?: SelectSubset<T, carCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {carCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `car_id`
     * const carWithCar_idOnly = await prisma.car.createManyAndReturn({
     *   select: { car_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carCreateManyAndReturnArgs>(args?: SelectSubset<T, carCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {carDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends carDeleteArgs>(args: SelectSubset<T, carDeleteArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {carUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carUpdateArgs>(args: SelectSubset<T, carUpdateArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {carDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carDeleteManyArgs>(args?: SelectSubset<T, carDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carUpdateManyArgs>(args: SelectSubset<T, carUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {carUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `car_id`
     * const carWithCar_idOnly = await prisma.car.updateManyAndReturn({
     *   select: { car_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carUpdateManyAndReturnArgs>(args: SelectSubset<T, carUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {carUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends carUpsertArgs>(args: SelectSubset<T, carUpsertArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends carCountArgs>(
      args?: Subset<T, carCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carGroupByArgs['orderBy'] }
        : { orderBy?: carGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the car model
   */
  readonly fields: carFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car_location<T extends car$car_locationArgs<ExtArgs> = {}>(args?: Subset<T, car$car_locationArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    car_status<T extends car$car_statusArgs<ExtArgs> = {}>(args?: Subset<T, car$car_statusArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    car_model<T extends car_modelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, car_modelDefaultArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rent<T extends car$rentArgs<ExtArgs> = {}>(args?: Subset<T, car$rentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends car$reviewArgs<ExtArgs> = {}>(args?: Subset<T, car$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenance_log<T extends car$maintenance_logArgs<ExtArgs> = {}>(args?: Subset<T, car$maintenance_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the car model
   */
  interface carFieldRefs {
    readonly car_id: FieldRef<"car", 'Int'>
    readonly license_plate: FieldRef<"car", 'String'>
    readonly year: FieldRef<"car", 'Int'>
    readonly price_per_hour: FieldRef<"car", 'Decimal'>
    readonly location_id: FieldRef<"car", 'Int'>
    readonly status_id: FieldRef<"car", 'Int'>
    readonly model_id: FieldRef<"car", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * car findUnique
   */
  export type carFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput
  }

  /**
   * car findUniqueOrThrow
   */
  export type carFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput
  }

  /**
   * car findFirst
   */
  export type carFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car findFirstOrThrow
   */
  export type carFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car findMany
   */
  export type carFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter, which cars to fetch.
     */
    where?: carWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cars.
     */
    cursor?: carWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car create
   */
  export type carCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * The data needed to create a car.
     */
    data: XOR<carCreateInput, carUncheckedCreateInput>
  }

  /**
   * car createMany
   */
  export type carCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cars.
     */
    data: carCreateManyInput | carCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car createManyAndReturn
   */
  export type carCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * The data used to create many cars.
     */
    data: carCreateManyInput | carCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * car update
   */
  export type carUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * The data needed to update a car.
     */
    data: XOR<carUpdateInput, carUncheckedUpdateInput>
    /**
     * Choose, which car to update.
     */
    where: carWhereUniqueInput
  }

  /**
   * car updateMany
   */
  export type carUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cars.
     */
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyInput>
    /**
     * Filter which cars to update
     */
    where?: carWhereInput
    /**
     * Limit how many cars to update.
     */
    limit?: number
  }

  /**
   * car updateManyAndReturn
   */
  export type carUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * The data used to update cars.
     */
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyInput>
    /**
     * Filter which cars to update
     */
    where?: carWhereInput
    /**
     * Limit how many cars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * car upsert
   */
  export type carUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * The filter to search for the car to update in case it exists.
     */
    where: carWhereUniqueInput
    /**
     * In case the car found by the `where` argument doesn't exist, create a new car with this data.
     */
    create: XOR<carCreateInput, carUncheckedCreateInput>
    /**
     * In case the car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carUpdateInput, carUncheckedUpdateInput>
  }

  /**
   * car delete
   */
  export type carDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    /**
     * Filter which car to delete.
     */
    where: carWhereUniqueInput
  }

  /**
   * car deleteMany
   */
  export type carDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to delete
     */
    where?: carWhereInput
    /**
     * Limit how many cars to delete.
     */
    limit?: number
  }

  /**
   * car.car_location
   */
  export type car$car_locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    where?: car_locationWhereInput
  }

  /**
   * car.car_status
   */
  export type car$car_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    where?: car_statusWhereInput
  }

  /**
   * car.rent
   */
  export type car$rentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    where?: rentWhereInput
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    cursor?: rentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * car.review
   */
  export type car$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * car.maintenance_log
   */
  export type car$maintenance_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    where?: maintenance_logWhereInput
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[]
    cursor?: maintenance_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[]
  }

  /**
   * car without action
   */
  export type carDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
  }


  /**
   * Model car_location
   */

  export type AggregateCar_location = {
    _count: Car_locationCountAggregateOutputType | null
    _avg: Car_locationAvgAggregateOutputType | null
    _sum: Car_locationSumAggregateOutputType | null
    _min: Car_locationMinAggregateOutputType | null
    _max: Car_locationMaxAggregateOutputType | null
  }

  export type Car_locationAvgAggregateOutputType = {
    location_id: number | null
  }

  export type Car_locationSumAggregateOutputType = {
    location_id: number | null
  }

  export type Car_locationMinAggregateOutputType = {
    location_id: number | null
    city: string | null
    address: string | null
  }

  export type Car_locationMaxAggregateOutputType = {
    location_id: number | null
    city: string | null
    address: string | null
  }

  export type Car_locationCountAggregateOutputType = {
    location_id: number
    city: number
    address: number
    _all: number
  }


  export type Car_locationAvgAggregateInputType = {
    location_id?: true
  }

  export type Car_locationSumAggregateInputType = {
    location_id?: true
  }

  export type Car_locationMinAggregateInputType = {
    location_id?: true
    city?: true
    address?: true
  }

  export type Car_locationMaxAggregateInputType = {
    location_id?: true
    city?: true
    address?: true
  }

  export type Car_locationCountAggregateInputType = {
    location_id?: true
    city?: true
    address?: true
    _all?: true
  }

  export type Car_locationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_location to aggregate.
     */
    where?: car_locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_locations to fetch.
     */
    orderBy?: car_locationOrderByWithRelationInput | car_locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: car_locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned car_locations
    **/
    _count?: true | Car_locationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Car_locationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Car_locationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Car_locationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Car_locationMaxAggregateInputType
  }

  export type GetCar_locationAggregateType<T extends Car_locationAggregateArgs> = {
        [P in keyof T & keyof AggregateCar_location]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar_location[P]>
      : GetScalarType<T[P], AggregateCar_location[P]>
  }




  export type car_locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: car_locationWhereInput
    orderBy?: car_locationOrderByWithAggregationInput | car_locationOrderByWithAggregationInput[]
    by: Car_locationScalarFieldEnum[] | Car_locationScalarFieldEnum
    having?: car_locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Car_locationCountAggregateInputType | true
    _avg?: Car_locationAvgAggregateInputType
    _sum?: Car_locationSumAggregateInputType
    _min?: Car_locationMinAggregateInputType
    _max?: Car_locationMaxAggregateInputType
  }

  export type Car_locationGroupByOutputType = {
    location_id: number
    city: string
    address: string
    _count: Car_locationCountAggregateOutputType | null
    _avg: Car_locationAvgAggregateOutputType | null
    _sum: Car_locationSumAggregateOutputType | null
    _min: Car_locationMinAggregateOutputType | null
    _max: Car_locationMaxAggregateOutputType | null
  }

  type GetCar_locationGroupByPayload<T extends car_locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Car_locationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Car_locationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Car_locationGroupByOutputType[P]>
            : GetScalarType<T[P], Car_locationGroupByOutputType[P]>
        }
      >
    >


  export type car_locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    city?: boolean
    address?: boolean
    car?: boolean | car_location$carArgs<ExtArgs>
    _count?: boolean | Car_locationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car_location"]>

  export type car_locationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    city?: boolean
    address?: boolean
  }, ExtArgs["result"]["car_location"]>

  export type car_locationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    city?: boolean
    address?: boolean
  }, ExtArgs["result"]["car_location"]>

  export type car_locationSelectScalar = {
    location_id?: boolean
    city?: boolean
    address?: boolean
  }

  export type car_locationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"location_id" | "city" | "address", ExtArgs["result"]["car_location"]>
  export type car_locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | car_location$carArgs<ExtArgs>
    _count?: boolean | Car_locationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type car_locationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type car_locationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $car_locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "car_location"
    objects: {
      car: Prisma.$carPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      location_id: number
      city: string
      address: string
    }, ExtArgs["result"]["car_location"]>
    composites: {}
  }

  type car_locationGetPayload<S extends boolean | null | undefined | car_locationDefaultArgs> = $Result.GetResult<Prisma.$car_locationPayload, S>

  type car_locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<car_locationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Car_locationCountAggregateInputType | true
    }

  export interface car_locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car_location'], meta: { name: 'car_location' } }
    /**
     * Find zero or one Car_location that matches the filter.
     * @param {car_locationFindUniqueArgs} args - Arguments to find a Car_location
     * @example
     * // Get one Car_location
     * const car_location = await prisma.car_location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends car_locationFindUniqueArgs>(args: SelectSubset<T, car_locationFindUniqueArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car_location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {car_locationFindUniqueOrThrowArgs} args - Arguments to find a Car_location
     * @example
     * // Get one Car_location
     * const car_location = await prisma.car_location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends car_locationFindUniqueOrThrowArgs>(args: SelectSubset<T, car_locationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationFindFirstArgs} args - Arguments to find a Car_location
     * @example
     * // Get one Car_location
     * const car_location = await prisma.car_location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends car_locationFindFirstArgs>(args?: SelectSubset<T, car_locationFindFirstArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationFindFirstOrThrowArgs} args - Arguments to find a Car_location
     * @example
     * // Get one Car_location
     * const car_location = await prisma.car_location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends car_locationFindFirstOrThrowArgs>(args?: SelectSubset<T, car_locationFindFirstOrThrowArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Car_locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Car_locations
     * const car_locations = await prisma.car_location.findMany()
     * 
     * // Get first 10 Car_locations
     * const car_locations = await prisma.car_location.findMany({ take: 10 })
     * 
     * // Only select the `location_id`
     * const car_locationWithLocation_idOnly = await prisma.car_location.findMany({ select: { location_id: true } })
     * 
     */
    findMany<T extends car_locationFindManyArgs>(args?: SelectSubset<T, car_locationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car_location.
     * @param {car_locationCreateArgs} args - Arguments to create a Car_location.
     * @example
     * // Create one Car_location
     * const Car_location = await prisma.car_location.create({
     *   data: {
     *     // ... data to create a Car_location
     *   }
     * })
     * 
     */
    create<T extends car_locationCreateArgs>(args: SelectSubset<T, car_locationCreateArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Car_locations.
     * @param {car_locationCreateManyArgs} args - Arguments to create many Car_locations.
     * @example
     * // Create many Car_locations
     * const car_location = await prisma.car_location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends car_locationCreateManyArgs>(args?: SelectSubset<T, car_locationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Car_locations and returns the data saved in the database.
     * @param {car_locationCreateManyAndReturnArgs} args - Arguments to create many Car_locations.
     * @example
     * // Create many Car_locations
     * const car_location = await prisma.car_location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Car_locations and only return the `location_id`
     * const car_locationWithLocation_idOnly = await prisma.car_location.createManyAndReturn({
     *   select: { location_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends car_locationCreateManyAndReturnArgs>(args?: SelectSubset<T, car_locationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car_location.
     * @param {car_locationDeleteArgs} args - Arguments to delete one Car_location.
     * @example
     * // Delete one Car_location
     * const Car_location = await prisma.car_location.delete({
     *   where: {
     *     // ... filter to delete one Car_location
     *   }
     * })
     * 
     */
    delete<T extends car_locationDeleteArgs>(args: SelectSubset<T, car_locationDeleteArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car_location.
     * @param {car_locationUpdateArgs} args - Arguments to update one Car_location.
     * @example
     * // Update one Car_location
     * const car_location = await prisma.car_location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends car_locationUpdateArgs>(args: SelectSubset<T, car_locationUpdateArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Car_locations.
     * @param {car_locationDeleteManyArgs} args - Arguments to filter Car_locations to delete.
     * @example
     * // Delete a few Car_locations
     * const { count } = await prisma.car_location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends car_locationDeleteManyArgs>(args?: SelectSubset<T, car_locationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Car_locations
     * const car_location = await prisma.car_location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends car_locationUpdateManyArgs>(args: SelectSubset<T, car_locationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_locations and returns the data updated in the database.
     * @param {car_locationUpdateManyAndReturnArgs} args - Arguments to update many Car_locations.
     * @example
     * // Update many Car_locations
     * const car_location = await prisma.car_location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Car_locations and only return the `location_id`
     * const car_locationWithLocation_idOnly = await prisma.car_location.updateManyAndReturn({
     *   select: { location_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends car_locationUpdateManyAndReturnArgs>(args: SelectSubset<T, car_locationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car_location.
     * @param {car_locationUpsertArgs} args - Arguments to update or create a Car_location.
     * @example
     * // Update or create a Car_location
     * const car_location = await prisma.car_location.upsert({
     *   create: {
     *     // ... data to create a Car_location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car_location we want to update
     *   }
     * })
     */
    upsert<T extends car_locationUpsertArgs>(args: SelectSubset<T, car_locationUpsertArgs<ExtArgs>>): Prisma__car_locationClient<$Result.GetResult<Prisma.$car_locationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Car_locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationCountArgs} args - Arguments to filter Car_locations to count.
     * @example
     * // Count the number of Car_locations
     * const count = await prisma.car_location.count({
     *   where: {
     *     // ... the filter for the Car_locations we want to count
     *   }
     * })
    **/
    count<T extends car_locationCountArgs>(
      args?: Subset<T, car_locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Car_locationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car_location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Car_locationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Car_locationAggregateArgs>(args: Subset<T, Car_locationAggregateArgs>): Prisma.PrismaPromise<GetCar_locationAggregateType<T>>

    /**
     * Group by Car_location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_locationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends car_locationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: car_locationGroupByArgs['orderBy'] }
        : { orderBy?: car_locationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, car_locationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCar_locationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the car_location model
   */
  readonly fields: car_locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car_location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__car_locationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends car_location$carArgs<ExtArgs> = {}>(args?: Subset<T, car_location$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the car_location model
   */
  interface car_locationFieldRefs {
    readonly location_id: FieldRef<"car_location", 'Int'>
    readonly city: FieldRef<"car_location", 'String'>
    readonly address: FieldRef<"car_location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * car_location findUnique
   */
  export type car_locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter, which car_location to fetch.
     */
    where: car_locationWhereUniqueInput
  }

  /**
   * car_location findUniqueOrThrow
   */
  export type car_locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter, which car_location to fetch.
     */
    where: car_locationWhereUniqueInput
  }

  /**
   * car_location findFirst
   */
  export type car_locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter, which car_location to fetch.
     */
    where?: car_locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_locations to fetch.
     */
    orderBy?: car_locationOrderByWithRelationInput | car_locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_locations.
     */
    cursor?: car_locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_locations.
     */
    distinct?: Car_locationScalarFieldEnum | Car_locationScalarFieldEnum[]
  }

  /**
   * car_location findFirstOrThrow
   */
  export type car_locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter, which car_location to fetch.
     */
    where?: car_locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_locations to fetch.
     */
    orderBy?: car_locationOrderByWithRelationInput | car_locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_locations.
     */
    cursor?: car_locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_locations.
     */
    distinct?: Car_locationScalarFieldEnum | Car_locationScalarFieldEnum[]
  }

  /**
   * car_location findMany
   */
  export type car_locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter, which car_locations to fetch.
     */
    where?: car_locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_locations to fetch.
     */
    orderBy?: car_locationOrderByWithRelationInput | car_locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing car_locations.
     */
    cursor?: car_locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_locations.
     */
    skip?: number
    distinct?: Car_locationScalarFieldEnum | Car_locationScalarFieldEnum[]
  }

  /**
   * car_location create
   */
  export type car_locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * The data needed to create a car_location.
     */
    data: XOR<car_locationCreateInput, car_locationUncheckedCreateInput>
  }

  /**
   * car_location createMany
   */
  export type car_locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many car_locations.
     */
    data: car_locationCreateManyInput | car_locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_location createManyAndReturn
   */
  export type car_locationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * The data used to create many car_locations.
     */
    data: car_locationCreateManyInput | car_locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_location update
   */
  export type car_locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * The data needed to update a car_location.
     */
    data: XOR<car_locationUpdateInput, car_locationUncheckedUpdateInput>
    /**
     * Choose, which car_location to update.
     */
    where: car_locationWhereUniqueInput
  }

  /**
   * car_location updateMany
   */
  export type car_locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update car_locations.
     */
    data: XOR<car_locationUpdateManyMutationInput, car_locationUncheckedUpdateManyInput>
    /**
     * Filter which car_locations to update
     */
    where?: car_locationWhereInput
    /**
     * Limit how many car_locations to update.
     */
    limit?: number
  }

  /**
   * car_location updateManyAndReturn
   */
  export type car_locationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * The data used to update car_locations.
     */
    data: XOR<car_locationUpdateManyMutationInput, car_locationUncheckedUpdateManyInput>
    /**
     * Filter which car_locations to update
     */
    where?: car_locationWhereInput
    /**
     * Limit how many car_locations to update.
     */
    limit?: number
  }

  /**
   * car_location upsert
   */
  export type car_locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * The filter to search for the car_location to update in case it exists.
     */
    where: car_locationWhereUniqueInput
    /**
     * In case the car_location found by the `where` argument doesn't exist, create a new car_location with this data.
     */
    create: XOR<car_locationCreateInput, car_locationUncheckedCreateInput>
    /**
     * In case the car_location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<car_locationUpdateInput, car_locationUncheckedUpdateInput>
  }

  /**
   * car_location delete
   */
  export type car_locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
    /**
     * Filter which car_location to delete.
     */
    where: car_locationWhereUniqueInput
  }

  /**
   * car_location deleteMany
   */
  export type car_locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_locations to delete
     */
    where?: car_locationWhereInput
    /**
     * Limit how many car_locations to delete.
     */
    limit?: number
  }

  /**
   * car_location.car
   */
  export type car_location$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    where?: carWhereInput
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    cursor?: carWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car_location without action
   */
  export type car_locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_location
     */
    select?: car_locationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_location
     */
    omit?: car_locationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_locationInclude<ExtArgs> | null
  }


  /**
   * Model car_model
   */

  export type AggregateCar_model = {
    _count: Car_modelCountAggregateOutputType | null
    _avg: Car_modelAvgAggregateOutputType | null
    _sum: Car_modelSumAggregateOutputType | null
    _min: Car_modelMinAggregateOutputType | null
    _max: Car_modelMaxAggregateOutputType | null
  }

  export type Car_modelAvgAggregateOutputType = {
    model_id: number | null
  }

  export type Car_modelSumAggregateOutputType = {
    model_id: number | null
  }

  export type Car_modelMinAggregateOutputType = {
    model_id: number | null
    brand: string | null
    model_name: string | null
  }

  export type Car_modelMaxAggregateOutputType = {
    model_id: number | null
    brand: string | null
    model_name: string | null
  }

  export type Car_modelCountAggregateOutputType = {
    model_id: number
    brand: number
    model_name: number
    _all: number
  }


  export type Car_modelAvgAggregateInputType = {
    model_id?: true
  }

  export type Car_modelSumAggregateInputType = {
    model_id?: true
  }

  export type Car_modelMinAggregateInputType = {
    model_id?: true
    brand?: true
    model_name?: true
  }

  export type Car_modelMaxAggregateInputType = {
    model_id?: true
    brand?: true
    model_name?: true
  }

  export type Car_modelCountAggregateInputType = {
    model_id?: true
    brand?: true
    model_name?: true
    _all?: true
  }

  export type Car_modelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_model to aggregate.
     */
    where?: car_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_models to fetch.
     */
    orderBy?: car_modelOrderByWithRelationInput | car_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: car_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned car_models
    **/
    _count?: true | Car_modelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Car_modelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Car_modelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Car_modelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Car_modelMaxAggregateInputType
  }

  export type GetCar_modelAggregateType<T extends Car_modelAggregateArgs> = {
        [P in keyof T & keyof AggregateCar_model]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar_model[P]>
      : GetScalarType<T[P], AggregateCar_model[P]>
  }




  export type car_modelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: car_modelWhereInput
    orderBy?: car_modelOrderByWithAggregationInput | car_modelOrderByWithAggregationInput[]
    by: Car_modelScalarFieldEnum[] | Car_modelScalarFieldEnum
    having?: car_modelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Car_modelCountAggregateInputType | true
    _avg?: Car_modelAvgAggregateInputType
    _sum?: Car_modelSumAggregateInputType
    _min?: Car_modelMinAggregateInputType
    _max?: Car_modelMaxAggregateInputType
  }

  export type Car_modelGroupByOutputType = {
    model_id: number
    brand: string
    model_name: string
    _count: Car_modelCountAggregateOutputType | null
    _avg: Car_modelAvgAggregateOutputType | null
    _sum: Car_modelSumAggregateOutputType | null
    _min: Car_modelMinAggregateOutputType | null
    _max: Car_modelMaxAggregateOutputType | null
  }

  type GetCar_modelGroupByPayload<T extends car_modelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Car_modelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Car_modelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Car_modelGroupByOutputType[P]>
            : GetScalarType<T[P], Car_modelGroupByOutputType[P]>
        }
      >
    >


  export type car_modelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    brand?: boolean
    model_name?: boolean
    car?: boolean | car_model$carArgs<ExtArgs>
    _count?: boolean | Car_modelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car_model"]>

  export type car_modelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    brand?: boolean
    model_name?: boolean
  }, ExtArgs["result"]["car_model"]>

  export type car_modelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    model_id?: boolean
    brand?: boolean
    model_name?: boolean
  }, ExtArgs["result"]["car_model"]>

  export type car_modelSelectScalar = {
    model_id?: boolean
    brand?: boolean
    model_name?: boolean
  }

  export type car_modelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"model_id" | "brand" | "model_name", ExtArgs["result"]["car_model"]>
  export type car_modelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | car_model$carArgs<ExtArgs>
    _count?: boolean | Car_modelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type car_modelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type car_modelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $car_modelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "car_model"
    objects: {
      car: Prisma.$carPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      model_id: number
      brand: string
      model_name: string
    }, ExtArgs["result"]["car_model"]>
    composites: {}
  }

  type car_modelGetPayload<S extends boolean | null | undefined | car_modelDefaultArgs> = $Result.GetResult<Prisma.$car_modelPayload, S>

  type car_modelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<car_modelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Car_modelCountAggregateInputType | true
    }

  export interface car_modelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car_model'], meta: { name: 'car_model' } }
    /**
     * Find zero or one Car_model that matches the filter.
     * @param {car_modelFindUniqueArgs} args - Arguments to find a Car_model
     * @example
     * // Get one Car_model
     * const car_model = await prisma.car_model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends car_modelFindUniqueArgs>(args: SelectSubset<T, car_modelFindUniqueArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car_model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {car_modelFindUniqueOrThrowArgs} args - Arguments to find a Car_model
     * @example
     * // Get one Car_model
     * const car_model = await prisma.car_model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends car_modelFindUniqueOrThrowArgs>(args: SelectSubset<T, car_modelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelFindFirstArgs} args - Arguments to find a Car_model
     * @example
     * // Get one Car_model
     * const car_model = await prisma.car_model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends car_modelFindFirstArgs>(args?: SelectSubset<T, car_modelFindFirstArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelFindFirstOrThrowArgs} args - Arguments to find a Car_model
     * @example
     * // Get one Car_model
     * const car_model = await prisma.car_model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends car_modelFindFirstOrThrowArgs>(args?: SelectSubset<T, car_modelFindFirstOrThrowArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Car_models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Car_models
     * const car_models = await prisma.car_model.findMany()
     * 
     * // Get first 10 Car_models
     * const car_models = await prisma.car_model.findMany({ take: 10 })
     * 
     * // Only select the `model_id`
     * const car_modelWithModel_idOnly = await prisma.car_model.findMany({ select: { model_id: true } })
     * 
     */
    findMany<T extends car_modelFindManyArgs>(args?: SelectSubset<T, car_modelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car_model.
     * @param {car_modelCreateArgs} args - Arguments to create a Car_model.
     * @example
     * // Create one Car_model
     * const Car_model = await prisma.car_model.create({
     *   data: {
     *     // ... data to create a Car_model
     *   }
     * })
     * 
     */
    create<T extends car_modelCreateArgs>(args: SelectSubset<T, car_modelCreateArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Car_models.
     * @param {car_modelCreateManyArgs} args - Arguments to create many Car_models.
     * @example
     * // Create many Car_models
     * const car_model = await prisma.car_model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends car_modelCreateManyArgs>(args?: SelectSubset<T, car_modelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Car_models and returns the data saved in the database.
     * @param {car_modelCreateManyAndReturnArgs} args - Arguments to create many Car_models.
     * @example
     * // Create many Car_models
     * const car_model = await prisma.car_model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Car_models and only return the `model_id`
     * const car_modelWithModel_idOnly = await prisma.car_model.createManyAndReturn({
     *   select: { model_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends car_modelCreateManyAndReturnArgs>(args?: SelectSubset<T, car_modelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car_model.
     * @param {car_modelDeleteArgs} args - Arguments to delete one Car_model.
     * @example
     * // Delete one Car_model
     * const Car_model = await prisma.car_model.delete({
     *   where: {
     *     // ... filter to delete one Car_model
     *   }
     * })
     * 
     */
    delete<T extends car_modelDeleteArgs>(args: SelectSubset<T, car_modelDeleteArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car_model.
     * @param {car_modelUpdateArgs} args - Arguments to update one Car_model.
     * @example
     * // Update one Car_model
     * const car_model = await prisma.car_model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends car_modelUpdateArgs>(args: SelectSubset<T, car_modelUpdateArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Car_models.
     * @param {car_modelDeleteManyArgs} args - Arguments to filter Car_models to delete.
     * @example
     * // Delete a few Car_models
     * const { count } = await prisma.car_model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends car_modelDeleteManyArgs>(args?: SelectSubset<T, car_modelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Car_models
     * const car_model = await prisma.car_model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends car_modelUpdateManyArgs>(args: SelectSubset<T, car_modelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_models and returns the data updated in the database.
     * @param {car_modelUpdateManyAndReturnArgs} args - Arguments to update many Car_models.
     * @example
     * // Update many Car_models
     * const car_model = await prisma.car_model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Car_models and only return the `model_id`
     * const car_modelWithModel_idOnly = await prisma.car_model.updateManyAndReturn({
     *   select: { model_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends car_modelUpdateManyAndReturnArgs>(args: SelectSubset<T, car_modelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car_model.
     * @param {car_modelUpsertArgs} args - Arguments to update or create a Car_model.
     * @example
     * // Update or create a Car_model
     * const car_model = await prisma.car_model.upsert({
     *   create: {
     *     // ... data to create a Car_model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car_model we want to update
     *   }
     * })
     */
    upsert<T extends car_modelUpsertArgs>(args: SelectSubset<T, car_modelUpsertArgs<ExtArgs>>): Prisma__car_modelClient<$Result.GetResult<Prisma.$car_modelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Car_models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelCountArgs} args - Arguments to filter Car_models to count.
     * @example
     * // Count the number of Car_models
     * const count = await prisma.car_model.count({
     *   where: {
     *     // ... the filter for the Car_models we want to count
     *   }
     * })
    **/
    count<T extends car_modelCountArgs>(
      args?: Subset<T, car_modelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Car_modelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Car_modelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Car_modelAggregateArgs>(args: Subset<T, Car_modelAggregateArgs>): Prisma.PrismaPromise<GetCar_modelAggregateType<T>>

    /**
     * Group by Car_model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_modelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends car_modelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: car_modelGroupByArgs['orderBy'] }
        : { orderBy?: car_modelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, car_modelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCar_modelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the car_model model
   */
  readonly fields: car_modelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car_model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__car_modelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends car_model$carArgs<ExtArgs> = {}>(args?: Subset<T, car_model$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the car_model model
   */
  interface car_modelFieldRefs {
    readonly model_id: FieldRef<"car_model", 'Int'>
    readonly brand: FieldRef<"car_model", 'String'>
    readonly model_name: FieldRef<"car_model", 'String'>
  }
    

  // Custom InputTypes
  /**
   * car_model findUnique
   */
  export type car_modelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter, which car_model to fetch.
     */
    where: car_modelWhereUniqueInput
  }

  /**
   * car_model findUniqueOrThrow
   */
  export type car_modelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter, which car_model to fetch.
     */
    where: car_modelWhereUniqueInput
  }

  /**
   * car_model findFirst
   */
  export type car_modelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter, which car_model to fetch.
     */
    where?: car_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_models to fetch.
     */
    orderBy?: car_modelOrderByWithRelationInput | car_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_models.
     */
    cursor?: car_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_models.
     */
    distinct?: Car_modelScalarFieldEnum | Car_modelScalarFieldEnum[]
  }

  /**
   * car_model findFirstOrThrow
   */
  export type car_modelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter, which car_model to fetch.
     */
    where?: car_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_models to fetch.
     */
    orderBy?: car_modelOrderByWithRelationInput | car_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_models.
     */
    cursor?: car_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_models.
     */
    distinct?: Car_modelScalarFieldEnum | Car_modelScalarFieldEnum[]
  }

  /**
   * car_model findMany
   */
  export type car_modelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter, which car_models to fetch.
     */
    where?: car_modelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_models to fetch.
     */
    orderBy?: car_modelOrderByWithRelationInput | car_modelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing car_models.
     */
    cursor?: car_modelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_models.
     */
    skip?: number
    distinct?: Car_modelScalarFieldEnum | Car_modelScalarFieldEnum[]
  }

  /**
   * car_model create
   */
  export type car_modelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * The data needed to create a car_model.
     */
    data: XOR<car_modelCreateInput, car_modelUncheckedCreateInput>
  }

  /**
   * car_model createMany
   */
  export type car_modelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many car_models.
     */
    data: car_modelCreateManyInput | car_modelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_model createManyAndReturn
   */
  export type car_modelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * The data used to create many car_models.
     */
    data: car_modelCreateManyInput | car_modelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_model update
   */
  export type car_modelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * The data needed to update a car_model.
     */
    data: XOR<car_modelUpdateInput, car_modelUncheckedUpdateInput>
    /**
     * Choose, which car_model to update.
     */
    where: car_modelWhereUniqueInput
  }

  /**
   * car_model updateMany
   */
  export type car_modelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update car_models.
     */
    data: XOR<car_modelUpdateManyMutationInput, car_modelUncheckedUpdateManyInput>
    /**
     * Filter which car_models to update
     */
    where?: car_modelWhereInput
    /**
     * Limit how many car_models to update.
     */
    limit?: number
  }

  /**
   * car_model updateManyAndReturn
   */
  export type car_modelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * The data used to update car_models.
     */
    data: XOR<car_modelUpdateManyMutationInput, car_modelUncheckedUpdateManyInput>
    /**
     * Filter which car_models to update
     */
    where?: car_modelWhereInput
    /**
     * Limit how many car_models to update.
     */
    limit?: number
  }

  /**
   * car_model upsert
   */
  export type car_modelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * The filter to search for the car_model to update in case it exists.
     */
    where: car_modelWhereUniqueInput
    /**
     * In case the car_model found by the `where` argument doesn't exist, create a new car_model with this data.
     */
    create: XOR<car_modelCreateInput, car_modelUncheckedCreateInput>
    /**
     * In case the car_model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<car_modelUpdateInput, car_modelUncheckedUpdateInput>
  }

  /**
   * car_model delete
   */
  export type car_modelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
    /**
     * Filter which car_model to delete.
     */
    where: car_modelWhereUniqueInput
  }

  /**
   * car_model deleteMany
   */
  export type car_modelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_models to delete
     */
    where?: car_modelWhereInput
    /**
     * Limit how many car_models to delete.
     */
    limit?: number
  }

  /**
   * car_model.car
   */
  export type car_model$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    where?: carWhereInput
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    cursor?: carWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car_model without action
   */
  export type car_modelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_model
     */
    select?: car_modelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_model
     */
    omit?: car_modelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_modelInclude<ExtArgs> | null
  }


  /**
   * Model car_status
   */

  export type AggregateCar_status = {
    _count: Car_statusCountAggregateOutputType | null
    _avg: Car_statusAvgAggregateOutputType | null
    _sum: Car_statusSumAggregateOutputType | null
    _min: Car_statusMinAggregateOutputType | null
    _max: Car_statusMaxAggregateOutputType | null
  }

  export type Car_statusAvgAggregateOutputType = {
    status_id: number | null
  }

  export type Car_statusSumAggregateOutputType = {
    status_id: number | null
  }

  export type Car_statusMinAggregateOutputType = {
    status_id: number | null
    status_name: string | null
  }

  export type Car_statusMaxAggregateOutputType = {
    status_id: number | null
    status_name: string | null
  }

  export type Car_statusCountAggregateOutputType = {
    status_id: number
    status_name: number
    _all: number
  }


  export type Car_statusAvgAggregateInputType = {
    status_id?: true
  }

  export type Car_statusSumAggregateInputType = {
    status_id?: true
  }

  export type Car_statusMinAggregateInputType = {
    status_id?: true
    status_name?: true
  }

  export type Car_statusMaxAggregateInputType = {
    status_id?: true
    status_name?: true
  }

  export type Car_statusCountAggregateInputType = {
    status_id?: true
    status_name?: true
    _all?: true
  }

  export type Car_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_status to aggregate.
     */
    where?: car_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_statuses to fetch.
     */
    orderBy?: car_statusOrderByWithRelationInput | car_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: car_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned car_statuses
    **/
    _count?: true | Car_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Car_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Car_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Car_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Car_statusMaxAggregateInputType
  }

  export type GetCar_statusAggregateType<T extends Car_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateCar_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar_status[P]>
      : GetScalarType<T[P], AggregateCar_status[P]>
  }




  export type car_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: car_statusWhereInput
    orderBy?: car_statusOrderByWithAggregationInput | car_statusOrderByWithAggregationInput[]
    by: Car_statusScalarFieldEnum[] | Car_statusScalarFieldEnum
    having?: car_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Car_statusCountAggregateInputType | true
    _avg?: Car_statusAvgAggregateInputType
    _sum?: Car_statusSumAggregateInputType
    _min?: Car_statusMinAggregateInputType
    _max?: Car_statusMaxAggregateInputType
  }

  export type Car_statusGroupByOutputType = {
    status_id: number
    status_name: string
    _count: Car_statusCountAggregateOutputType | null
    _avg: Car_statusAvgAggregateOutputType | null
    _sum: Car_statusSumAggregateOutputType | null
    _min: Car_statusMinAggregateOutputType | null
    _max: Car_statusMaxAggregateOutputType | null
  }

  type GetCar_statusGroupByPayload<T extends car_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Car_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Car_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Car_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Car_statusGroupByOutputType[P]>
        }
      >
    >


  export type car_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status_id?: boolean
    status_name?: boolean
    car?: boolean | car_status$carArgs<ExtArgs>
    _count?: boolean | Car_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car_status"]>

  export type car_statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status_id?: boolean
    status_name?: boolean
  }, ExtArgs["result"]["car_status"]>

  export type car_statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status_id?: boolean
    status_name?: boolean
  }, ExtArgs["result"]["car_status"]>

  export type car_statusSelectScalar = {
    status_id?: boolean
    status_name?: boolean
  }

  export type car_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"status_id" | "status_name", ExtArgs["result"]["car_status"]>
  export type car_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | car_status$carArgs<ExtArgs>
    _count?: boolean | Car_statusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type car_statusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type car_statusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $car_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "car_status"
    objects: {
      car: Prisma.$carPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      status_id: number
      status_name: string
    }, ExtArgs["result"]["car_status"]>
    composites: {}
  }

  type car_statusGetPayload<S extends boolean | null | undefined | car_statusDefaultArgs> = $Result.GetResult<Prisma.$car_statusPayload, S>

  type car_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<car_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Car_statusCountAggregateInputType | true
    }

  export interface car_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car_status'], meta: { name: 'car_status' } }
    /**
     * Find zero or one Car_status that matches the filter.
     * @param {car_statusFindUniqueArgs} args - Arguments to find a Car_status
     * @example
     * // Get one Car_status
     * const car_status = await prisma.car_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends car_statusFindUniqueArgs>(args: SelectSubset<T, car_statusFindUniqueArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {car_statusFindUniqueOrThrowArgs} args - Arguments to find a Car_status
     * @example
     * // Get one Car_status
     * const car_status = await prisma.car_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends car_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, car_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusFindFirstArgs} args - Arguments to find a Car_status
     * @example
     * // Get one Car_status
     * const car_status = await prisma.car_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends car_statusFindFirstArgs>(args?: SelectSubset<T, car_statusFindFirstArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusFindFirstOrThrowArgs} args - Arguments to find a Car_status
     * @example
     * // Get one Car_status
     * const car_status = await prisma.car_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends car_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, car_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Car_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Car_statuses
     * const car_statuses = await prisma.car_status.findMany()
     * 
     * // Get first 10 Car_statuses
     * const car_statuses = await prisma.car_status.findMany({ take: 10 })
     * 
     * // Only select the `status_id`
     * const car_statusWithStatus_idOnly = await prisma.car_status.findMany({ select: { status_id: true } })
     * 
     */
    findMany<T extends car_statusFindManyArgs>(args?: SelectSubset<T, car_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car_status.
     * @param {car_statusCreateArgs} args - Arguments to create a Car_status.
     * @example
     * // Create one Car_status
     * const Car_status = await prisma.car_status.create({
     *   data: {
     *     // ... data to create a Car_status
     *   }
     * })
     * 
     */
    create<T extends car_statusCreateArgs>(args: SelectSubset<T, car_statusCreateArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Car_statuses.
     * @param {car_statusCreateManyArgs} args - Arguments to create many Car_statuses.
     * @example
     * // Create many Car_statuses
     * const car_status = await prisma.car_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends car_statusCreateManyArgs>(args?: SelectSubset<T, car_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Car_statuses and returns the data saved in the database.
     * @param {car_statusCreateManyAndReturnArgs} args - Arguments to create many Car_statuses.
     * @example
     * // Create many Car_statuses
     * const car_status = await prisma.car_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Car_statuses and only return the `status_id`
     * const car_statusWithStatus_idOnly = await prisma.car_status.createManyAndReturn({
     *   select: { status_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends car_statusCreateManyAndReturnArgs>(args?: SelectSubset<T, car_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car_status.
     * @param {car_statusDeleteArgs} args - Arguments to delete one Car_status.
     * @example
     * // Delete one Car_status
     * const Car_status = await prisma.car_status.delete({
     *   where: {
     *     // ... filter to delete one Car_status
     *   }
     * })
     * 
     */
    delete<T extends car_statusDeleteArgs>(args: SelectSubset<T, car_statusDeleteArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car_status.
     * @param {car_statusUpdateArgs} args - Arguments to update one Car_status.
     * @example
     * // Update one Car_status
     * const car_status = await prisma.car_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends car_statusUpdateArgs>(args: SelectSubset<T, car_statusUpdateArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Car_statuses.
     * @param {car_statusDeleteManyArgs} args - Arguments to filter Car_statuses to delete.
     * @example
     * // Delete a few Car_statuses
     * const { count } = await prisma.car_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends car_statusDeleteManyArgs>(args?: SelectSubset<T, car_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Car_statuses
     * const car_status = await prisma.car_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends car_statusUpdateManyArgs>(args: SelectSubset<T, car_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Car_statuses and returns the data updated in the database.
     * @param {car_statusUpdateManyAndReturnArgs} args - Arguments to update many Car_statuses.
     * @example
     * // Update many Car_statuses
     * const car_status = await prisma.car_status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Car_statuses and only return the `status_id`
     * const car_statusWithStatus_idOnly = await prisma.car_status.updateManyAndReturn({
     *   select: { status_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends car_statusUpdateManyAndReturnArgs>(args: SelectSubset<T, car_statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car_status.
     * @param {car_statusUpsertArgs} args - Arguments to update or create a Car_status.
     * @example
     * // Update or create a Car_status
     * const car_status = await prisma.car_status.upsert({
     *   create: {
     *     // ... data to create a Car_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car_status we want to update
     *   }
     * })
     */
    upsert<T extends car_statusUpsertArgs>(args: SelectSubset<T, car_statusUpsertArgs<ExtArgs>>): Prisma__car_statusClient<$Result.GetResult<Prisma.$car_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Car_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusCountArgs} args - Arguments to filter Car_statuses to count.
     * @example
     * // Count the number of Car_statuses
     * const count = await prisma.car_status.count({
     *   where: {
     *     // ... the filter for the Car_statuses we want to count
     *   }
     * })
    **/
    count<T extends car_statusCountArgs>(
      args?: Subset<T, car_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Car_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Car_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Car_statusAggregateArgs>(args: Subset<T, Car_statusAggregateArgs>): Prisma.PrismaPromise<GetCar_statusAggregateType<T>>

    /**
     * Group by Car_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends car_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: car_statusGroupByArgs['orderBy'] }
        : { orderBy?: car_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, car_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCar_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the car_status model
   */
  readonly fields: car_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__car_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends car_status$carArgs<ExtArgs> = {}>(args?: Subset<T, car_status$carArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the car_status model
   */
  interface car_statusFieldRefs {
    readonly status_id: FieldRef<"car_status", 'Int'>
    readonly status_name: FieldRef<"car_status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * car_status findUnique
   */
  export type car_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter, which car_status to fetch.
     */
    where: car_statusWhereUniqueInput
  }

  /**
   * car_status findUniqueOrThrow
   */
  export type car_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter, which car_status to fetch.
     */
    where: car_statusWhereUniqueInput
  }

  /**
   * car_status findFirst
   */
  export type car_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter, which car_status to fetch.
     */
    where?: car_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_statuses to fetch.
     */
    orderBy?: car_statusOrderByWithRelationInput | car_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_statuses.
     */
    cursor?: car_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_statuses.
     */
    distinct?: Car_statusScalarFieldEnum | Car_statusScalarFieldEnum[]
  }

  /**
   * car_status findFirstOrThrow
   */
  export type car_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter, which car_status to fetch.
     */
    where?: car_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_statuses to fetch.
     */
    orderBy?: car_statusOrderByWithRelationInput | car_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for car_statuses.
     */
    cursor?: car_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of car_statuses.
     */
    distinct?: Car_statusScalarFieldEnum | Car_statusScalarFieldEnum[]
  }

  /**
   * car_status findMany
   */
  export type car_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter, which car_statuses to fetch.
     */
    where?: car_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of car_statuses to fetch.
     */
    orderBy?: car_statusOrderByWithRelationInput | car_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing car_statuses.
     */
    cursor?: car_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` car_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` car_statuses.
     */
    skip?: number
    distinct?: Car_statusScalarFieldEnum | Car_statusScalarFieldEnum[]
  }

  /**
   * car_status create
   */
  export type car_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a car_status.
     */
    data: XOR<car_statusCreateInput, car_statusUncheckedCreateInput>
  }

  /**
   * car_status createMany
   */
  export type car_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many car_statuses.
     */
    data: car_statusCreateManyInput | car_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_status createManyAndReturn
   */
  export type car_statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * The data used to create many car_statuses.
     */
    data: car_statusCreateManyInput | car_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * car_status update
   */
  export type car_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a car_status.
     */
    data: XOR<car_statusUpdateInput, car_statusUncheckedUpdateInput>
    /**
     * Choose, which car_status to update.
     */
    where: car_statusWhereUniqueInput
  }

  /**
   * car_status updateMany
   */
  export type car_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update car_statuses.
     */
    data: XOR<car_statusUpdateManyMutationInput, car_statusUncheckedUpdateManyInput>
    /**
     * Filter which car_statuses to update
     */
    where?: car_statusWhereInput
    /**
     * Limit how many car_statuses to update.
     */
    limit?: number
  }

  /**
   * car_status updateManyAndReturn
   */
  export type car_statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * The data used to update car_statuses.
     */
    data: XOR<car_statusUpdateManyMutationInput, car_statusUncheckedUpdateManyInput>
    /**
     * Filter which car_statuses to update
     */
    where?: car_statusWhereInput
    /**
     * Limit how many car_statuses to update.
     */
    limit?: number
  }

  /**
   * car_status upsert
   */
  export type car_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the car_status to update in case it exists.
     */
    where: car_statusWhereUniqueInput
    /**
     * In case the car_status found by the `where` argument doesn't exist, create a new car_status with this data.
     */
    create: XOR<car_statusCreateInput, car_statusUncheckedCreateInput>
    /**
     * In case the car_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<car_statusUpdateInput, car_statusUncheckedUpdateInput>
  }

  /**
   * car_status delete
   */
  export type car_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
    /**
     * Filter which car_status to delete.
     */
    where: car_statusWhereUniqueInput
  }

  /**
   * car_status deleteMany
   */
  export type car_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_statuses to delete
     */
    where?: car_statusWhereInput
    /**
     * Limit how many car_statuses to delete.
     */
    limit?: number
  }

  /**
   * car_status.car
   */
  export type car_status$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    where?: carWhereInput
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[]
    cursor?: carWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * car_status without action
   */
  export type car_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_status
     */
    select?: car_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car_status
     */
    omit?: car_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: car_statusInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    amount: Decimal | null
    rent_id: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    amount: Decimal | null
    rent_id: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_date: Date | null
    status: string | null
    rent_id: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    amount: Decimal | null
    payment_method: string | null
    payment_date: Date | null
    status: string | null
    rent_id: number | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    amount: number
    payment_method: number
    payment_date: number
    status: number
    rent_id: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    amount?: true
    rent_id?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    amount?: true
    rent_id?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
    rent_id?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
    rent_id?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    amount?: true
    payment_method?: true
    payment_date?: true
    status?: true
    rent_id?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    amount: Decimal
    payment_method: string
    payment_date: Date | null
    status: string | null
    rent_id: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    rent_id?: boolean
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    rent_id?: boolean
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    rent_id?: boolean
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    payment_id?: boolean
    amount?: boolean
    payment_method?: boolean
    payment_date?: boolean
    status?: boolean
    rent_id?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "amount" | "payment_method" | "payment_date" | "status" | "rent_id", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | rentDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      rent: Prisma.$rentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      amount: Prisma.Decimal
      payment_method: string
      payment_date: Date | null
      status: string | null
      rent_id: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.updateManyAndReturn({
     *   select: { payment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rent<T extends rentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rentDefaultArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly payment_id: FieldRef<"payment", 'Int'>
    readonly amount: FieldRef<"payment", 'Decimal'>
    readonly payment_method: FieldRef<"payment", 'String'>
    readonly payment_date: FieldRef<"payment", 'DateTime'>
    readonly status: FieldRef<"payment", 'String'>
    readonly rent_id: FieldRef<"payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
  }


  /**
   * Model rent
   */

  export type AggregateRent = {
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  export type RentAvgAggregateOutputType = {
    rent_id: number | null
    total_cost: Decimal | null
    user_id: number | null
    car_id: number | null
  }

  export type RentSumAggregateOutputType = {
    rent_id: number | null
    total_cost: Decimal | null
    user_id: number | null
    car_id: number | null
  }

  export type RentMinAggregateOutputType = {
    rent_id: number | null
    start_time: Date | null
    end_time: Date | null
    total_cost: Decimal | null
    status: string | null
    user_id: number | null
    car_id: number | null
  }

  export type RentMaxAggregateOutputType = {
    rent_id: number | null
    start_time: Date | null
    end_time: Date | null
    total_cost: Decimal | null
    status: string | null
    user_id: number | null
    car_id: number | null
  }

  export type RentCountAggregateOutputType = {
    rent_id: number
    start_time: number
    end_time: number
    total_cost: number
    status: number
    user_id: number
    car_id: number
    _all: number
  }


  export type RentAvgAggregateInputType = {
    rent_id?: true
    total_cost?: true
    user_id?: true
    car_id?: true
  }

  export type RentSumAggregateInputType = {
    rent_id?: true
    total_cost?: true
    user_id?: true
    car_id?: true
  }

  export type RentMinAggregateInputType = {
    rent_id?: true
    start_time?: true
    end_time?: true
    total_cost?: true
    status?: true
    user_id?: true
    car_id?: true
  }

  export type RentMaxAggregateInputType = {
    rent_id?: true
    start_time?: true
    end_time?: true
    total_cost?: true
    status?: true
    user_id?: true
    car_id?: true
  }

  export type RentCountAggregateInputType = {
    rent_id?: true
    start_time?: true
    end_time?: true
    total_cost?: true
    status?: true
    user_id?: true
    car_id?: true
    _all?: true
  }

  export type RentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rent to aggregate.
     */
    where?: rentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rents
    **/
    _count?: true | RentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentMaxAggregateInputType
  }

  export type GetRentAggregateType<T extends RentAggregateArgs> = {
        [P in keyof T & keyof AggregateRent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRent[P]>
      : GetScalarType<T[P], AggregateRent[P]>
  }




  export type rentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rentWhereInput
    orderBy?: rentOrderByWithAggregationInput | rentOrderByWithAggregationInput[]
    by: RentScalarFieldEnum[] | RentScalarFieldEnum
    having?: rentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentCountAggregateInputType | true
    _avg?: RentAvgAggregateInputType
    _sum?: RentSumAggregateInputType
    _min?: RentMinAggregateInputType
    _max?: RentMaxAggregateInputType
  }

  export type RentGroupByOutputType = {
    rent_id: number
    start_time: Date
    end_time: Date | null
    total_cost: Decimal | null
    status: string | null
    user_id: number
    car_id: number
    _count: RentCountAggregateOutputType | null
    _avg: RentAvgAggregateOutputType | null
    _sum: RentSumAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  type GetRentGroupByPayload<T extends rentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentGroupByOutputType[P]>
            : GetScalarType<T[P], RentGroupByOutputType[P]>
        }
      >
    >


  export type rentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rent_id?: boolean
    start_time?: boolean
    end_time?: boolean
    total_cost?: boolean
    status?: boolean
    user_id?: boolean
    car_id?: boolean
    payment?: boolean | rent$paymentArgs<ExtArgs>
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type rentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rent_id?: boolean
    start_time?: boolean
    end_time?: boolean
    total_cost?: boolean
    status?: boolean
    user_id?: boolean
    car_id?: boolean
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type rentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rent_id?: boolean
    start_time?: boolean
    end_time?: boolean
    total_cost?: boolean
    status?: boolean
    user_id?: boolean
    car_id?: boolean
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>

  export type rentSelectScalar = {
    rent_id?: boolean
    start_time?: boolean
    end_time?: boolean
    total_cost?: boolean
    status?: boolean
    user_id?: boolean
    car_id?: boolean
  }

  export type rentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rent_id" | "start_time" | "end_time" | "total_cost" | "status" | "user_id" | "car_id", ExtArgs["result"]["rent"]>
  export type rentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | rent$paymentArgs<ExtArgs>
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | RentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type rentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $rentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rent"
    objects: {
      payment: Prisma.$paymentPayload<ExtArgs>[]
      car: Prisma.$carPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rent_id: number
      start_time: Date
      end_time: Date | null
      total_cost: Prisma.Decimal | null
      status: string | null
      user_id: number
      car_id: number
    }, ExtArgs["result"]["rent"]>
    composites: {}
  }

  type rentGetPayload<S extends boolean | null | undefined | rentDefaultArgs> = $Result.GetResult<Prisma.$rentPayload, S>

  type rentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentCountAggregateInputType | true
    }

  export interface rentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rent'], meta: { name: 'rent' } }
    /**
     * Find zero or one Rent that matches the filter.
     * @param {rentFindUniqueArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rentFindUniqueArgs>(args: SelectSubset<T, rentFindUniqueArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rentFindUniqueOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rentFindUniqueOrThrowArgs>(args: SelectSubset<T, rentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentFindFirstArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rentFindFirstArgs>(args?: SelectSubset<T, rentFindFirstArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentFindFirstOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rentFindFirstOrThrowArgs>(args?: SelectSubset<T, rentFindFirstOrThrowArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rents
     * const rents = await prisma.rent.findMany()
     * 
     * // Get first 10 Rents
     * const rents = await prisma.rent.findMany({ take: 10 })
     * 
     * // Only select the `rent_id`
     * const rentWithRent_idOnly = await prisma.rent.findMany({ select: { rent_id: true } })
     * 
     */
    findMany<T extends rentFindManyArgs>(args?: SelectSubset<T, rentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rent.
     * @param {rentCreateArgs} args - Arguments to create a Rent.
     * @example
     * // Create one Rent
     * const Rent = await prisma.rent.create({
     *   data: {
     *     // ... data to create a Rent
     *   }
     * })
     * 
     */
    create<T extends rentCreateArgs>(args: SelectSubset<T, rentCreateArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rents.
     * @param {rentCreateManyArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rent = await prisma.rent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rentCreateManyArgs>(args?: SelectSubset<T, rentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rents and returns the data saved in the database.
     * @param {rentCreateManyAndReturnArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rent = await prisma.rent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rents and only return the `rent_id`
     * const rentWithRent_idOnly = await prisma.rent.createManyAndReturn({
     *   select: { rent_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rentCreateManyAndReturnArgs>(args?: SelectSubset<T, rentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rent.
     * @param {rentDeleteArgs} args - Arguments to delete one Rent.
     * @example
     * // Delete one Rent
     * const Rent = await prisma.rent.delete({
     *   where: {
     *     // ... filter to delete one Rent
     *   }
     * })
     * 
     */
    delete<T extends rentDeleteArgs>(args: SelectSubset<T, rentDeleteArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rent.
     * @param {rentUpdateArgs} args - Arguments to update one Rent.
     * @example
     * // Update one Rent
     * const rent = await prisma.rent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rentUpdateArgs>(args: SelectSubset<T, rentUpdateArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rents.
     * @param {rentDeleteManyArgs} args - Arguments to filter Rents to delete.
     * @example
     * // Delete a few Rents
     * const { count } = await prisma.rent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rentDeleteManyArgs>(args?: SelectSubset<T, rentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rents
     * const rent = await prisma.rent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rentUpdateManyArgs>(args: SelectSubset<T, rentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents and returns the data updated in the database.
     * @param {rentUpdateManyAndReturnArgs} args - Arguments to update many Rents.
     * @example
     * // Update many Rents
     * const rent = await prisma.rent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rents and only return the `rent_id`
     * const rentWithRent_idOnly = await prisma.rent.updateManyAndReturn({
     *   select: { rent_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rentUpdateManyAndReturnArgs>(args: SelectSubset<T, rentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rent.
     * @param {rentUpsertArgs} args - Arguments to update or create a Rent.
     * @example
     * // Update or create a Rent
     * const rent = await prisma.rent.upsert({
     *   create: {
     *     // ... data to create a Rent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rent we want to update
     *   }
     * })
     */
    upsert<T extends rentUpsertArgs>(args: SelectSubset<T, rentUpsertArgs<ExtArgs>>): Prisma__rentClient<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentCountArgs} args - Arguments to filter Rents to count.
     * @example
     * // Count the number of Rents
     * const count = await prisma.rent.count({
     *   where: {
     *     // ... the filter for the Rents we want to count
     *   }
     * })
    **/
    count<T extends rentCountArgs>(
      args?: Subset<T, rentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentAggregateArgs>(args: Subset<T, RentAggregateArgs>): Prisma.PrismaPromise<GetRentAggregateType<T>>

    /**
     * Group by Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rentGroupByArgs['orderBy'] }
        : { orderBy?: rentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rent model
   */
  readonly fields: rentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends rent$paymentArgs<ExtArgs> = {}>(args?: Subset<T, rent$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    car<T extends carDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carDefaultArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rent model
   */
  interface rentFieldRefs {
    readonly rent_id: FieldRef<"rent", 'Int'>
    readonly start_time: FieldRef<"rent", 'DateTime'>
    readonly end_time: FieldRef<"rent", 'DateTime'>
    readonly total_cost: FieldRef<"rent", 'Decimal'>
    readonly status: FieldRef<"rent", 'String'>
    readonly user_id: FieldRef<"rent", 'Int'>
    readonly car_id: FieldRef<"rent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * rent findUnique
   */
  export type rentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter, which rent to fetch.
     */
    where: rentWhereUniqueInput
  }

  /**
   * rent findUniqueOrThrow
   */
  export type rentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter, which rent to fetch.
     */
    where: rentWhereUniqueInput
  }

  /**
   * rent findFirst
   */
  export type rentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter, which rent to fetch.
     */
    where?: rentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rents.
     */
    cursor?: rentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * rent findFirstOrThrow
   */
  export type rentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter, which rent to fetch.
     */
    where?: rentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rents.
     */
    cursor?: rentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * rent findMany
   */
  export type rentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter, which rents to fetch.
     */
    where?: rentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rents to fetch.
     */
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rents.
     */
    cursor?: rentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rents.
     */
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * rent create
   */
  export type rentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * The data needed to create a rent.
     */
    data: XOR<rentCreateInput, rentUncheckedCreateInput>
  }

  /**
   * rent createMany
   */
  export type rentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rents.
     */
    data: rentCreateManyInput | rentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rent createManyAndReturn
   */
  export type rentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * The data used to create many rents.
     */
    data: rentCreateManyInput | rentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rent update
   */
  export type rentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * The data needed to update a rent.
     */
    data: XOR<rentUpdateInput, rentUncheckedUpdateInput>
    /**
     * Choose, which rent to update.
     */
    where: rentWhereUniqueInput
  }

  /**
   * rent updateMany
   */
  export type rentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rents.
     */
    data: XOR<rentUpdateManyMutationInput, rentUncheckedUpdateManyInput>
    /**
     * Filter which rents to update
     */
    where?: rentWhereInput
    /**
     * Limit how many rents to update.
     */
    limit?: number
  }

  /**
   * rent updateManyAndReturn
   */
  export type rentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * The data used to update rents.
     */
    data: XOR<rentUpdateManyMutationInput, rentUncheckedUpdateManyInput>
    /**
     * Filter which rents to update
     */
    where?: rentWhereInput
    /**
     * Limit how many rents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rent upsert
   */
  export type rentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * The filter to search for the rent to update in case it exists.
     */
    where: rentWhereUniqueInput
    /**
     * In case the rent found by the `where` argument doesn't exist, create a new rent with this data.
     */
    create: XOR<rentCreateInput, rentUncheckedCreateInput>
    /**
     * In case the rent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rentUpdateInput, rentUncheckedUpdateInput>
  }

  /**
   * rent delete
   */
  export type rentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    /**
     * Filter which rent to delete.
     */
    where: rentWhereUniqueInput
  }

  /**
   * rent deleteMany
   */
  export type rentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rents to delete
     */
    where?: rentWhereInput
    /**
     * Limit how many rents to delete.
     */
    limit?: number
  }

  /**
   * rent.payment
   */
  export type rent$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * rent without action
   */
  export type rentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
  }


  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    rating: number | null
    user_id: number | null
    car_id: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    rating: number | null
    user_id: number | null
    car_id: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    user_id: number | null
    car_id: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
    user_id: number | null
    car_id: number | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    rating: number
    comment: number
    created_at: number
    user_id: number
    car_id: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    rating?: true
    user_id?: true
    car_id?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    rating?: true
    user_id?: true
    car_id?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    user_id?: true
    car_id?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    user_id?: true
    car_id?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    rating?: true
    comment?: true
    created_at?: true
    user_id?: true
    car_id?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: reviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    rating: number
    comment: string | null
    created_at: Date | null
    user_id: number | null
    car_id: number | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    user_id?: boolean
    car_id?: boolean
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    user_id?: boolean
    car_id?: boolean
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    user_id?: boolean
    car_id?: boolean
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type reviewSelectScalar = {
    review_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    user_id?: boolean
    car_id?: boolean
  }

  export type reviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "rating" | "comment" | "created_at" | "user_id" | "car_id", ExtArgs["result"]["review"]>
  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }
  export type reviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }
  export type reviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | review$carArgs<ExtArgs>
    users?: boolean | review$usersArgs<ExtArgs>
  }

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "review"
    objects: {
      car: Prisma.$carPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      rating: number
      comment: string | null
      created_at: Date | null
      user_id: number | null
      car_id: number | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<Prisma.$reviewPayload, S>

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review'], meta: { name: 'review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reviewFindUniqueArgs>(args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs>(args: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reviewFindFirstArgs>(args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs>(args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends reviewFindManyArgs>(args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends reviewCreateArgs>(args: SelectSubset<T, reviewCreateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reviewCreateManyArgs>(args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {reviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reviewCreateManyAndReturnArgs>(args?: SelectSubset<T, reviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends reviewDeleteArgs>(args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reviewUpdateArgs>(args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reviewDeleteManyArgs>(args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reviewUpdateManyArgs>(args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {reviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reviewUpdateManyAndReturnArgs>(args: SelectSubset<T, reviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends reviewUpsertArgs>(args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the review model
   */
  readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends review$carArgs<ExtArgs> = {}>(args?: Subset<T, review$carArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends review$usersArgs<ExtArgs> = {}>(args?: Subset<T, review$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly review_id: FieldRef<"review", 'Int'>
    readonly rating: FieldRef<"review", 'Int'>
    readonly comment: FieldRef<"review", 'String'>
    readonly created_at: FieldRef<"review", 'DateTime'>
    readonly user_id: FieldRef<"review", 'Int'>
    readonly car_id: FieldRef<"review", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>
  }

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * review createManyAndReturn
   */
  export type reviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
  }

  /**
   * review updateManyAndReturn
   */
  export type reviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>
  }

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput
  }

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput
    /**
     * Limit how many reviews to delete.
     */
    limit?: number
  }

  /**
   * review.car
   */
  export type review$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null
    /**
     * Omit specific fields from the car
     */
    omit?: carOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carInclude<ExtArgs> | null
    where?: carWhereInput
  }

  /**
   * review.users
   */
  export type review$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    phone_number: string | null
    driver_license_number: string | null
    created_at: Date | null
    is_vip: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    phone_number: string | null
    driver_license_number: string | null
    created_at: Date | null
    is_vip: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    phone_number: number
    driver_license_number: number
    created_at: number
    is_vip: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone_number?: true
    driver_license_number?: true
    created_at?: true
    is_vip?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone_number?: true
    driver_license_number?: true
    created_at?: true
    is_vip?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone_number?: true
    driver_license_number?: true
    created_at?: true
    is_vip?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at: Date | null
    is_vip: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    driver_license_number?: boolean
    created_at?: boolean
    is_vip?: boolean
    rent?: boolean | users$rentArgs<ExtArgs>
    review?: boolean | users$reviewArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    driver_license_number?: boolean
    created_at?: boolean
    is_vip?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    driver_license_number?: boolean
    created_at?: boolean
    is_vip?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    driver_license_number?: boolean
    created_at?: boolean
    is_vip?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "phone_number" | "driver_license_number" | "created_at" | "is_vip", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | users$rentArgs<ExtArgs>
    review?: boolean | users$reviewArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      rent: Prisma.$rentPayload<ExtArgs>[]
      review: Prisma.$reviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      phone_number: string
      driver_license_number: string
      created_at: Date | null
      is_vip: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rent<T extends users$rentArgs<ExtArgs> = {}>(args?: Subset<T, users$rentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends users$reviewArgs<ExtArgs> = {}>(args?: Subset<T, users$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly driver_license_number: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly is_vip: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.rent
   */
  export type users$rentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rent
     */
    select?: rentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rent
     */
    omit?: rentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rentInclude<ExtArgs> | null
    where?: rentWhereInput
    orderBy?: rentOrderByWithRelationInput | rentOrderByWithRelationInput[]
    cursor?: rentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * users.review
   */
  export type users$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the review
     */
    omit?: reviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reviewInclude<ExtArgs> | null
    where?: reviewWhereInput
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[]
    cursor?: reviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model maintenance_log
   */

  export type AggregateMaintenance_log = {
    _count: Maintenance_logCountAggregateOutputType | null
    _avg: Maintenance_logAvgAggregateOutputType | null
    _sum: Maintenance_logSumAggregateOutputType | null
    _min: Maintenance_logMinAggregateOutputType | null
    _max: Maintenance_logMaxAggregateOutputType | null
  }

  export type Maintenance_logAvgAggregateOutputType = {
    log_id: number | null
    car_id: number | null
  }

  export type Maintenance_logSumAggregateOutputType = {
    log_id: number | null
    car_id: number | null
  }

  export type Maintenance_logMinAggregateOutputType = {
    log_id: number | null
    car_id: number | null
    description: string | null
    log_date: Date | null
  }

  export type Maintenance_logMaxAggregateOutputType = {
    log_id: number | null
    car_id: number | null
    description: string | null
    log_date: Date | null
  }

  export type Maintenance_logCountAggregateOutputType = {
    log_id: number
    car_id: number
    description: number
    log_date: number
    _all: number
  }


  export type Maintenance_logAvgAggregateInputType = {
    log_id?: true
    car_id?: true
  }

  export type Maintenance_logSumAggregateInputType = {
    log_id?: true
    car_id?: true
  }

  export type Maintenance_logMinAggregateInputType = {
    log_id?: true
    car_id?: true
    description?: true
    log_date?: true
  }

  export type Maintenance_logMaxAggregateInputType = {
    log_id?: true
    car_id?: true
    description?: true
    log_date?: true
  }

  export type Maintenance_logCountAggregateInputType = {
    log_id?: true
    car_id?: true
    description?: true
    log_date?: true
    _all?: true
  }

  export type Maintenance_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_log to aggregate.
     */
    where?: maintenance_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maintenance_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maintenance_logs
    **/
    _count?: true | Maintenance_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Maintenance_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Maintenance_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Maintenance_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Maintenance_logMaxAggregateInputType
  }

  export type GetMaintenance_logAggregateType<T extends Maintenance_logAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance_log[P]>
      : GetScalarType<T[P], AggregateMaintenance_log[P]>
  }




  export type maintenance_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maintenance_logWhereInput
    orderBy?: maintenance_logOrderByWithAggregationInput | maintenance_logOrderByWithAggregationInput[]
    by: Maintenance_logScalarFieldEnum[] | Maintenance_logScalarFieldEnum
    having?: maintenance_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Maintenance_logCountAggregateInputType | true
    _avg?: Maintenance_logAvgAggregateInputType
    _sum?: Maintenance_logSumAggregateInputType
    _min?: Maintenance_logMinAggregateInputType
    _max?: Maintenance_logMaxAggregateInputType
  }

  export type Maintenance_logGroupByOutputType = {
    log_id: number
    car_id: number
    description: string
    log_date: Date
    _count: Maintenance_logCountAggregateOutputType | null
    _avg: Maintenance_logAvgAggregateOutputType | null
    _sum: Maintenance_logSumAggregateOutputType | null
    _min: Maintenance_logMinAggregateOutputType | null
    _max: Maintenance_logMaxAggregateOutputType | null
  }

  type GetMaintenance_logGroupByPayload<T extends maintenance_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Maintenance_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Maintenance_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Maintenance_logGroupByOutputType[P]>
            : GetScalarType<T[P], Maintenance_logGroupByOutputType[P]>
        }
      >
    >


  export type maintenance_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    car_id?: boolean
    description?: boolean
    log_date?: boolean
    car?: boolean | carDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_log"]>

  export type maintenance_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    car_id?: boolean
    description?: boolean
    log_date?: boolean
    car?: boolean | carDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_log"]>

  export type maintenance_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    car_id?: boolean
    description?: boolean
    log_date?: boolean
    car?: boolean | carDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance_log"]>

  export type maintenance_logSelectScalar = {
    log_id?: boolean
    car_id?: boolean
    description?: boolean
    log_date?: boolean
  }

  export type maintenance_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "car_id" | "description" | "log_date", ExtArgs["result"]["maintenance_log"]>
  export type maintenance_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>
  }
  export type maintenance_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>
  }
  export type maintenance_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>
  }

  export type $maintenance_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maintenance_log"
    objects: {
      car: Prisma.$carPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      car_id: number
      description: string
      log_date: Date
    }, ExtArgs["result"]["maintenance_log"]>
    composites: {}
  }

  type maintenance_logGetPayload<S extends boolean | null | undefined | maintenance_logDefaultArgs> = $Result.GetResult<Prisma.$maintenance_logPayload, S>

  type maintenance_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maintenance_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Maintenance_logCountAggregateInputType | true
    }

  export interface maintenance_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maintenance_log'], meta: { name: 'maintenance_log' } }
    /**
     * Find zero or one Maintenance_log that matches the filter.
     * @param {maintenance_logFindUniqueArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maintenance_logFindUniqueArgs>(args: SelectSubset<T, maintenance_logFindUniqueArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maintenance_logFindUniqueOrThrowArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maintenance_logFindUniqueOrThrowArgs>(args: SelectSubset<T, maintenance_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindFirstArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maintenance_logFindFirstArgs>(args?: SelectSubset<T, maintenance_logFindFirstArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindFirstOrThrowArgs} args - Arguments to find a Maintenance_log
     * @example
     * // Get one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maintenance_logFindFirstOrThrowArgs>(args?: SelectSubset<T, maintenance_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenance_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenance_logs
     * const maintenance_logs = await prisma.maintenance_log.findMany()
     * 
     * // Get first 10 Maintenance_logs
     * const maintenance_logs = await prisma.maintenance_log.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const maintenance_logWithLog_idOnly = await prisma.maintenance_log.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends maintenance_logFindManyArgs>(args?: SelectSubset<T, maintenance_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance_log.
     * @param {maintenance_logCreateArgs} args - Arguments to create a Maintenance_log.
     * @example
     * // Create one Maintenance_log
     * const Maintenance_log = await prisma.maintenance_log.create({
     *   data: {
     *     // ... data to create a Maintenance_log
     *   }
     * })
     * 
     */
    create<T extends maintenance_logCreateArgs>(args: SelectSubset<T, maintenance_logCreateArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenance_logs.
     * @param {maintenance_logCreateManyArgs} args - Arguments to create many Maintenance_logs.
     * @example
     * // Create many Maintenance_logs
     * const maintenance_log = await prisma.maintenance_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maintenance_logCreateManyArgs>(args?: SelectSubset<T, maintenance_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenance_logs and returns the data saved in the database.
     * @param {maintenance_logCreateManyAndReturnArgs} args - Arguments to create many Maintenance_logs.
     * @example
     * // Create many Maintenance_logs
     * const maintenance_log = await prisma.maintenance_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenance_logs and only return the `log_id`
     * const maintenance_logWithLog_idOnly = await prisma.maintenance_log.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends maintenance_logCreateManyAndReturnArgs>(args?: SelectSubset<T, maintenance_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance_log.
     * @param {maintenance_logDeleteArgs} args - Arguments to delete one Maintenance_log.
     * @example
     * // Delete one Maintenance_log
     * const Maintenance_log = await prisma.maintenance_log.delete({
     *   where: {
     *     // ... filter to delete one Maintenance_log
     *   }
     * })
     * 
     */
    delete<T extends maintenance_logDeleteArgs>(args: SelectSubset<T, maintenance_logDeleteArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance_log.
     * @param {maintenance_logUpdateArgs} args - Arguments to update one Maintenance_log.
     * @example
     * // Update one Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maintenance_logUpdateArgs>(args: SelectSubset<T, maintenance_logUpdateArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenance_logs.
     * @param {maintenance_logDeleteManyArgs} args - Arguments to filter Maintenance_logs to delete.
     * @example
     * // Delete a few Maintenance_logs
     * const { count } = await prisma.maintenance_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maintenance_logDeleteManyArgs>(args?: SelectSubset<T, maintenance_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenance_logs
     * const maintenance_log = await prisma.maintenance_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maintenance_logUpdateManyArgs>(args: SelectSubset<T, maintenance_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenance_logs and returns the data updated in the database.
     * @param {maintenance_logUpdateManyAndReturnArgs} args - Arguments to update many Maintenance_logs.
     * @example
     * // Update many Maintenance_logs
     * const maintenance_log = await prisma.maintenance_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenance_logs and only return the `log_id`
     * const maintenance_logWithLog_idOnly = await prisma.maintenance_log.updateManyAndReturn({
     *   select: { log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends maintenance_logUpdateManyAndReturnArgs>(args: SelectSubset<T, maintenance_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance_log.
     * @param {maintenance_logUpsertArgs} args - Arguments to update or create a Maintenance_log.
     * @example
     * // Update or create a Maintenance_log
     * const maintenance_log = await prisma.maintenance_log.upsert({
     *   create: {
     *     // ... data to create a Maintenance_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance_log we want to update
     *   }
     * })
     */
    upsert<T extends maintenance_logUpsertArgs>(args: SelectSubset<T, maintenance_logUpsertArgs<ExtArgs>>): Prisma__maintenance_logClient<$Result.GetResult<Prisma.$maintenance_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenance_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logCountArgs} args - Arguments to filter Maintenance_logs to count.
     * @example
     * // Count the number of Maintenance_logs
     * const count = await prisma.maintenance_log.count({
     *   where: {
     *     // ... the filter for the Maintenance_logs we want to count
     *   }
     * })
    **/
    count<T extends maintenance_logCountArgs>(
      args?: Subset<T, maintenance_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Maintenance_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Maintenance_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Maintenance_logAggregateArgs>(args: Subset<T, Maintenance_logAggregateArgs>): Prisma.PrismaPromise<GetMaintenance_logAggregateType<T>>

    /**
     * Group by Maintenance_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maintenance_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maintenance_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maintenance_logGroupByArgs['orderBy'] }
        : { orderBy?: maintenance_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maintenance_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenance_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maintenance_log model
   */
  readonly fields: maintenance_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maintenance_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maintenance_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends carDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carDefaultArgs<ExtArgs>>): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maintenance_log model
   */
  interface maintenance_logFieldRefs {
    readonly log_id: FieldRef<"maintenance_log", 'Int'>
    readonly car_id: FieldRef<"maintenance_log", 'Int'>
    readonly description: FieldRef<"maintenance_log", 'String'>
    readonly log_date: FieldRef<"maintenance_log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * maintenance_log findUnique
   */
  export type maintenance_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_log to fetch.
     */
    where: maintenance_logWhereUniqueInput
  }

  /**
   * maintenance_log findUniqueOrThrow
   */
  export type maintenance_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_log to fetch.
     */
    where: maintenance_logWhereUniqueInput
  }

  /**
   * maintenance_log findFirst
   */
  export type maintenance_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_log to fetch.
     */
    where?: maintenance_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenance_logs.
     */
    cursor?: maintenance_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenance_logs.
     */
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[]
  }

  /**
   * maintenance_log findFirstOrThrow
   */
  export type maintenance_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_log to fetch.
     */
    where?: maintenance_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maintenance_logs.
     */
    cursor?: maintenance_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maintenance_logs.
     */
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[]
  }

  /**
   * maintenance_log findMany
   */
  export type maintenance_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter, which maintenance_logs to fetch.
     */
    where?: maintenance_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maintenance_logs to fetch.
     */
    orderBy?: maintenance_logOrderByWithRelationInput | maintenance_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maintenance_logs.
     */
    cursor?: maintenance_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maintenance_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maintenance_logs.
     */
    skip?: number
    distinct?: Maintenance_logScalarFieldEnum | Maintenance_logScalarFieldEnum[]
  }

  /**
   * maintenance_log create
   */
  export type maintenance_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * The data needed to create a maintenance_log.
     */
    data: XOR<maintenance_logCreateInput, maintenance_logUncheckedCreateInput>
  }

  /**
   * maintenance_log createMany
   */
  export type maintenance_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maintenance_logs.
     */
    data: maintenance_logCreateManyInput | maintenance_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maintenance_log createManyAndReturn
   */
  export type maintenance_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * The data used to create many maintenance_logs.
     */
    data: maintenance_logCreateManyInput | maintenance_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * maintenance_log update
   */
  export type maintenance_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * The data needed to update a maintenance_log.
     */
    data: XOR<maintenance_logUpdateInput, maintenance_logUncheckedUpdateInput>
    /**
     * Choose, which maintenance_log to update.
     */
    where: maintenance_logWhereUniqueInput
  }

  /**
   * maintenance_log updateMany
   */
  export type maintenance_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maintenance_logs.
     */
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyInput>
    /**
     * Filter which maintenance_logs to update
     */
    where?: maintenance_logWhereInput
    /**
     * Limit how many maintenance_logs to update.
     */
    limit?: number
  }

  /**
   * maintenance_log updateManyAndReturn
   */
  export type maintenance_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * The data used to update maintenance_logs.
     */
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyInput>
    /**
     * Filter which maintenance_logs to update
     */
    where?: maintenance_logWhereInput
    /**
     * Limit how many maintenance_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * maintenance_log upsert
   */
  export type maintenance_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * The filter to search for the maintenance_log to update in case it exists.
     */
    where: maintenance_logWhereUniqueInput
    /**
     * In case the maintenance_log found by the `where` argument doesn't exist, create a new maintenance_log with this data.
     */
    create: XOR<maintenance_logCreateInput, maintenance_logUncheckedCreateInput>
    /**
     * In case the maintenance_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maintenance_logUpdateInput, maintenance_logUncheckedUpdateInput>
  }

  /**
   * maintenance_log delete
   */
  export type maintenance_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
    /**
     * Filter which maintenance_log to delete.
     */
    where: maintenance_logWhereUniqueInput
  }

  /**
   * maintenance_log deleteMany
   */
  export type maintenance_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maintenance_logs to delete
     */
    where?: maintenance_logWhereInput
    /**
     * Limit how many maintenance_logs to delete.
     */
    limit?: number
  }

  /**
   * maintenance_log without action
   */
  export type maintenance_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maintenance_log
     */
    select?: maintenance_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maintenance_log
     */
    omit?: maintenance_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maintenance_logInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarScalarFieldEnum: {
    car_id: 'car_id',
    license_plate: 'license_plate',
    year: 'year',
    price_per_hour: 'price_per_hour',
    location_id: 'location_id',
    status_id: 'status_id',
    model_id: 'model_id'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const Car_locationScalarFieldEnum: {
    location_id: 'location_id',
    city: 'city',
    address: 'address'
  };

  export type Car_locationScalarFieldEnum = (typeof Car_locationScalarFieldEnum)[keyof typeof Car_locationScalarFieldEnum]


  export const Car_modelScalarFieldEnum: {
    model_id: 'model_id',
    brand: 'brand',
    model_name: 'model_name'
  };

  export type Car_modelScalarFieldEnum = (typeof Car_modelScalarFieldEnum)[keyof typeof Car_modelScalarFieldEnum]


  export const Car_statusScalarFieldEnum: {
    status_id: 'status_id',
    status_name: 'status_name'
  };

  export type Car_statusScalarFieldEnum = (typeof Car_statusScalarFieldEnum)[keyof typeof Car_statusScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    amount: 'amount',
    payment_method: 'payment_method',
    payment_date: 'payment_date',
    status: 'status',
    rent_id: 'rent_id'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RentScalarFieldEnum: {
    rent_id: 'rent_id',
    start_time: 'start_time',
    end_time: 'end_time',
    total_cost: 'total_cost',
    status: 'status',
    user_id: 'user_id',
    car_id: 'car_id'
  };

  export type RentScalarFieldEnum = (typeof RentScalarFieldEnum)[keyof typeof RentScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at',
    user_id: 'user_id',
    car_id: 'car_id'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone_number: 'phone_number',
    driver_license_number: 'driver_license_number',
    created_at: 'created_at',
    is_vip: 'is_vip'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Maintenance_logScalarFieldEnum: {
    log_id: 'log_id',
    car_id: 'car_id',
    description: 'description',
    log_date: 'log_date'
  };

  export type Maintenance_logScalarFieldEnum = (typeof Maintenance_logScalarFieldEnum)[keyof typeof Maintenance_logScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type carWhereInput = {
    AND?: carWhereInput | carWhereInput[]
    OR?: carWhereInput[]
    NOT?: carWhereInput | carWhereInput[]
    car_id?: IntFilter<"car"> | number
    license_plate?: StringFilter<"car"> | string
    year?: IntNullableFilter<"car"> | number | null
    price_per_hour?: DecimalFilter<"car"> | Decimal | DecimalJsLike | number | string
    location_id?: IntNullableFilter<"car"> | number | null
    status_id?: IntNullableFilter<"car"> | number | null
    model_id?: IntFilter<"car"> | number
    car_location?: XOR<Car_locationNullableScalarRelationFilter, car_locationWhereInput> | null
    car_status?: XOR<Car_statusNullableScalarRelationFilter, car_statusWhereInput> | null
    car_model?: XOR<Car_modelScalarRelationFilter, car_modelWhereInput>
    rent?: RentListRelationFilter
    review?: ReviewListRelationFilter
    maintenance_log?: Maintenance_logListRelationFilter
  }

  export type carOrderByWithRelationInput = {
    car_id?: SortOrder
    license_plate?: SortOrder
    year?: SortOrderInput | SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    model_id?: SortOrder
    car_location?: car_locationOrderByWithRelationInput
    car_status?: car_statusOrderByWithRelationInput
    car_model?: car_modelOrderByWithRelationInput
    rent?: rentOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
    maintenance_log?: maintenance_logOrderByRelationAggregateInput
  }

  export type carWhereUniqueInput = Prisma.AtLeast<{
    car_id?: number
    license_plate?: string
    AND?: carWhereInput | carWhereInput[]
    OR?: carWhereInput[]
    NOT?: carWhereInput | carWhereInput[]
    year?: IntNullableFilter<"car"> | number | null
    price_per_hour?: DecimalFilter<"car"> | Decimal | DecimalJsLike | number | string
    location_id?: IntNullableFilter<"car"> | number | null
    status_id?: IntNullableFilter<"car"> | number | null
    model_id?: IntFilter<"car"> | number
    car_location?: XOR<Car_locationNullableScalarRelationFilter, car_locationWhereInput> | null
    car_status?: XOR<Car_statusNullableScalarRelationFilter, car_statusWhereInput> | null
    car_model?: XOR<Car_modelScalarRelationFilter, car_modelWhereInput>
    rent?: RentListRelationFilter
    review?: ReviewListRelationFilter
    maintenance_log?: Maintenance_logListRelationFilter
  }, "car_id" | "license_plate">

  export type carOrderByWithAggregationInput = {
    car_id?: SortOrder
    license_plate?: SortOrder
    year?: SortOrderInput | SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrderInput | SortOrder
    status_id?: SortOrderInput | SortOrder
    model_id?: SortOrder
    _count?: carCountOrderByAggregateInput
    _avg?: carAvgOrderByAggregateInput
    _max?: carMaxOrderByAggregateInput
    _min?: carMinOrderByAggregateInput
    _sum?: carSumOrderByAggregateInput
  }

  export type carScalarWhereWithAggregatesInput = {
    AND?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[]
    OR?: carScalarWhereWithAggregatesInput[]
    NOT?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[]
    car_id?: IntWithAggregatesFilter<"car"> | number
    license_plate?: StringWithAggregatesFilter<"car"> | string
    year?: IntNullableWithAggregatesFilter<"car"> | number | null
    price_per_hour?: DecimalWithAggregatesFilter<"car"> | Decimal | DecimalJsLike | number | string
    location_id?: IntNullableWithAggregatesFilter<"car"> | number | null
    status_id?: IntNullableWithAggregatesFilter<"car"> | number | null
    model_id?: IntWithAggregatesFilter<"car"> | number
  }

  export type car_locationWhereInput = {
    AND?: car_locationWhereInput | car_locationWhereInput[]
    OR?: car_locationWhereInput[]
    NOT?: car_locationWhereInput | car_locationWhereInput[]
    location_id?: IntFilter<"car_location"> | number
    city?: StringFilter<"car_location"> | string
    address?: StringFilter<"car_location"> | string
    car?: CarListRelationFilter
  }

  export type car_locationOrderByWithRelationInput = {
    location_id?: SortOrder
    city?: SortOrder
    address?: SortOrder
    car?: carOrderByRelationAggregateInput
  }

  export type car_locationWhereUniqueInput = Prisma.AtLeast<{
    location_id?: number
    AND?: car_locationWhereInput | car_locationWhereInput[]
    OR?: car_locationWhereInput[]
    NOT?: car_locationWhereInput | car_locationWhereInput[]
    city?: StringFilter<"car_location"> | string
    address?: StringFilter<"car_location"> | string
    car?: CarListRelationFilter
  }, "location_id">

  export type car_locationOrderByWithAggregationInput = {
    location_id?: SortOrder
    city?: SortOrder
    address?: SortOrder
    _count?: car_locationCountOrderByAggregateInput
    _avg?: car_locationAvgOrderByAggregateInput
    _max?: car_locationMaxOrderByAggregateInput
    _min?: car_locationMinOrderByAggregateInput
    _sum?: car_locationSumOrderByAggregateInput
  }

  export type car_locationScalarWhereWithAggregatesInput = {
    AND?: car_locationScalarWhereWithAggregatesInput | car_locationScalarWhereWithAggregatesInput[]
    OR?: car_locationScalarWhereWithAggregatesInput[]
    NOT?: car_locationScalarWhereWithAggregatesInput | car_locationScalarWhereWithAggregatesInput[]
    location_id?: IntWithAggregatesFilter<"car_location"> | number
    city?: StringWithAggregatesFilter<"car_location"> | string
    address?: StringWithAggregatesFilter<"car_location"> | string
  }

  export type car_modelWhereInput = {
    AND?: car_modelWhereInput | car_modelWhereInput[]
    OR?: car_modelWhereInput[]
    NOT?: car_modelWhereInput | car_modelWhereInput[]
    model_id?: IntFilter<"car_model"> | number
    brand?: StringFilter<"car_model"> | string
    model_name?: StringFilter<"car_model"> | string
    car?: CarListRelationFilter
  }

  export type car_modelOrderByWithRelationInput = {
    model_id?: SortOrder
    brand?: SortOrder
    model_name?: SortOrder
    car?: carOrderByRelationAggregateInput
  }

  export type car_modelWhereUniqueInput = Prisma.AtLeast<{
    model_id?: number
    brand_model_name?: car_modelBrandModel_nameCompoundUniqueInput
    AND?: car_modelWhereInput | car_modelWhereInput[]
    OR?: car_modelWhereInput[]
    NOT?: car_modelWhereInput | car_modelWhereInput[]
    brand?: StringFilter<"car_model"> | string
    model_name?: StringFilter<"car_model"> | string
    car?: CarListRelationFilter
  }, "model_id" | "brand_model_name">

  export type car_modelOrderByWithAggregationInput = {
    model_id?: SortOrder
    brand?: SortOrder
    model_name?: SortOrder
    _count?: car_modelCountOrderByAggregateInput
    _avg?: car_modelAvgOrderByAggregateInput
    _max?: car_modelMaxOrderByAggregateInput
    _min?: car_modelMinOrderByAggregateInput
    _sum?: car_modelSumOrderByAggregateInput
  }

  export type car_modelScalarWhereWithAggregatesInput = {
    AND?: car_modelScalarWhereWithAggregatesInput | car_modelScalarWhereWithAggregatesInput[]
    OR?: car_modelScalarWhereWithAggregatesInput[]
    NOT?: car_modelScalarWhereWithAggregatesInput | car_modelScalarWhereWithAggregatesInput[]
    model_id?: IntWithAggregatesFilter<"car_model"> | number
    brand?: StringWithAggregatesFilter<"car_model"> | string
    model_name?: StringWithAggregatesFilter<"car_model"> | string
  }

  export type car_statusWhereInput = {
    AND?: car_statusWhereInput | car_statusWhereInput[]
    OR?: car_statusWhereInput[]
    NOT?: car_statusWhereInput | car_statusWhereInput[]
    status_id?: IntFilter<"car_status"> | number
    status_name?: StringFilter<"car_status"> | string
    car?: CarListRelationFilter
  }

  export type car_statusOrderByWithRelationInput = {
    status_id?: SortOrder
    status_name?: SortOrder
    car?: carOrderByRelationAggregateInput
  }

  export type car_statusWhereUniqueInput = Prisma.AtLeast<{
    status_id?: number
    status_name?: string
    AND?: car_statusWhereInput | car_statusWhereInput[]
    OR?: car_statusWhereInput[]
    NOT?: car_statusWhereInput | car_statusWhereInput[]
    car?: CarListRelationFilter
  }, "status_id" | "status_name">

  export type car_statusOrderByWithAggregationInput = {
    status_id?: SortOrder
    status_name?: SortOrder
    _count?: car_statusCountOrderByAggregateInput
    _avg?: car_statusAvgOrderByAggregateInput
    _max?: car_statusMaxOrderByAggregateInput
    _min?: car_statusMinOrderByAggregateInput
    _sum?: car_statusSumOrderByAggregateInput
  }

  export type car_statusScalarWhereWithAggregatesInput = {
    AND?: car_statusScalarWhereWithAggregatesInput | car_statusScalarWhereWithAggregatesInput[]
    OR?: car_statusScalarWhereWithAggregatesInput[]
    NOT?: car_statusScalarWhereWithAggregatesInput | car_statusScalarWhereWithAggregatesInput[]
    status_id?: IntWithAggregatesFilter<"car_status"> | number
    status_name?: StringWithAggregatesFilter<"car_status"> | string
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payment"> | string
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: StringNullableFilter<"payment"> | string | null
    rent_id?: IntFilter<"payment"> | number
    rent?: XOR<RentScalarRelationFilter, rentWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rent_id?: SortOrder
    rent?: rentOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payment"> | string
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: StringNullableFilter<"payment"> | string | null
    rent_id?: IntFilter<"payment"> | number
    rent?: XOR<RentScalarRelationFilter, rentWhereInput>
  }, "payment_id">

  export type paymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    rent_id?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"payment"> | number
    amount?: DecimalWithAggregatesFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringWithAggregatesFilter<"payment"> | string
    payment_date?: DateTimeNullableWithAggregatesFilter<"payment"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"payment"> | string | null
    rent_id?: IntWithAggregatesFilter<"payment"> | number
  }

  export type rentWhereInput = {
    AND?: rentWhereInput | rentWhereInput[]
    OR?: rentWhereInput[]
    NOT?: rentWhereInput | rentWhereInput[]
    rent_id?: IntFilter<"rent"> | number
    start_time?: DateTimeFilter<"rent"> | Date | string
    end_time?: DateTimeNullableFilter<"rent"> | Date | string | null
    total_cost?: DecimalNullableFilter<"rent"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"rent"> | string | null
    user_id?: IntFilter<"rent"> | number
    car_id?: IntFilter<"rent"> | number
    payment?: PaymentListRelationFilter
    car?: XOR<CarScalarRelationFilter, carWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type rentOrderByWithRelationInput = {
    rent_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    payment?: paymentOrderByRelationAggregateInput
    car?: carOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type rentWhereUniqueInput = Prisma.AtLeast<{
    rent_id?: number
    AND?: rentWhereInput | rentWhereInput[]
    OR?: rentWhereInput[]
    NOT?: rentWhereInput | rentWhereInput[]
    start_time?: DateTimeFilter<"rent"> | Date | string
    end_time?: DateTimeNullableFilter<"rent"> | Date | string | null
    total_cost?: DecimalNullableFilter<"rent"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"rent"> | string | null
    user_id?: IntFilter<"rent"> | number
    car_id?: IntFilter<"rent"> | number
    payment?: PaymentListRelationFilter
    car?: XOR<CarScalarRelationFilter, carWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "rent_id">

  export type rentOrderByWithAggregationInput = {
    rent_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrderInput | SortOrder
    total_cost?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
    _count?: rentCountOrderByAggregateInput
    _avg?: rentAvgOrderByAggregateInput
    _max?: rentMaxOrderByAggregateInput
    _min?: rentMinOrderByAggregateInput
    _sum?: rentSumOrderByAggregateInput
  }

  export type rentScalarWhereWithAggregatesInput = {
    AND?: rentScalarWhereWithAggregatesInput | rentScalarWhereWithAggregatesInput[]
    OR?: rentScalarWhereWithAggregatesInput[]
    NOT?: rentScalarWhereWithAggregatesInput | rentScalarWhereWithAggregatesInput[]
    rent_id?: IntWithAggregatesFilter<"rent"> | number
    start_time?: DateTimeWithAggregatesFilter<"rent"> | Date | string
    end_time?: DateTimeNullableWithAggregatesFilter<"rent"> | Date | string | null
    total_cost?: DecimalNullableWithAggregatesFilter<"rent"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"rent"> | string | null
    user_id?: IntWithAggregatesFilter<"rent"> | number
    car_id?: IntWithAggregatesFilter<"rent"> | number
  }

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    review_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    user_id?: IntNullableFilter<"review"> | number | null
    car_id?: IntNullableFilter<"review"> | number | null
    car?: XOR<CarNullableScalarRelationFilter, carWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type reviewOrderByWithRelationInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    car_id?: SortOrderInput | SortOrder
    car?: carOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type reviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: reviewWhereInput | reviewWhereInput[]
    OR?: reviewWhereInput[]
    NOT?: reviewWhereInput | reviewWhereInput[]
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    user_id?: IntNullableFilter<"review"> | number | null
    car_id?: IntNullableFilter<"review"> | number | null
    car?: XOR<CarNullableScalarRelationFilter, carWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "review_id">

  export type reviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    car_id?: SortOrderInput | SortOrder
    _count?: reviewCountOrderByAggregateInput
    _avg?: reviewAvgOrderByAggregateInput
    _max?: reviewMaxOrderByAggregateInput
    _min?: reviewMinOrderByAggregateInput
    _sum?: reviewSumOrderByAggregateInput
  }

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    OR?: reviewScalarWhereWithAggregatesInput[]
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"review"> | number
    rating?: IntWithAggregatesFilter<"review"> | number
    comment?: StringNullableWithAggregatesFilter<"review"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"review"> | Date | string | null
    user_id?: IntNullableWithAggregatesFilter<"review"> | number | null
    car_id?: IntNullableWithAggregatesFilter<"review"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    driver_license_number?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_vip?: BoolFilter<"users"> | boolean
    rent?: RentListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    driver_license_number?: SortOrder
    created_at?: SortOrderInput | SortOrder
    is_vip?: SortOrder
    rent?: rentOrderByRelationAggregateInput
    review?: reviewOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    driver_license_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_vip?: BoolFilter<"users"> | boolean
    rent?: RentListRelationFilter
    review?: ReviewListRelationFilter
  }, "user_id" | "email" | "driver_license_number">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    driver_license_number?: SortOrder
    created_at?: SortOrderInput | SortOrder
    is_vip?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    driver_license_number?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_vip?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type maintenance_logWhereInput = {
    AND?: maintenance_logWhereInput | maintenance_logWhereInput[]
    OR?: maintenance_logWhereInput[]
    NOT?: maintenance_logWhereInput | maintenance_logWhereInput[]
    log_id?: IntFilter<"maintenance_log"> | number
    car_id?: IntFilter<"maintenance_log"> | number
    description?: StringFilter<"maintenance_log"> | string
    log_date?: DateTimeFilter<"maintenance_log"> | Date | string
    car?: XOR<CarScalarRelationFilter, carWhereInput>
  }

  export type maintenance_logOrderByWithRelationInput = {
    log_id?: SortOrder
    car_id?: SortOrder
    description?: SortOrder
    log_date?: SortOrder
    car?: carOrderByWithRelationInput
  }

  export type maintenance_logWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: maintenance_logWhereInput | maintenance_logWhereInput[]
    OR?: maintenance_logWhereInput[]
    NOT?: maintenance_logWhereInput | maintenance_logWhereInput[]
    car_id?: IntFilter<"maintenance_log"> | number
    description?: StringFilter<"maintenance_log"> | string
    log_date?: DateTimeFilter<"maintenance_log"> | Date | string
    car?: XOR<CarScalarRelationFilter, carWhereInput>
  }, "log_id">

  export type maintenance_logOrderByWithAggregationInput = {
    log_id?: SortOrder
    car_id?: SortOrder
    description?: SortOrder
    log_date?: SortOrder
    _count?: maintenance_logCountOrderByAggregateInput
    _avg?: maintenance_logAvgOrderByAggregateInput
    _max?: maintenance_logMaxOrderByAggregateInput
    _min?: maintenance_logMinOrderByAggregateInput
    _sum?: maintenance_logSumOrderByAggregateInput
  }

  export type maintenance_logScalarWhereWithAggregatesInput = {
    AND?: maintenance_logScalarWhereWithAggregatesInput | maintenance_logScalarWhereWithAggregatesInput[]
    OR?: maintenance_logScalarWhereWithAggregatesInput[]
    NOT?: maintenance_logScalarWhereWithAggregatesInput | maintenance_logScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"maintenance_log"> | number
    car_id?: IntWithAggregatesFilter<"maintenance_log"> | number
    description?: StringWithAggregatesFilter<"maintenance_log"> | string
    log_date?: DateTimeWithAggregatesFilter<"maintenance_log"> | Date | string
  }

  export type carCreateInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_status?: car_statusCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    model_id: number
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carUpdateInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type carCreateManyInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    model_id: number
  }

  export type carUpdateManyMutationInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type carUncheckedUpdateManyInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
  }

  export type car_locationCreateInput = {
    city: string
    address: string
    car?: carCreateNestedManyWithoutCar_locationInput
  }

  export type car_locationUncheckedCreateInput = {
    location_id?: number
    city: string
    address: string
    car?: carUncheckedCreateNestedManyWithoutCar_locationInput
  }

  export type car_locationUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    car?: carUpdateManyWithoutCar_locationNestedInput
  }

  export type car_locationUncheckedUpdateInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    car?: carUncheckedUpdateManyWithoutCar_locationNestedInput
  }

  export type car_locationCreateManyInput = {
    location_id?: number
    city: string
    address: string
  }

  export type car_locationUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type car_locationUncheckedUpdateManyInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type car_modelCreateInput = {
    brand: string
    model_name: string
    car?: carCreateNestedManyWithoutCar_modelInput
  }

  export type car_modelUncheckedCreateInput = {
    model_id?: number
    brand: string
    model_name: string
    car?: carUncheckedCreateNestedManyWithoutCar_modelInput
  }

  export type car_modelUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    car?: carUpdateManyWithoutCar_modelNestedInput
  }

  export type car_modelUncheckedUpdateInput = {
    model_id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    car?: carUncheckedUpdateManyWithoutCar_modelNestedInput
  }

  export type car_modelCreateManyInput = {
    model_id?: number
    brand: string
    model_name: string
  }

  export type car_modelUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_modelUncheckedUpdateManyInput = {
    model_id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_statusCreateInput = {
    status_name: string
    car?: carCreateNestedManyWithoutCar_statusInput
  }

  export type car_statusUncheckedCreateInput = {
    status_id?: number
    status_name: string
    car?: carUncheckedCreateNestedManyWithoutCar_statusInput
  }

  export type car_statusUpdateInput = {
    status_name?: StringFieldUpdateOperationsInput | string
    car?: carUpdateManyWithoutCar_statusNestedInput
  }

  export type car_statusUncheckedUpdateInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_name?: StringFieldUpdateOperationsInput | string
    car?: carUncheckedUpdateManyWithoutCar_statusNestedInput
  }

  export type car_statusCreateManyInput = {
    status_id?: number
    status_name: string
  }

  export type car_statusUpdateManyMutationInput = {
    status_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_statusUncheckedUpdateManyInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_name?: StringFieldUpdateOperationsInput | string
  }

  export type paymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
    rent: rentCreateNestedOneWithoutPaymentInput
  }

  export type paymentUncheckedCreateInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
    rent_id: number
  }

  export type paymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rent?: rentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rent_id?: IntFieldUpdateOperationsInput | number
  }

  export type paymentCreateManyInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
    rent_id: number
  }

  export type paymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rent_id?: IntFieldUpdateOperationsInput | number
  }

  export type rentCreateInput = {
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    payment?: paymentCreateNestedManyWithoutRentInput
    car: carCreateNestedOneWithoutRentInput
    users: usersCreateNestedOneWithoutRentInput
  }

  export type rentUncheckedCreateInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    user_id: number
    car_id: number
    payment?: paymentUncheckedCreateNestedManyWithoutRentInput
  }

  export type rentUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutRentNestedInput
    car?: carUpdateOneRequiredWithoutRentNestedInput
    users?: usersUpdateOneRequiredWithoutRentNestedInput
  }

  export type rentUncheckedUpdateInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    payment?: paymentUncheckedUpdateManyWithoutRentNestedInput
  }

  export type rentCreateManyInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    user_id: number
    car_id: number
  }

  export type rentUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rentUncheckedUpdateManyInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    car?: carCreateNestedOneWithoutReviewInput
    users?: usersCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_id?: number | null
    car_id?: number | null
  }

  export type reviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    car?: carUpdateOneWithoutReviewNestedInput
    users?: usersUpdateOneWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    car_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewCreateManyInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_id?: number | null
    car_id?: number | null
  }

  export type reviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    car_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    rent?: rentCreateNestedManyWithoutUsersInput
    review?: reviewCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    rent?: rentUncheckedCreateNestedManyWithoutUsersInput
    review?: reviewUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentUpdateManyWithoutUsersNestedInput
    review?: reviewUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentUncheckedUpdateManyWithoutUsersNestedInput
    review?: reviewUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
  }

  export type maintenance_logCreateInput = {
    description: string
    log_date?: Date | string
    car: carCreateNestedOneWithoutMaintenance_logInput
  }

  export type maintenance_logUncheckedCreateInput = {
    log_id?: number
    car_id: number
    description: string
    log_date?: Date | string
  }

  export type maintenance_logUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: carUpdateOneRequiredWithoutMaintenance_logNestedInput
  }

  export type maintenance_logUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_logCreateManyInput = {
    log_id?: number
    car_id: number
    description: string
    log_date?: Date | string
  }

  export type maintenance_logUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_logUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Car_locationNullableScalarRelationFilter = {
    is?: car_locationWhereInput | null
    isNot?: car_locationWhereInput | null
  }

  export type Car_statusNullableScalarRelationFilter = {
    is?: car_statusWhereInput | null
    isNot?: car_statusWhereInput | null
  }

  export type Car_modelScalarRelationFilter = {
    is?: car_modelWhereInput
    isNot?: car_modelWhereInput
  }

  export type RentListRelationFilter = {
    every?: rentWhereInput
    some?: rentWhereInput
    none?: rentWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput
    some?: reviewWhereInput
    none?: reviewWhereInput
  }

  export type Maintenance_logListRelationFilter = {
    every?: maintenance_logWhereInput
    some?: maintenance_logWhereInput
    none?: maintenance_logWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type rentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type maintenance_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carCountOrderByAggregateInput = {
    car_id?: SortOrder
    license_plate?: SortOrder
    year?: SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrder
    status_id?: SortOrder
    model_id?: SortOrder
  }

  export type carAvgOrderByAggregateInput = {
    car_id?: SortOrder
    year?: SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrder
    status_id?: SortOrder
    model_id?: SortOrder
  }

  export type carMaxOrderByAggregateInput = {
    car_id?: SortOrder
    license_plate?: SortOrder
    year?: SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrder
    status_id?: SortOrder
    model_id?: SortOrder
  }

  export type carMinOrderByAggregateInput = {
    car_id?: SortOrder
    license_plate?: SortOrder
    year?: SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrder
    status_id?: SortOrder
    model_id?: SortOrder
  }

  export type carSumOrderByAggregateInput = {
    car_id?: SortOrder
    year?: SortOrder
    price_per_hour?: SortOrder
    location_id?: SortOrder
    status_id?: SortOrder
    model_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CarListRelationFilter = {
    every?: carWhereInput
    some?: carWhereInput
    none?: carWhereInput
  }

  export type carOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type car_locationCountOrderByAggregateInput = {
    location_id?: SortOrder
    city?: SortOrder
    address?: SortOrder
  }

  export type car_locationAvgOrderByAggregateInput = {
    location_id?: SortOrder
  }

  export type car_locationMaxOrderByAggregateInput = {
    location_id?: SortOrder
    city?: SortOrder
    address?: SortOrder
  }

  export type car_locationMinOrderByAggregateInput = {
    location_id?: SortOrder
    city?: SortOrder
    address?: SortOrder
  }

  export type car_locationSumOrderByAggregateInput = {
    location_id?: SortOrder
  }

  export type car_modelBrandModel_nameCompoundUniqueInput = {
    brand: string
    model_name: string
  }

  export type car_modelCountOrderByAggregateInput = {
    model_id?: SortOrder
    brand?: SortOrder
    model_name?: SortOrder
  }

  export type car_modelAvgOrderByAggregateInput = {
    model_id?: SortOrder
  }

  export type car_modelMaxOrderByAggregateInput = {
    model_id?: SortOrder
    brand?: SortOrder
    model_name?: SortOrder
  }

  export type car_modelMinOrderByAggregateInput = {
    model_id?: SortOrder
    brand?: SortOrder
    model_name?: SortOrder
  }

  export type car_modelSumOrderByAggregateInput = {
    model_id?: SortOrder
  }

  export type car_statusCountOrderByAggregateInput = {
    status_id?: SortOrder
    status_name?: SortOrder
  }

  export type car_statusAvgOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type car_statusMaxOrderByAggregateInput = {
    status_id?: SortOrder
    status_name?: SortOrder
  }

  export type car_statusMinOrderByAggregateInput = {
    status_id?: SortOrder
    status_name?: SortOrder
  }

  export type car_statusSumOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RentScalarRelationFilter = {
    is?: rentWhereInput
    isNot?: rentWhereInput
  }

  export type paymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    rent_id?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    rent_id?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    rent_id?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    payment_date?: SortOrder
    status?: SortOrder
    rent_id?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    amount?: SortOrder
    rent_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type CarScalarRelationFilter = {
    is?: carWhereInput
    isNot?: carWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rentCountOrderByAggregateInput = {
    rent_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    total_cost?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type rentAvgOrderByAggregateInput = {
    rent_id?: SortOrder
    total_cost?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type rentMaxOrderByAggregateInput = {
    rent_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    total_cost?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type rentMinOrderByAggregateInput = {
    rent_id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    total_cost?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type rentSumOrderByAggregateInput = {
    rent_id?: SortOrder
    total_cost?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CarNullableScalarRelationFilter = {
    is?: carWhereInput | null
    isNot?: carWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type reviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type reviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type reviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type reviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type reviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    rating?: SortOrder
    user_id?: SortOrder
    car_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    driver_license_number?: SortOrder
    created_at?: SortOrder
    is_vip?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    driver_license_number?: SortOrder
    created_at?: SortOrder
    is_vip?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    driver_license_number?: SortOrder
    created_at?: SortOrder
    is_vip?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type maintenance_logCountOrderByAggregateInput = {
    log_id?: SortOrder
    car_id?: SortOrder
    description?: SortOrder
    log_date?: SortOrder
  }

  export type maintenance_logAvgOrderByAggregateInput = {
    log_id?: SortOrder
    car_id?: SortOrder
  }

  export type maintenance_logMaxOrderByAggregateInput = {
    log_id?: SortOrder
    car_id?: SortOrder
    description?: SortOrder
    log_date?: SortOrder
  }

  export type maintenance_logMinOrderByAggregateInput = {
    log_id?: SortOrder
    car_id?: SortOrder
    description?: SortOrder
    log_date?: SortOrder
  }

  export type maintenance_logSumOrderByAggregateInput = {
    log_id?: SortOrder
    car_id?: SortOrder
  }

  export type car_locationCreateNestedOneWithoutCarInput = {
    create?: XOR<car_locationCreateWithoutCarInput, car_locationUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_locationCreateOrConnectWithoutCarInput
    connect?: car_locationWhereUniqueInput
  }

  export type car_statusCreateNestedOneWithoutCarInput = {
    create?: XOR<car_statusCreateWithoutCarInput, car_statusUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_statusCreateOrConnectWithoutCarInput
    connect?: car_statusWhereUniqueInput
  }

  export type car_modelCreateNestedOneWithoutCarInput = {
    create?: XOR<car_modelCreateWithoutCarInput, car_modelUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_modelCreateOrConnectWithoutCarInput
    connect?: car_modelWhereUniqueInput
  }

  export type rentCreateNestedManyWithoutCarInput = {
    create?: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput> | rentCreateWithoutCarInput[] | rentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: rentCreateOrConnectWithoutCarInput | rentCreateOrConnectWithoutCarInput[]
    createMany?: rentCreateManyCarInputEnvelope
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutCarInput = {
    create?: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput> | reviewCreateWithoutCarInput[] | reviewUncheckedCreateWithoutCarInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[]
    createMany?: reviewCreateManyCarInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type maintenance_logCreateNestedManyWithoutCarInput = {
    create?: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput> | maintenance_logCreateWithoutCarInput[] | maintenance_logUncheckedCreateWithoutCarInput[]
    connectOrCreate?: maintenance_logCreateOrConnectWithoutCarInput | maintenance_logCreateOrConnectWithoutCarInput[]
    createMany?: maintenance_logCreateManyCarInputEnvelope
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
  }

  export type rentUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput> | rentCreateWithoutCarInput[] | rentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: rentCreateOrConnectWithoutCarInput | rentCreateOrConnectWithoutCarInput[]
    createMany?: rentCreateManyCarInputEnvelope
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput> | reviewCreateWithoutCarInput[] | reviewUncheckedCreateWithoutCarInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[]
    createMany?: reviewCreateManyCarInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type maintenance_logUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput> | maintenance_logCreateWithoutCarInput[] | maintenance_logUncheckedCreateWithoutCarInput[]
    connectOrCreate?: maintenance_logCreateOrConnectWithoutCarInput | maintenance_logCreateOrConnectWithoutCarInput[]
    createMany?: maintenance_logCreateManyCarInputEnvelope
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type car_locationUpdateOneWithoutCarNestedInput = {
    create?: XOR<car_locationCreateWithoutCarInput, car_locationUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_locationCreateOrConnectWithoutCarInput
    upsert?: car_locationUpsertWithoutCarInput
    disconnect?: car_locationWhereInput | boolean
    delete?: car_locationWhereInput | boolean
    connect?: car_locationWhereUniqueInput
    update?: XOR<XOR<car_locationUpdateToOneWithWhereWithoutCarInput, car_locationUpdateWithoutCarInput>, car_locationUncheckedUpdateWithoutCarInput>
  }

  export type car_statusUpdateOneWithoutCarNestedInput = {
    create?: XOR<car_statusCreateWithoutCarInput, car_statusUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_statusCreateOrConnectWithoutCarInput
    upsert?: car_statusUpsertWithoutCarInput
    disconnect?: car_statusWhereInput | boolean
    delete?: car_statusWhereInput | boolean
    connect?: car_statusWhereUniqueInput
    update?: XOR<XOR<car_statusUpdateToOneWithWhereWithoutCarInput, car_statusUpdateWithoutCarInput>, car_statusUncheckedUpdateWithoutCarInput>
  }

  export type car_modelUpdateOneRequiredWithoutCarNestedInput = {
    create?: XOR<car_modelCreateWithoutCarInput, car_modelUncheckedCreateWithoutCarInput>
    connectOrCreate?: car_modelCreateOrConnectWithoutCarInput
    upsert?: car_modelUpsertWithoutCarInput
    connect?: car_modelWhereUniqueInput
    update?: XOR<XOR<car_modelUpdateToOneWithWhereWithoutCarInput, car_modelUpdateWithoutCarInput>, car_modelUncheckedUpdateWithoutCarInput>
  }

  export type rentUpdateManyWithoutCarNestedInput = {
    create?: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput> | rentCreateWithoutCarInput[] | rentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: rentCreateOrConnectWithoutCarInput | rentCreateOrConnectWithoutCarInput[]
    upsert?: rentUpsertWithWhereUniqueWithoutCarInput | rentUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: rentCreateManyCarInputEnvelope
    set?: rentWhereUniqueInput | rentWhereUniqueInput[]
    disconnect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    delete?: rentWhereUniqueInput | rentWhereUniqueInput[]
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    update?: rentUpdateWithWhereUniqueWithoutCarInput | rentUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: rentUpdateManyWithWhereWithoutCarInput | rentUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: rentScalarWhereInput | rentScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutCarNestedInput = {
    create?: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput> | reviewCreateWithoutCarInput[] | reviewUncheckedCreateWithoutCarInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCarInput | reviewUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: reviewCreateManyCarInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCarInput | reviewUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCarInput | reviewUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type maintenance_logUpdateManyWithoutCarNestedInput = {
    create?: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput> | maintenance_logCreateWithoutCarInput[] | maintenance_logUncheckedCreateWithoutCarInput[]
    connectOrCreate?: maintenance_logCreateOrConnectWithoutCarInput | maintenance_logCreateOrConnectWithoutCarInput[]
    upsert?: maintenance_logUpsertWithWhereUniqueWithoutCarInput | maintenance_logUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: maintenance_logCreateManyCarInputEnvelope
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    update?: maintenance_logUpdateWithWhereUniqueWithoutCarInput | maintenance_logUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: maintenance_logUpdateManyWithWhereWithoutCarInput | maintenance_logUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rentUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput> | rentCreateWithoutCarInput[] | rentUncheckedCreateWithoutCarInput[]
    connectOrCreate?: rentCreateOrConnectWithoutCarInput | rentCreateOrConnectWithoutCarInput[]
    upsert?: rentUpsertWithWhereUniqueWithoutCarInput | rentUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: rentCreateManyCarInputEnvelope
    set?: rentWhereUniqueInput | rentWhereUniqueInput[]
    disconnect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    delete?: rentWhereUniqueInput | rentWhereUniqueInput[]
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    update?: rentUpdateWithWhereUniqueWithoutCarInput | rentUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: rentUpdateManyWithWhereWithoutCarInput | rentUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: rentScalarWhereInput | rentScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput> | reviewCreateWithoutCarInput[] | reviewUncheckedCreateWithoutCarInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutCarInput | reviewCreateOrConnectWithoutCarInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutCarInput | reviewUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: reviewCreateManyCarInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutCarInput | reviewUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutCarInput | reviewUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type maintenance_logUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput> | maintenance_logCreateWithoutCarInput[] | maintenance_logUncheckedCreateWithoutCarInput[]
    connectOrCreate?: maintenance_logCreateOrConnectWithoutCarInput | maintenance_logCreateOrConnectWithoutCarInput[]
    upsert?: maintenance_logUpsertWithWhereUniqueWithoutCarInput | maintenance_logUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: maintenance_logCreateManyCarInputEnvelope
    set?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    disconnect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    delete?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    connect?: maintenance_logWhereUniqueInput | maintenance_logWhereUniqueInput[]
    update?: maintenance_logUpdateWithWhereUniqueWithoutCarInput | maintenance_logUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: maintenance_logUpdateManyWithWhereWithoutCarInput | maintenance_logUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[]
  }

  export type carCreateNestedManyWithoutCar_locationInput = {
    create?: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput> | carCreateWithoutCar_locationInput[] | carUncheckedCreateWithoutCar_locationInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_locationInput | carCreateOrConnectWithoutCar_locationInput[]
    createMany?: carCreateManyCar_locationInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUncheckedCreateNestedManyWithoutCar_locationInput = {
    create?: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput> | carCreateWithoutCar_locationInput[] | carUncheckedCreateWithoutCar_locationInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_locationInput | carCreateOrConnectWithoutCar_locationInput[]
    createMany?: carCreateManyCar_locationInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUpdateManyWithoutCar_locationNestedInput = {
    create?: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput> | carCreateWithoutCar_locationInput[] | carUncheckedCreateWithoutCar_locationInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_locationInput | carCreateOrConnectWithoutCar_locationInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_locationInput | carUpsertWithWhereUniqueWithoutCar_locationInput[]
    createMany?: carCreateManyCar_locationInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_locationInput | carUpdateWithWhereUniqueWithoutCar_locationInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_locationInput | carUpdateManyWithWhereWithoutCar_locationInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type carUncheckedUpdateManyWithoutCar_locationNestedInput = {
    create?: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput> | carCreateWithoutCar_locationInput[] | carUncheckedCreateWithoutCar_locationInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_locationInput | carCreateOrConnectWithoutCar_locationInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_locationInput | carUpsertWithWhereUniqueWithoutCar_locationInput[]
    createMany?: carCreateManyCar_locationInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_locationInput | carUpdateWithWhereUniqueWithoutCar_locationInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_locationInput | carUpdateManyWithWhereWithoutCar_locationInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type carCreateNestedManyWithoutCar_modelInput = {
    create?: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput> | carCreateWithoutCar_modelInput[] | carUncheckedCreateWithoutCar_modelInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_modelInput | carCreateOrConnectWithoutCar_modelInput[]
    createMany?: carCreateManyCar_modelInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUncheckedCreateNestedManyWithoutCar_modelInput = {
    create?: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput> | carCreateWithoutCar_modelInput[] | carUncheckedCreateWithoutCar_modelInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_modelInput | carCreateOrConnectWithoutCar_modelInput[]
    createMany?: carCreateManyCar_modelInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUpdateManyWithoutCar_modelNestedInput = {
    create?: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput> | carCreateWithoutCar_modelInput[] | carUncheckedCreateWithoutCar_modelInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_modelInput | carCreateOrConnectWithoutCar_modelInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_modelInput | carUpsertWithWhereUniqueWithoutCar_modelInput[]
    createMany?: carCreateManyCar_modelInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_modelInput | carUpdateWithWhereUniqueWithoutCar_modelInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_modelInput | carUpdateManyWithWhereWithoutCar_modelInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type carUncheckedUpdateManyWithoutCar_modelNestedInput = {
    create?: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput> | carCreateWithoutCar_modelInput[] | carUncheckedCreateWithoutCar_modelInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_modelInput | carCreateOrConnectWithoutCar_modelInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_modelInput | carUpsertWithWhereUniqueWithoutCar_modelInput[]
    createMany?: carCreateManyCar_modelInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_modelInput | carUpdateWithWhereUniqueWithoutCar_modelInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_modelInput | carUpdateManyWithWhereWithoutCar_modelInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type carCreateNestedManyWithoutCar_statusInput = {
    create?: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput> | carCreateWithoutCar_statusInput[] | carUncheckedCreateWithoutCar_statusInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_statusInput | carCreateOrConnectWithoutCar_statusInput[]
    createMany?: carCreateManyCar_statusInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUncheckedCreateNestedManyWithoutCar_statusInput = {
    create?: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput> | carCreateWithoutCar_statusInput[] | carUncheckedCreateWithoutCar_statusInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_statusInput | carCreateOrConnectWithoutCar_statusInput[]
    createMany?: carCreateManyCar_statusInputEnvelope
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
  }

  export type carUpdateManyWithoutCar_statusNestedInput = {
    create?: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput> | carCreateWithoutCar_statusInput[] | carUncheckedCreateWithoutCar_statusInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_statusInput | carCreateOrConnectWithoutCar_statusInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_statusInput | carUpsertWithWhereUniqueWithoutCar_statusInput[]
    createMany?: carCreateManyCar_statusInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_statusInput | carUpdateWithWhereUniqueWithoutCar_statusInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_statusInput | carUpdateManyWithWhereWithoutCar_statusInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type carUncheckedUpdateManyWithoutCar_statusNestedInput = {
    create?: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput> | carCreateWithoutCar_statusInput[] | carUncheckedCreateWithoutCar_statusInput[]
    connectOrCreate?: carCreateOrConnectWithoutCar_statusInput | carCreateOrConnectWithoutCar_statusInput[]
    upsert?: carUpsertWithWhereUniqueWithoutCar_statusInput | carUpsertWithWhereUniqueWithoutCar_statusInput[]
    createMany?: carCreateManyCar_statusInputEnvelope
    set?: carWhereUniqueInput | carWhereUniqueInput[]
    disconnect?: carWhereUniqueInput | carWhereUniqueInput[]
    delete?: carWhereUniqueInput | carWhereUniqueInput[]
    connect?: carWhereUniqueInput | carWhereUniqueInput[]
    update?: carUpdateWithWhereUniqueWithoutCar_statusInput | carUpdateWithWhereUniqueWithoutCar_statusInput[]
    updateMany?: carUpdateManyWithWhereWithoutCar_statusInput | carUpdateManyWithWhereWithoutCar_statusInput[]
    deleteMany?: carScalarWhereInput | carScalarWhereInput[]
  }

  export type rentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<rentCreateWithoutPaymentInput, rentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentCreateOrConnectWithoutPaymentInput
    connect?: rentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type rentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<rentCreateWithoutPaymentInput, rentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: rentCreateOrConnectWithoutPaymentInput
    upsert?: rentUpsertWithoutPaymentInput
    connect?: rentWhereUniqueInput
    update?: XOR<XOR<rentUpdateToOneWithWhereWithoutPaymentInput, rentUpdateWithoutPaymentInput>, rentUncheckedUpdateWithoutPaymentInput>
  }

  export type paymentCreateNestedManyWithoutRentInput = {
    create?: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput> | paymentCreateWithoutRentInput[] | paymentUncheckedCreateWithoutRentInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentInput | paymentCreateOrConnectWithoutRentInput[]
    createMany?: paymentCreateManyRentInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type carCreateNestedOneWithoutRentInput = {
    create?: XOR<carCreateWithoutRentInput, carUncheckedCreateWithoutRentInput>
    connectOrCreate?: carCreateOrConnectWithoutRentInput
    connect?: carWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRentInput = {
    create?: XOR<usersCreateWithoutRentInput, usersUncheckedCreateWithoutRentInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentInput
    connect?: usersWhereUniqueInput
  }

  export type paymentUncheckedCreateNestedManyWithoutRentInput = {
    create?: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput> | paymentCreateWithoutRentInput[] | paymentUncheckedCreateWithoutRentInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentInput | paymentCreateOrConnectWithoutRentInput[]
    createMany?: paymentCreateManyRentInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type paymentUpdateManyWithoutRentNestedInput = {
    create?: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput> | paymentCreateWithoutRentInput[] | paymentUncheckedCreateWithoutRentInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentInput | paymentCreateOrConnectWithoutRentInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutRentInput | paymentUpsertWithWhereUniqueWithoutRentInput[]
    createMany?: paymentCreateManyRentInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutRentInput | paymentUpdateWithWhereUniqueWithoutRentInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutRentInput | paymentUpdateManyWithWhereWithoutRentInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type carUpdateOneRequiredWithoutRentNestedInput = {
    create?: XOR<carCreateWithoutRentInput, carUncheckedCreateWithoutRentInput>
    connectOrCreate?: carCreateOrConnectWithoutRentInput
    upsert?: carUpsertWithoutRentInput
    connect?: carWhereUniqueInput
    update?: XOR<XOR<carUpdateToOneWithWhereWithoutRentInput, carUpdateWithoutRentInput>, carUncheckedUpdateWithoutRentInput>
  }

  export type usersUpdateOneRequiredWithoutRentNestedInput = {
    create?: XOR<usersCreateWithoutRentInput, usersUncheckedCreateWithoutRentInput>
    connectOrCreate?: usersCreateOrConnectWithoutRentInput
    upsert?: usersUpsertWithoutRentInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRentInput, usersUpdateWithoutRentInput>, usersUncheckedUpdateWithoutRentInput>
  }

  export type paymentUncheckedUpdateManyWithoutRentNestedInput = {
    create?: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput> | paymentCreateWithoutRentInput[] | paymentUncheckedCreateWithoutRentInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutRentInput | paymentCreateOrConnectWithoutRentInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutRentInput | paymentUpsertWithWhereUniqueWithoutRentInput[]
    createMany?: paymentCreateManyRentInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutRentInput | paymentUpdateWithWhereUniqueWithoutRentInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutRentInput | paymentUpdateManyWithWhereWithoutRentInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type carCreateNestedOneWithoutReviewInput = {
    create?: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>
    connectOrCreate?: carCreateOrConnectWithoutReviewInput
    connect?: carWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutReviewInput = {
    create?: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewInput
    connect?: usersWhereUniqueInput
  }

  export type carUpdateOneWithoutReviewNestedInput = {
    create?: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>
    connectOrCreate?: carCreateOrConnectWithoutReviewInput
    upsert?: carUpsertWithoutReviewInput
    disconnect?: carWhereInput | boolean
    delete?: carWhereInput | boolean
    connect?: carWhereUniqueInput
    update?: XOR<XOR<carUpdateToOneWithWhereWithoutReviewInput, carUpdateWithoutReviewInput>, carUncheckedUpdateWithoutReviewInput>
  }

  export type usersUpdateOneWithoutReviewNestedInput = {
    create?: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: usersCreateOrConnectWithoutReviewInput
    upsert?: usersUpsertWithoutReviewInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutReviewInput, usersUpdateWithoutReviewInput>, usersUncheckedUpdateWithoutReviewInput>
  }

  export type rentCreateNestedManyWithoutUsersInput = {
    create?: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput> | rentCreateWithoutUsersInput[] | rentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentCreateOrConnectWithoutUsersInput | rentCreateOrConnectWithoutUsersInput[]
    createMany?: rentCreateManyUsersInputEnvelope
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
  }

  export type reviewCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type rentUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput> | rentCreateWithoutUsersInput[] | rentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentCreateOrConnectWithoutUsersInput | rentCreateOrConnectWithoutUsersInput[]
    createMany?: rentCreateManyUsersInputEnvelope
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
  }

  export type reviewUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type rentUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput> | rentCreateWithoutUsersInput[] | rentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentCreateOrConnectWithoutUsersInput | rentCreateOrConnectWithoutUsersInput[]
    upsert?: rentUpsertWithWhereUniqueWithoutUsersInput | rentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rentCreateManyUsersInputEnvelope
    set?: rentWhereUniqueInput | rentWhereUniqueInput[]
    disconnect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    delete?: rentWhereUniqueInput | rentWhereUniqueInput[]
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    update?: rentUpdateWithWhereUniqueWithoutUsersInput | rentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rentUpdateManyWithWhereWithoutUsersInput | rentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rentScalarWhereInput | rentScalarWhereInput[]
  }

  export type reviewUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUsersInput | reviewUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUsersInput | reviewUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUsersInput | reviewUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type rentUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput> | rentCreateWithoutUsersInput[] | rentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: rentCreateOrConnectWithoutUsersInput | rentCreateOrConnectWithoutUsersInput[]
    upsert?: rentUpsertWithWhereUniqueWithoutUsersInput | rentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: rentCreateManyUsersInputEnvelope
    set?: rentWhereUniqueInput | rentWhereUniqueInput[]
    disconnect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    delete?: rentWhereUniqueInput | rentWhereUniqueInput[]
    connect?: rentWhereUniqueInput | rentWhereUniqueInput[]
    update?: rentUpdateWithWhereUniqueWithoutUsersInput | rentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: rentUpdateManyWithWhereWithoutUsersInput | rentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: rentScalarWhereInput | rentScalarWhereInput[]
  }

  export type reviewUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput> | reviewCreateWithoutUsersInput[] | reviewUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: reviewCreateOrConnectWithoutUsersInput | reviewCreateOrConnectWithoutUsersInput[]
    upsert?: reviewUpsertWithWhereUniqueWithoutUsersInput | reviewUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: reviewCreateManyUsersInputEnvelope
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[]
    update?: reviewUpdateWithWhereUniqueWithoutUsersInput | reviewUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: reviewUpdateManyWithWhereWithoutUsersInput | reviewUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[]
  }

  export type carCreateNestedOneWithoutMaintenance_logInput = {
    create?: XOR<carCreateWithoutMaintenance_logInput, carUncheckedCreateWithoutMaintenance_logInput>
    connectOrCreate?: carCreateOrConnectWithoutMaintenance_logInput
    connect?: carWhereUniqueInput
  }

  export type carUpdateOneRequiredWithoutMaintenance_logNestedInput = {
    create?: XOR<carCreateWithoutMaintenance_logInput, carUncheckedCreateWithoutMaintenance_logInput>
    connectOrCreate?: carCreateOrConnectWithoutMaintenance_logInput
    upsert?: carUpsertWithoutMaintenance_logInput
    connect?: carWhereUniqueInput
    update?: XOR<XOR<carUpdateToOneWithWhereWithoutMaintenance_logInput, carUpdateWithoutMaintenance_logInput>, carUncheckedUpdateWithoutMaintenance_logInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type car_locationCreateWithoutCarInput = {
    city: string
    address: string
  }

  export type car_locationUncheckedCreateWithoutCarInput = {
    location_id?: number
    city: string
    address: string
  }

  export type car_locationCreateOrConnectWithoutCarInput = {
    where: car_locationWhereUniqueInput
    create: XOR<car_locationCreateWithoutCarInput, car_locationUncheckedCreateWithoutCarInput>
  }

  export type car_statusCreateWithoutCarInput = {
    status_name: string
  }

  export type car_statusUncheckedCreateWithoutCarInput = {
    status_id?: number
    status_name: string
  }

  export type car_statusCreateOrConnectWithoutCarInput = {
    where: car_statusWhereUniqueInput
    create: XOR<car_statusCreateWithoutCarInput, car_statusUncheckedCreateWithoutCarInput>
  }

  export type car_modelCreateWithoutCarInput = {
    brand: string
    model_name: string
  }

  export type car_modelUncheckedCreateWithoutCarInput = {
    model_id?: number
    brand: string
    model_name: string
  }

  export type car_modelCreateOrConnectWithoutCarInput = {
    where: car_modelWhereUniqueInput
    create: XOR<car_modelCreateWithoutCarInput, car_modelUncheckedCreateWithoutCarInput>
  }

  export type rentCreateWithoutCarInput = {
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    payment?: paymentCreateNestedManyWithoutRentInput
    users: usersCreateNestedOneWithoutRentInput
  }

  export type rentUncheckedCreateWithoutCarInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    user_id: number
    payment?: paymentUncheckedCreateNestedManyWithoutRentInput
  }

  export type rentCreateOrConnectWithoutCarInput = {
    where: rentWhereUniqueInput
    create: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput>
  }

  export type rentCreateManyCarInputEnvelope = {
    data: rentCreateManyCarInput | rentCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutCarInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutCarInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_id?: number | null
  }

  export type reviewCreateOrConnectWithoutCarInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
  }

  export type reviewCreateManyCarInputEnvelope = {
    data: reviewCreateManyCarInput | reviewCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type maintenance_logCreateWithoutCarInput = {
    description: string
    log_date?: Date | string
  }

  export type maintenance_logUncheckedCreateWithoutCarInput = {
    log_id?: number
    description: string
    log_date?: Date | string
  }

  export type maintenance_logCreateOrConnectWithoutCarInput = {
    where: maintenance_logWhereUniqueInput
    create: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput>
  }

  export type maintenance_logCreateManyCarInputEnvelope = {
    data: maintenance_logCreateManyCarInput | maintenance_logCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type car_locationUpsertWithoutCarInput = {
    update: XOR<car_locationUpdateWithoutCarInput, car_locationUncheckedUpdateWithoutCarInput>
    create: XOR<car_locationCreateWithoutCarInput, car_locationUncheckedCreateWithoutCarInput>
    where?: car_locationWhereInput
  }

  export type car_locationUpdateToOneWithWhereWithoutCarInput = {
    where?: car_locationWhereInput
    data: XOR<car_locationUpdateWithoutCarInput, car_locationUncheckedUpdateWithoutCarInput>
  }

  export type car_locationUpdateWithoutCarInput = {
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type car_locationUncheckedUpdateWithoutCarInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type car_statusUpsertWithoutCarInput = {
    update: XOR<car_statusUpdateWithoutCarInput, car_statusUncheckedUpdateWithoutCarInput>
    create: XOR<car_statusCreateWithoutCarInput, car_statusUncheckedCreateWithoutCarInput>
    where?: car_statusWhereInput
  }

  export type car_statusUpdateToOneWithWhereWithoutCarInput = {
    where?: car_statusWhereInput
    data: XOR<car_statusUpdateWithoutCarInput, car_statusUncheckedUpdateWithoutCarInput>
  }

  export type car_statusUpdateWithoutCarInput = {
    status_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_statusUncheckedUpdateWithoutCarInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_modelUpsertWithoutCarInput = {
    update: XOR<car_modelUpdateWithoutCarInput, car_modelUncheckedUpdateWithoutCarInput>
    create: XOR<car_modelCreateWithoutCarInput, car_modelUncheckedCreateWithoutCarInput>
    where?: car_modelWhereInput
  }

  export type car_modelUpdateToOneWithWhereWithoutCarInput = {
    where?: car_modelWhereInput
    data: XOR<car_modelUpdateWithoutCarInput, car_modelUncheckedUpdateWithoutCarInput>
  }

  export type car_modelUpdateWithoutCarInput = {
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
  }

  export type car_modelUncheckedUpdateWithoutCarInput = {
    model_id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
  }

  export type rentUpsertWithWhereUniqueWithoutCarInput = {
    where: rentWhereUniqueInput
    update: XOR<rentUpdateWithoutCarInput, rentUncheckedUpdateWithoutCarInput>
    create: XOR<rentCreateWithoutCarInput, rentUncheckedCreateWithoutCarInput>
  }

  export type rentUpdateWithWhereUniqueWithoutCarInput = {
    where: rentWhereUniqueInput
    data: XOR<rentUpdateWithoutCarInput, rentUncheckedUpdateWithoutCarInput>
  }

  export type rentUpdateManyWithWhereWithoutCarInput = {
    where: rentScalarWhereInput
    data: XOR<rentUpdateManyMutationInput, rentUncheckedUpdateManyWithoutCarInput>
  }

  export type rentScalarWhereInput = {
    AND?: rentScalarWhereInput | rentScalarWhereInput[]
    OR?: rentScalarWhereInput[]
    NOT?: rentScalarWhereInput | rentScalarWhereInput[]
    rent_id?: IntFilter<"rent"> | number
    start_time?: DateTimeFilter<"rent"> | Date | string
    end_time?: DateTimeNullableFilter<"rent"> | Date | string | null
    total_cost?: DecimalNullableFilter<"rent"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"rent"> | string | null
    user_id?: IntFilter<"rent"> | number
    car_id?: IntFilter<"rent"> | number
  }

  export type reviewUpsertWithWhereUniqueWithoutCarInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutCarInput, reviewUncheckedUpdateWithoutCarInput>
    create: XOR<reviewCreateWithoutCarInput, reviewUncheckedCreateWithoutCarInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutCarInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutCarInput, reviewUncheckedUpdateWithoutCarInput>
  }

  export type reviewUpdateManyWithWhereWithoutCarInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutCarInput>
  }

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[]
    OR?: reviewScalarWhereInput[]
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[]
    review_id?: IntFilter<"review"> | number
    rating?: IntFilter<"review"> | number
    comment?: StringNullableFilter<"review"> | string | null
    created_at?: DateTimeNullableFilter<"review"> | Date | string | null
    user_id?: IntNullableFilter<"review"> | number | null
    car_id?: IntNullableFilter<"review"> | number | null
  }

  export type maintenance_logUpsertWithWhereUniqueWithoutCarInput = {
    where: maintenance_logWhereUniqueInput
    update: XOR<maintenance_logUpdateWithoutCarInput, maintenance_logUncheckedUpdateWithoutCarInput>
    create: XOR<maintenance_logCreateWithoutCarInput, maintenance_logUncheckedCreateWithoutCarInput>
  }

  export type maintenance_logUpdateWithWhereUniqueWithoutCarInput = {
    where: maintenance_logWhereUniqueInput
    data: XOR<maintenance_logUpdateWithoutCarInput, maintenance_logUncheckedUpdateWithoutCarInput>
  }

  export type maintenance_logUpdateManyWithWhereWithoutCarInput = {
    where: maintenance_logScalarWhereInput
    data: XOR<maintenance_logUpdateManyMutationInput, maintenance_logUncheckedUpdateManyWithoutCarInput>
  }

  export type maintenance_logScalarWhereInput = {
    AND?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[]
    OR?: maintenance_logScalarWhereInput[]
    NOT?: maintenance_logScalarWhereInput | maintenance_logScalarWhereInput[]
    log_id?: IntFilter<"maintenance_log"> | number
    car_id?: IntFilter<"maintenance_log"> | number
    description?: StringFilter<"maintenance_log"> | string
    log_date?: DateTimeFilter<"maintenance_log"> | Date | string
  }

  export type carCreateWithoutCar_locationInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_status?: car_statusCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutCar_locationInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    status_id?: number | null
    model_id: number
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutCar_locationInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput>
  }

  export type carCreateManyCar_locationInputEnvelope = {
    data: carCreateManyCar_locationInput | carCreateManyCar_locationInput[]
    skipDuplicates?: boolean
  }

  export type carUpsertWithWhereUniqueWithoutCar_locationInput = {
    where: carWhereUniqueInput
    update: XOR<carUpdateWithoutCar_locationInput, carUncheckedUpdateWithoutCar_locationInput>
    create: XOR<carCreateWithoutCar_locationInput, carUncheckedCreateWithoutCar_locationInput>
  }

  export type carUpdateWithWhereUniqueWithoutCar_locationInput = {
    where: carWhereUniqueInput
    data: XOR<carUpdateWithoutCar_locationInput, carUncheckedUpdateWithoutCar_locationInput>
  }

  export type carUpdateManyWithWhereWithoutCar_locationInput = {
    where: carScalarWhereInput
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyWithoutCar_locationInput>
  }

  export type carScalarWhereInput = {
    AND?: carScalarWhereInput | carScalarWhereInput[]
    OR?: carScalarWhereInput[]
    NOT?: carScalarWhereInput | carScalarWhereInput[]
    car_id?: IntFilter<"car"> | number
    license_plate?: StringFilter<"car"> | string
    year?: IntNullableFilter<"car"> | number | null
    price_per_hour?: DecimalFilter<"car"> | Decimal | DecimalJsLike | number | string
    location_id?: IntNullableFilter<"car"> | number | null
    status_id?: IntNullableFilter<"car"> | number | null
    model_id?: IntFilter<"car"> | number
  }

  export type carCreateWithoutCar_modelInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_status?: car_statusCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutCar_modelInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutCar_modelInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput>
  }

  export type carCreateManyCar_modelInputEnvelope = {
    data: carCreateManyCar_modelInput | carCreateManyCar_modelInput[]
    skipDuplicates?: boolean
  }

  export type carUpsertWithWhereUniqueWithoutCar_modelInput = {
    where: carWhereUniqueInput
    update: XOR<carUpdateWithoutCar_modelInput, carUncheckedUpdateWithoutCar_modelInput>
    create: XOR<carCreateWithoutCar_modelInput, carUncheckedCreateWithoutCar_modelInput>
  }

  export type carUpdateWithWhereUniqueWithoutCar_modelInput = {
    where: carWhereUniqueInput
    data: XOR<carUpdateWithoutCar_modelInput, carUncheckedUpdateWithoutCar_modelInput>
  }

  export type carUpdateManyWithWhereWithoutCar_modelInput = {
    where: carScalarWhereInput
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyWithoutCar_modelInput>
  }

  export type carCreateWithoutCar_statusInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutCar_statusInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    model_id: number
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutCar_statusInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput>
  }

  export type carCreateManyCar_statusInputEnvelope = {
    data: carCreateManyCar_statusInput | carCreateManyCar_statusInput[]
    skipDuplicates?: boolean
  }

  export type carUpsertWithWhereUniqueWithoutCar_statusInput = {
    where: carWhereUniqueInput
    update: XOR<carUpdateWithoutCar_statusInput, carUncheckedUpdateWithoutCar_statusInput>
    create: XOR<carCreateWithoutCar_statusInput, carUncheckedCreateWithoutCar_statusInput>
  }

  export type carUpdateWithWhereUniqueWithoutCar_statusInput = {
    where: carWhereUniqueInput
    data: XOR<carUpdateWithoutCar_statusInput, carUncheckedUpdateWithoutCar_statusInput>
  }

  export type carUpdateManyWithWhereWithoutCar_statusInput = {
    where: carScalarWhereInput
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyWithoutCar_statusInput>
  }

  export type rentCreateWithoutPaymentInput = {
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    car: carCreateNestedOneWithoutRentInput
    users: usersCreateNestedOneWithoutRentInput
  }

  export type rentUncheckedCreateWithoutPaymentInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    user_id: number
    car_id: number
  }

  export type rentCreateOrConnectWithoutPaymentInput = {
    where: rentWhereUniqueInput
    create: XOR<rentCreateWithoutPaymentInput, rentUncheckedCreateWithoutPaymentInput>
  }

  export type rentUpsertWithoutPaymentInput = {
    update: XOR<rentUpdateWithoutPaymentInput, rentUncheckedUpdateWithoutPaymentInput>
    create: XOR<rentCreateWithoutPaymentInput, rentUncheckedCreateWithoutPaymentInput>
    where?: rentWhereInput
  }

  export type rentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: rentWhereInput
    data: XOR<rentUpdateWithoutPaymentInput, rentUncheckedUpdateWithoutPaymentInput>
  }

  export type rentUpdateWithoutPaymentInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    car?: carUpdateOneRequiredWithoutRentNestedInput
    users?: usersUpdateOneRequiredWithoutRentNestedInput
  }

  export type rentUncheckedUpdateWithoutPaymentInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    car_id?: IntFieldUpdateOperationsInput | number
  }

  export type paymentCreateWithoutRentInput = {
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
  }

  export type paymentUncheckedCreateWithoutRentInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
  }

  export type paymentCreateOrConnectWithoutRentInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput>
  }

  export type paymentCreateManyRentInputEnvelope = {
    data: paymentCreateManyRentInput | paymentCreateManyRentInput[]
    skipDuplicates?: boolean
  }

  export type carCreateWithoutRentInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_status?: car_statusCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutRentInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    model_id: number
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutRentInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutRentInput, carUncheckedCreateWithoutRentInput>
  }

  export type usersCreateWithoutRentInput = {
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    review?: reviewCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRentInput = {
    user_id?: number
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    review?: reviewUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRentInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRentInput, usersUncheckedCreateWithoutRentInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutRentInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutRentInput, paymentUncheckedUpdateWithoutRentInput>
    create: XOR<paymentCreateWithoutRentInput, paymentUncheckedCreateWithoutRentInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutRentInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutRentInput, paymentUncheckedUpdateWithoutRentInput>
  }

  export type paymentUpdateManyWithWhereWithoutRentInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutRentInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    payment_id?: IntFilter<"payment"> | number
    amount?: DecimalFilter<"payment"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"payment"> | string
    payment_date?: DateTimeNullableFilter<"payment"> | Date | string | null
    status?: StringNullableFilter<"payment"> | string | null
    rent_id?: IntFilter<"payment"> | number
  }

  export type carUpsertWithoutRentInput = {
    update: XOR<carUpdateWithoutRentInput, carUncheckedUpdateWithoutRentInput>
    create: XOR<carCreateWithoutRentInput, carUncheckedCreateWithoutRentInput>
    where?: carWhereInput
  }

  export type carUpdateToOneWithWhereWithoutRentInput = {
    where?: carWhereInput
    data: XOR<carUpdateWithoutRentInput, carUncheckedUpdateWithoutRentInput>
  }

  export type carUpdateWithoutRentInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutRentInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type usersUpsertWithoutRentInput = {
    update: XOR<usersUpdateWithoutRentInput, usersUncheckedUpdateWithoutRentInput>
    create: XOR<usersCreateWithoutRentInput, usersUncheckedCreateWithoutRentInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRentInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRentInput, usersUncheckedUpdateWithoutRentInput>
  }

  export type usersUpdateWithoutRentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    review?: reviewUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    review?: reviewUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type carCreateWithoutReviewInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_status?: car_statusCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutReviewInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    model_id: number
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    maintenance_log?: maintenance_logUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutReviewInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>
  }

  export type usersCreateWithoutReviewInput = {
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    rent?: rentCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutReviewInput = {
    user_id?: number
    name: string
    email: string
    phone_number: string
    driver_license_number: string
    created_at?: Date | string | null
    is_vip?: boolean
    rent?: rentUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutReviewInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
  }

  export type carUpsertWithoutReviewInput = {
    update: XOR<carUpdateWithoutReviewInput, carUncheckedUpdateWithoutReviewInput>
    create: XOR<carCreateWithoutReviewInput, carUncheckedCreateWithoutReviewInput>
    where?: carWhereInput
  }

  export type carUpdateToOneWithWhereWithoutReviewInput = {
    where?: carWhereInput
    data: XOR<carUpdateWithoutReviewInput, carUncheckedUpdateWithoutReviewInput>
  }

  export type carUpdateWithoutReviewInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutReviewInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type usersUpsertWithoutReviewInput = {
    update: XOR<usersUpdateWithoutReviewInput, usersUncheckedUpdateWithoutReviewInput>
    create: XOR<usersCreateWithoutReviewInput, usersUncheckedCreateWithoutReviewInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutReviewInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutReviewInput, usersUncheckedUpdateWithoutReviewInput>
  }

  export type usersUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutReviewInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    driver_license_number?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_vip?: BoolFieldUpdateOperationsInput | boolean
    rent?: rentUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type rentCreateWithoutUsersInput = {
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    payment?: paymentCreateNestedManyWithoutRentInput
    car: carCreateNestedOneWithoutRentInput
  }

  export type rentUncheckedCreateWithoutUsersInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    car_id: number
    payment?: paymentUncheckedCreateNestedManyWithoutRentInput
  }

  export type rentCreateOrConnectWithoutUsersInput = {
    where: rentWhereUniqueInput
    create: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput>
  }

  export type rentCreateManyUsersInputEnvelope = {
    data: rentCreateManyUsersInput | rentCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type reviewCreateWithoutUsersInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    car?: carCreateNestedOneWithoutReviewInput
  }

  export type reviewUncheckedCreateWithoutUsersInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    car_id?: number | null
  }

  export type reviewCreateOrConnectWithoutUsersInput = {
    where: reviewWhereUniqueInput
    create: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput>
  }

  export type reviewCreateManyUsersInputEnvelope = {
    data: reviewCreateManyUsersInput | reviewCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type rentUpsertWithWhereUniqueWithoutUsersInput = {
    where: rentWhereUniqueInput
    update: XOR<rentUpdateWithoutUsersInput, rentUncheckedUpdateWithoutUsersInput>
    create: XOR<rentCreateWithoutUsersInput, rentUncheckedCreateWithoutUsersInput>
  }

  export type rentUpdateWithWhereUniqueWithoutUsersInput = {
    where: rentWhereUniqueInput
    data: XOR<rentUpdateWithoutUsersInput, rentUncheckedUpdateWithoutUsersInput>
  }

  export type rentUpdateManyWithWhereWithoutUsersInput = {
    where: rentScalarWhereInput
    data: XOR<rentUpdateManyMutationInput, rentUncheckedUpdateManyWithoutUsersInput>
  }

  export type reviewUpsertWithWhereUniqueWithoutUsersInput = {
    where: reviewWhereUniqueInput
    update: XOR<reviewUpdateWithoutUsersInput, reviewUncheckedUpdateWithoutUsersInput>
    create: XOR<reviewCreateWithoutUsersInput, reviewUncheckedCreateWithoutUsersInput>
  }

  export type reviewUpdateWithWhereUniqueWithoutUsersInput = {
    where: reviewWhereUniqueInput
    data: XOR<reviewUpdateWithoutUsersInput, reviewUncheckedUpdateWithoutUsersInput>
  }

  export type reviewUpdateManyWithWhereWithoutUsersInput = {
    where: reviewScalarWhereInput
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUsersInput>
  }

  export type carCreateWithoutMaintenance_logInput = {
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    car_location?: car_locationCreateNestedOneWithoutCarInput
    car_status?: car_statusCreateNestedOneWithoutCarInput
    car_model: car_modelCreateNestedOneWithoutCarInput
    rent?: rentCreateNestedManyWithoutCarInput
    review?: reviewCreateNestedManyWithoutCarInput
  }

  export type carUncheckedCreateWithoutMaintenance_logInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
    model_id: number
    rent?: rentUncheckedCreateNestedManyWithoutCarInput
    review?: reviewUncheckedCreateNestedManyWithoutCarInput
  }

  export type carCreateOrConnectWithoutMaintenance_logInput = {
    where: carWhereUniqueInput
    create: XOR<carCreateWithoutMaintenance_logInput, carUncheckedCreateWithoutMaintenance_logInput>
  }

  export type carUpsertWithoutMaintenance_logInput = {
    update: XOR<carUpdateWithoutMaintenance_logInput, carUncheckedUpdateWithoutMaintenance_logInput>
    create: XOR<carCreateWithoutMaintenance_logInput, carUncheckedCreateWithoutMaintenance_logInput>
    where?: carWhereInput
  }

  export type carUpdateToOneWithWhereWithoutMaintenance_logInput = {
    where?: carWhereInput
    data: XOR<carUpdateWithoutMaintenance_logInput, carUncheckedUpdateWithoutMaintenance_logInput>
  }

  export type carUpdateWithoutMaintenance_logInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutMaintenance_logInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
  }

  export type rentCreateManyCarInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    user_id: number
  }

  export type reviewCreateManyCarInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    user_id?: number | null
  }

  export type maintenance_logCreateManyCarInput = {
    log_id?: number
    description: string
    log_date?: Date | string
  }

  export type rentUpdateWithoutCarInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutRentNestedInput
    users?: usersUpdateOneRequiredWithoutRentNestedInput
  }

  export type rentUncheckedUpdateWithoutCarInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    payment?: paymentUncheckedUpdateManyWithoutRentNestedInput
  }

  export type rentUncheckedUpdateManyWithoutCarInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutCarInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutCarInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewUncheckedUpdateManyWithoutCarInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type maintenance_logUpdateWithoutCarInput = {
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_logUncheckedUpdateWithoutCarInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maintenance_logUncheckedUpdateManyWithoutCarInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carCreateManyCar_locationInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    status_id?: number | null
    model_id: number
  }

  export type carUpdateWithoutCar_locationInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutCar_locationInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateManyWithoutCar_locationInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
  }

  export type carCreateManyCar_modelInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    status_id?: number | null
  }

  export type carUpdateWithoutCar_modelInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_status?: car_statusUpdateOneWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutCar_modelInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateManyWithoutCar_modelInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    status_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type carCreateManyCar_statusInput = {
    car_id?: number
    license_plate: string
    year?: number | null
    price_per_hour: Decimal | DecimalJsLike | number | string
    location_id?: number | null
    model_id: number
  }

  export type carUpdateWithoutCar_statusInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    car_location?: car_locationUpdateOneWithoutCarNestedInput
    car_model?: car_modelUpdateOneRequiredWithoutCarNestedInput
    rent?: rentUpdateManyWithoutCarNestedInput
    review?: reviewUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateWithoutCar_statusInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
    rent?: rentUncheckedUpdateManyWithoutCarNestedInput
    review?: reviewUncheckedUpdateManyWithoutCarNestedInput
    maintenance_log?: maintenance_logUncheckedUpdateManyWithoutCarNestedInput
  }

  export type carUncheckedUpdateManyWithoutCar_statusInput = {
    car_id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    price_per_hour?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location_id?: NullableIntFieldUpdateOperationsInput | number | null
    model_id?: IntFieldUpdateOperationsInput | number
  }

  export type paymentCreateManyRentInput = {
    payment_id?: number
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_date?: Date | string | null
    status?: string | null
  }

  export type paymentUpdateWithoutRentInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentUncheckedUpdateWithoutRentInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type paymentUncheckedUpdateManyWithoutRentInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type rentCreateManyUsersInput = {
    rent_id?: number
    start_time: Date | string
    end_time?: Date | string | null
    total_cost?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    car_id: number
  }

  export type reviewCreateManyUsersInput = {
    review_id?: number
    rating: number
    comment?: string | null
    created_at?: Date | string | null
    car_id?: number | null
  }

  export type rentUpdateWithoutUsersInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payment?: paymentUpdateManyWithoutRentNestedInput
    car?: carUpdateOneRequiredWithoutRentNestedInput
  }

  export type rentUncheckedUpdateWithoutUsersInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: IntFieldUpdateOperationsInput | number
    payment?: paymentUncheckedUpdateManyWithoutRentNestedInput
  }

  export type rentUncheckedUpdateManyWithoutUsersInput = {
    rent_id?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    car_id?: IntFieldUpdateOperationsInput | number
  }

  export type reviewUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    car?: carUpdateOneWithoutReviewNestedInput
  }

  export type reviewUncheckedUpdateWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    car_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type reviewUncheckedUpdateManyWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    car_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}